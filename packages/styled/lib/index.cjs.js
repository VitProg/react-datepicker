'use strict'

Object.defineProperty(exports, '__esModule', {value: true})

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = require('react')
var React__default = _interopDefault(React)
var styled = require('styled-components')
var styled__default = _interopDefault(styled)

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds',
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds',
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes',
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes',
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours',
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours',
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days',
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks',
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks',
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months',
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months',
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years',
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years',
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years',
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years',
  },
}

function formatDistance(token, count, options) {
  options = options || {}
  var result

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      return result + ' ago'
    }
  }

  return result
}

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {}
    var width = options.width ? String(options.width) : args.defaultWidth
    var format = args.formats[width] || args.formats[args.defaultWidth]
    return format
  }
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy',
}
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a',
}
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}',
}
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full',
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full',
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full',
  }),
}
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P',
}

function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {}
    var context = options.context ? String(options.context) : 'standalone'
    var valuesArray

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth
      var width = options.width ? String(options.width) : defaultWidth
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth]
    } else {
      var _defaultWidth = args.defaultWidth

      var _width = options.width ? String(options.width) : args.defaultWidth

      valuesArray = args.values[_width] || args.values[_defaultWidth]
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex
    return valuesArray[index]
  }
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini'],
}
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'], // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
}
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
}
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
}
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night',
  },
}

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber) // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'

      case 2:
        return number + 'nd'

      case 3:
        return number + 'rd'
    }
  }

  return number + 'th'
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    },
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString)
    var options = dirtyOptions || {}
    var matchResult = string.match(args.matchPattern)

    if (!matchResult) {
      return null
    }

    var matchedString = matchResult[0]
    var parseResult = string.match(args.parsePattern)

    if (!parseResult) {
      return null
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0]
    value = options.valueCallback ? options.valueCallback(value) : value
    return {
      value: value,
      rest: string.slice(matchedString.length),
    }
  }
}

function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString)
    var options = dirtyOptions || {}
    var width = options.width
    var matchPattern =
      (width && args.matchPatterns[width]) || args.matchPatterns[args.defaultMatchWidth]
    var matchResult = string.match(matchPattern)

    if (!matchResult) {
      return null
    }

    var matchedString = matchResult[0]
    var parsePatterns =
      (width && args.parsePatterns[width]) || args.parsePatterns[args.defaultParseWidth]
    var value

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString)
      })
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString)
      })
    }

    value = args.valueCallback ? args.valueCallback(value) : value
    value = options.valueCallback ? options.valueCallback(value) : value
    return {
      value: value,
      rest: string.slice(matchedString.length),
    }
  }
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key
    }
  }
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i
var parseOrdinalNumberPattern = /\d+/i
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
}
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
}
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
}
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
}
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
}
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
}
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
}
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
}
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
}
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    },
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    },
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any',
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0,
    /* Sunday */
    firstWeekContainsDate: 1,
  },
}

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN
  }

  var number = Number(dirtyNumber)

  if (isNaN(number)) {
    return number
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number)
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(
      required +
        ' argument' +
        (required > 1 ? 's' : '') +
        ' required, but only ' +
        args.length +
        ' present',
    )
  }
}
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments)
  var argStr = Object.prototype.toString.call(argument) // Clone the date

  if (argument instanceof Date || (typeof argument === 'object' && argStr === '[object Date]')) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument)
  } else {
    if (
      (typeof argument === 'string' || argStr === '[object String]') &&
      typeof console !== 'undefined'
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule",
      ) // eslint-disable-next-line no-console

      console.warn(new Error().stack)
    }

    return new Date(NaN)
  }
}
/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)
  var timestamp = toDate(dirtyDate).getTime()
  var amount = toInteger(dirtyAmount)
  return new Date(timestamp + amount)
}
/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)
  var amount = toInteger(dirtyAmount)
  return addMilliseconds(dirtyDate, -amount)
}

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined')
  }

  dirtyObject = dirtyObject || {}

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property]
    }
  }

  return target
}

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short',
      })

    case 'PP':
      return formatLong.date({
        width: 'medium',
      })

    case 'PPP':
      return formatLong.date({
        width: 'long',
      })

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full',
      })
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short',
      })

    case 'pp':
      return formatLong.time({
        width: 'medium',
      })

    case 'ppp':
      return formatLong.time({
        width: 'long',
      })

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full',
      })
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/)
  var datePattern = matchResult[1]
  var timePattern = matchResult[2]

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong)
  }

  var dateTimeFormat

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short',
      })
      break

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium',
      })
      break

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long',
      })
      break

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full',
      })
      break
  }

  return dateTimeFormat
    .replace('{{date}}', dateLongFormatter(datePattern, formatLong))
    .replace('{{time}}', timeLongFormatter(timePattern, formatLong))
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
}
var MILLISECONDS_IN_MINUTE = 60000

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */

function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime())
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset())
  date.setSeconds(0, 0)
  var hasNegativeUTCOffset = baseTimezoneOffset > 0
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset
    ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE
    : getDateMillisecondsPart(date)
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
}

var protectedDayOfYearTokens = ['D', 'DD']
var protectedWeekYearTokens = ['YY', 'YYYY']

function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1
}

function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1
}

function throwProtectedError(token) {
  if (token === 'YYYY') {
    throw new RangeError(
      'Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr',
    )
  } else if (token === 'YY') {
    throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr')
  } else if (token === 'D') {
    throw new RangeError(
      'Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr',
    )
  } else if (token === 'DD') {
    throw new RangeError(
      'Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr',
    )
  }
} // See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)
  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn) // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate)
  var day = date.getUTCDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
  date.setUTCDate(date.getUTCDate() - diff)
  date.setUTCHours(0, 0, 0, 0)
  return date
} // See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate, dirtyOptions)
  var year = date.getUTCFullYear()
  var options = dirtyOptions || {}
  var locale = options.locale
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate) // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  }

  var firstWeekOfNextYear = new Date(0)
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate)
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0)
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions)
  var firstWeekOfThisYear = new Date(0)
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate)
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0)
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
} // See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  requiredArgs(2, arguments)
  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn) // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate)
  var day = toInteger(dirtyDay)
  var currentDay = date.getUTCDay()
  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
} // See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments)
  var day = toInteger(dirtyDay)

  if (day % 7 === 0) {
    day = day - 7
  }

  var weekStartsOn = 1
  var date = toDate(dirtyDate)
  var currentDay = date.getUTCDay()
  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
} // See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments)
  var weekStartsOn = 1
  var date = toDate(dirtyDate)
  var day = date.getUTCDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
  date.setUTCDate(date.getUTCDate() - diff)
  date.setUTCHours(0, 0, 0, 0)
  return date
} // See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  var year = date.getUTCFullYear()
  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0)
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear)
  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0)
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
} // See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments)
  var year = getUTCISOWeekYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setUTCFullYear(year, 0, 4)
  fourthOfJanuary.setUTCHours(0, 0, 0, 0)
  var date = startOfUTCISOWeek(fourthOfJanuary)
  return date
}

var MILLISECONDS_IN_WEEK = 604800000 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime() // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
} // See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments)
  var date = toDate(dirtyDate)
  var isoWeek = toInteger(dirtyISOWeek)
  var diff = getUTCISOWeek(date) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
} // See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)
  var options = dirtyOptions || {}
  var locale = options.locale
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate)
  var year = getUTCWeekYear(dirtyDate, dirtyOptions)
  var firstWeek = new Date(0)
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setUTCHours(0, 0, 0, 0)
  var date = startOfUTCWeek(firstWeek, dirtyOptions)
  return date
}

var MILLISECONDS_IN_WEEK$1 = 604800000 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime() // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1
} // See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments)
  var date = toDate(dirtyDate)
  var week = toInteger(dirtyWeek)
  var diff = getUTCWeek(date, options) - week
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE$1 = 60000
var MILLISECONDS_IN_SECOND = 1000
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
}
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
}

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern)

  if (!matchResult) {
    return null
  }

  var value = parseInt(matchResult[0], 10)
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length),
  }
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern)

  if (!matchResult) {
    return null
  } // Input is 'Z'

  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1),
    }
  }

  var sign = matchResult[1] === '+' ? 1 : -1
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0
  return {
    value:
      sign *
      (hours * MILLISECONDS_IN_HOUR +
        minutes * MILLISECONDS_IN_MINUTE$1 +
        seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length),
  }
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback)
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback)

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback)

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback)

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback)

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback)
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback)

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback)

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback)

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback)

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback)
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4

    case 'evening':
      return 17

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0 // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear
  var result

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100
  } else {
    var rangeEnd = absCurrentYear + 50
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0)
  }

  return isCommonEra ? result : 1 - result
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */

