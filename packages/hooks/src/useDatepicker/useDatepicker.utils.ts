import isWithinRange from 'date-fns/isWithinInterval'
import isSameDay from 'date-fns/isSameDay'
import eachDay from 'date-fns/eachDayOfInterval'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'
import startOfToday from 'date-fns/startOfToday'
import startOfMonth from 'date-fns/startOfMonth'
import addMonths from 'date-fns/addMonths'
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import compareAsc from 'date-fns/compareAsc'

export const isInUnavailableDates = (unavailableDates: Date[] = [], date: Date) => {
  return unavailableDates.some(_date => isSameDay(date, _date))
}

export function getDateInterval(dateA: Date, dateB: Date) {
  return compareAsc(dateA, dateB) > 0 ? {start: dateB, end: dateA} : {start: dateA, end: dateB}
}

export function isDateInInterval(date: Date, dateA: Date, dateB: Date) {
  return isWithinRange(date, getDateInterval(dateA, dateB))
}

export function isDateSelected(date: Date, startDate: Date | null, endDate: Date | null) {
  if (startDate && endDate) {
    return isDateInInterval(date, startDate, endDate)
  }

  return false
}

export function isFirstOrLastSelectedDate(
  date: Date,
  startDate: Date | null,
  endDate: Date | null,
) {
  return !!((startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate)))
}

export function isStartDate(date: Date, startDate: Date | null) {
  return !!(startDate && isSameDay(date, startDate))
}

export function isEndDate(date: Date, endDate: Date | null) {
  return !!(endDate && isSameDay(date, endDate))
}

interface IsDateBlockedProps {
  date: Date
  startDate: Date | null
  endDate: Date | null
  minBookingDays?: number
  minBookingDate?: Date
  maxBookingDate?: Date
  isDateBlockedFn?: (date?: Date) => boolean
  unavailableDates?: Date[]
}
export function isDateBlocked({
  date,
  minBookingDate,
  maxBookingDate,
  isDateBlockedFn,
  startDate,
  endDate,
  minBookingDays = 1,
  unavailableDates = [],
}: IsDateBlockedProps) {
  const compareMinDate = minBookingDate
    ? new Date(
        minBookingDate.getFullYear(),
        minBookingDate.getMonth(),
        minBookingDate.getDate(),
        0,
        0,
        0,
      )
    : minBookingDate
  const compareMaxDate = maxBookingDate
    ? new Date(
        maxBookingDate.getFullYear(),
        maxBookingDate.getMonth(),
        maxBookingDate.getDate(),
        0,
        0,
        0,
      )
    : maxBookingDate

  return !!(
    isInUnavailableDates(unavailableDates, date) ||
    (compareMinDate && isBefore(date, compareMinDate)) ||
    (compareMaxDate && isAfter(date, compareMaxDate)) ||
    (startDate &&
      !endDate &&
      minBookingDays > 1 &&
      isDateInInterval(date, startDate, addDays(startDate, minBookingDays - 2))) ||
    (isDateBlockedFn && isDateBlockedFn(date))
  )
}

export interface MonthType {
  year: number
  month: number
  date: Date
}

export function getDateMonthAndYear(date: Date): MonthType {
  const today = startOfMonth(date)
  const year = getYear(today)
  const month = getMonth(today)
  return {
    year,
    month,
    date: today,
  }
}

export function getCurrentYearMonthAndDate(): MonthType {
  return getDateMonthAndYear(startOfToday())
}

export function getInitialMonths(numberOfMonths: number, startDate: Date | null): MonthType[] {
  const firstMonth = startDate ? getDateMonthAndYear(startDate) : getCurrentYearMonthAndDate()
  let prevMonthDate = firstMonth.date
  let months = [firstMonth]

  if (numberOfMonths > 1) {
    months = Array.from(Array(numberOfMonths - 1).keys()).reduce((m: MonthType[]) => {
      prevMonthDate = addMonths(m[m.length - 1].date, 1)
      return m.concat([getDateMonthAndYear(prevMonthDate)])
    }, months)
  }

  return months
}

