import { css, keyframes, ThemeProvider, Global } from '@emotion/react';
import _styled from '@emotion/styled/base';
import React__default, { useLayoutEffect, useEffect, useRef, useState, useCallback, useMemo, createElement, Fragment } from 'react';
import { startOfMonth, addMonths, differenceInMonths, differenceInDays, differenceInHours, startOfDay, format, eachDayOfInterval, eachMonthOfInterval, isToday, endOfDay, addDays, getTime as getTime$1, differenceInMinutes, isWithinInterval, roundToNearestMinutes, parse, getDaysInMonth, addMinutes, startOfToday } from 'date-fns';
import { toDate, utcToZonedTime, format as format$1, zonedTimeToUtc } from 'date-fns-tz';
import { useDebouncedCallback } from 'use-debounce';

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _templateObject;
var globalStyles = /*#__PURE__*/css(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\");\n\n  .planby {\n    font-family: \"Inter\", system-ui, -apple-system,\n      /* Firefox supports this but not yet system-ui */ \"Segoe UI\", Roboto,\n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"; /* 2 */\n  }\n"])));

var Layers;
(function (Layers) {
  Layers[Layers["Sidebar"] = 9] = "Sidebar";
  Layers[Layers["EpgCornerBox"] = 10] = "EpgCornerBox";
  Layers[Layers["Line"] = 9] = "Line";
  Layers[Layers["Loader"] = 12] = "Loader";
  Layers[Layers["Program"] = 1] = "Program";
  Layers[Layers["Timeline"] = 9] = "Timeline";
  Layers[Layers["Area"] = 2] = "Area";
})(Layers || (Layers = {}));

// Dimensions
var DAY_WIDTH = 7200;
var HOURS_IN_DAY = 24;
var HOUR_IN_MINUTES = 60;
var SECONDS_IN_MINUTE = 60;
var TIMELINE_HEIGHT = 60;
var TIMELINE_HEIGHT_MODERN_STYLE = 80;
var TIMELINE_DIVIDERS = 4;
var SIDEBAR_WIDTH = 100;
var ITEM_HEIGHT = 80;
var ITEM_OVERSCAN = ITEM_HEIGHT;
// Debounce
var DEBOUNCE_WAIT = 100;
var DEBOUNCE_WAIT_MAX = 100;
// Live refresh time
var LIVE_REFRESH_TIME = 120;
var TIME_FORMAT = {
  DEFAULT: "yyyy-MM-dd HH:mm:ss",
  DATE: "yyyy-MM-dd",
  DAY: "EEE",
  DAY_DATE: "dd",
  MONTH: "LLL",
  DAY_MONTH: "dd.MM",
  BASE_DAY_MONTH: "MM/dd",
  HOURS_MIN: "HH:mm",
  BASE_HOURS_TIME: "h:mm a",
  YEAR: "yyyy"
};
// Overlap mode
var OVERLAP_MODES = {
  STACK: "stack",
  LAYER: "layer"
};
// Timezone mode
var TIMEZONE_MODES = {
  UTC_TO_ZONED_TIME: "utc"
};

var _excluded = ["isVerticalMode", "program", "overlap"];
var omit = function omit(obj) {
  var result = _extends({}, obj);
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }
  for (var _i = 0, _props = props; _i < _props.length; _i++) {
    var property = _props[_i];
    delete result[property];
  }
  return result;
};
var generateArray = function generateArray(num) {
  return new Array(num).fill("");
};
var getOverlapProgramOptions = function getOverlapProgramOptions(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    program = _ref.program,
    programOverlaps = _ref.programOverlaps,
    layerOverlapLevel = _ref.layerOverlapLevel,
    overlapMode = _ref.overlapMode;
  var data = program.data,
    position = program.position;
  var linkedProgramOverlaps = programOverlaps[data.channelUuid];
  if (linkedProgramOverlaps) {
    var programOverlapIndex = linkedProgramOverlaps.findIndex(function (element) {
      return element.data.id === data.id;
    });
    var overlapProgram = linkedProgramOverlaps[programOverlapIndex];
    if (overlapProgram) {
      if (overlapMode === OVERLAP_MODES.LAYER && overlapProgram.data.channelPosition.top < overlapProgram.position.top) {
        var newTop = overlapProgram.position.top * layerOverlapLevel;
        if (overlapProgram.data.channelPosition.top !== 0) {
          newTop = overlapProgram.data.channelPosition.top + Math.abs(overlapProgram.data.channelPosition.top - overlapProgram.position.top) * layerOverlapLevel;
        }
        var _position = _extends({}, overlapProgram.position, {
          top: newTop
        });
        if (isVerticalMode) {
          _position = switchPosition(_extends({}, overlapProgram.position, {
            top: newTop
          }));
        }
        return _extends({}, program, {
          isOverlap: true,
          position: _position
        });
      }
      return _extends({}, program, {
        position: isVerticalMode ? switchPosition(overlapProgram.position) : overlapProgram.position
      });
    } else {
      return _extends({}, program, {
        position: position
      });
    }
  }
  var width = position.width,
    height = position.height,
    top = position.top,
    left = position.left;
  return _extends({}, program, {
    position: {
      width: width,
      height: height,
      top: top,
      left: left
    }
  });
};
var getProgramOptions = function getProgramOptions(_ref2) {
  var isVerticalMode = _ref2.isVerticalMode,
    program = _ref2.program,
    overlap = _ref2.overlap,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded);
  if (overlap.enabled) {
    return getOverlapProgramOptions(_extends({
      isVerticalMode: isVerticalMode,
      program: program,
      overlap: overlap
    }, rest));
  }
  var _program$position = program.position,
    width = _program$position.width,
    height = _program$position.height,
    top = _program$position.top,
    left = _program$position.left;
  return _extends({}, program, {
    position: {
      width: width,
      height: height,
      top: top,
      left: left
    }
  });
};
var useIsomorphicLayoutEffect = function useIsomorphicLayoutEffect() {
  return typeof window !== "undefined" ? useLayoutEffect : useEffect;
};
var getDate = function getDate(date) {
  return new Date(date);
};
var abs = function abs(num) {
  return Math.abs(num);
};
var getDayWidthResources = function getDayWidthResources(_ref3) {
  var dayWidth = _ref3.dayWidth,
    startDate = _ref3.startDate,
    endDate = _ref3.endDate,
    hoursInDays = _ref3.hoursInDays,
    modeType = _ref3.modeType;
  var defaultOptions = {
    hourWidth: 0,
    numberOfMonths: 0,
    numberOfHoursInDay: 0,
    monthWidth: 0,
    offsetStartHoursRange: 0,
    dayWidth: 0
  };
  var startDateTime = new Date(startDate);
  var endDateTime = new Date(endDate);
  if (endDateTime < startDateTime) {
    console.error("Invalid endDate property. Value of endDate must be greater than startDate. Props: startDateTime: " + startDateTime + ", endDateTime: " + endDateTime);
  }
  if (modeType === "week" || modeType === "month") {
    var endOfMonthTime = startOfMonth(addMonths(endDateTime, 1));
    var numberOfMonthInMonthMode = differenceInMonths(endOfMonthTime, startDateTime);
    var numberOfDaysInWeekMode = differenceInDays(endDateTime, startDateTime);
    var dayWidthInWeekMode = Math.floor(dayWidth / numberOfDaysInWeekMode);
    var _hourWidth = dayWidthInWeekMode / HOURS_IN_DAY;
    var newDayWidthInWeekMode = _hourWidth * HOURS_IN_DAY * numberOfDaysInWeekMode;
    return _extends({}, defaultOptions, {
      hourWidth: abs(_hourWidth),
      dayWidth: abs(newDayWidthInWeekMode),
      numberOfMonths: numberOfMonthInMonthMode
    });
  }
  if (hoursInDays.length > 0) {
    var _numberOfHoursInDay = hoursInDays.reduce(function (acc, curr) {
      return acc + curr.diffInHours;
    }, 0);
    var _hourWidth2 = dayWidth / _numberOfHoursInDay;
    var _newDayWidth = _hourWidth2 * _numberOfHoursInDay;
    return _extends({}, defaultOptions, {
      hourWidth: abs(_hourWidth2),
      dayWidth: abs(_newDayWidth),
      numberOfHoursInDay: abs(_numberOfHoursInDay)
    });
  }
  var offsetStartHoursRange = differenceInHours(startDateTime, startOfDay(startDateTime));
  var numberOfHoursInDay = differenceInHours(endDateTime, startDateTime);
  var hourWidth = Math.floor(dayWidth / numberOfHoursInDay);
  var newDayWidth = hourWidth * numberOfHoursInDay;
  return _extends({}, defaultOptions, {
    hourWidth: abs(hourWidth),
    dayWidth: abs(newDayWidth),
    numberOfHoursInDay: abs(numberOfHoursInDay),
    offsetStartHoursRange: abs(offsetStartHoursRange)
  });
};
var convertDate = function convertDate(date) {
  var newDate = date.replace(/T.*/, "");
  return toDate(newDate);
};
var getDayResources = function getDayResources(_ref4) {
  var startDate = _ref4.startDate,
    endDate = _ref4.endDate,
    modeType = _ref4.modeType;
  var startDateFormat = format(convertDate(startDate), TIME_FORMAT.DATE);
  var endDateFormat = format(convertDate(endDate), TIME_FORMAT.DATE);
  var modeIncrementValue = modeType === "day" ? 1 : 0;
  var diffDays = differenceInDays(toDate(endDateFormat), toDate(startDateFormat)) + modeIncrementValue;
  var startToEndInterval = {
    start: new Date(startDate),
    end: new Date(endDate)
  };
  var days = eachDayOfInterval(startToEndInterval).map(function (day) {
    return format(day, TIME_FORMAT.DATE);
  });
  var months = eachMonthOfInterval(startToEndInterval).map(function (day) {
    return format(day, TIME_FORMAT.DATE);
  });
  var dates = days.map(function (day) {
    return isToday(toDate(day));
  });
  var isToday$1 = dates.some(function (day) {
    return day === true;
  });
  var currentDate = days[dates.indexOf(true)];
  return {
    isToday: isToday$1,
    currentDate: currentDate,
    numberOfDays: diffDays,
    days: days,
    months: months
  };
};
var switchPosition = function switchPosition(programPosition) {
  return _extends({}, programPosition, {
    top: programPosition.left,
    left: programPosition.top,
    width: programPosition.height,
    height: programPosition.width
  });
};
function generateUUID() {
  // Generate a random hexadecimal string with the specified length
  var generateRandomHex = function generateRandomHex(length) {
    var result = "";
    var characters = "abcdef0123456789";
    for (var i = 0; i < length; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
  };
  // Format a UUID string according to the version 4 UUID format
  var formatUUID = function formatUUID(parts) {
    return parts[0] + "-" + parts[1] + "-4" + parts[2].substring(1) + "-" + "89ab"[Math.floor(Math.random() * 4)] + parts[3].substring(1) + "-" + parts[4];
  };
  // Generate the parts of the UUID
  var parts = [generateRandomHex(8), generateRandomHex(4), "89ab"[Math.random() * 4 | 0] + generateRandomHex(3), "89ab"[Math.random() * 4 | 0] + generateRandomHex(3), generateRandomHex(12)];
  // Return the formatted UUID
  return formatUUID(parts);
}

var LayoutScreenCloneCache = {};
var setChannel = function setChannel(event) {
  var isChannel = LayoutScreenCloneCache[event.data.channelUuid];
  if (!isChannel) {
    LayoutScreenCloneCache[event.data.channelUuid] = {};
    return LayoutScreenCloneCache;
  }
  return LayoutScreenCloneCache;
};
var updateLayoutScreenCloneElement = function updateLayoutScreenCloneElement(data) {
  return LayoutScreenCloneCache = data;
};
var setLayoutScreenCloneElement = function setLayoutScreenCloneElement(event, index) {
  var channels = setChannel(event);
  var program = channels[event.data.channelUuid][event.data.id];
  if (!program) {
    event["data"].index = index;
    channels[event.data.channelUuid][event.data.id] = event;
  }
  updateLayoutScreenCloneElement(channels);
};
var deleteLayoutScreenCloneElement = function deleteLayoutScreenCloneElement(event) {
  var channels = setChannel(event);
  var program = channels[event.data.channelUuid][event.data.id];
  if (program) {
    delete channels[event.data.channelUuid][event.data.id];
  }
  updateLayoutScreenCloneElement(channels);
};
var resetLayoutScreenCloneElements = function resetLayoutScreenCloneElements() {
  return LayoutScreenCloneCache = {};
};
var getChannelsContentHeight = function getChannelsContentHeight(channels) {
  return channels.reduce(function (acc, channel) {
    return acc += channel.position.height;
  }, 0);
};
var channelEpgIndexesCache = {};
var setChannelEpgIndexes = function setChannelEpgIndexes(_ref) {
  var uuid = _ref.uuid,
    _ref$first = _ref.first,
    first = _ref$first === void 0 ? 0 : _ref$first,
    _ref$last = _ref.last,
    last = _ref$last === void 0 ? 0 : _ref$last;
  channelEpgIndexesCache[uuid] = {
    first: first,
    last: last,
    uuid: uuid
  };
};
var getChannelEpgIndexes = function getChannelEpgIndexes(uuid) {
  return channelEpgIndexesCache[uuid];
};
var channelsGroupTreeCache = {};
var setChannelGroupTree = function setChannelGroupTree(channel) {
  channelsGroupTreeCache[channel.uuid] = {
    uuid: channel.uuid,
    isOpen: channel.isOpen,
    groupTree: channel.groupTree
  };
};
var setChannelGroupTreeNestedChildren = function setChannelGroupTreeNestedChildren(channelUuid, nestedChildUuid) {
  var _channel$nestedChildr;
  var channel = channelsGroupTreeCache[channelUuid];
  channelsGroupTreeCache[channelUuid] = _extends({}, channel, {
    nestedChildren: [].concat((_channel$nestedChildr = channel.nestedChildren) != null ? _channel$nestedChildr : [], [nestedChildUuid])
  });
};
var getChannelsGroupTree = function getChannelsGroupTree() {
  return channelsGroupTreeCache;
};
// Timezones
var timezoneOptionsCache = {
  enabled: false,
  zone: "",
  mode: ""
};
var setTimezoneOptionsCache = function setTimezoneOptionsCache(props) {
  timezoneOptionsCache = props;
};
var getTimezoneOptionsCache = function getTimezoneOptionsCache() {
  return timezoneOptionsCache;
};

var getNewDateTimeTz = function getNewDateTimeTz(date) {
  var timezone = getTimezoneOptionsCache();
  var newDate = new Date(date);
  if (timezone.enabled && timezone.mode === TIMEZONE_MODES.UTC_TO_ZONED_TIME) {
    var zonedTime = utcToZonedTime(newDate, timezone.zone);
    return zonedTime.getTime();
  }
  return newDate.getTime();
};
var getNewDateTz = function getNewDateTz(date) {
  var timezone = getTimezoneOptionsCache();
  var newDate = date ? new Date(date) : new Date();
  if (timezone.enabled && timezone.mode === TIMEZONE_MODES.UTC_TO_ZONED_TIME) {
    var zonedTime = utcToZonedTime(newDate, timezone.zone);
    return zonedTime;
  }
  return newDate;
};
var formatTz = function formatTz(date, formatTime) {
  if (formatTime === void 0) {
    formatTime = TIME_FORMAT.DEFAULT;
  }
  var timezone = getTimezoneOptionsCache();
  if (timezone.enabled && timezone.mode === TIMEZONE_MODES.UTC_TO_ZONED_TIME) {
    var zonedTime = utcToZonedTime(date, timezone.zone);
    var formattedZonedTime = format$1(zonedTime, formatTime, {
      timeZone: timezone.zone
    });
    return formattedZonedTime;
  }
  return format(date, formatTime);
};
var zonedDateTimeToUtc = function zonedDateTimeToUtc(date) {
  var timezone = getTimezoneOptionsCache();
  if (timezone.enabled && timezone.mode === TIMEZONE_MODES.UTC_TO_ZONED_TIME) {
    var zonedTime = zonedTimeToUtc(date, timezone.zone);
    return zonedTime;
  }
  return date;
};

// -------- Program width --------
var getItemDiffWidth = function getItemDiffWidth(diff, hourWidth) {
  return diff * hourWidth / HOUR_IN_MINUTES;
};
var getPositionX = function getPositionX(since, till, startDate, endDate, hourWidth) {
  var isTomorrow = getTime$1(getDate(till)) > getTime$1(getDate(endDate));
  var isYesterday = getTime$1(getDate(since)) < getTime$1(getDate(startDate));
  // When time range is set to 1 hour and program time is greater than 1 hour
  if (isYesterday && isTomorrow) {
    var _diffTime = differenceInMinutes(roundToMinutes(getDate(endDate)), getDate(startDate));
    return getItemDiffWidth(_diffTime, hourWidth);
  }
  if (isYesterday) {
    var _diffTime2 = differenceInMinutes(roundToMinutes(getDate(till)), getDate(startDate));
    return getItemDiffWidth(_diffTime2, hourWidth);
  }
  if (isTomorrow) {
    var _diffTime3 = differenceInMinutes(getDate(endDate), roundToMinutes(getDate(since)));
    if (_diffTime3 < 0) return 0;
    return getItemDiffWidth(_diffTime3, hourWidth);
  }
  var diffTime = differenceInMinutes(roundToMinutes(getDate(till)), roundToMinutes(getDate(since)));
  return getItemDiffWidth(diffTime, hourWidth);
};
// -------- Channel position in the Epg --------
var getChannelPosition = function getChannelPosition(channelIndex, itemHeight) {
  var top = itemHeight * channelIndex;
  var position = {
    top: top,
    height: itemHeight
  };
  return position;
};
// -------- Program position in the Epg --------
var getProgramPosition = function getProgramPosition(program, channelIndex, itemHeight, hourWidth, startDate, endDate, isVerticalMode) {
  var item = _extends({}, program, {
    since: formatTimeTz(program.since),
    till: formatTimeTz(program.till)
  });
  var isYesterday$1 = isYesterday(item.since, startDate);
  var width = getPositionX(item.since, item.till, startDate, endDate, hourWidth);
  var top = itemHeight * channelIndex;
  var left = getPositionX(startDate, item.since, startDate, endDate, hourWidth);
  var edgeEnd = getPositionX(startDate, item.till, startDate, endDate, hourWidth);
  if (isYesterday$1) left = 0;
  // If item has negative top position, it means that it is not visible in this day
  if (top < 0) width = 0;
  var position = {
    width: width,
    height: itemHeight,
    top: top,
    left: left,
    edgeEnd: edgeEnd
  };
  if (isVerticalMode) {
    position = _extends({}, position, {
      top: left,
      left: top,
      width: itemHeight,
      height: width
    });
  }
  return {
    position: position,
    data: item
  };
};
var getProgramPositionWithDayHours = function getProgramPositionWithDayHours(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    hoursInDays = _ref.hoursInDays,
    position = _ref.position,
    since = _ref.since,
    hourWidth = _ref.hourWidth;
  var day = hoursInDays.find(function (day) {
    return since.includes(day.date);
  });
  if (!day) return {
    position: position
  };
  if (isVerticalMode) {
    var _diffHours = day.diffLeft * hourWidth;
    var top = position.top - _diffHours;
    var _edgeEnd = position.edgeEnd - _diffHours;
    return _extends({}, position, {
      top: top,
      edgeEnd: _edgeEnd
    });
  }
  var diffHours = day.diffLeft * hourWidth;
  var left = position.left - diffHours;
  var edgeEnd = position.edgeEnd - diffHours;
  return _extends({}, position, {
    left: left,
    edgeEnd: edgeEnd
  });
};
var getConvertedPrograms = function getConvertedPrograms(_ref2) {
  var isVerticalMode = _ref2.isVerticalMode,
    isOverlapEnabled = _ref2.isOverlapEnabled,
    programChannelMapKey = _ref2.programChannelMapKey,
    data = _ref2.data,
    channels = _ref2.channels,
    startDate = _ref2.startDate,
    endDate = _ref2.endDate,
    itemHeight = _ref2.itemHeight,
    hourWidth = _ref2.hourWidth,
    hoursInDays = _ref2.hoursInDays;
  var first = 0;
  return data.map(function (next, index, arr) {
    var _arr, _arr2, _channels$channelInde, _channels$channelInde2;
    next["channelUuid"] = next[programChannelMapKey];
    if (((_arr = arr[index - 1]) == null ? void 0 : _arr[programChannelMapKey]) !== next[programChannelMapKey]) {
      first = index;
      setChannelEpgIndexes({
        uuid: next[programChannelMapKey],
        first: first
      });
    }
    if (next[programChannelMapKey] !== ((_arr2 = arr[index + 1]) == null ? void 0 : _arr2[programChannelMapKey])) {
      setChannelEpgIndexes({
        uuid: next[programChannelMapKey],
        first: first,
        last: index
      });
    } else {
      setChannelEpgIndexes({
        uuid: next[programChannelMapKey],
        first: first,
        last: index
      });
    }
    var channelIndex = channels.findIndex(function (_ref3) {
      var uuid = _ref3.uuid;
      return uuid === next.channelUuid;
    });
    next["channelIndex"] = channelIndex;
    next["channelPosition"] = (_channels$channelInde = channels[channelIndex]) == null ? void 0 : _channels$channelInde.position;
    next["index"] = index;
    // Group tree
    if ((_channels$channelInde2 = channels[channelIndex]) != null && _channels$channelInde2.parentChannelUuid) {
      var _channels$channelInde3;
      next["parentChannelUuid"] = (_channels$channelInde3 = channels[channelIndex]) == null ? void 0 : _channels$channelInde3.parentChannelUuid;
    }
    var programData = getProgramPosition(next, channelIndex, itemHeight, hourWidth, startDate, endDate, isVerticalMode);
    if (isOverlapEnabled && channelIndex > 0) {
      var position = channels[channelIndex - 1].position;
      var newPositionTop = position.top + position.height;
      if (isVerticalMode) {
        programData.position.left = newPositionTop;
      } else {
        programData.position.top = newPositionTop;
      }
    }
    if (hoursInDays.length === 0) return programData;
    var newPosition = getProgramPositionWithDayHours({
      isVerticalMode: isVerticalMode,
      hoursInDays: hoursInDays,
      position: programData.position,
      since: programData.data.since,
      hourWidth: hourWidth
    });
    programData["position"] = newPosition;
    return programData;
  }, []);
};
// -------- Converted channels with position data --------
var getConvertedChannels = function getConvertedChannels(isOverlapEnabled, overlapMode, layerOverlapLevel, channels, itemHeight, channelMapKey, channelOverlapsCount) {
  var top = 0;
  var isStackMode = overlapMode === OVERLAP_MODES.STACK;
  var isLayerMode = overlapMode === OVERLAP_MODES.LAYER;
  return channels.reduce(function (acc, channel, index) {
    var overlap = channelOverlapsCount[channel[channelMapKey]];
    // Check channels group tree
    if (channel.groupTree && channel.uuid) {
      setChannelGroupTree(channel);
    }
    var channelsGroupTree = getChannelsGroupTree();
    var channelGroupTree = channelsGroupTree[channel.parentChannelUuid];
    // if parent channel is closed, skip this channel
    if (channelGroupTree && channel.parentChannelUuid) {
      setChannelGroupTreeNestedChildren(channelGroupTree.uuid, channel.uuid);
      channel["isNestedChild"] = true;
      if (!(channelGroupTree != null && channelGroupTree.isOpen)) return acc;
    } else {
      channel["isNestedChild"] = false;
    }
    var largestSizeLength = 1;
    var overlapsLength = overlap != null ? overlap : 0;
    if (isOverlapEnabled && (isStackMode || isLayerMode) && overlapsLength > 0) {
      largestSizeLength = overlap;
    }
    var position = getChannelPosition(index, itemHeight * largestSizeLength);
    if (isOverlapEnabled && isStackMode) {
      position.top = top;
      top = top + position.height;
    }
    if (isOverlapEnabled && isLayerMode) {
      if (overlapsLength > 0) {
        position.top = top;
        position.height = overlapsLength <= 1 ? position.height : itemHeight * layerOverlapLevel * (overlapsLength - 1) + itemHeight;
        top = top + position.height;
      } else {
        position.top = top;
        top = top + position.height;
      }
    }
    var item = _extends({}, channel, {
      uuid: channel[channelMapKey],
      index: index,
      position: position
    });
    acc.push(item);
    return acc;
  }, []);
};
var getItemVisibility = function getItemVisibility(_ref4) {
  var position = _ref4.position,
    scrollY = _ref4.scrollY,
    scrollX = _ref4.scrollX,
    containerHeight = _ref4.containerHeight,
    containerWidth = _ref4.containerWidth,
    itemOverscan = _ref4.itemOverscan,
    overlapsCount = _ref4.overlapsCount,
    isVerticalMode = _ref4.isVerticalMode;
  // Set item visibility for vertical mode
  var _overlapsCount = overlapsCount === 0 ? 1 : overlapsCount;
  if (isVerticalMode) {
    if (position.height <= 0) {
      return false;
    }
    if (scrollX > position.left + position.width * 2 * _overlapsCount) {
      return false;
    }
    if (scrollX + containerWidth <= position.left) {
      return false;
    }
    if (scrollY + containerHeight >= position.top && scrollY <= position.edgeEnd) {
      return true;
    }
  } else {
    // Set item visibility for horizontal mode
    if (position.width <= 0) {
      return false;
    }
    if (scrollY > position.top + itemOverscan * 3 * _overlapsCount) {
      return false;
    }
    if (scrollY + containerHeight <= position.top) {
      return false;
    }
    if (scrollX + containerWidth >= position.left && scrollX <= position.edgeEnd) {
      return true;
    }
  }
  return false;
};
var getSidebarItemVisibility = function getSidebarItemVisibility(_ref5) {
  var position = _ref5.position,
    scrollX = _ref5.scrollX,
    scrollY = _ref5.scrollY,
    containerHeight = _ref5.containerHeight,
    containerWidth = _ref5.containerWidth,
    itemOverscan = _ref5.itemOverscan,
    isVerticalMode = _ref5.isVerticalMode;
  // Set item visibility for vertical mode
  if (isVerticalMode) {
    var left = position.left + position.height;
    if (scrollX > left + itemOverscan * 3) {
      return false;
    }
    if (scrollX + containerWidth <= left - position.height) {
      return false;
    }
  } else {
    // Set item visibility for horizontal mode
    if (scrollY > position.top + position.height + itemOverscan * 3) {
      return false;
    }
    if (scrollY + containerHeight <= position.top) {
      return false;
    }
  }
  return true;
};
var getTimelineItemVisibility = function getTimelineItemVisibility(_ref6) {
  var position = _ref6.position,
    scrollY = _ref6.scrollY,
    scrollX = _ref6.scrollX,
    containerHeight = _ref6.containerHeight,
    containerWidth = _ref6.containerWidth,
    isVerticalMode = _ref6.isVerticalMode;
  // Set item visibility for vertical mode
  if (isVerticalMode) {
    if (scrollY > position.left + position.width * 2) {
      return false;
    }
    if (scrollY + containerHeight <= position.left) {
      return false;
    }
  } else {
    // Set item visibility for horizontal mode
    if (scrollX > position.left + position.width * 2) {
      return false;
    }
    if (scrollX + containerWidth <= position.left) {
      return false;
    }
  }
  return true;
};
var setUpdatedLayoutItem = function setUpdatedLayoutItem(data, modeType) {
  var id = generateUUID();
  var since = data.date + " " + data.since;
  var till = data.date + " " + data.till;
  if (modeType === "week") {
    till = formatTz(endOfDay(new Date(till)), TIME_FORMAT.DEFAULT);
  } else if (modeType === "month") {
    till = formatTz(addDays(endOfDay(new Date(till)), 20), TIME_FORMAT.DEFAULT);
  }
  return _extends({
    id: id,
    title: "",
    image: ""
  }, data, {
    since: since,
    till: till
  });
};

var getTime = function getTime(date) {
  return toDate(date).getTime();
};
var getLiveStatus = function getLiveStatus(since, till) {
  var nowTime = getNewDateTimeTz(getNewDateTz());
  var sinceTime = getNewDateTimeTz(since);
  var sinceTill = getNewDateTimeTz(till);
  return nowTime >= sinceTime && sinceTill > nowTime;
};
var formatTime = function formatTime(date) {
  return format(new Date(date), TIME_FORMAT.DEFAULT).replace(/\s/g, "T");
};
var formatTimeTz = function formatTimeTz(date) {
  return formatTz(new Date(date), TIME_FORMAT.DEFAULT).replace(/\s/g, "T");
};
var roundToMinutes = function roundToMinutes(date) {
  return roundToNearestMinutes(new Date(date));
};
var isYesterday = function isYesterday(since, startDate) {
  var sinceTime = getTime(new Date(since));
  var startDateTime = getTime(new Date(startDate));
  return startDateTime > sinceTime;
};
var isFutureTime = function isFutureTime(date) {
  var dateTime = getTime(new Date(date));
  var now = getTime(new Date());
  return dateTime > now;
};
var getTimeRangeDates = function getTimeRangeDates(startDate, endDate) {
  var endDateValue = endDate;
  if (endDate === "") {
    endDateValue = formatTime(startOfDay(addDays(getDate(startDate), 1)));
  }
  return {
    startDate: startDate,
    endDate: endDateValue
  };
};
var getFormattedWeekMonthDate = function getFormattedWeekMonthDate(_ref) {
  var date = _ref.date,
    mode = _ref.mode,
    isBaseTimeFormat = _ref.isBaseTimeFormat;
  if (mode.type === "week") {
    if (mode.style === "modern") {
      return format(toDate(date), TIME_FORMAT.DAY_DATE);
    }
    var dateFormat = isBaseTimeFormat ? TIME_FORMAT.BASE_DAY_MONTH : TIME_FORMAT.DAY_MONTH;
    return format(toDate(date), dateFormat);
  }
  return format(toDate(date), TIME_FORMAT.MONTH);
};
var getNumberOfHoursInDays = function getNumberOfHoursInDays(_ref2) {
  var startDate = _ref2.startDate,
    customHoursInDays = _ref2.customHoursInDays;
  if (customHoursInDays.length === 0) return [];
  var itemsDiffInHours = 0;
  var data = customHoursInDays.reduce(function (acc, item) {
    var diffLeft = 0;
    var prevItem = acc[acc.length - 1];
    if (!prevItem) {
      diffLeft = differenceInHours(getDate(item.startTimeHour), getDate(startDate));
    }
    if (prevItem) {
      diffLeft = differenceInHours(getDate(item.startTimeHour), getDate(prevItem.endTimeHour));
      diffLeft += prevItem.diffLeft;
      itemsDiffInHours += prevItem.diffInHours;
    }
    var diffInHours = differenceInHours(getDate(item.endTimeHour), getDate(item.startTimeHour));
    var startTime = Number(format(getDate(item.startTimeHour), "H"));
    var endTime = Number(format(getDate(item.endTimeHour), "H"));
    var obj = _extends({}, item, {
      diffLeft: diffLeft,
      diffInHours: diffInHours,
      prevItemDiffInHours: itemsDiffInHours,
      startTime: startTime,
      endTime: endTime
    });
    acc.push(obj);
    return acc;
  }, []);
  return data;
};
var getTodayHoursInDays = function getTodayHoursInDays(hoursInDays) {
  var date = hoursInDays.filter(function (item) {
    return isWithinInterval(new Date(), {
      start: new Date(item.startTimeHour),
      end: new Date(item.endTimeHour)
    });
  });
  return date.length > 0;
};
var getHoursInDaysPositionX = function getHoursInDaysPositionX(_ref3) {
  var hoursInDays = _ref3.hoursInDays,
    hourWidth = _ref3.hourWidth,
    sidebarWidth = _ref3.sidebarWidth,
    cb = _ref3.cb;
  var date = hoursInDays.filter(function (item) {
    return isWithinInterval(new Date(), {
      start: new Date(item.startTimeHour),
      end: new Date(item.endTimeHour)
    });
  });
  if (date.length === 0) {
    cb == null || cb(false);
    return 0;
  }
  var day = date[0];
  var positionX = getPositionX(startOfDay(new Date(day.startTimeHour)), new Date(), day.startTimeHour, day.endTimeHour, hourWidth);
  return positionX + sidebarWidth + day.prevItemDiffInHours * hourWidth;
};

var _excluded$1 = ["hoursInDays"];
var BASE_DAY_MONTH = TIME_FORMAT.BASE_DAY_MONTH,
  DAY_MONTH = TIME_FORMAT.DAY_MONTH;
var generateDayHours = function generateDayHours(isBaseTimeFormat, dayIndex, days) {
  return Array.from({
    length: HOURS_IN_DAY
  }, function (_, i) {
    if (i === 0) {
      var timeFormat = isBaseTimeFormat ? BASE_DAY_MONTH : DAY_MONTH;
      var date = parse(days[dayIndex], TIME_FORMAT.DATE, new Date());
      return dayIndex === 0 ? i : format(date, timeFormat);
    }
    return i;
  });
};
var generateTimelineSlots = function generateTimelineSlots(modeType, options) {
  var hoursInDays = options.hoursInDays,
    rest = _objectWithoutPropertiesLoose(options, _excluded$1);
  if (modeType === "week") {
    return generateWeekTimelineSlots(rest);
  }
  if (modeType === "month") {
    return generateMonthTimelineSlots(rest);
  }
  if (hoursInDays.length > 0) {
    return getDayHoursTimeSlots(options);
  }
  return getDayTimeSlots(rest);
};
var getDayHoursTimeSlots = function getDayHoursTimeSlots(_ref) {
  var isBaseTimeFormat = _ref.isBaseTimeFormat,
    days = _ref.days,
    hoursInDays = _ref.hoursInDays,
    numberOfDays = _ref.numberOfDays;
  var slots = generateArray(numberOfDays).reduce(function (acc, _, dayIndex) {
    var hours = generateDayHours(isBaseTimeFormat, dayIndex, days);
    var hoursInDay = hoursInDays[dayIndex];
    var sliced = hours.slice(hoursInDay.startTime, hoursInDay.endTime);
    if (dayIndex > 0) sliced[0] = hours[0];
    return [].concat(acc, sliced);
  }, []);
  return slots;
};
var getDayTimeSlots = function getDayTimeSlots(_ref2) {
  var isBaseTimeFormat = _ref2.isBaseTimeFormat,
    days = _ref2.days,
    numberOfDays = _ref2.numberOfDays,
    numberOfHoursInDay = _ref2.numberOfHoursInDay,
    offsetStartHoursRange = _ref2.offsetStartHoursRange;
  var slots = generateArray(numberOfDays).reduce(function (acc, _, dayIndex) {
    var hours = generateDayHours(isBaseTimeFormat, dayIndex, days);
    if (dayIndex === 0) return [].concat(acc, hours.slice(offsetStartHoursRange));
    return [].concat(acc, hours);
  }, []);
  return slots.slice(0, numberOfHoursInDay);
};
var generateWeekTimelineSlots = function generateWeekTimelineSlots(_ref3) {
  var days = _ref3.days,
    numberOfDays = _ref3.numberOfDays;
  var slots = generateArray(numberOfDays).map(function (_, dayIndex) {
    var date = parse(days[dayIndex], TIME_FORMAT.DATE, new Date());
    return format(date, TIME_FORMAT.DATE);
  });
  return slots;
};
var generateMonthTimelineSlots = function generateMonthTimelineSlots(_ref4) {
  var months = _ref4.months,
    numberOfMonths = _ref4.numberOfMonths;
  var slots = generateArray(numberOfMonths).map(function (_, dayIndex) {
    var date = parse(months[dayIndex], TIME_FORMAT.DATE, new Date());
    return format(date, TIME_FORMAT.DATE);
  });
  return slots;
};
var getTimelineMonthsWidth = function getTimelineMonthsWidth(_ref5) {
  var months = _ref5.months,
    weekDayWidth = _ref5.weekDayWidth;
  var _months$reduce = months.reduce(function (acc, month, index) {
      var daysInMonth = getDaysInMonth(toDate(month));
      var width = daysInMonth * weekDayWidth;
      if (index === 0) {
        acc.data.push({
          width: width,
          left: 0
        });
        acc.offsetLeft = 0;
        return acc;
      }
      var left = acc.offsetLeft + acc.data[index - 1].width;
      acc.data.push({
        width: width,
        left: left
      });
      acc.offsetLeft = left;
      return acc;
    }, {
      data: [],
      offsetLeft: 0
    }),
    data = _months$reduce.data;
  return data;
};
var getTimelineHeight = function getTimelineHeight(timelineHeight, mode) {
  if ((mode.type === "week" || mode.type === "month") && mode.style === "modern") {
    return TIMELINE_HEIGHT_MODERN_STYLE;
  }
  return timelineHeight;
};

var getLineStyles = function getLineStyles(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    isTimeline = _ref.isTimeline,
    lineStyles = _ref.lineStyles,
    position = _ref.position;
  if (isVerticalMode) {
    return {
      position: _extends({}, position, {
        position: lineStyles.position,
        top: position.left,
        left: isTimeline ? lineStyles.top : 0,
        width: position.height,
        height: lineStyles.width
      })
    };
  }
  return {
    position: _extends({}, position, {
      position: lineStyles.position,
      top: isTimeline ? lineStyles.top : 0,
      width: lineStyles.width
    })
  };
};

var getChannelVerticalPosition = function getChannelVerticalPosition(channel, isVerticalMode) {
  if (isVerticalMode) {
    return _extends({}, channel, {
      position: _extends({}, channel.position, {
        left: channel.position.top,
        width: channel.position.height
      })
    });
  }
  return channel;
};
var getChannelGroupTreeProps = function getChannelGroupTreeProps(channel) {
  var _channel$parentChanne;
  var data = _extends({}, channel, {
    nestedChildren: [],
    isFirstNestedChild: false,
    isLastNestedChild: false
  });
  var getChanelGroupTree = function getChanelGroupTree(uuid) {
    var _channelsGroupTree;
    return (_channelsGroupTree = channelsGroupTree[uuid != null ? uuid : ""]) != null ? _channelsGroupTree : null;
  };
  var channelsGroupTree = getChannelsGroupTree();
  var channelGroupTree = getChanelGroupTree(channel.uuid);
  var channelNestedGroupTree = getChanelGroupTree((_channel$parentChanne = channel.parentChannelUuid) != null ? _channel$parentChanne : "");
  if (channel.parentChannelUuid && channelNestedGroupTree) {
    var _channelNestedGroupTr, _channelNestedGroupTr2;
    var isFirstNestedChild = ((_channelNestedGroupTr = channelNestedGroupTree.nestedChildren) == null ? void 0 : _channelNestedGroupTr.at(0)) === channel.uuid;
    var isLastNestedChild = ((_channelNestedGroupTr2 = channelNestedGroupTree.nestedChildren) == null ? void 0 : _channelNestedGroupTr2.at(-1)) === channel.uuid;
    return _extends({}, data, {
      isFirstNestedChild: isFirstNestedChild,
      isLastNestedChild: isLastNestedChild
    });
  } else if (channelGroupTree) {
    return _extends({}, data, {
      nestedChildren: channelGroupTree.nestedChildren
    });
  }
  return data;
};

function getOverlapCount(program, overlapArray) {
  var sinceB = new Date(program.data.since);
  var tillB = new Date(program.data.till);
  var overlapCount = 0;
  for (var _iterator = _createForOfIteratorHelperLoose(overlapArray), _step; !(_step = _iterator()).done;) {
    var otherProgram = _step.value;
    if (program.data.id === otherProgram.data.id) continue;
    var sinceOther = new Date(otherProgram.data.since);
    var tillOther = new Date(otherProgram.data.till);
    if (sinceB <= tillOther && tillB >= sinceOther || sinceOther <= tillB && tillOther >= sinceB) {
      overlapCount++;
    }
  }
  return overlapCount;
}
function overlapPosition(program, overlapArray, channelOverlapsCount) {
  var sinceB = new Date(program.data.since);
  var tillB = new Date(program.data.till);
  var newChannelOverlapsCount = channelOverlapsCount;
  for (var index = 0; index < newChannelOverlapsCount + 1; index++) {
    var top = program.data.channelPosition.top > 0 ? program.data.channelPosition.top : 0;
    var levelTop = top + program.position.height * index;
    var overlapsOnLevel = false;
    var overlapsOnLevelUp = false;
    for (var _iterator2 = _createForOfIteratorHelperLoose(overlapArray), _step2; !(_step2 = _iterator2()).done;) {
      var otherProgram = _step2.value;
      if (program.data.id === otherProgram.data.id) continue;
      if (levelTop === otherProgram.position.top) {
        var sinceOther = new Date(otherProgram.data.since);
        var tillOther = new Date(otherProgram.data.till);
        if (sinceB < tillOther && tillB > sinceOther || sinceOther < tillB && tillOther > sinceB) {
          if (sinceB <= tillOther && tillB >= sinceOther || sinceOther <= tillB && tillOther >= sinceB) {
            overlapsOnLevelUp = true;
          }
          overlapsOnLevel = true;
          break;
        }
      }
    }
    if (!overlapsOnLevel) {
      return overlapsOnLevelUp ? index + 4 : index;
    }
  }
  return newChannelOverlapsCount;
}
var getOverlapProgramOptions$1 = function getOverlapProgramOptions(program, overlapArray, channelOverlapsCount) {
  var _program = _extends({}, program);
  var data = _program.data,
    position = _program.position;
  var programOverlapIndex = overlapArray.length + 1;
  var channelPosition = data.channelPosition,
    overlapTimes = data.overlapTimes;
  var width = position.width,
    height = position.height,
    left = position.left;
  var newHeight =  height ;
  var newTop = channelPosition.top + (overlapTimes != null ? overlapTimes : programOverlapIndex) * newHeight;
  var newProgram = _extends({}, program, {
    position: {
      width: width,
      height: newHeight,
      top: newTop,
      left: left
    }
  });
  var overlapTop = overlapPosition(newProgram, overlapArray, channelOverlapsCount);
  newProgram.position = _extends({}, newProgram.position, {
    top: channelPosition.top + newProgram.position.height * overlapTop
  });
  return [newProgram, overlapTop + 1];
};
var setChannelOverlapCount = function setChannelOverlapCount(programA, channelOverlapsCount, channelOverlaps) {
  return channelOverlapsCount > channelOverlaps[programA.data.channelUuid] ? channelOverlapsCount : channelOverlaps[programA.data.channelUuid];
};
function getOverlaps(isVerticalMode, itemOverlaps, programs) {
  var overlaps = _extends({}, itemOverlaps);
  var channelOverlaps = {};
  for (var _iterator3 = _createForOfIteratorHelperLoose(programs), _step3; !(_step3 = _iterator3()).done;) {
    var program = _step3.value;
    overlaps[program.data.channelUuid] = [];
  }
  var _loop = function _loop() {
    var _programA$data;
    var programA = _extends({}, programs[i]);
    var sinceA = new Date(programA.data.since);
    var tillA = new Date(programA.data.till);
    // Group channel tree
    // If parent group tree is open, then all children group tree are visible
    // If parent group tree is closed, then all children group tree are not visible
    if (programA != null && (_programA$data = programA.data) != null && _programA$data.parentChannelUuid) {
      var _programA$data2;
      var channelsGroupTree = getChannelsGroupTree();
      var channelGroupTree = channelsGroupTree[programA == null || (_programA$data2 = programA.data) == null ? void 0 : _programA$data2.parentChannelUuid];
      if (!(channelGroupTree != null && channelGroupTree.isOpen)) return 1; // continue
    }
    if (isVerticalMode) {
      programA.position = switchPosition(programA.position);
    }
    var _loop2 = function _loop2() {
      var programB = _extends({}, programs[j]);
      if (programA.data.channelUuid !== programB.data.channelUuid) return 1; // continue
      if (isVerticalMode) {
        programB.position = switchPosition(programB.position);
      }
      var sinceB = new Date(programB.data.since);
      var tillB = new Date(programB.data.till);
      if (sinceA < tillB && tillA > sinceB || sinceB < tillA && tillB > sinceA) {
        var elementA = overlaps[programA.data.channelUuid];
        var elementB = overlaps[programB.data.channelUuid];
        var isSameChannelUuid = programA.data.channelUuid === programB.data.channelUuid;
        if (elementA && elementB && isSameChannelUuid) {
          programB.data.overlapLinkedId = programA.data.overlapLinkedId;
          var overlapArray = overlaps[programA.data.channelUuid];
          var isElementAExist = overlapArray.some(function (el) {
            return el.data.id === programA.data.id;
          });
          var isElementBExist = overlapArray.some(function (el) {
            return el.data.id === programB.data.id;
          });
          var channelOverlapsLength = overlaps[programA.data.channelUuid].length;
          if (!isElementBExist && channelOverlapsLength === 0) {
            programB.position.top = programA.data.channelPosition.top + programA.position.height;
            overlaps[programA.data.channelUuid] = [programA, programB];
            channelOverlaps[programA.data.channelUuid] = !channelOverlaps[programA.data.channelUuid] ? 2 : channelOverlaps[programA.data.channelUuid];
          } else if (!isElementBExist && channelOverlapsLength > 1) {
            var overlapCount = 0;
            if (!isElementAExist) {
              overlapCount = getOverlapCount(programB, overlapArray);
              programB.data.overlapTimes = overlapCount;
              var _getOverlapProgramOpt = getOverlapProgramOptions$1(programA, overlapArray, channelOverlaps[programA.data.channelUuid]),
                newProgramA = _getOverlapProgramOpt[0],
                _channelOverlapsCount = _getOverlapProgramOpt[1];
              overlapArray.push(newProgramA);
              channelOverlaps[programA.data.channelUuid] = setChannelOverlapCount(programA, _channelOverlapsCount, channelOverlaps);
            }
            overlapCount = getOverlapCount(programB, overlapArray);
            programB.data.overlapTimes = overlapCount;
            var _getOverlapProgramOpt2 = getOverlapProgramOptions$1(programB, overlapArray, channelOverlaps[programA.data.channelUuid]),
              newProgramB = _getOverlapProgramOpt2[0],
              channelOverlapsCount = _getOverlapProgramOpt2[1];
            overlapArray.push(newProgramB);
            channelOverlaps[programA.data.channelUuid] = setChannelOverlapCount(programA, channelOverlapsCount, channelOverlaps);
          } else if (isElementBExist && channelOverlapsLength > 1) {
            var _overlapCount = getOverlapCount(programB, overlapArray);
            programB.data.overlapTimes = _overlapCount;
            var _getOverlapProgramOpt3 = getOverlapProgramOptions$1(programB, overlapArray, channelOverlaps[programA.data.channelUuid]),
              _channelOverlapsCount2 = _getOverlapProgramOpt3[1];
            channelOverlaps[programA.data.channelUuid] = setChannelOverlapCount(programA, _channelOverlapsCount2, channelOverlaps);
          } else if (channelOverlapsLength > 1) {
            overlapArray.push(programB);
          }
        }
      } else if (overlaps[programA.data.channelUuid] && overlaps[programA.data.channelUuid].length === 0) {
        channelOverlaps[programA.data.channelUuid] = 0;
        overlaps[programA.data.channelUuid] = [];
      }
    };
    for (var j = i + 1; j < programs.length; j++) {
      if (_loop2()) continue;
    }
  };
  for (var i = 0; i < programs.length - 1; i++) {
    if (_loop()) continue;
  }
  return {
    overlaps: overlaps,
    channelOverlaps: channelOverlaps
  };
}
var getChannelProgramSliced = function getChannelProgramSliced(programs) {
  var acc = new Map();
  for (var _iterator4 = _createForOfIteratorHelperLoose(programs), _step4; !(_step4 = _iterator4()).done;) {
    var next = _step4.value;
    var channelUuid = next.data.channelUuid;
    if (!acc.has(channelUuid)) {
      acc.set(channelUuid, []);
    }
    acc.get(channelUuid).push(next);
  }
  return Object.fromEntries(acc);
};
var getChannelEpdIndexesProgramSliced = function getChannelEpdIndexesProgramSliced(programs, overlaps, dndChannelUuidIndex) {
  var acc = {};
  for (var _i = 0, _Object$keys = Object.keys(overlaps); _i < _Object$keys.length; _i++) {
    var _overlaps$next, _overlaps$next2;
    var next = _Object$keys[_i];
    var channelIndex = (_overlaps$next = overlaps[next]) == null || (_overlaps$next = _overlaps$next[0]) == null ? void 0 : _overlaps$next.data.channelIndex;
    var channelUuid = (_overlaps$next2 = overlaps[next]) == null || (_overlaps$next2 = _overlaps$next2[0]) == null ? void 0 : _overlaps$next2.data.channelUuid;
    if (channelIndex !== undefined && channelIndex > dndChannelUuidIndex) {
      var channelEpgIndexes = getChannelEpgIndexes(next);
      var slicedPrograms = programs.slice(channelEpgIndexes.first, channelEpgIndexes.last + 1);
      acc[channelUuid] = slicedPrograms;
    }
  }
  return acc;
};
function checkOverlaps(isMultirowsDnd, isVerticalMode, dndChannelUuid, itemOverlaps, programs) {
  var overlaps = _extends({}, itemOverlaps);
  var channelOverlaps = {};
  var data = {};
  var channelEpgIndexes = getChannelEpgIndexes(dndChannelUuid.uuid);
  if (!isMultirowsDnd && channelEpgIndexes) {
    var _extends2;
    var slicedOverlapsPrograms = getChannelEpdIndexesProgramSliced(programs, overlaps, dndChannelUuid.index);
    data = _extends((_extends2 = {}, _extends2[dndChannelUuid.uuid] = programs.slice(channelEpgIndexes.first, channelEpgIndexes.last + 1), _extends2), slicedOverlapsPrograms);
  } else {
    data = getChannelProgramSliced(programs);
  }
  for (var channel in data) {
    var props = getOverlaps(isVerticalMode, itemOverlaps, data[channel]);
    overlaps[channel] = props.overlaps[channel];
    channelOverlaps[channel] = props.channelOverlaps[channel];
  }
  for (var channelUuid in overlaps) {
    var _Object$keys2;
    if (overlaps != null && overlaps[channelUuid] && ((_Object$keys2 = Object.keys(overlaps == null ? void 0 : overlaps[channelUuid])) == null ? void 0 : _Object$keys2.length) === 0) {
      delete overlaps[channelUuid];
    }
  }
  return {
    overlaps: overlaps,
    channelOverlaps: channelOverlaps
  };
}

var getFormattedDndDate = function getFormattedDndDate(newSince, newTill) {
  var timezone = getTimezoneOptionsCache();
  if (timezone.enabled && timezone.mode === TIMEZONE_MODES.UTC_TO_ZONED_TIME) {
    var utcDateSince = zonedDateTimeToUtc(newSince);
    var utcDateTill = zonedDateTimeToUtc(newTill);
    return {
      since: utcDateSince.toISOString(),
      till: utcDateTill.toISOString()
    };
  }
  return {
    since: format(newSince, TIME_FORMAT.DEFAULT).replace(" ", "T"),
    till: format(newTill, TIME_FORMAT.DEFAULT).replace(" ", "T")
  };
};
var getResizeTill = function getResizeTill(_ref) {
  var initialWidth = _ref.initialWidth,
    width = _ref.width,
    hourWidth = _ref.hourWidth;
  if (!initialWidth && !width) return 0;
  var diff = width - initialWidth;
  var diffHours = diff / hourWidth;
  return diffHours * 60;
};
var calculateItemDragSinceTill = function calculateItemDragSinceTill(props) {
  var initialPositionLeft = props.initialPositionLeft,
    left = props.left,
    initialWidth = props.initialWidth,
    width = props.width,
    hourWidth = props.hourWidth,
    startDate = props.startDate,
    since = props.since,
    till = props.till;
  var minDiff = 0;
  if (startDate) {
    var startDateTime = new Date(startDate).getTime();
    var sinceTime = new Date(since).getTime();
    if (sinceTime < startDateTime) {
      minDiff = differenceInMinutes(new Date(startDate), new Date(since));
    }
  }
  var diff = left - initialPositionLeft;
  var diffHours = diff / hourWidth;
  var tillDiffHours = getResizeTill({
    initialWidth: initialWidth,
    width: width,
    hourWidth: hourWidth
  });
  var newSince = addMinutes(new Date(since), diffHours * 60 + minDiff);
  var newTill = addMinutes(new Date(till), diffHours * 60 + tillDiffHours + minDiff);
  return getFormattedDndDate(newSince, newTill);
};
var getDefaultDragProps = function getDefaultDragProps(positionLeft) {
  return {
    currentPositionX: positionLeft,
    dndEvents: {
      isDragging: false
    }
  };
};

var getConvertedGridItems = function getConvertedGridItems(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    channels = _ref.channels,
    dayWidth = _ref.dayWidth,
    hourWidth = _ref.hourWidth,
    timelineHeight = _ref.timelineHeight,
    sidebarWidth = _ref.sidebarWidth,
    mode = _ref.mode,
    dayWidthResources = _ref.dayWidthResources,
    daysResources = _ref.daysResources;
  var isMonthMode = mode.type === "month";
  var numberOfSlots = function numberOfSlots() {
    if (mode.type === "day") return dayWidthResources.numberOfHoursInDay;
    if (mode.type === "week") return daysResources.numberOfDays;
    return dayWidthResources.numberOfMonths;
  };
  var monthsWidth = function monthsWidth() {
    return getTimelineMonthsWidth({
      months: daysResources.months,
      weekDayWidth: hourWidth * HOURS_IN_DAY
    });
  };
  var getGridItemPosition = function getGridItemPosition(channel, index) {
    var width = 0;
    var left = 0;
    if (isMonthMode) {
      width = monthsWidth()[index].width;
      left = monthsWidth()[index].left;
    } else {
      width = dayWidth / numberOfSlots();
      left = width * index;
    }
    var position = {
      top: channel.position.top,
      left: left,
      width: width,
      height: channel.position.height,
      edgeEnd: left + width
    };
    if (isVerticalMode) {
      position = _extends({}, position, {
        left: position.top + timelineHeight,
        top: position.left + sidebarWidth,
        width: position.height,
        height: position.width
      });
    } else {
      position = _extends({}, position, {
        top: position.top + timelineHeight,
        left: left + sidebarWidth,
        width: width,
        height: position.height
      });
    }
    return {
      position: position,
      channel: channel
    };
  };
  return channels.flatMap(function (channel) {
    return generateArray(numberOfSlots()).map(function (_, index) {
      return getGridItemPosition(channel, index);
    });
  });
};
var getClickGridItemData = function getClickGridItemData(_ref2) {
  var _ref2$isDrop = _ref2.isDrop,
    isDrop = _ref2$isDrop === void 0 ? false : _ref2$isDrop,
    isVerticalMode = _ref2.isVerticalMode,
    isBaseTimeFormat = _ref2.isBaseTimeFormat,
    index = _ref2.index,
    item = _ref2.item,
    grid = _ref2.grid,
    mode = _ref2.mode,
    dayWidth = _ref2.dayWidth,
    hourWidth = _ref2.hourWidth,
    sidebarWidth = _ref2.sidebarWidth,
    days = _ref2.days,
    hoursInDays = _ref2.hoursInDays,
    months = _ref2.months,
    numberOfDays = _ref2.numberOfDays,
    numberOfHoursInDay = _ref2.numberOfHoursInDay,
    numberOfMonths = _ref2.numberOfMonths,
    offsetStartHoursRange = _ref2.offsetStartHoursRange,
    timelineDividers = _ref2.timelineDividers,
    dataAttributes = _ref2.dataAttributes;
  var position = item.position,
    channel = item.channel;
  var isDayMode = mode.type === "day";
  var newPosition = {};
  if (isVerticalMode) {
    newPosition = _extends({}, position, {
      top: position.left,
      left: position.top - sidebarWidth,
      edgeEnd: position.left + hourWidth - sidebarWidth
    });
  } else {
    newPosition = _extends({}, position, {
      top: position.top,
      left: position.left - sidebarWidth,
      edgeEnd: position.edgeEnd - sidebarWidth
    });
  }
  var options = {
    isBaseTimeFormat: isBaseTimeFormat,
    days: days,
    hoursInDays: hoursInDays,
    months: months,
    numberOfDays: numberOfDays,
    numberOfHoursInDay: numberOfHoursInDay,
    numberOfMonths: numberOfMonths,
    offsetStartHoursRange: offsetStartHoursRange
  };
  var timeSlots = generateTimelineSlots(mode.type, options);
  var left = isDayMode ? newPosition.left + index * (hourWidth / timelineDividers) : newPosition.left;
  var edgeEnd = isDayMode ? left + hourWidth / timelineDividers : newPosition.edgeEnd;
  var itemClickProps = {
    since: "00:00:00",
    till: "00:00:00",
    date: "",
    channelUuid: channel.uuid
  };
  if (isDayMode) {
    var gridItemProps = getDividerGridProps({
      left: left,
      edgeEnd: edgeEnd,
      timeSlots: timeSlots,
      channel: channel,
      days: days,
      dayWidth: dayWidth,
      hourWidth: hourWidth,
      index: index
    });
    isDrop ? grid.onGridItemDrop == null ? void 0 : grid.onGridItemDrop(_extends({}, gridItemProps, dataAttributes)) : grid.onGridItemClick == null ? void 0 : grid.onGridItemClick(gridItemProps);
  }
  if (mode.type === "week") {
    var _index = Math.floor(left / (hourWidth * 24));
    var _options = _extends({}, itemClickProps, {
      date: timeSlots[_index]
    });
    isDrop ? grid.onGridItemDrop == null ? void 0 : grid.onGridItemDrop(_extends({}, _options, dataAttributes)) : grid.onGridItemClick == null ? void 0 : grid.onGridItemClick(_options);
  }
  if (mode.type === "month") {
    var _index2 = Math.floor(left / (hourWidth * 24 * 30));
    var _options2 = _extends({}, itemClickProps, {
      date: timeSlots[_index2]
    });
    isDrop ? grid.onGridItemDrop == null ? void 0 : grid.onGridItemDrop(_extends({}, _options2, dataAttributes)) : grid.onGridItemClick == null ? void 0 : grid.onGridItemClick(_options2);
  }
};
var getDividerGridProps = function getDividerGridProps(_ref3) {
  var left = _ref3.left,
    edgeEnd = _ref3.edgeEnd,
    timeSlots = _ref3.timeSlots,
    channel = _ref3.channel,
    days = _ref3.days,
    hourWidth = _ref3.hourWidth,
    dayWidth = _ref3.dayWidth,
    index = _ref3.index;
  var since = "";
  var till = "";
  var dayTimeSlots = timeSlots.map(function (time) {
    return typeof time === "number" ? time : 0;
  });
  var sinceTimeInHours = Math.floor(left / hourWidth); // Assuming 4 hours per hourWidth
  var tillTimeInHours = Math.floor(edgeEnd / hourWidth); // Assuming 4 hours per hourWidth
  var getTime = function getTime(index) {
    return dayTimeSlots[index] < 10 ? "0" + dayTimeSlots[index] : dayTimeSlots[index];
  };
  var newSince = getTime(sinceTimeInHours);
  var newTill = getTime(tillTimeInHours);
  var newSinceMin = index === 0 ? "00" : index * 15;
  var newTillMin = index + 1 === 0 ? "00" : (index + 1) * 15;
  since = newSince + ":" + newSinceMin + ":00";
  till = newTill + ":" + newTillMin + ":00";
  if (newTillMin === 60) {
    var newNextTill = dayTimeSlots[sinceTimeInHours + 1] < 10 ? "0" + dayTimeSlots[sinceTimeInHours + 1] : dayTimeSlots[tillTimeInHours];
    till = newTill ? newNextTill + ":00:00 " : "00:00:00";
  }
  var singleDayWidth = dayWidth / (days.length - 1);
  var dayIndex = Math.floor(left / singleDayWidth);
  var options = {
    since: since,
    till: till,
    date: days[dayIndex],
    channelUuid: channel.uuid
  };
  return options;
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var Container = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1mhijim5"
} : {
  target: "e1mhijim5",
  label: "Container"
})("padding:5px;height:", function (_ref) {
  var height = _ref.height;
  return height ? height + "px" : "100%";
}, ";width:", function (_ref2) {
  var width = _ref2.width;
  return width ? width + "px" : "100%";
}, ";*,::before,::after{box-sizing:border-box;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVwZy5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRW9DIiwiZmlsZSI6IkVwZy5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gKGhlaWdodCA/IGAke2hlaWdodH1weGAgOiBcIjEwMCVcIil9O1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiAod2lkdGggPyBgJHt3aWR0aH1weGAgOiBcIjEwMCVcIil9O1xuXG4gICosXG4gIDo6YmVmb3JlLFxuICA6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5gO1xyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XHJcbmV4cG9ydCBjb25zdCBTY3JvbGxCb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcblxuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmIGB0cmFuc2Zvcm06IHNjYWxlKC0xLDEpYH07XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zY3JvbGxiYXIudGh1bWIuYmd9O1xuICAgIGJvcmRlcjogMTBweCBub25lICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgYm9yZGVyOiAyMnB4IG5vbmUgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcbiAgfVxuYDtcclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHsoeyB0b3AgPSAwIH0pID0+IHRvcH1weDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5WzkwMF19O1xuICB6LWluZGV4OiAke0xheWVycy5FcGdDb3JuZXJCb3h9O1xuXG4gICR7KHsgaXNSVEwsIGxlZnQgPSAwIH0pID0+IChpc1JUTCA/IGByaWdodDowcHg7YCA6IGAgbGVmdDogJHtsZWZ0fXB4YCl9O1xuYDtcclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAkeyh7IGlzU2lkZWJhciwgc2lkZWJhcldpZHRoIH0pID0+IChpc1NpZGViYXIgPyBzaWRlYmFyV2lkdGggOiAwKX1weDtcbiAgaGVpZ2h0OiAkeyh7IGNvbnRlbnRIZWlnaHQgfSkgPT4gY29udGVudEhlaWdodH1weDtcbiAgd2lkdGg6ICR7KHsgZGF5V2lkdGggfSkgPT4gZGF5V2lkdGh9cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RpbWVsaW5lLCBkYXlXaWR0aCwgdGltZWxpbmVIZWlnaHQsIGNvbnRlbnRIZWlnaHQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICAgIHdpZHRoOiAke2NvbnRlbnRIZWlnaHR9cHg7XG4gICAgICBoZWlnaHQ6ICR7ZGF5V2lkdGh9cHg7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBMYXlvdXRCZyA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHsoeyBpc1RpbWVsaW5lLCB0aW1lbGluZUhlaWdodCB9KSA9PiBpc1RpbWVsaW5lID8gdGltZWxpbmVIZWlnaHQgOiAwfXB4O1xuICBsZWZ0OiAkeyh7IGlzU2lkZWJhciwgc2lkZWJhcldpZHRoIH0pID0+IChpc1NpZGViYXIgPyBzaWRlYmFyV2lkdGggOiAwKX1weDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHsoeyBkYXlXaWR0aCB9KSA9PiBkYXlXaWR0aH1weDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RpbWVsaW5lLCBpc1NpZGViYXIsIGRheVdpZHRoLCB0aW1lbGluZUhlaWdodCwgc2lkZWJhcldpZHRoLCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICB0b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgbGVmdDogJHtpc1RpbWVsaW5lID8gdGltZWxpbmVIZWlnaHQgOiAwfXB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgaGVpZ2h0OiAke2RheVdpZHRofXB4O1xuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FcGcuc3R5bGVzLmpzLm1hcCJdfQ== */"));
var Wrapper = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1mhijim4"
} : {
  target: "e1mhijim4",
  label: "Wrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "qjsha7",
  styles: "height:100%;width:100%;display:flex;flex-direction:column;position:relative;border-radius:6px;overflow:hidden"
} : {
  name: "qjsha7",
  styles: "height:100%;width:100%;display:flex;flex-direction:column;position:relative;border-radius:6px;overflow:hidden",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVwZy5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWtDIiwiZmlsZSI6IkVwZy5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gKGhlaWdodCA/IGAke2hlaWdodH1weGAgOiBcIjEwMCVcIil9O1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiAod2lkdGggPyBgJHt3aWR0aH1weGAgOiBcIjEwMCVcIil9O1xuXG4gICosXG4gIDo6YmVmb3JlLFxuICA6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5gO1xyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XHJcbmV4cG9ydCBjb25zdCBTY3JvbGxCb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcblxuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmIGB0cmFuc2Zvcm06IHNjYWxlKC0xLDEpYH07XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zY3JvbGxiYXIudGh1bWIuYmd9O1xuICAgIGJvcmRlcjogMTBweCBub25lICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgYm9yZGVyOiAyMnB4IG5vbmUgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcbiAgfVxuYDtcclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHsoeyB0b3AgPSAwIH0pID0+IHRvcH1weDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5WzkwMF19O1xuICB6LWluZGV4OiAke0xheWVycy5FcGdDb3JuZXJCb3h9O1xuXG4gICR7KHsgaXNSVEwsIGxlZnQgPSAwIH0pID0+IChpc1JUTCA/IGByaWdodDowcHg7YCA6IGAgbGVmdDogJHtsZWZ0fXB4YCl9O1xuYDtcclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAkeyh7IGlzU2lkZWJhciwgc2lkZWJhcldpZHRoIH0pID0+IChpc1NpZGViYXIgPyBzaWRlYmFyV2lkdGggOiAwKX1weDtcbiAgaGVpZ2h0OiAkeyh7IGNvbnRlbnRIZWlnaHQgfSkgPT4gY29udGVudEhlaWdodH1weDtcbiAgd2lkdGg6ICR7KHsgZGF5V2lkdGggfSkgPT4gZGF5V2lkdGh9cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RpbWVsaW5lLCBkYXlXaWR0aCwgdGltZWxpbmVIZWlnaHQsIGNvbnRlbnRIZWlnaHQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICAgIHdpZHRoOiAke2NvbnRlbnRIZWlnaHR9cHg7XG4gICAgICBoZWlnaHQ6ICR7ZGF5V2lkdGh9cHg7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBMYXlvdXRCZyA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHsoeyBpc1RpbWVsaW5lLCB0aW1lbGluZUhlaWdodCB9KSA9PiBpc1RpbWVsaW5lID8gdGltZWxpbmVIZWlnaHQgOiAwfXB4O1xuICBsZWZ0OiAkeyh7IGlzU2lkZWJhciwgc2lkZWJhcldpZHRoIH0pID0+IChpc1NpZGViYXIgPyBzaWRlYmFyV2lkdGggOiAwKX1weDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHsoeyBkYXlXaWR0aCB9KSA9PiBkYXlXaWR0aH1weDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RpbWVsaW5lLCBpc1NpZGViYXIsIGRheVdpZHRoLCB0aW1lbGluZUhlaWdodCwgc2lkZWJhcldpZHRoLCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICB0b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgbGVmdDogJHtpc1RpbWVsaW5lID8gdGltZWxpbmVIZWlnaHQgOiAwfXB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgaGVpZ2h0OiAke2RheVdpZHRofXB4O1xuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FcGcuc3R5bGVzLmpzLm1hcCJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var ScrollBox = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1mhijim3"
} : {
  target: "e1mhijim3",
  label: "ScrollBox"
})("position:relative;height:100%;width:100%;overflow:auto;scroll-behavior:smooth;background:", function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary[900];
}, ";", function (_ref4) {
  var isRTL = _ref4.isRTL;
  return isRTL && "transform: scale(-1,1)";
}, ";::-webkit-scrollbar{width:10px;height:10px;}::-webkit-scrollbar-thumb{background:", function (_ref5) {
  var theme = _ref5.theme;
  return theme.scrollbar.thumb.bg;
}, ";border:10px none ", function (_ref6) {
  var theme = _ref6.theme;
  return theme.white;
}, ";border-radius:20px;}::-webkit-scrollbar-thumb:hover{background:", function (_ref7) {
  var theme = _ref7.theme;
  return theme.white;
}, ";}::-webkit-scrollbar-track{background:", function (_ref8) {
  var theme = _ref8.theme;
  return theme.primary[900];
}, ";border:22px none ", function (_ref9) {
  var theme = _ref9.theme;
  return theme.white;
}, ";border-radius:0px;}::-webkit-scrollbar-corner{background:", function (_ref10) {
  var theme = _ref10.theme;
  return theme.primary[900];
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVwZy5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQyIsImZpbGUiOiJFcGcuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkL21hY3JvXCI7XHJcbmltcG9ydCB7IExheWVycyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IChoZWlnaHQgPyBgJHtoZWlnaHR9cHhgIDogXCIxMDAlXCIpfTtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gKHdpZHRoID8gYCR7d2lkdGh9cHhgIDogXCIxMDAlXCIpfTtcblxuICAqLFxuICA6OmJlZm9yZSxcbiAgOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2IGBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xyXG5leHBvcnQgY29uc3QgU2Nyb2xsQm94ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJiBgdHJhbnNmb3JtOiBzY2FsZSgtMSwxKWB9O1xuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2Nyb2xsYmFyLnRodW1iLmJnfTtcbiAgICBib3JkZXI6IDEwcHggbm9uZSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5WzkwMF19O1xuICAgIGJvcmRlcjogMjJweCBub25lICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG4gIH1cbmA7XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgdG9wID0gMCB9KSA9PiB0b3B9cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcbiAgei1pbmRleDogJHtMYXllcnMuRXBnQ29ybmVyQm94fTtcblxuICAkeyh7IGlzUlRMLCBsZWZ0ID0gMCB9KSA9PiAoaXNSVEwgPyBgcmlnaHQ6MHB4O2AgOiBgIGxlZnQ6ICR7bGVmdH1weGApfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG4gIGhlaWdodDogJHsoeyBjb250ZW50SGVpZ2h0IH0pID0+IGNvbnRlbnRIZWlnaHR9cHg7XG4gIHdpZHRoOiAkeyh7IGRheVdpZHRoIH0pID0+IGRheVdpZHRofXB4O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgZGF5V2lkdGgsIHRpbWVsaW5lSGVpZ2h0LCBjb250ZW50SGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgICBsZWZ0OiAke2lzVGltZWxpbmUgPyB0aW1lbGluZUhlaWdodCA6IDB9cHg7XG4gICAgICB3aWR0aDogJHtjb250ZW50SGVpZ2h0fXB4O1xuICAgICAgaGVpZ2h0OiAke2RheVdpZHRofXB4O1xuICAgIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgTGF5b3V0QmcgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgaXNUaW1lbGluZSwgdGltZWxpbmVIZWlnaHQgfSkgPT4gaXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6ICR7KHsgZGF5V2lkdGggfSkgPT4gZGF5V2lkdGh9cHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgaXNTaWRlYmFyLCBkYXlXaWR0aCwgdGltZWxpbmVIZWlnaHQsIHNpZGViYXJXaWR0aCwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAgdG9wOiAke2lzU2lkZWJhciA/IHNpZGViYXJXaWR0aCA6IDB9cHg7XG4gICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogJHtkYXlXaWR0aH1weDtcbiAgICBgfVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXBnLnN0eWxlcy5qcy5tYXAiXX0= */"));
var Box = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1mhijim2"
} : {
  target: "e1mhijim2",
  label: "Box"
})("position:absolute;top:", function (_ref11) {
  var _ref11$top = _ref11.top,
    top = _ref11$top === void 0 ? 0 : _ref11$top;
  return top;
}, "px;background:", function (_ref12) {
  var theme = _ref12.theme;
  return theme.primary[900];
}, ";z-index:", Layers.EpgCornerBox, ";", function (_ref13) {
  var isRTL = _ref13.isRTL,
    _ref13$left = _ref13.left,
    left = _ref13$left === void 0 ? 0 : _ref13$left;
  return isRTL ? "right:0px;" : " left: " + left + "px";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVwZy5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0Q4QiIsImZpbGUiOiJFcGcuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkL21hY3JvXCI7XHJcbmltcG9ydCB7IExheWVycyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IChoZWlnaHQgPyBgJHtoZWlnaHR9cHhgIDogXCIxMDAlXCIpfTtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gKHdpZHRoID8gYCR7d2lkdGh9cHhgIDogXCIxMDAlXCIpfTtcblxuICAqLFxuICA6OmJlZm9yZSxcbiAgOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2IGBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xyXG5leHBvcnQgY29uc3QgU2Nyb2xsQm94ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJiBgdHJhbnNmb3JtOiBzY2FsZSgtMSwxKWB9O1xuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2Nyb2xsYmFyLnRodW1iLmJnfTtcbiAgICBib3JkZXI6IDEwcHggbm9uZSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5WzkwMF19O1xuICAgIGJvcmRlcjogMjJweCBub25lICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG4gIH1cbmA7XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgdG9wID0gMCB9KSA9PiB0b3B9cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcbiAgei1pbmRleDogJHtMYXllcnMuRXBnQ29ybmVyQm94fTtcblxuICAkeyh7IGlzUlRMLCBsZWZ0ID0gMCB9KSA9PiAoaXNSVEwgPyBgcmlnaHQ6MHB4O2AgOiBgIGxlZnQ6ICR7bGVmdH1weGApfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG4gIGhlaWdodDogJHsoeyBjb250ZW50SGVpZ2h0IH0pID0+IGNvbnRlbnRIZWlnaHR9cHg7XG4gIHdpZHRoOiAkeyh7IGRheVdpZHRoIH0pID0+IGRheVdpZHRofXB4O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgZGF5V2lkdGgsIHRpbWVsaW5lSGVpZ2h0LCBjb250ZW50SGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgICBsZWZ0OiAke2lzVGltZWxpbmUgPyB0aW1lbGluZUhlaWdodCA6IDB9cHg7XG4gICAgICB3aWR0aDogJHtjb250ZW50SGVpZ2h0fXB4O1xuICAgICAgaGVpZ2h0OiAke2RheVdpZHRofXB4O1xuICAgIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgTGF5b3V0QmcgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgaXNUaW1lbGluZSwgdGltZWxpbmVIZWlnaHQgfSkgPT4gaXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6ICR7KHsgZGF5V2lkdGggfSkgPT4gZGF5V2lkdGh9cHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgaXNTaWRlYmFyLCBkYXlXaWR0aCwgdGltZWxpbmVIZWlnaHQsIHNpZGViYXJXaWR0aCwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAgdG9wOiAke2lzU2lkZWJhciA/IHNpZGViYXJXaWR0aCA6IDB9cHg7XG4gICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogJHtkYXlXaWR0aH1weDtcbiAgICBgfVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXBnLnN0eWxlcy5qcy5tYXAiXX0= */"));
var Content = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1mhijim1"
} : {
  target: "e1mhijim1",
  label: "Content"
})("position:relative;left:", function (_ref14) {
  var isSidebar = _ref14.isSidebar,
    sidebarWidth = _ref14.sidebarWidth;
  return isSidebar ? sidebarWidth : 0;
}, "px;height:", function (_ref15) {
  var contentHeight = _ref15.contentHeight;
  return contentHeight;
}, "px;width:", function (_ref16) {
  var dayWidth = _ref16.dayWidth;
  return dayWidth;
}, "px;background:", function (_ref17) {
  var theme = _ref17.theme;
  return theme.primary[900];
}, ";", function (_ref18) {
  var isVerticalMode = _ref18.isVerticalMode,
    isTimeline = _ref18.isTimeline,
    dayWidth = _ref18.dayWidth,
    timelineHeight = _ref18.timelineHeight,
    contentHeight = _ref18.contentHeight;
  return isVerticalMode && "\n      left: " + (isTimeline ? timelineHeight : 0) + "px;\n      width: " + contentHeight + "px;\n      height: " + dayWidth + "px;\n    ";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVwZy5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VrQyIsImZpbGUiOiJFcGcuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkL21hY3JvXCI7XHJcbmltcG9ydCB7IExheWVycyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IChoZWlnaHQgPyBgJHtoZWlnaHR9cHhgIDogXCIxMDAlXCIpfTtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gKHdpZHRoID8gYCR7d2lkdGh9cHhgIDogXCIxMDAlXCIpfTtcblxuICAqLFxuICA6OmJlZm9yZSxcbiAgOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2IGBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xyXG5leHBvcnQgY29uc3QgU2Nyb2xsQm94ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJiBgdHJhbnNmb3JtOiBzY2FsZSgtMSwxKWB9O1xuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2Nyb2xsYmFyLnRodW1iLmJnfTtcbiAgICBib3JkZXI6IDEwcHggbm9uZSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5WzkwMF19O1xuICAgIGJvcmRlcjogMjJweCBub25lICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG4gIH1cbmA7XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgdG9wID0gMCB9KSA9PiB0b3B9cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcbiAgei1pbmRleDogJHtMYXllcnMuRXBnQ29ybmVyQm94fTtcblxuICAkeyh7IGlzUlRMLCBsZWZ0ID0gMCB9KSA9PiAoaXNSVEwgPyBgcmlnaHQ6MHB4O2AgOiBgIGxlZnQ6ICR7bGVmdH1weGApfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG4gIGhlaWdodDogJHsoeyBjb250ZW50SGVpZ2h0IH0pID0+IGNvbnRlbnRIZWlnaHR9cHg7XG4gIHdpZHRoOiAkeyh7IGRheVdpZHRoIH0pID0+IGRheVdpZHRofXB4O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgZGF5V2lkdGgsIHRpbWVsaW5lSGVpZ2h0LCBjb250ZW50SGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgICBsZWZ0OiAke2lzVGltZWxpbmUgPyB0aW1lbGluZUhlaWdodCA6IDB9cHg7XG4gICAgICB3aWR0aDogJHtjb250ZW50SGVpZ2h0fXB4O1xuICAgICAgaGVpZ2h0OiAke2RheVdpZHRofXB4O1xuICAgIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgTGF5b3V0QmcgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgaXNUaW1lbGluZSwgdGltZWxpbmVIZWlnaHQgfSkgPT4gaXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6ICR7KHsgZGF5V2lkdGggfSkgPT4gZGF5V2lkdGh9cHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgaXNTaWRlYmFyLCBkYXlXaWR0aCwgdGltZWxpbmVIZWlnaHQsIHNpZGViYXJXaWR0aCwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAgdG9wOiAke2lzU2lkZWJhciA/IHNpZGViYXJXaWR0aCA6IDB9cHg7XG4gICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogJHtkYXlXaWR0aH1weDtcbiAgICBgfVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXBnLnN0eWxlcy5qcy5tYXAiXX0= */"));
var LayoutBg = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1mhijim0"
} : {
  target: "e1mhijim0",
  label: "LayoutBg"
})("position:absolute;top:", function (_ref19) {
  var isTimeline = _ref19.isTimeline,
    timelineHeight = _ref19.timelineHeight;
  return isTimeline ? timelineHeight : 0;
}, "px;left:", function (_ref20) {
  var isSidebar = _ref20.isSidebar,
    sidebarWidth = _ref20.sidebarWidth;
  return isSidebar ? sidebarWidth : 0;
}, "px;height:100%;width:", function (_ref21) {
  var dayWidth = _ref21.dayWidth;
  return dayWidth;
}, "px;", function (_ref22) {
  var isVerticalMode = _ref22.isVerticalMode,
    isTimeline = _ref22.isTimeline,
    isSidebar = _ref22.isSidebar,
    dayWidth = _ref22.dayWidth,
    timelineHeight = _ref22.timelineHeight,
    sidebarWidth = _ref22.sidebarWidth;
  return isVerticalMode && "\n     top: " + (isSidebar ? sidebarWidth : 0) + "px;\n     left: " + (isTimeline ? timelineHeight : 0) + "px;\n     width: 100%;\n     height: " + dayWidth + "px;\n    ";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVwZy5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVtQyIsImZpbGUiOiJFcGcuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkL21hY3JvXCI7XHJcbmltcG9ydCB7IExheWVycyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IChoZWlnaHQgPyBgJHtoZWlnaHR9cHhgIDogXCIxMDAlXCIpfTtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gKHdpZHRoID8gYCR7d2lkdGh9cHhgIDogXCIxMDAlXCIpfTtcblxuICAqLFxuICA6OmJlZm9yZSxcbiAgOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2IGBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xyXG5leHBvcnQgY29uc3QgU2Nyb2xsQm94ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJiBgdHJhbnNmb3JtOiBzY2FsZSgtMSwxKWB9O1xuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2Nyb2xsYmFyLnRodW1iLmJnfTtcbiAgICBib3JkZXI6IDEwcHggbm9uZSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5WzkwMF19O1xuICAgIGJvcmRlcjogMjJweCBub25lICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG4gIH1cbmA7XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgdG9wID0gMCB9KSA9PiB0b3B9cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeVs5MDBdfTtcbiAgei1pbmRleDogJHtMYXllcnMuRXBnQ29ybmVyQm94fTtcblxuICAkeyh7IGlzUlRMLCBsZWZ0ID0gMCB9KSA9PiAoaXNSVEwgPyBgcmlnaHQ6MHB4O2AgOiBgIGxlZnQ6ICR7bGVmdH1weGApfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG4gIGhlaWdodDogJHsoeyBjb250ZW50SGVpZ2h0IH0pID0+IGNvbnRlbnRIZWlnaHR9cHg7XG4gIHdpZHRoOiAkeyh7IGRheVdpZHRoIH0pID0+IGRheVdpZHRofXB4O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgZGF5V2lkdGgsIHRpbWVsaW5lSGVpZ2h0LCBjb250ZW50SGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgICBsZWZ0OiAke2lzVGltZWxpbmUgPyB0aW1lbGluZUhlaWdodCA6IDB9cHg7XG4gICAgICB3aWR0aDogJHtjb250ZW50SGVpZ2h0fXB4O1xuICAgICAgaGVpZ2h0OiAke2RheVdpZHRofXB4O1xuICAgIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgTGF5b3V0QmcgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgaXNUaW1lbGluZSwgdGltZWxpbmVIZWlnaHQgfSkgPT4gaXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6ICR7KHsgZGF5V2lkdGggfSkgPT4gZGF5V2lkdGh9cHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgaXNTaWRlYmFyLCBkYXlXaWR0aCwgdGltZWxpbmVIZWlnaHQsIHNpZGViYXJXaWR0aCwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAgdG9wOiAke2lzU2lkZWJhciA/IHNpZGViYXJXaWR0aCA6IDB9cHg7XG4gICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogJHtkYXlXaWR0aH1weDtcbiAgICBgfVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXBnLnN0eWxlcy5qcy5tYXAiXX0= */"));

var _templateObject$1, _templateObject2, _templateObject3;
var Box$1 = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1psuwkz0"
} : {
  target: "e1psuwkz0",
  label: "Box"
})(function (_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    isTimeline = _ref.isTimeline,
    isRTL = _ref.isRTL,
    sidebarWidth = _ref.sidebarWidth,
    timelineHeight = _ref.timelineHeight,
    contentHeight = _ref.contentHeight,
    bottom = _ref.bottom,
    theme = _ref.theme;
  return css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n    position: sticky;\n    background-color: ", ";\n\n    ", ";\n\n    ", "\n\n    ", "\n  "])), theme.primary[900], isRTL && "& > div { transform: scale(-1,1) }", isVerticalMode && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      top: 0;\n      left: ", "px;\n      height: ", "px;\n      width: ", "px;\n    "])), isTimeline ? timelineHeight : 0, sidebarWidth, contentHeight), !isVerticalMode && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      left: 0;\n      bottom: ", "px;\n      float: left;\n      width: ", "px;\n    "])), bottom, sidebarWidth));
}, " z-index:", Layers.Sidebar, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWxzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHOEIiLCJmaWxlIjoiQ2hhbm5lbHMuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZC9tYWNyb1wiO1xyXG5pbXBvcnQgeyBMYXllcnMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdiBgXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGlzVGltZWxpbmUsIGlzUlRMLCBzaWRlYmFyV2lkdGgsIHRpbWVsaW5lSGVpZ2h0LCBjb250ZW50SGVpZ2h0LCBib3R0b20sIHRoZW1lLCB9KSA9PiBjc3MgYFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5wcmltYXJ5WzkwMF19O1xuXG4gICAgJHtpc1JUTCAmJiBgJiA+IGRpdiB7IHRyYW5zZm9ybTogc2NhbGUoLTEsMSkgfWB9O1xuXG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICAgIGhlaWdodDogJHtzaWRlYmFyV2lkdGh9cHg7XG4gICAgICB3aWR0aDogJHtjb250ZW50SGVpZ2h0fXB4O1xuICAgIGB9XG5cbiAgICAkeyFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206ICR7Ym90dG9tfXB4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogJHtzaWRlYmFyV2lkdGh9cHg7XG4gICAgYH1cbiAgYH1cbiAgei1pbmRleDogJHtMYXllcnMuU2lkZWJhcn07XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGFubmVscy5zdHlsZXMuanMubWFwIl19 */"));

var _templateObject$2, _templateObject2$1, _templateObject3$1;
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var ChannelWrapper = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "eqmxcnp1"
} : {
  target: "eqmxcnp1",
  label: "ChannelWrapper"
})(function (_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    top = _ref.top,
    height = _ref.height,
    groupTree = _ref.groupTree,
    theme = _ref.theme;
  return css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    cursor: ", ";\n\n    ", "\n    ", ";\n  "])), theme.primary[900], groupTree ? "pointer" : "default", isVerticalMode && css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n      top: 0;\n      left: ", "px;\n      width: ", "px;\n      height: 100%;\n    "])), top, height), !isVerticalMode && css(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      height: ", "px;\n      width: 100%;\n    "])), top, height));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWwuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV5QyIsImZpbGUiOiJDaGFubmVsLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuZXhwb3J0IGNvbnN0IENoYW5uZWxXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIHRvcCwgaGVpZ2h0LCBncm91cFRyZWUsIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgY3Vyc29yOiAke2dyb3VwVHJlZSA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCJ9O1xuXG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6ICR7dG9wfXB4O1xuICAgICAgd2lkdGg6ICR7aGVpZ2h0fXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGB9XG4gICAgJHshaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6ICR7dG9wfXB4O1xuICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGB9O1xuICBgfVxuYDtcclxuZXhwb3J0IGNvbnN0IENoYW5uZWxMb2dvID0gc3R5bGVkLmltZyBgXG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIG1heC13aWR0aDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hhbm5lbC5zdHlsZXMuanMubWFwIl19 */"));
var ChannelLogo = /*#__PURE__*/_styled("img", process.env.NODE_ENV === "production" ? {
  target: "eqmxcnp0"
} : {
  target: "eqmxcnp0",
  label: "ChannelLogo"
})(process.env.NODE_ENV === "production" ? {
  name: "vfop22",
  styles: "max-height:60px;max-width:60px;position:relative"
} : {
  name: "vfop22",
  styles: "max-height:60px;max-width:60px;position:relative",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5uZWwuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCc0MiLCJmaWxlIjoiQ2hhbm5lbC5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkL21hY3JvXCI7XHJcbmV4cG9ydCBjb25zdCBDaGFubmVsV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCB0b3AsIGhlaWdodCwgZ3JvdXBUcmVlLCB0aGVtZSB9KSA9PiBjc3MgYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5wcmltYXJ5WzkwMF19O1xuICAgIGN1cnNvcjogJHtncm91cFRyZWUgPyBcInBvaW50ZXJcIiA6IFwiZGVmYXVsdFwifTtcblxuICAgICR7aXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAke3RvcH1weDtcbiAgICAgIHdpZHRoOiAke2hlaWdodH1weDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICBgfVxuICAgICR7IWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgdG9wOiAke3RvcH1weDtcbiAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgfTtcbiAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBDaGFubmVsTG9nbyA9IHN0eWxlZC5pbWcgYFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNoYW5uZWwuc3R5bGVzLmpzLm1hcCJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
});

var ProgramContent = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1cx08bt7"
} : {
  target: "e1cx08bt7",
  label: "ProgramContent"
})("border:1px solid #171923;position:relative;display:flex;font-size:11px;height:100%;border-radius:8px;padding:10px ", function (_ref) {
  var width = _ref.width;
  return width < 30 ? 4 : 20;
}, "px;overflow:hidden;cursor:pointer;transition:all 0.4s ease-in-out;background:", function (_ref2) {
  var primary = _ref2.theme.primary;
  return "linear-gradient(to right, " + primary[600] + ", " + primary[600] + ")";
}, ";z-index:", Layers.Program, ";&:hover{background:", function (_ref3) {
  var gradient = _ref3.theme.gradient;
  return "linear-gradient(to right, " + gradient.blue[900] + ", " + gradient.blue[600] + ")";
}, ";}", function (_ref4) {
  var isLive = _ref4.isLive,
    isVerticalMode = _ref4.isVerticalMode,
    gradient = _ref4.theme.gradient;
  return isLive && "background: linear-gradient(to " + (isVerticalMode ? "bottom" : "right") + ", " + gradient.blue[900] + ", " + gradient.blue[600] + "," + gradient.blue[300] + ")";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV5QyIsImZpbGUiOiJQcm9ncmFtLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZC9tYWNyb1wiO1xyXG5pbXBvcnQgeyBMYXllcnMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUNvbnRlbnQgPSBzdHlsZWQuZGl2IGBcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTkyMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4ICR7KHsgd2lkdGggfSkgPT4gKHdpZHRoIDwgMzAgPyA0IDogMjApfXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lOiB7IHByaW1hcnkgfSB9KSA9PiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3ByaW1hcnlbNjAwXX0sICR7cHJpbWFyeVs2MDBdfSlgfTtcbiAgei1pbmRleDogJHtMYXllcnMuUHJvZ3JhbX07XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZTogeyBncmFkaWVudCB9IH0pID0+IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7Z3JhZGllbnQuYmx1ZVs5MDBdfSwgJHtncmFkaWVudC5ibHVlWzYwMF19KWB9O1xuICB9XG5cbiAgJHsoeyBpc0xpdmUsIGlzVmVydGljYWxNb2RlLCB0aGVtZTogeyBncmFkaWVudCB9IH0pID0+IGlzTGl2ZSAmJlxyXG4gICAgYGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byAke2lzVmVydGljYWxNb2RlID8gXCJib3R0b21cIiA6IFwicmlnaHRcIn0sICR7Z3JhZGllbnQuYmx1ZVs5MDBdfSwgJHtncmFkaWVudC5ibHVlWzYwMF19LCR7Z3JhZGllbnQuYmx1ZVszMDBdfSlgfVxuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1GbGV4ID0gc3R5bGVkLmRpdiBgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJiBgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtgfTtcbmA7XHJcbmNvbnN0IEVsaXBzaXMgPSBgXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1UaXRsZSA9IHN0eWxlZC5wIGBcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyZXlbMzAwXX07XG4gICR7RWxpcHNpc31cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtVGV4dCA9IHN0eWxlZC5zcGFuIGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0LmdyZXlbNTAwXX07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gICR7RWxpcHNpc31cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtSW1hZ2UgPSBzdHlsZWQuaW1nIGBcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxMDBweDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlIH0pID0+IGlzVmVydGljYWxNb2RlICYmIGB3aWR0aDogMTAwJTsgbWFyZ2luLWJvdHRvbTogMTBweGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1TdGFjayA9IHN0eWxlZC5kaXYgYFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmXHJcbiAgICBgdHJhbnNmb3JtOiBzY2FsZSgtMSwxKTsgXG4gICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kYH07XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUJveCA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6ICR7KHsgd2lkdGggfSkgPT4gKHdpZHRoID09PSAwID8gMCA6IDQpfXB4O1xuICB6LWluZGV4OiAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcgfSkgPT4gaXNEcmFnZ2luZyB8fCBpc1Jlc2l6aW5nID8gTGF5ZXJzLlByb2dyYW0gKiAzIDogTGF5ZXJzLlByb2dyYW19O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICR7KHsgaXNEcmFnZ2luZywgaXNSZXNpemluZyB9KSA9PiAoIWlzRHJhZ2dpbmcgfHwgIWlzUmVzaXppbmcpICYmXHJcbiAgICBgICY6aG92ZXIge1xuICAgIHotaW5kZXg6ICR7TGF5ZXJzLlByb2dyYW0gKiAyfTtcblxuICAgICR7UHJvZ3JhbVJlc2l6ZUhhbmRsZX0ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1gfVxuXG4gICR7KHsgaXNEcmFnZ2luZywgaXNSZXNpemluZywgdGhlbWUgfSkgPT4gKGlzRHJhZ2dpbmcgfHwgaXNSZXNpemluZykgJiZcclxuICAgIGAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmdyZWVuWzIwMF19O1xuICAgIFxuICAgICR7UHJvZ3JhbUNvbnRlbnR9e1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICBjdXJzb3I6IG1vdmU7XG4gIH1cbiAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtUmVzaXplSGFuZGxlID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcblxuICAkeyh7IGlzUmVzaXplIH0pID0+ICFpc1Jlc2l6ZSAmJiBcImRpc3BsYXk6IG5vbmU7XCJ9XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICR7bGVmdCA/IGB0b3A6IDA7YCA6IGBib3R0b206IDA7YH1cbiAgICBsZWZ0OjA7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogJHtsZWZ0ID8gXCJuLXJlc2l6ZVwiIDogXCJzLXJlc2l6ZVwifTtcbiAgYH1cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiAhaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgICR7bGVmdCA/IGBsZWZ0OiAwO2AgOiBgcmlnaHQ6IDA7YH1cbiAgICB3aWR0aDogMjVweDtcbiAgICBjdXJzb3I6ICR7bGVmdCA/IFwidy1yZXNpemVcIiA6IFwiZS1yZXNpemVcIn07XG4gICAgYH1cblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZ3JlZW5bMjAwXX07XG5cbiAgICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0IH0pID0+ICFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYCAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgJHtsZWZ0ID8gYGxlZnQ6IDlweDtgIDogYHJpZ2h0OiA5cHg7YH1cbiAgICAgICAgYH1cbiAgICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgICAke2xlZnQgPyBgdG9wOiA5cHg7YCA6IGBib3R0b206IDlweDtgfVxuICAgICBsZWZ0OjUwJTtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgXG4gICAgICAgIGB9XG4gIH1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb2dyYW0uc3R5bGVzLmpzLm1hcCJdfQ== */"));
var ProgramFlex = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1cx08bt6"
} : {
  target: "e1cx08bt6",
  label: "ProgramFlex"
})("width:100%;display:flex;justify-content:flex-start;", function (_ref5) {
  var isVerticalMode = _ref5.isVerticalMode;
  return isVerticalMode && "flex-direction: column;";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCc0MiLCJmaWxlIjoiUHJvZ3JhbS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Db250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5MjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA8IDMwID8gNCA6IDIwKX1weDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZTogeyBwcmltYXJ5IH0gfSkgPT4gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcmltYXJ5WzYwMF19LCAke3ByaW1hcnlbNjAwXX0pYH07XG4gIHotaW5kZXg6ICR7TGF5ZXJzLlByb2dyYW19O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSlgfTtcbiAgfVxuXG4gICR7KHsgaXNMaXZlLCBpc1ZlcnRpY2FsTW9kZSwgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBpc0xpdmUgJiZcclxuICAgIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gJHtpc1ZlcnRpY2FsTW9kZSA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCJ9LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSwke2dyYWRpZW50LmJsdWVbMzAwXX0pYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtRmxleCA9IHN0eWxlZC5kaXYgYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiYgYGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YH07XG5gO1xyXG5jb25zdCBFbGlwc2lzID0gYFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtVGl0bGUgPSBzdHlsZWQucCBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmV5WzMwMF19O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVRleHQgPSBzdHlsZWQuc3BhbiBgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzUwMF19O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUltYWdlID0gc3R5bGVkLmltZyBgXG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwcHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJiBgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDEwcHhgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtU3RhY2sgPSBzdHlsZWQuZGl2IGBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJlxyXG4gICAgYHRyYW5zZm9ybTogc2NhbGUoLTEsMSk7IFxuICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Cb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA9PT0gMCA/IDAgOiA0KX1weDtcbiAgei1pbmRleDogJHsoeyBpc0RyYWdnaW5nLCBpc1Jlc2l6aW5nIH0pID0+IGlzRHJhZ2dpbmcgfHwgaXNSZXNpemluZyA/IExheWVycy5Qcm9ncmFtICogMyA6IExheWVycy5Qcm9ncmFtfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcgfSkgPT4gKCFpc0RyYWdnaW5nIHx8ICFpc1Jlc2l6aW5nKSAmJlxyXG4gICAgYCAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAke0xheWVycy5Qcm9ncmFtICogMn07XG5cbiAgICAke1Byb2dyYW1SZXNpemVIYW5kbGV9IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9YH1cblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcsIHRoZW1lIH0pID0+IChpc0RyYWdnaW5nIHx8IGlzUmVzaXppbmcpICYmXHJcbiAgICBgIFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5ncmVlblsyMDBdfTtcbiAgICBcbiAgICAke1Byb2dyYW1Db250ZW50fXtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVJlc2l6ZUhhbmRsZSA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG5cbiAgJHsoeyBpc1Jlc2l6ZSB9KSA9PiAhaXNSZXNpemUgJiYgXCJkaXNwbGF5OiBub25lO1wifVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAke2xlZnQgPyBgdG9wOiAwO2AgOiBgYm90dG9tOiAwO2B9XG4gICAgbGVmdDowO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6ICR7bGVmdCA/IFwibi1yZXNpemVcIiA6IFwicy1yZXNpemVcIn07XG4gIGB9XG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gIWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAke2xlZnQgPyBgbGVmdDogMDtgIDogYHJpZ2h0OiAwO2B9XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiAke2xlZnQgPyBcInctcmVzaXplXCIgOiBcImUtcmVzaXplXCJ9O1xuICAgIGB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyZWVuWzIwMF19O1xuXG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiAhaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICR7bGVmdCA/IGBsZWZ0OiA5cHg7YCA6IGByaWdodDogOXB4O2B9XG4gICAgICAgIGB9XG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICAgJHtsZWZ0ID8gYHRvcDogOXB4O2AgOiBgYm90dG9tOiA5cHg7YH1cbiAgICAgbGVmdDo1MCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgIFxuICAgICAgICBgfVxuICB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmFtLnN0eWxlcy5qcy5tYXAiXX0= */"));
var Elipsis = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var ProgramTitle = /*#__PURE__*/_styled("p", process.env.NODE_ENV === "production" ? {
  target: "e1cx08bt5"
} : {
  target: "e1cx08bt5",
  label: "ProgramTitle"
})("font-size:14px;text-align:left;margin-top:0;margin-bottom:5px;font-weight:500;color:", function (_ref6) {
  var theme = _ref6.theme;
  return theme.grey[300];
}, ";", Elipsis, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DcUMiLCJmaWxlIjoiUHJvZ3JhbS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Db250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5MjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA8IDMwID8gNCA6IDIwKX1weDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZTogeyBwcmltYXJ5IH0gfSkgPT4gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcmltYXJ5WzYwMF19LCAke3ByaW1hcnlbNjAwXX0pYH07XG4gIHotaW5kZXg6ICR7TGF5ZXJzLlByb2dyYW19O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSlgfTtcbiAgfVxuXG4gICR7KHsgaXNMaXZlLCBpc1ZlcnRpY2FsTW9kZSwgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBpc0xpdmUgJiZcclxuICAgIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gJHtpc1ZlcnRpY2FsTW9kZSA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCJ9LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSwke2dyYWRpZW50LmJsdWVbMzAwXX0pYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtRmxleCA9IHN0eWxlZC5kaXYgYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiYgYGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YH07XG5gO1xyXG5jb25zdCBFbGlwc2lzID0gYFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtVGl0bGUgPSBzdHlsZWQucCBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmV5WzMwMF19O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVRleHQgPSBzdHlsZWQuc3BhbiBgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzUwMF19O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUltYWdlID0gc3R5bGVkLmltZyBgXG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwcHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJiBgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDEwcHhgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtU3RhY2sgPSBzdHlsZWQuZGl2IGBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJlxyXG4gICAgYHRyYW5zZm9ybTogc2NhbGUoLTEsMSk7IFxuICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Cb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA9PT0gMCA/IDAgOiA0KX1weDtcbiAgei1pbmRleDogJHsoeyBpc0RyYWdnaW5nLCBpc1Jlc2l6aW5nIH0pID0+IGlzRHJhZ2dpbmcgfHwgaXNSZXNpemluZyA/IExheWVycy5Qcm9ncmFtICogMyA6IExheWVycy5Qcm9ncmFtfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcgfSkgPT4gKCFpc0RyYWdnaW5nIHx8ICFpc1Jlc2l6aW5nKSAmJlxyXG4gICAgYCAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAke0xheWVycy5Qcm9ncmFtICogMn07XG5cbiAgICAke1Byb2dyYW1SZXNpemVIYW5kbGV9IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9YH1cblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcsIHRoZW1lIH0pID0+IChpc0RyYWdnaW5nIHx8IGlzUmVzaXppbmcpICYmXHJcbiAgICBgIFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5ncmVlblsyMDBdfTtcbiAgICBcbiAgICAke1Byb2dyYW1Db250ZW50fXtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVJlc2l6ZUhhbmRsZSA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG5cbiAgJHsoeyBpc1Jlc2l6ZSB9KSA9PiAhaXNSZXNpemUgJiYgXCJkaXNwbGF5OiBub25lO1wifVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAke2xlZnQgPyBgdG9wOiAwO2AgOiBgYm90dG9tOiAwO2B9XG4gICAgbGVmdDowO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6ICR7bGVmdCA/IFwibi1yZXNpemVcIiA6IFwicy1yZXNpemVcIn07XG4gIGB9XG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gIWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAke2xlZnQgPyBgbGVmdDogMDtgIDogYHJpZ2h0OiAwO2B9XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiAke2xlZnQgPyBcInctcmVzaXplXCIgOiBcImUtcmVzaXplXCJ9O1xuICAgIGB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyZWVuWzIwMF19O1xuXG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiAhaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICR7bGVmdCA/IGBsZWZ0OiA5cHg7YCA6IGByaWdodDogOXB4O2B9XG4gICAgICAgIGB9XG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICAgJHtsZWZ0ID8gYHRvcDogOXB4O2AgOiBgYm90dG9tOiA5cHg7YH1cbiAgICAgbGVmdDo1MCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgIFxuICAgICAgICBgfVxuICB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmFtLnN0eWxlcy5qcy5tYXAiXX0= */"));
var ProgramText = /*#__PURE__*/_styled("span", process.env.NODE_ENV === "production" ? {
  target: "e1cx08bt4"
} : {
  target: "e1cx08bt4",
  label: "ProgramText"
})("display:block;font-size:12.5px;font-weight:400;color:", function (_ref7) {
  var theme = _ref7.theme;
  return theme.text.grey[500];
}, ";text-align:left;", Elipsis, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDdUMiLCJmaWxlIjoiUHJvZ3JhbS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Db250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5MjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA8IDMwID8gNCA6IDIwKX1weDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZTogeyBwcmltYXJ5IH0gfSkgPT4gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcmltYXJ5WzYwMF19LCAke3ByaW1hcnlbNjAwXX0pYH07XG4gIHotaW5kZXg6ICR7TGF5ZXJzLlByb2dyYW19O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSlgfTtcbiAgfVxuXG4gICR7KHsgaXNMaXZlLCBpc1ZlcnRpY2FsTW9kZSwgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBpc0xpdmUgJiZcclxuICAgIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gJHtpc1ZlcnRpY2FsTW9kZSA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCJ9LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSwke2dyYWRpZW50LmJsdWVbMzAwXX0pYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtRmxleCA9IHN0eWxlZC5kaXYgYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiYgYGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YH07XG5gO1xyXG5jb25zdCBFbGlwc2lzID0gYFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtVGl0bGUgPSBzdHlsZWQucCBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmV5WzMwMF19O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVRleHQgPSBzdHlsZWQuc3BhbiBgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzUwMF19O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUltYWdlID0gc3R5bGVkLmltZyBgXG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwcHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJiBgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDEwcHhgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtU3RhY2sgPSBzdHlsZWQuZGl2IGBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJlxyXG4gICAgYHRyYW5zZm9ybTogc2NhbGUoLTEsMSk7IFxuICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Cb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA9PT0gMCA/IDAgOiA0KX1weDtcbiAgei1pbmRleDogJHsoeyBpc0RyYWdnaW5nLCBpc1Jlc2l6aW5nIH0pID0+IGlzRHJhZ2dpbmcgfHwgaXNSZXNpemluZyA/IExheWVycy5Qcm9ncmFtICogMyA6IExheWVycy5Qcm9ncmFtfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcgfSkgPT4gKCFpc0RyYWdnaW5nIHx8ICFpc1Jlc2l6aW5nKSAmJlxyXG4gICAgYCAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAke0xheWVycy5Qcm9ncmFtICogMn07XG5cbiAgICAke1Byb2dyYW1SZXNpemVIYW5kbGV9IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9YH1cblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcsIHRoZW1lIH0pID0+IChpc0RyYWdnaW5nIHx8IGlzUmVzaXppbmcpICYmXHJcbiAgICBgIFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5ncmVlblsyMDBdfTtcbiAgICBcbiAgICAke1Byb2dyYW1Db250ZW50fXtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVJlc2l6ZUhhbmRsZSA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG5cbiAgJHsoeyBpc1Jlc2l6ZSB9KSA9PiAhaXNSZXNpemUgJiYgXCJkaXNwbGF5OiBub25lO1wifVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAke2xlZnQgPyBgdG9wOiAwO2AgOiBgYm90dG9tOiAwO2B9XG4gICAgbGVmdDowO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6ICR7bGVmdCA/IFwibi1yZXNpemVcIiA6IFwicy1yZXNpemVcIn07XG4gIGB9XG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gIWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAke2xlZnQgPyBgbGVmdDogMDtgIDogYHJpZ2h0OiAwO2B9XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiAke2xlZnQgPyBcInctcmVzaXplXCIgOiBcImUtcmVzaXplXCJ9O1xuICAgIGB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyZWVuWzIwMF19O1xuXG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiAhaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICR7bGVmdCA/IGBsZWZ0OiA5cHg7YCA6IGByaWdodDogOXB4O2B9XG4gICAgICAgIGB9XG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICAgJHtsZWZ0ID8gYHRvcDogOXB4O2AgOiBgYm90dG9tOiA5cHg7YH1cbiAgICAgbGVmdDo1MCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgIFxuICAgICAgICBgfVxuICB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmFtLnN0eWxlcy5qcy5tYXAiXX0= */"));
var ProgramImage = /*#__PURE__*/_styled("img", process.env.NODE_ENV === "production" ? {
  target: "e1cx08bt3"
} : {
  target: "e1cx08bt3",
  label: "ProgramImage"
})("margin-right:15px;border-radius:6px;width:100px;", function (_ref8) {
  var isVerticalMode = _ref8.isVerticalMode;
  return isVerticalMode && "width: 100%; margin-bottom: 10px";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EdUMiLCJmaWxlIjoiUHJvZ3JhbS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Db250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5MjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA8IDMwID8gNCA6IDIwKX1weDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZTogeyBwcmltYXJ5IH0gfSkgPT4gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcmltYXJ5WzYwMF19LCAke3ByaW1hcnlbNjAwXX0pYH07XG4gIHotaW5kZXg6ICR7TGF5ZXJzLlByb2dyYW19O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSlgfTtcbiAgfVxuXG4gICR7KHsgaXNMaXZlLCBpc1ZlcnRpY2FsTW9kZSwgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBpc0xpdmUgJiZcclxuICAgIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gJHtpc1ZlcnRpY2FsTW9kZSA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCJ9LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSwke2dyYWRpZW50LmJsdWVbMzAwXX0pYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtRmxleCA9IHN0eWxlZC5kaXYgYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiYgYGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YH07XG5gO1xyXG5jb25zdCBFbGlwc2lzID0gYFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtVGl0bGUgPSBzdHlsZWQucCBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmV5WzMwMF19O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVRleHQgPSBzdHlsZWQuc3BhbiBgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzUwMF19O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUltYWdlID0gc3R5bGVkLmltZyBgXG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwcHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJiBgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDEwcHhgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtU3RhY2sgPSBzdHlsZWQuZGl2IGBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJlxyXG4gICAgYHRyYW5zZm9ybTogc2NhbGUoLTEsMSk7IFxuICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Cb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA9PT0gMCA/IDAgOiA0KX1weDtcbiAgei1pbmRleDogJHsoeyBpc0RyYWdnaW5nLCBpc1Jlc2l6aW5nIH0pID0+IGlzRHJhZ2dpbmcgfHwgaXNSZXNpemluZyA/IExheWVycy5Qcm9ncmFtICogMyA6IExheWVycy5Qcm9ncmFtfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcgfSkgPT4gKCFpc0RyYWdnaW5nIHx8ICFpc1Jlc2l6aW5nKSAmJlxyXG4gICAgYCAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAke0xheWVycy5Qcm9ncmFtICogMn07XG5cbiAgICAke1Byb2dyYW1SZXNpemVIYW5kbGV9IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9YH1cblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcsIHRoZW1lIH0pID0+IChpc0RyYWdnaW5nIHx8IGlzUmVzaXppbmcpICYmXHJcbiAgICBgIFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5ncmVlblsyMDBdfTtcbiAgICBcbiAgICAke1Byb2dyYW1Db250ZW50fXtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVJlc2l6ZUhhbmRsZSA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG5cbiAgJHsoeyBpc1Jlc2l6ZSB9KSA9PiAhaXNSZXNpemUgJiYgXCJkaXNwbGF5OiBub25lO1wifVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAke2xlZnQgPyBgdG9wOiAwO2AgOiBgYm90dG9tOiAwO2B9XG4gICAgbGVmdDowO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6ICR7bGVmdCA/IFwibi1yZXNpemVcIiA6IFwicy1yZXNpemVcIn07XG4gIGB9XG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gIWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAke2xlZnQgPyBgbGVmdDogMDtgIDogYHJpZ2h0OiAwO2B9XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiAke2xlZnQgPyBcInctcmVzaXplXCIgOiBcImUtcmVzaXplXCJ9O1xuICAgIGB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyZWVuWzIwMF19O1xuXG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiAhaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICR7bGVmdCA/IGBsZWZ0OiA5cHg7YCA6IGByaWdodDogOXB4O2B9XG4gICAgICAgIGB9XG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICAgJHtsZWZ0ID8gYHRvcDogOXB4O2AgOiBgYm90dG9tOiA5cHg7YH1cbiAgICAgbGVmdDo1MCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgIFxuICAgICAgICBgfVxuICB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmFtLnN0eWxlcy5qcy5tYXAiXX0= */"));
var ProgramStack = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1cx08bt2"
} : {
  target: "e1cx08bt2",
  label: "ProgramStack"
})("overflow:hidden;", function (_ref9) {
  var isRTL = _ref9.isRTL;
  return isRTL && "transform: scale(-1,1); \n     display: flex; \n     flex-direction: column; \n     align-items: flex-end";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEdUMiLCJmaWxlIjoiUHJvZ3JhbS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Db250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5MjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA8IDMwID8gNCA6IDIwKX1weDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZTogeyBwcmltYXJ5IH0gfSkgPT4gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcmltYXJ5WzYwMF19LCAke3ByaW1hcnlbNjAwXX0pYH07XG4gIHotaW5kZXg6ICR7TGF5ZXJzLlByb2dyYW19O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSlgfTtcbiAgfVxuXG4gICR7KHsgaXNMaXZlLCBpc1ZlcnRpY2FsTW9kZSwgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBpc0xpdmUgJiZcclxuICAgIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gJHtpc1ZlcnRpY2FsTW9kZSA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCJ9LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSwke2dyYWRpZW50LmJsdWVbMzAwXX0pYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtRmxleCA9IHN0eWxlZC5kaXYgYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiYgYGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YH07XG5gO1xyXG5jb25zdCBFbGlwc2lzID0gYFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtVGl0bGUgPSBzdHlsZWQucCBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmV5WzMwMF19O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVRleHQgPSBzdHlsZWQuc3BhbiBgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzUwMF19O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUltYWdlID0gc3R5bGVkLmltZyBgXG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwcHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJiBgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDEwcHhgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtU3RhY2sgPSBzdHlsZWQuZGl2IGBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJlxyXG4gICAgYHRyYW5zZm9ybTogc2NhbGUoLTEsMSk7IFxuICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Cb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA9PT0gMCA/IDAgOiA0KX1weDtcbiAgei1pbmRleDogJHsoeyBpc0RyYWdnaW5nLCBpc1Jlc2l6aW5nIH0pID0+IGlzRHJhZ2dpbmcgfHwgaXNSZXNpemluZyA/IExheWVycy5Qcm9ncmFtICogMyA6IExheWVycy5Qcm9ncmFtfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcgfSkgPT4gKCFpc0RyYWdnaW5nIHx8ICFpc1Jlc2l6aW5nKSAmJlxyXG4gICAgYCAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAke0xheWVycy5Qcm9ncmFtICogMn07XG5cbiAgICAke1Byb2dyYW1SZXNpemVIYW5kbGV9IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9YH1cblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcsIHRoZW1lIH0pID0+IChpc0RyYWdnaW5nIHx8IGlzUmVzaXppbmcpICYmXHJcbiAgICBgIFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5ncmVlblsyMDBdfTtcbiAgICBcbiAgICAke1Byb2dyYW1Db250ZW50fXtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVJlc2l6ZUhhbmRsZSA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG5cbiAgJHsoeyBpc1Jlc2l6ZSB9KSA9PiAhaXNSZXNpemUgJiYgXCJkaXNwbGF5OiBub25lO1wifVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAke2xlZnQgPyBgdG9wOiAwO2AgOiBgYm90dG9tOiAwO2B9XG4gICAgbGVmdDowO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6ICR7bGVmdCA/IFwibi1yZXNpemVcIiA6IFwicy1yZXNpemVcIn07XG4gIGB9XG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gIWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAke2xlZnQgPyBgbGVmdDogMDtgIDogYHJpZ2h0OiAwO2B9XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiAke2xlZnQgPyBcInctcmVzaXplXCIgOiBcImUtcmVzaXplXCJ9O1xuICAgIGB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyZWVuWzIwMF19O1xuXG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiAhaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICR7bGVmdCA/IGBsZWZ0OiA5cHg7YCA6IGByaWdodDogOXB4O2B9XG4gICAgICAgIGB9XG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICAgJHtsZWZ0ID8gYHRvcDogOXB4O2AgOiBgYm90dG9tOiA5cHg7YH1cbiAgICAgbGVmdDo1MCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgIFxuICAgICAgICBgfVxuICB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmFtLnN0eWxlcy5qcy5tYXAiXX0= */"));
var ProgramBox = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1cx08bt1"
} : {
  target: "e1cx08bt1",
  label: "ProgramBox"
})("position:absolute;padding:", function (_ref10) {
  var width = _ref10.width;
  return width === 0 ? 0 : 4;
}, "px;z-index:", function (_ref11) {
  var isDragging = _ref11.isDragging,
    isResizing = _ref11.isResizing;
  return isDragging || isResizing ? Layers.Program * 3 : Layers.Program;
}, ";overflow:hidden;", function (_ref12) {
  var isDragging = _ref12.isDragging,
    isResizing = _ref12.isResizing;
  return (!isDragging || !isResizing) && " &:hover {\n    z-index: " + Layers.Program * 2 + ";\n\n    " + ProgramResizeHandle + " {\n      opacity: 1;\n    }\n  }";
}, " ", function (_ref13) {
  var isDragging = _ref13.isDragging,
    isResizing = _ref13.isResizing,
    theme = _ref13.theme;
  return (isDragging || isResizing) && " \n    border-radius: 10px;\n    background: " + theme.green[200] + ";\n    \n    " + ProgramContent + "{\n      user-select: none;\n      cursor: move;\n  }\n  ";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FcUMiLCJmaWxlIjoiUHJvZ3JhbS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Db250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5MjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA8IDMwID8gNCA6IDIwKX1weDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZTogeyBwcmltYXJ5IH0gfSkgPT4gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcmltYXJ5WzYwMF19LCAke3ByaW1hcnlbNjAwXX0pYH07XG4gIHotaW5kZXg6ICR7TGF5ZXJzLlByb2dyYW19O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSlgfTtcbiAgfVxuXG4gICR7KHsgaXNMaXZlLCBpc1ZlcnRpY2FsTW9kZSwgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBpc0xpdmUgJiZcclxuICAgIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gJHtpc1ZlcnRpY2FsTW9kZSA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCJ9LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSwke2dyYWRpZW50LmJsdWVbMzAwXX0pYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtRmxleCA9IHN0eWxlZC5kaXYgYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiYgYGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YH07XG5gO1xyXG5jb25zdCBFbGlwc2lzID0gYFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtVGl0bGUgPSBzdHlsZWQucCBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmV5WzMwMF19O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVRleHQgPSBzdHlsZWQuc3BhbiBgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzUwMF19O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUltYWdlID0gc3R5bGVkLmltZyBgXG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwcHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJiBgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDEwcHhgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtU3RhY2sgPSBzdHlsZWQuZGl2IGBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJlxyXG4gICAgYHRyYW5zZm9ybTogc2NhbGUoLTEsMSk7IFxuICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Cb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA9PT0gMCA/IDAgOiA0KX1weDtcbiAgei1pbmRleDogJHsoeyBpc0RyYWdnaW5nLCBpc1Jlc2l6aW5nIH0pID0+IGlzRHJhZ2dpbmcgfHwgaXNSZXNpemluZyA/IExheWVycy5Qcm9ncmFtICogMyA6IExheWVycy5Qcm9ncmFtfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcgfSkgPT4gKCFpc0RyYWdnaW5nIHx8ICFpc1Jlc2l6aW5nKSAmJlxyXG4gICAgYCAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAke0xheWVycy5Qcm9ncmFtICogMn07XG5cbiAgICAke1Byb2dyYW1SZXNpemVIYW5kbGV9IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9YH1cblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcsIHRoZW1lIH0pID0+IChpc0RyYWdnaW5nIHx8IGlzUmVzaXppbmcpICYmXHJcbiAgICBgIFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5ncmVlblsyMDBdfTtcbiAgICBcbiAgICAke1Byb2dyYW1Db250ZW50fXtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVJlc2l6ZUhhbmRsZSA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG5cbiAgJHsoeyBpc1Jlc2l6ZSB9KSA9PiAhaXNSZXNpemUgJiYgXCJkaXNwbGF5OiBub25lO1wifVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAke2xlZnQgPyBgdG9wOiAwO2AgOiBgYm90dG9tOiAwO2B9XG4gICAgbGVmdDowO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6ICR7bGVmdCA/IFwibi1yZXNpemVcIiA6IFwicy1yZXNpemVcIn07XG4gIGB9XG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gIWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAke2xlZnQgPyBgbGVmdDogMDtgIDogYHJpZ2h0OiAwO2B9XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiAke2xlZnQgPyBcInctcmVzaXplXCIgOiBcImUtcmVzaXplXCJ9O1xuICAgIGB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyZWVuWzIwMF19O1xuXG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiAhaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICR7bGVmdCA/IGBsZWZ0OiA5cHg7YCA6IGByaWdodDogOXB4O2B9XG4gICAgICAgIGB9XG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICAgJHtsZWZ0ID8gYHRvcDogOXB4O2AgOiBgYm90dG9tOiA5cHg7YH1cbiAgICAgbGVmdDo1MCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgIFxuICAgICAgICBgfVxuICB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmFtLnN0eWxlcy5qcy5tYXAiXX0= */"));
var ProgramResizeHandle = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1cx08bt0"
} : {
  target: "e1cx08bt0",
  label: "ProgramResizeHandle"
})("position:absolute;opacity:0;", function (_ref14) {
  var isResize = _ref14.isResize;
  return !isResize && "display: none;";
}, " ", function (_ref15) {
  var isVerticalMode = _ref15.isVerticalMode,
    left = _ref15.left;
  return isVerticalMode && "\n    " + (left ? "top: 0;" : "bottom: 0;") + "\n    left:0;\n    height:25px;\n    width: 100%;\n  cursor: " + (left ? "n-resize" : "s-resize") + ";\n  ";
}, " ", function (_ref16) {
  var isVerticalMode = _ref16.isVerticalMode,
    left = _ref16.left;
  return !isVerticalMode && "\n    top: 0;\n    bottom: 0;\n    " + (left ? "left: 0;" : "right: 0;") + "\n    width: 25px;\n    cursor: " + (left ? "w-resize" : "e-resize") + ";\n    ";
}, " &:after{content:\"\";position:absolute;margin:auto;border-radius:8px;background:", function (_ref17) {
  var theme = _ref17.theme;
  return theme.green[200];
}, ";", function (_ref18) {
  var isVerticalMode = _ref18.isVerticalMode,
    left = _ref18.left;
  return !isVerticalMode && "   top: 0;\n      bottom: 0;\n      height: 50%;\n      width: 4px;\n        " + (left ? "left: 9px;" : "right: 9px;") + "\n        ";
}, " ", function (_ref19) {
  var isVerticalMode = _ref19.isVerticalMode,
    left = _ref19.left;
  return isVerticalMode && "\n      " + (left ? "top: 9px;" : "bottom: 9px;") + "\n     left:50%;\n      height: 4px;\n      width: 50%;\n      transform: translateX(-50%);\n     \n        ";
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyYW0uc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGOEMiLCJmaWxlIjoiUHJvZ3JhbS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Db250ZW50ID0gc3R5bGVkLmRpdiBgXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE5MjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA8IDMwID8gNCA6IDIwKX1weDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZTogeyBwcmltYXJ5IH0gfSkgPT4gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtwcmltYXJ5WzYwMF19LCAke3ByaW1hcnlbNjAwXX0pYH07XG4gIHotaW5kZXg6ICR7TGF5ZXJzLlByb2dyYW19O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSlgfTtcbiAgfVxuXG4gICR7KHsgaXNMaXZlLCBpc1ZlcnRpY2FsTW9kZSwgdGhlbWU6IHsgZ3JhZGllbnQgfSB9KSA9PiBpc0xpdmUgJiZcclxuICAgIGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gJHtpc1ZlcnRpY2FsTW9kZSA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCJ9LCAke2dyYWRpZW50LmJsdWVbOTAwXX0sICR7Z3JhZGllbnQuYmx1ZVs2MDBdfSwke2dyYWRpZW50LmJsdWVbMzAwXX0pYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtRmxleCA9IHN0eWxlZC5kaXYgYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiYgYGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YH07XG5gO1xyXG5jb25zdCBFbGlwc2lzID0gYFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtVGl0bGUgPSBzdHlsZWQucCBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmV5WzMwMF19O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVRleHQgPSBzdHlsZWQuc3BhbiBgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzUwMF19O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAke0VsaXBzaXN9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbUltYWdlID0gc3R5bGVkLmltZyBgXG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwcHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJiBgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDEwcHhgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmFtU3RhY2sgPSBzdHlsZWQuZGl2IGBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJHsoeyBpc1JUTCB9KSA9PiBpc1JUTCAmJlxyXG4gICAgYHRyYW5zZm9ybTogc2NhbGUoLTEsMSk7IFxuICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFByb2dyYW1Cb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAkeyh7IHdpZHRoIH0pID0+ICh3aWR0aCA9PT0gMCA/IDAgOiA0KX1weDtcbiAgei1pbmRleDogJHsoeyBpc0RyYWdnaW5nLCBpc1Jlc2l6aW5nIH0pID0+IGlzRHJhZ2dpbmcgfHwgaXNSZXNpemluZyA/IExheWVycy5Qcm9ncmFtICogMyA6IExheWVycy5Qcm9ncmFtfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcgfSkgPT4gKCFpc0RyYWdnaW5nIHx8ICFpc1Jlc2l6aW5nKSAmJlxyXG4gICAgYCAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAke0xheWVycy5Qcm9ncmFtICogMn07XG5cbiAgICAke1Byb2dyYW1SZXNpemVIYW5kbGV9IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9YH1cblxuICAkeyh7IGlzRHJhZ2dpbmcsIGlzUmVzaXppbmcsIHRoZW1lIH0pID0+IChpc0RyYWdnaW5nIHx8IGlzUmVzaXppbmcpICYmXHJcbiAgICBgIFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5ncmVlblsyMDBdfTtcbiAgICBcbiAgICAke1Byb2dyYW1Db250ZW50fXtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgUHJvZ3JhbVJlc2l6ZUhhbmRsZSA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG5cbiAgJHsoeyBpc1Jlc2l6ZSB9KSA9PiAhaXNSZXNpemUgJiYgXCJkaXNwbGF5OiBub25lO1wifVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGBcbiAgICAke2xlZnQgPyBgdG9wOiAwO2AgOiBgYm90dG9tOiAwO2B9XG4gICAgbGVmdDowO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6ICR7bGVmdCA/IFwibi1yZXNpemVcIiA6IFwicy1yZXNpemVcIn07XG4gIGB9XG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gIWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAke2xlZnQgPyBgbGVmdDogMDtgIDogYHJpZ2h0OiAwO2B9XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgY3Vyc29yOiAke2xlZnQgPyBcInctcmVzaXplXCIgOiBcImUtcmVzaXplXCJ9O1xuICAgIGB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyZWVuWzIwMF19O1xuXG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiAhaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICR7bGVmdCA/IGBsZWZ0OiA5cHg7YCA6IGByaWdodDogOXB4O2B9XG4gICAgICAgIGB9XG4gICAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgbGVmdCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICAgJHtsZWZ0ID8gYHRvcDogOXB4O2AgOiBgYm90dG9tOiA5cHg7YH1cbiAgICAgbGVmdDo1MCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgIFxuICAgICAgICBgfVxuICB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmFtLnN0eWxlcy5qcy5tYXAiXX0= */"));

var _templateObject$3, _templateObject2$2, _templateObject3$2, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
var TimelineTime = /*#__PURE__*/_styled("span", process.env.NODE_ENV === "production" ? {
  target: "e1bnz7pf6"
} : {
  target: "e1bnz7pf6",
  label: "TimelineTime"
})("position:absolute;top:13px;left:", function (_ref) {
  var isRTL = _ref.isRTL,
    isBaseTimeFormat = _ref.isBaseTimeFormat,
    isVerticalMode = _ref.isVerticalMode,
    isWeekMonthMode = _ref.isWeekMonthMode;
  if (isVerticalMode) {
    if (isRTL) return isBaseTimeFormat ? 9 : 17;
    return isBaseTimeFormat ? 9 : 14;
  }
  if (isWeekMonthMode) return 0;
  return isRTL && isBaseTimeFormat ? "-32" : "-18";
}, "px;color:", function (_ref2) {
  var theme = _ref2.theme;
  return theme.text.grey[300];
}, ";", function (_ref3) {
  var isRTL = _ref3.isRTL;
  return isRTL && "\n      transform: scale(-1, 1);\n    ";
}, " ", function (_ref4) {
  var theme = _ref4.theme,
    isNewDay = _ref4.isNewDay;
  return isNewDay && "color: " + theme.teal[100] + "; font-weight: 600";
}, ";", function (_ref5) {
  var isVerticalMode = _ref5.isVerticalMode,
    isRTL = _ref5.isRTL;
  return isVerticalMode && css(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n      top: -10px;\n      left: 50%;\n      transform: translate(-50%, 0%) ", ";\n    "])), isRTL ? "scale(-1,1)" : "");
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHd0MiLCJmaWxlIjoiVGltZWxpbmUuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZC9tYWNyb1wiO1xyXG5pbXBvcnQgeyBMYXllcnMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5leHBvcnQgY29uc3QgVGltZWxpbmVUaW1lID0gc3R5bGVkLnNwYW4gYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTNweDtcbiAgbGVmdDogJHsoeyBpc1JUTCwgaXNCYXNlVGltZUZvcm1hdCwgaXNWZXJ0aWNhbE1vZGUsIGlzV2Vla01vbnRoTW9kZSB9KSA9PiB7XHJcbiAgICBpZiAoaXNWZXJ0aWNhbE1vZGUpIHtcclxuICAgICAgICBpZiAoaXNSVEwpXHJcbiAgICAgICAgICAgIHJldHVybiBpc0Jhc2VUaW1lRm9ybWF0ID8gOSA6IDE3O1xyXG4gICAgICAgIHJldHVybiBpc0Jhc2VUaW1lRm9ybWF0ID8gOSA6IDE0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzV2Vla01vbnRoTW9kZSlcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIHJldHVybiBpc1JUTCAmJiBpc0Jhc2VUaW1lRm9ybWF0ID8gXCItMzJcIiA6IFwiLTE4XCI7XHJcbn19cHg7XG5cbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzMwMF19O1xuXG4gICR7KHsgaXNSVEwgfSkgPT4gaXNSVEwgJiZcclxuICAgIGBcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAgIGB9XG5cbiAgJHsoeyB0aGVtZSwgaXNOZXdEYXkgfSkgPT4gaXNOZXdEYXkgJiYgYGNvbG9yOiAke3RoZW1lLnRlYWxbMTAwXX07IGZvbnQtd2VpZ2h0OiA2MDBgfTtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1JUTCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogLTEwcHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgJHtpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwiXCJ9O1xuICAgIGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lV2Vla01vbnRoRGF0ZSA9IHN0eWxlZC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06ICR7KHsgaXNSVEwgfSkgPT4gKGlzUlRMID8gXCJzY2FsZSgtMSwxKVwiIDogXCJzY2FsZSgxLDEpXCIpfTtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0LmdyZXlbMzAwXX07XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgJHsoeyBzdHlsZVR5cGUsIHRoZW1lIH0pID0+IHN0eWxlVHlwZSA9PT0gXCJtb2Rlcm5cIiAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnRlYWxbMTAwXX07XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0LmdyZXlbMzAwXX07XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cbiAgICBgfVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGlzUlRMIH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgdHJhbnNmb3JtOiAke2lzUlRMID8gXCJzY2FsZSgtMSwxKVwiIDogXCJzY2FsZSgxLDEpXCJ9O1xuICAgIGB9O1xuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lRGl2aWRlcnMgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBgfVxuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lRGl2aWRlciA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNnB4O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRpbWVsaW5lLmRpdmlkZXIuYmd9O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGxlZnQ6ICR7KHsgbGVmdCB9KSA9PiBsZWZ0fXB4O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6ICR7bGVmdH1weDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cbiAgICBgfVxuXG4gICR7KHsgaXNOZXdEYXksIHRoZW1lIH0pID0+IGlzTmV3RGF5ICYmXHJcbiAgICBgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIHdpZHRoOjJweDtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUudGVhbFsxMDBdfTtcbiAgfWB9XG5gO1xyXG5leHBvcnQgY29uc3QgVGltZWxpbmVXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGlzU2lkZWJhciwgc2lkZWJhcldpZHRoLCB0aW1lbGluZUhlaWdodCwgZGF5V2lkdGgsIHRoZW1lLCB9KSA9PiBjc3MgYFxuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUucHJpbWFyeVs5MDBdfTtcbiAgICAgIHotaW5kZXg6ICR7TGF5ZXJzLlRpbWVsaW5lfTtcblxuICAgICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogJHt0aW1lbGluZUhlaWdodH1weDtcbiAgICAgICAgbWFyZ2luLXRvcDogJHtpc1NpZGViYXIgPyBzaWRlYmFyV2lkdGggOiAwfXB4O1xuICAgICAgYH1cblxuICAgICAgJHshaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogJHtpc1NpZGViYXIgPyBzaWRlYmFyV2lkdGggOiAwfXB4O1xuICAgICAgICBoZWlnaHQ6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgIHdpZHRoOiAke2RheVdpZHRofXB4O1xuICAgICAgYH1cbiAgICBgfVxuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lQm94ID0gc3R5bGVkLmRpdiBgXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQsIHdpZHRoLCB0aW1lbGluZUhlaWdodCwgdGhlbWUgfSkgPT4gY3NzIGBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucHJpbWFyeVs5MDBdfTtcblxuICAgICR7IWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgbGVmdDogJHtsZWZ0fXB4O1xuICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYH1cbiAgICAke2lzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgdG9wOiAke2xlZnR9cHg7XG4gICAgICBoZWlnaHQ6ICR7d2lkdGh9cHg7XG4gICAgICB3aWR0aDogJHt0aW1lbGluZUhlaWdodH1weDtcbiAgICBgfVxuICBgfVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGlzVG9kYXksIGlzQ3VycmVudFRpbWUsIGlzVG9kYXlJbkhvdXJzSW5EYXlzLCBhcmVIb3Vyc0luRGF5cywgaXNXZWVrTW9udGhNb2RlLCB9KSA9PiB7XHJcbiAgICBjb25zdCB0eXBlTnVtYmVyRGVmYXVsdCA9IGlzVG9kYXkgJiYgaXNDdXJyZW50VGltZSA/IDIgOiAxO1xyXG4gICAgY29uc3QgdHlwZU51bWJlckluSG91cnNEYXlzID0gYXJlSG91cnNJbkRheXNcclxuICAgICAgICA/IGlzVG9kYXlJbkhvdXJzSW5EYXlzICYmIGlzQ3VycmVudFRpbWVcclxuICAgICAgICAgICAgPyAyXHJcbiAgICAgICAgICAgIDogMVxyXG4gICAgICAgIDogMTtcclxuICAgIGNvbnN0IHR5cGVOdW1iZXIgPSBhcmVIb3Vyc0luRGF5c1xyXG4gICAgICAgID8gdHlwZU51bWJlckluSG91cnNEYXlzXHJcbiAgICAgICAgOiB0eXBlTnVtYmVyRGVmYXVsdDtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNWZXJ0aWNhbE1vZGUgPyBcInRvcFwiIDogXCJsZWZ0XCI7XHJcbiAgICBpZiAoIWlzV2Vla01vbnRoTW9kZSkge1xyXG4gICAgICAgIHJldHVybiBgJjpudGgtb2YtdHlwZSgke3R5cGVOdW1iZXJ9KSB7XG4gICAgICAgICR7VGltZWxpbmVUaW1lfSB7XG4gICAgICAgICAgJHtwb3NpdGlvbn06IDBweDtcbiAgICAgICAgfVxuICAgICAgfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufX1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZVdlZWtNb250aEJveCA9IHN0eWxlZChUaW1lbGluZUJveCkgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBzdHlsZVR5cGUsIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUudGltZWxpbmUuZGl2aWRlci5iZ307XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAgICAgICAke2lzVmVydGljYWxNb2RlXHJcbiAgICA/IGNzcyBgXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGBcclxuICAgIDogY3NzIGBcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAke3N0eWxlVHlwZSA9PT0gXCJtb2Rlcm5cIiA/IFwiMzUlXCIgOiBcIjcwJVwifTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICBgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRpbWVsaW5lLnN0eWxlcy5qcy5tYXAiXX0= */"));
var TimelineWeekMonthDate = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1bnz7pf5"
} : {
  target: "e1bnz7pf5",
  label: "TimelineWeekMonthDate"
})("display:flex;justify-content:center;align-items:center;flex-direction:column;height:100%;transform:", function (_ref6) {
  var isRTL = _ref6.isRTL;
  return isRTL ? "scale(-1,1)" : "scale(1,1)";
}, ";span{color:", function (_ref7) {
  var theme = _ref7.theme;
  return theme.text.grey[300];
}, ";font-size:16px;}", function (_ref8) {
  var styleType = _ref8.styleType,
    theme = _ref8.theme;
  return styleType === "modern" && css(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n      span:first-of-type {\n        font-weight: 500;\n        color: ", ";\n        font-size: 18px;\n      }\n      span {\n        font-weight: 500;\n        color: ", ";\n        font-size: 24px;\n      }\n    "])), theme.teal[100], theme.text.grey[300]);
}, " ", function (_ref9) {
  var isVerticalMode = _ref9.isVerticalMode,
    isRTL = _ref9.isRTL;
  return isVerticalMode && css(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["\n      margin-top: 0px;\n      transform: ", ";\n    "])), isRTL ? "scale(-1,1)" : "scale(1,1)");
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2dEIiwiZmlsZSI6IlRpbWVsaW5lLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lVGltZSA9IHN0eWxlZC5zcGFuIGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6ICR7KHsgaXNSVEwsIGlzQmFzZVRpbWVGb3JtYXQsIGlzVmVydGljYWxNb2RlLCBpc1dlZWtNb250aE1vZGUgfSkgPT4ge1xyXG4gICAgaWYgKGlzVmVydGljYWxNb2RlKSB7XHJcbiAgICAgICAgaWYgKGlzUlRMKVxyXG4gICAgICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNztcclxuICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNDtcclxuICAgIH1cclxuICAgIGlmIChpc1dlZWtNb250aE1vZGUpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gaXNSVEwgJiYgaXNCYXNlVGltZUZvcm1hdCA/IFwiLTMyXCIgOiBcIi0xOFwiO1xyXG59fXB4O1xuXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHQuZ3JleVszMDBdfTtcblxuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmXHJcbiAgICBgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICBgfVxuXG4gICR7KHsgdGhlbWUsIGlzTmV3RGF5IH0pID0+IGlzTmV3RGF5ICYmIGBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19OyBmb250LXdlaWdodDogNjAwYH07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNSVEwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpICR7aXNSVEwgPyBcInNjYWxlKC0xLDEpXCIgOiBcIlwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZVdlZWtNb250aERhdGUgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzUlRMIH0pID0+IChpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwiKX07XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICR7KHsgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgJiZcclxuICAgIGNzcyBgXG4gICAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1JUTCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIHRyYW5zZm9ybTogJHtpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXJzID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlIH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZweDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50aW1lbGluZS5kaXZpZGVyLmJnfTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMXB4O1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgdG9wOiAke2xlZnR9cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzTmV3RGF5LCB0aGVtZSB9KSA9PiBpc05ld0RheSAmJlxyXG4gICAgYCY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICB3aWR0aDoycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRlYWxbMTAwXX07XG4gIH1gfVxuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCwgdGltZWxpbmVIZWlnaHQsIGRheVdpZHRoLCB0aGVtZSwgfSkgPT4gY3NzIGBcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgICB6LWluZGV4OiAke0xheWVycy5UaW1lbGluZX07XG5cbiAgICAgICR7aXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgIGB9XG5cbiAgICAgICR7IWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgICAgaGVpZ2h0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICB3aWR0aDogJHtkYXlXaWR0aH1weDtcbiAgICAgIGB9XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZUJveCA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0LCB3aWR0aCwgdGltZWxpbmVIZWlnaHQsIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgICAkeyFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGxlZnQ6ICR7bGVmdH1weDtcbiAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGB9XG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogJHtsZWZ0fXB4O1xuICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgYH1cbiAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RvZGF5LCBpc0N1cnJlbnRUaW1lLCBpc1RvZGF5SW5Ib3Vyc0luRGF5cywgYXJlSG91cnNJbkRheXMsIGlzV2Vla01vbnRoTW9kZSwgfSkgPT4ge1xyXG4gICAgY29uc3QgdHlwZU51bWJlckRlZmF1bHQgPSBpc1RvZGF5ICYmIGlzQ3VycmVudFRpbWUgPyAyIDogMTtcclxuICAgIGNvbnN0IHR5cGVOdW1iZXJJbkhvdXJzRGF5cyA9IGFyZUhvdXJzSW5EYXlzXHJcbiAgICAgICAgPyBpc1RvZGF5SW5Ib3Vyc0luRGF5cyAmJiBpc0N1cnJlbnRUaW1lXHJcbiAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICA6IDFcclxuICAgICAgICA6IDE7XHJcbiAgICBjb25zdCB0eXBlTnVtYmVyID0gYXJlSG91cnNJbkRheXNcclxuICAgICAgICA/IHR5cGVOdW1iZXJJbkhvdXJzRGF5c1xyXG4gICAgICAgIDogdHlwZU51bWJlckRlZmF1bHQ7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGlzVmVydGljYWxNb2RlID8gXCJ0b3BcIiA6IFwibGVmdFwiO1xyXG4gICAgaWYgKCFpc1dlZWtNb250aE1vZGUpIHtcclxuICAgICAgICByZXR1cm4gYCY6bnRoLW9mLXR5cGUoJHt0eXBlTnVtYmVyfSkge1xuICAgICAgICAke1RpbWVsaW5lVGltZX0ge1xuICAgICAgICAgICR7cG9zaXRpb259OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn19XG5gO1xyXG5leHBvcnQgY29uc3QgVGltZWxpbmVXZWVrTW9udGhCb3ggPSBzdHlsZWQoVGltZWxpbmVCb3gpIGBcbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBjc3MgYFxuICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRpbWVsaW5lLmRpdmlkZXIuYmd9O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgICAgICAgJHtpc1ZlcnRpY2FsTW9kZVxyXG4gICAgPyBjc3MgYFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBgXHJcbiAgICA6IGNzcyBgXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHtzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgPyBcIjM1JVwiIDogXCI3MCVcIn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lbGluZS5zdHlsZXMuanMubWFwIl19 */"));
var TimelineDividers = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1bnz7pf4"
} : {
  target: "e1bnz7pf4",
  label: "TimelineDividers"
})("position:relative;height:100%;width:100%;padding-bottom:6px;", function (_ref10) {
  var isVerticalMode = _ref10.isVerticalMode;
  return isVerticalMode && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      grid-template-columns: 1fr;\n      align-items: start;\n    "])));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRTJDIiwiZmlsZSI6IlRpbWVsaW5lLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lVGltZSA9IHN0eWxlZC5zcGFuIGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6ICR7KHsgaXNSVEwsIGlzQmFzZVRpbWVGb3JtYXQsIGlzVmVydGljYWxNb2RlLCBpc1dlZWtNb250aE1vZGUgfSkgPT4ge1xyXG4gICAgaWYgKGlzVmVydGljYWxNb2RlKSB7XHJcbiAgICAgICAgaWYgKGlzUlRMKVxyXG4gICAgICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNztcclxuICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNDtcclxuICAgIH1cclxuICAgIGlmIChpc1dlZWtNb250aE1vZGUpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gaXNSVEwgJiYgaXNCYXNlVGltZUZvcm1hdCA/IFwiLTMyXCIgOiBcIi0xOFwiO1xyXG59fXB4O1xuXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHQuZ3JleVszMDBdfTtcblxuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmXHJcbiAgICBgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICBgfVxuXG4gICR7KHsgdGhlbWUsIGlzTmV3RGF5IH0pID0+IGlzTmV3RGF5ICYmIGBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19OyBmb250LXdlaWdodDogNjAwYH07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNSVEwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpICR7aXNSVEwgPyBcInNjYWxlKC0xLDEpXCIgOiBcIlwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZVdlZWtNb250aERhdGUgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzUlRMIH0pID0+IChpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwiKX07XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICR7KHsgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgJiZcclxuICAgIGNzcyBgXG4gICAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1JUTCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIHRyYW5zZm9ybTogJHtpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXJzID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlIH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZweDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50aW1lbGluZS5kaXZpZGVyLmJnfTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMXB4O1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgdG9wOiAke2xlZnR9cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzTmV3RGF5LCB0aGVtZSB9KSA9PiBpc05ld0RheSAmJlxyXG4gICAgYCY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICB3aWR0aDoycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRlYWxbMTAwXX07XG4gIH1gfVxuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCwgdGltZWxpbmVIZWlnaHQsIGRheVdpZHRoLCB0aGVtZSwgfSkgPT4gY3NzIGBcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgICB6LWluZGV4OiAke0xheWVycy5UaW1lbGluZX07XG5cbiAgICAgICR7aXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgIGB9XG5cbiAgICAgICR7IWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgICAgaGVpZ2h0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICB3aWR0aDogJHtkYXlXaWR0aH1weDtcbiAgICAgIGB9XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZUJveCA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0LCB3aWR0aCwgdGltZWxpbmVIZWlnaHQsIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgICAkeyFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGxlZnQ6ICR7bGVmdH1weDtcbiAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGB9XG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogJHtsZWZ0fXB4O1xuICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgYH1cbiAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RvZGF5LCBpc0N1cnJlbnRUaW1lLCBpc1RvZGF5SW5Ib3Vyc0luRGF5cywgYXJlSG91cnNJbkRheXMsIGlzV2Vla01vbnRoTW9kZSwgfSkgPT4ge1xyXG4gICAgY29uc3QgdHlwZU51bWJlckRlZmF1bHQgPSBpc1RvZGF5ICYmIGlzQ3VycmVudFRpbWUgPyAyIDogMTtcclxuICAgIGNvbnN0IHR5cGVOdW1iZXJJbkhvdXJzRGF5cyA9IGFyZUhvdXJzSW5EYXlzXHJcbiAgICAgICAgPyBpc1RvZGF5SW5Ib3Vyc0luRGF5cyAmJiBpc0N1cnJlbnRUaW1lXHJcbiAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICA6IDFcclxuICAgICAgICA6IDE7XHJcbiAgICBjb25zdCB0eXBlTnVtYmVyID0gYXJlSG91cnNJbkRheXNcclxuICAgICAgICA/IHR5cGVOdW1iZXJJbkhvdXJzRGF5c1xyXG4gICAgICAgIDogdHlwZU51bWJlckRlZmF1bHQ7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGlzVmVydGljYWxNb2RlID8gXCJ0b3BcIiA6IFwibGVmdFwiO1xyXG4gICAgaWYgKCFpc1dlZWtNb250aE1vZGUpIHtcclxuICAgICAgICByZXR1cm4gYCY6bnRoLW9mLXR5cGUoJHt0eXBlTnVtYmVyfSkge1xuICAgICAgICAke1RpbWVsaW5lVGltZX0ge1xuICAgICAgICAgICR7cG9zaXRpb259OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn19XG5gO1xyXG5leHBvcnQgY29uc3QgVGltZWxpbmVXZWVrTW9udGhCb3ggPSBzdHlsZWQoVGltZWxpbmVCb3gpIGBcbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBjc3MgYFxuICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRpbWVsaW5lLmRpdmlkZXIuYmd9O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgICAgICAgJHtpc1ZlcnRpY2FsTW9kZVxyXG4gICAgPyBjc3MgYFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBgXHJcbiAgICA6IGNzcyBgXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHtzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgPyBcIjM1JVwiIDogXCI3MCVcIn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lbGluZS5zdHlsZXMuanMubWFwIl19 */"));
var TimelineDivider = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1bnz7pf3"
} : {
  target: "e1bnz7pf3",
  label: "TimelineDivider"
})("position:absolute;bottom:6px;background:", function (_ref11) {
  var theme = _ref11.theme;
  return theme.timeline.divider.bg;
}, ";height:10px;width:1px;left:", function (_ref12) {
  var left = _ref12.left;
  return left;
}, "px;", function (_ref13) {
  var isVerticalMode = _ref13.isVerticalMode,
    left = _ref13.left;
  return isVerticalMode && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      left: 50%;\n      height: 1px;\n      width: 15px;\n      transform: translate(-50%, -50%);\n      &:first-of-type {\n        opacity: 0;\n        visibility: hidden;\n      }\n    "])), left);
}, " ", function (_ref14) {
  var isNewDay = _ref14.isNewDay,
    theme = _ref14.theme;
  return isNewDay && "&:first-of-type {\n      width:2px;\n      background: " + theme.teal[100] + ";\n  }";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RTBDIiwiZmlsZSI6IlRpbWVsaW5lLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lVGltZSA9IHN0eWxlZC5zcGFuIGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6ICR7KHsgaXNSVEwsIGlzQmFzZVRpbWVGb3JtYXQsIGlzVmVydGljYWxNb2RlLCBpc1dlZWtNb250aE1vZGUgfSkgPT4ge1xyXG4gICAgaWYgKGlzVmVydGljYWxNb2RlKSB7XHJcbiAgICAgICAgaWYgKGlzUlRMKVxyXG4gICAgICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNztcclxuICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNDtcclxuICAgIH1cclxuICAgIGlmIChpc1dlZWtNb250aE1vZGUpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gaXNSVEwgJiYgaXNCYXNlVGltZUZvcm1hdCA/IFwiLTMyXCIgOiBcIi0xOFwiO1xyXG59fXB4O1xuXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHQuZ3JleVszMDBdfTtcblxuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmXHJcbiAgICBgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICBgfVxuXG4gICR7KHsgdGhlbWUsIGlzTmV3RGF5IH0pID0+IGlzTmV3RGF5ICYmIGBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19OyBmb250LXdlaWdodDogNjAwYH07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNSVEwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpICR7aXNSVEwgPyBcInNjYWxlKC0xLDEpXCIgOiBcIlwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZVdlZWtNb250aERhdGUgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzUlRMIH0pID0+IChpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwiKX07XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICR7KHsgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgJiZcclxuICAgIGNzcyBgXG4gICAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1JUTCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIHRyYW5zZm9ybTogJHtpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXJzID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlIH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZweDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50aW1lbGluZS5kaXZpZGVyLmJnfTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMXB4O1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgdG9wOiAke2xlZnR9cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzTmV3RGF5LCB0aGVtZSB9KSA9PiBpc05ld0RheSAmJlxyXG4gICAgYCY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICB3aWR0aDoycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRlYWxbMTAwXX07XG4gIH1gfVxuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCwgdGltZWxpbmVIZWlnaHQsIGRheVdpZHRoLCB0aGVtZSwgfSkgPT4gY3NzIGBcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgICB6LWluZGV4OiAke0xheWVycy5UaW1lbGluZX07XG5cbiAgICAgICR7aXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgIGB9XG5cbiAgICAgICR7IWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgICAgaGVpZ2h0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICB3aWR0aDogJHtkYXlXaWR0aH1weDtcbiAgICAgIGB9XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZUJveCA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0LCB3aWR0aCwgdGltZWxpbmVIZWlnaHQsIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgICAkeyFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGxlZnQ6ICR7bGVmdH1weDtcbiAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGB9XG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogJHtsZWZ0fXB4O1xuICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgYH1cbiAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RvZGF5LCBpc0N1cnJlbnRUaW1lLCBpc1RvZGF5SW5Ib3Vyc0luRGF5cywgYXJlSG91cnNJbkRheXMsIGlzV2Vla01vbnRoTW9kZSwgfSkgPT4ge1xyXG4gICAgY29uc3QgdHlwZU51bWJlckRlZmF1bHQgPSBpc1RvZGF5ICYmIGlzQ3VycmVudFRpbWUgPyAyIDogMTtcclxuICAgIGNvbnN0IHR5cGVOdW1iZXJJbkhvdXJzRGF5cyA9IGFyZUhvdXJzSW5EYXlzXHJcbiAgICAgICAgPyBpc1RvZGF5SW5Ib3Vyc0luRGF5cyAmJiBpc0N1cnJlbnRUaW1lXHJcbiAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICA6IDFcclxuICAgICAgICA6IDE7XHJcbiAgICBjb25zdCB0eXBlTnVtYmVyID0gYXJlSG91cnNJbkRheXNcclxuICAgICAgICA/IHR5cGVOdW1iZXJJbkhvdXJzRGF5c1xyXG4gICAgICAgIDogdHlwZU51bWJlckRlZmF1bHQ7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGlzVmVydGljYWxNb2RlID8gXCJ0b3BcIiA6IFwibGVmdFwiO1xyXG4gICAgaWYgKCFpc1dlZWtNb250aE1vZGUpIHtcclxuICAgICAgICByZXR1cm4gYCY6bnRoLW9mLXR5cGUoJHt0eXBlTnVtYmVyfSkge1xuICAgICAgICAke1RpbWVsaW5lVGltZX0ge1xuICAgICAgICAgICR7cG9zaXRpb259OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn19XG5gO1xyXG5leHBvcnQgY29uc3QgVGltZWxpbmVXZWVrTW9udGhCb3ggPSBzdHlsZWQoVGltZWxpbmVCb3gpIGBcbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBjc3MgYFxuICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRpbWVsaW5lLmRpdmlkZXIuYmd9O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgICAgICAgJHtpc1ZlcnRpY2FsTW9kZVxyXG4gICAgPyBjc3MgYFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBgXHJcbiAgICA6IGNzcyBgXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHtzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgPyBcIjM1JVwiIDogXCI3MCVcIn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lbGluZS5zdHlsZXMuanMubWFwIl19 */"));
var TimelineWrapper = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1bnz7pf2"
} : {
  target: "e1bnz7pf2",
  label: "TimelineWrapper"
})(function (_ref15) {
  var isVerticalMode = _ref15.isVerticalMode,
    isSidebar = _ref15.isSidebar,
    sidebarWidth = _ref15.sidebarWidth,
    timelineHeight = _ref15.timelineHeight,
    dayWidth = _ref15.dayWidth,
    theme = _ref15.theme;
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      position: sticky;\n      background: ", ";\n      z-index: ", ";\n\n      ", "\n\n      ", "\n    "])), theme.primary[900], Layers.Timeline, isVerticalMode && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n        left: 0;\n        bottom: 0px;\n        float: left;\n        width: ", "px;\n        margin-top: ", "px;\n      "])), timelineHeight, isSidebar ? sidebarWidth : 0), !isVerticalMode && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n        top: 0;\n        left: ", "px;\n        height: ", "px;\n        width: ", "px;\n      "])), isSidebar ? sidebarWidth : 0, timelineHeight, dayWidth));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RzBDIiwiZmlsZSI6IlRpbWVsaW5lLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lVGltZSA9IHN0eWxlZC5zcGFuIGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6ICR7KHsgaXNSVEwsIGlzQmFzZVRpbWVGb3JtYXQsIGlzVmVydGljYWxNb2RlLCBpc1dlZWtNb250aE1vZGUgfSkgPT4ge1xyXG4gICAgaWYgKGlzVmVydGljYWxNb2RlKSB7XHJcbiAgICAgICAgaWYgKGlzUlRMKVxyXG4gICAgICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNztcclxuICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNDtcclxuICAgIH1cclxuICAgIGlmIChpc1dlZWtNb250aE1vZGUpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gaXNSVEwgJiYgaXNCYXNlVGltZUZvcm1hdCA/IFwiLTMyXCIgOiBcIi0xOFwiO1xyXG59fXB4O1xuXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHQuZ3JleVszMDBdfTtcblxuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmXHJcbiAgICBgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICBgfVxuXG4gICR7KHsgdGhlbWUsIGlzTmV3RGF5IH0pID0+IGlzTmV3RGF5ICYmIGBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19OyBmb250LXdlaWdodDogNjAwYH07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNSVEwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpICR7aXNSVEwgPyBcInNjYWxlKC0xLDEpXCIgOiBcIlwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZVdlZWtNb250aERhdGUgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzUlRMIH0pID0+IChpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwiKX07XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICR7KHsgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgJiZcclxuICAgIGNzcyBgXG4gICAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1JUTCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIHRyYW5zZm9ybTogJHtpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXJzID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlIH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZweDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50aW1lbGluZS5kaXZpZGVyLmJnfTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMXB4O1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgdG9wOiAke2xlZnR9cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzTmV3RGF5LCB0aGVtZSB9KSA9PiBpc05ld0RheSAmJlxyXG4gICAgYCY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICB3aWR0aDoycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRlYWxbMTAwXX07XG4gIH1gfVxuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCwgdGltZWxpbmVIZWlnaHQsIGRheVdpZHRoLCB0aGVtZSwgfSkgPT4gY3NzIGBcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgICB6LWluZGV4OiAke0xheWVycy5UaW1lbGluZX07XG5cbiAgICAgICR7aXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgIGB9XG5cbiAgICAgICR7IWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgICAgaGVpZ2h0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICB3aWR0aDogJHtkYXlXaWR0aH1weDtcbiAgICAgIGB9XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZUJveCA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0LCB3aWR0aCwgdGltZWxpbmVIZWlnaHQsIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgICAkeyFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGxlZnQ6ICR7bGVmdH1weDtcbiAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGB9XG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogJHtsZWZ0fXB4O1xuICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgYH1cbiAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RvZGF5LCBpc0N1cnJlbnRUaW1lLCBpc1RvZGF5SW5Ib3Vyc0luRGF5cywgYXJlSG91cnNJbkRheXMsIGlzV2Vla01vbnRoTW9kZSwgfSkgPT4ge1xyXG4gICAgY29uc3QgdHlwZU51bWJlckRlZmF1bHQgPSBpc1RvZGF5ICYmIGlzQ3VycmVudFRpbWUgPyAyIDogMTtcclxuICAgIGNvbnN0IHR5cGVOdW1iZXJJbkhvdXJzRGF5cyA9IGFyZUhvdXJzSW5EYXlzXHJcbiAgICAgICAgPyBpc1RvZGF5SW5Ib3Vyc0luRGF5cyAmJiBpc0N1cnJlbnRUaW1lXHJcbiAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICA6IDFcclxuICAgICAgICA6IDE7XHJcbiAgICBjb25zdCB0eXBlTnVtYmVyID0gYXJlSG91cnNJbkRheXNcclxuICAgICAgICA/IHR5cGVOdW1iZXJJbkhvdXJzRGF5c1xyXG4gICAgICAgIDogdHlwZU51bWJlckRlZmF1bHQ7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGlzVmVydGljYWxNb2RlID8gXCJ0b3BcIiA6IFwibGVmdFwiO1xyXG4gICAgaWYgKCFpc1dlZWtNb250aE1vZGUpIHtcclxuICAgICAgICByZXR1cm4gYCY6bnRoLW9mLXR5cGUoJHt0eXBlTnVtYmVyfSkge1xuICAgICAgICAke1RpbWVsaW5lVGltZX0ge1xuICAgICAgICAgICR7cG9zaXRpb259OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn19XG5gO1xyXG5leHBvcnQgY29uc3QgVGltZWxpbmVXZWVrTW9udGhCb3ggPSBzdHlsZWQoVGltZWxpbmVCb3gpIGBcbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBjc3MgYFxuICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRpbWVsaW5lLmRpdmlkZXIuYmd9O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgICAgICAgJHtpc1ZlcnRpY2FsTW9kZVxyXG4gICAgPyBjc3MgYFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBgXHJcbiAgICA6IGNzcyBgXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHtzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgPyBcIjM1JVwiIDogXCI3MCVcIn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lbGluZS5zdHlsZXMuanMubWFwIl19 */"));
var TimelineBox = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1bnz7pf1"
} : {
  target: "e1bnz7pf1",
  label: "TimelineBox"
})(function (_ref16) {
  var isVerticalMode = _ref16.isVerticalMode,
    left = _ref16.left,
    width = _ref16.width,
    timelineHeight = _ref16.timelineHeight,
    theme = _ref16.theme;
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n    position: absolute;\n    font-size: 14px;\n    background-color: ", ";\n\n    ", "\n    ", "\n  "])), theme.primary[900], !isVerticalMode && css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      left: ", "px;\n      width: ", "px;\n      height: 100%;\n    "])), left, width), isVerticalMode && css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      height: ", "px;\n      width: ", "px;\n    "])), left, width, timelineHeight));
}, " ", function (_ref17) {
  var isVerticalMode = _ref17.isVerticalMode,
    isToday = _ref17.isToday,
    isCurrentTime = _ref17.isCurrentTime,
    isTodayInHoursInDays = _ref17.isTodayInHoursInDays,
    areHoursInDays = _ref17.areHoursInDays,
    isWeekMonthMode = _ref17.isWeekMonthMode;
  var typeNumberDefault = isToday && isCurrentTime ? 2 : 1;
  var typeNumberInHoursDays = areHoursInDays ? isTodayInHoursInDays && isCurrentTime ? 2 : 1 : 1;
  var typeNumber = areHoursInDays ? typeNumberInHoursDays : typeNumberDefault;
  var position = isVerticalMode ? "top" : "left";
  if (!isWeekMonthMode) {
    return "&:nth-of-type(" + typeNumber + ") {\n        " + TimelineTime + " {\n          " + position + ": 0px;\n        }\n      }";
  }
  return "";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSXNDIiwiZmlsZSI6IlRpbWVsaW5lLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lVGltZSA9IHN0eWxlZC5zcGFuIGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6ICR7KHsgaXNSVEwsIGlzQmFzZVRpbWVGb3JtYXQsIGlzVmVydGljYWxNb2RlLCBpc1dlZWtNb250aE1vZGUgfSkgPT4ge1xyXG4gICAgaWYgKGlzVmVydGljYWxNb2RlKSB7XHJcbiAgICAgICAgaWYgKGlzUlRMKVxyXG4gICAgICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNztcclxuICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNDtcclxuICAgIH1cclxuICAgIGlmIChpc1dlZWtNb250aE1vZGUpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gaXNSVEwgJiYgaXNCYXNlVGltZUZvcm1hdCA/IFwiLTMyXCIgOiBcIi0xOFwiO1xyXG59fXB4O1xuXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHQuZ3JleVszMDBdfTtcblxuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmXHJcbiAgICBgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICBgfVxuXG4gICR7KHsgdGhlbWUsIGlzTmV3RGF5IH0pID0+IGlzTmV3RGF5ICYmIGBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19OyBmb250LXdlaWdodDogNjAwYH07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNSVEwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpICR7aXNSVEwgPyBcInNjYWxlKC0xLDEpXCIgOiBcIlwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZVdlZWtNb250aERhdGUgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzUlRMIH0pID0+IChpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwiKX07XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICR7KHsgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgJiZcclxuICAgIGNzcyBgXG4gICAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1JUTCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIHRyYW5zZm9ybTogJHtpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXJzID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlIH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZweDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50aW1lbGluZS5kaXZpZGVyLmJnfTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMXB4O1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgdG9wOiAke2xlZnR9cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzTmV3RGF5LCB0aGVtZSB9KSA9PiBpc05ld0RheSAmJlxyXG4gICAgYCY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICB3aWR0aDoycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRlYWxbMTAwXX07XG4gIH1gfVxuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCwgdGltZWxpbmVIZWlnaHQsIGRheVdpZHRoLCB0aGVtZSwgfSkgPT4gY3NzIGBcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgICB6LWluZGV4OiAke0xheWVycy5UaW1lbGluZX07XG5cbiAgICAgICR7aXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgIGB9XG5cbiAgICAgICR7IWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgICAgaGVpZ2h0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICB3aWR0aDogJHtkYXlXaWR0aH1weDtcbiAgICAgIGB9XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZUJveCA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0LCB3aWR0aCwgdGltZWxpbmVIZWlnaHQsIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgICAkeyFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGxlZnQ6ICR7bGVmdH1weDtcbiAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGB9XG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogJHtsZWZ0fXB4O1xuICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgYH1cbiAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RvZGF5LCBpc0N1cnJlbnRUaW1lLCBpc1RvZGF5SW5Ib3Vyc0luRGF5cywgYXJlSG91cnNJbkRheXMsIGlzV2Vla01vbnRoTW9kZSwgfSkgPT4ge1xyXG4gICAgY29uc3QgdHlwZU51bWJlckRlZmF1bHQgPSBpc1RvZGF5ICYmIGlzQ3VycmVudFRpbWUgPyAyIDogMTtcclxuICAgIGNvbnN0IHR5cGVOdW1iZXJJbkhvdXJzRGF5cyA9IGFyZUhvdXJzSW5EYXlzXHJcbiAgICAgICAgPyBpc1RvZGF5SW5Ib3Vyc0luRGF5cyAmJiBpc0N1cnJlbnRUaW1lXHJcbiAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICA6IDFcclxuICAgICAgICA6IDE7XHJcbiAgICBjb25zdCB0eXBlTnVtYmVyID0gYXJlSG91cnNJbkRheXNcclxuICAgICAgICA/IHR5cGVOdW1iZXJJbkhvdXJzRGF5c1xyXG4gICAgICAgIDogdHlwZU51bWJlckRlZmF1bHQ7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGlzVmVydGljYWxNb2RlID8gXCJ0b3BcIiA6IFwibGVmdFwiO1xyXG4gICAgaWYgKCFpc1dlZWtNb250aE1vZGUpIHtcclxuICAgICAgICByZXR1cm4gYCY6bnRoLW9mLXR5cGUoJHt0eXBlTnVtYmVyfSkge1xuICAgICAgICAke1RpbWVsaW5lVGltZX0ge1xuICAgICAgICAgICR7cG9zaXRpb259OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn19XG5gO1xyXG5leHBvcnQgY29uc3QgVGltZWxpbmVXZWVrTW9udGhCb3ggPSBzdHlsZWQoVGltZWxpbmVCb3gpIGBcbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBjc3MgYFxuICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRpbWVsaW5lLmRpdmlkZXIuYmd9O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgICAgICAgJHtpc1ZlcnRpY2FsTW9kZVxyXG4gICAgPyBjc3MgYFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBgXHJcbiAgICA6IGNzcyBgXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHtzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgPyBcIjM1JVwiIDogXCI3MCVcIn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lbGluZS5zdHlsZXMuanMubWFwIl19 */"));
var TimelineWeekMonthBox = /*#__PURE__*/_styled(TimelineBox, process.env.NODE_ENV === "production" ? {
  target: "e1bnz7pf0"
} : {
  target: "e1bnz7pf0",
  label: "TimelineWeekMonthBox"
})(function (_ref18) {
  var isVerticalMode = _ref18.isVerticalMode,
    styleType = _ref18.styleType,
    theme = _ref18.theme;
  return css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      &:not(:last-of-type) {\n        &:after {\n          content: \"\";\n          position: absolute;\n          background: ", ";\n          transform: translate(-50%, -50%);\n\n          ", "\n        }\n      }\n    "])), theme.timeline.divider.bg, isVerticalMode ? css(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n                bottom: 0;\n                height: 1px;\n                width: 80%;\n              "]))) : css(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n                top: 50%;\n                right: 0;\n                height: 100%;\n                height: ", ";\n                width: 1px;\n              "])), styleType === "modern" ? "35%" : "70%"));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVsaW5lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwS3dEIiwiZmlsZSI6IlRpbWVsaW5lLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lVGltZSA9IHN0eWxlZC5zcGFuIGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6ICR7KHsgaXNSVEwsIGlzQmFzZVRpbWVGb3JtYXQsIGlzVmVydGljYWxNb2RlLCBpc1dlZWtNb250aE1vZGUgfSkgPT4ge1xyXG4gICAgaWYgKGlzVmVydGljYWxNb2RlKSB7XHJcbiAgICAgICAgaWYgKGlzUlRMKVxyXG4gICAgICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNztcclxuICAgICAgICByZXR1cm4gaXNCYXNlVGltZUZvcm1hdCA/IDkgOiAxNDtcclxuICAgIH1cclxuICAgIGlmIChpc1dlZWtNb250aE1vZGUpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gaXNSVEwgJiYgaXNCYXNlVGltZUZvcm1hdCA/IFwiLTMyXCIgOiBcIi0xOFwiO1xyXG59fXB4O1xuXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHQuZ3JleVszMDBdfTtcblxuICAkeyh7IGlzUlRMIH0pID0+IGlzUlRMICYmXHJcbiAgICBgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgICBgfVxuXG4gICR7KHsgdGhlbWUsIGlzTmV3RGF5IH0pID0+IGlzTmV3RGF5ICYmIGBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19OyBmb250LXdlaWdodDogNjAwYH07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNSVEwgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpICR7aXNSVEwgPyBcInNjYWxlKC0xLDEpXCIgOiBcIlwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZVdlZWtNb250aERhdGUgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzUlRMIH0pID0+IChpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwiKX07XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICR7KHsgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgJiZcclxuICAgIGNzcyBgXG4gICAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUudGV4dC5ncmV5WzMwMF19O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1JUTCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIHRyYW5zZm9ybTogJHtpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwic2NhbGUoMSwxKVwifTtcbiAgICBgfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXJzID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlIH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZURpdmlkZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZweDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50aW1lbGluZS5kaXZpZGVyLmJnfTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMXB4O1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgdG9wOiAke2xlZnR9cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGlzTmV3RGF5LCB0aGVtZSB9KSA9PiBpc05ld0RheSAmJlxyXG4gICAgYCY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICB3aWR0aDoycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRlYWxbMTAwXX07XG4gIH1gfVxuYDtcclxuZXhwb3J0IGNvbnN0IFRpbWVsaW5lV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCwgdGltZWxpbmVIZWlnaHQsIGRheVdpZHRoLCB0aGVtZSwgfSkgPT4gY3NzIGBcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgICB6LWluZGV4OiAke0xheWVycy5UaW1lbGluZX07XG5cbiAgICAgICR7aXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgIGB9XG5cbiAgICAgICR7IWlzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgICAgaGVpZ2h0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICB3aWR0aDogJHtkYXlXaWR0aH1weDtcbiAgICAgIGB9XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZUJveCA9IHN0eWxlZC5kaXYgYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0LCB3aWR0aCwgdGltZWxpbmVIZWlnaHQsIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG5cbiAgICAkeyFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGxlZnQ6ICR7bGVmdH1weDtcbiAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGB9XG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogJHtsZWZ0fXB4O1xuICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgd2lkdGg6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgYH1cbiAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc1RvZGF5LCBpc0N1cnJlbnRUaW1lLCBpc1RvZGF5SW5Ib3Vyc0luRGF5cywgYXJlSG91cnNJbkRheXMsIGlzV2Vla01vbnRoTW9kZSwgfSkgPT4ge1xyXG4gICAgY29uc3QgdHlwZU51bWJlckRlZmF1bHQgPSBpc1RvZGF5ICYmIGlzQ3VycmVudFRpbWUgPyAyIDogMTtcclxuICAgIGNvbnN0IHR5cGVOdW1iZXJJbkhvdXJzRGF5cyA9IGFyZUhvdXJzSW5EYXlzXHJcbiAgICAgICAgPyBpc1RvZGF5SW5Ib3Vyc0luRGF5cyAmJiBpc0N1cnJlbnRUaW1lXHJcbiAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICA6IDFcclxuICAgICAgICA6IDE7XHJcbiAgICBjb25zdCB0eXBlTnVtYmVyID0gYXJlSG91cnNJbkRheXNcclxuICAgICAgICA/IHR5cGVOdW1iZXJJbkhvdXJzRGF5c1xyXG4gICAgICAgIDogdHlwZU51bWJlckRlZmF1bHQ7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGlzVmVydGljYWxNb2RlID8gXCJ0b3BcIiA6IFwibGVmdFwiO1xyXG4gICAgaWYgKCFpc1dlZWtNb250aE1vZGUpIHtcclxuICAgICAgICByZXR1cm4gYCY6bnRoLW9mLXR5cGUoJHt0eXBlTnVtYmVyfSkge1xuICAgICAgICAke1RpbWVsaW5lVGltZX0ge1xuICAgICAgICAgICR7cG9zaXRpb259OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn19XG5gO1xyXG5leHBvcnQgY29uc3QgVGltZWxpbmVXZWVrTW9udGhCb3ggPSBzdHlsZWQoVGltZWxpbmVCb3gpIGBcbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgc3R5bGVUeXBlLCB0aGVtZSB9KSA9PiBjc3MgYFxuICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnRpbWVsaW5lLmRpdmlkZXIuYmd9O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgICAgICAgJHtpc1ZlcnRpY2FsTW9kZVxyXG4gICAgPyBjc3MgYFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBgXHJcbiAgICA6IGNzcyBgXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHtzdHlsZVR5cGUgPT09IFwibW9kZXJuXCIgPyBcIjM1JVwiIDogXCI3MCVcIn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lbGluZS5zdHlsZXMuanMubWFwIl19 */"));

var lineStyles = {
  position: "absolute",
  top: 64,
  width: 3
};
var LineBox = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "ef4is9g0"
} : {
  target: "ef4is9g0",
  label: "LineBox"
})("position:", lineStyles.position, ";top:", function (_ref) {
  var isTimeline = _ref.isTimeline;
  return isTimeline ? lineStyles.top : 0;
}, "px;left:", function (_ref2) {
  var left = _ref2.left;
  return left;
}, "px;height:", function (_ref3) {
  var height = _ref3.height;
  return height;
}, "px;width:", lineStyles.width, "px;background:", function (_ref4) {
  var theme = _ref4.theme;
  return theme.green[300];
}, ";pointer-events:none;z-index:", function (_ref5) {
  var zIndex = _ref5.zIndex;
  return zIndex;
}, ";", function (_ref6) {
  var isVerticalMode = _ref6.isVerticalMode,
    isTimeline = _ref6.isTimeline,
    left = _ref6.left,
    height = _ref6.height;
  return isVerticalMode && " \n      top: " + left + "px;\n      left: " + (isTimeline ? lineStyles.top : 0) + "px;\n      height: " + lineStyles.width + "px;\n      width: " + height + "px;\n  ";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmUuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1rQyIsImZpbGUiOiJMaW5lLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZC9tYWNyb1wiO1xyXG5leHBvcnQgY29uc3QgbGluZVN0eWxlcyA9IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB0b3A6IDY0LFxyXG4gICAgd2lkdGg6IDMsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBMaW5lQm94ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiAke2xpbmVTdHlsZXMucG9zaXRpb259O1xuICB0b3A6ICR7KHsgaXNUaW1lbGluZSB9KSA9PiAoaXNUaW1lbGluZSA/IGxpbmVTdHlsZXMudG9wIDogMCl9cHg7XG4gIGxlZnQ6ICR7KHsgbGVmdCB9KSA9PiBsZWZ0fXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcbiAgd2lkdGg6ICR7bGluZVN0eWxlcy53aWR0aH1weDtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmVlblszMDBdfTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6ICR7KHsgekluZGV4IH0pID0+IHpJbmRleH07XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNUaW1lbGluZSwgbGVmdCwgaGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgIFxuICAgICAgdG9wOiAke2xlZnR9cHg7XG4gICAgICBsZWZ0OiAke2lzVGltZWxpbmUgPyBsaW5lU3R5bGVzLnRvcCA6IDB9cHg7XG4gICAgICBoZWlnaHQ6ICR7bGluZVN0eWxlcy53aWR0aH1weDtcbiAgICAgIHdpZHRoOiAke2hlaWdodH1weDtcbiAgYH1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxpbmUuc3R5bGVzLmpzLm1hcCJdfQ== */"));

var _templateObject$4;
var time = [0, 50, 0];
var moveLeft = function moveLeft(animate) {
  return keyframes(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n", "\n"])), time.map(function (item, index) {
    return item + "% {\n  transform: translateX(-" + animate.right[index] + ");\n}";
  }));
};
var Box$2 = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e8ysujy1"
} : {
  target: "e8ysujy1",
  label: "Box"
})("position:absolute;top:0;left:0;bottom:0;width:100%;background:", function (_ref) {
  var theme = _ref.theme;
  return theme.loader.bg;
}, ";display:flex;justify-content:center;align-items:center;z-index:", Layers.Loader, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvYWRlci5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzhCIiwiZmlsZSI6IkxvYWRlci5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IExheWVycyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmNvbnN0IHRpbWUgPSBbMCwgNTAsIDBdO1xyXG5jb25zdCBtb3ZlTGVmdCA9IChhbmltYXRlKSA9PiBrZXlmcmFtZXMgYFxuJHt0aW1lLm1hcCgoaXRlbSwgaW5kZXgpID0+IGAke2l0ZW19JSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHthbmltYXRlLnJpZ2h0W2luZGV4XX0pO1xufWApfVxuYDtcclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5sb2FkZXIuYmd9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogJHtMYXllcnMuTG9hZGVyfTtcbmA7XHJcbmV4cG9ydCBjb25zdCBTaGFwZSA9IHN0eWxlZC5kaXYgYFxuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCAqIDAuNDJ9cHg7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUsIGNvbG9yIH0pID0+IHRoZW1lLmxvYWRlcltjb2xvcl19O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIG1hcmdpbi1yaWdodDogJHsoeyBtYXJnaW5SaWdodCB9KSA9PiBtYXJnaW5SaWdodCA/PyAwfXB4O1xuICBhbmltYXRpb24tbmFtZTogJHsoeyBhbmltYXRlIH0pID0+IG1vdmVMZWZ0KGFuaW1hdGUpfTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkeyh7IHRyYW5zaXRpb24gfSkgPT4gdHJhbnNpdGlvbi5kdXJhdGlvbn1zO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkeyh7IHRyYW5zaXRpb24gfSkgPT4gdHJhbnNpdGlvbi5lYXNlID8/IFwiZWFzZS1pbi1vdXRcIn07XG4gIGFuaW1hdGlvbi1kZWxheTogJHsoeyB0cmFuc2l0aW9uIH0pID0+IHRyYW5zaXRpb24uZGVsYXkgPz8gMH1zO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvYWRlci5zdHlsZXMuanMubWFwIl19 */"));
var Shape = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e8ysujy0"
} : {
  target: "e8ysujy0",
  label: "Shape"
})("width:", function (_ref2) {
  var width = _ref2.width;
  return width * 0.42;
}, "px;background:", function (_ref3) {
  var theme = _ref3.theme,
    color = _ref3.color;
  return theme.loader[color];
}, ";height:18px;border-radius:45px;margin-right:", function (_ref4) {
  var marginRight = _ref4.marginRight;
  return marginRight != null ? marginRight : 0;
}, "px;animation-name:", function (_ref5) {
  var animate = _ref5.animate;
  return moveLeft(animate);
}, ";animation-duration:", function (_ref6) {
  var transition = _ref6.transition;
  return transition.duration;
}, "s;animation-timing-function:", function (_ref7) {
  var _transition$ease;
  var transition = _ref7.transition;
  return (_transition$ease = transition.ease) != null ? _transition$ease : "ease-in-out";
}, ";animation-delay:", function (_ref8) {
  var _transition$delay;
  var transition = _ref8.transition;
  return (_transition$delay = transition.delay) != null ? _transition$delay : 0;
}, "s;animation-iteration-count:infinite;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvYWRlci5zdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJnQyIsImZpbGUiOiJMb2FkZXIuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkL21hY3JvXCI7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXllcnMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5jb25zdCB0aW1lID0gWzAsIDUwLCAwXTtcclxuY29uc3QgbW92ZUxlZnQgPSAoYW5pbWF0ZSkgPT4ga2V5ZnJhbWVzIGBcbiR7dGltZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiBgJHtpdGVtfSUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7YW5pbWF0ZS5yaWdodFtpbmRleF19KTtcbn1gKX1cbmA7XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubG9hZGVyLmJnfTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6ICR7TGF5ZXJzLkxvYWRlcn07XG5gO1xyXG5leHBvcnQgY29uc3QgU2hhcGUgPSBzdHlsZWQuZGl2IGBcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGggKiAwLjQyfXB4O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5sb2FkZXJbY29sb3JdfTtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6ICR7KHsgbWFyZ2luUmlnaHQgfSkgPT4gbWFyZ2luUmlnaHQgPz8gMH1weDtcbiAgYW5pbWF0aW9uLW5hbWU6ICR7KHsgYW5pbWF0ZSB9KSA9PiBtb3ZlTGVmdChhbmltYXRlKX07XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogJHsoeyB0cmFuc2l0aW9uIH0pID0+IHRyYW5zaXRpb24uZHVyYXRpb259cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJHsoeyB0cmFuc2l0aW9uIH0pID0+IHRyYW5zaXRpb24uZWFzZSA/PyBcImVhc2UtaW4tb3V0XCJ9O1xuICBhbmltYXRpb24tZGVsYXk6ICR7KHsgdHJhbnNpdGlvbiB9KSA9PiB0cmFuc2l0aW9uLmRlbGF5ID8/IDB9cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2FkZXIuc3R5bGVzLmpzLm1hcCJdfQ== */"));

var _templateObject$5, _templateObject2$3, _templateObject3$3;
var boxStyles = function boxStyles(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    width = _ref.width;
  return {
    position: "absolute",
    top: 0,
    width: width != null ? width : 70,
    height: 20
  };
};
var CurrentTimeBox = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1b7bm21"
} : {
  target: "e1b7bm21",
  label: "CurrentTimeBox"
})("position:", /*#__PURE__*/boxStyles().position, ";top:", function (_ref2) {
  var top = _ref2.top;
  return top;
}, "px;left:", function (_ref3) {
  var left = _ref3.left;
  return left;
}, "px;width:", function (_ref4) {
  var width = _ref4.width;
  return typeof width === "string" ? "auto" : width + "px";
}, ";height:", /*#__PURE__*/boxStyles().height, "px;background-color:", function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary[900];
}, ";z-index:2;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkN1cnJlbnRUaW1lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFReUMiLCJmaWxlIjoiQ3VycmVudFRpbWUuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZC9tYWNyb1wiO1xyXG5leHBvcnQgY29uc3QgYm94U3R5bGVzID0gKHsgd2lkdGggfSA9IHt9KSA9PiAoe1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogMCxcclxuICAgIHdpZHRoOiB3aWR0aCA/PyA3MCxcclxuICAgIGhlaWdodDogMjAsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgQ3VycmVudFRpbWVCb3ggPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246ICR7Ym94U3R5bGVzKCkucG9zaXRpb259O1xuICB0b3A6ICR7KHsgdG9wIH0pID0+IHRvcH1weDtcbiAgbGVmdDogJHsoeyBsZWZ0IH0pID0+IGxlZnR9cHg7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+ICh0eXBlb2Ygd2lkdGggPT09IFwic3RyaW5nXCIgPyBcImF1dG9cIiA6IGAke3dpZHRofXB4YCl9O1xuICBoZWlnaHQ6ICR7Ym94U3R5bGVzKCkuaGVpZ2h0fXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlbOTAwXX07XG4gIHotaW5kZXg6IDI7XG5gO1xyXG5leHBvcnQgY29uc3QgQ3VycmVudFRpbWVDb250ZW50ID0gc3R5bGVkLnNwYW4gYFxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc0Jhc2VUaW1lRm9ybWF0LCBpc1JUTCwgaXNOZXdEYXksIHRoZW1lIH0pID0+IGNzcyBgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAke3RoZW1lLmdyZWVuWzIwMF19O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucHJpbWFyeVs5MDBdfTtcbiAgICAke2lzTmV3RGF5ICYmIGBjb2xvcjogJHt0aGVtZS50ZWFsWzEwMF19OyBmb250LXdlaWdodDogNjAwYH07XG5cbiAgICAke2lzVmVydGljYWxNb2RlICYmXHJcbiAgICBjc3MgYFxuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgJHtpc1JUTCA/IFwic2NhbGUoLTEsMSlcIiA6IFwiXCJ9O1xuICAgIGB9XG5cbiAgICAkeyFpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogNHB4O1xuICAgICAgbGVmdDogJHtpc1JUTCAmJiBpc0Jhc2VUaW1lRm9ybWF0ID8gXCItMzJcIiA6IFwiLTE2XCJ9cHg7XG4gICAgICAke2lzUlRMICYmIFwidHJhbnNmb3JtOiBzY2FsZSgtMSwxKTtcIn1cbiAgICBgfVxuICBgfVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q3VycmVudFRpbWUuc3R5bGVzLmpzLm1hcCJdfQ== */"));
var CurrentTimeContent = /*#__PURE__*/_styled("span", process.env.NODE_ENV === "production" ? {
  target: "e1b7bm20"
} : {
  target: "e1b7bm20",
  label: "CurrentTimeContent"
})(function (_ref6) {
  var isVerticalMode = _ref6.isVerticalMode,
    isBaseTimeFormat = _ref6.isBaseTimeFormat,
    isRTL = _ref6.isRTL,
    isNewDay = _ref6.isNewDay,
    theme = _ref6.theme;
  return css(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n    position: absolute;\n    font-size: 13px;\n    font-weight: 500;\n    color: ", ";\n    background-color: ", ";\n    ", ";\n\n    ", "\n\n    ", "\n  "])), theme.green[200], theme.primary[900], isNewDay && "color: " + theme.teal[100] + "; font-weight: 600", isVerticalMode && css(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\n      left: 50%;\n      transform: translate(-50%, -50%) ", ";\n    "])), isRTL ? "scale(-1,1)" : ""), !isVerticalMode && css(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteralLoose(["\n      top: 4px;\n      left: ", "px;\n      ", "\n    "])), isRTL && isBaseTimeFormat ? "-32" : "-16", isRTL && "transform: scale(-1,1);"));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkN1cnJlbnRUaW1lLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQjhDIiwiZmlsZSI6IkN1cnJlbnRUaW1lLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuZXhwb3J0IGNvbnN0IGJveFN0eWxlcyA9ICh7IHdpZHRoIH0gPSB7fSkgPT4gKHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB0b3A6IDAsXHJcbiAgICB3aWR0aDogd2lkdGggPz8gNzAsXHJcbiAgICBoZWlnaHQ6IDIwLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEN1cnJlbnRUaW1lQm94ID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiAke2JveFN0eWxlcygpLnBvc2l0aW9ufTtcbiAgdG9wOiAkeyh7IHRvcCB9KSA9PiB0b3B9cHg7XG4gIGxlZnQ6ICR7KHsgbGVmdCB9KSA9PiBsZWZ0fXB4O1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiAodHlwZW9mIHdpZHRoID09PSBcInN0cmluZ1wiID8gXCJhdXRvXCIgOiBgJHt3aWR0aH1weGApfTtcbiAgaGVpZ2h0OiAke2JveFN0eWxlcygpLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5WzkwMF19O1xuICB6LWluZGV4OiAyO1xuYDtcclxuZXhwb3J0IGNvbnN0IEN1cnJlbnRUaW1lQ29udGVudCA9IHN0eWxlZC5zcGFuIGBcbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNCYXNlVGltZUZvcm1hdCwgaXNSVEwsIGlzTmV3RGF5LCB0aGVtZSB9KSA9PiBjc3MgYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJHt0aGVtZS5ncmVlblsyMDBdfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlbOTAwXX07XG4gICAgJHtpc05ld0RheSAmJiBgY29sb3I6ICR7dGhlbWUudGVhbFsxMDBdfTsgZm9udC13ZWlnaHQ6IDYwMGB9O1xuXG4gICAgJHtpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICR7aXNSVEwgPyBcInNjYWxlKC0xLDEpXCIgOiBcIlwifTtcbiAgICBgfVxuXG4gICAgJHshaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6IDRweDtcbiAgICAgIGxlZnQ6ICR7aXNSVEwgJiYgaXNCYXNlVGltZUZvcm1hdCA/IFwiLTMyXCIgOiBcIi0xNlwifXB4O1xuICAgICAgJHtpc1JUTCAmJiBcInRyYW5zZm9ybTogc2NhbGUoLTEsMSk7XCJ9XG4gICAgYH1cbiAgYH1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUN1cnJlbnRUaW1lLnN0eWxlcy5qcy5tYXAiXX0= */"));

var _templateObject$6, _templateObject2$4, _templateObject3$4, _templateObject4$1, _templateObject5$1, _templateObject6$1;
function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var AreaFiled = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "euzzuzq2"
} : {
  target: "euzzuzq2",
  label: "AreaFiled"
})("position:absolute;pointer-events:", function (props) {
  return props.isClickable ? "auto" : "none";
}, ";cursor:", function (props) {
  return props.isClickable ? "pointer" : "none";
}, ";z-index:", Layers.Area, ";", function (_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    positionX = _ref.positionX,
    height = _ref.height,
    width = _ref.width,
    timelineHeight = _ref.timelineHeight;
  return isVerticalMode ? css(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n          top: ", "px;\n          left: ", "px;\n          height: ", "px;\n          width: ", "px;\n        "])), positionX, timelineHeight, width, height) : css(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["\n          top: ", "px;\n          left: ", "px;\n          height: ", "px;\n          width: ", "px;\n        "])), timelineHeight, positionX, height, width);
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFyZWEuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlvQyIsImZpbGUiOiJBcmVhLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZC9tYWNyb1wiO1xyXG4vLyBJbXBvcnQgaGVscGVyc1xyXG5pbXBvcnQgeyBMYXllcnMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuZXhwb3J0IGNvbnN0IEFyZWFGaWxlZCA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQ2xpY2thYmxlID8gXCJhdXRvXCIgOiBcIm5vbmVcIil9O1xuICBjdXJzb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNDbGlja2FibGUgPyBcInBvaW50ZXJcIiA6IFwibm9uZVwiKX07XG4gIHotaW5kZXg6ICR7TGF5ZXJzLkFyZWF9O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIHBvc2l0aW9uWCwgaGVpZ2h0LCB3aWR0aCwgdGltZWxpbmVIZWlnaHQgfSkgPT4gaXNWZXJ0aWNhbE1vZGVcclxuICAgID8gY3NzIGBcbiAgICAgICAgICB0b3A6ICR7cG9zaXRpb25YfXB4O1xuICAgICAgICAgIGxlZnQ6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgICAgIHdpZHRoOiAke2hlaWdodH1weDtcbiAgICAgICAgYFxyXG4gICAgOiBjc3MgYFxuICAgICAgICAgIHRvcDogJHt0aW1lbGluZUhlaWdodH1weDtcbiAgICAgICAgICBsZWZ0OiAke3Bvc2l0aW9uWH1weDtcbiAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xuICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICBgfVxuYDtcclxuZXhwb3J0IGNvbnN0IEFyZWFCZyA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbmA7XHJcbmV4cG9ydCBjb25zdCBBcmVhQW5ub3RhdGlvbiA9IHN0eWxlZC5kaXYgYFxuICBwYWRkaW5nOiA0cHggNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBpc0xlZnQgPSBmYWxzZSwgd2lkdGgsIHRpbWVsaW5lSGVpZ2h0IH0pID0+IGNzcyBgXG4gICAgJHshaXNWZXJ0aWNhbE1vZGVcclxuICAgID8gY3NzIGBcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogJHt0aW1lbGluZUhlaWdodH1weDtcbiAgICAgICAgICAke2lzTGVmdFxyXG4gICAgICAgID8gYGZsb2F0OmxlZnQ7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7IGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtgXHJcbiAgICAgICAgOiBgZmxvYXQ6cmlnaHQ7IGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDsgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O2B9XG4gICAgICAgIGBcclxuICAgIDogY3NzIGBcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIGxlZnQ6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICR7aXNMZWZ0ICYmIGNzcyBgYCA/IGB0b3A6IDA7IGAgOiBgbWFyZ2luLXRvcDoke3dpZHRoIC0gNjB9cHg7YH1cbiAgICAgICAgYH1cbiAgYH1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFyZWEuc3R5bGVzLmpzLm1hcCJdfQ== */"));
var AreaBg = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "euzzuzq1"
} : {
  target: "euzzuzq1",
  label: "AreaBg"
})(process.env.NODE_ENV === "production" ? {
  name: "1b4920d",
  styles: "position:absolute;top:0;left:0;width:100%;height:100%"
} : {
  name: "1b4920d",
  styles: "position:absolute;top:0;left:0;width:100%;height:100%",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFyZWEuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCaUMiLCJmaWxlIjoiQXJlYS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuLy8gSW1wb3J0IGhlbHBlcnNcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmV4cG9ydCBjb25zdCBBcmVhRmlsZWQgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogJHsocHJvcHMpID0+IChwcm9wcy5pc0NsaWNrYWJsZSA/IFwiYXV0b1wiIDogXCJub25lXCIpfTtcbiAgY3Vyc29yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQ2xpY2thYmxlID8gXCJwb2ludGVyXCIgOiBcIm5vbmVcIil9O1xuICB6LWluZGV4OiAke0xheWVycy5BcmVhfTtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBwb3NpdGlvblgsIGhlaWdodCwgd2lkdGgsIHRpbWVsaW5lSGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlXHJcbiAgICA/IGNzcyBgXG4gICAgICAgICAgdG9wOiAke3Bvc2l0aW9uWH1weDtcbiAgICAgICAgICBsZWZ0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICAgIGhlaWdodDogJHt3aWR0aH1weDtcbiAgICAgICAgICB3aWR0aDogJHtoZWlnaHR9cHg7XG4gICAgICAgIGBcclxuICAgIDogY3NzIGBcbiAgICAgICAgICB0b3A6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgICAgbGVmdDogJHtwb3NpdGlvblh9cHg7XG4gICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBBcmVhQmcgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xyXG5leHBvcnQgY29uc3QgQXJlYUFubm90YXRpb24gPSBzdHlsZWQuZGl2IGBcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNMZWZ0ID0gZmFsc2UsIHdpZHRoLCB0aW1lbGluZUhlaWdodCB9KSA9PiBjc3MgYFxuICAgICR7IWlzVmVydGljYWxNb2RlXHJcbiAgICA/IGNzcyBgXG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgICAgJHtpc0xlZnRcclxuICAgICAgICA/IGBmbG9hdDpsZWZ0OyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4OyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7YFxyXG4gICAgICAgIDogYGZsb2F0OnJpZ2h0OyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtgfVxuICAgICAgICBgXHJcbiAgICA6IGNzcyBgXG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICBsZWZ0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAke2lzTGVmdCAmJiBjc3MgYGAgPyBgdG9wOiAwOyBgIDogYG1hcmdpbi10b3A6JHt3aWR0aCAtIDYwfXB4O2B9XG4gICAgICAgIGB9XG4gIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcmVhLnN0eWxlcy5qcy5tYXAiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
});
var AreaAnnotation = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "euzzuzq0"
} : {
  target: "euzzuzq0",
  label: "AreaAnnotation"
})("padding:4px 6px;font-size:15px;width:max-content;", function (_ref2) {
  var isVerticalMode = _ref2.isVerticalMode,
    _ref2$isLeft = _ref2.isLeft,
    isLeft = _ref2$isLeft === void 0 ? false : _ref2$isLeft,
    width = _ref2.width,
    timelineHeight = _ref2.timelineHeight;
  return css(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteralLoose(["\n    ", "\n  "])), !isVerticalMode ? css(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n          position: sticky;\n          top: ", "px;\n          ", "\n        "])), timelineHeight, isLeft ? "float:left; border-top-right-radius: 4px; border-bottom-right-radius:4px;" : "float:right; border-top-left-radius: 4px; border-bottom-left-radius: 4px;") : css(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n          position: sticky;\n          left: ", "px;\n          border-top-right-radius: 4px;\n          border-bottom-right-radius: 4px;\n          ", "\n        "])), timelineHeight, isLeft && css(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteralLoose([""]))) ? "top: 0; " : "margin-top:" + (width - 60) + "px;"));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFyZWEuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCeUMiLCJmaWxlIjoiQXJlYS5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuLy8gSW1wb3J0IGhlbHBlcnNcclxuaW1wb3J0IHsgTGF5ZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmV4cG9ydCBjb25zdCBBcmVhRmlsZWQgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogJHsocHJvcHMpID0+IChwcm9wcy5pc0NsaWNrYWJsZSA/IFwiYXV0b1wiIDogXCJub25lXCIpfTtcbiAgY3Vyc29yOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQ2xpY2thYmxlID8gXCJwb2ludGVyXCIgOiBcIm5vbmVcIil9O1xuICB6LWluZGV4OiAke0xheWVycy5BcmVhfTtcblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBwb3NpdGlvblgsIGhlaWdodCwgd2lkdGgsIHRpbWVsaW5lSGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlXHJcbiAgICA/IGNzcyBgXG4gICAgICAgICAgdG9wOiAke3Bvc2l0aW9uWH1weDtcbiAgICAgICAgICBsZWZ0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICAgIGhlaWdodDogJHt3aWR0aH1weDtcbiAgICAgICAgICB3aWR0aDogJHtoZWlnaHR9cHg7XG4gICAgICAgIGBcclxuICAgIDogY3NzIGBcbiAgICAgICAgICB0b3A6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgICAgbGVmdDogJHtwb3NpdGlvblh9cHg7XG4gICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBBcmVhQmcgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xyXG5leHBvcnQgY29uc3QgQXJlYUFubm90YXRpb24gPSBzdHlsZWQuZGl2IGBcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNMZWZ0ID0gZmFsc2UsIHdpZHRoLCB0aW1lbGluZUhlaWdodCB9KSA9PiBjc3MgYFxuICAgICR7IWlzVmVydGljYWxNb2RlXHJcbiAgICA/IGNzcyBgXG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6ICR7dGltZWxpbmVIZWlnaHR9cHg7XG4gICAgICAgICAgJHtpc0xlZnRcclxuICAgICAgICA/IGBmbG9hdDpsZWZ0OyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4OyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7YFxyXG4gICAgICAgIDogYGZsb2F0OnJpZ2h0OyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtgfVxuICAgICAgICBgXHJcbiAgICA6IGNzcyBgXG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICBsZWZ0OiAke3RpbWVsaW5lSGVpZ2h0fXB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAke2lzTGVmdCAmJiBjc3MgYGAgPyBgdG9wOiAwOyBgIDogYG1hcmdpbi10b3A6JHt3aWR0aCAtIDYwfXB4O2B9XG4gICAgICAgIGB9XG4gIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcmVhLnN0eWxlcy5qcy5tYXAiXX0= */"));

var _templateObject$7, _templateObject2$5, _templateObject3$5;
function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var GridContainer = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "eopf81a3"
} : {
  target: "eopf81a3",
  label: "GridContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "1jykxby",
  styles: "position:absolute;top:0;left:0;height:100%;width:100%;z-index:1"
} : {
  name: "1jykxby",
  styles: "position:absolute;top:0;left:0;height:100%;width:100%;z-index:1",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdyaWQuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV3QyIsImZpbGUiOiJHcmlkLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5gO1xyXG5leHBvcnQgY29uc3QgR3JpZFdyYXBwZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6ICR7KHsgaXNUaW1lbGluZSwgdGltZWxpbmVIZWlnaHQgfSkgPT4gaXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNTaWRlYmFyLCBpc1RpbWVsaW5lLCBzaWRlYmFyV2lkdGgsIHRpbWVsaW5lSGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgIHRvcDogJHtpc1NpZGViYXIgPyBzaWRlYmFyV2lkdGggOiAwfXB4O1xuICAgICAgbGVmdDogJHtpc1RpbWVsaW5lID8gdGltZWxpbmVIZWlnaHQgOiAwfXB4O1xuICAgIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgdG9wIH0pID0+IHRvcH1weDtcbiAgbGVmdDogJHsoeyBsZWZ0IH0pID0+IGxlZnR9cHg7XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fXB4O1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmlkLml0ZW19O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyaWQuaXRlbX07XG4gIHotaW5kZXg6IDE7XG5cbiAgJHsoeyBpc0RheU1vZGUsIGlzSG92ZXJIaWdobGlnaHQsIGlzRHJhZ092ZXIsIHRoZW1lIH0pID0+ICFpc0RheU1vZGUgJiZcclxuICAgIGlzSG92ZXJIaWdobGlnaHQgJiZcclxuICAgIGBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuZ3JpZC5oaWdobGlnaHR9O1xuICAgIH0gICBcblxuICAgICR7aXNEcmFnT3ZlciAmJiBgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ncmlkLmhpZ2hsaWdodH07YH1cbiAgICBgfVxuXG4gICR7KHsgaXNJdGVtQ2xpY2thYmxlIH0pID0+IGlzSXRlbUNsaWNrYWJsZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgfVxuYDtcclxuZXhwb3J0IGNvbnN0IEdyaWREaXZpZGVyID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmlkLmRpdmlkZXJ9O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRofXB4O1xuXG4gICR7KHsgaXNIb3ZlckhpZ2hsaWdodCwgdGhlbWUgfSkgPT4gaXNIb3ZlckhpZ2hsaWdodCAmJlxyXG4gICAgYFxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ncmlkLmhpZ2hsaWdodH07XG4gICAgfSAgIFxuXG5cbiAgICBgfVxuICAkeyh7IGlzRHJhZ092ZXIsIHRoZW1lIH0pID0+IGlzRHJhZ092ZXIgJiZcclxuICAgIGBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmdyaWQuaGlnaGxpZ2h0fTsgXG5cbiAgICBgfVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQsIHdpZHRoLCB0aGVtZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogJHtsZWZ0fXB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHt0aGVtZS5ncmlkLmRpdmlkZXJ9O1xuICAgIGB9XG5cbiAgJHsoeyBpc0l0ZW1DbGlja2FibGUgfSkgPT4gaXNJdGVtQ2xpY2thYmxlICYmXHJcbiAgICBjc3MgYFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1HcmlkLnN0eWxlcy5qcy5tYXAiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
});
var GridWrapper = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "eopf81a2"
} : {
  target: "eopf81a2",
  label: "GridWrapper"
})("position:relative;top:", function (_ref) {
  var isTimeline = _ref.isTimeline,
    timelineHeight = _ref.timelineHeight;
  return isTimeline ? timelineHeight : 0;
}, "px;left:", function (_ref2) {
  var isSidebar = _ref2.isSidebar,
    sidebarWidth = _ref2.sidebarWidth;
  return isSidebar ? sidebarWidth : 0;
}, "px;", function (_ref3) {
  var isVerticalMode = _ref3.isVerticalMode,
    isSidebar = _ref3.isSidebar,
    isTimeline = _ref3.isTimeline,
    sidebarWidth = _ref3.sidebarWidth,
    timelineHeight = _ref3.timelineHeight;
  return isVerticalMode && "\n     top: " + (isSidebar ? sidebarWidth : 0) + "px;\n      left: " + (isTimeline ? timelineHeight : 0) + "px;\n    ";
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdyaWQuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVzQyIsImZpbGUiOiJHcmlkLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWQvbWFjcm9cIjtcclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5gO1xyXG5leHBvcnQgY29uc3QgR3JpZFdyYXBwZXIgPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6ICR7KHsgaXNUaW1lbGluZSwgdGltZWxpbmVIZWlnaHQgfSkgPT4gaXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgbGVmdDogJHsoeyBpc1NpZGViYXIsIHNpZGViYXJXaWR0aCB9KSA9PiAoaXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMCl9cHg7XG5cbiAgJHsoeyBpc1ZlcnRpY2FsTW9kZSwgaXNTaWRlYmFyLCBpc1RpbWVsaW5lLCBzaWRlYmFyV2lkdGgsIHRpbWVsaW5lSGVpZ2h0IH0pID0+IGlzVmVydGljYWxNb2RlICYmXHJcbiAgICBgXG4gICAgIHRvcDogJHtpc1NpZGViYXIgPyBzaWRlYmFyV2lkdGggOiAwfXB4O1xuICAgICAgbGVmdDogJHtpc1RpbWVsaW5lID8gdGltZWxpbmVIZWlnaHQgOiAwfXB4O1xuICAgIGB9XG5gO1xyXG5leHBvcnQgY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQuZGl2IGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHsgdG9wIH0pID0+IHRvcH1weDtcbiAgbGVmdDogJHsoeyBsZWZ0IH0pID0+IGxlZnR9cHg7XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fXB4O1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmlkLml0ZW19O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmdyaWQuaXRlbX07XG4gIHotaW5kZXg6IDE7XG5cbiAgJHsoeyBpc0RheU1vZGUsIGlzSG92ZXJIaWdobGlnaHQsIGlzRHJhZ092ZXIsIHRoZW1lIH0pID0+ICFpc0RheU1vZGUgJiZcclxuICAgIGlzSG92ZXJIaWdobGlnaHQgJiZcclxuICAgIGBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuZ3JpZC5oaWdobGlnaHR9O1xuICAgIH0gICBcblxuICAgICR7aXNEcmFnT3ZlciAmJiBgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ncmlkLmhpZ2hsaWdodH07YH1cbiAgICBgfVxuXG4gICR7KHsgaXNJdGVtQ2xpY2thYmxlIH0pID0+IGlzSXRlbUNsaWNrYWJsZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgfVxuYDtcclxuZXhwb3J0IGNvbnN0IEdyaWREaXZpZGVyID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmlkLmRpdmlkZXJ9O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRofXB4O1xuXG4gICR7KHsgaXNIb3ZlckhpZ2hsaWdodCwgdGhlbWUgfSkgPT4gaXNIb3ZlckhpZ2hsaWdodCAmJlxyXG4gICAgYFxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ncmlkLmhpZ2hsaWdodH07XG4gICAgfSAgIFxuXG5cbiAgICBgfVxuICAkeyh7IGlzRHJhZ092ZXIsIHRoZW1lIH0pID0+IGlzRHJhZ092ZXIgJiZcclxuICAgIGBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmdyaWQuaGlnaGxpZ2h0fTsgXG5cbiAgICBgfVxuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGxlZnQsIHdpZHRoLCB0aGVtZSB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIHRvcDogJHtsZWZ0fXB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHt0aGVtZS5ncmlkLmRpdmlkZXJ9O1xuICAgIGB9XG5cbiAgJHsoeyBpc0l0ZW1DbGlja2FibGUgfSkgPT4gaXNJdGVtQ2xpY2thYmxlICYmXHJcbiAgICBjc3MgYFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGB9XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1HcmlkLnN0eWxlcy5qcy5tYXAiXX0= */"));
var GridItem = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "eopf81a1"
} : {
  target: "eopf81a1",
  label: "GridItem"
})("position:absolute;top:", function (_ref4) {
  var top = _ref4.top;
  return top;
}, "px;left:", function (_ref5) {
  var left = _ref5.left;
  return left;
}, "px;height:", function (_ref6) {
  var height = _ref6.height;
  return height;
}, "px;width:", function (_ref7) {
  var width = _ref7.width;
  return width;
}, "px;border:1px solid transparent;border-right-color:", function (_ref8) {
  var theme = _ref8.theme;
  return theme.grid.item;
}, ";border-bottom-color:", function (_ref9) {
  var theme = _ref9.theme;
  return theme.grid.item;
}, ";z-index:1;", function (_ref10) {
  var isDayMode = _ref10.isDayMode,
    isHoverHighlight = _ref10.isHoverHighlight,
    isDragOver = _ref10.isDragOver,
    theme = _ref10.theme;
  return !isDayMode && isHoverHighlight && "\n    &:hover {\n      border: 1px solid " + theme.grid.highlight + ";\n    }   \n\n    " + (isDragOver && "border: 1px solid " + theme.grid.highlight + ";") + "\n    ";
}, " ", function (_ref11) {
  var isItemClickable = _ref11.isItemClickable;
  return isItemClickable && css(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n      cursor: pointer;\n    "])));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdyaWQuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCbUMiLCJmaWxlIjoiR3JpZC5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkL21hY3JvXCI7XHJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuYDtcclxuZXhwb3J0IGNvbnN0IEdyaWRXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAkeyh7IGlzVGltZWxpbmUsIHRpbWVsaW5lSGVpZ2h0IH0pID0+IGlzVGltZWxpbmUgPyB0aW1lbGluZUhlaWdodCA6IDB9cHg7XG4gIGxlZnQ6ICR7KHsgaXNTaWRlYmFyLCBzaWRlYmFyV2lkdGggfSkgPT4gKGlzU2lkZWJhciA/IHNpZGViYXJXaWR0aCA6IDApfXB4O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGlzU2lkZWJhciwgaXNUaW1lbGluZSwgc2lkZWJhcldpZHRoLCB0aW1lbGluZUhlaWdodCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICB0b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICBgfVxuYDtcclxuZXhwb3J0IGNvbnN0IEdyaWRJdGVtID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAkeyh7IHRvcCB9KSA9PiB0b3B9cHg7XG4gIGxlZnQ6ICR7KHsgbGVmdCB9KSA9PiBsZWZ0fXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGh9cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZ3JpZC5pdGVtfTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmlkLml0ZW19O1xuICB6LWluZGV4OiAxO1xuXG4gICR7KHsgaXNEYXlNb2RlLCBpc0hvdmVySGlnaGxpZ2h0LCBpc0RyYWdPdmVyLCB0aGVtZSB9KSA9PiAhaXNEYXlNb2RlICYmXHJcbiAgICBpc0hvdmVySGlnaGxpZ2h0ICYmXHJcbiAgICBgXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmdyaWQuaGlnaGxpZ2h0fTtcbiAgICB9ICAgXG5cbiAgICAke2lzRHJhZ092ZXIgJiYgYGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuZ3JpZC5oaWdobGlnaHR9O2B9XG4gICAgYH1cblxuICAkeyh7IGlzSXRlbUNsaWNrYWJsZSB9KSA9PiBpc0l0ZW1DbGlja2FibGUgJiZcclxuICAgIGNzcyBgXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBHcmlkRGl2aWRlciA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogJHsoeyBsZWZ0IH0pID0+IGxlZnR9cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZ3JpZC5kaXZpZGVyfTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcblxuICAkeyh7IGlzSG92ZXJIaWdobGlnaHQsIHRoZW1lIH0pID0+IGlzSG92ZXJIaWdobGlnaHQgJiZcclxuICAgIGBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuZ3JpZC5oaWdobGlnaHR9O1xuICAgIH0gICBcblxuXG4gICAgYH1cbiAgJHsoeyBpc0RyYWdPdmVyLCB0aGVtZSB9KSA9PiBpc0RyYWdPdmVyICYmXHJcbiAgICBgXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ncmlkLmhpZ2hsaWdodH07IFxuXG4gICAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0LCB3aWR0aCwgdGhlbWUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6ICR7bGVmdH1weDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogJHt3aWR0aH1weDtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7dGhlbWUuZ3JpZC5kaXZpZGVyfTtcbiAgICBgfVxuXG4gICR7KHsgaXNJdGVtQ2xpY2thYmxlIH0pID0+IGlzSXRlbUNsaWNrYWJsZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgfVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R3JpZC5zdHlsZXMuanMubWFwIl19 */"));
var GridDivider = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "eopf81a0"
} : {
  target: "eopf81a0",
  label: "GridDivider"
})("position:absolute;top:0;left:", function (_ref12) {
  var left = _ref12.left;
  return left;
}, "px;border:1px solid transparent;border-right-color:", function (_ref13) {
  var theme = _ref13.theme;
  return theme.grid.divider;
}, ";height:100%;width:", function (_ref14) {
  var width = _ref14.width;
  return width;
}, "px;", function (_ref15) {
  var isHoverHighlight = _ref15.isHoverHighlight,
    theme = _ref15.theme;
  return isHoverHighlight && "\n    &:hover {\n      border: 1px solid " + theme.grid.highlight + ";\n    }   \n\n\n    ";
}, " ", function (_ref16) {
  var isDragOver = _ref16.isDragOver,
    theme = _ref16.theme;
  return isDragOver && "\n    border: 1px solid " + theme.grid.highlight + "; \n\n    ";
}, " ", function (_ref17) {
  var isVerticalMode = _ref17.isVerticalMode,
    left = _ref17.left,
    width = _ref17.width,
    theme = _ref17.theme;
  return isVerticalMode && css(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteralLoose(["\n      top: ", "px;\n      left: 0;\n      width: 100%;\n      height: ", "px;\n      border-bottom-color: ", ";\n    "])), left, width, theme.grid.divider);
}, " ", function (_ref18) {
  var isItemClickable = _ref18.isItemClickable;
  return isItemClickable && css(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteralLoose(["\n      cursor: pointer;\n    "])));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdyaWQuc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDc0MiLCJmaWxlIjoiR3JpZC5zdHlsZXMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkL21hY3JvXCI7XHJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuYDtcclxuZXhwb3J0IGNvbnN0IEdyaWRXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAkeyh7IGlzVGltZWxpbmUsIHRpbWVsaW5lSGVpZ2h0IH0pID0+IGlzVGltZWxpbmUgPyB0aW1lbGluZUhlaWdodCA6IDB9cHg7XG4gIGxlZnQ6ICR7KHsgaXNTaWRlYmFyLCBzaWRlYmFyV2lkdGggfSkgPT4gKGlzU2lkZWJhciA/IHNpZGViYXJXaWR0aCA6IDApfXB4O1xuXG4gICR7KHsgaXNWZXJ0aWNhbE1vZGUsIGlzU2lkZWJhciwgaXNUaW1lbGluZSwgc2lkZWJhcldpZHRoLCB0aW1lbGluZUhlaWdodCB9KSA9PiBpc1ZlcnRpY2FsTW9kZSAmJlxyXG4gICAgYFxuICAgICB0b3A6ICR7aXNTaWRlYmFyID8gc2lkZWJhcldpZHRoIDogMH1weDtcbiAgICAgIGxlZnQ6ICR7aXNUaW1lbGluZSA/IHRpbWVsaW5lSGVpZ2h0IDogMH1weDtcbiAgICBgfVxuYDtcclxuZXhwb3J0IGNvbnN0IEdyaWRJdGVtID0gc3R5bGVkLmRpdiBgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAkeyh7IHRvcCB9KSA9PiB0b3B9cHg7XG4gIGxlZnQ6ICR7KHsgbGVmdCB9KSA9PiBsZWZ0fXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGh9cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZ3JpZC5pdGVtfTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmlkLml0ZW19O1xuICB6LWluZGV4OiAxO1xuXG4gICR7KHsgaXNEYXlNb2RlLCBpc0hvdmVySGlnaGxpZ2h0LCBpc0RyYWdPdmVyLCB0aGVtZSB9KSA9PiAhaXNEYXlNb2RlICYmXHJcbiAgICBpc0hvdmVySGlnaGxpZ2h0ICYmXHJcbiAgICBgXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmdyaWQuaGlnaGxpZ2h0fTtcbiAgICB9ICAgXG5cbiAgICAke2lzRHJhZ092ZXIgJiYgYGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuZ3JpZC5oaWdobGlnaHR9O2B9XG4gICAgYH1cblxuICAkeyh7IGlzSXRlbUNsaWNrYWJsZSB9KSA9PiBpc0l0ZW1DbGlja2FibGUgJiZcclxuICAgIGNzcyBgXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYH1cbmA7XHJcbmV4cG9ydCBjb25zdCBHcmlkRGl2aWRlciA9IHN0eWxlZC5kaXYgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogJHsoeyBsZWZ0IH0pID0+IGxlZnR9cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZ3JpZC5kaXZpZGVyfTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcblxuICAkeyh7IGlzSG92ZXJIaWdobGlnaHQsIHRoZW1lIH0pID0+IGlzSG92ZXJIaWdobGlnaHQgJiZcclxuICAgIGBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuZ3JpZC5oaWdobGlnaHR9O1xuICAgIH0gICBcblxuXG4gICAgYH1cbiAgJHsoeyBpc0RyYWdPdmVyLCB0aGVtZSB9KSA9PiBpc0RyYWdPdmVyICYmXHJcbiAgICBgXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ncmlkLmhpZ2hsaWdodH07IFxuXG4gICAgYH1cblxuICAkeyh7IGlzVmVydGljYWxNb2RlLCBsZWZ0LCB3aWR0aCwgdGhlbWUgfSkgPT4gaXNWZXJ0aWNhbE1vZGUgJiZcclxuICAgIGNzcyBgXG4gICAgICB0b3A6ICR7bGVmdH1weDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogJHt3aWR0aH1weDtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7dGhlbWUuZ3JpZC5kaXZpZGVyfTtcbiAgICBgfVxuXG4gICR7KHsgaXNJdGVtQ2xpY2thYmxlIH0pID0+IGlzSXRlbUNsaWNrYWJsZSAmJlxyXG4gICAgY3NzIGBcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgfVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R3JpZC5zdHlsZXMuanMubWFwIl19 */"));

var theme = {
  primary: {
    600: "#1a202c",
    900: "#171923"
  },
  grey: {
    300: "#d1d1d1"
  },
  white: "#fff",
  teal: {
    100: "#38B2AC"
  },
  green: {
    200: "#389493",
    300: "#2C7A7B"
  },
  loader: {
    teal: "#5DDADB",
    purple: "#3437A2",
    pink: "#F78EB6",
    bg: "#171923db"
  },
  scrollbar: {
    border: "#ffffff",
    thumb: {
      bg: "#e1e1e1"
    }
  },
  gradient: {
    blue: {
      300: "#002eb3",
      600: "#002360",
      900: "#051937"
    }
  },
  text: {
    grey: {
      300: "#a0aec0",
      500: "#718096"
    }
  },
  timeline: {
    divider: {
      bg: "#718096"
    }
  },
  grid: {
    item: "#7180961a",
    divider: "#7180961a",
    highlight: "#38B2AC"
  }
};

function useLayout(_ref) {
  var _scrollBoxRef$current;
  var isVerticalMode = _ref.isVerticalMode,
    isToday = _ref.isToday,
    isInitialScrollToNow = _ref.isInitialScrollToNow,
    initialScrollPositions = _ref.initialScrollPositions,
    height = _ref.height,
    width = _ref.width,
    channelsNumber = _ref.channelsNumber,
    startDate = _ref.startDate,
    endDate = _ref.endDate,
    hourWidth = _ref.hourWidth,
    sidebarWidth = _ref.sidebarWidth,
    hoursInDays = _ref.hoursInDays;
  var useIsomorphicEffect = useIsomorphicLayoutEffect();
  var containerRef = React__default.useRef(null);
  var scrollBoxRef = React__default.useRef(null);
  //-------- State --------
  var _React$useState = React__default.useState(0),
    scrollY = _React$useState[0],
    setScrollY = _React$useState[1];
  var _React$useState2 = React__default.useState(0),
    scrollX = _React$useState2[0],
    setScrollX = _React$useState2[1];
  var _React$useState3 = React__default.useState(width),
    layoutWidth = _React$useState3[0],
    setLayoutWidth = _React$useState3[1];
  var _React$useState4 = React__default.useState(height),
    layoutHeight = _React$useState4[0],
    setLayoutHeight = _React$useState4[1];
  //-------- Variables --------
  var scrollBoxInnerHeight = scrollBoxRef == null || (_scrollBoxRef$current = scrollBoxRef.current) == null ? void 0 : _scrollBoxRef$current.scrollHeight;
  var initialScrollPositionsSerialized = JSON.stringify(initialScrollPositions);
  // -------- Handlers --------
  var handleScrollDebounced = useDebouncedCallback(function (value) {
    setScrollY(value.y);
    setScrollX(value.x);
  }, DEBOUNCE_WAIT, {
    maxWait: DEBOUNCE_WAIT_MAX
  });
  var handleOnScroll = React__default.useCallback(function (e) {
    handleScrollDebounced({
      y: e.target.scrollTop,
      x: e.target.scrollLeft
    });
  }, [handleScrollDebounced]);
  var hoursInDaysSerialized = JSON.stringify(hoursInDays);
  var areHoursInDays = React__default.useMemo(function () {
    return hoursInDays.length > 0;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [hoursInDaysSerialized]);
  var handleOnScrollToNow = React__default.useCallback(function () {
    if (scrollBoxRef != null && scrollBoxRef.current && isToday) {
      var _containerRef$current;
      var clientWidth = width != null ? width : (_containerRef$current = containerRef.current) == null ? void 0 : _containerRef$current.clientWidth;
      var date = new Date(startDate);
      var positionX = getPositionX(startOfDay(date), getNewDateTz(), startDate, endDate, hourWidth);
      if (areHoursInDays) {
        positionX = getHoursInDaysPositionX({
          hoursInDays: hoursInDays,
          hourWidth: hourWidth,
          sidebarWidth: sidebarWidth
        });
      }
      var scrollNow = positionX - clientWidth / 2 + sidebarWidth;
      if (isVerticalMode) {
        scrollBoxRef.current.scrollTop = scrollNow + hourWidth;
      } else {
        scrollBoxRef.current.scrollLeft = scrollNow;
      }
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isVerticalMode, isToday, areHoursInDays, width, hourWidth, sidebarWidth, startDate, endDate]);
  var handleScrollToInitialPositions = React__default.useCallback(function () {
    var isInitialScrollPosition = Object.keys(initialScrollPositions).length;
    if (scrollBoxRef != null && scrollBoxRef.current && isInitialScrollPosition) {
      var _initialScrollPositio = initialScrollPositions.top,
        top = _initialScrollPositio === void 0 ? 0 : _initialScrollPositio,
        _initialScrollPositio2 = initialScrollPositions.left,
        left = _initialScrollPositio2 === void 0 ? 0 : _initialScrollPositio2;
      scrollBoxRef.current.scrollTo({
        behavior: "smooth",
        top: top,
        left: left
      });
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [initialScrollPositionsSerialized, scrollBoxInnerHeight]);
  var handleOnScrollTop = React__default.useCallback(function (value) {
    if (value === void 0) {
      value = hourWidth;
    }
    if (scrollBoxRef != null && scrollBoxRef.current) {
      var top = scrollBoxRef.current.scrollTop + value;
      scrollBoxRef.current.scrollTop = top;
    }
  }, [hourWidth]);
  var handleOnScrollRight = React__default.useCallback(function (value) {
    if (value === void 0) {
      value = hourWidth;
    }
    if (scrollBoxRef != null && scrollBoxRef.current) {
      var right = scrollBoxRef.current.scrollLeft + value;
      scrollBoxRef.current.scrollLeft = right;
    }
  }, [hourWidth]);
  var handleOnScrollLeft = React__default.useCallback(function (value) {
    if (value === void 0) {
      value = hourWidth;
    }
    if (scrollBoxRef != null && scrollBoxRef.current) {
      var left = scrollBoxRef.current.scrollLeft - value;
      scrollBoxRef.current.scrollLeft = left;
    }
  }, [hourWidth]);
  var handleResizeDebounced = useDebouncedCallback(function () {
    if (containerRef != null && containerRef.current && !width) {
      var container = containerRef.current;
      var clientWidth = container.clientWidth;
      setLayoutWidth(clientWidth);
    }
  }, DEBOUNCE_WAIT * 4, {
    maxWait: DEBOUNCE_WAIT_MAX * 4
  });
  var handleCheckIsLayoutBottom = React__default.useCallback(function (offset) {
    if (offset === void 0) {
      offset = 0;
    }
    if (scrollBoxRef != null && scrollBoxRef.current) {
      if (isVerticalMode) {
        // Check if the scroll is at the bottom in scrollBox in vertical mode
        var _scrollBoxRef$current2 = scrollBoxRef.current,
          scrollWidth = _scrollBoxRef$current2.scrollWidth,
          scrollLeft = _scrollBoxRef$current2.scrollLeft,
          clientWidth = _scrollBoxRef$current2.clientWidth;
        if (scrollLeft === 0) return false;
        return scrollWidth - scrollLeft - offset <= clientWidth;
      } else {
        // Check if the scroll is at the bottom in scrollBox
        var _scrollBoxRef$current3 = scrollBoxRef.current,
          scrollHeight = _scrollBoxRef$current3.scrollHeight,
          scrollTop = _scrollBoxRef$current3.scrollTop,
          clientHeight = _scrollBoxRef$current3.clientHeight;
        if (scrollTop === 0) return false;
        return scrollHeight - scrollTop - offset <= clientHeight;
      }
    }
    return false;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isVerticalMode, scrollX, scrollY, channelsNumber]);
  var handleCheckIsLayoutRight = React__default.useCallback(function (offset) {
    if (offset === void 0) {
      offset = 0;
    }
    if (scrollBoxRef != null && scrollBoxRef.current) {
      if (isVerticalMode) {
        // Check if the scroll is at the right in scrollBox in vertical mode
        var _scrollBoxRef$current4 = scrollBoxRef.current,
          scrollHeight = _scrollBoxRef$current4.scrollHeight,
          scrollTop = _scrollBoxRef$current4.scrollTop,
          clientHeight = _scrollBoxRef$current4.clientHeight;
        if (scrollTop === 0) return false;
        return scrollHeight - scrollTop - offset <= clientHeight;
      } else {
        // Check if the scroll is at the right in scrollBox
        var _scrollBoxRef$current5 = scrollBoxRef.current,
          scrollWidth = _scrollBoxRef$current5.scrollWidth,
          scrollLeft = _scrollBoxRef$current5.scrollLeft,
          clientWidth = _scrollBoxRef$current5.clientWidth;
        if (scrollLeft === 0) return false;
        return scrollWidth - scrollLeft - offset <= clientWidth;
      }
    }
    return false;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [scrollX, scrollY, channelsNumber]);
  // -------- Effects --------
  useIsomorphicEffect(function () {
    if (containerRef != null && containerRef.current) {
      var container = containerRef.current;
      if (!width) {
        var clientWidth = container.clientWidth;
        setLayoutWidth(clientWidth);
      }
      if (!height) {
        var clientHeight = container.clientHeight;
        setLayoutHeight(clientHeight);
      }
    }
  }, [height, width, startDate]);
  useIsomorphicEffect(function () {
    var isInitialScrollPosition = Object.keys(initialScrollPositions).length;
    if (scrollBoxRef != null && scrollBoxRef.current) {
      if (isInitialScrollPosition) {
        handleScrollToInitialPositions();
      } else if (isInitialScrollToNow) {
        handleOnScrollToNow();
      }
    }
  }, [isToday, isInitialScrollToNow, initialScrollPositionsSerialized]);
  useIsomorphicEffect(function () {
    window.addEventListener("resize", handleResizeDebounced);
    return function () {
      window.removeEventListener("resize", handleResizeDebounced);
    };
  }, [width]);
  return {
    containerRef: containerRef,
    scrollBoxRef: scrollBoxRef,
    scrollX: scrollX,
    scrollY: scrollY,
    layoutWidth: layoutWidth,
    layoutHeight: layoutHeight,
    isLayoutBottom: handleCheckIsLayoutBottom,
    isLayoutRight: handleCheckIsLayoutRight,
    onScroll: handleOnScroll,
    onScrollToNow: handleOnScrollToNow,
    onScrollTop: handleOnScrollTop,
    onScrollLeft: handleOnScrollLeft,
    onScrollRight: handleOnScrollRight
  };
}

var _excluded$2 = ["isToday", "currentDate"],
  _excluded2 = ["hourWidth", "dayWidth"],
  _excluded3 = ["isLayoutBottom", "isLayoutRight", "containerRef", "scrollBoxRef"];
var defaultStartDateTime = /*#__PURE__*/formatTime( /*#__PURE__*/startOfToday());
var defaultMode = {
  type: "day",
  style: "default"
};
var defaultTimezone = {
  enabled: false,
  zone: "",
  mode: "formatInTimeZone"
};
var defaultOverlap = {
  enabled: false,
  mode: "stack",
  layerOverlapLevel: 0.4
};
var defaultGrid = {
  enabled: false,
  hoverHighlight: false
};
var defaultDnd = {
  enabled: false,
  mode: "row"
};
function useEpg(props) {
  var _props$isVerticalMode = props.isVerticalMode,
    isVerticalMode = _props$isVerticalMode === void 0 ? false : _props$isVerticalMode,
    _props$isRTL = props.isRTL,
    isRTL = _props$isRTL === void 0 ? false : _props$isRTL,
    _props$isResize = props.isResize,
    isResize = _props$isResize === void 0 ? false : _props$isResize,
    _props$isBaseTimeForm = props.isBaseTimeFormat,
    isBaseTimeFormat = _props$isBaseTimeForm === void 0 ? false : _props$isBaseTimeForm,
    _props$isSidebar = props.isSidebar,
    isSidebar = _props$isSidebar === void 0 ? true : _props$isSidebar,
    _props$isTimeline = props.isTimeline,
    isTimeline = _props$isTimeline === void 0 ? true : _props$isTimeline,
    _props$isLine = props.isLine,
    isLine = _props$isLine === void 0 ? true : _props$isLine,
    _props$isCurrentTime = props.isCurrentTime,
    isCurrentTime = _props$isCurrentTime === void 0 ? false : _props$isCurrentTime,
    _props$isInitialScrol = props.isInitialScrollToNow,
    isInitialScrollToNow = _props$isInitialScrol === void 0 ? true : _props$isInitialScrol;
  var width = props.width,
    height = props.height;
  var channelsEpg = props.channels,
    epg = props.epg;
  var _props$startDate = props.startDate,
    startDateInput = _props$startDate === void 0 ? defaultStartDateTime : _props$startDate,
    _props$endDate = props.endDate,
    endDateInput = _props$endDate === void 0 ? "" : _props$endDate,
    _props$hoursInDays = props.hoursInDays,
    customHoursInDays = _props$hoursInDays === void 0 ? [] : _props$hoursInDays;
  var _props$initialScrollP = props.initialScrollPositions,
    initialScrollPositions = _props$initialScrollP === void 0 ? {} : _props$initialScrollP,
    _props$liveRefreshTim = props.liveRefreshTime,
    liveRefreshTime = _props$liveRefreshTim === void 0 ? LIVE_REFRESH_TIME : _props$liveRefreshTim,
    _props$timelineDivide = props.timelineDividers,
    timelineDividers = _props$timelineDivide === void 0 ? TIMELINE_DIVIDERS : _props$timelineDivide,
    snap = props.snap,
    _props$mode = props.mode,
    customMode = _props$mode === void 0 ? defaultMode : _props$mode,
    _props$overlap = props.overlap,
    customOverlap = _props$overlap === void 0 ? defaultOverlap : _props$overlap,
    _props$timezone = props.timezone,
    customTimezone = _props$timezone === void 0 ? defaultTimezone : _props$timezone,
    _props$areas = props.areas,
    areas = _props$areas === void 0 ? [] : _props$areas,
    _props$grid = props.grid,
    grid = _props$grid === void 0 ? defaultGrid : _props$grid,
    _props$dnd = props.dnd,
    dnd = _props$dnd === void 0 ? defaultDnd : _props$dnd,
    customTheme = props.theme,
    globalStyles = props.globalStyles;
  var _props$dayWidth = props.dayWidth,
    customDayWidth = _props$dayWidth === void 0 ? DAY_WIDTH : _props$dayWidth,
    _props$sidebarWidth = props.sidebarWidth,
    sidebarWidth = _props$sidebarWidth === void 0 ? SIDEBAR_WIDTH : _props$sidebarWidth,
    _props$timelineHeight = props.timelineHeight,
    customTimelineHeight = _props$timelineHeight === void 0 ? TIMELINE_HEIGHT : _props$timelineHeight,
    _props$itemHeight = props.itemHeight,
    itemHeight = _props$itemHeight === void 0 ? ITEM_HEIGHT : _props$itemHeight,
    _props$itemOverscan = props.itemOverscan,
    itemOverscan = _props$itemOverscan === void 0 ? ITEM_OVERSCAN : _props$itemOverscan;
  var _props$channelMapKey = props.channelMapKey,
    channelMapKey = _props$channelMapKey === void 0 ? "uuid" : _props$channelMapKey,
    _props$programChannel = props.programChannelMapKey,
    programChannelMapKey = _props$programChannel === void 0 ? "channelUuid" : _props$programChannel;
  var timezone = _extends({}, defaultTimezone, customTimezone);
  var mode = _extends({}, defaultMode, customMode);
  var overlap = _extends({}, defaultOverlap, customOverlap);
  var isOverlapEnabled = overlap.enabled;
  var isMultirowsDnd = dnd.mode === "multi-rows";
  // Get converted start and end dates
  var _getTimeRangeDates = getTimeRangeDates(startDateInput, endDateInput),
    startDate = _getTimeRangeDates.startDate,
    endDate = _getTimeRangeDates.endDate;
  // Get hours in days
  var serializedHoursInDays = JSON.stringify(customHoursInDays);
  var hoursInDays = React__default.useMemo(function () {
    return getNumberOfHoursInDays({
      customHoursInDays: customHoursInDays,
      startDate: startDate
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [serializedHoursInDays]);
  // Get days resources eg. number of days, dates and hours
  var _React$useMemo = React__default.useMemo(function () {
      return getDayResources({
        startDate: startDate,
        endDate: endDate,
        modeType: mode.type
      });
    }, [startDate, endDate, mode.type]),
    isToday = _React$useMemo.isToday,
    currentDate = _React$useMemo.currentDate,
    daysResources = _objectWithoutPropertiesLoose(_React$useMemo, _excluded$2);
  // Get day and hour width of the day
  var _React$useMemo2 = React__default.useMemo(function () {
      return getDayWidthResources({
        dayWidth: customDayWidth,
        startDate: startDate,
        endDate: endDate,
        hoursInDays: hoursInDays,
        modeType: mode.type
      });
    }, [customDayWidth, startDate, endDate, hoursInDays, mode.type]),
    hourWidth = _React$useMemo2.hourWidth,
    dayWidth = _React$useMemo2.dayWidth,
    dayWidthResourcesProps = _objectWithoutPropertiesLoose(_React$useMemo2, _excluded2);
  // -------- State --------
  var _React$useReducer = React__default.useReducer(function (x) {
      return x + 1;
    }, 0),
    update = _React$useReducer[0],
    setForceUpdate = _React$useReducer[1];
  var _React$useReducer2 = React__default.useReducer(function (x) {
      return x + 1;
    }, 0),
    updateChannels = _React$useReducer2[0],
    setForceChannelsUpdate = _React$useReducer2[1];
  var _React$useState = React__default.useState({
      index: -1,
      uuid: ""
    }),
    dndChannelUuid = _React$useState[0],
    setDndChannelUuid = _React$useState[1];
  var _React$useState2 = React__default.useState(function () {
      return 0;
    }),
    newOverlaps = _React$useState2[0],
    setNewOverlaps = _React$useState2[1];
  var _React$useState3 = React__default.useState({}),
    overlaps = _React$useState3[0],
    setOverlaps = _React$useState3[1];
  var _React$useState4 = React__default.useState({}),
    channelOverlapsCount = _React$useState4[0],
    setChannelOverlapsCount = _React$useState4[1];
  var timezoneSerialized = JSON.stringify(timezone);
  // Set base timezone functions
  React__default.useMemo(function () {
    if (timezone.enabled) {
      setTimezoneOptionsCache(timezone);
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [timezoneSerialized]);
  React__default.useEffect(function () {
    setForceUpdate();
    setDndChannelUuid({
      index: -1,
      uuid: ""
    });
  }, [isVerticalMode]);
  var _useLayout = useLayout({
      isVerticalMode: isVerticalMode,
      isToday: isToday,
      isInitialScrollToNow: isInitialScrollToNow,
      initialScrollPositions: initialScrollPositions,
      startDate: startDate,
      endDate: endDate,
      sidebarWidth: sidebarWidth,
      width: width,
      height: height,
      hourWidth: hourWidth,
      currentDate: currentDate,
      hoursInDays: hoursInDays,
      channelsNumber: channelsEpg.length
    }),
    isLayoutBottom = _useLayout.isLayoutBottom,
    isLayoutRight = _useLayout.isLayoutRight,
    containerRef = _useLayout.containerRef,
    scrollBoxRef = _useLayout.scrollBoxRef,
    layoutProps = _objectWithoutPropertiesLoose(_useLayout, _excluded3);
  React__default.useEffect(function () {
    return function () {
      resetLayoutScreenCloneElements();
    };
  }, []);
  var scrollX = layoutProps.scrollX,
    scrollY = layoutProps.scrollY,
    layoutWidth = layoutProps.layoutWidth,
    layoutHeight = layoutProps.layoutHeight;
  var onScroll = layoutProps.onScroll,
    onScrollToNow = layoutProps.onScrollToNow,
    onScrollTop = layoutProps.onScrollTop,
    onScrollLeft = layoutProps.onScrollLeft,
    onScrollRight = layoutProps.onScrollRight;
  //-------- Variables --------
  var timelineHeight = getTimelineHeight(customTimelineHeight, mode);
  var channelsEpgSerialized = React__default.useMemo(function () {
    return JSON.stringify(channelsEpg);
  }, [channelsEpg]);
  var channelOverlapsCountSerialized = React__default.useMemo(function () {
    return channelOverlapsCount;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [JSON.stringify(channelOverlapsCount)]);
  var channels = React__default.useMemo(function () {
    // Convert channels
    return getConvertedChannels(isOverlapEnabled, overlap.mode, overlap.layerOverlapLevel, channelsEpg, itemHeight, channelMapKey, channelOverlapsCount);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isOverlapEnabled, overlap.mode, overlap.layerOverlapLevel, channelsEpgSerialized, channelOverlapsCountSerialized, itemHeight, channelMapKey, newOverlaps, updateChannels]);
  var startDateTime = formatTime(startDate);
  var endDateTime = formatTime(endDate);
  var channelsSerialized = React__default.useMemo(function () {
    return JSON.stringify(channels);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [channels]);
  var overlapsSerialized = React__default.useMemo(function () {
    return overlaps;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [JSON.stringify(overlaps)]);
  var _React$useMemo3 = React__default.useMemo(function () {
      var data = getConvertedPrograms({
        isVerticalMode: isVerticalMode,
        isOverlapEnabled: isOverlapEnabled,
        programChannelMapKey: programChannelMapKey,
        data: epg,
        channels: channels,
        startDate: startDateTime,
        endDate: endDateTime,
        hoursInDays: hoursInDays,
        itemHeight: itemHeight,
        hourWidth: hourWidth
      });
      if (isOverlapEnabled) {
        var _overlaps = overlaps;
        var _checkOverlaps = checkOverlaps(isMultirowsDnd, isVerticalMode, dndChannelUuid, _overlaps, data),
          itemsOverlaps = _checkOverlaps.overlaps,
          channelOverlaps = _checkOverlaps.channelOverlaps;
        setChannelOverlapsCount(_extends({}, channelOverlapsCount, channelOverlaps));
        setNewOverlaps(function (prev) {
          return prev + 1;
        });
        setOverlaps(itemsOverlaps);
        return {
          programs: data,
          programOverlaps: itemsOverlaps
        };
      }
      return {
        programs: data,
        programOverlaps: {}
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMultirowsDnd, isOverlapEnabled, isVerticalMode, epg, channelsSerialized, overlapsSerialized, startDateTime, endDateTime, itemHeight, hourWidth, hoursInDays, programChannelMapKey, timezoneSerialized, update]),
    programs = _React$useMemo3.programs,
    programOverlaps = _React$useMemo3.programOverlaps;
  var gridItems = React__default.useMemo(function () {
    if (!grid.enabled) return [];
    return getConvertedGridItems({
      isVerticalMode: isVerticalMode,
      channels: channels,
      dayWidth: dayWidth,
      hourWidth: hourWidth,
      timelineHeight: timelineHeight,
      sidebarWidth: sidebarWidth,
      mode: mode,
      dayWidthResources: dayWidthResourcesProps,
      daysResources: daysResources
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [grid.enabled, channelsSerialized, mode.type, dayWidthResourcesProps.numberOfHoursInDay, dayWidthResourcesProps.numberOfMonths, daysResources.numberOfDays, dayWidth, hourWidth, sidebarWidth, timelineHeight, isVerticalMode]);
  var theme$1 = _extends({}, theme, customTheme);
  // -------- Handlers --------
  var isProgramVisible = React__default.useCallback(function (position, overlapsCount) {
    return getItemVisibility({
      isVerticalMode: isVerticalMode,
      itemOverscan: itemOverscan,
      overlapsCount: overlapsCount,
      position: position,
      scrollY: scrollY,
      scrollX: scrollX,
      containerHeight: layoutHeight,
      containerWidth: layoutWidth
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isVerticalMode, itemOverscan, layoutHeight, layoutWidth, scrollY, scrollX]);
  var isChannelVisible = React__default.useCallback(function (position) {
    return getSidebarItemVisibility({
      isVerticalMode: isVerticalMode,
      itemOverscan: itemOverscan,
      position: position,
      scrollX: scrollX,
      scrollY: scrollY,
      containerHeight: layoutHeight,
      containerWidth: layoutWidth
    });
  }, [isVerticalMode, itemOverscan, scrollY, scrollX, layoutHeight, layoutWidth]);
  var isTimelineVisible = React__default.useCallback(function (position) {
    return getTimelineItemVisibility({
      position: position,
      scrollY: scrollY,
      scrollX: scrollX,
      containerHeight: layoutHeight,
      containerWidth: layoutWidth,
      isVerticalMode: isVerticalMode
    });
  }, [scrollY, scrollX, layoutHeight, layoutWidth, isVerticalMode]);
  var dndOnSuccessCb = React__default.useCallback(function (event) {
    return dnd == null || dnd.onDnDSuccess == null ? void 0 : dnd.onDnDSuccess(event);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var resizeMouseUp = React__default.useCallback(function (props) {
    var newTime = calculateItemDragSinceTill(_extends({}, props, {
      hourWidth: hourWidth,
      startDate: startDate
    }));
    epg[props.index].since = newTime.since;
    epg[props.index].till = newTime.till;
    setDndChannelUuid({
      index: epg[props.index].channelIndex,
      uuid: epg[props.index][programChannelMapKey]
    });
    dndOnSuccessCb(epg[props.index]);
    setForceUpdate();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isVerticalMode, startDate, hourWidth, programs]);
  var dragMouseUp = React__default.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(props) {
      var newTime, element, checkChannelTopOutRange, checkChannelTopInRange, isChannelTopInRange, isChannelTopOutRange, newChannel, newChannelRange, newChannelEpgIndexes;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newTime = calculateItemDragSinceTill(_extends({}, props, {
              hourWidth: hourWidth,
              startDate: startDate
            }));
            element = _extends({}, epg[props.index]);
            checkChannelTopOutRange = function checkChannelTopOutRange() {
              var elementChannel = element.channelPosition;
              if (props.top > elementChannel.top + elementChannel.height - 1 || props.top < elementChannel.top - 1) {
                return true;
              }
              return false;
            };
            checkChannelTopInRange = function checkChannelTopInRange() {
              var elementChannel = element.channelPosition;
              return elementChannel.top <= props.top && props.top <= elementChannel.top + elementChannel.height ? true : false;
            };
            isChannelTopInRange = checkChannelTopInRange();
            isChannelTopOutRange = checkChannelTopOutRange();
            if (isMultirowsDnd && isChannelTopOutRange) {
              newChannel = channels.find(function (channel) {
                return channel.position.top === props.top;
              });
              newChannelRange = channels.find(function (channel) {
                return channel.position.top <= props.top && props.top <= channel.position.top + channel.position.height;
              });
              if (newChannel) {
                newChannelEpgIndexes = getChannelEpgIndexes(newChannel[channelMapKey]);
                if (newChannelEpgIndexes) {
                  epg[props.index].since = newTime.since;
                  epg[props.index].till = newTime.till;
                  epg[props.index][programChannelMapKey] = newChannel[channelMapKey];
                  epg[props.index].channelIndex = newChannel.index;
                  epg[props.index].channelPosition = {
                    top: newChannel.position.top,
                    height: newChannel.position.height,
                    left: newChannel.position.left
                  };
                } else {
                  setChannelEpgIndexes({
                    uuid: newChannel[channelMapKey],
                    first: props.index,
                    last: props.index
                  });
                  epg[props.index].since = newTime.since;
                  epg[props.index].till = newTime.till;
                  epg[props.index][programChannelMapKey] = newChannel[channelMapKey];
                  epg[props.index].channelIndex = newChannel.index;
                  epg[props.index].channelPosition = {
                    top: newChannel.position.top,
                    height: newChannel.position.height,
                    left: newChannel.position.left
                  };
                }
              } else if (newChannelRange) {
                epg[props.index].since = newTime.since;
                epg[props.index].till = newTime.till;
                epg[props.index][programChannelMapKey] = newChannelRange[channelMapKey];
                epg[props.index].channelIndex = newChannelRange.index;
                epg[props.index].channelPosition = {
                  top: newChannelRange.position.top,
                  height: newChannelRange.position.height,
                  left: newChannelRange.position.left
                };
              }
            } else if (isMultirowsDnd && isChannelTopInRange) {
              epg[props.index].since = newTime.since;
              epg[props.index].till = newTime.till;
            } else {
              epg[props.index].since = newTime.since;
              epg[props.index].till = newTime.till;
              setDndChannelUuid({
                index: epg[props.index].channelIndex,
                uuid: epg[props.index][programChannelMapKey]
              });
            }
            dndOnSuccessCb(epg[props.index]);
            setForceUpdate();
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isMultirowsDnd, startDate, hourWidth, programs]);
  var handleGetLayoutData = React__default.useCallback(function (events) {
    return events.map(function (event) {
      return _extends({}, event.data);
    });
  }, []);
  var handleOpenChannelGroupTree = React__default.useCallback(function (data) {
    channelsEpg[data.index].isOpen = !channelsEpg[data.index].isOpen;
    setForceChannelsUpdate();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [channels]);
  var handleGetDropItemData = React__default.useCallback(function (data) {
    return setUpdatedLayoutItem(data, mode.type);
  }, [mode.type]);
  var getEpgProps = function getEpgProps() {
    return {
      isVerticalMode: isVerticalMode,
      isRTL: isRTL,
      isSidebar: isSidebar,
      isLine: isLine,
      isTimeline: isTimeline,
      width: width,
      height: height,
      sidebarWidth: sidebarWidth,
      timelineHeight: timelineHeight,
      ref: containerRef,
      theme: theme$1,
      globalStyles: globalStyles
    };
  };
  var getLayoutProps = function getLayoutProps() {
    return _extends({
      isVerticalMode: isVerticalMode,
      isRTL: isRTL,
      isBaseTimeFormat: isBaseTimeFormat,
      isSidebar: isSidebar,
      isTimeline: isTimeline,
      isLine: isLine,
      isCurrentTime: isCurrentTime,
      isProgramVisible: isProgramVisible,
      isChannelVisible: isChannelVisible,
      isTimelineVisible: isTimelineVisible,
      isToday: isToday,
      isResize: isResize,
      programs: programs,
      programOverlaps: programOverlaps,
      channels: channels,
      channelOverlapsCount: channelOverlapsCount,
      layerOverlapLevel: overlap.layerOverlapLevel,
      snap: snap,
      grid: grid,
      gridItems: gridItems,
      dnd: dnd,
      startDate: startDate,
      endDate: endDate,
      hoursInDays: hoursInDays,
      liveRefreshTime: liveRefreshTime,
      scrollY: scrollY,
      dayWidth: dayWidth,
      hourWidth: hourWidth,
      sidebarWidth: sidebarWidth,
      timelineHeight: timelineHeight,
      itemHeight: itemHeight,
      currentDate: currentDate,
      mode: mode,
      timezone: timezone,
      timelineDividers: timelineDividers,
      overlapMode: overlap.mode,
      overlap: overlap,
      areas: areas,
      openChannelGroupTree: handleOpenChannelGroupTree,
      onScroll: onScroll,
      dragMouseUp: dragMouseUp,
      resizeMouseUp: resizeMouseUp
    }, daysResources, dayWidthResourcesProps, {
      ref: scrollBoxRef
    });
  };
  return {
    isLayoutBottom: isLayoutBottom,
    isLayoutRight: isLayoutRight,
    getEpgProps: getEpgProps,
    getLayoutProps: getLayoutProps,
    getLayoutData: handleGetLayoutData,
    getDropItemData: handleGetDropItemData,
    onScrollToNow: onScrollToNow,
    onScrollTop: onScrollTop,
    onScrollLeft: onScrollLeft,
    onScrollRight: onScrollRight,
    scrollY: scrollY,
    scrollX: scrollX
  };
}

function useInterval(callback, delay) {
  var useIsomorphicEffect = useIsomorphicLayoutEffect();
  var savedCallback = React__default.useRef(callback);
  useIsomorphicEffect(function () {
    savedCallback.current = callback;
  }, [callback]);
  React__default.useEffect(function () {
    if (!delay && delay !== 0) {
      return;
    }
    var id = setInterval(function () {
      return savedCallback.current();
    }, delay);
    return function () {
      return clearInterval(id);
    };
  }, [delay]);
}

function useIsTouchDevice() {
  var _React$useState = React__default.useState(false),
    isMobile = _React$useState[0],
    setIsMobile = _React$useState[1];
  React__default.useEffect(function () {
    function checkDevice() {
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
      var androidOrWebOS = /Android|webOS/.test(navigator.userAgent);
      var isMobileDevice = iOS || androidOrWebOS;
      var isTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia && window.matchMedia("(any-pointer: coarse)").matches;
      setIsMobile(isMobileDevice || isTouchScreen);
    }
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return function () {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);
  return isMobile;
}

function useDrag(props) {
  var isDndEnabled = props.isDndEnabled,
    isDndMutlirows = props.isDndMutlirows,
    isVerticalMode = props.isVerticalMode,
    initialPosition = props.initialPosition,
    data = props.data,
    dayWidth = props.dayWidth,
    itemHeight = props.itemHeight,
    contentHeight = props.contentHeight,
    dndSnapX = props.dndSnapX,
    _props$dndSnapY = props.dndSnapY,
    dndSnapY = _props$dndSnapY === void 0 ? itemHeight : _props$dndSnapY,
    elementRef = props.elementRef,
    mouseUpCb = props.mouseUpCb,
    dndMouseUpCb = props.dndMouseUpCb;
  var isClicked = useRef(false);
  var isMouseMove = useRef(false);
  var isTouchDevice = useIsTouchDevice();
  var _useState = useState(false),
    isDragging = _useState[0],
    setIsDragging = _useState[1];
  var _useState2 = useState(false),
    isPreventScroll = _useState2[0],
    setIsPreventScroll = _useState2[1];
  var _useState3 = useState({
      x: initialPosition.left,
      y: initialPosition.top
    }),
    position = _useState3[0],
    setPosition = _useState3[1];
  var _useState4 = useState({
      startY: initialPosition.top,
      lastY: initialPosition.top,
      startX: initialPosition.left,
      lastX: initialPosition.left
    }),
    coords = _useState4[0],
    setCoords = _useState4[1];
  var id = data.id,
    index = data.index,
    since = data.since,
    till = data.till,
    channelPosition = data.channelPosition;
  var handleMouseDown = useCallback(function (e) {
    e.stopPropagation();
    isClicked.current = true;
    isTouchDevice && setIsPreventScroll(true);
    setIsDragging(true);
    var event = isTouchDevice ? e.touches[0] : e;
    coords.startY = event.clientY;
    coords.startX = event.clientX;
  }, [isTouchDevice, coords]);
  var handleMouseClick = useCallback(function (e) {
    if (isMouseMove.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, []);
  var handleMouseUp = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _elementRef$current, _elementRef$current2, _elementRef$current3, _elementRef$current4, options, optionsYX, isDndMouseUpSuccess, optionsY, _isDndMouseUpSuccess;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (isVerticalMode) {
            coords.lastY = (_elementRef$current = elementRef.current) == null ? void 0 : _elementRef$current.offsetTop;
            coords.lastX = (_elementRef$current2 = elementRef.current) == null ? void 0 : _elementRef$current2.offsetLeft;
          } else {
            coords.lastY = (_elementRef$current3 = elementRef.current) == null ? void 0 : _elementRef$current3.offsetTop;
            coords.lastX = (_elementRef$current4 = elementRef.current) == null ? void 0 : _elementRef$current4.offsetLeft;
          }
          options = {
            id: id,
            index: index,
            since: since,
            till: till
          };
          if (!(!isVerticalMode && isClicked.current && (initialPosition.left !== coords.lastX || initialPosition.top !== coords.lastY))) {
            _context.next = 8;
            break;
          }
          optionsYX = _extends({}, options, {
            top: coords.lastY,
            left: coords.lastX,
            initialPositionLeft: initialPosition.left,
            initialPositionTop: initialPosition.top
          });
          _context.next = 6;
          return dndMouseUpCb == null ? void 0 : dndMouseUpCb(optionsYX, data);
        case 6:
          isDndMouseUpSuccess = _context.sent;
          if (isDndMouseUpSuccess) {
            mouseUpCb(optionsYX);
          } else {
            elementRef.current.style.left = initialPosition.left + "px";
            elementRef.current.style.top = initialPosition.top + "px";
            setPosition(function (prev) {
              return _extends({}, prev, {
                x: initialPosition.left,
                y: initialPosition.top
              });
            });
          }
        case 8:
          if (!(isVerticalMode && isClicked.current && (initialPosition.left !== coords.lastX || initialPosition.top !== coords.lastY))) {
            _context.next = 14;
            break;
          }
          optionsY = _extends({}, options, {
            top: coords.lastX,
            left: coords.lastY,
            initialPositionLeft: initialPosition.top,
            initialPositionTop: initialPosition.left
          });
          _context.next = 12;
          return dndMouseUpCb == null ? void 0 : dndMouseUpCb(optionsY, data);
        case 12:
          _isDndMouseUpSuccess = _context.sent;
          if (_isDndMouseUpSuccess) {
            mouseUpCb(optionsY);
          } else {
            elementRef.current.style.left = initialPosition.left + "px";
            elementRef.current.style.top = initialPosition.top + "px";
            setPosition(function (prev) {
              return _extends({}, prev, {
                x: initialPosition.left,
                y: initialPosition.top
              });
            });
          }
        case 14:
          isClicked.current = false;
          setIsDragging(false);
          if (isTouchDevice) {
            setIsPreventScroll(false);
          }
          setTimeout(function () {
            return isMouseMove.current = false;
          }, 0);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isVerticalMode, initialPosition.top, initialPosition.left, coords, id, index, since, till, mouseUpCb]);
  var initialPositionSerialized = JSON.stringify(initialPosition);
  useEffect(function () {
    // if (isVerticalMode) {
    //   setCoords({
    //     startY: initialPosition.top,
    //     lastY: initialPosition.top,
    //     startX: initialPosition.left,
    //     lastX: initialPosition.left,
    //   });
    // }
    setCoords({
      startY: initialPosition.top,
      lastY: initialPosition.top,
      startX: initialPosition.left,
      lastX: initialPosition.left
    });
    setPosition({
      x: initialPosition.left,
      y: initialPosition.top
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVerticalMode, initialPositionSerialized]);
  useEffect(function () {
    function handleMouseMove(e) {
      var _elementRef$current5, _elementRef$current6, _elementRef$current7, _elementRef$current8;
      if (isPreventScroll) {
        e.preventDefault();
      }
      if (!isDndEnabled) return;
      if (!isClicked.current) return;
      if (!elementRef.current) return;
      isMouseMove.current = true;
      var event = isTouchDevice ? e.touches[0] : e;
      var offsetWidth = isVerticalMode ? (_elementRef$current5 = elementRef.current) == null ? void 0 : _elementRef$current5.offsetHeight : (_elementRef$current6 = elementRef.current) == null ? void 0 : _elementRef$current6.offsetWidth;
      var offsetHeight = isVerticalMode ? (_elementRef$current7 = elementRef.current) == null ? void 0 : _elementRef$current7.offsetWidth : (_elementRef$current8 = elementRef.current) == null ? void 0 : _elementRef$current8.offsetHeight;
      var elementChannel = channelPosition;
      if (isVerticalMode) {
        var nextYValue = event.clientY - coords.startY + coords.lastY;
        var nextY = dndSnapX ? Math.round(nextYValue / dndSnapX) * dndSnapX : nextYValue;
        if (isDndMutlirows) {
          var nextX = event.clientX - coords.startX + coords.lastX;
          var nextXSnap = Math.round(nextX / dndSnapY) * dndSnapY;
          if (nextXSnap >= 0 && nextXSnap <= contentHeight - offsetHeight && nextY >= 0 && nextY <= dayWidth - offsetWidth) {
            var checkTopRange = function checkTopRange() {
              if (nextXSnap > elementChannel.top + elementChannel.height - 1) {
                return true;
              } else if (nextXSnap < elementChannel.top - 1) {
                return true;
              }
              return false;
            };
            var isOutTopRange = checkTopRange();
            if (!isOutTopRange) {
              elementRef.current.style.top = nextY + "px";
              elementRef.current.style.left = initialPosition.left + "px";
              setPosition(function (prev) {
                return _extends({}, prev, {
                  y: nextY,
                  x: initialPosition.left
                });
              });
            } else {
              elementRef.current.style.top = nextY + "px";
              elementRef.current.style.left = nextXSnap + "px";
              setPosition(function (prev) {
                return _extends({}, prev, {
                  y: nextY,
                  x: nextXSnap
                });
              });
            }
          }
        } else if (nextY >= 0 && nextY <= dayWidth - offsetWidth) {
          elementRef.current.style.top = nextY + "px";
          setPosition(function (prev) {
            return _extends({}, prev, {
              y: nextY
            });
          });
        }
      } else {
        var nextXValue = event.clientX - coords.startX + coords.lastX;
        var _nextX = dndSnapX ? Math.round(nextXValue / dndSnapX) * dndSnapX : nextXValue;
        if (isDndMutlirows) {
          var _nextY = event.clientY - coords.startY + coords.lastY;
          var nextYSnap = Math.round(_nextY / dndSnapY) * dndSnapY;
          if (nextYSnap >= 0 && nextYSnap <= contentHeight - offsetHeight && _nextX >= 0 && _nextX <= dayWidth - offsetWidth) {
            var _checkTopRange = function _checkTopRange() {
              if (nextYSnap > elementChannel.top + elementChannel.height - 1) {
                return true;
              } else if (nextYSnap < elementChannel.top - 1) {
                return true;
              }
              return false;
            };
            var _isOutTopRange = _checkTopRange();
            if (!_isOutTopRange) {
              elementRef.current.style.left = _nextX + "px";
              elementRef.current.style.top = initialPosition.top + "px";
              setPosition(function (prev) {
                return _extends({}, prev, {
                  x: _nextX,
                  y: initialPosition.top
                });
              });
            } else {
              elementRef.current.style.top = nextYSnap + "px";
              elementRef.current.style.left = _nextX + "px";
              setPosition(function (prev) {
                return _extends({}, prev, {
                  x: _nextX,
                  y: nextYSnap
                });
              });
            }
          }
        } else if (_nextX >= 0 && _nextX <= dayWidth - offsetWidth) {
          elementRef.current.style.left = _nextX + "px";
          setPosition(function (prev) {
            return _extends({}, prev, {
              x: _nextX
            });
          });
        }
      }
    }
    var mouseMoveEvent = isTouchDevice ? "touchmove" : "mousemove";
    var mouseUpEvent = isTouchDevice ? "touchend" : "mouseup";
    var options = isTouchDevice ? {
      passive: false
    } : undefined;
    if (isDndEnabled) {
      document.addEventListener(mouseMoveEvent, handleMouseMove, options);
      document.addEventListener(mouseUpEvent, handleMouseUp);
    }
    return function () {
      document.removeEventListener(mouseMoveEvent, handleMouseMove);
      document.removeEventListener(mouseUpEvent, handleMouseUp);
    };
  }, [isTouchDevice, isPreventScroll, isDndEnabled, isVerticalMode, isDragging, isDndMutlirows, initialPosition.top, initialPosition.left, channelPosition, dndSnapX, dndSnapY, coords, dayWidth, itemHeight, contentHeight, elementRef, handleMouseUp]);
  if (isDndEnabled) {
    var events = isTouchDevice ? {
      onTouchStart: handleMouseDown,
      onTouchEnd: handleMouseUp
    } : {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp
    };
    return {
      dndEvents: _extends({
        isDragging: isDragging,
        ref: elementRef,
        onClick: handleMouseClick
      }, events),
      currentPositionX: isVerticalMode ? position.y : position.x
    };
  }
  return getDefaultDragProps(initialPosition.left);
}

function useResize(_ref) {
  var isResize = _ref.isResize,
    isVerticalMode = _ref.isVerticalMode,
    data = _ref.data,
    dayWidth = _ref.dayWidth,
    contentHeight = _ref.contentHeight,
    initialPosition = _ref.initialPosition,
    snapX = _ref.snapX,
    elementRef = _ref.elementRef,
    mouseUpCb = _ref.mouseUpCb;
  var isClicked = useRef(false);
  var isMouseMove = useRef(false);
  var isTouchDevice = useIsTouchDevice();
  // State
  var _useState = useState(false),
    isPreventScroll = _useState[0],
    setIsPreventScroll = _useState[1];
  var _useState2 = useState(false),
    isResizing = _useState2[0],
    setIsResizing = _useState2[1];
  var _useState3 = useState(false),
    isResizingLeft = _useState3[0],
    setIsResizingLeft = _useState3[1];
  var _useState4 = useState(false),
    isResizingRight = _useState4[0],
    setIsResizingRight = _useState4[1];
  var _useState5 = useState(0),
    mouseOffsetX = _useState5[0],
    setMouseOffsetX = _useState5[1];
  var _useState6 = useState({
      x: initialPosition.left,
      y: initialPosition.top,
      width: isVerticalMode ? initialPosition.height : initialPosition.width
    }),
    position = _useState6[0],
    setPosition = _useState6[1];
  var _useState7 = useState({
      startY: initialPosition.top,
      lastY: initialPosition.top,
      startX: initialPosition.left,
      lastX: initialPosition.left
    }),
    coords = _useState7[0],
    setCoords = _useState7[1];
  var id = data.id,
    index = data.index,
    since = data.since,
    till = data.till;
  var initialWidth = useMemo(function () {
    return isVerticalMode ? initialPosition.height : initialPosition.width;
  }, [isVerticalMode, initialPosition.height, initialPosition.width]);
  var handleMouseDown = useCallback(function (left) {
    if (left === void 0) {
      left = false;
    }
    return function (e) {
      e.stopPropagation();
      isClicked.current = true;
      isTouchDevice && setIsPreventScroll(true);
      setIsResizing(true);
      var container = elementRef.current;
      if (!container) return;
      var event = isTouchDevice ? e.touches[0] : e;
      setMouseOffsetX(isVerticalMode ? event.pageY : event.pageX);
      coords.startY = event.clientY;
      coords.startX = event.clientX;
      if (left) {
        setIsResizingLeft(true);
        setIsResizingRight(false);
      } else {
        setIsResizingLeft(false);
        setIsResizingRight(true);
      }
    };
  }, [isTouchDevice, isVerticalMode, coords, elementRef]);
  var handleMouseClick = useCallback(function (e) {
    if (isMouseMove.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, []);
  var handleMouseUp = useCallback(function () {
    if (isVerticalMode) {
      var _elementRef$current, _elementRef$current2, _elementRef$current3;
      coords.lastY = (_elementRef$current = elementRef.current) == null ? void 0 : _elementRef$current.offsetTop;
      coords.lastX = (_elementRef$current2 = elementRef.current) == null ? void 0 : _elementRef$current2.offsetLeft;
      position.width = (_elementRef$current3 = elementRef.current) == null ? void 0 : _elementRef$current3.offsetHeight;
    } else {
      var _elementRef$current4, _elementRef$current5, _elementRef$current6;
      coords.lastY = (_elementRef$current4 = elementRef.current) == null ? void 0 : _elementRef$current4.offsetTop;
      coords.lastX = (_elementRef$current5 = elementRef.current) == null ? void 0 : _elementRef$current5.offsetLeft;
      position.width = (_elementRef$current6 = elementRef.current) == null ? void 0 : _elementRef$current6.offsetWidth;
    }
    var options = {
      id: id,
      index: index,
      since: since,
      till: till
    };
    if (!isVerticalMode && isClicked.current && (initialPosition.left !== coords.lastX || initialPosition.width !== position.width)) {
      mouseUpCb(_extends({}, options, {
        top: coords.lastY,
        left: coords.lastX,
        width: position.width,
        initialPositionTop: initialPosition.top,
        initialPositionLeft: initialPosition.left,
        initialWidth: initialPosition.width
      }));
    }
    if (isVerticalMode && isClicked.current && (initialPosition.top !== coords.lastY || initialPosition.width !== position.width)) {
      mouseUpCb(_extends({}, options, {
        top: coords.lastX,
        left: coords.lastY,
        width: position.width,
        initialPositionTop: initialPosition.left,
        initialPositionLeft: initialPosition.top,
        initialWidth: initialPosition.height
      }));
    }
    setIsResizing(false);
    isClicked.current = false;
    if (isTouchDevice) {
      setIsPreventScroll(false);
    }
    setTimeout(function () {
      return isMouseMove.current = false;
    }, 0);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isTouchDevice, isVerticalMode, id, index, since, till, initialWidth, initialPosition.left, initialPosition.width, mouseUpCb]);
  var initialPositionSerialized = JSON.stringify(initialPosition);
  useEffect(function () {
    // if (isVerticalMode) {
    //   setCoords({
    //     startY: initialPosition.top,
    //     lastY: initialPosition.top,
    //     startX: initialPosition.left,
    //     lastX: initialPosition.left,
    //   });
    // }
    setCoords({
      startY: initialPosition.top,
      lastY: initialPosition.top,
      startX: initialPosition.left,
      lastX: initialPosition.left
    });
    setPosition({
      x: initialPosition.left,
      y: initialPosition.top,
      width: isVerticalMode ? initialPosition.height : initialPosition.width
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVerticalMode, initialPositionSerialized]);
  useEffect(function () {
    function handleMouseMove(e) {
      if (isPreventScroll) {
        e.preventDefault();
      }
      if (!isResizing) return;
      if (!isClicked.current) return;
      if (!elementRef.current) return;
      isMouseMove.current = true;
      var event = isTouchDevice ? e.touches[0] : e;
      var element = elementRef.current;
      var elementRect = element.getBoundingClientRect();
      if (isVerticalMode) {
        var _elementRef$current7;
        var offsetHeight = (_elementRef$current7 = elementRef.current) == null ? void 0 : _elementRef$current7.offsetHeight;
        var nextY = event.clientY - coords.startY + coords.lastY;
        var snapYTop = snapX ? Math.round((event.pageY - mouseOffsetX) / snapX) * snapX : event.pageY - mouseOffsetX;
        var newHeightTop = initialWidth - snapYTop;
        var newHeightBottom = snapX ? Math.round((event.clientY - elementRect.top + 14) / snapX) * snapX : event.clientY - elementRect.top + 14;
        var isInLeftLayout = nextY >= 0 && nextY <= dayWidth - offsetHeight;
        // To be used in the future
        // const isInLeftLayout =
        //   nextY >= 0 && nextY <= contentHeight - offsetHeight;
        var isInRightLayout = coords.lastY + newHeightBottom <= dayWidth;
        if (isResizingLeft && isInLeftLayout && newHeightTop >= 50) {
          var top = initialPosition.top + snapYTop;
          element.style.height = newHeightTop + "px";
          element.style.top = top + "px";
          setPosition(function (prev) {
            return _extends({}, prev, {
              y: top,
              width: newHeightTop
            });
          });
        } else if (isResizingRight && isInRightLayout && newHeightBottom >= 50) {
          element.style.height = newHeightBottom + "px";
          element.style.top = initialPosition.top + "px";
          setPosition(function (prev) {
            return _extends({}, prev, {
              y: initialPosition.top,
              width: newHeightBottom
            });
          });
        }
      } else {
        var _elementRef$current8;
        var offsetWidth = (_elementRef$current8 = elementRef.current) == null ? void 0 : _elementRef$current8.offsetWidth;
        var nextX = event.clientX - coords.startX + coords.lastX;
        var snapXLeft = snapX ? Math.round((event.pageX - mouseOffsetX) / snapX) * snapX : event.pageX - mouseOffsetX;
        var newWidthLeft = initialWidth - snapXLeft;
        var newWidthRight = snapX ? Math.round((event.clientX - elementRect.left + 14) / snapX) * snapX : event.clientX - elementRect.left + 14;
        var _isInLeftLayout = nextX >= 0 && nextX <= dayWidth - offsetWidth;
        var _isInRightLayout = coords.lastX + newWidthRight <= dayWidth;
        if (isResizingLeft && _isInLeftLayout && newWidthLeft >= 50) {
          var left = initialPosition.left + snapXLeft;
          element.style.width = newWidthLeft + "px";
          element.style.left = left + "px";
          setPosition(function (prev) {
            return _extends({}, prev, {
              x: left,
              width: newWidthLeft
            });
          });
        } else if (isResizingRight && _isInRightLayout && newWidthRight >= 50) {
          element.style.width = newWidthRight + "px";
          setPosition(function (prev) {
            return _extends({}, prev, {
              width: newWidthRight
            });
          });
        }
      }
    }
    var mouseMoveEvent = isTouchDevice ? "touchmove" : "mousemove";
    var mouseUpEvent = isTouchDevice ? "touchend" : "mouseup";
    var options = isTouchDevice ? {
      passive: false
    } : undefined;
    if (isResize) {
      document.addEventListener(mouseMoveEvent, handleMouseMove, options);
      document.addEventListener(mouseUpEvent, handleMouseUp);
    }
    return function () {
      document.removeEventListener(mouseMoveEvent, handleMouseMove);
      document.removeEventListener(mouseUpEvent, handleMouseUp);
    };
  }, [isTouchDevice, isPreventScroll, isResize, isVerticalMode, isResizing, isResizingLeft, isResizingRight, dayWidth, contentHeight, initialWidth, initialPosition.top, initialPosition.left, coords, snapX, mouseOffsetX, elementRef, handleMouseUp]);
  if (isResize) {
    var getEvents = function getEvents(isLeft) {
      if (isTouchDevice) {
        return {
          onTouchStart: handleMouseDown(isLeft),
          onTouchEnd: handleMouseUp
        };
      }
      return {
        onMouseDown: handleMouseDown(isLeft),
        onMouseUp: handleMouseUp
      };
    };
    return {
      width: position.width,
      initialWidth: isVerticalMode ? initialPosition.height : initialPosition.width,
      currentPositionX: isVerticalMode ? position.y : position.x,
      resizeEvents: {
        isResizing: isResizing,
        resources: {
          ref: elementRef,
          isResizing: isResizing
        },
        eventsLeft: _extends({
          isResize: isResize,
          isVerticalMode: isVerticalMode,
          left: true,
          onClick: handleMouseClick
        }, getEvents(true)),
        eventsRight: _extends({
          isResize: isResize,
          isVerticalMode: isVerticalMode,
          onClick: handleMouseClick
        }, getEvents())
      }
    };
  }
  return {
    currentPositionX: isVerticalMode ? initialPosition.top : initialPosition.left,
    width: isVerticalMode ? initialPosition.height : initialPosition.width,
    resizeEvents: {
      isResizing: false,
      resources: {},
      eventsLeft: {},
      eventsRight: {}
    }
  };
}

function useProgram(_ref) {
  var _ref$isVerticalMode = _ref.isVerticalMode,
    isVerticalMode = _ref$isVerticalMode === void 0 ? false : _ref$isVerticalMode,
    _ref$isRTL = _ref.isRTL,
    isRTL = _ref$isRTL === void 0 ? false : _ref$isRTL,
    _ref$isResize = _ref.isResize,
    isResize = _ref$isResize === void 0 ? false : _ref$isResize,
    isBaseTimeFormat = _ref.isBaseTimeFormat,
    startDate = _ref.startDate,
    contentHeight = _ref.contentHeight,
    dayWidth = _ref.dayWidth,
    itemHeight = _ref.itemHeight,
    hourWidth = _ref.hourWidth,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? 200 : _ref$minWidth,
    program = _ref.program,
    liveRefreshTime = _ref.liveRefreshTime,
    mode = _ref.mode,
    snap = _ref.snap,
    dnd = _ref.dnd,
    dragMouseUp = _ref.dragMouseUp,
    resizeMouseUp = _ref.resizeMouseUp;
  var elementRef = useRef(null);
  var data = program.data,
    position = program.position;
  var width = position.width,
    height = position.height;
  var since = data.since,
    till = data.till;
  // Hooks
  var _React$useState = React__default.useState(function () {
      return getLiveStatus(since, till);
    }),
    isLive = _React$useState[0],
    setIsLive = _React$useState[1];
  var options = {
    isVerticalMode: isVerticalMode,
    initialPosition: position,
    data: data,
    dayWidth: dayWidth,
    contentHeight: contentHeight,
    elementRef: elementRef
  };
  var resizeOptions = _extends({}, options, {
    isResize: isResize,
    snapX: snap == null ? void 0 : snap.x,
    mouseUpCb: resizeMouseUp
  });
  var _useResize = useResize(resizeOptions),
    resizeCurrentPositionX = _useResize.currentPositionX,
    resizeWidth = _useResize.width,
    resizeEvents = _useResize.resizeEvents;
  var dndMouseUpCb = React__default.useCallback(function (props, data) {
    var _dnd$onDnDMouseUp;
    var newTime = calculateItemDragSinceTill(_extends({}, props, {
      hourWidth: hourWidth,
      startDate: startDate
    }));
    var options = _extends({}, newTime, {
      id: props.id,
      data: data
    });
    return (_dnd$onDnDMouseUp = dnd == null || dnd.onDnDMouseUp == null ? void 0 : dnd.onDnDMouseUp(options)) != null ? _dnd$onDnDMouseUp : true;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var dragOptions = _extends({}, options, {
    isDndEnabled: dnd.enabled ? !resizeEvents.resources.isResizing : false,
    isDndMutlirows: dnd.mode === "multi-rows",
    dndSnapX: snap == null ? void 0 : snap.x,
    dndSnapY: snap == null ? void 0 : snap.y,
    itemHeight: itemHeight,
    dndMouseUpCb: dndMouseUpCb,
    mouseUpCb: dragMouseUp
  });
  var _useDrag = useDrag(dragOptions),
    currentPositionX = _useDrag.currentPositionX,
    dndEvents = _useDrag.dndEvents;
  // Variables
  var newPosition = _extends({}, omit(position, "egdeEnd"));
  var styles = {
    width: width,
    position: newPosition
  };
  var formatTime = function formatTime(date, formatType) {
    if (formatType === void 0) {
      formatType = TIME_FORMAT.HOURS_MIN;
    }
    return format(new Date(date), formatType).replace(/\s/g, "");
  };
  var set12HoursTimeFormat = function set12HoursTimeFormat() {
    if (mode.type === "week" || mode.type === "month") {
      if (isBaseTimeFormat) return TIME_FORMAT.BASE_DAY_MONTH;
      return TIME_FORMAT.DAY_MONTH;
    }
    if (isBaseTimeFormat) return TIME_FORMAT.BASE_HOURS_TIME;
    return TIME_FORMAT.HOURS_MIN;
  };
  var getRTLSinceTime = function getRTLSinceTime(since) {
    return isRTL ? till : since;
  };
  var getRTLTillTime = function getRTLTillTime(till) {
    return isRTL ? since : till;
  };
  // Effects
  useInterval(function () {
    var status = getLiveStatus(since, till);
    setIsLive(status);
  }, liveRefreshTime);
  var isMinWidth = isVerticalMode ? height > minWidth : width > minWidth;
  var getMouseEventTempTime = function getMouseEventTempTime() {
    var left = resizeEvents.isResizing ? resizeCurrentPositionX : currentPositionX;
    var options = {
      id: data.id,
      index: data.index,
      since: data.since,
      till: data.till,
      top: 0,
      left: left,
      initialPositionTop: position.top,
      initialPositionLeft: position.left,
      initialWidth: width,
      width: resizeWidth,
      hourWidth: hourWidth
    };
    if (isVerticalMode) {
      options.initialPositionLeft = position.top;
      options.initialPositionTop = position.left;
      options.initialWidth = height;
    }
    var _calculateItemDragSin = calculateItemDragSinceTill(options),
      since = _calculateItemDragSin.since,
      till = _calculateItemDragSin.till;
    var formatTempTime = function formatTempTime(time) {
      return formatTime(getRTLSinceTime(time), set12HoursTimeFormat()).toLowerCase();
    };
    return {
      since: formatTempTime(since),
      till: formatTempTime(till)
    };
  };
  var getMouseEvents = useCallback(function () {
    return _extends({}, resizeEvents.resources, dndEvents);
  }, [dndEvents, resizeEvents.resources]);
  var isMouseEvent = dndEvents.isDragging || resizeEvents.resources.isResizing || false;
  return {
    isMouseEvent: isMouseEvent,
    isLive: isLive,
    isMinWidth: isMinWidth,
    isRTL: isRTL,
    resizeEvents: resizeEvents,
    formatTime: formatTime,
    set12HoursTimeFormat: set12HoursTimeFormat,
    getMouseEvents: getMouseEvents,
    getMouseEventTempTime: getMouseEventTempTime,
    getRTLSinceTime: getRTLSinceTime,
    getRTLTillTime: getRTLTillTime,
    styles: styles
  };
}

function useTimeline(props) {
  var isBaseTimeFormat = props.isBaseTimeFormat,
    isRTL = props.isRTL,
    isSidebar = props.isSidebar,
    isVerticalMode = props.isVerticalMode;
  var timezone = props.timezone,
    dayWidth = props.dayWidth,
    hourWidth = props.hourWidth,
    sidebarWidth = props.sidebarWidth,
    timelineHeight = props.timelineHeight;
  var mode = props.mode,
    startDate = props.startDate,
    endDate = props.endDate,
    hoursInDays = props.hoursInDays,
    days = props.days,
    liveRefreshTime = props.liveRefreshTime,
    months = props.months,
    numberOfDays = props.numberOfDays,
    numberOfHoursInDay = props.numberOfHoursInDay,
    numberOfMonths = props.numberOfMonths,
    offsetStartHoursRange = props.offsetStartHoursRange,
    timelineDividers = props.timelineDividers,
    renderCurrentTime = props.renderCurrentTime;
  // Handlers
  var getTime = function getTime(index) {
    if (typeof index === "string") return {
      time: index,
      isNewDay: true
    };
    var date = new Date();
    var baseDate = format(date, TIME_FORMAT.DATE);
    var time = index < 10 ? "0" + index : index;
    if (isBaseTimeFormat) {
      var _date = new Date(baseDate + "T" + time + ":00:00");
      var baseFormat = format(_date, TIME_FORMAT.BASE_HOURS_TIME).toLowerCase().replace(/\s/g, "");
      return {
        time: baseFormat,
        isNewDay: false
      };
    }
    return {
      time: time + ":00",
      isNewDay: false
    };
  };
  var formatWeekMonthDate = function formatWeekMonthDate(date) {
    return getFormattedWeekMonthDate({
      date: date,
      mode: mode,
      isBaseTimeFormat: isBaseTimeFormat
    });
  };
  var getDayMonthName = function getDayMonthName(date) {
    var dateFormat = mode.type === "week" ? TIME_FORMAT.DAY : TIME_FORMAT.YEAR;
    return format(toDate(date), dateFormat);
  };
  var getCurrentTimeProps = function getCurrentTimeProps() {
    return {
      isBaseTimeFormat: isBaseTimeFormat,
      isVerticalMode: isVerticalMode,
      isRTL: isRTL,
      timezone: timezone,
      mode: mode,
      startDate: startDate,
      endDate: endDate,
      hoursInDays: hoursInDays,
      dayWidth: dayWidth,
      timelineHeight: timelineHeight,
      hourWidth: hourWidth,
      sidebarWidth: sidebarWidth,
      liveRefreshTime: liveRefreshTime,
      renderCurrentTime: renderCurrentTime
    };
  };
  var getTimelineProps = function getTimelineProps() {
    return {
      isSidebar: isSidebar,
      isVerticalMode: isVerticalMode,
      dayWidth: dayWidth,
      sidebarWidth: sidebarWidth,
      timelineHeight: timelineHeight
    };
  };
  // Variables
  var timeSlots = useMemo(function () {
    var options = {
      isBaseTimeFormat: isBaseTimeFormat,
      days: days,
      hoursInDays: hoursInDays,
      months: months,
      numberOfDays: numberOfDays,
      numberOfHoursInDay: numberOfHoursInDay,
      numberOfMonths: numberOfMonths,
      offsetStartHoursRange: offsetStartHoursRange
    };
    return generateTimelineSlots(mode.type, options);
  }, [mode.type, isBaseTimeFormat, days, hoursInDays, months, numberOfDays, numberOfHoursInDay, numberOfMonths, offsetStartHoursRange]);
  var isWeekMode = mode.type === "week";
  var isMonthMode = mode.type === "month";
  var isWeekMonthMode = isWeekMode || isMonthMode;
  var isTodayInHoursInDays = getTodayHoursInDays(hoursInDays);
  var areHoursInDays = hoursInDays.length > 0;
  var weekDayWidth = hourWidth * HOURS_IN_DAY;
  var monthsWidth = useMemo(function () {
    return getTimelineMonthsWidth({
      months: months,
      weekDayWidth: weekDayWidth
    });
  }, [months, weekDayWidth]);
  var dividers = generateArray(timelineDividers);
  return {
    isWeekMonthMode: isWeekMonthMode,
    isMonthMode: isMonthMode,
    isTodayInHoursInDays: isTodayInHoursInDays,
    areHoursInDays: areHoursInDays,
    time: timeSlots,
    weekDayWidth: weekDayWidth,
    monthsWidth: monthsWidth,
    timelineHeight: timelineHeight,
    dividers: dividers,
    timelineDividers: timelineDividers,
    formatWeekMonthDate: formatWeekMonthDate,
    getTime: getTime,
    getDayMonthName: getDayMonthName,
    getTimelineProps: getTimelineProps,
    getCurrentTimeProps: getCurrentTimeProps
  };
}

function useLine(_ref) {
  var timezone = _ref.timezone,
    startDate = _ref.startDate,
    endDate = _ref.endDate,
    hoursInDays = _ref.hoursInDays,
    dayWidth = _ref.dayWidth,
    hourWidth = _ref.hourWidth,
    sidebarWidth = _ref.sidebarWidth,
    liveRefreshTime = _ref.liveRefreshTime;
  var _React$useState = React__default.useState(true),
    showLine = _React$useState[0],
    setShowLine = _React$useState[1];
  var _React$useState2 = React__default.useState(getInitialState),
    positionX = _React$useState2[0],
    setPositionX = _React$useState2[1];
  // Variables
  var timezoneSerialized = JSON.stringify(timezone);
  var hoursInDaysSerialized = JSON.stringify(hoursInDays);
  var liveIntervalTime = liveRefreshTime * 1000;
  var isDayEnd = positionX <= dayWidth;
  var isScrollX = React__default.useMemo(function () {
    return isDayEnd ? liveIntervalTime : null;
  }, [isDayEnd, liveIntervalTime]);
  // Helpers
  function getInitialState() {
    if (hoursInDays.length > 0) return getHoursInDaysPositionX({
      hoursInDays: hoursInDays,
      hourWidth: hourWidth,
      sidebarWidth: sidebarWidth,
      cb: setShowLine
    });
    var positionX = getPositionX(startOfDay(new Date(startDate)), new Date(), startDate, endDate, hourWidth);
    return positionX + sidebarWidth;
  }
  // Effects
  useInterval(function () {
    var offset = hourWidth / HOUR_IN_MINUTES;
    var step = offset / SECONDS_IN_MINUTE;
    var positionOffset = step * liveRefreshTime;
    if (hoursInDays.length > 0) {
      var idCurrentDay = getTodayHoursInDays(hoursInDays);
      if (idCurrentDay) {
        setShowLine(true);
        setPositionX(function (prev) {
          return prev + positionOffset;
        });
      } else {
        setShowLine(false);
      }
    } else {
      setPositionX(function (prev) {
        return prev + positionOffset;
      });
    }
  }, isScrollX);
  React__default.useEffect(function () {
    if (hoursInDays.length > 0) {
      var newPositionX = getHoursInDaysPositionX({
        hoursInDays: hoursInDays,
        hourWidth: hourWidth,
        sidebarWidth: sidebarWidth,
        cb: setShowLine
      });
      setPositionX(newPositionX);
    } else {
      var date = new Date(startDate);
      var _positionX = getPositionX(startOfDay(date), getNewDateTz(), startDate, endDate, hourWidth);
      var _newPositionX = _positionX + sidebarWidth;
      setPositionX(_newPositionX);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, sidebarWidth, hourWidth, hoursInDaysSerialized, timezoneSerialized]);
  return {
    showLine: showLine,
    positionX: positionX
  };
}

function useCurrentTime(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    isBaseTimeFormat = _ref.isBaseTimeFormat,
    mode = _ref.mode,
    positionX = _ref.positionX,
    timelineHeight = _ref.timelineHeight,
    sidebarWidth = _ref.sidebarWidth;
  var formatTime = function formatTime() {
    var date = getNewDateTz();
    if (mode.type === "month") {
      if (isBaseTimeFormat) return format(date, TIME_FORMAT.BASE_DAY_MONTH);
      return format(date, TIME_FORMAT.DAY_MONTH);
    }
    var baseTime = format(date, TIME_FORMAT.HOURS_MIN);
    if (isBaseTimeFormat) {
      var baseFormat = format(date, TIME_FORMAT.BASE_HOURS_TIME).toLowerCase().replace(/\s/g, "");
      return baseFormat;
    }
    return baseTime;
  };
  var handleGetCurrentTimeStyles = function handleGetCurrentTimeStyles() {
    var _boxStyles = boxStyles({
        width: timelineHeight
      }),
      position = _boxStyles.position,
      top = _boxStyles.top,
      height = _boxStyles.height,
      styleWidth = _boxStyles.width;
    var width = isVerticalMode ? styleWidth : "auto";
    var commonStyles = {
      position: position,
      width: width,
      height: height
    };
    if (isVerticalMode) {
      return {
        position: _extends({
          top: positionX - sidebarWidth,
          left: top
        }, commonStyles)
      };
    }
    return {
      position: _extends({
        top: top,
        left: positionX - sidebarWidth
      }, commonStyles)
    };
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  var time = React__default.useMemo(function () {
    return formatTime();
  }, [positionX, isBaseTimeFormat]);
  return {
    time: time,
    getCurrentTimeStyles: handleGetCurrentTimeStyles
  };
}

var _excluded$3 = ["mode", "grid", "timelineHeight", "sidebarWidth", "hourWidth", "dayWidth"];
function useGrid(_ref) {
  var mode = _ref.mode,
    grid = _ref.grid,
    timelineHeight = _ref.timelineHeight,
    sidebarWidth = _ref.sidebarWidth,
    hourWidth = _ref.hourWidth,
    dayWidth = _ref.dayWidth,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  var isVerticalMode = rest.isVerticalMode,
    isBaseTimeFormat = rest.isBaseTimeFormat,
    days = rest.days,
    hoursInDays = rest.hoursInDays,
    months = rest.months,
    numberOfDays = rest.numberOfDays,
    numberOfHoursInDay = rest.numberOfHoursInDay,
    numberOfMonths = rest.numberOfMonths,
    offsetStartHoursRange = rest.offsetStartHoursRange,
    timelineDividers = rest.timelineDividers;
  var handleItemClick = useCallback(function (item, index) {
    return function () {
      getClickGridItemData({
        isVerticalMode: isVerticalMode,
        index: index,
        item: item,
        grid: grid,
        mode: mode,
        dayWidth: dayWidth,
        hourWidth: hourWidth,
        timelineHeight: timelineHeight,
        sidebarWidth: sidebarWidth,
        isBaseTimeFormat: isBaseTimeFormat,
        days: days,
        hoursInDays: hoursInDays,
        months: months,
        numberOfDays: numberOfDays,
        numberOfHoursInDay: numberOfHoursInDay,
        numberOfMonths: numberOfMonths,
        offsetStartHoursRange: offsetStartHoursRange,
        timelineDividers: timelineDividers
      });
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isVerticalMode, hourWidth, dayWidth, sidebarWidth, isBaseTimeFormat, days, hoursInDays, months, numberOfDays, numberOfHoursInDay, numberOfMonths, offsetStartHoursRange, mode.type]);
  var handleItemDrop = useCallback(function (item, index, dataAttributes) {
    return function () {
      getClickGridItemData({
        isDrop: true,
        isVerticalMode: isVerticalMode,
        index: index,
        item: item,
        grid: grid,
        mode: mode,
        dayWidth: dayWidth,
        hourWidth: hourWidth,
        timelineHeight: timelineHeight,
        sidebarWidth: sidebarWidth,
        isBaseTimeFormat: isBaseTimeFormat,
        days: days,
        hoursInDays: hoursInDays,
        months: months,
        numberOfDays: numberOfDays,
        numberOfHoursInDay: numberOfHoursInDay,
        numberOfMonths: numberOfMonths,
        offsetStartHoursRange: offsetStartHoursRange,
        timelineDividers: timelineDividers,
        dataAttributes: dataAttributes
      });
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isVerticalMode, hourWidth, dayWidth, sidebarWidth, isBaseTimeFormat, days, hoursInDays, months, numberOfDays, numberOfHoursInDay, numberOfMonths, offsetStartHoursRange, mode.type]);
  return {
    onItemClick: handleItemClick,
    onItemDrop: handleItemDrop
  };
}

function useGridExternalDnD(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    onItemDrop = _ref.onItemDrop;
  var dropAreaRef = React__default.useRef(null);
  var _React$useState = React__default.useState(false),
    isDragOver = _React$useState[0],
    setIsDragOver = _React$useState[1];
  var handleDrop = useCallback(function (item, index) {
    return function (e) {
      e.preventDefault();
      if (dropAreaRef.current) {
        setIsDragOver(false);
        var droppedItemId = e.dataTransfer.getData("text/plain");
        var droppedItem = document.getElementById(droppedItemId);
        if (droppedItem) {
          // Loop through all attributes
          var attributes = droppedItem.attributes;
          var dataAttributes = {};
          for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            if (attribute.name.startsWith("data-")) {
              dataAttributes[attribute.name.replace("data-", "")] = attribute.value;
            }
          }
          // Call the onDrop callback with the dropped item, attributes, and position
          onItemDrop == null || onItemDrop(item, index, dataAttributes)();
        }
      }
    };
  }, [onItemDrop]);
  var handleDragEnter = useCallback(function (e) {
    if (e) {
      e.preventDefault();
      if (dropAreaRef.current) {
        setIsDragOver(true);
      }
    }
  }, []);
  var handleDragLeave = useCallback(function (e) {
    e.preventDefault();
    if (dropAreaRef.current) {
      setIsDragOver(false);
    }
  }, []);
  return {
    isDragOver: isDragOver,
    dropAreaRef: dropAreaRef,
    onDrop: handleDrop,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave
  };
}

var _excluded$4 = ["onItemClick", "onItemDrop"];
var GridDivider$1 = GridDivider;
function GridDividerItem(_ref) {
  var index = _ref.index,
    item = _ref.item,
    dividerProps = _ref.dividerProps;
  var styles = dividerProps.styles,
    props = dividerProps.props;
  var onItemClick = props.onItemClick,
    onItemDrop = props.onItemDrop,
    restProps = _objectWithoutPropertiesLoose(props, _excluded$4);
  var _useGridExternalDnD = useGridExternalDnD({
      onItemDrop: onItemDrop
    }),
    isDragOver = _useGridExternalDnD.isDragOver,
    onDrop = _useGridExternalDnD.onDrop,
    onDragEnter = _useGridExternalDnD.onDragEnter,
    onDragLeave = _useGridExternalDnD.onDragLeave,
    dropAreaRef = _useGridExternalDnD.dropAreaRef;
  return React__default.createElement(GridDivider$1, Object.assign({
    className: "planby-grid-item-divider",
    ref: dropAreaRef,
    key: index
  }, styles, {
    left: styles.left(index)
  }, restProps, {
    onClick: onItemClick(item, index),
    // Drag
    isDragOver: isDragOver,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDrop: onDrop(item, index)
  }));
}

var GridItem$1 = GridItem;
function GridCellItem(_ref) {
  var _channelOverlapsCount;
  var isVerticalMode = _ref.isVerticalMode,
    isProgramVisible = _ref.isProgramVisible,
    isHoverHighlight = _ref.isHoverHighlight,
    isDayMode = _ref.isDayMode,
    isItemClickable = _ref.isItemClickable,
    item = _ref.item,
    index = _ref.index,
    channelOverlapsCount = _ref.channelOverlapsCount,
    hourWidth = _ref.hourWidth,
    timelineDividers = _ref.timelineDividers,
    renderGridCell = _ref.renderGridCell,
    onItemClick = _ref.onItemClick,
    onItemDrop = _ref.onItemDrop;
  var overlapsCount = (_channelOverlapsCount = channelOverlapsCount[item.channel.uuid]) != null ? _channelOverlapsCount : 1;
  var isVisible = isProgramVisible(item.position, overlapsCount);
  var _useGridExternalDnD = useGridExternalDnD({
      onItemDrop: onItemDrop
    }),
    isDragOver = _useGridExternalDnD.isDragOver,
    dropAreaRef = _useGridExternalDnD.dropAreaRef,
    onDrop = _useGridExternalDnD.onDrop,
    onDragEnter = _useGridExternalDnD.onDragEnter,
    onDragLeave = _useGridExternalDnD.onDragLeave;
  if (!isVisible) return null;
  var gridItemClickProps = isDayMode ? {
    isItemClickable: false
  } : {
    onClick: onItemClick(item),
    isItemClickable: isItemClickable
  };
  var dividerProps = {
    styles: {
      left: function left(index) {
        return index * (hourWidth / timelineDividers);
      },
      width: hourWidth / timelineDividers
    },
    props: {
      isVerticalMode: isVerticalMode,
      isHoverHighlight: isHoverHighlight,
      isItemClickable: isItemClickable,
      onItemClick: onItemClick,
      onItemDrop: onItemDrop
    }
  };
  var gridItemDnDProps = isDayMode ? {} : {
    isDragOver: isDragOver,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDrop: onDrop(item, index)
  };
  if (renderGridCell) {
    var id = item.channel.uuid + index;
    return renderGridCell({
      isDayMode: isDayMode,
      id: id,
      index: index,
      item: item,
      isHoverHighlight: isHoverHighlight,
      timelineDividers: timelineDividers,
      gridDividerProps: dividerProps,
      timelineDividerArray: generateArray(timelineDividers),
      gridItemClickProps: gridItemClickProps,
      gridItemDnDProps: gridItemDnDProps
    });
  }
  return createElement(GridItem$1, Object.assign({
    ref: dropAreaRef,
    key: item.channel.uuid + index,
    className: "planby-grid-item",
    isDayMode: isDayMode,
    isHoverHighlight: isHoverHighlight
  }, item.position, gridItemClickProps, gridItemDnDProps), isDayMode && generateArray(timelineDividers).map(function (_, index) {
    return createElement(GridDividerItem, {
      key: index,
      index: index,
      item: item,
      dividerProps: dividerProps
    });
  }));
}

var _excluded$5 = ["isVerticalMode", "isProgramVisible", "channelOverlapsCount", "grid", "gridItems", "mode", "hourWidth", "timelineDividers", "renderGridCell"];
var GridContainer$1 = GridContainer;
function Grid(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    isProgramVisible = _ref.isProgramVisible,
    channelOverlapsCount = _ref.channelOverlapsCount,
    grid = _ref.grid,
    gridItems = _ref.gridItems,
    mode = _ref.mode,
    hourWidth = _ref.hourWidth,
    timelineDividers = _ref.timelineDividers,
    renderGridCell = _ref.renderGridCell,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  var _useGrid = useGrid(_extends({
      isVerticalMode: isVerticalMode,
      grid: grid,
      mode: mode,
      hourWidth: hourWidth,
      timelineDividers: timelineDividers
    }, rest)),
    onItemClick = _useGrid.onItemClick,
    onItemDrop = _useGrid.onItemDrop;
  var isDayMode = mode.type === "day";
  var isHoverHighlight = grid.hoverHighlight;
  var isItemClickable = !!grid.onGridItemClick;
  var renderGridItem = function renderGridItem(item, index) {
    var props = {
      isVerticalMode: isVerticalMode,
      isProgramVisible: isProgramVisible,
      isHoverHighlight: isHoverHighlight,
      isDayMode: isDayMode,
      isItemClickable: isItemClickable,
      item: item,
      index: index,
      channelOverlapsCount: channelOverlapsCount,
      hourWidth: hourWidth,
      timelineDividers: timelineDividers,
      renderGridCell: renderGridCell,
      onItemClick: onItemClick,
      onItemDrop: onItemDrop
    };
    // @ts-ignore
    return createElement(GridCellItem, Object.assign({
      key: item.channel.uuid + index
    }, props));
  };
  return createElement(GridContainer$1, {
    className: "planby-grid"
  }, gridItems.map(function (item, index) {
    return renderGridItem(item, index);
  }));
}

var ScrollBox$1 = ScrollBox,
  Content$1 = Content;
var Layout = /*#__PURE__*/React__default.forwardRef(function (props, scrollBoxRef) {
  var startDate = props.startDate,
    endDate = props.endDate,
    hoursInDays = props.hoursInDays,
    liveRefreshTime = props.liveRefreshTime,
    scrollY = props.scrollY;
  var channels = props.channels,
    channelOverlapsCount = props.channelOverlapsCount,
    programs = props.programs,
    programOverlaps = props.programOverlaps,
    layerOverlapLevel = props.layerOverlapLevel;
  var timezone = props.timezone,
    areas = props.areas,
    grid = props.grid,
    gridItems = props.gridItems,
    mode = props.mode,
    dnd = props.dnd,
    snap = props.snap,
    overlap = props.overlap,
    overlapMode = props.overlapMode,
    timelineDividers = props.timelineDividers;
  var dayWidth = props.dayWidth,
    hourWidth = props.hourWidth,
    monthWidth = props.monthWidth,
    sidebarWidth = props.sidebarWidth,
    timelineHeight = props.timelineHeight,
    itemHeight = props.itemHeight;
  var days = props.days,
    months = props.months,
    numberOfHoursInDay = props.numberOfHoursInDay,
    numberOfDays = props.numberOfDays,
    numberOfMonths = props.numberOfMonths,
    offsetStartHoursRange = props.offsetStartHoursRange;
  var _props$isVerticalMode = props.isVerticalMode,
    isVerticalMode = _props$isVerticalMode === void 0 ? false : _props$isVerticalMode,
    _props$isRTL = props.isRTL,
    isRTL = _props$isRTL === void 0 ? false : _props$isRTL,
    _props$isSidebar = props.isSidebar,
    isSidebar = _props$isSidebar === void 0 ? true : _props$isSidebar,
    _props$isTimeline = props.isTimeline,
    isTimeline = _props$isTimeline === void 0 ? true : _props$isTimeline,
    _props$isLine = props.isLine,
    isLine = _props$isLine === void 0 ? true : _props$isLine,
    isToday = props.isToday,
    _props$isBaseTimeForm = props.isBaseTimeFormat,
    isBaseTimeFormat = _props$isBaseTimeForm === void 0 ? false : _props$isBaseTimeForm,
    _props$isCurrentTime = props.isCurrentTime,
    isCurrentTime = _props$isCurrentTime === void 0 ? false : _props$isCurrentTime,
    _props$isResize = props.isResize,
    isResize = _props$isResize === void 0 ? false : _props$isResize;
  var dragMouseUp = props.dragMouseUp,
    resizeMouseUp = props.resizeMouseUp,
    openChannelGroupTree = props.openChannelGroupTree,
    onLayoutBgClick = props.onLayoutBgClick,
    onScroll = props.onScroll,
    isProgramVisible = props.isProgramVisible,
    isChannelVisible = props.isChannelVisible,
    isTimelineVisible = props.isTimelineVisible,
    renderProgram = props.renderProgram,
    renderChannel = props.renderChannel,
    renderTimeline = props.renderTimeline,
    renderLine = props.renderLine,
    renderCurrentTime = props.renderCurrentTime,
    renderGridCell = props.renderGridCell;
  // Calculate the height of the content
  var channelsLength = channels.length;
  var programsOverlapsLength = Object.keys(programOverlaps).length;
  var programOverlapsSerialized = JSON.stringify(programOverlaps);
  var contentHeight = React__default.useMemo(function () {
    if (programsOverlapsLength > 0) {
      return getChannelsContentHeight(channels);
    }
    return channelsLength * itemHeight;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [channelsLength, programsOverlapsLength, itemHeight, programOverlapsSerialized]);
  var showAreas = areas.length > 0;
  var isFuture = isFutureTime(endDate);
  var renderPrograms = function renderPrograms(program, index) {
    var _channelOverlapsCount, _data$fixedVisibility;
    var position = program.position,
      data = program.data;
    var overlapsCount = (_channelOverlapsCount = channelOverlapsCount[program.data.channelUuid]) != null ? _channelOverlapsCount : 1;
    var isVisible = (_data$fixedVisibility = data.fixedVisibility) != null ? _data$fixedVisibility : isProgramVisible(position, overlapsCount);
    if (isVisible) {
      setLayoutScreenCloneElement(program, index);
      var options = getProgramOptions({
        isVerticalMode: isVerticalMode,
        program: program,
        programOverlaps: programOverlaps,
        layerOverlapLevel: layerOverlapLevel,
        overlapMode: overlapMode,
        overlap: overlap
      });
      var _props = {
        isRTL: isRTL,
        isResize: isResize,
        isVerticalMode: isVerticalMode,
        isBaseTimeFormat: isBaseTimeFormat,
        startDate: startDate,
        program: options,
        liveRefreshTime: liveRefreshTime,
        snap: snap,
        mode: mode,
        dnd: dnd,
        dayWidth: dayWidth,
        contentHeight: contentHeight,
        itemHeight: itemHeight,
        hourWidth: hourWidth,
        dragMouseUp: dragMouseUp,
        resizeMouseUp: resizeMouseUp
      };
      if (renderProgram) return renderProgram(_props);
      return React__default.createElement(Program, Object.assign({
        key: program.data.channelUuid + "-" + program.data.id
      }, _props));
    }
    deleteLayoutScreenCloneElement(program);
    return null;
  };
  var renderTopbar = function renderTopbar() {
    var timeProps = {
      isVerticalMode: isVerticalMode,
      isSidebar: isSidebar,
      isRTL: isRTL,
      isTimelineVisible: isTimelineVisible,
      isToday: isToday,
      isBaseTimeFormat: isBaseTimeFormat,
      isCurrentTime: isCurrentTime,
      timezone: timezone,
      startDate: startDate,
      endDate: endDate,
      dayWidth: dayWidth,
      sidebarWidth: sidebarWidth,
      timelineHeight: timelineHeight,
      offsetStartHoursRange: offsetStartHoursRange,
      monthWidth: monthWidth,
      numberOfHoursInDay: numberOfHoursInDay,
      numberOfMonths: numberOfMonths,
      numberOfDays: numberOfDays,
      hourWidth: hourWidth,
      days: days,
      months: months,
      hoursInDays: hoursInDays,
      liveRefreshTime: liveRefreshTime,
      mode: mode,
      timelineDividers: timelineDividers,
      renderCurrentTime: renderCurrentTime
    };
    if (renderTimeline) {
      return renderTimeline(timeProps);
    }
    return React__default.createElement(Timeline, Object.assign({}, timeProps));
  };
  return React__default.createElement(ScrollBox$1, {
    ref: scrollBoxRef,
    id: "planby-layout-scrollbox",
    className: "planby-layout",
    isRTL: isRTL,
    onScroll: onScroll
  }, grid.enabled && React__default.createElement(Grid, {
    isVerticalMode: isVerticalMode,
    isProgramVisible: isProgramVisible,
    channelOverlapsCount: channelOverlapsCount,
    isBaseTimeFormat: isBaseTimeFormat,
    hourWidth: hourWidth,
    dayWidth: dayWidth,
    days: days,
    hoursInDays: hoursInDays,
    months: months,
    numberOfDays: numberOfDays,
    numberOfHoursInDay: numberOfHoursInDay,
    numberOfMonths: numberOfMonths,
    offsetStartHoursRange: offsetStartHoursRange,
    grid: grid,
    gridItems: gridItems,
    mode: mode,
    sidebarWidth: sidebarWidth,
    timelineHeight: timelineHeight,
    timelineDividers: timelineDividers,
    renderGridCell: renderGridCell
  }), onLayoutBgClick && React__default.createElement(LayoutBg, {
    className: "planby-layout-bg",
    isSidebar: isSidebar,
    isVerticalMode: isVerticalMode,
    isTimeline: isTimeline,
    dayWidth: dayWidth,
    contentHeight: contentHeight,
    sidebarWidth: sidebarWidth,
    timelineHeight: timelineHeight,
    onClick: onLayoutBgClick
  }), isLine && isToday && isFuture && React__default.createElement(Line, {
    isVerticalMode: isVerticalMode,
    isTimeline: isTimeline,
    dayWidth: dayWidth,
    hourWidth: hourWidth,
    sidebarWidth: sidebarWidth,
    startDate: startDate,
    endDate: endDate,
    height: contentHeight,
    liveRefreshTime: liveRefreshTime,
    hoursInDays: hoursInDays,
    timezone: timezone,
    renderLine: renderLine
  }), showAreas && React__default.createElement(Areas, {
    isVerticalMode: isVerticalMode,
    sidebarWidth: sidebarWidth,
    hourWidth: hourWidth,
    areas: areas,
    startDate: startDate,
    endDate: endDate,
    height: contentHeight,
    timelineHeight: timelineHeight
  }), isTimeline && renderTopbar(), isSidebar && React__default.createElement(Channels, {
    isVerticalMode: isVerticalMode,
    isRTL: isRTL,
    isTimeline: isTimeline,
    isChannelVisible: isChannelVisible,
    timelineHeight: timelineHeight,
    sidebarWidth: sidebarWidth,
    contentHeight: contentHeight,
    channels: channels,
    scrollY: scrollY,
    openChannelGroupTree: openChannelGroupTree,
    renderChannel: renderChannel
  }), React__default.createElement(Content$1, {
    className: "planby-content",
    isVerticalMode: isVerticalMode,
    isSidebar: isSidebar,
    isTimeline: isTimeline,
    dayWidth: dayWidth,
    sidebarWidth: sidebarWidth,
    timelineHeight: timelineHeight,
    contentHeight: contentHeight
  }, programs.map(function (program, index) {
    return renderPrograms(program, index);
  })));
});

var _excluded$6 = ["isVerticalMode", "program", "onClick"];
var ProgramBox$1 = ProgramBox,
  ProgramContent$1 = ProgramContent,
  ProgramResizeHandle$1 = ProgramResizeHandle,
  ProgramFlex$1 = ProgramFlex,
  ProgramStack$1 = ProgramStack,
  ProgramTitle$1 = ProgramTitle,
  ProgramText$1 = ProgramText,
  ProgramImage$1 = ProgramImage;
function Program(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    program = _ref.program,
    onClick = _ref.onClick,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  var _useProgram = useProgram(_extends({
      isVerticalMode: isVerticalMode,
      program: program
    }, rest)),
    isRTL = _useProgram.isRTL,
    isLive = _useProgram.isLive,
    isMinWidth = _useProgram.isMinWidth,
    isMouseEvent = _useProgram.isMouseEvent,
    styles = _useProgram.styles,
    resizeEvents = _useProgram.resizeEvents,
    formatTime = _useProgram.formatTime,
    getMouseEvents = _useProgram.getMouseEvents,
    getMouseEventTempTime = _useProgram.getMouseEventTempTime,
    set12HoursTimeFormat = _useProgram.set12HoursTimeFormat,
    getRTLSinceTime = _useProgram.getRTLSinceTime,
    getRTLTillTime = _useProgram.getRTLTillTime;
  var data = program.data;
  var image = data.image,
    title = data.title,
    since = data.since,
    till = data.till;
  var handleOnContentClick = function handleOnContentClick() {
    return onClick == null ? void 0 : onClick(data);
  };
  var sinceTime = formatTime(getRTLSinceTime(since), set12HoursTimeFormat()).toLowerCase();
  var tillTime = formatTime(getRTLTillTime(till), set12HoursTimeFormat()).toLowerCase();
  var tempTime = getMouseEventTempTime();
  return createElement(ProgramBox$1, Object.assign({
    id: data.id,
    className: "planby-program",
    width: styles.width,
    style: styles.position
  }, getMouseEvents()), createElement(ProgramContent$1, Object.assign({
    className: "planby-program-content",
    width: styles.width,
    isLive: isLive,
    isVerticalMode: isVerticalMode,
    onClick: handleOnContentClick
  }, rest), createElement(ProgramResizeHandle$1, Object.assign({}, resizeEvents.eventsLeft)), createElement(ProgramResizeHandle$1, Object.assign({}, resizeEvents.eventsRight)), createElement(ProgramFlex$1, {
    className: "planby-program-flex",
    isVerticalMode: isVerticalMode
  }, isLive && isMinWidth && createElement(ProgramImage$1, {
    isVerticalMode: isVerticalMode,
    src: image,
    alt: "Preview"
  }), createElement(ProgramStack$1, {
    className: "planby-program-stack",
    isRTL: isRTL
  }, createElement(ProgramTitle$1, {
    className: "planby-program-title"
  }, title), createElement(ProgramText$1, {
    className: "planby-program-text",
    "aria-label": "program time"
  }, isMouseEvent ? createElement(Fragment, null, tempTime.since, " - ", tempTime.till) : createElement(Fragment, null, sinceTime, " - ", tillTime))))));
}

var Box$3 = Box$1;
function Channels(props) {
  var channels = props.channels,
    scrollY = props.scrollY,
    sidebarWidth = props.sidebarWidth,
    timelineHeight = props.timelineHeight,
    contentHeight = props.contentHeight,
    openChannelGroupTree = props.openChannelGroupTree,
    renderChannel = props.renderChannel;
  var isVerticalMode = props.isVerticalMode,
    isRTL = props.isRTL,
    isTimeline = props.isTimeline,
    isChannelVisible = props.isChannelVisible;
  var renderChannels = function renderChannels(channel) {
    var channelWithPosition = getChannelVerticalPosition(channel, isVerticalMode);
    var isVisible = isChannelVisible(channelWithPosition.position);
    var newChannel = getChannelGroupTreeProps(channelWithPosition);
    var groupEventProps = newChannel.groupTree ? {
      onOpenGroupTree: openChannelGroupTree
    } : {};
    if (isVisible) {
      if (renderChannel) {
        return renderChannel(_extends({
          channel: newChannel,
          isVerticalMode: isVerticalMode,
          isRTL: isRTL
        }, groupEventProps));
      }
      return createElement(Channel, Object.assign({
        key: channel.uuid,
        channel: newChannel,
        isVerticalMode: isVerticalMode
      }, groupEventProps));
    }
    return null;
  };
  return createElement(Box$3, {
    className: "planby-channels",
    isVerticalMode: isVerticalMode,
    isRTL: isRTL,
    isTimeline: isTimeline,
    timelineHeight: timelineHeight,
    sidebarWidth: sidebarWidth,
    contentHeight: contentHeight,
    bottom: scrollY
  }, channels.map(renderChannels));
}

var _excluded$7 = ["isVerticalMode", "channel", "onOpenGroupTree", "onClick"];
var ChannelWrapper$1 = ChannelWrapper,
  ChannelLogo$1 = ChannelLogo;
function Channel(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    channel = _ref.channel,
    onOpenGroupTree = _ref.onOpenGroupTree,
    _onClick = _ref.onClick,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  var position = channel.position,
    logo = channel.logo,
    groupTree = channel.groupTree;
  return createElement(ChannelWrapper$1, Object.assign({
    className: "planby-channel",
    isVerticalMode: isVerticalMode,
    groupTree: groupTree,
    onClick: function onClick() {
      var _onOpenGroupTree;
      return (_onOpenGroupTree = onOpenGroupTree == null ? void 0 : onOpenGroupTree(channel)) != null ? _onOpenGroupTree : _onClick == null ? void 0 : _onClick(channel);
    }
  }, position, rest), createElement(ChannelLogo$1, {
    src: logo,
    alt: "Logo"
  }));
}

var CurrentTimeBox$1 = CurrentTimeBox,
  CurrentTimeContent$1 = CurrentTimeContent;
function CurrentTime(props) {
  var isVerticalMode = props.isVerticalMode,
    isBaseTimeFormat = props.isBaseTimeFormat,
    isRTL = props.isRTL;
  var timezone = props.timezone,
    mode = props.mode,
    liveRefreshTime = props.liveRefreshTime,
    startDate = props.startDate,
    endDate = props.endDate,
    hoursInDays = props.hoursInDays;
  var dayWidth = props.dayWidth,
    timelineHeight = props.timelineHeight,
    hourWidth = props.hourWidth,
    sidebarWidth = props.sidebarWidth;
  var renderCurrentTime = props.renderCurrentTime;
  var _useLine = useLine({
      timezone: timezone,
      hoursInDays: hoursInDays,
      startDate: startDate,
      endDate: endDate,
      dayWidth: dayWidth,
      hourWidth: hourWidth,
      sidebarWidth: sidebarWidth,
      liveRefreshTime: liveRefreshTime
    }),
    showLine = _useLine.showLine,
    positionX = _useLine.positionX;
  var _useCurrentTime = useCurrentTime({
      isVerticalMode: isVerticalMode,
      isBaseTimeFormat: isBaseTimeFormat,
      mode: mode,
      positionX: positionX,
      timelineHeight: timelineHeight,
      sidebarWidth: sidebarWidth
    }),
    time = _useCurrentTime.time,
    getCurrentTimeStyles = _useCurrentTime.getCurrentTimeStyles;
  if (!showLine) return null;
  var styles = getCurrentTimeStyles();
  if (renderCurrentTime) {
    return renderCurrentTime({
      isVerticalMode: isVerticalMode,
      isBaseTimeFormat: isBaseTimeFormat,
      isRTL: isRTL,
      time: time,
      styles: styles
    });
  }
  return createElement(CurrentTimeBox$1, Object.assign({
    className: "planby-current-time"
  }, styles.position), createElement(CurrentTimeContent$1, {
    className: "planby-current-content",
    isVerticalMode: isVerticalMode,
    isBaseTimeFormat: isBaseTimeFormat,
    isRTL: isRTL
  }, time));
}

var _excluded$8 = ["isWeekMonthMode", "isMonthMode", "isTodayInHoursInDays", "areHoursInDays", "time"];
var TimelineWrapper$1 = TimelineWrapper,
  TimelineBox$1 = TimelineBox,
  TimelineTime$1 = TimelineTime,
  TimelineDividers$1 = TimelineDividers,
  TimelineDivider$1 = TimelineDivider;
function Timeline(props) {
  var _useTimeline = useTimeline(props),
    isWeekMonthMode = _useTimeline.isWeekMonthMode,
    isMonthMode = _useTimeline.isMonthMode,
    isTodayInHoursInDays = _useTimeline.isTodayInHoursInDays,
    areHoursInDays = _useTimeline.areHoursInDays,
    time = _useTimeline.time,
    rest = _objectWithoutPropertiesLoose(_useTimeline, _excluded$8);
  var timelineHeight = rest.timelineHeight,
    weekDayWidth = rest.weekDayWidth,
    monthsWidth = rest.monthsWidth,
    dividers = rest.dividers,
    timelineDividers = rest.timelineDividers;
  var formatWeekMonthDate = rest.formatWeekMonthDate,
    getTime = rest.getTime,
    getDayMonthName = rest.getDayMonthName,
    getTimelineProps = rest.getTimelineProps,
    getCurrentTimeProps = rest.getCurrentTimeProps;
  var isToday = props.isToday,
    isBaseTimeFormat = props.isBaseTimeFormat,
    isCurrentTime = props.isCurrentTime,
    isRTL = props.isRTL,
    isTimelineVisible = props.isTimelineVisible,
    isVerticalMode = props.isVerticalMode;
  var mode = props.mode;
  var hourWidth = props.hourWidth;
  // Handlers
  var renderDay = function renderDay(item, index) {
    var _getTime = getTime(item),
      isNewDay = _getTime.isNewDay,
      time = _getTime.time;
    var position = {
      left: hourWidth * index,
      width: hourWidth
    };
    var isVisible = isTimelineVisible(position);
    if (!isVisible) return null;
    return createElement(TimelineBox$1, Object.assign({
      className: "planby-timeline-box",
      key: index,
      isToday: isToday,
      isCurrentTime: isCurrentTime,
      isVerticalMode: isVerticalMode,
      isTodayInHoursInDays: isTodayInHoursInDays,
      areHoursInDays: areHoursInDays,
      timelineHeight: timelineHeight
    }, position), createElement(TimelineTime$1, {
      className: "planby-timeline-time",
      isNewDay: isNewDay,
      isBaseTimeFormat: isBaseTimeFormat,
      isRTL: isRTL,
      isVerticalMode: isVerticalMode
    }, time), createElement(TimelineDividers$1, {
      isVerticalMode: isVerticalMode,
      className: "planby-timeline-dividers"
    }, renderDividers(isNewDay)));
  };
  var renderWeekMonth = function renderWeekMonth(item, index) {
    var width = isMonthMode ? monthsWidth[index].width : weekDayWidth;
    var left = isMonthMode ? monthsWidth[index].left : width * index;
    var position = {
      left: left,
      width: width
    };
    var isVisible = isTimelineVisible(position);
    if (!isVisible) return null;
    var isModernStyle = mode.style === "modern";
    return createElement(TimelineWeekMonthBox, Object.assign({
      className: "planby-timeline-box",
      key: index,
      isToday: isToday,
      isWeekMonthMode: isWeekMonthMode,
      isCurrentTime: isCurrentTime,
      isVerticalMode: isVerticalMode,
      timelineHeight: timelineHeight,
      styleType: mode.style
    }, position), createElement(TimelineWeekMonthDate, {
      className: "planby-timeline-week-month-date",
      isRTL: isRTL,
      isVerticalMode: isVerticalMode,
      styleType: mode.style
    }, isModernStyle && createElement("span", null, getDayMonthName(item)), createElement("span", null, formatWeekMonthDate(item))));
  };
  var renderDividers = function renderDividers(isNewDay) {
    return dividers.map(function (_, index) {
      return createElement(TimelineDivider$1, {
        key: index,
        isVerticalMode: isVerticalMode,
        className: "planby-timeline-divider",
        isNewDay: isNewDay,
        left: index * (hourWidth / timelineDividers),
        width: hourWidth / timelineDividers
      });
    });
  };
  var renderTimelineItems = function renderTimelineItems(item, index) {
    return isWeekMonthMode ? renderWeekMonth(item, index) : renderDay(item, index);
  };
  return createElement(TimelineWrapper$1, Object.assign({
    className: "planby-timeline-wrapper"
  }, getTimelineProps()), isCurrentTime && isToday && createElement(CurrentTime, Object.assign({}, getCurrentTimeProps())), time.map(function (item, index) {
    return renderTimelineItems(item, index);
  }));
}

var _excluded$9 = ["isTimeline", "isVerticalMode", "height", "renderLine"];
var lineStyles$1 = lineStyles,
  LineBox$1 = LineBox;
function Line(_ref) {
  var isTimeline = _ref.isTimeline,
    isVerticalMode = _ref.isVerticalMode,
    height = _ref.height,
    renderLine = _ref.renderLine,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  var _useLine = useLine(rest),
    positionX = _useLine.positionX,
    showLine = _useLine.showLine;
  if (!showLine) return null;
  var position = {
    height: height,
    left: positionX,
    zIndex: Layers.Line
  };
  var styles = getLineStyles({
    isVerticalMode: isVerticalMode,
    isTimeline: isTimeline,
    lineStyles: lineStyles$1,
    position: position
  });
  if (renderLine) return createElement(Fragment, null, renderLine({
    styles: styles,
    isVerticalMode: isVerticalMode,
    isTimeline: isTimeline
  }));
  return createElement(LineBox$1, Object.assign({
    className: "planby-line",
    isVerticalMode: isVerticalMode,
    isTimeline: isTimeline
  }, position));
}

var Box$4 = Box$2,
  Shape$1 = Shape;
var Element = function Element(_ref) {
  var width = _ref.width,
    color = _ref.color,
    animate = _ref.animate,
    marginRight = _ref.marginRight,
    transition = _ref.transition;
  return createElement(Shape$1, {
    className: "SHAPE",
    width: width,
    color: color,
    animate: animate,
    transition: transition,
    marginRight: marginRight
  });
};
function Loader() {
  return createElement(Box$4, {
    "aria-label": "loading"
  }, createElement("div", null, createElement("div", {
    style: {
      display: "flex",
      justifyContent: "end",
      marginBottom: 16
    }
  }, createElement(Element, {
    animate: {
      right: ["0px", "75px", "0px"]
    },
    transition: {
      duration: 1
    },
    width: 217,
    color: "teal",
    marginRight: 10
  }), createElement(Element, {
    width: 122,
    color: "purple",
    animate: {
      right: ["0px", "50px", "0px"]
    },
    transition: {
      duration: 1,
      delay: 0.02
    }
  })), createElement("div", {
    style: {
      display: "flex",
      justifyContent: "end",
      marginBottom: 16
    }
  }, createElement(Element, {
    width: 267,
    color: "pink",
    animate: {
      right: ["0px", "70px", "0px"]
    },
    transition: {
      delay: 0.5,
      duration: 1
    }
  })), createElement("div", {
    style: {
      display: "flex",
      justifyContent: "end"
    }
  }, createElement(Element, {
    width: 217,
    color: "purple",
    marginRight: 10,
    animate: {
      right: ["0px", "95px", "0px"]
    },
    transition: {
      delay: 0.3,
      duration: 1
    }
  }), createElement(Element, {
    width: 80,
    color: "teal",
    animate: {
      right: ["0px", "70px", "0px"]
    },
    transition: {
      duration: 1,
      delay: 0.33
    }
  }))));
}

var getAreasFields = function getAreasFields(_ref) {
  var _area$endDate;
  var area = _ref.area,
    startDate = _ref.startDate,
    endDate = _ref.endDate,
    hourWidth = _ref.hourWidth,
    sidebarWidth = _ref.sidebarWidth,
    timelineHeight = _ref.timelineHeight,
    height = _ref.height;
  var areaStartDate = area.startDate;
  var areaEndDate = (_area$endDate = area == null ? void 0 : area.endDate) != null ? _area$endDate : areaStartDate;
  var left = getPositionX(startDate, areaStartDate, startDate, endDate, hourWidth) + sidebarWidth;
  var width = getPositionX(areaStartDate, areaEndDate, startDate, endDate, hourWidth);
  var intervalOptions = {
    start: new Date(startDate),
    end: new Date(endDate)
  };
  var isStartAreaDateValid = isWithinInterval(new Date(areaStartDate), intervalOptions);
  var showArea = isStartAreaDateValid;
  var areaFieldStyles = {
    positionX: left,
    width: width,
    height: height,
    timelineHeight: timelineHeight
  };
  return _extends({}, area, {
    showArea: showArea,
    areaFieldStyles: areaFieldStyles,
    areaBgStyles: area.styles
  });
};

function useAreas(props) {
  var startDate = props.startDate,
    endDate = props.endDate,
    areas = props.areas;
  var hourWidth = props.hourWidth,
    sidebarWidth = props.sidebarWidth,
    timelineHeight = props.timelineHeight,
    height = props.height;
  var areasSerialized = JSON.stringify(areas);
  var data = useMemo(function () {
    return areas.map(function (area) {
      var options = {
        area: area,
        hourWidth: hourWidth,
        sidebarWidth: sidebarWidth,
        height: height,
        startDate: startDate,
        endDate: endDate,
        timelineHeight: timelineHeight
      };
      return getAreasFields(options);
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [areasSerialized, hourWidth, sidebarWidth, height, startDate, endDate, timelineHeight]);
  return {
    data: data
  };
}

var _excluded$a = ["isVerticalMode"];
var AreaAnnotation$1 = AreaAnnotation,
  AreaBg$1 = AreaBg,
  AreaFiled$1 = AreaFiled;
function Areas(_ref) {
  var isVerticalMode = _ref.isVerticalMode,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  var _useAreas = useAreas(props),
    data = _useAreas.data;
  var renderAreaAnnotation = function renderAreaAnnotation(props) {
    var isLeft = props.isLeft,
      text = props.text;
    var areaFieldStyles = props.areaFieldStyles,
      styles = props.styles;
    var className = isLeft ? "left" : "right";
    return React__default.createElement(AreaAnnotation$1, {
      className: "planby-area-annotation-" + className,
      isVerticalMode: isVerticalMode,
      isLeft: isLeft,
      timelineHeight: areaFieldStyles.timelineHeight,
      width: areaFieldStyles.width,
      style: styles
    }, text);
  };
  var renderArea = function renderArea(props, index) {
    var _annotations$styles;
    var showArea = props.showArea,
      annotations = props.annotations,
      onClick = props.onClick;
    var _props$areaBgStyles = props.areaBgStyles,
      areaBgStyles = _props$areaBgStyles === void 0 ? {} : _props$areaBgStyles,
      areaFieldStyles = props.areaFieldStyles;
    if (!showArea) return null;
    var annotationProps = {
      areaFieldStyles: areaFieldStyles,
      styles: (_annotations$styles = annotations == null ? void 0 : annotations.styles) != null ? _annotations$styles : {}
    };
    return React__default.createElement(AreaFiled$1, Object.assign({
      key: index,
      className: "planby-area-field",
      isVerticalMode: isVerticalMode,
      isClickable: !!onClick,
      onClick: onClick
    }, areaFieldStyles), React__default.createElement(AreaBg$1, {
      className: "planby-area-bg",
      style: areaBgStyles
    }), annotations && React__default.createElement(React__default.Fragment, null, annotations.textStart && renderAreaAnnotation(_extends({
      isLeft: true,
      text: annotations.textStart
    }, annotationProps)), annotations.textEnd && renderAreaAnnotation(_extends({
      isLeft: false,
      text: annotations.textEnd
    }, annotationProps))));
  };
  return React__default.createElement(React__default.Fragment, null, data.map(function (props, index) {
    return renderArea(props, index);
  }));
}

var _excluded$b = ["children", "width", "height", "sidebarWidth", "timelineHeight", "theme", "globalStyles", "isVerticalMode", "isRTL", "isSidebar", "isTimeline", "isLoading", "loader"];
var Container$1 = Container,
  Wrapper$1 = Wrapper,
  Box$5 = Box;
var Epg = /*#__PURE__*/React__default.forwardRef(function (_ref, containerRef) {
  var children = _ref.children,
    width = _ref.width,
    height = _ref.height,
    sidebarWidth = _ref.sidebarWidth,
    timelineHeight = _ref.timelineHeight,
    theme = _ref.theme,
    customGlobalStyles = _ref.globalStyles,
    _ref$isVerticalMode = _ref.isVerticalMode,
    isVerticalMode = _ref$isVerticalMode === void 0 ? false : _ref$isVerticalMode,
    _ref$isRTL = _ref.isRTL,
    isRTL = _ref$isRTL === void 0 ? false : _ref$isRTL,
    _ref$isSidebar = _ref.isSidebar,
    isSidebar = _ref$isSidebar === void 0 ? true : _ref$isSidebar,
    _ref$isTimeline = _ref.isTimeline,
    isTimeline = _ref$isTimeline === void 0 ? true : _ref$isTimeline,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    LoaderComponent = _ref.loader,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  var renderLoader = function renderLoader() {
    return LoaderComponent != null ? LoaderComponent : React__default.createElement(Loader, null);
  };
  var epgGlobalStyles = customGlobalStyles != null ? customGlobalStyles : globalStyles;
  var blankSpaceStyles = isVerticalMode ? {
    height: sidebarWidth,
    width: timelineHeight
  } : {
    width: sidebarWidth,
    height: timelineHeight
  };
  return React__default.createElement(ThemeProvider, {
    theme: theme
  }, React__default.createElement(Global, {
    styles: epgGlobalStyles
  }), React__default.createElement(Container$1, Object.assign({
    className: "planby",
    width: width,
    height: height,
    ref: containerRef
  }, rest), React__default.createElement(WrapperDnD, null, isSidebar && isTimeline && React__default.createElement(Box$5, {
    className: "planby-corner-box",
    isRTL: isRTL,
    left: 0,
    top: 0,
    style: blankSpaceStyles
  }), isLoading && renderLoader(), children)));
});
function WrapperDnD(_ref2) {
  var children = _ref2.children;
  var _useGridExternalDnD = useGridExternalDnD(),
    isDragOver = _useGridExternalDnD.isDragOver,
    onDragEnter = _useGridExternalDnD.onDragEnter,
    onDragLeave = _useGridExternalDnD.onDragLeave,
    dropAreaRef = _useGridExternalDnD.dropAreaRef;
  React__default.useEffect(function () {
    var gridElement = document.querySelector(".planby-grid");
    if (gridElement) {
      if (isDragOver) {
        gridElement.style.zIndex = "5";
      } else {
        gridElement.style.zIndex = "1";
      }
    }
  }, [isDragOver]);
  return React__default.createElement(Wrapper$1, {
    ref: dropAreaRef,
    id: "planby-wrapper",
    onDragOver: onDragEnter,
    onDragLeaveCapture: onDragLeave,
    onDrop: onDragLeave
  }, children);
}

// Styles
var ChannelBox = ChannelWrapper,
  ChannelLogo$2 = ChannelLogo;
var CurrentTimeBox$2 = CurrentTimeBox,
  CurrentTimeContent$2 = CurrentTimeContent;
var GridItem$2 = GridItem,
  GridDivider$2 = GridDivider;
var ProgramBox$2 = ProgramBox,
  ProgramContent$2 = ProgramContent,
  ProgramFlex$2 = ProgramFlex,
  ProgramStack$2 = ProgramStack,
  ProgramTitle$2 = ProgramTitle,
  ProgramText$2 = ProgramText,
  ProgramImage$2 = ProgramImage,
  ProgramResizeHandle$2 = ProgramResizeHandle;
var TimelineWrapper$2 = TimelineWrapper,
  TimelineBox$2 = TimelineBox,
  TimelineTime$2 = TimelineTime,
  TimelineDividerStyled = TimelineDivider,
  TimelineDividers$2 = TimelineDividers,
  TimelineWeekMonthBox$1 = TimelineWeekMonthBox,
  TimelineWeekMonthDate$1 = TimelineWeekMonthDate;
var TimelineDivider$2 = TimelineDividerStyled;

export { ChannelBox, ChannelLogo$2 as ChannelLogo, CurrentTime, CurrentTimeBox$2 as CurrentTimeBox, CurrentTimeContent$2 as CurrentTimeContent, Epg, GridDivider$2 as GridDivider, GridItem$2 as GridItem, Layout, ProgramBox$2 as ProgramBox, ProgramContent$2 as ProgramContent, ProgramFlex$2 as ProgramFlex, ProgramImage$2 as ProgramImage, ProgramResizeHandle$2 as ProgramResizeHandle, ProgramStack$2 as ProgramStack, ProgramText$2 as ProgramText, ProgramTitle$2 as ProgramTitle, TimelineBox$2 as TimelineBox, TimelineDivider$2 as TimelineDivider, TimelineDividers$2 as TimelineDividers, TimelineTime$2 as TimelineTime, TimelineWeekMonthBox$1 as TimelineWeekMonthBox, TimelineWeekMonthDate$1 as TimelineWeekMonthDate, TimelineWrapper$2 as TimelineWrapper, useEpg, useGridExternalDnD, useProgram, useTimeline };
//# sourceMappingURL=planby-pro.esm.js.map