var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return (
            match.era(string, {
              width: 'abbreviated',
            }) ||
            match.era(string, {
              width: 'narrow',
            })
          )
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow',
          })
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return (
            match.era(string, {
              width: 'wide',
            }) ||
            match.era(string, {
              width: 'abbreviated',
            }) ||
            match.era(string, {
              width: 'narrow',
            })
          )
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value
      date.setUTCFullYear(value, 0, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['R', 'u', 't', 'T'],
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy',
        }
      }

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback)

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback,
          })

        default:
          return parseNDigits(token.length, string, valueCallback)
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear()

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear)
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1)
        date.setUTCHours(0, 0, 0, 0)
        return date
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year
      date.setUTCFullYear(year, 0, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY',
        }
      }

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback)

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback,
          })

        default:
          return parseNDigits(token.length, string, valueCallback)
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0
    },
    set: function (date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options)

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear)
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate)
        date.setUTCHours(0, 0, 0, 0)
        return startOfUTCWeek(date, options)
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate)
      date.setUTCHours(0, 0, 0, 0)
      return startOfUTCWeek(date, options)
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string)
      }

      return parseNDigitsSigned(token.length, string)
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0)
      firstWeekOfYear.setUTCFullYear(value, 0, 4)
      firstWeekOfYear.setUTCHours(0, 0, 0, 0)
      return startOfUTCISOWeek(firstWeekOfYear)
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string)
      }

      return parseNDigitsSigned(token.length, string)
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string)
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter',
          })
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return (
            match.quarter(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.quarter(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting',
          })
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return (
            match.quarter(string, {
              width: 'wide',
              context: 'formatting',
            }) ||
            match.quarter(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.quarter(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string)
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter',
          })
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return (
            match.quarter(string, {
              width: 'abbreviated',
              context: 'standalone',
            }) ||
            match.quarter(string, {
              width: 'narrow',
              context: 'standalone',
            })
          )
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone',
          })
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return (
            match.quarter(string, {
              width: 'wide',
              context: 'standalone',
            }) ||
            match.quarter(string, {
              width: 'abbreviated',
              context: 'standalone',
            }) ||
            match.quarter(string, {
              width: 'narrow',
              context: 'standalone',
            })
          )
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1
      }

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback)
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback)
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback,
          })
        // Jan, Feb, ..., Dec

        case 'MMM':
          return (
            match.month(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.month(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting',
          })
        // January, February, ..., December

        case 'MMMM':
        default:
          return (
            match.month(string, {
              width: 'wide',
              context: 'formatting',
            }) ||
            match.month(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.month(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1
      }

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback)
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback)
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback,
          })
        // Jan, Feb, ..., Dec

        case 'LLL':
          return (
            match.month(string, {
              width: 'abbreviated',
              context: 'standalone',
            }) ||
            match.month(string, {
              width: 'narrow',
              context: 'standalone',
            })
          )
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone',
          })
        // January, February, ..., December

        case 'LLLL':
        default:
          return (
            match.month(string, {
              width: 'wide',
              context: 'standalone',
            }) ||
            match.month(string, {
              width: 'abbreviated',
              context: 'standalone',
            }) ||
            match.month(string, {
              width: 'narrow',
              context: 'standalone',
            })
          )
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string)

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53
    },
    set: function (date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options)
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string)

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53
    },
    set: function (date, _flags, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options)
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
  },
  // Day of the month
  d: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string)

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear()
      var isLeapYear = isLeapYearIndex(year)
      var month = date.getUTCMonth()

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month]
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month]
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
  },
  // Day of year
  D: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string)

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear()
      var isLeapYear = isLeapYearIndex(year)

      if (isLeapYear) {
        return value >= 1 && value <= 366
      } else {
        return value >= 1 && value <= 365
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T'],
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return (
            match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'short',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
          })
        // Tu

        case 'EEEEEE':
          return (
            match.day(string, {
              width: 'short',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
        // Tuesday

        case 'EEEE':
        default:
          return (
            match.day(string, {
              width: 'wide',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'short',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7
        return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays
      }

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback)
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback,
          })
        // Tue

        case 'eee':
          return (
            match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'short',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
          })
        // Tu

        case 'eeeeee':
          return (
            match.day(string, {
              width: 'short',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
        // Tuesday

        case 'eeee':
        default:
          return (
            match.day(string, {
              width: 'wide',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'short',
              context: 'formatting',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T'],
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7
        return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays
      }

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback)
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback,
          })
        // Tue

        case 'ccc':
          return (
            match.day(string, {
              width: 'abbreviated',
              context: 'standalone',
            }) ||
            match.day(string, {
              width: 'short',
              context: 'standalone',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'standalone',
            })
          )
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone',
          })
        // Tu

        case 'cccccc':
          return (
            match.day(string, {
              width: 'short',
              context: 'standalone',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'standalone',
            })
          )
        // Tuesday

        case 'cccc':
        default:
          return (
            match.day(string, {
              width: 'wide',
              context: 'standalone',
            }) ||
            match.day(string, {
              width: 'abbreviated',
              context: 'standalone',
            }) ||
            match.day(string, {
              width: 'short',
              context: 'standalone',
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'standalone',
            })
          )
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T'],
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7
        }

        return value
      }

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string)
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day',
          })
        // Tue

        case 'iii':
          return (
            match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
              valueCallback: valueCallback,
            }) ||
            match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback,
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback,
            })
          )
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback,
          })
        // Tu

        case 'iiiiii':
          return (
            match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback,
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback,
            })
          )
        // Tuesday

        case 'iiii':
        default:
          return (
            match.day(string, {
              width: 'wide',
              context: 'formatting',
              valueCallback: valueCallback,
            }) ||
            match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
              valueCallback: valueCallback,
            }) ||
            match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback,
            }) ||
            match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback,
            })
          )
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7
    },
    set: function (date, _flags, value, options) {
      date = setUTCISODay(date, value, options)
      date.setUTCHours(0, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T'],
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return (
            match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting',
          })

        case 'aaaa':
        default:
          return (
            match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0)
      return date
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return (
            match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting',
          })

        case 'bbbb':
        default:
          return (
            match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0)
      return date
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return (
            match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting',
          })

        case 'BBBB':
        default:
          return (
            match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting',
            }) ||
            match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting',
            })
          )
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0)
      return date
    },
    incompatibleTokens: ['a', 'b', 't', 'T'],
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string)

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0)
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0)
      } else {
        date.setUTCHours(value, 0, 0, 0)
      }

      return date
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T'],
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string)

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string)

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0)
      } else {
        date.setUTCHours(value, 0, 0, 0)
      }

      return date
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T'],
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string)

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value
      date.setUTCHours(hours, 0, 0, 0)
      return date
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string)

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0)
      return date
    },
    incompatibleTokens: ['t', 'T'],
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string)

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second',
          })

        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0)
      return date
    },
    incompatibleTokens: ['t', 'T'],
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3))
      }

      return parseNDigits(token.length, string, valueCallback)
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value)
      return date
    },
    incompatibleTokens: ['t', 'T'],
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string)

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string)

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string)

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string)

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string)
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date
      }

      return new Date(date.getTime() - value)
    },
    incompatibleTokens: ['t', 'T', 'x'],
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string)

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string)

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string)

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string)

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string)
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date
      }

      return new Date(date.getTime() - value)
    },
    incompatibleTokens: ['t', 'T', 'X'],
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string)
    },
    set: function (_date, _flags, value, _options) {
      return [
        new Date(value * 1000),
        {
          timestampIsSet: true,
        },
      ]
    },
    incompatibleTokens: '*',
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string)
    },
    set: function (_date, _flags, value, _options) {
      return [
        new Date(value),
        {
          timestampIsSet: true,
        },
      ]
    },
    incompatibleTokens: '*',
  },
}
var TIMEZONE_UNIT_PRIORITY = 10 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
var escapedStringRegExp = /^'([^]*?)'?$/
var doubleQuoteRegExp = /''/g
var notWhitespaceRegExp = /\S/
var unescapedLatinCharacterRegExp = /[a-zA-Z]/
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   toDate('2016-01-01')
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  requiredArgs(3, arguments)
  var dateString = String(dirtyDateString)
  var formatString = String(dirtyFormatString)
  var options = dirtyOptions || {}
  var locale$1 = options.locale || locale

  if (!locale$1.match) {
    throw new RangeError('locale must contain match property')
  }

  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate) // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn) // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyReferenceDate)
    } else {
      return new Date(NaN)
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1, // If timezone isn't specified, it will be set to the system timezone
  }
  var setters = [
    {
      priority: TIMEZONE_UNIT_PRIORITY,
      set: dateToSystemTimezone,
      index: 0,
    },
  ]
  var i
  var tokens = formatString
    .match(longFormattingTokensRegExp)
    .map(function (substring) {
      var firstCharacter = substring[0]

      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter]
        return longFormatter(substring, locale$1.formatLong, subFnOptions)
      }

      return substring
    })
    .join('')
    .match(formattingTokensRegExp)
  var usedTokens = []

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      throwProtectedError(token)
    }

    if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      throwProtectedError(token)
    }

    var firstCharacter = token[0]
    var parser = parsers[firstCharacter]

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i]
            break
          }
        }

        if (incompatibleToken) {
          throw new RangeError(
            "The format string mustn't contain `"
              .concat(incompatibleToken.fullToken, '` and `')
              .concat(token, '` at the same time'),
          )
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError(
          "The format string mustn't contain `".concat(
            token,
            '` and any other token at the same time',
          ),
        )
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token,
      })
      var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions)

      if (!parseResult) {
        return new Date(NaN)
      }

      setters.push({
        priority: parser.priority,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length,
      })
      dateString = parseResult.rest
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + firstCharacter + '`',
        )
      } // Replace two single quote characters with one single quote character

      if (token === "''") {
        token = "'"
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token)
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date

      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length)
      } else {
        return new Date(NaN)
      }
    }
  } // Check if the remaining input contains something other than whitespace

  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN)
  }

  var uniquePrioritySetters = setters
    .map(function (setter) {
      return setter.priority
    })
    .sort(function (a, b) {
      return b - a
    })
    .filter(function (priority, index, array) {
      return array.indexOf(priority) === index
    })
    .map(function (priority) {
      return setters
        .filter(function (setter) {
          return setter.priority === priority
        })
        .reverse()
    })
    .map(function (setterArray) {
      return setterArray[0]
    })
  var date = toDate(dirtyReferenceDate)

  if (isNaN(date)) {
    return new Date(NaN)
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37

  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date))
  var flags = {}

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i]

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN)
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions) // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0]
      assign(flags, result[1]) // Result is date
    } else {
      utcDate = result
    }
  }

  return utcDate
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date
  }

  var convertedDate = new Date(0)
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  convertedDate.setHours(
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds(),
  )
  return convertedDate
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  return !isNaN(date)
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : ''
  var output = Math.abs(number).toString()

  while (output.length < targetLength) {
    output = '0' + output
  }

  return sign + output
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear() // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length)
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth()
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2)
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length)
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am'

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase()

      case 'aaaaa':
        return dayPeriodEnumValue[0]

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.'
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length)
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length)
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length)
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length)
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length
    var milliseconds = date.getUTCMilliseconds()
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3))
    return addLeadingZeros(fractionalSeconds, token.length)
  },
}
var MILLISECONDS_IN_DAY = 86400000 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  var timestamp = date.getTime()
  date.setUTCMonth(0, 1)
  date.setUTCHours(0, 0, 0, 0)
  var startOfYearTimestamp = date.getTime()
  var difference = timestamp - startOfYearTimestamp
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1
}

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night',
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */
}
var formatters$1 = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated',
        })
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow',
        })
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide',
        })
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear() // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear
      return localize.ordinalNumber(year, {
        unit: 'year',
      })
    }

    return formatters.y(date, token)
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options) // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100
      return addLeadingZeros(twoDigitYear, 2)
    } // Ordinal number

    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year',
      })
    } // Padding

    return addLeadingZeros(weekYear, token.length)
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date) // Padding

    return addLeadingZeros(isoWeekYear, token.length)
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear()
    return addLeadingZeros(year, token.length)
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3)

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter)
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2)
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter',
        })
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting',
        })
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting',
        })
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting',
        })
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3)

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter)
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2)
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter',
        })
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone',
        })
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone',
        })
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone',
        })
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth()

    switch (token) {
      case 'M':
      case 'MM':
        return formatters.M(date, token)
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month',
        })
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting',
        })
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting',
        })
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting',
        })
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth()

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1)
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2)
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month',
        })
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone',
        })
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone',
        })
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone',
        })
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options)

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week',
      })
    }

    return addLeadingZeros(week, token.length)
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date)

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week',
      })
    }

    return addLeadingZeros(isoWeek, token.length)
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date',
      })
    }

    return formatters.d(date, token)
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date)

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear',
      })
    }

    return addLeadingZeros(dayOfYear, token.length)
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay()

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting',
        })
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting',
        })
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting',
        })
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting',
        })
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay()
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek)
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2)
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day',
        })

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting',
        })
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting',
        })
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting',
        })
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting',
        })
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay()
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek)
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length)
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day',
        })

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone',
        })
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone',
        })
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone',
        })
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone',
        })
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay()
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek)
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length)
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day',
        })
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting',
        })
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting',
        })
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting',
        })
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting',
        })
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours()
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am'

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting',
        })

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting',
        })

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting',
        })
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours()
    var dayPeriodEnumValue

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am'
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting',
        })

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting',
        })

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting',
        })
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours()
    var dayPeriodEnumValue

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting',
        })

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting',
        })

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting',
        })
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12
      if (hours === 0) hours = 12
      return localize.ordinalNumber(hours, {
        unit: 'hour',
      })
    }

    return formatters.h(date, token)
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour',
      })
    }

    return formatters.H(date, token)
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour',
      })
    }

    return addLeadingZeros(hours, token.length)
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours()
    if (hours === 0) hours = 24

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour',
      })
    }

    return addLeadingZeros(hours, token.length)
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute',
      })
    }

    return formatters.m(date, token)
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second',
      })
    }

    return formatters.s(date, token)
  },
  // Fraction of second
  S: function (date, token) {
    return formatters.S(date, token)
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = originalDate.getTimezoneOffset()

    if (timezoneOffset === 0) {
      return 'Z'
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset)
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = originalDate.getTimezoneOffset()

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset)
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = originalDate.getTimezoneOffset()

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = originalDate.getTimezoneOffset()

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date
    var timestamp = Math.floor(originalDate.getTime() / 1000)
    return addLeadingZeros(timestamp, token.length)
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date
    var timestamp = originalDate.getTime()
    return addLeadingZeros(timestamp, token.length)
  },
}

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60

  if (minutes === 0) {
    return sign + String(hours)
  }

  var delimiter = dirtyDelimiter || ''
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2)
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+'
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2)
  }

  return formatTimezone(offset, dirtyDelimiter)
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2)
  var minutes = addLeadingZeros(absOffset % 60, 2)
  return sign + hours + delimiter + minutes
} // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
var escapedStringRegExp$1 = /^'([^]*?)'?$/
var doubleQuoteRegExp$1 = /''/g
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments)
  var formatStr = String(dirtyFormatStr)
  var options = dirtyOptions || {}
  var locale$1 = options.locale || locale
  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate) // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn) // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (!locale$1.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale$1.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376

  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate)
  var utcDate = subMilliseconds(originalDate, timezoneOffset)
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate,
  }
  var result = formatStr
    .match(longFormattingTokensRegExp$1)
    .map(function (substring) {
      var firstCharacter = substring[0]

      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter]
        return longFormatter(substring, locale$1.formatLong, formatterOptions)
      }

      return substring
    })
    .join('')
    .match(formattingTokensRegExp$1)
    .map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'"
      }

      var firstCharacter = substring[0]

      if (firstCharacter === "'") {
        return cleanEscapedString$1(substring)
      }

      var formatter = formatters$1[firstCharacter]

      if (formatter) {
        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring)
        }

        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring)
        }

        return formatter(utcDate, substring, locale$1.localize, formatterOptions)
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + firstCharacter + '`',
        )
      }

      return substring
    })
    .join('')
  return result
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'")
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length

  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]

  return r
}
/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)
  var date = toDate(dirtyDate)
  var amount = toInteger(dirtyAmount)

  if (isNaN(amount)) {
    return new Date(NaN)
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date
  }

  date.setDate(date.getDate() + amount)
  return date
}
/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `eachDay` to `eachDayOfInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   eachDay(new Date(2014, 0, 10), new Date(2014, 0, 20))
 *
 *   // v2.0.0 onward
 *
 *   eachDayOfInterval(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) }
 *   )
 *   ```
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */

function eachDayOfInterval(dirtyInterval, options) {
  requiredArgs(1, arguments)
  var interval = dirtyInterval || {}
  var startDate = toDate(interval.start)
  var endDate = toDate(interval.end)
  var endTime = endDate.getTime() // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  var dates = []
  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)
  var step = options && 'step' in options ? Number(options.step) : 1
  if (step < 1 || isNaN(step))
    throw new RangeError('`options.step` must be a number greater than 1')

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate))
    currentDate.setDate(currentDate.getDate() + step)
    currentDate.setHours(0, 0, 0, 0)
  }

  return dates
}
/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}
/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)
  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn) // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)
  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}
/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  var day = date.getDay()
  return day
}
/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}
/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)
  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn) // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}
/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */

function isWithinInterval(dirtyDate, dirtyInterval) {
  requiredArgs(2, arguments)
  var interval = dirtyInterval || {}
  var time = toDate(dirtyDate).getTime()
  var startTime = toDate(interval.start).getTime()
  var endTime = toDate(interval.end).getTime() // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  return time >= startTime && time <= endTime
}
/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}
/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}
/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments)
  var date = toDate(dirtyDate)
  var dateToCompare = toDate(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}
/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments)
  var date = toDate(dirtyDate)
  var dateToCompare = toDate(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}
/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  var year = date.getFullYear()
  return year
}
/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  requiredArgs(1, arguments)
  var date = toDate(dirtyDate)
  var month = date.getMonth()
  return month
}
/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return startOfDay(Date.now())
}
/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)
  var date = toDate(dirtyDate)
  var amount = toInteger(dirtyAmount)

  if (isNaN(amount)) {
    return new Date(NaN)
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date
  }

  var dayOfMonth = date.getDate() // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime())
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0)
  var daysInMonth = endOfDesiredMonth.getDate()

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth)
    return date
  }
}
/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)
  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)
  var diff = dateLeft.getTime() - dateRight.getTime()

  if (diff < 0) {
    return -1
  } else if (diff > 0) {
    return 1 // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff
  }
}

var isInUnavailableDates = function (unavailableDates, date) {
  if (unavailableDates === void 0) {
    unavailableDates = []
  }

  return unavailableDates.some(function (_date) {
    return isSameDay(date, _date)
  })
}

function getDateInterval(dateA, dateB) {
  return compareAsc(dateA, dateB) > 0
    ? {
        start: dateB,
        end: dateA,
      }
    : {
        start: dateA,
        end: dateB,
      }
}

function isDateInInterval(date, dateA, dateB) {
  return isWithinInterval(date, getDateInterval(dateA, dateB))
}

function isDateSelected(date, startDate, endDate) {
  if (startDate && endDate) {
    return isDateInInterval(date, startDate, endDate)
  }

  return false
}

function isFirstOrLastSelectedDate(date, startDate, endDate) {
  return !!((startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate)))
}

function isStartDate(date, startDate) {
  return !!(startDate && isSameDay(date, startDate))
}

function isEndDate(date, endDate) {
  return !!(endDate && isSameDay(date, endDate))
}