export function getNextActiveMonth(
  activeMonth: MonthType[],
  numberOfMonths: number,
  counter: number,
  step?: number,
): MonthType[] {
  let prevMonth

  if (step) {
    prevMonth = counter > 0 ? 0 : activeMonth.length - step
  } else {
    prevMonth = counter > 0 ? activeMonth.length - 1 : 0
  }

  let prevMonthDate = activeMonth[prevMonth].date

  return Array.from(Array(numberOfMonths).keys()).reduce((m: MonthType[]) => {
    if (m.length === 0) {
      prevMonthDate = addMonths(prevMonthDate, counter)
    } else {
      prevMonthDate = addMonths(prevMonthDate, counter >= 0 ? 1 : -1)
    }

    return counter > 0
      ? m.concat([getDateMonthAndYear(prevMonthDate)])
      : [getDateMonthAndYear(prevMonthDate)].concat(m)
  }, [])
}

export type FormatFunction = (date: Date) => string
export function getInputValue(
  date: Date | null,
  displayFormat: string | FormatFunction,
  defaultValue: string,
) {
  if (date && typeof displayFormat === 'string') {
    return format(date, displayFormat)
  } else if (date && typeof displayFormat === 'function') {
    return displayFormat(date)
  } else {
    return defaultValue
  }
}

export interface CanSelectRangeProps {
  startDate: Date
  endDate: Date | null
  isDateBlocked(date: Date): boolean
  minBookingDays: number
  exactMinBookingDays?: boolean
  minBookingDate?: Date
  maxBookingDate?: Date
}
export function canSelectRange({
  startDate,
  endDate,
  isDateBlocked,
  minBookingDays,
  exactMinBookingDays,
  minBookingDate,
  maxBookingDate,
}: CanSelectRangeProps) {
  const isStartDateAfterOrEqualMinDate = minBookingDate
    ? !isBefore(startDate, addDays(minBookingDate, -1))
    : true
  const isStartDateBeforeOrEqualMaxDate = maxBookingDate
    ? !isAfter(addDays(startDate, minBookingDays - 1), maxBookingDate)
    : true

  if (startDate && minBookingDays === 1 && !endDate && !isDateBlocked(startDate)) {
    return true
  } else if (
    (startDate && minBookingDays > 1 && !endDate && !exactMinBookingDays) ||
    (startDate &&
      minBookingDays > 0 &&
      exactMinBookingDays &&
      isStartDateAfterOrEqualMinDate &&
      isStartDateBeforeOrEqualMaxDate) ||
    (startDate && minBookingDays > 0 && exactMinBookingDays && !minBookingDate && !maxBookingDate)
  ) {
    return !eachDay(getDateInterval(startDate, addDays(startDate, minBookingDays - 1))).some(d =>
      isDateBlocked(d),
    )
  } else if (startDate && endDate && !exactMinBookingDays) {
    const minBookingDaysDate = addDays(startDate, minBookingDays - 1)

    if (isBefore(endDate, minBookingDaysDate)) {
      return false
    }

    return !eachDay(getDateInterval(startDate, endDate)).some(d => isDateBlocked(d))
  }

  return false
}

export interface IsDateHoveredProps {
  startDate: Date | null
  endDate: Date | null
  date: Date
  isDateBlocked(date: Date): boolean
  hoveredDate: Date | null
  minBookingDays: number
  exactMinBookingDays: boolean
}
export function isDateHovered({
  date,
  startDate,
  endDate,
  isDateBlocked,
  hoveredDate,
  minBookingDays,
  exactMinBookingDays,
}: IsDateHoveredProps) {
  if (
    // exact min booking days
    hoveredDate &&
    minBookingDays > 1 &&
    exactMinBookingDays &&
    isDateInInterval(date, hoveredDate, addDays(hoveredDate, minBookingDays - 1))
  ) {
    return !eachDay(
      getDateInterval(hoveredDate, addDays(hoveredDate, minBookingDays - 1)),
    ).some(d => isDateBlocked(d))
  } else if (
    // min booking days
    startDate &&
    !endDate &&
    hoveredDate &&
    isDateInInterval(date, startDate, addDays(startDate, minBookingDays - 1)) &&
    isSameDay(startDate, hoveredDate) &&
    minBookingDays > 1
  ) {
    return !eachDay(getDateInterval(startDate, addDays(startDate, minBookingDays - 1))).some(d =>
      isDateBlocked(d),
    )
  } else if (
    // normal
    startDate &&
    !endDate &&
    hoveredDate &&
    isDateInInterval(date, startDate, hoveredDate)
  ) {
    return !eachDay(getDateInterval(startDate, hoveredDate)).some(d => isDateBlocked(d))
  }

  return false
}