function isDateBlocked(_a) {
  var date = _a.date,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    isDateBlockedFn = _a.isDateBlockedFn,
    startDate = _a.startDate,
    endDate = _a.endDate,
    _b = _a.minBookingDays,
    minBookingDays = _b === void 0 ? 1 : _b,
    _c = _a.unavailableDates,
    unavailableDates = _c === void 0 ? [] : _c
  var compareMinDate = minBookingDate
    ? new Date(
        minBookingDate.getFullYear(),
        minBookingDate.getMonth(),
        minBookingDate.getDate(),
        0,
        0,
        0,
      )
    : minBookingDate
  var compareMaxDate = maxBookingDate
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

function getDateMonthAndYear(date) {
  var today = startOfMonth(date)
  var year = getYear(today)
  var month = getMonth(today)
  return {
    year: year,
    month: month,
    date: today,
  }
}

function getCurrentYearMonthAndDate() {
  return getDateMonthAndYear(startOfToday())
}

function getInitialMonths(numberOfMonths, startDate) {
  var firstMonth = startDate ? getDateMonthAndYear(startDate) : getCurrentYearMonthAndDate()
  var prevMonthDate = firstMonth.date
  var months = [firstMonth]

  if (numberOfMonths > 1) {
    months = Array.from(Array(numberOfMonths - 1).keys()).reduce(function (m) {
      prevMonthDate = addMonths(m[m.length - 1].date, 1)
      return m.concat([getDateMonthAndYear(prevMonthDate)])
    }, months)
  }

  return months
}

function getNextActiveMonth(activeMonth, numberOfMonths, counter, step) {
  var prevMonth

  if (step) {
    prevMonth = counter > 0 ? 0 : activeMonth.length - step
  } else {
    prevMonth = counter > 0 ? activeMonth.length - 1 : 0
  }

  var prevMonthDate = activeMonth[prevMonth].date
  return Array.from(Array(numberOfMonths).keys()).reduce(function (m) {
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

function getInputValue(date, displayFormat, defaultValue) {
  if (date && typeof displayFormat === 'string') {
    return format(date, displayFormat)
  } else if (date && typeof displayFormat === 'function') {
    return displayFormat(date)
  } else {
    return defaultValue
  }
}

function canSelectRange(_a) {
  var startDate = _a.startDate,
    endDate = _a.endDate,
    isDateBlocked = _a.isDateBlocked,
    minBookingDays = _a.minBookingDays,
    exactMinBookingDays = _a.exactMinBookingDays,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate
  var isStartDateAfterOrEqualMinDate = minBookingDate
    ? !isBefore(startDate, addDays(minBookingDate, -1))
    : true
  var isStartDateBeforeOrEqualMaxDate = maxBookingDate
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
    return !eachDayOfInterval(
      getDateInterval(startDate, addDays(startDate, minBookingDays - 1)),
    ).some(function (d) {
      return isDateBlocked(d)
    })
  } else if (startDate && endDate && !exactMinBookingDays) {
    var minBookingDaysDate = addDays(startDate, minBookingDays - 1)

    if (isBefore(endDate, minBookingDaysDate)) {
      return false
    }

    return !eachDayOfInterval(getDateInterval(startDate, endDate)).some(function (d) {
      return isDateBlocked(d)
    })
  }

  return false
}

function isDateHovered(_a) {
  var date = _a.date,
    startDate = _a.startDate,
    endDate = _a.endDate,
    isDateBlocked = _a.isDateBlocked,
    hoveredDate = _a.hoveredDate,
    minBookingDays = _a.minBookingDays,
    exactMinBookingDays = _a.exactMinBookingDays

  if (
    // exact min booking days
    hoveredDate &&
    minBookingDays > 1 &&
    exactMinBookingDays &&
    isDateInInterval(date, hoveredDate, addDays(hoveredDate, minBookingDays - 1))
  ) {
    return !eachDayOfInterval(
      getDateInterval(hoveredDate, addDays(hoveredDate, minBookingDays - 1)),
    ).some(function (d) {
      return isDateBlocked(d)
    })
  } else if (
    // min booking days
    startDate &&
    !endDate &&
    hoveredDate &&
    isDateInInterval(date, startDate, addDays(startDate, minBookingDays - 1)) &&
    isSameDay(startDate, hoveredDate) &&
    minBookingDays > 1
  ) {
    return !eachDayOfInterval(
      getDateInterval(startDate, addDays(startDate, minBookingDays - 1)),
    ).some(function (d) {
      return isDateBlocked(d)
    })
  } else if (
    // normal
    startDate &&
    !endDate &&
    hoveredDate &&
    isDateInInterval(date, startDate, hoveredDate)
  ) {
    return !eachDayOfInterval(getDateInterval(startDate, hoveredDate)).some(function (d) {
      return isDateBlocked(d)
    })
  }

  return false
}

function getWeekdayLabels(_a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.firstDayOfWeek,
    firstDayOfWeek = _c === void 0 ? 1 : _c,
    _d = _b.weekdayLabelFormat,
    weekdayLabelFormat =
      _d === void 0
        ? function (date) {
            return format(date, 'iiiiii')
          }
        : _d

  var now = new Date()
  var arr = eachDayOfInterval(
    getDateInterval(
      addDays(startOfWeek(now), firstDayOfWeek),
      addDays(endOfWeek(now), firstDayOfWeek),
    ),
  )
  return arr.reduce(function (array, date) {
    // @ts-ignore
    array.push(weekdayLabelFormat(date))
    return array
  }, [])
}

function getDays(_a) {
  var year = _a.year,
    month = _a.month,
    _b = _a.firstDayOfWeek,
    firstDayOfWeek = _b === void 0 ? 1 : _b,
    _c = _a.dayLabelFormat,
    dayLabelFormat =
      _c === void 0
        ? function (date) {
            return format(date, 'dd')
          }
        : _c
  var date = new Date(year, month)
  var monthStart = startOfMonth(date)
  var monthStartDay = getDay(monthStart)
  var monthEnd = endOfMonth(date)
  var prevMonthDays = Array.from(
    Array(
      monthStartDay >= firstDayOfWeek
        ? monthStartDay - firstDayOfWeek
        : 6 - firstDayOfWeek + monthStartDay + 1,
    ).keys(),
  ).fill(0)
  var days = eachDayOfInterval(getDateInterval(monthStart, monthEnd)).map(function (date) {
    return {
      date: date,
      dayLabel: dayLabelFormat(date),
    }
  })
  return __spreadArrays(prevMonthDays, days)
}

var dayLabelFormatFn = function (date) {
  return format(date, 'dd')
}

var weekdayLabelFormatFn = function (date) {
  return format(date, 'eeeeee')
}

var monthLabelFormatFn = function (date) {
  return format(date, 'MMMM yyyy')
}

function useMonth(_a) {
  var year = _a.year,
    month = _a.month,
    _b = _a.firstDayOfWeek,
    firstDayOfWeek = _b === void 0 ? 1 : _b,
    _c = _a.dayLabelFormat,
    dayLabelFormat = _c === void 0 ? dayLabelFormatFn : _c,
    _d = _a.weekdayLabelFormat,
    weekdayLabelFormat = _d === void 0 ? weekdayLabelFormatFn : _d,
    _e = _a.monthLabelFormat,
    monthLabelFormat = _e === void 0 ? monthLabelFormatFn : _e
  var days = React.useMemo(
    function () {
      return getDays({
        year: year,
        month: month,
        firstDayOfWeek: firstDayOfWeek,
        dayLabelFormat: dayLabelFormat,
      })
    },
    [year, month, firstDayOfWeek, dayLabelFormat],
  )
  var weekdayLabels = React.useMemo(
    function () {
      return getWeekdayLabels({
        firstDayOfWeek: firstDayOfWeek,
        weekdayLabelFormat: weekdayLabelFormat,
      })
    },
    [firstDayOfWeek, weekdayLabelFormat],
  )
  return {
    days: days,
    weekdayLabels: weekdayLabels,
    monthLabel: monthLabelFormat(new Date(year, month)),
  }
}

var START_DATE = 'startDate'
var END_DATE = 'endDate'

function useDatepicker(_a) {
  var startDate = _a.startDate,
    endDate = _a.endDate,
    focusedInput = _a.focusedInput,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    onDatesChange = _a.onDatesChange,
    initialVisibleMonth = _a.initialVisibleMonth,
    _b = _a.exactMinBookingDays,
    exactMinBookingDays = _b === void 0 ? false : _b,
    _c = _a.minBookingDays,
    minBookingDays = _c === void 0 ? 1 : _c,
    _d = _a.numberOfMonths,
    numberOfMonths = _d === void 0 ? 2 : _d,
    _e = _a.firstDayOfWeek,
    firstDayOfWeek = _e === void 0 ? 1 : _e,
    _f = _a.isDateBlocked,
    isDateBlockedProps =
      _f === void 0
        ? function () {
            return false
          }
        : _f,
    _g = _a.unavailableDates,
    unavailableDates = _g === void 0 ? [] : _g,
    _h = _a.changeActiveMonthOnSelect,
    changeActiveMonthOnSelect = _h === void 0 ? true : _h

  var _j = React.useState(function () {
      return startDate
        ? getInitialMonths(numberOfMonths, startDate)
        : getInitialMonths(numberOfMonths, initialVisibleMonth || null)
    }),
    activeMonths = _j[0],
    setActiveMonths = _j[1]

  var _k = React.useState(null),
    hoveredDate = _k[0],
    setHoveredDate = _k[1]

  var _l = React.useState(startDate),
    focusedDate = _l[0],
    setFocusedDate = _l[1]

  React.useEffect(function () {
    if (typeof window !== 'undefined') {
      if (window.addEventListener) {
        window.addEventListener('keydown', handleKeyDown)
      }
    }

    return function () {
      if (window.removeEventListener) {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  })

  var disabledDatesByUser = function (date) {
    return isInUnavailableDates(unavailableDates, date) || isDateBlockedProps(date)
  }

  var onDateFocus = function (date) {
    setFocusedDate(date)

    if (!focusedDate || (focusedDate && !isSameDay(date, focusedDate))) {
      setActiveMonths(getInitialMonths(numberOfMonths, date))
    }
  }

  var isDateSelected$1 = function (date) {
    return isDateSelected(date, startDate, endDate)
  }

  var isFirstOrLastSelectedDate$1 = function (date) {
    return isFirstOrLastSelectedDate(date, startDate, endDate)
  }

  var isStartDate$1 = function (date) {
    return isStartDate(date, startDate)
  }

  var isEndDate$1 = function (date) {
    return isEndDate(date, endDate)
  }

  var isDateBlocked$1 = function (date) {
    return isDateBlocked({
      date: date,
      minBookingDate: minBookingDate,
      maxBookingDate: maxBookingDate,
      startDate: startDate,
      endDate: endDate,
      minBookingDays: minBookingDays,
      isDateBlockedFn: disabledDatesByUser,
    })
  }

  var isDateFocused = function (date) {
    return focusedDate ? isSameDay(date, focusedDate) : false
  }

  var isDateHovered$1 = function (date) {
    return isDateHovered({
      date: date,
      hoveredDate: hoveredDate,
      startDate: startDate,
      endDate: endDate,
      minBookingDays: minBookingDays,
      exactMinBookingDays: exactMinBookingDays,
      isDateBlocked: disabledDatesByUser,
    })
  }

  function handleKeyDown(e) {
    if (
      (e.key === 'ArrowRight' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowUp') &&
      !focusedDate
    ) {
      var activeMonth = activeMonths[0]
      onDateFocus(activeMonth.date)
      setActiveMonths(getInitialMonths(numberOfMonths, activeMonth.date))
    }
  }

  function onResetDates() {
    onDatesChange({
      startDate: null,
      endDate: null,
      focusedInput: START_DATE,
    })
  }

  function onDateSelect(date) {
    if (
      (focusedInput === END_DATE || focusedInput === START_DATE) &&
      minBookingDays > 0 &&
      exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        exactMinBookingDays: exactMinBookingDays,
        minBookingDate: minBookingDate,
        maxBookingDate: maxBookingDate,
        isDateBlocked: disabledDatesByUser,
        startDate: date,
        endDate: null,
      })
    ) {
      onDatesChange({
        startDate: date,
        endDate: addDays(date, minBookingDays - 1),
        focusedInput: null,
      })
    } else if (
      ((focusedInput === END_DATE && startDate && isBefore(date, startDate)) ||
        (focusedInput === START_DATE && endDate && isAfter(date, endDate))) &&
      !exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        isDateBlocked: disabledDatesByUser,
        startDate: date,
        endDate: null,
      })
    ) {
      onDatesChange({
        endDate: null,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === START_DATE &&
      !exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        isDateBlocked: disabledDatesByUser,
        endDate: endDate,
        startDate: date,
      })
    ) {
      onDatesChange({
        endDate: endDate,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === START_DATE &&
      !exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        isDateBlocked: disabledDatesByUser,
        endDate: null,
        startDate: date,
      })
    ) {
      onDatesChange({
        endDate: null,
        startDate: date,
        focusedInput: END_DATE,
      })
    } else if (
      focusedInput === END_DATE &&
      startDate &&
      !isBefore(date, startDate) &&
      !exactMinBookingDays &&
      canSelectRange({
        minBookingDays: minBookingDays,
        isDateBlocked: disabledDatesByUser,
        startDate: startDate,
        endDate: date,
      })
    ) {
      onDatesChange({
        startDate: startDate,
        endDate: date,
        focusedInput: null,
      })
    }

    if (
      focusedInput !== END_DATE &&
      (!focusedDate || (focusedDate && !isSameDay(date, focusedDate))) &&
      changeActiveMonthOnSelect
    ) {
      setActiveMonths(getInitialMonths(numberOfMonths, date))
    }
  }

  function onDateHover(date) {
    if (!date) {
      setHoveredDate(null)
    } else if (date) {
      var isNotBlocked = !isDateBlocked$1(date) || (startDate && isSameDay(date, startDate))
      var isHoveredDateAfterOrEqualMinDate = minBookingDate
        ? !isBefore(date, addDays(minBookingDate, -1))
        : true
      var isHoveredDateBeforeOrEqualMaxDate = maxBookingDate ? !isAfter(date, maxBookingDate) : true // Exact minimal booking days

      var potentialEndDate = addDays(date, minBookingDays - 1)
      var isPotentialEndDateAfterOrEqualMinDate = minBookingDate
        ? !isBefore(potentialEndDate, minBookingDate)
        : true
      var isPotentialEndDateBeforeOrEqualMaxDate = maxBookingDate
        ? !isAfter(potentialEndDate, maxBookingDate)
        : true
      var isExactAndInRange =
        exactMinBookingDays &&
        minBookingDays > 1 &&
        isHoveredDateAfterOrEqualMinDate &&
        isHoveredDateBeforeOrEqualMaxDate &&
        isPotentialEndDateAfterOrEqualMinDate &&
        isPotentialEndDateBeforeOrEqualMaxDate // Is date in range

      var isInRange =
        startDate &&
        !endDate &&
        !exactMinBookingDays &&
        isHoveredDateAfterOrEqualMinDate &&
        isHoveredDateBeforeOrEqualMaxDate // Is start date hovered and in range

      var isMinBookingDaysInRange =
        minBookingDays > 1 && startDate
          ? isDateInInterval(date, startDate, addDays(startDate, minBookingDays - 2))
          : true
      var isStartDateHoveredAndInRange =
        startDate && isSameDay(date, startDate) && isMinBookingDaysInRange

      if (isNotBlocked && (isExactAndInRange || isInRange || isStartDateHoveredAndInRange)) {
        setHoveredDate(date)
      } else if (hoveredDate !== null) {
        setHoveredDate(null)
      }
    }
  }

  var goToPreviousMonths = React.useCallback(
    function () {
      setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, -1))
      setFocusedDate(null)
    },
    [activeMonths, numberOfMonths],
  )
  var goToPreviousMonthsByOneMonth = React.useCallback(
    function () {
      setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, -1, 1))
      setFocusedDate(null)
    },
    [activeMonths, numberOfMonths],
  )
  var goToNextMonths = React.useCallback(
    function () {
      setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, 1))
      setFocusedDate(null)
    },
    [activeMonths, numberOfMonths],
  )
  var goToNextMonthsByOneMonth = React.useCallback(
    function () {
      setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, 1, 1))
      setFocusedDate(null)
    },
    [activeMonths, numberOfMonths],
  )
  var goToDate = React.useCallback(
    function (date) {
      setActiveMonths(getInitialMonths(numberOfMonths, date))
      setFocusedDate(null)
    },
    [numberOfMonths],
  )
  var goToPreviousYear = React.useCallback(
    function (numYears) {
      if (numYears === void 0) {
        numYears = 1
      }

      setActiveMonths(
        getNextActiveMonth(activeMonths, numberOfMonths, -(numYears * 12 - numberOfMonths + 1)),
      )
      setFocusedDate(null)
    },
    [activeMonths, numberOfMonths],
  )
  var goToNextYear = React.useCallback(
    function (numYears) {
      if (numYears === void 0) {
        numYears = 1
      }

      setActiveMonths(
        getNextActiveMonth(activeMonths, numberOfMonths, numYears * 12 - numberOfMonths + 1),
      )
      setFocusedDate(null)
    },
    [activeMonths, numberOfMonths],
  )
  return {
    firstDayOfWeek: firstDayOfWeek,
    activeMonths: activeMonths,
    isDateSelected: isDateSelected$1,
    isDateHovered: isDateHovered$1,
    isFirstOrLastSelectedDate: isFirstOrLastSelectedDate$1,
    isStartDate: isStartDate$1,
    isEndDate: isEndDate$1,
    isDateBlocked: isDateBlocked$1,
    numberOfMonths: numberOfMonths,
    isDateFocused: isDateFocused,
    focusedDate: focusedDate,
    hoveredDate: hoveredDate,
    onResetDates: onResetDates,
    onDateHover: onDateHover,
    onDateSelect: onDateSelect,
    onDateFocus: onDateFocus,
    goToPreviousMonths: goToPreviousMonths,
    goToPreviousMonthsByOneMonth: goToPreviousMonthsByOneMonth,
    goToNextMonths: goToNextMonths,
    goToNextMonthsByOneMonth: goToNextMonthsByOneMonth,
    goToDate: goToDate,
    goToPreviousYear: goToPreviousYear,
    goToNextYear: goToNextYear,
  }
}

function useDay(_a) {
  var date = _a.date,
    focusedDate = _a.focusedDate,
    isDateSelected = _a.isDateSelected,
    isDateFocused = _a.isDateFocused,
    isFirstOrLastSelectedDate = _a.isFirstOrLastSelectedDate,
    isDateHovered = _a.isDateHovered,
    isDateBlocked = _a.isDateBlocked,
    onDateSelect = _a.onDateSelect,
    onDateFocus = _a.onDateFocus,
    onDateHover = _a.onDateHover
  var onClick = React.useCallback(
    function () {
      return onDateSelect(date)
    },
    [date, onDateSelect],
  )
  var onMouseEnter = React.useCallback(
    function () {
      return onDateHover(date)
    },
    [date, onDateHover],
  )
  var disabled = isDateBlocked(date) && !isDateHovered(date)
  return {
    tabIndex: focusedDate === null || isDateFocused(date) ? 0 : -1,
    isSelected: isDateSelected(date),
    isSelectedStartOrEnd: isFirstOrLastSelectedDate(date),
    isWithinHoverRange: isDateHovered(date),
    disabledDate: disabled,
    onKeyDown: function (e) {
      if (e.key === 'ArrowRight') {
        onDateFocus(addDays(date, 1))
      } else if (e.key === 'ArrowLeft') {
        onDateFocus(addDays(date, -1))
      } else if (e.key === 'ArrowUp') {
        onDateFocus(addDays(date, -7))
      } else if (e.key === 'ArrowDown') {
        onDateFocus(addDays(date, 7))
      }
    },
    onClick: disabled ? function () {} : onClick,
    onMouseEnter: onMouseEnter,
  }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }

      return t
    }

  return __assign.apply(this, arguments)
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, 'raw', {
      value: raw,
    })
  } else {
    cooked.raw = raw
  }

  return cooked
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols
var hasOwnProperty = Object.prototype.hasOwnProperty
var propIsEnumerable = Object.prototype.propertyIsEnumerable

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined')
  }

  return Object(val)
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118

    var test1 = new String('abc') // eslint-disable-line no-new-wrappers

    test1[5] = 'de'

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

    var test2 = {}

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n]
    })

    if (order2.join('') !== '0123456789') {
      return false
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056

    var test3 = {}
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter
    })

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false
    }

    return true
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false
  }
}

var objectAssign = shouldUseNative()
  ? Object.assign
  : function (target, source) {
      var from
      var to = toObject(target)
      var symbols

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s])

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key]
          }
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from)

          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]]
            }
          }
        }
      }

      return to
    }

var merge = function merge(a, b) {
  var result = objectAssign({}, a, b)

  for (var key in a) {
    var _assign

    if (!a[key] || typeof b[key] !== 'object') continue
    objectAssign(result, ((_assign = {}), (_assign[key] = objectAssign(a[key], b[key])), _assign))
  }

  return result
} // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {}
  Object.keys(obj)
    .sort(function (a, b) {
      return a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      })
    })
    .forEach(function (key) {
      next[key] = obj[key]
    })
  return next
}

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em'
  }),
}

var createMediaQuery = function createMediaQuery(n) {
  return '@media screen and (min-width: ' + n + ')'
}

var getValue = function getValue(n, scale) {
  return get(scale, n, n)
}

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key]

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }

  return obj === undef ? def : obj
}
var createParser = function createParser(config) {
  var cache = {}

  var parse = function parse(props) {
    var styles = {}
    var shouldSort = false
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache

    for (var key in props) {
      if (!config[key]) continue
      var sx = config[key]
      var raw = props[key]
      var scale = get(props.theme, sx.scale, sx.defaults)

      if (typeof raw === 'object') {
        cache.breakpoints =
          (!isCacheDisabled && cache.breakpoints) ||
          get(props.theme, 'breakpoints', defaults.breakpoints)

        if (Array.isArray(raw)) {
          cache.media =
            (!isCacheDisabled && cache.media) ||
            [null].concat(cache.breakpoints.map(createMediaQuery))
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props))
          continue
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props))
          shouldSort = true
        }

        continue
      }

      objectAssign(styles, sx(raw, scale, props))
    } // sort object-based responsive styles

    if (shouldSort) {
      styles = sort(styles)
    }

    return styles
  }

  parse.config = config
  parse.propNames = Object.keys(config)
  parse.cache = cache
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config'
  })

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser

      parse[key] = createParser(
        ((_createParser = {}), (_createParser[key] = config[key]), _createParser),
      )
    })
  }

  return parse
}

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {}
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i]
    var style = sx(value, scale, _props)

    if (!media) {
      objectAssign(styles, style)
    } else {
      var _assign2

      objectAssign(
        styles,
        ((_assign2 = {}), (_assign2[media] = objectAssign({}, styles[media], style)), _assign2),
      )
    }
  })
  return styles
}

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {}

  for (var key in raw) {
    var breakpoint = breakpoints[key]
    var value = raw[key]
    var style = sx(value, scale, _props)

    if (!breakpoint) {
      objectAssign(styles, style)
    } else {
      var _assign3

      var media = createMediaQuery(breakpoint)
      objectAssign(
        styles,
        ((_assign3 = {}), (_assign3[media] = objectAssign({}, styles[media], style)), _assign3),
      )
    }
  }

  return styles
}

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
    property = _ref.property,
    scale = _ref.scale,
    _ref$transform = _ref.transform,
    transform = _ref$transform === void 0 ? getValue : _ref$transform,
    defaultScale = _ref.defaultScale
  properties = properties || [property]

  var sx = function sx(value, scale, _props) {
    var result = {}
    var n = transform(value, scale, _props)
    if (n === null) return
    properties.forEach(function (prop) {
      result[prop] = n
    })
    return result
  }

  sx.scale = scale
  sx.defaults = defaultScale
  return sx
} // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {}
  }

  var config = {}
  Object.keys(args).forEach(function (key) {
    var conf = args[key]

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key,
      })
      return
    }

    if (typeof conf === 'function') {
      config[key] = conf
      return
    }

    config[key] = createStyleFunction(conf)
  })
  var parser = createParser(config)
  return parser
}
var compose = function compose() {
  var config = {}

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key]
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return
    objectAssign(config, parser.config)
  })
  var parser = createParser(config)
  return parser
}

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n)
}

var getWidth = function getWidth(n, scale) {
  return get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%')
}

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
}
var layout = system(config)

var config$1 = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
}
config$1.bg = config$1.backgroundColor
var color = system(config$1)

var defaults$1 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}
var config$2 = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults$1.fontSizes,
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  textAlign: true,
  fontStyle: true,
}
var typography = system(config$2)

var config$3 = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
}
var flexbox = system(config$3)

var defaults$2 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
var config$4 = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults$2.space,
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults$2.space,
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults$2.space,
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
}
var grid = system(config$4)

var config$5 = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
}
config$5.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths',
}
config$5.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors',
}
config$5.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles',
}
config$5.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii',
}
config$5.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii',
}
config$5.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths',
}
config$5.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors',
}
config$5.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles',
}
config$5.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii',
}
config$5.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii',
}
config$5.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths',
}
config$5.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors',
}
config$5.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles',
}
config$5.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths',
}
config$5.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors',
}
config$5.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles',
}
var border = system(config$5)

var config$6 = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
}
config$6.bgImage = config$6.backgroundImage
config$6.bgSize = config$6.backgroundSize
config$6.bgPosition = config$6.backgroundPosition
config$6.bgRepeat = config$6.backgroundRepeat
var background = system(config$6)

var defaults$3 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
var config$7 = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults$3.space,
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults$3.space,
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults$3.space,
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults$3.space,
  },
}
var position = system(config$7)

var defaults$4 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

var isNumber$1 = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n)
}

var getMargin = function getMargin(n, scale) {
  if (!isNumber$1(n)) {
    return get(scale, n, n)
  }

  var isNegative = n < 0
  var absolute = Math.abs(n)
  var value = get(scale, absolute, absolute)

  if (!isNumber$1(value)) {
    return isNegative ? '-' + value : value
  }

  return value * (isNegative ? -1 : 1)
}

var configs = {}
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
}
configs.margin.m = configs.margin.margin
configs.margin.mt = configs.margin.marginTop
configs.margin.mr = configs.margin.marginRight
configs.margin.mb = configs.margin.marginBottom
configs.margin.ml = configs.margin.marginLeft
configs.margin.mx = configs.margin.marginX
configs.margin.my = configs.margin.marginY
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults$4.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults$4.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults$4.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults$4.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults$4.space,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults$4.space,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults$4.space,
  },
}
configs.padding.p = configs.padding.padding
configs.padding.pt = configs.padding.paddingTop
configs.padding.pr = configs.padding.paddingRight
configs.padding.pb = configs.padding.paddingBottom
configs.padding.pl = configs.padding.paddingLeft
configs.padding.px = configs.padding.paddingX
configs.padding.py = configs.padding.paddingY
var margin = system(configs.margin)
var padding = system(configs.padding)
var space = compose(margin, padding)

var shadow = system({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows',
  },
})

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }

      return target
    }

  return _extends.apply(this, arguments)
} // based on https://github.com/developit/dlv

var get$1 = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key]

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }

  return obj === undef ? def : obj
}
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em'
})
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY',
}
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height'],
}
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors',
}

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get$1(scale, value, value)
  }

  var absolute = Math.abs(value)
  var n = get$1(scale, absolute, absolute)
  if (typeof n === 'string') return '-' + n
  return n * -1
}

var transforms = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'top',
  'bottom',
  'left',
  'right',
].reduce(function (acc, curr) {
  var _extends2

  return _extends({}, acc, ((_extends2 = {}), (_extends2[curr] = positiveOrNegative), _extends2))
}, {})
var responsive = function responsive(styles) {
  return function (theme) {
    var next = {}
    var breakpoints = get$1(theme, 'breakpoints', defaultBreakpoints)
    var mediaQueries = [null].concat(
      breakpoints.map(function (n) {
        return '@media screen and (min-width: ' + n + ')'
      }),
    )

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key]
      if (value == null) continue

      if (!Array.isArray(value)) {
        next[key] = value
        continue
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i]

        if (!media) {
          next[key] = value[i]
          continue
        }

        next[media] = next[media] || {}
        if (value[i] == null) continue
        next[media][key] = value[i]
      }
    }

    return next
  }
}
var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {}
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props)

    var result = {}
    var obj = typeof args === 'function' ? args(theme) : args
    var styles = responsive(obj)(theme)

    for (var key in styles) {
      var x = styles[key]
      var val = typeof x === 'function' ? x(theme) : x

      if (key === 'variant') {
        var variant = css(get$1(theme, val))(theme)
        result = _extends({}, result, {}, variant)
        continue
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme)
        continue
      }

      var prop = get$1(aliases, key, key)
      var scaleName = get$1(scales, prop)
      var scale = get$1(theme, scaleName, get$1(theme, prop, {}))
      var transform = get$1(transforms, prop, get$1)
      var value = transform(scale, val, val)

      if (multiples[prop]) {
        var dirs = multiples[prop]

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value
        }
      } else {
        result[prop] = value
      }
    }

    return result
  }
}

var variant = function variant(_ref) {
  var _config

  var scale = _ref.scale,
    _ref$prop = _ref.prop,
    prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
    _ref$variants = _ref.variants,
    variants = _ref$variants === void 0 ? {} : _ref$variants,
    key = _ref.key
  var sx

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return css(get(scale, value, null))(props.theme)
    }
  } else {
    sx = function sx(value, scale) {
      return get(scale, value, null)
    }
  }

  sx.scale = scale || key
  sx.defaults = variants
  var config = ((_config = {}), (_config[prop] = sx), _config)
  var parser = createParser(config)
  return parser
}
var buttonStyle = variant({
  key: 'buttons',
})
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle',
})
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors',
})

var width = layout.width,
  height = layout.height,
  minHeight = layout.minHeight,
  display = layout.display,
  overflow = layout.overflow
var opacity = color.opacity
var fontSize = typography.fontSize,
  fontFamily = typography.fontFamily,
  fontWeight = typography.fontWeight,
  lineHeight = typography.lineHeight
var alignItems = flexbox.alignItems,
  justifyContent = flexbox.justifyContent,
  flexWrap = flexbox.flexWrap,
  flexDirection = flexbox.flexDirection,
  flex = flexbox.flex
var gridGap = grid.gridGap,
  gridColumnGap = grid.gridColumnGap,
  gridRowGap = grid.gridRowGap,
  gridAutoFlow = grid.gridAutoFlow,
  gridAutoColumns = grid.gridAutoColumns,
  gridAutoRows = grid.gridAutoRows,
  gridTemplateColumns = grid.gridTemplateColumns,
  gridTemplateRows = grid.gridTemplateRows,
  gridTemplateAreas = grid.gridTemplateAreas,
  gridArea = grid.gridArea
var borderRadius = border.borderRadius
var zIndex = position.zIndex,
  top = position.top,
  right = position.right,
  bottom = position.bottom,
  left = position.left

var style = function style(_ref) {
  var prop = _ref.prop,
    cssProperty = _ref.cssProperty,
    alias = _ref.alias,
    key = _ref.key,
    transformValue = _ref.transformValue,
    scale = _ref.scale,
    properties = _ref.properties
  var config = {}
  config[prop] = createStyleFunction({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  var parse = createParser(config)
  return parse
}

var datepickerPhrases = {
  datepickerStartDatePlaceholder: 'Select',
  datepickerStartDateLabel: 'Start date:',
  datepickerEndDatePlaceholder: 'Select',
  datepickerEndDateLabel: 'End date:',
  resetDates: 'Reset dates',
  close: 'Close',
}
var dateRangeInputPhrases = __assign(__assign({}, datepickerPhrases), {
  startDateAriaLabel: 'Start date',
  endDateAriaLabel: 'End date',
  startDatePlaceholder: 'Start date',
  endDatePlaceholder: 'End date',
})
var dateSingleInputPhrases = __assign(__assign({}, datepickerPhrases), {
  dateAriaLabel: 'Select date',
  datePlaceholder: 'Select date',
})

var daySizeGridTemplateColumns = style({
  // React prop name and CSS property
  prop: 'daySizeGridTemplateColumns',
  // CSS property (if different from prop argument)
  cssProperty: 'gridTemplateColumns',
  // key for theme values
  key: 'gridTemplateColumns',
  // accessor function for transforming the value
  transformValue: function (n) {
    return 'repeat(7, ' + n + 'px)'
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var composeGridStyles = compose(
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumnGap,
  gridGap,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  alignItems,
  justifyContent,
  space,
)
var Grid = styled__default('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  display: grid;\n  ', '\n  ', '\n'],
      ['\n  display: grid;\n  ', '\n  ', '\n'],
    )),
  composeGridStyles,
  daySizeGridTemplateColumns,
)
var templateObject_1

var composeFlexStyles = compose(
  space,
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  gridArea,
  height,
  width,
)
var Flex = styled__default('div')(
  templateObject_1$1 ||
    (templateObject_1$1 = __makeTemplateObject(
      ['\n  display: flex;\n  ', '\n'],
      ['\n  display: flex;\n  ', '\n'],
    )),
  composeFlexStyles,
)
var templateObject_1$1

var composeBoxStyles = compose(
  gridArea,
  height,
  space,
  width,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
)
var Box = styled__default('div')(
  templateObject_1$2 ||
    (templateObject_1$2 = __makeTemplateObject(
      ['\n  box-sizing: border-box;\n  ', '\n'],
      ['\n  box-sizing: border-box;\n  ', '\n'],
    )),
  composeBoxStyles,
)
var templateObject_1$2

function CalendarIcon(_a) {
  var height = _a.height,
    width = _a.width,
    color = _a.color,
    _b = _a.className,
    className = _b === void 0 ? '' : _b
  return React__default.createElement(
    'svg',
    {
      width: width,
      height: height,
      color: color,
      className: className,
      viewBox: '0 0 12 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      d:
        'M8 1H7v1h1V1zM6.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM6 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 6 3zm3.5 5.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 9 3zm-.5 2.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-3 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-2 3h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM11 1h-1v1h1v9H1V2h1V1H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM3.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 1H4v1h1V1zm1.5 7.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-4-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM3 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 3 3z',
      fill: 'currentColor',
      fillRule: 'nonzero',
    }),
  )
}

function useThemeProps(themeProps) {
  if (themeProps === void 0) {
    themeProps = {}
  }
  var context = React.useContext(styled.ThemeContext)
  var theme = React.useMemo(
    function () {
      if (
        context &&
        typeof context === 'object' &&
        context.reactDatepicker &&
        typeof context.reactDatepicker === 'object'
      ) {
        return Object.keys(themeProps).reduce(function (prevObj, val) {
          var _a
          return __assign(
            __assign({}, prevObj),
            ((_a = {}), (_a[val] = context.reactDatepicker[val] || themeProps[val]), _a),
          )
        }, {})
      }
      return themeProps
    },
    [context, themeProps],
  )
  return theme
}

var globalStyles = {
  fontFamily: 'Montserrat, sans-serif',
  colors: {
    primaryColor: '#00aeef',
    silverCloud: '#929598',
    charcoal: '#001217',
    darcula: '#343132',
    mud: '#58595B',
    greey: '#808285',
    graci: '#BCBEC0',
    white: '#ffffff',
    accessibility: '#009fef',
    selectedDay: '#71c9ed',
    selectedDayHover: '#39beef',
    normalDayHover: '#e6e7e8',
  },
  daySize: 36,
}

function getThemeProp(themeProp, defaultValue, theme) {
  if (
    theme &&
    typeof theme === 'object' &&
    theme.reactDatepicker &&
    typeof theme.reactDatepicker === 'object' &&
    theme.reactDatepicker.colors &&
    typeof theme.reactDatepicker.colors === 'object' &&
    theme.reactDatepicker.colors[themeProp]
  ) {
    return theme.reactDatepicker.colors[themeProp]
  }
  return defaultValue
}

var placeholderColor = style({
  prop: 'placeholderColor',
  cssProperty: 'color',
})
var placeholderFontWeight = style({
  prop: 'placeholderFontWeight',
  cssProperty: 'fontWeight',
})
var composeInputLabelStyles = compose(position, border, background, display, borderRadius, space)
var InputLabel = styled__default('label')(
  templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeInputLabelStyles,
)
var composeCalendarWrapperStyles = compose(position, left, right, top, height, width)
var CalendarWrapper = styled__default('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
    )),
  composeCalendarWrapperStyles,
)
var composeStyledInputStyle = compose(
  background,
  space,
  fontFamily,
  fontSize,
  color,
  fontWeight,
  space,
  border,
  width,
  minHeight,
  shadow,
)
var StyledInput = styled__default('input')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n\n  ::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    ',
        '\n    ',
        '\n  }\n  ::-moz-placeholder {\n    /* Firefox 19+ */\n    ',
        '\n    ',
        '\n  }\n  :-moz-placeholder {\n    /* Firefox 18- */\n    ',
        '\n    ',
        '\n  }\n',
      ],
      [
        '\n  ',
        '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n\n  ::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    ',
        '\n    ',
        '\n  }\n  ::-moz-placeholder {\n    /* Firefox 19+ */\n    ',
        '\n    ',
        '\n  }\n  :-moz-placeholder {\n    /* Firefox 18- */\n    ',
        '\n    ',
        '\n  }\n',
      ],
    )),
  composeStyledInputStyle,
  placeholderFontWeight,
  placeholderColor,
  placeholderFontWeight,
  placeholderColor,
  placeholderFontWeight,
  placeholderColor,
)
function Input(_a) {
  var placeholder = _a.placeholder,
    id = _a.id,
    vertical = _a.vertical,
    isActive = _a.isActive,
    ariaLabel = _a.ariaLabel,
    onClick = _a.onClick,
    value = _a.value,
    showCalendarIcon = _a.showCalendarIcon,
    padding = _a.padding,
    rtl = _a.rtl,
    disableAccessibility = _a.disableAccessibility,
    dateFormat = _a.dateFormat,
    _b = _a.onChange,
    onChange = _b === void 0 ? function () {} : _b
  var _c = React.useState(value),
    searchString = _c[0],
    setSearchString = _c[1]
  var ref = React.useRef(null)
  React.useEffect(
    function () {
      setSearchString(value)
    },
    [value],
  )
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    inputFontWeight: 600,
    inputFontSize: '14px',
    inputColor: getThemeProp('charcoal', globalStyles.colors.charcoal, themeContext),
    inputBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    inputMinHeight: '46px',
    inputWidth: '100%',
    inputPadding: padding,
    inputBorder: '0',
    inputPlaceholderFontWeight: 500,
    inputPlaceholderColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
    inputCalendarWrapperPosition: 'absolute',
    inputCalendarWrapperHeight: '12px',
    inputCalendarWrapperWidth: '12px',
    inputCalendarWrapperTop: '16px',
    inputCalendarWrapperLeft: rtl ? 'unset' : vertical ? '8px' : '16px',
    inputCalendarWrapperRight: rtl ? (vertical ? '8px' : '16px') : 'unset',
    inputCalendarIconWidth: '12px',
    inputCalendarIconHeight: '12px',
    inputCalendarIconColor: getThemeProp('graci', globalStyles.colors.graci, themeContext),
    inputLabelDisplay: 'block',
    inputLabelPosition: 'relative',
    inputLabelBorder: '1px solid ' + getThemeProp('graci', globalStyles.colors.graci, themeContext),
    inputLabelBorderRadius: '2px',
    inputLabelBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    inputLabelMargin: '0',
    inputActiveBoxShadow:
      'inset 0px -3px 0 ' +
      getThemeProp('primaryColor', globalStyles.colors.primaryColor, themeContext),
  })
  function handleOnChange(e) {
    var dateValue = e.target.value
    setSearchString(dateValue)
    if (typeof ref.current === 'number') {
      // @ts-ignore
      clearTimeout(ref.current)
    }
    // @ts-ignore
    ref.current = setTimeout(function () {
      onClick()
      // @ts-ignore
      var parsedDate = parse(dateValue, dateFormat, new Date())
      // @ts-ignore
      if (!isNaN(parsedDate)) {
        onChange(parsedDate)
      }
    }, 1000)
  }
  return React__default.createElement(
    InputLabel,
    {
      htmlFor: id,
      display: theme.inputLabelDisplay,
      position: theme.inputLabelPosition,
      border: theme.inputLabelBorder,
      background: theme.inputLabelBackground,
      borderRadius: theme.inputLabelBorderRadius,
      m: theme.inputLabelMargin,
    },
    showCalendarIcon &&
      React__default.createElement(
        CalendarWrapper,
        {
          position: theme.inputCalendarWrapperPosition,
          height: theme.inputCalendarWrapperHeight,
          width: theme.inputCalendarWrapperWidth,
          top: theme.inputCalendarWrapperTop,
          left: theme.inputCalendarWrapperLeft,
          right: theme.inputCalendarWrapperRight,
        },
        React__default.createElement(
          CalendarIcon,
          // @ts-ignore
          {
            // @ts-ignore
            width: theme.inputCalendarIconWidth,
            // @ts-ignore
            height: theme.inputCalendarIconHeight,
            // @ts-ignore
            color: theme.inputCalendarIconColor,
          },
        ),
      ),
    React__default.createElement(StyledInput, {
      tabIndex: disableAccessibility ? -1 : 0,
      border: theme.inputBorder,
      p: theme.inputPadding,
      // @ts-ignore
      width: theme.inputWidth,
      minHeight: theme.inputMinHeight,
      background: theme.inputBackground,
      fontFamily: theme.fontFamily,
      // @ts-ignore
      color: theme.inputColor,
      fontSize: theme.inputFontSize,
      fontWeight: theme.inputFontWeight,
      placeholderColor: theme.inputPlaceholderColor,
      placeholderFontWeight: theme.inputPlaceholderFontWeight,
      boxShadow: isActive ? theme.inputActiveBoxShadow : 'none',
      id: id,
      placeholder: placeholder,
      'aria-label': ariaLabel,
      value: searchString,
      autoComplete: 'off',
      onChange: handleOnChange,
      onFocus: onClick,
      'data-testid': 'DatepickerInput',
    }),
  )
}
var templateObject_1$3, templateObject_2, templateObject_3

function calculateAngle(direction) {
  switch (direction) {
    case 'up':
      return 0
    case 'down':
      return 180
    case 'left':
      return -90
    case 'right':
    default:
      return 90
  }
}
function ArrowIcon(_a) {
  var height = _a.height,
    width = _a.width,
    iconColor = _a.iconColor,
    _b = _a.direction,
    direction = _b === void 0 ? 'right' : _b,
    _c = _a.className,
    className = _c === void 0 ? '' : _c
  var angle = calculateAngle(direction)
  return React__default.createElement(
    'svg',
    {
      width: width,
      height: height,
      color: iconColor,
      className: className,
      transform: 'rotate(' + angle + ' 0 0)',
      viewBox: '0 0 9 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      d:
        'M4.46.001a.538.538 0 0 0-.358.174L.156 4.48a.538.538 0 1 0 .796.724l3.01-3.285v13.689a.563.563 0 0 0 .538.55.563.563 0 0 0 .538-.55V1.918l3.01 3.286a.538.538 0 1 0 .796-.724L4.898.175a.538.538 0 0 0-.437-.174z',
    }),
  )
}

var composeStyles = compose(fontFamily, fontSize, fontWeight, color, lineHeight, space)
var Text = styled__default('div')(
  templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeStyles,
)
var templateObject_1$4

var StyledDate = styled__default(Text)(
  templateObject_2$1 ||
    (templateObject_2$1 = __makeTemplateObject(
      [
        "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
        '\n',
      ],
      [
        "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
        '\n',
      ],
    )),
  function (_a) {
    var isActive = _a.isActive,
      selectDateBorderColor = _a.selectDateBorderColor
    return (
      isActive &&
      styled.css(
        templateObject_1$5 ||
          (templateObject_1$5 = __makeTemplateObject(
            ['\n      &:after {\n        background: ', ';\n      }\n    '],
            ['\n      &:after {\n        background: ', ';\n      }\n    '],
          )),
        selectDateBorderColor,
      )
    )
  },
)
function SelectDate(_a) {
  var title = _a.title,
    isActive = _a.isActive,
    date = _a.date,
    vertical = _a.vertical
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    selectDateLabelFontSize: '11px',
    selectDateLabelColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
    selectDateLabelMargin: '0 0 8px',
    selectDateDateColor: getThemeProp('charcoal', globalStyles.colors.charcoal, themeContext),
    selectDateDateFontSize: vertical ? '16px' : '24px',
    selectDateDateFontWeight: 500,
    selectDateDatePadding: '0 0 15px',
    selectDateBorderColor: getThemeProp(
      'primaryColor',
      globalStyles.colors.primaryColor,
      themeContext,
    ),
    selectDatePadding: '0',
  })
  return React__default.createElement(
    Box,
    {p: theme.selectDatePadding},
    React__default.createElement(
      Text,
      {
        fontFamily: theme.fontFamily,
        fontSize: theme.selectDateLabelFontSize,
        // @ts-ignore
        color: theme.selectDateLabelColor,
        m: theme.selectDateLabelMargin,
      },
      title,
    ),
    React__default.createElement(
      StyledDate,
      {
        as: 'span',
        // @ts-ignore
        color: theme.selectDateDateColor,
        fontSize: theme.selectDateDateFontSize,
        fontWeight: theme.selectDateDateFontWeight,
        fontFamily: theme.fontFamily,
        p: theme.selectDateDatePadding,
        isActive: isActive,
        // @ts-ignore
        selectDateBorderColor: theme.selectDateBorderColor,
      },
      date,
    ),
  )
}
var templateObject_1$5, templateObject_2$1

var MonthLabel = function (_a) {
  var label = _a.label
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    monthLabelColor: getThemeProp('darcula', globalStyles.colors.darcula, themeContext),
    monthLabelLineHeight: 1.57,
    monthLabelFontWeight: 600,
    monthLabelFontSize: '14px',
  })
  return React__default.createElement(
    Text,
    {
      fontFamily: theme.fontFamily,
      fontSize: theme.monthLabelFontSize,
      fontWeight: theme.monthLabelFontWeight,
      lineHeight: theme.monthLabelLineHeight,
      // @ts-ignore
      color: theme.monthLabelColor,
      'data-testid': 'MonthLabel',
    },
    label,
  )
}

var MonthLabel$1 = function (_a) {
  var label = _a.label
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    dayLabelColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, themeContext),
    dayLabelFontWeight: 500,
    dayLabelFontSize: '11px',
  })
  return React__default.createElement(
    Text,
    {
      fontFamily: theme.fontFamily,
      fontSize: theme.dayLabelFontSize,
      fontWeight: theme.dayLabelFontWeight,
      // @ts-ignore
      color: theme.dayLabelColor,
      'data-testid': 'DayLabel',
    },
    label,
  )
}

var datepickerContextDefaultValue = {
  rtl: false,
  focusedDate: null,
  isDateFocused: function () {
    return false
  },
  isDateSelected: function () {
    return false
  },
  isDateHovered: function () {
    return false
  },
  isDateBlocked: function () {
    return false
  },
  isFirstOrLastSelectedDate: function () {
    return false
  },
  onDateFocus: function () {},
  onDateHover: function () {},
  onDateSelect: function () {},
  onDayRender: undefined,
}
var DatepickerContext = React__default.createContext(datepickerContextDefaultValue)

var dayHeight = style({
  // React prop name and CSS property
  prop: 'dayHeight',
  // CSS property (if different from prop argument)
  cssProperty: 'height',
  // key for theme values
  key: 'dayHeight',
  // accessor function for transforming the value
  transformValue: function (n) {
    return n + 'px'
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var dayWidth = style({
  // React prop name and CSS property
  prop: 'dayWidth',
  // CSS property (if different from prop argument)
  cssProperty: 'width',
  // key for theme values
  key: 'dayWidth',
  // accessor function for transforming the value
  transformValue: function (n) {
    return n + 'px'
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var dayHoverColor = style({
  // React prop name and CSS property
  prop: 'dayHoverColor',
  // CSS property (if different from prop argument)
  cssProperty: 'color',
  // key for theme values
  key: 'dayHoverColor',
  // accessor function for transforming the value
  transformValue: function (n) {
    return n
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var daySelectedHoverColor = style({
  // React prop name and CSS property
  prop: 'daySelectedHoverColor',
  // CSS property (if different from prop argument)
  cssProperty: 'color',
  // key for theme values
  key: 'daySelectedHoverColor',
  // accessor function for transforming the value
  transformValue: function (n) {
    return n
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var dayHoverBackground = style({
  // React prop name and CSS property
  prop: 'dayHoverBackground',
  // CSS property (if different from prop argument)
  cssProperty: 'background',
  // key for theme values
  key: 'dayHoverBackground',
  // accessor function for transforming the value
  transformValue: function (n) {
    return n
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var daySelectedHoverBackground = style({
  // React prop name and CSS property
  prop: 'daySelectedHoverBackground',
  // CSS property (if different from prop argument)
  cssProperty: 'background',
  // key for theme values
  key: 'daySelectedHoverBackground',
  // accessor function for transforming the value
  transformValue: function (n) {
    return n
  },
  // add a fallback scale object or array, if theme is not present
  scale: [0, 4, 8, 16, 32],
})
var composeStyledDayStyles = compose(shadow, background, color, fontFamily, fontWeight, fontSize)
var StyledDay = styled__default('button')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  ',
        '\n  ',
        '\n  ',
        '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n\n  ',
        '\n\n  // @ts-ignore\n  ',
        '\n\n  &:focus {\n    // @ts-ignore\n    ',
        '\n  }\n',
      ],
      [
        '\n  ',
        '\n  ',
        '\n  ',
        '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n\n  ',
        '\n\n  // @ts-ignore\n  ',
        '\n\n  &:focus {\n    // @ts-ignore\n    ',
        '\n  }\n',
      ],
    )),
  dayHeight,
  dayWidth,
  composeStyledDayStyles,
  function (_a) {
    var disabledDate = _a.disabledDate,
      isSelectedStartOrEnd = _a.isSelectedStartOrEnd
    return (
      disabledDate &&
      !isSelectedStartOrEnd &&
      styled.css(
        templateObject_1$6 ||
          (templateObject_1$6 = __makeTemplateObject(
            ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
          )),
      )
    )
  },
  function (_a) {
    var disabledDate = _a.disabledDate,
      isSelected = _a.isSelected,
      isSelectedStartOrEnd = _a.isSelectedStartOrEnd,
      isWithinHoverRange = _a.isWithinHoverRange
    if (!disabledDate && !isSelected && !isSelectedStartOrEnd && !isWithinHoverRange) {
      return styled.css(
        templateObject_2$2 ||
          (templateObject_2$2 = __makeTemplateObject(
            ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
            ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
          )),
        dayHoverBackground,
        dayHoverColor,
      )
    } else if (isSelected && !isSelectedStartOrEnd) {
      return styled.css(
        templateObject_3$1 ||
          (templateObject_3$1 = __makeTemplateObject(
            ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
            ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
          )),
        daySelectedHoverBackground,
        daySelectedHoverColor,
      )
    }
    return ''
  },
  function (_a) {
    var borderAccessibilityColor = _a.borderAccessibilityColor
    return styled.css(
      templateObject_4 ||
        (templateObject_4 = __makeTemplateObject(
          ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
        )),
      borderAccessibilityColor,
    )
  },
)
function getColor(isSelected, isSelectedStartOrEnd, isWithinHoverRange, _a) {
  var selectedFirstOrLast = _a.selectedFirstOrLast,
    normal = _a.normal,
    selected = _a.selected,
    rangeHover = _a.rangeHover
  if (isSelectedStartOrEnd) {
    return selectedFirstOrLast
  } else if (isSelected) {
    return selected
  } else if (isWithinHoverRange) {
    return rangeHover
  } else {
    return normal
  }
}
function Day(_a) {
  var day = _a.day,
    date = _a.date
  var dayRef = React.useRef(null)
  var _b = React.useContext(DatepickerContext),
    focusedDate = _b.focusedDate,
    isDateFocused = _b.isDateFocused,
    isDateSelected = _b.isDateSelected,
    isDateHovered = _b.isDateHovered,
    isDateBlocked = _b.isDateBlocked,
    isFirstOrLastSelectedDate = _b.isFirstOrLastSelectedDate,
    onDateSelect = _b.onDateSelect,
    onDateFocus = _b.onDateFocus,
    onDateHover = _b.onDateHover,
    onDayRender = _b.onDayRender
  var dayProps = useDay({
    date: date,
    focusedDate: focusedDate,
    isDateFocused: isDateFocused,
    isDateSelected: isDateSelected,
    isDateHovered: isDateHovered,
    isDateBlocked: isDateBlocked,
    isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
    onDateFocus: onDateFocus,
    onDateSelect: onDateSelect,
    onDateHover: onDateHover,
    dayRef: dayRef,
  })
  var themeContext = React.useContext(styled.ThemeContext)
  var white = getThemeProp('white', globalStyles.colors.white, themeContext)
  var mud = getThemeProp('mud', globalStyles.colors.mud, themeContext)
  var primaryColor = getThemeProp('primaryColor', globalStyles.colors.primaryColor, themeContext)
  var accessibility = getThemeProp('accessibility', globalStyles.colors.accessibility, themeContext)
  var selectedDay = getThemeProp('selectedDay', globalStyles.colors.selectedDay, themeContext)
  var selectedDayHover = getThemeProp(
    'selectedDayHover',
    globalStyles.colors.selectedDayHover,
    themeContext,
  )
  var normalDayHover = getThemeProp(
    'normalDayHover',
    globalStyles.colors.normalDayHover,
    themeContext,
  )
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    daySize: globalStyles.daySize,
    dayFontWeight: 500,
    dayFontSize: '14px',
    dayColor: mud,
    dayHoverColor: mud,
    daySelectedColor: white,
    daySelectedHoverColor: white,
    dayHoverRangeColor: white,
    daySelectedFirstOrLastColor: white,
    dayBackground: white,
    dayHoverBackground: normalDayHover,
    daySelectedBackground: selectedDay,
    daySelectedHoverBackground: selectedDayHover,
    dayHoverRangeBackground: selectedDay,
    daySelectedFirstOrLastBackground: primaryColor,
    dayBorderColor: normalDayHover,
    daySelectedBorderColor: selectedDay,
    dayHoverRangeBorderColor: selectedDay,
    daySelectedFirstOrLastBorderColor: primaryColor,
    dayAccessibilityBorderColor: accessibility,
  })
  var borderColor = React.useMemo(
    function () {
      return getColor(
        dayProps.isSelected,
        dayProps.isSelectedStartOrEnd,
        dayProps.isWithinHoverRange,
        {
          // @ts-ignore
          selectedFirstOrLast: theme.daySelectedFirstOrLastBorderColor,
          // @ts-ignore
          selected: theme.daySelectedBorderColor,
          // @ts-ignore
          normal: theme.dayBorderColor,
          // @ts-ignore
          rangeHover: theme.dayHoverRangeColor,
        },
      )
    },
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )
  var background = React.useMemo(
    function () {
      return getColor(
        dayProps.isSelected,
        dayProps.isSelectedStartOrEnd,
        dayProps.isWithinHoverRange,
        {
          // @ts-ignore
          selectedFirstOrLast: theme.daySelectedFirstOrLastBackground,
          // @ts-ignore
          selected: theme.daySelectedBackground,
          // @ts-ignore
          normal: theme.dayBackground,
          // @ts-ignore
          rangeHover: theme.dayHoverRangeBackground,
        },
      )
    },
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )
  var color = React.useMemo(
    function () {
      return getColor(
        dayProps.isSelected,
        dayProps.isSelectedStartOrEnd,
        dayProps.isWithinHoverRange,
        {
          // @ts-ignore
          selectedFirstOrLast: theme.daySelectedFirstOrLastColor,
          // @ts-ignore
          selected: theme.daySelectedColor,
          // @ts-ignore
          normal: theme.dayColor,
          // @ts-ignore
          rangeHover: theme.dayHoverRangeColor,
        },
      )
    },
    [dayProps.isSelected, dayProps.isSelectedStartOrEnd, theme, dayProps.isWithinHoverRange],
  )
  return React__default.createElement(
    StyledDay,
    __assign({}, dayProps, {
      ref: dayRef,
      dayHeight: theme.daySize,
      dayWidth: theme.daySize,
      background: background,
      // @ts-ignore
      color: color,
      fontFamily: theme.fontFamily,
      fontWeight: theme.dayFontWeight,
      fontSize: theme.dayFontSize,
      // @ts-ignore
      daySelectedHoverBackground: theme.daySelectedHoverBackground,
      // @ts-ignore
      dayHoverBackground: theme.dayHoverBackground,
      // @ts-ignore
      dayHoverColor: theme.dayHoverColor,
      // @ts-ignore
      daySelectedHoverColor: theme.daySelectedHoverColor,
      // @ts-ignore
      borderAccessibilityColor: theme.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        borderColor +
        ',\n        0 1px 0 0 ' +
        borderColor +
        ',\n        1px 1px 0 0 ' +
        borderColor +
        ',\n        1px 0 0 0 ' +
        borderColor +
        ' inset,\n        0 1px 0 0 ' +
        borderColor +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + date.toDateString(),
      type: 'button',
    }),
    typeof onDayRender === 'function'
      ? onDayRender(date)
      : React__default.createElement(
          Flex,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          day,
        ),
  )
}
var templateObject_1$6, templateObject_2$2, templateObject_3$1, templateObject_4, templateObject_5

var opacity0To100 = styled.keyframes(
  templateObject_1$7 ||
    (templateObject_1$7 = __makeTemplateObject(
      ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
    )),
)
var MonthWrapper = styled__default('div')(
  templateObject_2$3 ||
    (templateObject_2$3 = __makeTemplateObject(
      [
        '\n  animation-name: ',
        ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
      ],
      [
        '\n  animation-name: ',
        ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
      ],
    )),
  opacity0To100,
)
var Month = function (_a) {
  var year = _a.year,
    month = _a.month,
    firstDayOfWeek = _a.firstDayOfWeek,
    dayLabelFormat = _a.dayLabelFormat,
    monthLabelFormat = _a.monthLabelFormat,
    weekdayLabelFormat = _a.weekdayLabelFormat
  var _b = useMonth({
      dayLabelFormat: dayLabelFormat,
      monthLabelFormat: monthLabelFormat,
      weekdayLabelFormat: weekdayLabelFormat,
      year: year,
      month: month,
      firstDayOfWeek: firstDayOfWeek,
    }),
    days = _b.days,
    weekdayLabels = _b.weekdayLabels,
    monthLabel = _b.monthLabel
  var theme = useThemeProps({
    daySize: globalStyles.daySize,
    monthLabelMargin: '0 0 28px',
    monthDayLabelMargin: '0 0 16px',
  })
  return React__default.createElement(
    MonthWrapper,
    null,
    React__default.createElement(
      Flex,
      {justifyContent: 'center', m: theme.monthLabelMargin},
      React__default.createElement(MonthLabel, {label: monthLabel}),
    ),
    React__default.createElement(
      Grid,
      {daySizeGridTemplateColumns: theme.daySize},
      weekdayLabels.map(function (weekdayLabel) {
        return React__default.createElement(
          Flex,
          {key: weekdayLabel, justifyContent: 'center', m: theme.monthDayLabelMargin},
          React__default.createElement(MonthLabel$1, {label: weekdayLabel}),
        )
      }),
    ),
    React__default.createElement(
      Grid,
      {daySizeGridTemplateColumns: theme.daySize},
      days.map(function (day, index) {
        if (typeof day === 'object') {
          return React__default.createElement(Day, {
            date: day.date,
            key: day.dayLabel,
            day: day.dayLabel,
          })
        }
        return React__default.createElement('div', {key: index})
      }),
    ),
  )
}
var templateObject_1$7, templateObject_2$3

function CaretIcon(_a) {
  var height = _a.height,
    width = _a.width,
    color = _a.color,
    _b = _a.className,
    className = _b === void 0 ? '' : _b
  return React__default.createElement(
    'svg',
    {
      width: width,
      height: height,
      color: color,
      className: className,
      viewBox: '0 0 14 14',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M9.015 11.15c-.027-.18-.04-.39-.067-.585a3.958 3.958 0 0 1-4.48-.056C2.663 9.241 2.142 6.663 3.292 4.74c1.217-2.02 3.797-2.592 5.696-1.282.589.404 1.03.934 1.35 1.533l-1.216.808L13 7.917l-.174-4.556-1.056.696a5.812 5.812 0 0 0-1.846-2.062C7.25.155 3.64.935 1.901 3.765c-1.672 2.717-.95 6.382 1.605 8.194a5.535 5.535 0 0 0 5.616.501c0-.083 0-.167-.013-.264a9.193 9.193 0 0 0-.094-1.046z',
    }),
  )
}

var StyledReactDates = styled__default('button')(
  templateObject_1$8 ||
    (templateObject_1$8 = __makeTemplateObject(
      [
        '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
      ],
      [
        '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
      ],
    )),
)
var RedoIconStyle = styled__default(CaretIcon)(
  templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  function (_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      styled.css(
        templateObject_2$4 ||
          (templateObject_2$4 = __makeTemplateObject(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  },
)
function ResetDates(_a) {
  var onResetDates = _a.onResetDates,
    text = _a.text,
    rtl = _a.rtl
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    resetDatesIconColor: getThemeProp('mud', globalStyles.colors.mud, themeContext),
    resetDatesIconHeight: '14px',
    resetDatesIconWidth: '14px',
    resetDatesTextColor: getThemeProp('darcula', globalStyles.colors.darcula, themeContext),
    resetDatesTextMargin: rtl ? '1px 8px 0 0' : '1px 0 0 8px',
    resetDatesTextLineHeight: 1.18,
    resetDatesTextFontSize: '11px',
  })
  function handleMouseUp(e) {
    // @ts-ignore
    e.currentTarget.blur()
  }
  return React__default.createElement(
    StyledReactDates,
    {'aria-label': 'Reset dates', tabIndex: -1, onClick: onResetDates, onMouseUp: handleMouseUp},
    React__default.createElement(
      RedoIconStyle,
      // @ts-ignore
      {
        // @ts-ignore
        height: theme.resetDatesIconHeight,
        // @ts-ignore
        width: theme.resetDatesIconWidth,
        // @ts-ignore
        color: theme.resetDatesIconColor,
        rtl: rtl,
      },
    ),
    React__default.createElement(
      Text,
      {
        m: theme.resetDatesTextMargin,
        lineHeight: theme.resetDatesTextLineHeight,
        fontFamily: theme.fontFamily,
        fontSize: theme.resetDatesTextFontSize,
        // @ts-ignore
        color: theme.resetDatesTextColor,
      },
      text,
    ),
  )
}
var templateObject_1$8, templateObject_2$4, templateObject_3$2

var Svg = styled__default('svg')(
  templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  function (_a) {
    var angle = _a.angle
    return styled.css(
      templateObject_1$9 ||
        (templateObject_1$9 = __makeTemplateObject(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      angle,
    )
  },
)
function calculateAngle$1(direction) {
  switch (direction) {
    case 'up':
      return 180
    case 'down':
      return 0
    case 'left':
      return 90
    case 'right':
    default:
      return -90
  }
}
function CaretIcon$1(_a) {
  var height = _a.height,
    width = _a.width,
    color = _a.color,
    _b = _a.direction,
    direction = _b === void 0 ? 'right' : _b,
    _c = _a.className,
    className = _c === void 0 ? '' : _c
  var angle = calculateAngle$1(direction)
  return React__default.createElement(
    Svg,
    {
      width: width,
      height: height,
      color: color,
      className: className,
      angle: angle,
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
var templateObject_1$9, templateObject_2$5

var composeSyles = compose(width, height, background, space, border)
var StyledNavButton = styled__default('button')(
  templateObject_1$a ||
    (templateObject_1$a = __makeTemplateObject(
      ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
    )),
  composeSyles,
)
function NavButton(_a) {
  var type = _a.type,
    onClick = _a.onClick,
    vertical = _a.vertical,
    rtl = _a.rtl,
    ariaLabel = _a.ariaLabel
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps({
    navButtonWidth: vertical ? '48px' : '30px',
    navButtonHeight: vertical ? '48px' : '30px',
    navButtonBackground: getThemeProp('white', globalStyles.colors.white, themeContext),
    navButtonBorder:
      '1px solid ' + getThemeProp('silverCloud', globalStyles.colors.silverCloud, themeContext),
    navButtonPadding: '0',
    navButtonIconHeight: vertical ? '18px' : '11px',
    navButtonIconWidth: vertical ? '28px' : '18px',
    navButtonIconColor: getThemeProp('greey', globalStyles.colors.greey, themeContext),
  })
  function handleMouseUp(e) {
    // @ts-ignore
    e.currentTarget.blur()
  }
  function getDirection() {
    if (type === 'next' && !vertical) {
      return 'right'
    } else if (type === 'next' && vertical) {
      return 'down'
    } else if (type === 'prev' && !vertical) {
      return 'left'
    }
    return 'up'
  }
  return React__default.createElement(
    StyledNavButton,
    {
      width: theme.navButtonWidth,
      height: theme.navButtonHeight,
      background: theme.navButtonBackground,
      border: theme.navButtonBorder,
      borderRight: getDirection() === 'up' && !rtl ? 'unset' : theme.navButtonBorder,
      borderLeft: getDirection() === 'up' && rtl ? 'unset' : theme.navButtonBorder,
      p: theme.navButtonPadding,
      type: 'button',
      'aria-label': ariaLabel,
      onClick: onClick,
      onMouseUp: handleMouseUp,
      'data-testid': 'DatepickerNavButton',
    },
    React__default.createElement(
      CaretIcon$1,
      // @ts-ignore
      {
        // @ts-ignore
        width: theme.navButtonIconWidth,
        // @ts-ignore
        height: theme.navButtonIconHeight,
        // @ts-ignore
        color: theme.navButtonIconColor,
        direction: getDirection(),
      },
    ),
  )
}
var templateObject_1$a

function CloseIcon(_a) {
  var height = _a.height,
    width = _a.width,
    color = _a.color,
    _b = _a.className,
    className = _b === void 0 ? '' : _b
  return React__default.createElement(
    'svg',
    {
      width: width,
      height: height,
      color: color,
      className: className,
      viewBox: '0 0 15 16',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M14.69.263a.802.802 0 0 0-1.187 0L7.47 6.694 1.433.262a.802.802 0 0 0-1.187 0 .938.938 0 0 0 0 1.267L6.28 7.96.246 14.392a.937.937 0 0 0 0 1.266.81.81 0 0 0 .594.262.81.81 0 0 0 .593-.262l6.035-6.432 6.035 6.432a.812.812 0 0 0 .593.262.81.81 0 0 0 .594-.262.937.937 0 0 0 0-1.266L8.656 7.96l6.034-6.43a.937.937 0 0 0 0-1.267z',
    }),
  )
}

var composeTextStyles = compose(space, color, fontSize, fontFamily, fontWeight)
var Text$1 = styled__default('div')(
  templateObject_1$b ||
    (templateObject_1$b = __makeTemplateObject(
      ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
    )),
  composeTextStyles,
)
var Wrapper = styled__default('button')(
  templateObject_2$6 ||
    (templateObject_2$6 = __makeTemplateObject(
      [
        '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
        ' {\n      ',
        '\n    }\n\n    svg {\n      ',
        '\n    }\n  }\n',
      ],
      [
        '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
        ' {\n      ',
        '\n    }\n\n    svg {\n      ',
        '\n    }\n  }\n',
      ],
    )),
  Text$1,
  color,
  color,
)
function Close(_a) {
  var onClick = _a.onClick,
    rtl = _a.rtl,
    closeText = _a.closeText
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps({
    fontFamily: globalStyles.fontFamily,
    closeMargin: rtl ? '1px 16px 0 0' : '1px 0 0 16px',
    closeColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, themeContext),
    closeHoverColor: getThemeProp('darcula', globalStyles.colors.darcula, themeContext),
    closeFontSize: '12px',
    closeFontWeight: 600,
  })
  return React__default.createElement(
    Wrapper,
    {
      onClick: onClick,
      // @ts-ignore
      color: theme.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    React__default.createElement(CloseIcon, {width: '15px', height: '16px', color: '#ADADAD'}),
    React__default.createElement(
      Text$1,
      {
        m: theme.closeMargin,
        // @ts-ignore
        color: theme.closeColor,
        fontSize: theme.closeFontSize,
        fontFamily: theme.fontFamily,
        fontWeight: theme.closeFontWeight,
      },
      closeText,
    ),
  )
}
var templateObject_1$b, templateObject_2$6

var opacity0To100$1 = styled.keyframes(
  templateObject_1$c ||
    (templateObject_1$c = __makeTemplateObject(
      ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
    )),
)
var composeStyledDatepickerStyles = compose(
  background,
  space,
  borderRadius,
  position,
  shadow,
  width,
  zIndex,
)
var StyledDatepicker = styled__default('div')(
  templateObject_3$3 ||
    (templateObject_3$3 = __makeTemplateObject(
      [
        '\n  ',
        '\n  ',
        '\n\n  animation-name: ',
        ';\n  animation-duration: 0.15s;\n  animation-timing-function: ease-in;\n',
      ],
      [
        '\n  ',
        '\n  ',
        '\n\n  animation-name: ',
        ';\n  animation-duration: 0.15s;\n  animation-timing-function: ease-in;\n',
      ],
    )),
  composeStyledDatepickerStyles,
  function (_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      styled.css(
        templateObject_2$7 ||
          (templateObject_2$7 = __makeTemplateObject(
            ['\n      direction: rtl;\n    '],
            ['\n      direction: rtl;\n    '],
          )),
      )
    )
  },
  opacity0To100$1,
)
var DateWrapper = styled__default('div')(
  templateObject_4$1 ||
    (templateObject_4$1 = __makeTemplateObject(
      [
        "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
      ],
      [
        "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
      ],
    )),
)
var composeCloseWrapperStyles = compose(display, justifyContent)
var CloseWrapper = styled__default(Box)(
  templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeCloseWrapperStyles,
)
var composeMonthGridStyles = compose(overflow, height)
var MonthGrid = styled__default(Grid)(
  templateObject_6 || (templateObject_6 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeMonthGridStyles,
)
function Datepicker(_a, ref) {
  var startDate = _a.startDate,
    endDate = _a.endDate,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    focusedInput = _a.focusedInput,
    onDatesChange = _a.onDatesChange,
    dayLabelFormat = _a.dayLabelFormat,
    weekdayLabelFormat = _a.weekdayLabelFormat,
    monthLabelFormat = _a.monthLabelFormat,
    onDayRender = _a.onDayRender,
    initialVisibleMonth = _a.initialVisibleMonth,
    _b = _a.vertical,
    vertical = _b === void 0 ? false : _b,
    _c = _a.rtl,
    rtl = _c === void 0 ? false : _c,
    _d = _a.showResetDates,
    showResetDates = _d === void 0 ? true : _d,
    _e = _a.showClose,
    showClose = _e === void 0 ? true : _e,
    _f = _a.showSelectedDates,
    showSelectedDates = _f === void 0 ? true : _f,
    _g = _a.exactMinBookingDays,
    exactMinBookingDays = _g === void 0 ? false : _g,
    _h = _a.isDateBlocked,
    isDateBlocked =
      _h === void 0
        ? function () {
            return false
          }
        : _h,
    _j = _a.minBookingDays,
    minBookingDays = _j === void 0 ? 1 : _j,
    _k = _a.onClose,
    onClose = _k === void 0 ? function () {} : _k,
    numberOfMonthsProp = _a.numberOfMonths,
    firstDayOfWeekProp = _a.firstDayOfWeek,
    _l = _a.displayFormat,
    displayFormat = _l === void 0 ? 'MM/dd/yyyy' : _l,
    _m = _a.phrases,
    phrases = _m === void 0 ? datepickerPhrases : _m,
    _o = _a.unavailableDates,
    unavailableDates = _o === void 0 ? [] : _o
  var _p = useDatepicker({
      startDate: startDate,
      endDate: endDate,
      focusedInput: focusedInput,
      onDatesChange: onDatesChange,
      minBookingDate: minBookingDate,
      maxBookingDate: maxBookingDate,
      minBookingDays: minBookingDays,
      isDateBlocked: isDateBlocked,
      exactMinBookingDays: exactMinBookingDays,
      unavailableDates: unavailableDates,
      initialVisibleMonth: initialVisibleMonth,
      numberOfMonths: numberOfMonthsProp,
      firstDayOfWeek: firstDayOfWeekProp,
    }),
    activeMonths = _p.activeMonths,
    isDateSelected = _p.isDateSelected,
    isFirstOrLastSelectedDate = _p.isFirstOrLastSelectedDate,
    isDateHovered = _p.isDateHovered,
    firstDayOfWeek = _p.firstDayOfWeek,
    onDateSelect = _p.onDateSelect,
    onResetDates = _p.onResetDates,
    goToPreviousMonths = _p.goToPreviousMonths,
    goToNextMonths = _p.goToNextMonths,
    numberOfMonths = _p.numberOfMonths,
    hoveredDate = _p.hoveredDate,
    onDateHover = _p.onDateHover,
    isDateFocused = _p.isDateFocused,
    focusedDate = _p.focusedDate,
    onDateFocus = _p.onDateFocus,
    isDateBlockedFn = _p.isDateBlocked
  React.useImperativeHandle(ref, function () {
    return {
      onDateSelect: function (date) {
        onDateSelect(date)
      },
    }
  })
  var monthGridRef = React.useRef(null)
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps({
    datepickerZIndex: null,
    datepickerBackground: '#ffffff',
    datepickerPadding: vertical ? '16px 16px 0' : '32px',
    datepickerBorderRadius: '2px',
    datepickerPosition: 'relative',
    datepickerWidth: 'fit-content',
    datepickerCloseWrapperPosition: vertical ? 'relative' : 'absolute',
    datepickerCloseWrapperDisplay: vertical ? 'flex' : 'block',
    datepickerCloseWrapperJustifyContent: vertical ? 'flex-end' : 'initial',
    datepickerCloseWrapperMargin: vertical ? '0 0 16px' : '0',
    datepickerCloseWrapperRight: rtl ? 'unset' : vertical ? '0' : '32px',
    datepickerCloseWrapperTop: 'unset',
    datepickerCloseWrapperLeft: rtl ? '32px' : 'unset',
    datepickerCloseWrapperBottom: 'unset',
    datepickerCloseWrapperZIndex: 1,
    datepickerSelectDateGridTemplateColumns: vertical ? '87px 50px 87px' : '126px 75px 126px',
    datepickerSelectDateGridTemplateRows: 'unset',
    datepickerSelectDateArrowIconWidth: '15px',
    datepickerSelectDateArrowIconHeight: '12px',
    datepickerSelectDateArrowIconColor: getThemeProp(
      'silverCloud',
      globalStyles.colors.silverCloud,
      themeContext,
    ),
    datepickerMonthsWrapperMargin:
      !showClose && !showSelectedDates ? 'unset' : !showSelectedDates ? '48px 0 0' : '28px 0 0',
    datepickerPreviousMonthButtonPosition: vertical ? 'relative' : 'absolute',
    datepickerPreviousMonthButtonTop: vertical ? 'unset' : '-5px',
    datepickerPreviousMonthButtonLeft: vertical ? 'unset' : '0',
    datepickerPreviousMonthButtonRight: 'unset',
    datepickerPreviousMonthButtonBottom: 'unset',
    datepickerNextMonthButtonPosition: vertical ? 'relative' : 'absolute',
    datepickerNextMonthButtonTop: vertical ? 'unset' : '-5px',
    datepickerNextMonthButtonLeft: 'unset',
    datepickerNextMonthButtonRight: vertical ? 'unset' : '0',
    datepickerNextMonthButtonBottom: 'unset',
    datepickerMonthsGridGap: vertical ? '32px' : '0 32px',
    datepickerMonthsGridOverflow: 'auto',
    datepickerMonthsGridHeight: vertical ? '50vh' : '100%',
    datepickerResetDatesWrapperMargin: vertical ? 'unset' : '32px 0 0',
    datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
  })
  function scrollTopToMonthGrid() {
    if (monthGridRef && monthGridRef.current && vertical) {
      monthGridRef.current.scrollTop = 0
    }
  }
  function handleGoToNextMonth() {
    goToNextMonths()
    scrollTopToMonthGrid()
  }
  function handleGoToPreviousMonth() {
    goToPreviousMonths()
    scrollTopToMonthGrid()
  }
  return React__default.createElement(
    styled.ThemeProvider,
    {
      theme: function (theme) {
        return theme || {}
      },
    },
    React__default.createElement(
      DatepickerContext.Provider,
      {
        value: {
          rtl: rtl,
          isDateFocused: isDateFocused,
          isDateSelected: isDateSelected,
          isDateHovered: isDateHovered,
          isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
          onDateFocus: onDateFocus,
          focusedDate: focusedDate,
          onDateSelect: onDateSelect,
          onDateHover: onDateHover,
          onDayRender: onDayRender,
          isDateBlocked: isDateBlockedFn,
        },
      },
      React__default.createElement(
        StyledDatepicker,
        {
          background: theme.datepickerBackground,
          p: theme.datepickerPadding,
          borderRadius: theme.datepickerBorderRadius,
          position: theme.datepickerPosition,
          boxShadow: theme.datepickerBoxShadow,
          width: theme.datepickerWidth,
          zIndex: theme.datepickerZIndex,
          rtl: rtl,
        },
        showClose &&
          React__default.createElement(
            CloseWrapper,
            {
              m: theme.datepickerCloseWrapperMargin,
              display: theme.datepickerCloseWrapperDisplay,
              justifyContent: theme.datepickerCloseWrapperJustifyContent,
              position: theme.datepickerCloseWrapperPosition,
              right: theme.datepickerCloseWrapperRight,
              top: theme.datepickerCloseWrapperTop,
              left: theme.datepickerCloseWrapperLeft,
              bottom: theme.datepickerCloseWrapperBottom,
              zIndex: theme.datepickerCloseWrapperZIndex,
            },
            React__default.createElement(Close, {
              onClick: onClose,
              rtl: rtl,
              closeText: phrases.close,
            }),
          ),
        showSelectedDates &&
          React__default.createElement(
            DateWrapper,
            null,
            React__default.createElement(
              Grid,
              {
                'data-testid': 'SelectedDatesGrid',
                gridTemplateColumns: theme.datepickerSelectDateGridTemplateColumns,
                gridTemplateRows: theme.datepickerSelectDateGridTemplateRows,
              },
              React__default.createElement(SelectDate, {
                title: phrases.datepickerStartDateLabel,
                date: getInputValue(
                  startDate,
                  displayFormat,
                  phrases.datepickerStartDatePlaceholder,
                ),
                isActive: focusedInput === START_DATE,
                vertical: vertical,
              }),
              React__default.createElement(
                Flex,
                {justifyContent: 'center', alignItems: 'center'},
                React__default.createElement(
                  ArrowIcon,
                  // @ts-ignore
                  {
                    // @ts-ignore
                    height: theme.datepickerSelectDateArrowIconHeight,
                    // @ts-ignore
                    width: theme.datepickerSelectDateArrowIconWidth,
                    // @ts-ignore
                    iconColor: theme.datepickerSelectDateArrowIconColor,
                  },
                ),
              ),
              React__default.createElement(SelectDate, {
                title: phrases.datepickerEndDateLabel,
                date: getInputValue(endDate, displayFormat, phrases.datepickerEndDatePlaceholder),
                isActive: focusedInput === END_DATE,
                vertical: vertical,
              }),
            ),
          ),
        React__default.createElement(
          Box,
          {position: 'relative'},
          React__default.createElement(
            Box,
            {m: theme.datepickerMonthsWrapperMargin},
            React__default.createElement(
              MonthGrid,
              {
                'data-testid': 'MonthGrid',
                overflow: theme.datepickerMonthsGridOverflow,
                height: theme.datepickerMonthsGridHeight,
                gridTemplateColumns: vertical ? '1fr' : 'repeat(' + numberOfMonths + ', 1fr)',
                gridGap: theme.datepickerMonthsGridGap,
                pr: rtl ? '1px' : '0',
                ref: monthGridRef,
                onMouseLeave: function () {
                  if (hoveredDate) {
                    onDateHover(null)
                  }
                },
              },
              activeMonths.map(function (month) {
                return React__default.createElement(Month, {
                  key: 'month-' + month.year + '-' + month.month,
                  year: month.year,
                  month: month.month,
                  firstDayOfWeek: firstDayOfWeek,
                  dayLabelFormat: dayLabelFormat || dayLabelFormatFn,
                  weekdayLabelFormat: weekdayLabelFormat || weekdayLabelFormatFn,
                  monthLabelFormat: monthLabelFormat || monthLabelFormatFn,
                })
              }),
            ),
          ),
          React__default.createElement(
            Flex,
            {alignItems: 'center'},
            React__default.createElement(
              React__default.Fragment,
              null,
              showResetDates &&
                React__default.createElement(
                  Flex,
                  {flex: '1', m: theme.datepickerResetDatesWrapperMargin},
                  React__default.createElement(ResetDates, {
                    rtl: rtl,
                    onResetDates: onResetDates,
                    text: phrases.resetDates,
                  }),
                ),
              React__default.createElement(
                Box,
                {
                  position: theme.datepickerPreviousMonthButtonPosition,
                  top: theme.datepickerPreviousMonthButtonTop,
                  left: theme.datepickerPreviousMonthButtonLeft,
                  right: theme.datepickerPreviousMonthButtonRight,
                  bottom: theme.datepickerPreviousMonthButtonBottom,
                },
                React__default.createElement(NavButton, {
                  type: 'prev',
                  onClick: rtl && !vertical ? handleGoToNextMonth : handleGoToPreviousMonth,
                  vertical: vertical,
                  rtl: rtl,
                  ariaLabel: 'Previous month',
                }),
              ),
              React__default.createElement(
                Box,
                {
                  position: theme.datepickerNextMonthButtonPosition,
                  top: theme.datepickerNextMonthButtonTop,
                  left: theme.datepickerNextMonthButtonLeft,
                  right: theme.datepickerNextMonthButtonRight,
                  bottom: theme.datepickerNextMonthButtonBottom,
                },
                React__default.createElement(NavButton, {
                  type: 'next',
                  onClick: rtl && !vertical ? handleGoToPreviousMonth : handleGoToNextMonth,
                  vertical: vertical,
                  rtl: rtl,
                  ariaLabel: 'Next month',
                }),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
var Datepicker$1 = React__default.forwardRef(Datepicker)
var templateObject_1$c,
  templateObject_2$7,
  templateObject_3$3,
  templateObject_4$1,
  templateObject_5$1,
  templateObject_6

var Wrapper$1 = styled__default(Box)(
  templateObject_2$8 ||
    (templateObject_2$8 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
  zIndex,
  function (_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      styled.css(
        templateObject_1$d ||
          (templateObject_1$d = __makeTemplateObject(
            ['\n      direction: rtl;\n    '],
            ['\n      direction: rtl;\n    '],
          )),
      )
    )
  },
)
var composeInputArrowIconStyles = compose(color, opacity)
var InputArrowIcon = styled__default(ArrowIcon)(
  templateObject_4$2 ||
    (templateObject_4$2 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
  composeInputArrowIconStyles,
  function (_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      styled.css(
        templateObject_3$4 ||
          (templateObject_3$4 = __makeTemplateObject(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  },
)
var composeInputGridStyles = compose(background, border, borderRadius)
var InputGrid = styled__default(Grid)(
  templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  composeInputGridStyles,
)
function getPlacement(placement, rtl) {
  if (placement === 'top' && !rtl) {
    return {
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: 'unset',
      dateRangeDatepickerWrapperBottom: '65px',
      dateRangeDatepickerWrapperLeft: '0',
    }
  } else if (placement === 'top' && rtl) {
    return {
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: '0',
      dateRangeDatepickerWrapperBottom: '65px',
      dateRangeDatepickerWrapperLeft: 'unset',
    }
  } else if (placement === 'bottom' && rtl) {
    return {
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: '0',
      dateRangeDatepickerWrapperBottom: 'unset',
      dateRangeDatepickerWrapperLeft: 'unset',
    }
  }
  return {
    dateRangeDatepickerWrapperTop: 'unset',
    dateRangeDatepickerWrapperRight: 'unset',
    dateRangeDatepickerWrapperBottom: 'unset',
    dateRangeDatepickerWrapperLeft: '0',
  }
}
function DateRangeInput(_a) {
  var startDate = _a.startDate,
    endDate = _a.endDate,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    firstDayOfWeek = _a.firstDayOfWeek,
    onFocusChange = _a.onFocusChange,
    numberOfMonths = _a.numberOfMonths,
    focusedInput = _a.focusedInput,
    onDatesChange = _a.onDatesChange,
    exactMinBookingDays = _a.exactMinBookingDays,
    dayLabelFormat = _a.dayLabelFormat,
    weekdayLabelFormat = _a.weekdayLabelFormat,
    monthLabelFormat = _a.monthLabelFormat,
    onDayRender = _a.onDayRender,
    initialVisibleMonth = _a.initialVisibleMonth,
    _b = _a.showClose,
    showClose = _b === void 0 ? true : _b,
    _c = _a.showSelectedDates,
    showSelectedDates = _c === void 0 ? true : _c,
    _d = _a.showResetDates,
    showResetDates = _d === void 0 ? true : _d,
    _e = _a.vertical,
    vertical = _e === void 0 ? false : _e,
    _f = _a.rtl,
    rtl = _f === void 0 ? false : _f,
    _g = _a.isDateBlocked,
    isDateBlocked =
      _g === void 0
        ? function () {
            return false
          }
        : _g,
    _h = _a.minBookingDays,
    minBookingDays = _h === void 0 ? 1 : _h,
    _j = _a.onClose,
    onClose = _j === void 0 ? function () {} : _j,
    _k = _a.showStartDateCalendarIcon,
    showStartDateCalendarIcon = _k === void 0 ? true : _k,
    _l = _a.showEndDateCalendarIcon,
    showEndDateCalendarIcon = _l === void 0 ? true : _l,
    _m = _a.displayFormat,
    displayFormat = _m === void 0 ? 'MM/dd/yyyy' : _m,
    _o = _a.phrases,
    phrases = _o === void 0 ? dateRangeInputPhrases : _o,
    _p = _a.placement,
    placement = _p === void 0 ? 'bottom' : _p,
    _q = _a.startDateInputId,
    startDateInputId = _q === void 0 ? 'startDate' : _q,
    _r = _a.endDateInputId,
    endDateInputId = _r === void 0 ? 'endDate' : _r,
    _s = _a.unavailableDates,
    unavailableDates = _s === void 0 ? [] : _s
  var ref = React.useRef(null)
  var datepickerWrapperRef = React.useRef(null)
  var themeContext = React.useContext(styled.ThemeContext)
  var theme = useThemeProps(
    __assign(
      {
        dateRangeZIndex: null,
        dateRangeBackground: 'transparent',
        dateRangeGridTemplateColumns: vertical ? '1fr 24px 1fr' : '194px 39px 194px',
        dateRangeGridTemplateRows: 'unset',
        dateRangeBorder: '0',
        dateRangeBorderRadius: '0',
        dateRangeArrowIconWidth: '15px',
        dateRangeArrowIconHeight: '12px',
        dateRangeArrowIconColor: getThemeProp('graci', globalStyles.colors.graci, themeContext),
        dateRangeArrowIconOpacity: 1,
        dateRangeStartDateInputPadding: vertical
          ? rtl
            ? '0 32px 0 8px'
            : '0 8px 0 32px'
          : '0 44px',
        dateRangeEndDateInputPadding: vertical ? (rtl ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
        dateRangeDatepickerWrapperPosition: 'absolute',
      },
      getPlacement(placement, rtl),
    ),
  )
  React.useEffect(function () {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', onClickOutsideHandler)
    }
    return function () {
      window.removeEventListener('click', onClickOutsideHandler)
    }
  })
  function onClickOutsideHandler(event) {
    if (
      focusedInput !== null &&
      datepickerWrapperRef &&
      datepickerWrapperRef.current &&
      // @ts-ignore
      !datepickerWrapperRef.current.contains(event.target)
    ) {
      onFocusChange(null)
    }
  }
  function handleDatepickerClose() {
    onClose()
    onFocusChange(null)
  }
  function handleInputChange(date) {
    // @ts-ignore
    if (ref && ref.current && ref.current.onDateSelect) {
      // @ts-ignore
      ref.current.onDateSelect(date)
    }
  }
  return React__default.createElement(
    styled.ThemeProvider,
    {
      theme: function (theme) {
        return theme || {}
      },
    },
    React__default.createElement(
      Wrapper$1,
      {zIndex: theme.dateRangeZIndex, rtl: rtl, position: 'relative', ref: datepickerWrapperRef},
      React__default.createElement(
        InputGrid,
        {
          'data-testid': 'DateRangeInputGrid',
          background: theme.dateRangeBackground,
          gridTemplateColumns: theme.dateRangeGridTemplateColumns,
          gridTemplateRows: theme.dateRangeGridTemplateRows,
          border: theme.dateRangeBorder,
          borderRadius: theme.dateRangeBorderRadius,
        },
        React__default.createElement(Input, {
          id: startDateInputId,
          ariaLabel: phrases.startDateAriaLabel,
          placeholder: phrases.startDatePlaceholder,
          value: getInputValue(startDate, displayFormat, ''),
          onClick: function () {
            return onFocusChange(START_DATE)
          },
          showCalendarIcon: showStartDateCalendarIcon,
          vertical: vertical,
          isActive: focusedInput === START_DATE,
          padding: theme.dateRangeStartDateInputPadding,
          rtl: rtl,
          onChange: handleInputChange,
          // @ts-ignore
          dateFormat: displayFormat,
        }),
        React__default.createElement(
          Flex,
          {alignItems: 'center', justifyContent: 'center'},
          React__default.createElement(
            InputArrowIcon,
            // @ts-ignore
            {
              // @ts-ignore
              width: theme.dateRangeArrowIconWidth,
              // @ts-ignore
              height: theme.dateRangeArrowIconHeight,
              color: theme.dateRangeArrowIconColor,
              opacity: theme.dateRangeArrowIconOpacity,
              rtl: rtl,
            },
          ),
        ),
        React__default.createElement(Input, {
          id: endDateInputId,
          ariaLabel: phrases.endDateAriaLabel,
          placeholder: phrases.endDatePlaceholder,
          value: getInputValue(endDate, displayFormat, ''),
          onClick: function () {
            return onFocusChange(!startDate ? START_DATE : END_DATE)
          },
          showCalendarIcon: showEndDateCalendarIcon,
          vertical: vertical,
          isActive: focusedInput === END_DATE,
          padding: theme.dateRangeEndDateInputPadding,
          rtl: rtl,
          disableAccessibility: focusedInput === START_DATE,
          onChange: handleInputChange,
          // @ts-ignore
          dateFormat: displayFormat,
        }),
      ),
      React__default.createElement(
        Box,
        {
          position: theme.dateRangeDatepickerWrapperPosition,
          bottom: theme.dateRangeDatepickerWrapperBottom,
          left: theme.dateRangeDatepickerWrapperLeft,
          top: theme.dateRangeDatepickerWrapperTop,
          right: theme.dateRangeDatepickerWrapperRight,
        },
        focusedInput !== null &&
          React__default.createElement(Datepicker$1, {
            onClose: handleDatepickerClose,
            startDate: startDate,
            endDate: endDate,
            minBookingDate: minBookingDate,
            maxBookingDate: maxBookingDate,
            firstDayOfWeek: firstDayOfWeek,
            numberOfMonths: numberOfMonths,
            focusedInput: focusedInput,
            displayFormat: displayFormat,
            onDatesChange: onDatesChange,
            minBookingDays: minBookingDays,
            isDateBlocked: isDateBlocked,
            exactMinBookingDays: exactMinBookingDays,
            showResetDates: showResetDates,
            vertical: vertical,
            showSelectedDates: showSelectedDates,
            showClose: showClose,
            rtl: rtl,
            dayLabelFormat: dayLabelFormat,
            weekdayLabelFormat: weekdayLabelFormat,
            monthLabelFormat: monthLabelFormat,
            onDayRender: onDayRender,
            phrases: phrases,
            unavailableDates: unavailableDates,
            ref: ref,
            initialVisibleMonth: initialVisibleMonth,
          }),
      ),
    ),
  )
}
var templateObject_1$d,
  templateObject_2$8,
  templateObject_3$4,
  templateObject_4$2,
  templateObject_5$2

var Wrapper$2 = styled__default(Box)(
  templateObject_2$9 ||
    (templateObject_2$9 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
  zIndex,
  function (_a) {
    var rtl = _a.rtl
    return (
      rtl &&
      styled.css(
        templateObject_1$e ||
          (templateObject_1$e = __makeTemplateObject(
            ['\n      direction: rtl;\n    '],
            ['\n      direction: rtl;\n    '],
          )),
      )
    )
  },
)
function getPlacement$1(placement, rtl) {
  if (placement === 'top' && !rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: 'unset',
      dateSingleDatepickerWrapperBottom: '65px',
      dateSingleDatepickerWrapperLeft: '0',
    }
  } else if (placement === 'top' && rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: '0',
      dateSingleDatepickerWrapperBottom: '65px',
      dateSingleDatepickerWrapperLeft: 'unset',
    }
  } else if (placement === 'bottom' && rtl) {
    return {
      dateSingleDatepickerWrapperTop: 'unset',
      dateSingleDatepickerWrapperRight: '0',
      dateSingleDatepickerWrapperBottom: 'unset',
      dateSingleDatepickerWrapperLeft: 'unset',
    }
  }
  return {
    dateSingleDatepickerWrapperTop: 'unset',
    dateSingleDatepickerWrapperRight: 'unset',
    dateSingleDatepickerWrapperBottom: 'unset',
    dateSingleDatepickerWrapperLeft: '0',
  }
}
function DateSingleInput(_a) {
  var date = _a.date,
    minBookingDate = _a.minBookingDate,
    maxBookingDate = _a.maxBookingDate,
    firstDayOfWeek = _a.firstDayOfWeek,
    onFocusChange = _a.onFocusChange,
    showDatepicker = _a.showDatepicker,
    onDateChange = _a.onDateChange,
    dayLabelFormat = _a.dayLabelFormat,
    weekdayLabelFormat = _a.weekdayLabelFormat,
    monthLabelFormat = _a.monthLabelFormat,
    onDayRender = _a.onDayRender,
    initialVisibleMonth = _a.initialVisibleMonth,
    _b = _a.numberOfMonths,
    numberOfMonths = _b === void 0 ? 1 : _b,
    _c = _a.showClose,
    showClose = _c === void 0 ? true : _c,
    _d = _a.showResetDate,
    showResetDate = _d === void 0 ? true : _d,
    _e = _a.vertical,
    vertical = _e === void 0 ? false : _e,
    _f = _a.rtl,
    rtl = _f === void 0 ? false : _f,
    _g = _a.isDateBlocked,
    isDateBlocked =
      _g === void 0
        ? function () {
            return false
          }
        : _g,
    _h = _a.onClose,
    onClose = _h === void 0 ? function () {} : _h,
    _j = _a.showCalendarIcon,
    showCalendarIcon = _j === void 0 ? true : _j,
    _k = _a.displayFormat,
    displayFormat = _k === void 0 ? 'MM/dd/yyyy' : _k,
    _l = _a.phrases,
    phrases = _l === void 0 ? dateSingleInputPhrases : _l,
    _m = _a.placement,
    placement = _m === void 0 ? 'bottom' : _m,
    _o = _a.inputId,
    inputId = _o === void 0 ? 'startDate' : _o,
    _p = _a.unavailableDates,
    unavailableDates = _p === void 0 ? [] : _p
  var ref = React.useRef(null)
  var datepickerWrapperRef = React.useRef(null)
  var theme = useThemeProps(
    __assign(
      {
        dateSingleZIndex: null,
        dateSingleInputPadding: vertical ? (rtl ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
        dateSingleDatepickerWrapperPosition: 'absolute',
      },
      getPlacement$1(placement, rtl),
    ),
  )
  React.useEffect(function () {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', onClickOutsideHandler)
    }
    return function () {
      window.removeEventListener('click', onClickOutsideHandler)
    }
  })
  function onClickOutsideHandler(event) {
    if (
      showDatepicker &&
      datepickerWrapperRef &&
      datepickerWrapperRef.current &&
      // @ts-ignore
      !datepickerWrapperRef.current.contains(event.target)
    ) {
      onFocusChange(false)
    }
  }
  function handleDatepickerClose() {
    onClose()
    onFocusChange(false)
  }
  function onDatesChange(_a) {
    var focusedInput = _a.focusedInput,
      startDate = _a.startDate
    onDateChange({
      showDatepicker: focusedInput !== null,
      date: startDate,
    })
  }
  function handleInputChange(date) {
    // @ts-ignore
    if (ref && ref.current && ref.current.onDateSelect) {
      // @ts-ignore
      ref.current.onDateSelect(date)
    }
  }
  return React__default.createElement(
    styled.ThemeProvider,
    {
      theme: function (theme) {
        return theme || {}
      },
    },
    React__default.createElement(
      Wrapper$2,
      {zIndex: theme.dateSingleZIndex, rtl: rtl, position: 'relative', ref: datepickerWrapperRef},
      React__default.createElement(Input, {
        id: inputId,
        ariaLabel: phrases.dateAriaLabel,
        placeholder: phrases.datePlaceholder,
        value: getInputValue(date, displayFormat, ''),
        onClick: function () {
          return onFocusChange(true)
        },
        showCalendarIcon: showCalendarIcon,
        vertical: vertical,
        isActive: false,
        padding: theme.dateSingleInputPadding,
        rtl: rtl,
        onChange: handleInputChange,
        // @ts-ignore
        dateFormat: displayFormat,
      }),
      React__default.createElement(
        Box,
        {
          position: theme.dateSingleDatepickerWrapperPosition,
          bottom: theme.dateSingleDatepickerWrapperBottom,
          left: theme.dateSingleDatepickerWrapperLeft,
          top: theme.dateSingleDatepickerWrapperTop,
          right: theme.dateSingleDatepickerWrapperRight,
        },
        showDatepicker &&
          React__default.createElement(Datepicker$1, {
            exactMinBookingDays: true,
            minBookingDays: 1,
            onClose: handleDatepickerClose,
            startDate: date,
            endDate: date,
            minBookingDate: minBookingDate,
            maxBookingDate: maxBookingDate,
            firstDayOfWeek: firstDayOfWeek,
            numberOfMonths: numberOfMonths,
            focusedInput: showDatepicker ? START_DATE : null,
            displayFormat: displayFormat,
            onDatesChange: onDatesChange,
            isDateBlocked: isDateBlocked,
            showResetDates: showResetDate,
            vertical: vertical,
            showSelectedDates: false,
            showClose: showClose,
            rtl: rtl,
            dayLabelFormat: dayLabelFormat,
            weekdayLabelFormat: weekdayLabelFormat,
            monthLabelFormat: monthLabelFormat,
            onDayRender: onDayRender,
            phrases: phrases,
            ref: ref,
            unavailableDates: unavailableDates,
            initialVisibleMonth: initialVisibleMonth,
          }),
      ),
    ),
  )
}
var templateObject_1$e, templateObject_2$9

exports.DateRangeInput = DateRangeInput
exports.DateSingleInput = DateSingleInput
exports.Datepicker = Datepicker$1
exports.END_DATE = END_DATE
exports.START_DATE = START_DATE
exports.dateRangeInputPhrases = dateRangeInputPhrases
exports.dateSingleInputPhrases = dateSingleInputPhrases
exports.datepickerPhrases = datepickerPhrases
//# sourceMappingURL=index.cjs.js.map
