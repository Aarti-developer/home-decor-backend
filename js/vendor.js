"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function (e, n, t) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function s() {
    var e, n, t, s, a, i, r;

    for (var l in c) {
      if (c.hasOwnProperty(l)) {
        if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }

        for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), f.push((s ? "" : "no-") + r.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        t = Modernizr._config.classPrefix || "";

    if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n);
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function r() {
    var e = n.body;
    return e || (e = i(p ? "svg" : "body"), e.fake = !0), e;
  }

  function l(e, t, o, s) {
    var a,
        l,
        f,
        c,
        d = "modernizr",
        p = i("div"),
        h = r();
    if (parseInt(o, 10)) for (; o--;) {
      f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
    }
    return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l;
  }

  var f = [],
      c = [],
      d = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e]);
      }, 0);
    },
    addTest: function addTest(e, n, t) {
      c.push({
        name: e,
        fn: n,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      c.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = d, Modernizr = new Modernizr();
  var u = n.documentElement,
      p = "svg" === u.nodeName.toLowerCase(),
      h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  d._prefixes = h;
  var m = d.testStyles = l;
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;else {
      var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      m(o, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  }), s(), a(f), delete d.addTest, delete d.addAsyncTest;

  for (var v = 0; v < Modernizr._q.length; v++) {
    Modernizr._q[v]();
  }

  e.Modernizr = Modernizr;
}(window, document);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap util.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) : typeof define === 'function' && define.amd ? define(['jquery'], factory) : (global = global || self, global.Util = factory(global.jQuery));
})(void 0, function ($) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();
  return Util;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap modal.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) : typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) : (global = global || self, global.Modal = factory(global.jQuery, global.Util));
})(void 0, function ($, Util) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME = 'modal';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);
      $(this._element).removeClass(ClassName.SHOW);
      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event.FOCUSIN);
      $.removeData(this._element, DATA_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName.SCROLLABLE)) {
        this._dialog.querySelector(Selector.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _objectSpread({}, Default, $(this).data(), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
});
"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.1-beta.8
*/
!function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: !1,
      exports: {}
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
  }

  __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
    __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
      enumerable: !0,
      get: getter
    });
  }, __webpack_require__.r = function (exports) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(exports, "__esModule", {
      value: !0
    });
  }, __webpack_require__.t = function (value, mode) {
    if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
    if (4 & mode && "object" == _typeof2(value) && value && value.__esModule) return value;
    var ns = Object.create(null);
    if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
      enumerable: !0,
      value: value
    }), 2 & mode && "string" != typeof value) for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    return ns;
  }, __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ? function () {
      return module.default;
    } : function () {
      return module;
    };
    return __webpack_require__.d(getter, "a", getter), getter;
  }, __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
}([function (module, exports, __webpack_require__) {
  "use strict";

  __webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9);

  var _inputmask2 = _interopRequireDefault(__webpack_require__(4)),
      _inputmask4 = _interopRequireDefault(__webpack_require__(2)),
      _jquery2 = _interopRequireDefault(__webpack_require__(3));

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _inputmask4.default === _jquery2.default && __webpack_require__(10), window.Inputmask = _inputmask2.default;
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask) {
    var formatCode = {
      d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
      dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
        return pad(Date.prototype.getDate.call(this), 2);
      }],
      ddd: [""],
      dddd: [""],
      m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
        return Date.prototype.getMonth.call(this) + 1;
      }],
      mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
        return pad(Date.prototype.getMonth.call(this) + 1, 2);
      }],
      mmm: [""],
      mmmm: [""],
      yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
        return pad(Date.prototype.getFullYear.call(this), 2);
      }],
      yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
        return pad(Date.prototype.getFullYear.call(this), 4);
      }],
      h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
      hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
        return pad(Date.prototype.getHours.call(this), 2);
      }],
      hhh: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
      H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
      HH: ["[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
        return pad(Date.prototype.getHours.call(this), 2);
      }],
      HHH: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
      M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
      MM: ["[0-5][0-9]", Date.prototype.setMinutes, "minutes", function () {
        return pad(Date.prototype.getMinutes.call(this), 2);
      }],
      s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
      ss: ["[0-5][0-9]", Date.prototype.setSeconds, "seconds", function () {
        return pad(Date.prototype.getSeconds.call(this), 2);
      }],
      l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
        return pad(Date.prototype.getMilliseconds.call(this), 3);
      }],
      L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
        return pad(Date.prototype.getMilliseconds.call(this), 2);
      }],
      t: ["[ap]"],
      tt: ["[ap]m"],
      T: ["[AP]"],
      TT: ["[AP]M"],
      Z: [""],
      o: [""],
      S: [""]
    },
        formatAlias = {
      isoDate: "yyyy-mm-dd",
      isoTime: "HH:MM:ss",
      isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
      isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };

    function getTokenizer(opts) {
      if (!opts.tokenizer) {
        var tokens = [];

        for (var ndx in formatCode) {
          -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
        }

        opts.tokenizer = "(" + tokens.join("+|") + ")+?|.", opts.tokenizer = new RegExp(opts.tokenizer, "g");
      }

      return opts.tokenizer;
    }

    function parse(format, dateObjValue, opts) {
      for (var match, mask = ""; match = getTokenizer(opts).exec(format);) {
        if (void 0 === dateObjValue) {
          if (formatCode[match[0]]) mask += "(" + formatCode[match[0]][0] + ")";else switch (match[0]) {
            case "[":
              mask += "(";
              break;

            case "]":
              mask += ")?";
              break;

            default:
              mask += Inputmask.escapeRegex(match[0]);
          }
        } else if (formatCode[match[0]]) {
          var getFn = formatCode[match[0]][3];
          mask += getFn.call(dateObjValue.date);
        } else mask += match[0];
      }

      return mask;
    }

    function pad(val, len) {
      for (val = String(val), len = len || 2; val.length < len;) {
        val = "0" + val;
      }

      return val;
    }

    function analyseMask(maskString, format, opts) {
      var targetProp,
          match,
          dateOperation,
          targetValidator,
          dateObj = {
        date: new Date(1, 0, 1)
      },
          mask = maskString;

      function extendProperty(value) {
        var correctedValue;

        if (opts.min && opts.min[targetProp] || opts.max && opts.max[targetProp]) {
          var min = opts.min && opts.min[targetProp] || opts.max[targetProp],
              max = opts.max && opts.max[targetProp] || opts.min[targetProp];

          for (correctedValue = value.replace(/[^0-9]/g, ""), correctedValue += (min.indexOf(correctedValue) < max.indexOf(correctedValue) ? max : min).toString().substr(correctedValue.length); !new RegExp(targetValidator).test(correctedValue);) {
            correctedValue--;
          }
        } else correctedValue = value.replace(/[^0-9]/g, "0");

        return correctedValue;
      }

      function setValue(dateObj, value, opts) {
        dateObj[targetProp] = extendProperty(value), dateObj["raw" + targetProp] = value, void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
      }

      if ("string" == typeof mask) {
        for (; match = getTokenizer(opts).exec(format);) {
          var value = mask.slice(0, match[0].length);
          formatCode.hasOwnProperty(match[0]) && (targetValidator = formatCode[match[0]][0], targetProp = formatCode[match[0]][2], dateOperation = formatCode[match[0]][1], setValue(dateObj, value)), mask = mask.slice(value.length);
        }

        return dateObj;
      }
    }

    return Inputmask.extendAliases({
      datetime: {
        mask: function mask(opts) {
          return formatCode.S = opts.i18n.ordinalSuffix.join("|"), opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[\[\]]/, ""), opts.min = analyseMask(opts.min, opts.inputFormat, opts), opts.max = analyseMask(opts.max, opts.inputFormat, opts), opts.regex = parse(opts.inputFormat, void 0, opts), null;
        },
        placeholder: "",
        inputFormat: "isoDateTime",
        displayFormat: void 0,
        outputFormat: void 0,
        min: null,
        max: null,
        i18n: {
          dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          ordinalSuffix: ["st", "nd", "rd", "th"]
        },
        postValidation: function postValidation(buffer, currentResult, opts) {
          var result = currentResult,
              dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
          return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = (result = function (dateParts, currentResult) {
            return (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) && currentResult;
          }(dateParts, result)) && function (dateParts, opts) {
            var result = !0;

            if (opts.min) {
              if (dateParts.rawyear) {
                var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""),
                    minYear = opts.min.year.substr(0, rawYear.length);
                result = minYear <= rawYear;
              }

              dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime());
            }

            return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), result;
          }(dateParts, opts)), result;
        },
        onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
          if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
            for (var match, today = new Date(), date = ""; match = getTokenizer(opts).exec(opts.inputFormat);) {
              "d" === match[0].charAt(0) ? date += pad(today.getDate(), match[0].length) : "m" === match[0].charAt(0) ? date += pad(today.getMonth() + 1, match[0].length) : "yyyy" === match[0] ? date += today.getFullYear().toString() : "y" === match[0].charAt(0) && (date += pad(today.getYear(), match[0].length));
            }

            this.inputmask._valueSet(date), $(this).trigger("setvalue");
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts);
        },
        casing: function casing(elem, test, pos, validPositions) {
          return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem;
        },
        insertMode: !1
      }
    }), Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($) {
    return $;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports) {
  module.exports = jQuery;
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__,
      __WEBPACK_AMD_DEFINE_ARRAY__,
      __WEBPACK_AMD_DEFINE_RESULT__,
      _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(5), __webpack_require__(6)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, window, document, undefined) {
    var ua = navigator.userAgent,
        mobile = isInputEventSupported("touchstart"),
        iemobile = /iemobile/i.test(ua),
        iphone = /iphone/i.test(ua) && !iemobile;

    function Inputmask(alias, options, internal) {
      if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
      this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, alias && (options.alias = alias)), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));
    }

    function resolveAlias(aliasStr, options, opts) {
      var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
      return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1);
    }

    function generateMaskSet(opts, nocache) {
      function generateMask(mask, metadata, opts) {
        var regexMask = !1;

        if (null !== mask && "" !== mask || ((regexMask = null !== opts.regex) ? mask = (mask = opts.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (regexMask = !0, mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
          var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
          mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
        }

        var masksetDefinition,
            maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
        return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {
          mask: mask,
          maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
          validPositions: {},
          _buffer: undefined,
          buffer: undefined,
          tests: {},
          excludes: {},
          metadata: metadata,
          maskLength: undefined
        }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), masksetDefinition;
      }

      if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
        if (opts.mask.length > 1) {
          if (null === opts.keepStatic) {
            opts.keepStatic = "auto";

            for (var i = 0; i < opts.mask.length; i++) {
              if (opts.mask[i].charAt(0) !== opts.mask[0].charAt(0)) {
                opts.keepStatic = !0;
                break;
              }
            }
          }

          var altMask = opts.groupmarker[0];
          return $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
            altMask.length > 1 && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
          }), generateMask(altMask += opts.groupmarker[1], opts.mask, opts);
        }

        opts.mask = opts.mask.pop();
      }

      return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);
    }

    function isInputEventSupported(eventName) {
      var el = document.createElement("input"),
          evName = "on" + eventName,
          isSupported = evName in el;
      return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), el = null, isSupported;
    }

    function maskScope(actionObj, maskset, opts) {
      maskset = maskset || this.maskset, opts = opts || this.opts;
      var undoValue,
          $el,
          maxLength,
          colorMask,
          inputmask = this,
          el = this.el,
          isRTL = this.isRTL,
          skipKeyPressEvent = !1,
          skipInputEvent = !1,
          ignorable = !1,
          mouseEnter = !1,
          originalPlaceholder = "";

      function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
        var greedy = opts.greedy;
        clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
        var ndxIntlzr,
            test,
            testPos,
            maskTemplate = [],
            pos = 0,
            lvp = getLastValidPosition();

        do {
          if (!0 === baseOnInput && getMaskSet().validPositions[pos]) testPos = clearOptionalTail && !0 === getMaskSet().validPositions[pos].match.optionality && getMaskSet().validPositions[pos + 1] === undefined && (!0 === getMaskSet().validPositions[pos].generatedInput || getMaskSet().validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : getMaskSet().validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test));else {
            testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice();
            var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
            !1 === jitMasking || jitMasking === undefined || pos < lvp || "number" == typeof jitMasking && isFinite(jitMasking) && jitMasking > pos ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)) : test.jit && test.optionalQuantifier;
          }
          "auto" === opts.keepStatic && test.newBlockMarker && null !== test.fn && (opts.keepStatic = pos - 1), pos++;
        } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);

        return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && getMaskSet().maskLength !== undefined || (getMaskSet().maskLength = pos - 1), opts.greedy = greedy, maskTemplate;
      }

      function getMaskSet() {
        return maskset;
      }

      function resetMaskSet(soft) {
        var maskset = getMaskSet();
        maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
      }

      function getLastValidPosition(closestTo, strict, validPositions) {
        var before = -1,
            after = -1,
            valids = validPositions || getMaskSet().validPositions;

        for (var posNdx in closestTo === undefined && (closestTo = -1), valids) {
          var psNdx = parseInt(posNdx);
          valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), psNdx >= closestTo && (after = psNdx));
        }

        return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after;
      }

      function getDecisionTaker(tst) {
        var decisionTaker = tst.locator[tst.alternation];
        return "string" == typeof decisionTaker && decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]), decisionTaker !== undefined ? decisionTaker.toString() : "";
      }

      function getLocator(tst, align) {
        var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
        if ("" !== locator) for (; locator.length < align;) {
          locator += "0";
        }
        return locator;
      }

      function determineTestTemplate(pos, tests) {
        for (var tstLocator, closest, bestMatch, altTest = getTest(pos = pos > 0 ? pos - 1 : 0), targetLocator = getLocator(altTest), ndx = 0; ndx < tests.length; ndx++) {
          var tst = tests[ndx];
          tstLocator = getLocator(tst, targetLocator.length);
          var distance = Math.abs(tstLocator - targetLocator);
          (closest === undefined || "" !== tstLocator && distance < closest || bestMatch && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, bestMatch = tst);
        }

        return bestMatch;
      }

      function getTestTemplate(pos, ndxIntlzr, tstPs) {
        return getMaskSet().validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
      }

      function getTest(pos, tests) {
        return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : (tests || getTests(pos))[0];
      }

      function positionCanMatchDefinition(pos, def) {
        for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) {
          if (tests[tndx].match && tests[tndx].match.def === def) {
            valid = !0;
            break;
          }
        }

        return valid;
      }

      function getTests(pos, ndxIntlzr, tstPs) {
        var latestMatch,
            maskTokens = getMaskSet().maskToken,
            testPos = ndxIntlzr ? tstPs : 0,
            ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
            matches = [],
            insertStop = !1,
            cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

        function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
          function handleMatch(match, loopNdx, quantifierRecurse) {
            function isFirstMatch(latestMatch, tokenGroup) {
              var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
              return firstMatch || $.each(tokenGroup.matches, function (ndx, match) {
                if (!0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : !0 === match.isOptional ? firstMatch = isFirstMatch(latestMatch, match) : !0 === match.isAlternate && (firstMatch = isFirstMatch(latestMatch, match)), firstMatch) return !1;
              }), firstMatch;
            }

            function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
              var bestMatch, indexPos;

              if ((getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
                if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
                    ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, indexPos = ndxPos);
              }), bestMatch) {
                var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation],
                    locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
              }

              return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
            }

            function isSubsetOf(source, target) {
              function expand(pattern) {
                for (var start, end, expanded = [], i = 0, l = pattern.length; i < l; i++) {
                  if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end;) {
                    expanded.push(String.fromCharCode(start));
                  } else start = pattern.charCodeAt(i), expanded.push(pattern.charAt(i));
                }

                return expanded.join("");
              }

              return opts.regex && null !== source.match.fn && null !== target.match.fn ? -1 !== expand(target.match.def.replace(/[\[\]]/g, "")).indexOf(expand(source.match.def.replace(/[\[\]]/g, ""))) : source.match.def === target.match.nativeDef;
            }

            function setMergeLocators(targetMatch, altMatch) {
              if (altMatch === undefined || targetMatch.alternation === altMatch.alternation && -1 === targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation])) {
                targetMatch.mloc = targetMatch.mloc || {};
                var locNdx = targetMatch.locator[targetMatch.alternation];

                if (locNdx !== undefined) {
                  if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), targetMatch.mloc[locNdx] === undefined && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), altMatch !== undefined) {
                    for (var ndx in altMatch.mloc) {
                      "string" == typeof ndx && (ndx = ndx.split(",")[0]), targetMatch.mloc[ndx] === undefined && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                    }

                    targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",");
                  }

                  return !0;
                }

                targetMatch.alternation = undefined;
              }

              return !1;
            }

            if (testPos > 5e3) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
            if (testPos === pos && match.matches === undefined) return matches.push({
              match: match,
              locator: loopNdx.reverse(),
              cd: cacheDependency,
              mloc: {}
            }), !0;

            if (match.matches !== undefined) {
              if (match.isGroup && quantifierRecurse !== match) {
                if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse)) return !0;
              } else if (match.isOptional) {
                var optionalToken = match;

                if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                  if ($.each(matches, function (ndx, mtch) {
                    mtch.match.optionality = !0;
                  }), latestMatch = matches[matches.length - 1].match, quantifierRecurse !== undefined || !isFirstMatch(latestMatch, optionalToken)) return !0;
                  insertStop = !0, testPos = pos;
                }
              } else if (match.isAlternator) {
                var maltMatches,
                    alternateToken = match,
                    malternateMatches = [],
                    currentMatches = matches.slice(),
                    loopNdxCnt = loopNdx.length,
                    altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;

                if (-1 === altIndex || "string" == typeof altIndex) {
                  var amndx,
                      currentPos = testPos,
                      ndxInitializerClone = ndxInitializer.slice(),
                      altIndexArr = [];
                  if ("string" == typeof altIndex) altIndexArr = altIndex.split(",");else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                    altIndexArr.push(amndx.toString());
                  }

                  if (getMaskSet().excludes[pos]) {
                    for (var altIndexArrClone = altIndexArr.slice(), i = 0, el = getMaskSet().excludes[pos].length; i < el; i++) {
                      altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()), 1);
                    }

                    0 === altIndexArr.length && (getMaskSet().excludes[pos] = undefined, altIndexArr = altIndexArrClone);
                  }

                  (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));

                  for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                    amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), maltMatches = matches.slice(), testPos = currentPos, matches = [];

                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                      var altMatch = maltMatches[ndx1],
                          dropMatch = !1;
                      altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, setMergeLocators(altMatch);

                      for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                        var altMatch2 = malternateMatches[ndx2];

                        if ("string" != typeof altIndex || altMatch.alternation !== undefined && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                          if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                            dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                            break;
                          }

                          if (isSubsetOf(altMatch, altMatch2)) {
                            setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                            break;
                          }

                          if (isSubsetOf(altMatch2, altMatch)) {
                            setMergeLocators(altMatch2, altMatch);
                            break;
                          }

                          if (target = altMatch2, null === (source = altMatch).match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1)) {
                            setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                            break;
                          }
                        }
                      }

                      dropMatch || malternateMatches.push(altMatch);
                    }
                  }

                  matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();
                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);

                if (match) return !0;
              } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];

                if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup)) {
                  if ((latestMatch = matches[matches.length - 1].match).optionalQuantifier = qndx > qt.quantifier.min - 1, latestMatch.jit = qndx + tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, isFirstMatch(latestMatch, tokenGroup) && qndx > qt.quantifier.min - 1) {
                    insertStop = !0, testPos = pos;
                    break;
                  }

                  if (qt.quantifier.jit !== undefined && isNaN(qt.quantifier.max) && latestMatch.optionalQuantifier && getMaskSet().validPositions[pos - 1] === undefined) {
                    matches.pop(), insertStop = !0, testPos = pos, cacheDependency = undefined;
                    break;
                  }

                  return !0;
                }
              } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
            } else testPos++;

            var source, target;
          }

          for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
            if (!0 !== maskToken.matches[tndx].isQuantifier) {
              var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
              if (match && testPos === pos) return match;
              if (testPos > pos) break;
            }
          }
        }

        if (pos > -1) {
          if (ndxIntlzr === undefined) {
            for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1;) {
              previousPos--;
            }

            test !== undefined && previousPos > -1 && (ndxInitializer = function (pos, tests) {
              var locator = [];
              return $.isArray(tests) || (tests = [tests]), tests.length > 0 && (tests[0].alternation === undefined ? 0 === (locator = determineTestTemplate(pos, tests.slice()).locator.slice()).length && (locator = tests[0].locator.slice()) : $.each(tests, function (ndx, tst) {
                if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice();else for (var i = 0; i < locator.length; i++) {
                  tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                }
              })), locator;
            }(previousPos, test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
          }

          if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return getMaskSet().tests[pos];

          for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
            var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
            if (match && testPos === pos || testPos > pos) break;
          }
        }

        return (0 === matches.length || insertStop) && matches.push({
          match: {
            fn: null,
            optionality: !1,
            casing: null,
            def: "",
            placeholder: ""
          },
          locator: [],
          mloc: {},
          cd: cacheDependency
        }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? $.extend(!0, [], matches) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), getMaskSet().tests[pos]);
      }

      function getBufferTemplate() {
        return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), getMaskSet()._buffer;
      }

      function getBuffer(noCache) {
        return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), getMaskSet().buffer;
      }

      function refreshFromBuffer(start, end, buffer) {
        var i, p;
        if (!0 === start) resetMaskSet(), start = 0, end = buffer.length;else for (i = start; i < end; i++) {
          delete getMaskSet().validPositions[i];
        }

        for (p = start, i = start; i < end; i++) {
          if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {
            var valResult = isValid(p, buffer[i], !0, !0);
            !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);
          }
        }
      }

      function checkAlternationMatch(altArr1, altArr2, na) {
        for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) {
          -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
        }

        for (var alndx = 0; alndx < altArr1.length; alndx++) {
          if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
            isMatch = !0;
            break;
          }
        }

        return isMatch;
      }

      function alternate(pos, c, strict, fromSetValid, rAltPos) {
        var lastAlt,
            alternation,
            altPos,
            prevAltPos,
            i,
            validPos,
            decisionPos,
            validPsClone = $.extend(!0, {}, getMaskSet().validPositions),
            isValidRslt = !1,
            lAltPos = rAltPos !== undefined ? rAltPos : getLastValidPosition();
        if (-1 === lAltPos && rAltPos === undefined) prevAltPos = getTest(lastAlt = 0), alternation = prevAltPos.alternation;else for (; lAltPos >= 0; lAltPos--) {
          if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {
            if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
            lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, prevAltPos = altPos;
          }
        }

        if (alternation !== undefined) {
          decisionPos = parseInt(lastAlt), getMaskSet().excludes[decisionPos] = getMaskSet().excludes[decisionPos] || [], !0 !== pos && getMaskSet().excludes[decisionPos].push(getDecisionTaker(prevAltPos));
          var validInputsClone = [],
              staticInputsBeforePos = 0;

          for (i = decisionPos; i < getLastValidPosition(undefined, !0) + 1; i++) {
            (validPos = getMaskSet().validPositions[i]) && !0 !== validPos.generatedInput ? validInputsClone.push(validPos.input) : i < pos && staticInputsBeforePos++, delete getMaskSet().validPositions[i];
          }

          for (; getMaskSet().excludes[decisionPos] && getMaskSet().excludes[decisionPos].length < 10;) {
            var posOffset = -1 * staticInputsBeforePos,
                validInputs = validInputsClone.slice();

            for (getMaskSet().tests[decisionPos] = undefined, resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0;) {
              var input = validInputs.shift();
              if (!(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;
            }

            if (isValidRslt && c !== undefined) {
              var targetLvp = getLastValidPosition(pos) + 1;

              for (i = decisionPos; i < getLastValidPosition() + 1; i++) {
                ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + posOffset && posOffset++;
              }

              isValidRslt = isValid((pos += posOffset) > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
            }

            if (isValidRslt) break;

            if (resetMaskSet(), prevAltPos = getTest(decisionPos), getMaskSet().validPositions = $.extend(!0, {}, validPsClone), !getMaskSet().excludes[decisionPos]) {
              isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
              break;
            }

            var decisionTaker = getDecisionTaker(prevAltPos);

            if (-1 !== getMaskSet().excludes[decisionPos].indexOf(decisionTaker)) {
              isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
              break;
            }

            for (getMaskSet().excludes[decisionPos].push(decisionTaker), i = decisionPos; i < getLastValidPosition(undefined, !0) + 1; i++) {
              delete getMaskSet().validPositions[i];
            }
          }
        }

        return getMaskSet().excludes[decisionPos] = undefined, isValidRslt;
      }

      function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
        function isSelection(posObj) {
          return isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;
        }

        strict = !0 === strict;
        var maskPos = pos;

        function _isValid(position, c, strict) {
          var rslt = !1;
          return $.each(getTests(position), function (ndx, tst) {
            var test = tst.match;

            if (getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(c, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
              c: getPlaceholder(position, test, !0) || test.def,
              pos: position
            })) {
              var elem = rslt.c !== undefined ? rslt.c : c,
                  validatedPos = position;
              return elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem, rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [rslt.remove]), $.each(rslt.remove.sort(function (a, b) {
                return b - a;
              }), function (ndx, lmnt) {
                revalidateMask({
                  begin: lmnt,
                  end: lmnt + 1
                });
              })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [rslt.insert]), $.each(rslt.insert.sort(function (a, b) {
                return a - b;
              }), function (ndx, lmnt) {
                isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
              })), !0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos), (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (revalidateMask(pos, $.extend({}, tst, {
                input: function (elem, test, pos) {
                  switch (opts.casing || test.casing) {
                    case "upper":
                      elem = elem.toUpperCase();
                      break;

                    case "lower":
                      elem = elem.toLowerCase();
                      break;

                    case "title":
                      var posBefore = getMaskSet().validPositions[pos - 1];
                      elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                      break;

                    default:
                      if ($.isFunction(opts.casing)) {
                        var args = Array.prototype.slice.call(arguments);
                        args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);
                      }

                  }

                  return elem;
                }(elem, test, validatedPos)
              }), fromSetValid, validatedPos) || (rslt = !1), !1);
            }
          }), rslt;
        }

        pos.begin !== undefined && (maskPos = isRTL ? pos.end : pos.begin);
        var result = !0,
            positionsClone = $.extend(!0, {}, getMaskSet().validPositions);

        if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts, getMaskSet())), !0 === result) {
          if (trackbackPositions(undefined, maskPos, !0), (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {
            var currentPosValid = getMaskSet().validPositions[maskPos];

            if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
              if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                if (!1 !== (result = _isValid(nPos, c, strict))) {
                  result = trackbackPositions(maskPos, result.pos !== undefined ? result.pos : nPos) || result, maskPos = nPos;
                  break;
                }
              }
            } else result = {
              caret: seekNext(maskPos)
            };
          }

          !1 !== result || !1 === opts.keepStatic || null != opts.regex && !isComplete(getBuffer()) || strict || !0 === fromAlternate || (result = alternate(maskPos, c, strict, fromSetValid)), !0 === result && (result = {
            pos: maskPos
          });
        }

        if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {
          var postResult = opts.postValidation(getBuffer(!0), result, opts);

          if (postResult !== undefined) {
            if (postResult.refreshFromBuffer && postResult.buffer) {
              var refresh = postResult.refreshFromBuffer;
              refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);
            }

            result = !0 === postResult ? result : postResult;
          }
        }

        return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
      }

      function trackbackPositions(originalPos, newPos, fillOnly) {
        var result;
        if (originalPos === undefined) for (originalPos = newPos - 1; originalPos > 0 && !getMaskSet().validPositions[originalPos]; originalPos--) {
          ;
        }

        for (var ps = originalPos; ps < newPos; ps++) {
          if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {
            var vp = 0 == ps ? getTest(ps) : getMaskSet().validPositions[ps - 1];

            if (vp) {
              var tests = getTests(ps).slice();
              "" === tests[tests.length - 1].match.def && tests.pop();
              var bestMatch = determineTestTemplate(ps, tests);

              if ((bestMatch = $.extend({}, bestMatch, {
                input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
              })).generatedInput = !0, revalidateMask(ps, bestMatch, !0), !0 !== fillOnly) {
                var cvpInput = getMaskSet().validPositions[newPos].input;
                getMaskSet().validPositions[newPos] = undefined, result = isValid(newPos, cvpInput, !0, !0);
              }
            }
          }
        }

        return result;
      }

      function revalidateMask(pos, validTest, fromSetValid, validatedPos) {
        function IsEnclosedStatic(pos, valids, selection) {
          var posMatch = valids[pos];

          if (posMatch !== undefined && (null === posMatch.match.fn && !0 !== posMatch.match.optionality || posMatch.input === opts.radixPoint)) {
            var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && null === valids[pos - 1].match.fn && valids[pos - 1] : valids[pos - 1],
                nextMatch = selection.end > pos + 1 ? valids[pos + 1] && null === valids[pos + 1].match.fn && valids[pos + 1] : valids[pos + 1];
            return prevMatch && nextMatch;
          }

          return !1;
        }

        var begin = pos.begin !== undefined ? pos.begin : pos,
            end = pos.end !== undefined ? pos.end : pos;

        if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = validatedPos !== undefined ? validatedPos : begin, begin !== end || opts.insertMode && getMaskSet().validPositions[validatedPos] !== undefined && fromSetValid === undefined) {
          var positionsClone = $.extend(!0, {}, getMaskSet().validPositions),
              lvp = getLastValidPosition(undefined, !0);

          for (getMaskSet().p = begin, i = lvp; i >= begin; i--) {
            getMaskSet().validPositions[i] && "+" === getMaskSet().validPositions[i].match.nativeDef && (opts.isNegative = !1), delete getMaskSet().validPositions[i];
          }

          var valid = !0,
              j = validatedPos,
              needsValidation = (getMaskSet().validPositions, !1),
              posMatch = j,
              i = j;

          for (validTest && (getMaskSet().validPositions[validatedPos] = $.extend(!0, {}, validTest), posMatch++, j++, begin < end && i++); i <= lvp; i++) {
            var t = positionsClone[i];

            if (t !== undefined && (i >= end || i >= begin && !0 !== t.generatedInput && IsEnclosedStatic(i, positionsClone, {
              begin: begin,
              end: end
            }))) {
              for (; "" !== getTest(posMatch).match.def;) {
                if (!1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.nativeDef === t.match.nativeDef) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), getMaskSet().validPositions[posMatch].input = t.input, trackbackPositions(undefined, posMatch, !0), j = posMatch + 1, valid = !0;else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                  var result = isValid(posMatch, t.input, !0, !0);
                  valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch + 1, needsValidation = !0;
                } else if (!(valid = !0 === t.generatedInput || t.input === opts.radixPoint && !0 === opts.numericInput) && "" === getTest(posMatch).match.def) break;
                if (valid) break;
                posMatch++;
              }

              "" == getTest(posMatch).match.def && (valid = !1), posMatch = j;
            }

            if (!valid) break;
          }

          if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), resetMaskSet(!0), !1;
        } else validTest && (getMaskSet().validPositions[validatedPos] = $.extend(!0, {}, validTest));

        return resetMaskSet(!0), !0;
      }

      function isMask(pos, strict) {
        var test = getTestTemplate(pos).match;
        if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;

        if (!0 !== strict && pos > -1) {
          var tests = getTests(pos);
          return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
        }

        return !1;
      }

      function seekNext(pos, newBlock) {
        for (var position = pos + 1; "" !== getTest(position).match.def && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position));) {
          position++;
        }

        return position;
      }

      function seekPrevious(pos, newBlock) {
        var tests,
            position = pos;
        if (position <= 0) return 0;

        for (; --position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && ((tests = getTests(position)).length < 2 || 2 === tests.length && "" === tests[1].match.def));) {
          ;
        }

        return position;
      }

      function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
        if (event && $.isFunction(opts.onBeforeWrite)) {
          var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);

          if (result) {
            if (result.refreshFromBuffer) {
              var refresh = result.refreshFromBuffer;
              refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), buffer = getBuffer(!0);
            }

            caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);
          }
        }

        if (input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : caret(input, caretPos), !0 === triggerEvents)) {
          var $input = $(input),
              nptVal = input.inputmask._valueGet();

          skipInputEvent = !0, $input.trigger("input"), setTimeout(function () {
            nptVal === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(buffer) && $input.trigger("complete");
          }, 0);
        }
      }

      function getPlaceholder(pos, test, returnPL) {
        if ((test = test || getTest(pos).match).placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;

        if (null === test.fn) {
          if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
            var prevTest,
                tests = getTests(pos),
                staticAlternations = [];
            if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) {
              if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
          }

          return test.def;
        }

        return opts.placeholder.charAt(pos % opts.placeholder.length);
      }

      var valueBuffer,
          EventRuler = {
        on: function on(input, eventName, eventHandler) {
          var ev = function ev(e) {
            var that = this;

            if (that.inputmask === undefined && "FORM" !== this.nodeName) {
              var imOpts = $.data(that, "_inputmask_opts");
              imOpts ? new Inputmask(imOpts).mask(that) : EventRuler.off(that);
            } else {
              if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                switch (e.type) {
                  case "input":
                    if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();

                    if (mobile) {
                      var args = arguments;
                      return setTimeout(function () {
                        eventHandler.apply(that, args), caret(that, that.inputmask.caretPos, undefined, !0);
                      }, 0), !1;
                    }

                    break;

                  case "keydown":
                    skipKeyPressEvent = !1, skipInputEvent = !1;
                    break;

                  case "keypress":
                    if (!0 === skipKeyPressEvent) return e.preventDefault();
                    skipKeyPressEvent = !0;
                    break;

                  case "click":
                    if (iemobile || iphone) {
                      var args = arguments;
                      return setTimeout(function () {
                        eventHandler.apply(that, args);
                      }, 0), !1;
                    }

                }

                var returnVal = eventHandler.apply(that, arguments);
                return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
              }

              e.preventDefault();
            }
          };

          input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
        },
        off: function off(input, event) {
          var events;
          input.inputmask && input.inputmask.events && (event ? (events = [])[event] = input.inputmask.events[event] : events = input.inputmask.events, $.each(events, function (eventName, evArr) {
            for (; evArr.length > 0;) {
              var ev = evArr.pop();
              -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
            }

            delete input.inputmask.events[eventName];
          }));
        }
      },
          EventHandlers = {
        keydownEvent: function keydownEvent(e) {
          var $input = $(this),
              k = e.keyCode,
              pos = caret(this);
          if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) e.preventDefault(), handleRemove(0, k, pos), writeBuffer(this, getBuffer(!0), getMaskSet().p, e, this.inputmask._valueGet() !== getBuffer().join(""));else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
            e.preventDefault();
            var caretPos = seekNext(getLastValidPosition());
            caret(this, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
          } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), caret(this, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(this, !0, !1, undoValue.split("")), $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB && (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(this, pos.begin, pos.end))) : (opts.insertMode = !opts.insertMode, this.setAttribute("im-insert", opts.insertMode));
          opts.onKeyDown.call(this, e, getBuffer(), caret(this).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);
        },
        keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
          var input = this,
              $input = $(input),
              k = e.which || e.charCode || e.keyCode;
          if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), setTimeout(function () {
            $input.trigger("change");
          }, 0)), !0;

          if (k) {
            46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
            var forwardPosition,
                pos = checkval ? {
              begin: ndx,
              end: ndx
            } : caret(input),
                c = String.fromCharCode(k),
                offset = 0;

            if (opts._radixDance && opts.numericInput) {
              var caretPos = getBuffer().indexOf(opts.radixPoint.charAt(0)) + 1;
              pos.begin <= caretPos && (k === opts.radixPoint.charCodeAt(0) && (offset = 1), pos.begin -= 1, pos.end -= 1);
            }

            getMaskSet().writeOutBuffer = !0;
            var valResult = isValid(pos, c, strict);

            if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos), getMaskSet().p = forwardPosition), forwardPosition = (opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition) + offset, !1 !== writeOut && (setTimeout(function () {
              opts.onKeyValidation.call(input, k, valResult, opts);
            }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {
              var buffer = getBuffer();
              writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval);
            }

            if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult;
          }
        },
        pasteEvent: function pasteEvent(e) {
          var tempValue,
              ev = e.originalEvent || e,
              inputValue = ($(this), this.inputmask._valueGet(!0)),
              caretPos = caret(this);
          isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
          var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
              valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
          if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;else {
            if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
            inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
          }
          var pasteValue = inputValue;

          if ($.isFunction(opts.onBeforePaste)) {
            if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();
            pasteValue || (pasteValue = inputValue);
          }

          return checkVal(this, !1, !1, pasteValue.toString().split("")), writeBuffer(this, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), e.preventDefault();
        },
        inputFallBackEvent: function inputFallBackEvent(e) {
          var input = this,
              inputValue = input.inputmask._valueGet();

          if (getBuffer().join("") !== inputValue) {
            var caretPos = caret(input);

            if (inputValue = function (input, inputValue, caretPos) {
              if (iemobile) {
                var inputChar = inputValue.replace(getBuffer().join(""), "");

                if (1 === inputChar.length) {
                  var iv = inputValue.split("");
                  iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
                }
              }

              return inputValue;
            }(0, inputValue = function (input, inputValue, caretPos) {
              return "." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && ((inputValue = inputValue.split(""))[caretPos.begin - 1] = opts.radixPoint.charAt(0), inputValue = inputValue.join("")), inputValue;
            }(0, inputValue, caretPos), caretPos), getBuffer().join("") !== inputValue) {
              var buffer = getBuffer().join(""),
                  offset = !opts.numericInput && inputValue.length > buffer.length ? -1 : 0,
                  frontPart = inputValue.substr(0, caretPos.begin),
                  backPart = inputValue.substr(caretPos.begin),
                  frontBufferPart = buffer.substr(0, caretPos.begin + offset),
                  backBufferPart = buffer.substr(caretPos.begin + offset),
                  selection = caretPos,
                  entries = "",
                  isEntry = !1;

              if (frontPart !== frontBufferPart) {
                var i,
                    fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length;

                for (i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) {
                  ;
                }

                isEntry && (selection.begin = i - offset, entries += frontPart.slice(i, selection.end));
              }

              if (backPart !== backBufferPart && (backPart.length > backBufferPart.length ? entries += backPart.slice(0, 1) : backPart.length < backBufferPart.length && (selection.end += backBufferPart.length - backPart.length, isEntry || "" === opts.radixPoint || "" !== backPart || frontPart.charAt(selection.begin + offset - 1) !== opts.radixPoint || (selection.begin--, entries = opts.radixPoint))), writeBuffer(input, getBuffer(), {
                begin: selection.begin + offset,
                end: selection.end + offset
              }), entries.length > 0) $.each(entries.split(""), function (ndx, entry) {
                var keypress = new $.Event("keypress");
                keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
              });else {
                selection.begin === selection.end - 1 && (selection.begin = seekPrevious(selection.begin + 1), selection.begin === selection.end - 1 ? caret(input, selection.begin) : caret(input, selection.begin, selection.end));
                var keydown = new $.Event("keydown");
                keydown.keyCode = opts.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, keydown);
              }
              e.preventDefault();
            }
          }
        },
        beforeInputEvent: function beforeInputEvent(e) {
          if (e.cancelable) {
            var input = this;

            switch (e.inputType) {
              case "insertText":
                return $.each(e.data.split(""), function (ndx, entry) {
                  var keypress = new $.Event("keypress");
                  keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                }), e.preventDefault();

              case "deleteContentBackward":
                var keydown = new $.Event("keydown");
                return keydown.keyCode = Inputmask.keyCode.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown), e.preventDefault();

              case "deleteContentForward":
                var keydown = new $.Event("keydown");
                return keydown.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, keydown), e.preventDefault();
            }
          }
        },
        setValueEvent: function setValueEvent(e) {
          this.inputmask.refreshValue = !1;

          var value = e && e.detail ? e.detail[0] : arguments[1],
              value = value || this.inputmask._valueGet(!0);

          $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), checkVal(this, !0, !1, value = value.split("")), undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && this.inputmask._valueGet() === getBufferTemplate().join("") && this.inputmask._valueSet("");
        },
        focusEvent: function focusEvent(e) {
          var nptValue = this.inputmask._valueGet();

          opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (this.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(this, seekNext(getLastValidPosition()))), !0 === opts.positionCaretOnTab && !1 === mouseEnter && EventHandlers.clickEvent.apply(this, [e, !0]), undoValue = getBuffer().join("");
        },
        mouseleaveEvent: function mouseleaveEvent(e) {
          mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== this && (this.placeholder = originalPlaceholder);
        },
        clickEvent: function clickEvent(e, tabbed) {
          var input = this;
          setTimeout(function () {
            if (document.activeElement === input) {
              var selectedCaret = caret(input);
              if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
                case "none":
                  break;

                case "select":
                  caret(input, 0, getBuffer().length);
                  break;

                case "ignore":
                  caret(input, seekNext(getLastValidPosition()));
                  break;

                case "radixFocus":
                  if (function (clickPos) {
                    if ("" !== opts.radixPoint) {
                      var vps = getMaskSet().validPositions;

                      if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                        if (clickPos < seekNext(-1)) return !0;
                        var radixPos = $.inArray(opts.radixPoint, getBuffer());

                        if (-1 !== radixPos) {
                          for (var vp in vps) {
                            if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                          }

                          return !0;
                        }
                      }
                    }

                    return !1;
                  }(selectedCaret.begin)) {
                    var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                    caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                    break;
                  }

                default:
                  var clickPosition = selectedCaret.begin,
                      lvclickPosition = getLastValidPosition(clickPosition, !0),
                      lastPosition = seekNext(lvclickPosition);
                  if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition));else {
                    var lvp = getMaskSet().validPositions[lvclickPosition],
                        tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp),
                        placeholder = getPlaceholder(lastPosition, tt.match);

                    if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                      var newPos = seekNext(lastPosition);
                      (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);
                    }

                    caret(input, lastPosition);
                  }
              }
            }
          }, 0);
        },
        cutEvent: function cutEvent(e) {
          $(this);
          var pos = caret(this),
              ev = e.originalEvent || e,
              clipboardData = window.clipboardData || ev.clipboardData,
              clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
          clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), document.execCommand && document.execCommand("copy"), handleRemove(0, Inputmask.keyCode.DELETE, pos), writeBuffer(this, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));
        },
        blurEvent: function blurEvent(e) {
          var $input = $(this);

          if (this.inputmask) {
            this.placeholder = originalPlaceholder;

            var nptValue = this.inputmask._valueGet(),
                buffer = getBuffer().slice();

            "" === nptValue && colorMask === undefined || (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), !1 === isComplete(buffer) && (setTimeout(function () {
              $input.trigger("incomplete");
            }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), writeBuffer(this, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), $input.trigger("change"));
          }
        },
        mouseenterEvent: function mouseenterEvent(e) {
          mouseEnter = !0, document.activeElement !== this && opts.showMaskOnHover && (this.placeholder = getBuffer().join(""));
        },
        submitEvent: function submitEvent(e) {
          undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(""), opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), setTimeout(function () {
            writeBuffer(el, getBuffer());
          }, 0));
        },
        resetEvent: function resetEvent(e) {
          el.inputmask.refreshValue = !0, setTimeout(function () {
            $el.trigger("setvalue");
          }, 0);
        }
      };

      function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
        var inputmask = this || input.inputmask,
            inputValue = nptvl.slice(),
            charCodes = "",
            initialNdx = -1,
            result = undefined;
        if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx);else {
          var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
              matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
          matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), initialNdx = seekNext(initialNdx));
        }
        -1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, inputmask.caretPos = {
          begin: initialNdx
        }, $.each(inputValue, function (ndx, charCode) {
          if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++;else {
            var keypress = new $.Event("_checkval");
            keypress.which = charCode.charCodeAt(0), charCodes += charCode;
            var lvp = getLastValidPosition(undefined, !0);
            !function (ndx, charCodes) {
              return -1 !== getMaskTemplate(!0, 0, !1).slice(ndx, seekNext(ndx)).join("").replace(/'/g, "").indexOf(charCodes) && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || null === getTest(ndx).match.fn && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || null === getTest(ndx + 1).match.fn && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
            }(initialNdx, charCodes) ? (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, inputmask.caretPos.begin)) && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "") : result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1), result && (writeBuffer(undefined, getBuffer(), result.forwardPosition, keypress, !1), inputmask.caretPos = {
              begin: result.forwardPosition,
              end: result.forwardPosition
            });
          }
        }), writeOut && writeBuffer(input, getBuffer(), result ? result.forwardPosition : undefined, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);
      }

      function unmaskedvalue(input) {
        if (input) {
          if (input.inputmask === undefined) return input.value;
          input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);
        }

        var umValue = [],
            vps = getMaskSet().validPositions;

        for (var pndx in vps) {
          vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
        }

        var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");

        if ($.isFunction(opts.onUnMask)) {
          var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
          unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
        }

        return unmaskedValue;
      }

      function translatePosition(pos) {
        return !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = el.inputmask._valueGet().length - pos), pos;
      }

      function caret(input, begin, end, notranslate) {
        var range;
        if (begin === undefined) return "selectionStart" in input ? (begin = input.selectionStart, end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, end = range.endOffset) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), end = begin + range.text.length), {
          begin: notranslate ? begin : translatePosition(begin),
          end: notranslate ? end : translatePosition(end)
        };

        if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1], begin = isRTL ? begin[1] : begin[0]), begin.begin !== undefined && (end = isRTL ? begin.begin : begin.end, begin = isRTL ? begin.end : begin.begin), "number" == typeof begin) {
          begin = notranslate ? begin : translatePosition(begin), end = "number" == typeof (end = notranslate ? end : translatePosition(end)) ? end : begin;
          var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
          if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
            begin: begin,
            end: end
          }, "selectionStart" in input) input.selectionStart = begin, input.selectionEnd = end;else if (window.getSelection) {
            if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {
              var textNode = document.createTextNode("");
              input.appendChild(textNode);
            }

            range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), range.collapse(!0);
            var sel = window.getSelection();
            sel.removeAllRanges(), sel.addRange(range);
          } else input.createTextRange && ((range = input.createTextRange()).collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
          renderColorMask(input, {
            begin: begin,
            end: end
          });
        }
      }

      function determineLastRequiredPosition(returnDefinition) {
        var pos,
            testPos,
            buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0),
            bl = buffer.length,
            lvp = getLastValidPosition(),
            positions = {},
            lvTest = getMaskSet().validPositions[lvp],
            ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;

        for (pos = lvp + 1; pos < buffer.length; pos++) {
          testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
        }

        var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;

        for (pos = bl - 1; pos > lvp && ((testPos = positions[pos]).match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match); pos--) {
          bl--;
        }

        return returnDefinition ? {
          l: bl,
          def: positions[bl] ? positions[bl].match : undefined
        } : bl;
      }

      function clearOptionalTail(buffer) {
        buffer.length = 0;

        for (var lmnt, template = getMaskTemplate(!0, 0, !0, undefined, !0); (lmnt = template.shift()) !== undefined;) {
          buffer.push(lmnt);
        }

        return buffer;
      }

      function isComplete(buffer) {
        if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
        if ("*" === opts.repeat) return undefined;
        var complete = !1,
            lrp = determineLastRequiredPosition(!0),
            aml = seekPrevious(lrp.l);

        if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
          complete = !0;

          for (var i = 0; i <= aml; i++) {
            var test = getTestTemplate(i).match;

            if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
              complete = !1;
              break;
            }
          }
        }

        return complete;
      }

      function handleRemove(input, k, pos, strict, fromIsValid) {
        if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), isRTL)) {
          var pend = pos.end;
          pos.end = pos.begin, pos.begin = pend;
        }

        if (k === Inputmask.keyCode.BACKSPACE && pos.end - pos.begin < 1 ? (pos.begin = seekPrevious(pos.begin), getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), revalidateMask(pos), !0 !== strict && !1 !== opts.keepStatic || null !== opts.regex) {
          var result = alternate(!0);

          if (result) {
            var newPos = result.caret !== undefined ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, !0);
            (k !== Inputmask.keyCode.DELETE || pos.begin > newPos) && pos.begin;
          }
        }

        var lvp = getLastValidPosition(pos.begin, !0);
        if (lvp < pos.begin || -1 === pos.begin) getMaskSet().p = seekNext(lvp);else if (!0 !== strict && (getMaskSet().p = pos.begin, !0 !== fromIsValid)) for (; getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined;) {
          getMaskSet().p++;
        }
      }

      function initializeColorMask(input) {
        var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null),
            template = document.createElement("div");
        template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, colorMask = document.createElement("div"), input.inputmask.colorMask = colorMask, colorMask.className = "im-colormask", input.parentNode.insertBefore(colorMask, input), input.parentNode.removeChild(input), colorMask.appendChild(input), colorMask.appendChild(template), input.style.left = template.offsetLeft + "px", $(colorMask).on("mouseleave", function (e) {
          return EventHandlers.mouseleaveEvent.call(input, [e]);
        }), $(colorMask).on("mouseenter", function (e) {
          return EventHandlers.mouseenterEvent.call(input, [e]);
        }), $(colorMask).on("click", function (e) {
          return caret(input, function (clientx) {
            var caretPos,
                e = document.createElement("span");

            for (var style in computedStyle) {
              isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);
            }

            e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);

            var itl,
                inputText = input.inputmask._valueGet(),
                previousWidth = 0;

            for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
              if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
                var offset1 = clientx - previousWidth,
                    offset2 = e.offsetWidth - clientx;
                e.innerHTML = inputText.charAt(caretPos), offset1 -= e.offsetWidth / 3, caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                break;
              }

              previousWidth = e.offsetWidth;
            }

            return document.body.removeChild(e), caretPos;
          }(e.clientX)), EventHandlers.clickEvent.call(input, [e]);
        });
      }

      function renderColorMask(input, caretPos, clear) {
        var test,
            testPos,
            ndxIntlzr,
            maskTemplate = [],
            isStatic = !1,
            pos = 0;

        function setEntry(entry) {
          if (entry === undefined && (entry = ""), isStatic || null !== test.fn && testPos.input !== undefined) {
            if (isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def)) {
              isStatic = !1;
              var mtl = maskTemplate.length;
              maskTemplate[mtl - 1] = maskTemplate[mtl - 1] + "</span>", maskTemplate.push(entry);
            } else maskTemplate.push(entry);
          } else isStatic = !0, maskTemplate.push("<span class='im-static'>" + entry);
        }

        if (colorMask !== undefined) {
          var buffer = getBuffer();

          if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {
            begin: caretPos,
            end: caretPos
          }), !0 !== clear) {
            var lvp = getLastValidPosition();

            do {
              getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), setEntry(buffer[pos])) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice(), !1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos ? setEntry(getPlaceholder(pos, test)) : isStatic = !1), pos++;
            } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);

            isStatic && setEntry(), document.activeElement === input && (maskTemplate.splice(caretPos.begin, 0, caretPos.begin === caretPos.end || caretPos.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), maskTemplate.splice(caretPos.end + 1, 0, "</mark>"));
          }

          var template = colorMask.getElementsByTagName("div")[0];
          template.innerHTML = maskTemplate.join(""), input.inputmask.positionColorMask(input, template);
        }
      }

      if (Inputmask.prototype.positionColorMask = function (input, template) {
        input.style.left = template.offsetLeft + "px";
      }, actionObj !== undefined) switch (actionObj.action) {
        case "isComplete":
          return el = actionObj.el, isComplete(getBuffer());

        case "unmaskedvalue":
          return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer).split(""), checkVal.call(this, undefined, !1, !1, valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), unmaskedvalue(el);

        case "mask":
          !function (elem) {
            EventRuler.off(elem);

            var isSupported = function (input, opts) {
              var elementType = input.getAttribute("type"),
                  isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;
              if (!isSupported) if ("INPUT" === input.tagName) {
                var el = document.createElement("input");
                el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
              } else isSupported = "partial";
              return !1 !== isSupported ? function (npt) {
                var valueGet, valueSet;

                function getter() {
                  return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                }

                function setter(value) {
                  valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue", [value]);
                }

                if (!npt.inputmask.__valueGet) {
                  if (!0 !== opts.noValuePatching) {
                    if (Object.getOwnPropertyDescriptor) {
                      "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (object) {
                        return object.__proto__;
                      } : function (object) {
                        return object.constructor.prototype;
                      });
                      var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                      valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                        get: getter,
                        set: setter,
                        configurable: !0
                      })) : "INPUT" !== npt.tagName && (valueGet = function valueGet() {
                        return this.textContent;
                      }, valueSet = function valueSet(value) {
                        this.textContent = value;
                      }, Object.defineProperty(npt, "value", {
                        get: getter,
                        set: setter,
                        configurable: !0
                      }));
                    } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter));

                    npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                  }

                  npt.inputmask._valueGet = function (overruleRTL) {
                    return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                  }, npt.inputmask._valueSet = function (value, overruleRTL) {
                    valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                  }, valueGet === undefined && (valueGet = function valueGet() {
                    return this.value;
                  }, valueSet = function valueSet(value) {
                    this.value = value;
                  }, function (type) {
                    if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {
                      var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                        return elem.value;
                      },
                          valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                        return elem.value = value, elem;
                      };
                      $.valHooks[type] = {
                        get: function get(elem) {
                          if (elem.inputmask) {
                            if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                            var result = valhookGet(elem);
                            return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                          }

                          return valhookGet(elem);
                        },
                        set: function set(elem, value) {
                          var result,
                              $elem = $(elem);
                          return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue", [value]), result;
                        },
                        inputmaskpatch: !0
                      };
                    }
                  }(npt.type), function (npt) {
                    EventRuler.on(npt, "mouseenter", function (event) {
                      var $input = $(this),
                          value = this.inputmask._valueGet();

                      value !== getBuffer().join("") && $input.trigger("setvalue");
                    });
                  }(npt));
                }
              }(input) : input.inputmask = undefined, isSupported;
            }(elem, opts);

            if (!1 !== isSupported && ($el = $(el = elem), originalPlaceholder = el.placeholder, -1 === (maxLength = el !== undefined ? el.maxLength : undefined) && (maxLength = undefined), !0 === opts.colorMask && initializeColorMask(el), mobile && ("inputmode" in el && (el.inputmode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), !0 === opts.disablePredictiveText && ("autocorrect" in el ? el.autocorrect = !1 : (!0 !== opts.colorMask && initializeColorMask(el), el.type = "password"))), !0 === isSupported && (el.setAttribute("im-insert", opts.insertMode), EventRuler.on(el, "submit", EventHandlers.submitEvent), EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), !0 !== opts.colorMask && (EventRuler.on(el, "click", EventHandlers.clickEvent), EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent)), EventRuler.on(el, "paste", EventHandlers.pasteEvent), EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {
              var initialValue = $.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0);

              "" !== initialValue && checkVal(el, !0, !1, initialValue.split(""));
              var buffer = getBuffer().slice();
              undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && document.activeElement === el || "" !== el.inputmask._valueGet(!0)) && writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
            }
          }(el);
          break;

        case "format":
          return valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), checkVal.call(this, undefined, !0, !1, valueBuffer), actionObj.metadata ? {
            value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
            metadata: maskScope.call(this, {
              action: "getmetadata"
            }, maskset, opts)
          } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

        case "isValid":
          actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal.call(this, undefined, !0, !0, valueBuffer)) : actionObj.value = getBuffer().join("");

          for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) {
            ;
          }

          return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");

        case "getemptymask":
          return getBufferTemplate().join("");

        case "remove":
          return el && el.inputmask && ($.data(el, "_inputmask_opts", null), $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), EventRuler.off(el), el.inputmask.colorMask && ((colorMask = el.inputmask.colorMask).removeChild(el), colorMask.parentNode.insertBefore(el, colorMask), colorMask.parentNode.removeChild(colorMask)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
            get: el.inputmask.__valueGet,
            set: el.inputmask.__valueSet,
            configurable: !0
          }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined), el;

        case "getmetadata":
          if ($.isArray(maskset.metadata)) {
            var maskTarget = getMaskTemplate(!0, 0, !1).join("");
            return $.each(maskset.metadata, function (ndx, mtdt) {
              if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
            }), maskTarget;
          }

          return maskset.metadata;
      }
    }

    return Inputmask.prototype = {
      dataAttribute: "data-inputmask",
      defaults: {
        placeholder: "_",
        optionalmarker: ["[", "]"],
        quantifiermarker: ["{", "}"],
        groupmarker: ["(", ")"],
        alternatormarker: "|",
        escapeChar: "\\",
        mask: null,
        regex: null,
        oncomplete: $.noop,
        onincomplete: $.noop,
        oncleared: $.noop,
        repeat: 0,
        greedy: !1,
        autoUnmask: !1,
        removeMaskOnSubmit: !1,
        clearMaskOnLostFocus: !0,
        insertMode: !0,
        clearIncomplete: !1,
        alias: null,
        onKeyDown: $.noop,
        onBeforeMask: null,
        onBeforePaste: function onBeforePaste(pastedValue, opts) {
          return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
        },
        onBeforeWrite: null,
        onUnMask: null,
        showMaskOnFocus: !0,
        showMaskOnHover: !0,
        onKeyValidation: $.noop,
        skipOptionalPartCharacter: " ",
        numericInput: !1,
        rightAlign: !1,
        undoOnEscape: !0,
        radixPoint: "",
        _radixDance: !1,
        groupSeparator: "",
        keepStatic: null,
        positionCaretOnTab: !0,
        tabThrough: !1,
        supportsInputType: ["text", "tel", "password", "search"],
        ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
        isComplete: null,
        preValidation: null,
        postValidation: null,
        staticDefinitionSymbol: undefined,
        jitMasking: !1,
        nullable: !0,
        inputEventOnly: !1,
        noValuePatching: !1,
        positionCaretOnClick: "lvp",
        casing: null,
        inputmode: "verbatim",
        colorMask: !1,
        disablePredictiveText: !1,
        importDataAttributes: !0
      },
      definitions: {
        9: {
          validator: "[0-9１-９]",
          definitionSymbol: "*"
        },
        a: {
          validator: "[A-Za-zА-яЁёÀ-ÿµ]",
          definitionSymbol: "*"
        },
        "*": {
          validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
        }
      },
      aliases: {},
      masksCache: {},
      mask: function mask(elems) {
        var that = this;
        return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
          var scopedOpts = $.extend(!0, {}, that.opts);

          if (function (npt, opts, userOptions, dataAttribute) {
            if (!0 === opts.importDataAttributes) {
              var option,
                  dataoptions,
                  optionData,
                  p,
                  importOption = function importOption(option, optionData) {
                null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), userOptions[option] = optionData);
              },
                  attrOptions = npt.getAttribute(dataAttribute);

              if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = undefined, dataoptions) {
                if ("alias" === p.toLowerCase()) {
                  optionData = dataoptions[p];
                  break;
                }
              }

              for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), opts) {
                if (dataoptions) for (p in optionData = undefined, dataoptions) {
                  if (p.toLowerCase() === option.toLowerCase()) {
                    optionData = dataoptions[p];
                    break;
                  }
                }
                importOption(option, optionData);
              }
            }

            return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), opts.isRTL = !0), Object.keys(userOptions).length;
          }(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
            var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
            maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
              action: "mask"
            }));
          }
        }), elems && elems[0] && elems[0].inputmask || this;
      },
      option: function option(options, noremask) {
        return "string" == typeof options ? this.opts[options] : "object" === (void 0 === options ? "undefined" : _typeof(options)) ? ($.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
      },
      unmaskedvalue: function unmaskedvalue(value) {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "unmaskedvalue",
          value: value
        });
      },
      remove: function remove() {
        return maskScope.call(this, {
          action: "remove"
        });
      },
      getemptymask: function getemptymask() {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "getemptymask"
        });
      },
      hasMaskedValue: function hasMaskedValue() {
        return !this.opts.autoUnmask;
      },
      isComplete: function isComplete() {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "isComplete"
        });
      },
      getmetadata: function getmetadata() {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "getmetadata"
        });
      },
      isValid: function isValid(value) {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "isValid",
          value: value
        });
      },
      format: function format(value, metadata) {
        return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
          action: "format",
          value: value,
          metadata: metadata
        });
      },
      setValue: function setValue(value) {
        this.el && $(this.el).trigger("setvalue", [value]);
      },
      analyseMask: function analyseMask(mask, regexMask, opts) {
        var match,
            m,
            openingToken,
            currentOpeningToken,
            alternator,
            lastMatch,
            tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            escaped = !1,
            currentToken = new MaskToken(),
            openenings = [],
            maskTokens = [];

        function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
          this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
            min: 1,
            max: 1
          };
        }

        function insertTestDefinition(mtoken, element, position) {
          position = position !== undefined ? position : mtoken.matches.length;
          var prevMatch = mtoken.matches[position - 1];
          if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
            fn: new RegExp(element, opts.casing ? "i" : ""),
            optionality: !1,
            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
            casing: null,
            def: element,
            placeholder: undefined,
            nativeDef: element
          }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function (ndx, lmnt) {
            prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
              fn: null,
              optionality: !1,
              newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && null !== prevMatch.fn,
              casing: null,
              def: opts.staticDefinitionSymbol || lmnt,
              placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
              nativeDef: (escaped ? "'" : "") + lmnt
            });
          })), escaped = !1;else {
            var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
            maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
              fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                this.test = maskdef.validator;
              }() : new RegExp("."),
              optionality: !1,
              newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
              casing: maskdef.casing,
              def: maskdef.definitionSymbol || element,
              placeholder: maskdef.placeholder,
              nativeDef: element
            }) : (mtoken.matches.splice(position++, 0, {
              fn: null,
              optionality: !1,
              newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && null !== prevMatch.fn,
              casing: null,
              def: opts.staticDefinitionSymbol || element,
              placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
              nativeDef: (escaped ? "'" : "") + element
            }), escaped = !1);
          }
        }

        function defaultCase() {
          if (openenings.length > 0) {
            if (insertTestDefinition(currentOpeningToken = openenings[openenings.length - 1], m), currentOpeningToken.isAlternator) {
              alternator = openenings.pop();

              for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
              }

              openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
            }
          } else insertTestDefinition(currentToken, m);
        }

        function groupify(matches) {
          var groupToken = new MaskToken(!0);
          return groupToken.openGroup = !1, groupToken.matches = matches, groupToken;
        }

        for (regexMask && (opts.optionalmarker[0] = undefined, opts.optionalmarker[1] = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask);) {
          if (m = match[0], regexMask) switch (m.charAt(0)) {
            case "?":
              m = "{0,1}";
              break;

            case "+":
            case "*":
              m = "{" + m + "}";
          }
          if (escaped) defaultCase();else switch (m.charAt(0)) {
            case "(?=":
            case "(?!":
            case "(?<=":
            case "(?<!":
              break;

            case opts.escapeChar:
              escaped = !0, regexMask && defaultCase();
              break;

            case opts.optionalmarker[1]:
            case opts.groupmarker[1]:
              if ((openingToken = openenings.pop()).openGroup = !1, openingToken !== undefined) {
                if (openenings.length > 0) {
                  if ((currentOpeningToken = openenings[openenings.length - 1]).matches.push(openingToken), currentOpeningToken.isAlternator) {
                    alternator = openenings.pop();

                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                      alternator.matches[mndx].isGroup = !1, alternator.matches[mndx].alternatorGroup = !1;
                    }

                    openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
                  }
                } else currentToken.matches.push(openingToken);
              } else defaultCase();
              break;

            case opts.optionalmarker[0]:
              openenings.push(new MaskToken(!1, !0));
              break;

            case opts.groupmarker[0]:
              openenings.push(new MaskToken(!0));
              break;

            case opts.quantifiermarker[0]:
              var quantifier = new MaskToken(!1, !1, !0),
                  mqj = (m = m.replace(/[{}]/g, "")).split("|"),
                  mq = mqj[0].split(","),
                  mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                  mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
              "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                min: mq0,
                max: mq1,
                jit: mqj[1]
              };
              var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;

              if ((match = matches.pop()).isAlternator) {
                matches.push(match), matches = match.matches;
                var groupToken = new MaskToken(!0),
                    tmpMatch = matches.pop();
                matches.push(groupToken), matches = groupToken.matches, match = tmpMatch;
              }

              match.isGroup || (match = groupify([match])), matches.push(match), matches.push(quantifier);
              break;

            case opts.alternatormarker:
              var groupQuantifier = function groupQuantifier(matches) {
                var lastMatch = matches.pop();
                return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])), lastMatch;
              };

              if (openenings.length > 0) {
                var subToken = (currentOpeningToken = openenings[openenings.length - 1]).matches[currentOpeningToken.matches.length - 1];
                lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches);
              } else lastMatch = groupQuantifier(currentToken.matches);

              if (lastMatch.isAlternator) openenings.push(lastMatch);else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator), lastMatch.openGroup) {
                lastMatch.openGroup = !1;
                var alternatorGroup = new MaskToken(!0);
                alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
              }
              break;

            default:
              defaultCase();
          }
        }

        for (; openenings.length > 0;) {
          openingToken = openenings.pop(), currentToken.matches.push(openingToken);
        }

        return currentToken.matches.length > 0 && (function verifyGroupMarker(maskToken) {
          maskToken && maskToken.matches && $.each(maskToken.matches, function (ndx, token) {
            var nextToken = maskToken.matches[ndx + 1];
            (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), verifyGroupMarker(token);
          });
        }(currentToken), maskTokens.push(currentToken)), (opts.numericInput || opts.isRTL) && function reverseTokens(maskToken) {
          for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) {
            if (maskToken.matches.hasOwnProperty(match)) {
              var intMatch = parseInt(match);

              if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                var qt = maskToken.matches[match];
                maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
              }

              maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = ((st = maskToken.matches[match]) === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), st);
            }
          }

          var st;
          return maskToken;
        }(maskTokens[0]), maskTokens;
      }
    }, Inputmask.extendDefaults = function (options) {
      $.extend(!0, Inputmask.prototype.defaults, options);
    }, Inputmask.extendDefinitions = function (definition) {
      $.extend(!0, Inputmask.prototype.definitions, definition);
    }, Inputmask.extendAliases = function (alias) {
      $.extend(!0, Inputmask.prototype.aliases, alias);
    }, Inputmask.format = function (value, options, metadata) {
      return Inputmask(options).format(value, metadata);
    }, Inputmask.unmask = function (value, options) {
      return Inputmask(options).unmaskedvalue(value);
    }, Inputmask.isValid = function (value, options) {
      return Inputmask(options).isValid(value);
    }, Inputmask.remove = function (elems) {
      "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
        el.inputmask && el.inputmask.remove();
      });
    }, Inputmask.setValue = function (elems, value) {
      "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
        el.inputmask ? el.inputmask.setValue(value) : $(el).trigger("setvalue", [value]);
      });
    }, Inputmask.escapeRegex = function (str) {
      return str.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1");
    }, Inputmask.keyCode = {
      BACKSPACE: 8,
      BACKSPACE_SAFARI: 127,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      X: 88,
      CONTROL: 17
    }, Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return window;
  }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return document;
  }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask) {
    return Inputmask.extendDefinitions({
      A: {
        validator: "[A-Za-zА-яЁёÀ-ÿµ]",
        casing: "upper"
      },
      "&": {
        validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
        casing: "upper"
      },
      "#": {
        validator: "[0-9A-Fa-f]",
        casing: "upper"
      }
    }), Inputmask.extendAliases({
      cssunit: {
        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
      },
      url: {
        regex: "(https?|ftp)//.*",
        autoUnmask: !1
      },
      ip: {
        mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
        definitions: {
          i: {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
            }
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return maskedValue;
        },
        inputmode: "numeric"
      },
      email: {
        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
        greedy: !1,
        casing: "lower",
        onBeforePaste: function onBeforePaste(pastedValue, opts) {
          return (pastedValue = pastedValue.toLowerCase()).replace("mailto:", "");
        },
        definitions: {
          "*": {
            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
          },
          "-": {
            validator: "[0-9A-Za-z-]"
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return maskedValue;
        },
        inputmode: "email"
      },
      mac: {
        mask: "##:##:##:##:##:##"
      },
      vin: {
        mask: "V{13}9{4}",
        definitions: {
          V: {
            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
            casing: "upper"
          }
        },
        clearIncomplete: !0,
        autoUnmask: !0
      }
    }), Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask, undefined) {
    function autoEscape(txt, opts) {
      for (var escapedTxt = "", i = 0; i < txt.length; i++) {
        Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
      }

      return escapedTxt;
    }

    return Inputmask.extendAliases({
      numeric: {
        mask: function mask(opts) {
          if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), isFinite(opts.integerDigits))) {
            var seps = Math.floor(opts.integerDigits / opts.groupSize),
                mod = opts.integerDigits % opts.groupSize;
            opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), opts.integerDigits < 1 && (opts.integerDigits = "*");
          }

          opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
          var mask = "[+]";

          if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", opts.digits !== undefined) {
            var radixDef = opts.decimalProtect ? ":" : opts.radixPoint,
                dq = opts.digits.toString().split(",");
            isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixDef + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + radixDef + ";{1," + opts.digits + "}]" : mask += radixDef + ";{" + opts.digits + "}");
          }

          return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;
        },
        placeholder: "",
        greedy: !1,
        digits: "*",
        digitsOptional: !0,
        enforceDigitsOnBlur: !1,
        radixPoint: ".",
        positionCaretOnClick: "radixFocus",
        groupSize: 3,
        groupSeparator: "",
        autoGroup: !1,
        allowMinus: !0,
        negationSymbol: {
          front: "-",
          back: ""
        },
        integerDigits: "+",
        integerOptional: !0,
        prefix: "",
        suffix: "",
        rightAlign: !0,
        decimalProtect: !0,
        min: null,
        max: null,
        step: 1,
        insertMode: !0,
        autoUnmask: !1,
        unmaskAsNumber: !1,
        inputmode: "numeric",
        preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset) {
          if ("-" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, "" === buffer.join("") || {
            caret: pos,
            dopost: !0
          });

          if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
            var radixPos = $.inArray(opts.radixPoint, buffer);
            if (-1 !== radixPos && maskset.validPositions[radixPos] !== undefined) return !0 === opts.numericInput ? pos === radixPos : {
              caret: radixPos + 1
            };
          }

          return !0;
        },
        postValidation: function postValidation(buffer, currentResult, opts) {
          var suffix = opts.suffix.split(""),
              prefix = opts.prefix.split("");
          if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;
          var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos,
              maskedValue = buffer.slice();
          opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());
          var charAtPos = maskedValue[caretPos];
          if (charAtPos === opts.groupSeparator && (charAtPos = maskedValue[caretPos += 1]), caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
          charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), prefix = prefix.join(""), suffix = suffix.join("");
          var processValue = maskedValue.join("").replace(prefix, "");

          if (processValue = (processValue = (processValue = (processValue = processValue.replace(suffix, "")).replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "")).replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" === charAtPos && (processValue = processValue.replace(/^\?/g, "")), processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), "" !== processValue) {
            if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {
              var radixPosition = $.inArray(opts.radixPoint, processValue),
                  rpb = $.inArray(opts.radixPoint, maskedValue);
              -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);

              for (var i = 1; i <= opts.digits; i++) {
                opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
              }
            }

            if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join("");else {
              var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
              processValue = Inputmask(function (buffer, opts) {
                var postMask = "";

                if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {
                  var radixSplit = buffer.join("").split(opts.radixPoint);
                  radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}");
                }

                return postMask;
              }(processValue, opts), {
                numericInput: !0,
                jitMasking: !0,
                definitions: {
                  "*": {
                    validator: "[0-9?]",
                    cardinality: 1
                  }
                }
              }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);
            }
          }

          if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, processValue += opts.negationSymbol.back), processValue = processValue.split(""), charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) (caretPos = $.inArray("?", processValue)) > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0;else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
            var newCaretPos = $.inArray(charAtPos, processValue);
            -1 !== newCaretPos && (caretPos = newCaretPos);
          }
          opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());
          var rslt = {
            caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
            buffer: processValue,
            refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
          };
          return rslt.refreshFromBuffer ? rslt : currentResult;
        },
        onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
          if (e) switch (e.type) {
            case "keydown":
              return opts.postValidation(buffer, {
                caret: caretPos,
                dopost: !0
              }, opts);

            case "blur":
            case "checkval":
              var unmasked;

              if (function (opts) {
                opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), opts.parseMinMaxOptions = "done");
              }(opts), null !== opts.min || null !== opts.max) {
                if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                  unmaskAsNumber: !0
                })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {
                  caret: caretPos,
                  dopost: !0,
                  placeholder: "0"
                }, opts);
                if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {
                  caret: caretPos,
                  dopost: !0,
                  placeholder: "0"
                }, opts);
              }

              return opts.postValidation(buffer, {
                caret: caretPos,
                placeholder: "0",
                event: "blur"
              }, opts);

            case "_checkval":
              return {
                caret: caretPos
              };
          }
        },
        regex: {
          integerPart: function integerPart(opts, emptyCheck) {
            return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
          },
          integerNPart: function integerNPart(opts) {
            return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
          }
        },
        definitions: {
          "~": {
            validator: function validator(chrs, maskset, pos, strict, opts, isSelection) {
              var isValid;

              if ("k" === chrs || "m" === chrs) {
                isValid = {
                  insert: [],
                  c: 0
                };

                for (var i = 0, l = "k" === chrs ? 2 : 5; i < l; i++) {
                  isValid.insert.push({
                    pos: pos + i,
                    c: 0
                  });
                }

                return isValid.pos = pos + l, isValid;
              }

              if (!0 === (isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs))) {
                if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {
                  var processValue = maskset.buffer.join(""),
                      pvRadixSplit = (processValue = (processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).split(opts.radixPoint);
                  pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";

                  var bufferTemplate = maskset._buffer.join("");

                  for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$");) {
                    bufferTemplate = bufferTemplate.slice(1);
                  }

                  isValid = (processValue = (processValue = processValue.replace(bufferTemplate, "")).split(""))[pos] === undefined ? {
                    pos: pos,
                    remove: pos
                  } : {
                    pos: pos
                  };
                }
              } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (isValid = {
                insert: {
                  pos: pos,
                  c: 0
                },
                pos: pos + 1
              });

              return isValid;
            },
            cardinality: 1
          },
          "+": {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
            },
            cardinality: 1,
            placeholder: ""
          },
          "-": {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              return opts.allowMinus && chrs === opts.negationSymbol.back;
            },
            cardinality: 1,
            placeholder: ""
          },
          ":": {
            validator: function validator(chrs, maskset, pos, strict, opts) {
              var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]",
                  isValid = new RegExp(radix).test(chrs);
              return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {
                caret: pos + 1
              }), isValid;
            },
            cardinality: 1,
            placeholder: function placeholder(opts) {
              return opts.radixPoint;
            }
          }
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
          var processValue = maskedValue.replace(opts.prefix, "");
          return processValue = (processValue = processValue.replace(opts.suffix, "")).replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), processValue = (processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), Number(processValue)) : processValue;
        },
        isComplete: function isComplete(buffer, opts) {
          var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
          return maskedValue = (maskedValue = (maskedValue = (maskedValue = (maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).replace(opts.prefix, "")).replace(opts.suffix, "")).replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === opts.radixPoint && (maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), isFinite(maskedValue);
        },
        onBeforeMask: function onBeforeMask(initialValue, opts) {
          if (opts.isNegative = undefined, "number" == typeof initialValue && "" !== opts.radixPoint && (initialValue = initialValue.toString().replace(".", opts.radixPoint)), initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), "" !== opts.radixPoint && isFinite(initialValue)) {
            var vs = initialValue.split("."),
                groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;
            2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));
          }

          var kommaMatches = initialValue.match(/,/g),
              dotMatches = initialValue.match(/\./g);

          if (initialValue = dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, "")).replace(",", opts.radixPoint) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, "")).replace(".", opts.radixPoint) : initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue.replace(/,/g, "") : initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {
            var decPart = initialValue.split(opts.radixPoint)[1].match(new RegExp("\\d*"))[0];

            if (parseInt(opts.digits) < decPart.toString().length) {
              var digitsFactor = Math.pow(10, parseInt(opts.digits));
              initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), initialValue = (initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor).toString().replace(".", opts.radixPoint);
            }
          }

          return function (buffer, opts) {
            if (opts.numericInput) {
              var radixPosition = $.inArray(opts.radixPoint, buffer);
              -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);

              for (var i = 1; i <= opts.digits; i++) {
                buffer[radixPosition + i] = buffer[radixPosition + i] || "0";
              }
            }

            return buffer;
          }(initialValue.toString().split(""), opts).join("");
        },
        onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
          var $input = $(this);
          if (e.ctrlKey) switch (e.keyCode) {
            case Inputmask.keyCode.UP:
              $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
              break;

            case Inputmask.keyCode.DOWN:
              $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
          }
        }
      },
      currency: {
        prefix: "$ ",
        groupSeparator: ",",
        alias: "numeric",
        placeholder: "0",
        autoGroup: !0,
        digits: 2,
        digitsOptional: !1,
        clearMaskOnLostFocus: !1
      },
      decimal: {
        alias: "numeric"
      },
      integer: {
        alias: "numeric",
        digits: 0,
        radixPoint: ""
      },
      percentage: {
        alias: "numeric",
        digits: 2,
        digitsOptional: !0,
        radixPoint: ".",
        placeholder: "0",
        autoGroup: !1,
        min: 0,
        max: 100,
        suffix: " %",
        allowMinus: !1
      }
    }), Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

  "function" == typeof Symbol && Symbol.iterator;
  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask) {
    function maskSort(a, b) {
      var maska = (a.mask || a).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""),
          maskb = (b.mask || b).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
      return maska.localeCompare(maskb);
    }

    var analyseMaskBase = Inputmask.prototype.analyseMask;
    return Inputmask.prototype.analyseMask = function (mask, regexMask, opts) {
      var maskGroups = {};
      return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (function reduceVariations(masks, previousVariation, previousmaskGroup) {
        previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, "" !== previousVariation && (previousmaskGroup[previousVariation] = {});

        for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) {
          maskGroup[variation = (mask = masks[i].mask || masks[i]).substr(0, 1)] = maskGroup[variation] || [], maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
        }

        for (var ndx in maskGroup) {
          maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
        }
      }((mask = mask.substr(1, mask.length - 2)).split(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0])), mask = function rebuild(maskGroup) {
        var mask = "",
            submasks = [];

        for (var ndx in maskGroup) {
          $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker[0] + maskGroup[ndx].join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1]) : submasks.push(ndx + rebuild(maskGroup[ndx]));
        }

        return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker[0] + submasks.join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1], mask;
      }(maskGroups)), mask = mask.replace(/9/g, "\\9")), analyseMaskBase.call(this, mask, regexMask, opts);
    }, Inputmask.extendAliases({
      abstractphone: {
        groupmarker: ["<", ">"],
        countrycode: "",
        phoneCodes: [],
        keepStatic: "auto",
        mask: function mask(opts) {
          return opts.definitions = {
            "#": Inputmask.prototype.definitions[9]
          }, opts.phoneCodes.sort(maskSort);
        },
        onBeforeMask: function onBeforeMask(value, opts) {
          var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
          return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), processedValue;
        },
        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
          return maskedValue.replace(/[()#-]/g, "");
        },
        inputmode: "tel"
      }
    }), Inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
  "use strict";

  var __WEBPACK_AMD_DEFINE_FACTORY__,
      __WEBPACK_AMD_DEFINE_ARRAY__,
      __WEBPACK_AMD_DEFINE_RESULT__,
      _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function __WEBPACK_AMD_DEFINE_FACTORY__($, Inputmask) {
    return void 0 === $.fn.inputmask && ($.fn.inputmask = function (fn, options) {
      var nptmask,
          input = this[0];
      if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
        case "unmaskedvalue":
          return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

        case "remove":
          return this.each(function () {
            this.inputmask && this.inputmask.remove();
          });

        case "getemptymask":
          return input && input.inputmask ? input.inputmask.getemptymask() : "";

        case "hasMaskedValue":
          return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

        case "isComplete":
          return !input || !input.inputmask || input.inputmask.isComplete();

        case "getmetadata":
          return input && input.inputmask ? input.inputmask.getmetadata() : void 0;

        case "setvalue":
          Inputmask.setValue(input, options);
          break;

        case "option":
          if ("string" != typeof options) return this.each(function () {
            if (void 0 !== this.inputmask) return this.inputmask.option(options);
          });
          if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
          break;

        default:
          return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
            nptmask.mask(this);
          });
      } else {
        if (Array.isArray(fn)) return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
          nptmask.mask(this);
        });
        if ("object" == (void 0 === fn ? "undefined" : _typeof(fn))) return nptmask = new Inputmask(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function () {
          if (void 0 !== this.inputmask) return this.inputmask.option(fn);
          nptmask.mask(this);
        }) : this.each(function () {
          nptmask.mask(this);
        });
        if (void 0 === fn) return this.each(function () {
          (nptmask = new Inputmask(options)).mask(this);
        });
      }
    }), $.fn.inputmask;
  }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}]);
"use strict";

// progressive-image.js, v1.2
// by Craig Buckler, @craigbuckler
if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) window.addEventListener('load', function () {
  // start
  var pItem = document.getElementsByClassName('progressive replace'),
      pCount,
      timer; // scroll and resize events

  window.addEventListener('scroll', scroller, false);
  window.addEventListener('resize', scroller, false); // DOM mutation observer

  if (MutationObserver) {
    var observer = new MutationObserver(function () {
      if (pItem.length !== pCount) inView();
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    });
  } // initial check


  inView(); // throttled scroll/resize

  function scroller() {
    timer = timer || setTimeout(function () {
      timer = null;
      inView();
    }, 300);
  } // image in view?


  function inView() {
    if (pItem.length) requestAnimationFrame(function () {
      var wT = window.pageYOffset,
          wB = wT + window.innerHeight,
          cRect,
          pT,
          pB,
          p = 0;

      while (p < pItem.length) {
        cRect = pItem[p].getBoundingClientRect();
        pT = wT + cRect.top;
        pB = pT + cRect.height;

        if (wT < pB && wB > pT) {
          loadFullImage(pItem[p]);
          pItem[p].classList.remove('replace');
        } else p++;
      }

      pCount = pItem.length;
    });
  } // replace with full image


  function loadFullImage(item) {
    var href = item && (item.getAttribute('data-href') || item.href);
    if (!href) return; // load image

    var img = new Image();

    if (item.dataset) {
      img.srcset = item.dataset.srcset || '';
      img.sizes = item.dataset.sizes || '';
    }

    img.src = href;
    img.className = 'reveal';
    if (img.complete) addImg();else img.onload = addImg; // replace image

    function addImg() {
      requestAnimationFrame(function () {
        // disable click
        if (href === item.href) {
          item.style.cursor = 'default';
          item.addEventListener('click', function (e) {
            e.preventDefault();
          }, false);
        } // preview image


        var pImg = item.querySelector && item.querySelector('img.preview'); // add full image

        item.insertBefore(img, pImg && pImg.nextSibling).addEventListener('animationend', function () {
          // remove preview image
          if (pImg) {
            img.alt = pImg.alt || '';
            item.removeChild(pImg);
          }

          img.classList.remove('reveal');
        });
      });
    }
  }
}, false);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  var f = "undefined" == typeof document ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    location: {
      hash: ""
    }
  } : document,
      J = "undefined" == typeof window ? {
    document: f,
    navigator: {
      userAgent: ""
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {}
  } : window,
      l = function l(e) {
    for (var t = 0; t < e.length; t += 1) {
      this[t] = e[t];
    }

    return this.length = e.length, this;
  };

  function L(e, t) {
    var a = [],
        i = 0;
    if (e && !t && e instanceof l) return e;
    if (e) if ("string" == typeof e) {
      var s,
          r,
          n = e.trim();

      if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
        var o = "div";

        for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) {
          a.push(r.childNodes[i]);
        }
      } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) {
        s[i] && a.push(s[i]);
      }
    } else if (e.nodeType || e === J || e === f) a.push(e);else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) {
      a.push(e[i]);
    }
    return new l(a);
  }

  function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1) {
      -1 === t.indexOf(e[a]) && t.push(e[a]);
    }

    return t;
  }

  L.fn = l.prototype, L.Class = l, L.Dom7 = l;
  var t = {
    addClass: function addClass(e) {
      if (void 0 === e) return this;

      for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
        for (var i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
        }
      }

      return this;
    },
    removeClass: function removeClass(e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
        for (var i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
        }
      }

      return this;
    },
    hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function toggleClass(e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
        for (var i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
        }
      }

      return this;
    },
    attr: function attr(e, t) {
      var a = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var i = 0; i < this.length; i += 1) {
        if (2 === a.length) this[i].setAttribute(e, t);else for (var s in e) {
          this[i][s] = e[s], this[i].setAttribute(s, e[s]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    data: function data(e, t) {
      var a;

      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1) {
          (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
        }

        return this;
      }

      if (a = this[0]) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
        var s = a.getAttribute("data-" + e);
        return s || void 0;
      }
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        a.webkitTransform = e, a.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      "string" != typeof e && (e += "ms");

      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        a.webkitTransitionDuration = e, a.transitionDuration = e;
      }

      return this;
    },
    on: function on() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }

      var i = t[0],
          r = t[1],
          n = t[2],
          s = t[3];

      function o(e) {
        var t = e.target;

        if (t) {
          var a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) {
            L(i[s]).is(r) && n.apply(i[s], a);
          }
        }
      }

      function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }

      "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);

      for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r) for (d = 0; d < p.length; d += 1) {
          var h = p[d];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
            listener: n,
            proxyListener: o
          }), u.addEventListener(h, o, s);
        } else for (d = 0; d < p.length; d += 1) {
          var v = p[d];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
            listener: n,
            proxyListener: l
          }), u.addEventListener(v, l, s);
        }
      }

      return this;
    },
    off: function off() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }

      var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);

      for (var o = i.split(" "), l = 0; l < o.length; l += 1) {
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
              u = void 0;
          if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
            var v = u[h];
            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) {
        for (var r = a[s], n = 0; n < this.length; n += 1) {
          var o = this[n],
              l = void 0;

          try {
            l = new J.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0
            });
          } catch (e) {
            (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i;
          }

          o.dom7EventData = e.filter(function (e, t) {
            return 0 < t;
          }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData;
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(t) {
      var a,
          i = ["webkitTransitionEnd", "transitionend"],
          s = this;

      function r(e) {
        if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) {
          s.off(i[a], r);
        }
      }

      if (t) for (a = 0; a < i.length; a += 1) {
        s.on(i[a], r);
      }
      return this;
    },
    outerWidth: function outerWidth(e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    offset: function offset() {
      if (0 < this.length) {
        var e = this[0],
            t = e.getBoundingClientRect(),
            a = f.body,
            i = e.clientTop || a.clientTop || 0,
            s = e.clientLeft || a.clientLeft || 0,
            r = e === J ? J.scrollY : e.scrollTop,
            n = e === J ? J.scrollX : e.scrollLeft;
        return {
          top: t.top + r - i,
          left: t.left + n - s
        };
      }

      return null;
    },
    css: function css(e, t) {
      var a;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var i in e) {
              this[a].style[i] = e[i];
            }
          }

          return this;
        }

        if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      if (!e) return this;

      for (var t = 0; t < this.length; t += 1) {
        if (!1 === e.call(this[t], t, this[t])) return this;
      }

      return this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          a,
          i = this[0];
      if (!i || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);

        for (t = L(e), a = 0; a < t.length; a += 1) {
          if (t[a] === i) return !0;
        }

        return !1;
      }

      if (e === f) return i === f;
      if (e === J) return i === J;

      if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
          if (t[a] === i) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t,
          a = this.length;
      return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]]);
    },
    append: function append() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }

      for (var i = 0; i < t.length; i += 1) {
        e = t[i];

        for (var s = 0; s < this.length; s += 1) {
          if ("string" == typeof e) {
            var r = f.createElement("div");

            for (r.innerHTML = e; r.firstChild;) {
              this[s].appendChild(r.firstChild);
            }
          } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) {
            this[s].appendChild(e[n]);
          } else this[s].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t, a;

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var i = f.createElement("div");

          for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) {
            this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
          }
        } else if (e instanceof l) for (a = 0; a < e.length; a += 1) {
          this[t].insertBefore(e[a], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          a = this[0];
      if (!a) return new l([]);

      for (; a.nextElementSibling;) {
        var i = a.nextElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
      }

      return new l(t);
    },
    prev: function prev(e) {
      if (0 < this.length) {
        var t = this[0];
        return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
      }

      return new l([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          a = this[0];
      if (!a) return new l([]);

      for (; a.previousElementSibling;) {
        var i = a.previousElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
      }

      return new l(t);
    },
    parent: function parent(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      }

      return L(r(t));
    },
    parents: function parents(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].parentNode; i;) {
          e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
        }
      }

      return L(r(t));
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) {
          t.push(i[s]);
        }
      }

      return new l(t);
    },
    children: function children(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) {
          e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
        }
      }

      return new l(r(t));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    },
    add: function add() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      var a, i;

      for (a = 0; a < e.length; a += 1) {
        var s = L(e[a]);

        for (i = 0; i < s.length; i += 1) {
          this[this.length] = s[i], this.length += 1;
        }
      }

      return this;
    },
    styles: function styles() {
      return this[0] ? J.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(t).forEach(function (e) {
    L.fn[e] = t[e];
  });

  var e,
      a,
      i,
      s,
      ee = {
    deleteProps: function deleteProps(e) {
      var t = e;
      Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}

        try {
          delete t[e];
        } catch (e) {}
      });
    },
    nextTick: function nextTick(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(e, t) {
      var a, i, s;
      void 0 === t && (t = "x");
      var r = J.getComputedStyle(e, null);
      return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    },
    parseUrlQuery: function parseUrlQuery(e) {
      var t,
          a,
          i,
          s,
          r = {},
          n = e || J.location.href;
      if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, t = 0; t < s; t += 1) {
        i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
      }
      return r;
    },
    isObject: function isObject(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
    },
    extend: function extend() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
        var s = e[i];
        if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
          var l = r[n],
              d = Object.getOwnPropertyDescriptor(s, l);
          void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l]);
        }
      }

      return a;
    }
  },
      te = (i = f.createElement("div"), {
    touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
    pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints),
    prefixedPointerEvents: !!J.navigator.msPointerEnabled,
    transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
    transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
    flexbox: function () {
      for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) {
        if (t[a] in e) return !0;
      }

      return !1;
    }(),
    observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
    passiveListener: function () {
      var e = !1;

      try {
        var t = Object.defineProperty({}, "passive", {
          get: function get() {
            e = !0;
          }
        });
        J.addEventListener("testPassiveListener", null, t);
      } catch (e) {}

      return e;
    }(),
    gestures: "ongesturestart" in J
  }),
      I = {
    isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
    isEdge: !!J.navigator.userAgent.match(/Edge/g),
    isSafari: (s = J.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
  },
      n = function n(e) {
    void 0 === e && (e = {});
    var t = this;
    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e]);
    });
  },
      o = {
    components: {
      configurable: !0
    }
  };

  n.prototype.on = function (e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;
    var s = a ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
    }), i;
  }, n.prototype.once = function (a, i, e) {
    var s = this;
    if ("function" != typeof i) return s;

    function r() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }

      i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy;
    }

    return r.f7proxy = i, s.on(a, r, e);
  }, n.prototype.off = function (e, i) {
    var s = this;
    return s.eventsListeners && e.split(" ").forEach(function (a) {
      void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
        (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1);
      });
    }), s;
  }, n.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }

    var a,
        i,
        s,
        r = this;
    return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(s, i);
        });
      }
    })), r;
  }, n.prototype.useModulesParams = function (a) {
    var i = this;
    i.modules && Object.keys(i.modules).forEach(function (e) {
      var t = i.modules[e];
      t.params && ee.extend(a, t.params);
    });
  }, n.prototype.useModules = function (i) {
    void 0 === i && (i = {});
    var s = this;
    s.modules && Object.keys(s.modules).forEach(function (e) {
      var a = s.modules[e],
          t = i[e] || {};
      a.instance && Object.keys(a.instance).forEach(function (e) {
        var t = a.instance[e];
        s[e] = "function" == typeof t ? t.bind(s) : t;
      }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
        s.on(e, a.on[e]);
      }), a.create && a.create.bind(s)(t);
    });
  }, o.components.set = function (e) {
    this.use && this.use(e);
  }, n.installModule = function (t) {
    for (var e = [], a = arguments.length - 1; 0 < a--;) {
      e[a] = arguments[a + 1];
    }

    var i = this;
    i.prototype.modules || (i.prototype.modules = {});
    var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
    return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
      i.prototype[e] = t.proto[e];
    }), t.static && Object.keys(t.static).forEach(function (e) {
      i[e] = t.static[e];
    }), t.install && t.install.apply(i, e), i;
  }, n.use = function (e) {
    for (var t = [], a = arguments.length - 1; 0 < a--;) {
      t[a] = arguments[a + 1];
    }

    var i = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return i.installModule(e);
    }), i) : i.installModule.apply(i, [e].concat(t));
  }, Object.defineProperties(n, o);
  var d = {
    updateSize: function updateSize() {
      var e,
          t,
          a = this,
          i = a.$el;
      e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
        width: e,
        height: t,
        size: a.isHorizontal() ? e : t
      }));
    },
    updateSlides: function updateSlides() {
      var e = this,
          t = e.params,
          a = e.$wrapperEl,
          i = e.size,
          s = e.rtlTranslate,
          r = e.wrongRTL,
          n = e.virtual && t.virtual.enabled,
          o = n ? e.virtual.slides.length : e.slides.length,
          l = a.children("." + e.params.slideClass),
          d = n ? e.virtual.slides.length : l.length,
          p = [],
          c = [],
          u = [],
          h = t.slidesOffsetBefore;
      "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
      var v = t.slidesOffsetAfter;
      "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
      var f = e.snapGrid.length,
          m = e.snapGrid.length,
          g = t.spaceBetween,
          b = -h,
          w = 0,
          y = 0;

      if (void 0 !== i) {
        var x, T;
        "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
          marginLeft: "",
          marginTop: ""
        }) : l.css({
          marginRight: "",
          marginBottom: ""
        }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));

        for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
          T = 0;
          var P = l.eq(z);

          if (1 < t.slidesPerColumn) {
            var k = void 0,
                $ = void 0,
                L = void 0;
            "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), k = $ + L * x / S, P.css({
              "-webkit-box-ordinal-group": k,
              "-moz-box-ordinal-group": k,
              "-ms-flex-order": k,
              "-webkit-order": k,
              order: k
            })) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L);
          }

          if ("none" !== P.css("display")) {
            if ("auto" === t.slidesPerView) {
              var I = J.getComputedStyle(P[0], null),
                  D = P[0].style.transform,
                  O = P[0].style.webkitTransform;
              if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);else if (e.isHorizontal()) {
                var A = parseFloat(I.getPropertyValue("width")),
                    H = parseFloat(I.getPropertyValue("padding-left")),
                    N = parseFloat(I.getPropertyValue("padding-right")),
                    G = parseFloat(I.getPropertyValue("margin-left")),
                    B = parseFloat(I.getPropertyValue("margin-right")),
                    X = I.getPropertyValue("box-sizing");
                T = X && "border-box" === X ? A + G + B : A + H + N + G + B;
              } else {
                var Y = parseFloat(I.getPropertyValue("height")),
                    V = parseFloat(I.getPropertyValue("padding-top")),
                    F = parseFloat(I.getPropertyValue("padding-bottom")),
                    R = parseFloat(I.getPropertyValue("margin-top")),
                    q = parseFloat(I.getPropertyValue("margin-bottom")),
                    W = I.getPropertyValue("box-sizing");
                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q;
              }
              D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T));
            } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");

            l[z] && (l[z].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1;
          }
        }

        if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
          width: e.virtualSize + t.spaceBetween + "px"
        }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
          width: e.virtualSize + t.spaceBetween + "px"
        }) : a.css({
          height: e.virtualSize + t.spaceBetween + "px"
        })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
          width: e.virtualSize + t.spaceBetween + "px"
        }) : a.css({
          height: e.virtualSize + t.spaceBetween + "px"
        }), t.centeredSlides)) {
          E = [];

          for (var j = 0; j < p.length; j += 1) {
            var U = p[j];
            t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U);
          }

          p = E;
        }

        if (!t.centeredSlides) {
          E = [];

          for (var K = 0; K < p.length; K += 1) {
            var _ = p[K];
            t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_);
          }

          p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i);
        }

        if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
          marginLeft: g + "px"
        }) : l.css({
          marginRight: g + "px"
        }) : l.css({
          marginBottom: g + "px"
        })), t.centerInsufficientSlides) {
          var Z = 0;

          if (u.forEach(function (e) {
            Z += e + (t.spaceBetween ? t.spaceBetween : 0);
          }), (Z -= t.spaceBetween) < i) {
            var Q = (i - Z) / 2;
            p.forEach(function (e, t) {
              p[t] = e - Q;
            }), c.forEach(function (e, t) {
              c[t] = e + Q;
            });
          }
        }

        ee.extend(e, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u
        }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t,
          a = this,
          i = [],
          s = 0;
      if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
        var r = a.activeIndex + t;
        if (r > a.slides.length) break;
        i.push(a.slides.eq(r)[0]);
      } else i.push(a.slides.eq(a.activeIndex)[0]);

      for (t = 0; t < i.length; t += 1) {
        if (void 0 !== i[t]) {
          var n = i[t].offsetHeight;
          s = s < n ? n : s;
        }
      }

      s && a.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function updateSlidesOffset() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
          a = t.params,
          i = t.slides,
          s = t.rtlTranslate;

      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        var r = -e;
        s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
              l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);

          if (a.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
                p = d + t.slidesSizesGrid[n];
            (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
          }

          o.progress = s ? -l : l;
        }

        t.visibleSlides = L(t.visibleSlides);
      }
    },
    updateProgress: function updateProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
          a = t.params,
          i = t.maxTranslate() - t.minTranslate(),
          s = t.progress,
          r = t.isBeginning,
          n = t.isEnd,
          o = r,
          l = n;
      0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
        progress: s,
        isBeginning: r,
        isEnd: n
      }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e,
          t = this,
          a = t.slides,
          i = t.params,
          s = t.$wrapperEl,
          r = t.activeIndex,
          n = t.realIndex,
          o = t.virtual && i.virtual.enabled;
      a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
      var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
      var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t,
          a = this,
          i = a.rtlTranslate ? a.translate : -a.translate,
          s = a.slidesGrid,
          r = a.snapGrid,
          n = a.params,
          o = a.activeIndex,
          l = a.realIndex,
          d = a.snapIndex,
          p = e;

      if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1) {
          void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
        }

        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
      }

      if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
        var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
        ee.extend(a, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: p
        }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange");
      } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          a = t.params,
          i = L(e.target).closest("." + a.slideClass)[0],
          s = !1;
      if (i) for (var r = 0; r < t.slides.length; r += 1) {
        t.slides[r] === i && (s = !0);
      }
      if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var p = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
          a = this.rtlTranslate,
          i = this.translate,
          s = this.$wrapperEl;
      if (t.virtualTranslate) return a ? -i : i;
      var r = ee.getTranslate(s[0], e);
      return a && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var a = this,
          i = a.rtlTranslate,
          s = a.params,
          r = a.$wrapperEl,
          n = a.progress,
          o = 0,
          l = 0;
      a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
      var d = a.maxTranslate() - a.minTranslate();
      (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  };
  var c = {
    setTransition: function setTransition(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function transitionStart(e, t) {
      void 0 === e && (e = !0);
      var a = this,
          i = a.activeIndex,
          s = a.params,
          r = a.previousIndex;
      s.autoHeight && a.updateAutoHeight();
      var n = t;

      if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
        if ("reset" === n) return void a.emit("slideResetTransitionStart");
        a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function transitionEnd(e, t) {
      void 0 === e && (e = !0);
      var a = this,
          i = a.activeIndex,
          s = a.previousIndex;
      a.animating = !1, a.setTransition(0);
      var r = t;

      if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
        if ("reset" === r) return void a.emit("slideResetTransitionEnd");
        a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
      }
    }
  };
  var u = {
    slideTo: function slideTo(e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
      var s = this,
          r = e;
      r < 0 && (r = 0);
      var n = s.params,
          o = s.snapGrid,
          l = s.slidesGrid,
          d = s.previousIndex,
          p = s.activeIndex,
          c = s.rtlTranslate;
      if (s.animating && n.preventInteractionOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
      var h,
          v = -o[u];
      if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) {
        -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      }

      if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
        if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1;
      }

      return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h));
      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0);
    },
    slideToLoop: function slideToLoop(e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
      var s = e;
      return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i);
    },
    slideNext: function slideNext(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
          s = i.params,
          r = i.animating;
      return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
    },
    slidePrev: function slidePrev(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
          s = i.params,
          r = i.animating,
          n = i.snapGrid,
          o = i.slidesGrid,
          l = i.rtlTranslate;

      if (s.loop) {
        if (r) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
      }

      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var p,
          c = d(l ? i.translate : -i.translate),
          u = n.map(function (e) {
        return d(e);
      }),
          h = (o.map(function (e) {
        return d(e);
      }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
      return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
    },
    slideReset: function slideReset(e, t, a) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
    },
    slideToClosest: function slideToClosest(e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
          s = i.activeIndex,
          r = Math.floor(s / i.params.slidesPerGroup);

      if (r < i.snapGrid.length - 1) {
        var n = i.rtlTranslate ? i.translate : -i.translate,
            o = i.snapGrid[r];
        (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
      }

      return i.slideTo(s, e, t, a);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e,
          t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
          r = t.clickedIndex;

      if (a.loop) {
        if (t.animating) return;
        e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r);
      } else t.slideTo(r);
    }
  };
  var h = {
    loopCreate: function loopCreate() {
      var i = this,
          e = i.params,
          t = i.$wrapperEl;
      t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
      var s = t.children("." + e.slideClass);

      if (e.loopFillGroupWithBlank) {
        var a = e.slidesPerGroup - s.length % e.slidesPerGroup;

        if (a !== e.slidesPerGroup) {
          for (var r = 0; r < a; r += 1) {
            var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
            t.append(n);
          }

          s = t.children("." + e.slideClass);
        }
      }

      "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
      var o = [],
          l = [];
      s.each(function (e, t) {
        var a = L(t);
        e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e);
      });

      for (var d = 0; d < l.length; d += 1) {
        t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      }

      for (var p = o.length - 1; 0 <= p; p -= 1) {
        t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e,
          t = this,
          a = t.params,
          i = t.activeIndex,
          s = t.slides,
          r = t.loopedSlides,
          n = t.allowSlidePrev,
          o = t.allowSlideNext,
          l = t.snapGrid,
          d = t.rtlTranslate;
      t.allowSlidePrev = !0, t.allowSlideNext = !0;
      var p = -l[i] - t.getTranslate();
      i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
      t.allowSlidePrev = n, t.allowSlideNext = o;
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          a = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index");
    }
  };
  var v = {
    setGrabCursor: function setGrabCursor(e) {
      if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    },
    unsetGrabCursor: function unsetGrabCursor() {
      te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    }
  };

  var m = {
    appendSlide: function appendSlide(e) {
      var t = this,
          a = t.$wrapperEl,
          i = t.params;
      if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
        e[s] && a.append(e[s]);
      } else a.append(e);
      i.loop && t.loopCreate(), i.observer && te.observer || t.update();
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
      a.loop && t.loopDestroy();
      var r = s + 1;

      if ("object" == _typeof(e) && "length" in e) {
        for (var n = 0; n < e.length; n += 1) {
          e[n] && i.prepend(e[n]);
        }

        r = s + e.length;
      } else i.prepend(e);

      a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1);
    },
    addSlide: function addSlide(e, t) {
      var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex;
      s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
      var n = a.slides.length;
      if (e <= 0) a.prependSlide(t);else if (n <= e) a.appendSlide(t);else {
        for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
          var p = a.slides.eq(d);
          p.remove(), l.unshift(p);
        }

        if ("object" == _typeof(t) && "length" in t) {
          for (var c = 0; c < t.length; c += 1) {
            t[c] && i.append(t[c]);
          }

          o = e < r ? r + t.length : r;
        } else i.append(t);

        for (var u = 0; u < l.length; u += 1) {
          i.append(l[u]);
        }

        s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
      }
    },
    removeSlide: function removeSlide(e) {
      var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
      a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
      var r,
          n = s;

      if ("object" == _typeof(e) && "length" in e) {
        for (var o = 0; o < e.length; o += 1) {
          r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
        }

        n = Math.max(n, 0);
      } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);

      a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
    },
    removeAllSlides: function removeAllSlides() {
      for (var e = [], t = 0; t < this.slides.length; t += 1) {
        e.push(t);
      }

      this.removeSlide(e);
    }
  },
      g = function () {
    var e = J.navigator.userAgent,
        t = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: J.cordova || J.phonegap,
      phonegap: J.cordova || J.phonegap
    },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

    if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
      var o = t.osVersion.split("."),
          l = f.querySelector('meta[name="viewport"]');
      t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui");
    }

    return t.pixelRatio = J.devicePixelRatio || 1, t;
  }();

  function b() {
    var e = this,
        t = e.params,
        a = e.el;

    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
          s = e.allowSlidePrev,
          r = e.snapGrid;

      if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);

      e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }

  var w = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    preventInteractionOnTransition: !1,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsInverse: !1,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    centeredSlides: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !0,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0
  },
      y = {
    update: d,
    translate: p,
    transition: c,
    slide: u,
    loop: h,
    grabCursor: v,
    manipulation: m,
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl;
        e.onTouchStart = function (e) {
          var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches;

          if (!t.animating || !i.preventInteractionOnTransition) {
            var r = e;
            if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
              s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
              var n = s.currentX,
                  o = s.currentY,
                  l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                  d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;

              if (!l || !(n <= d || n >= J.screen.width - d)) {
                if (ee.extend(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0
                }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                  var p = !0;
                  L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                  var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                  (i.touchStartForcePreventDefault || c) && r.preventDefault();
                }

                t.emit("touchStart", r);
              }
            }
          }
        }.bind(e), e.onTouchMove = function (e) {
          var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = e;

          if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
            if (!a.isTouchEvent || "mousemove" !== n.type) {
              var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                  l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
              if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
              if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (ee.extend(s, {
                startX: o,
                startY: l,
                currentX: o,
                currentY: l
              }), a.touchStartTime = ee.now()));
              if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
                if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1);
              } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
              if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);

              if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                s.currentX = o, s.currentY = l;
                var d,
                    p = s.currentX - s.startX,
                    c = s.currentY - s.startY;
                if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;else if (a.startMoving) {
                  t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                  var u = t.isHorizontal() ? p : c;
                  s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                  var h = !0,
                      v = i.resistanceRatio;

                  if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                    if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                    if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                  }

                  i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                    position: s[t.isHorizontal() ? "startX" : "startY"],
                    time: a.touchStartTime
                  }), a.velocities.push({
                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                    time: ee.now()
                  })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate));
                }
              }
            }
          } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n);
        }.bind(e), e.onTouchEnd = function (e) {
          var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = t.$wrapperEl,
              o = t.slidesGrid,
              l = t.snapGrid,
              d = e;
          if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
          i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          var p,
              c = ee.now(),
              u = c - a.touchStartTime;
          if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function () {
            t && !t.destroyed && t.emit("click", d);
          }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function () {
            t.destroyed || (t.allowClick = !0);
          }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);

          if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

            if (i.freeModeMomentum) {
              if (1 < a.velocities.length) {
                var h = a.velocities.pop(),
                    v = a.velocities.pop(),
                    f = h.position - v.position,
                    m = h.time - v.time;
                t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0);
              } else t.velocity = 0;

              t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
              var g = 1e3 * i.freeModeMomentumRatio,
                  b = t.velocity * g,
                  w = t.translate + b;
              r && (w = -w);
              var y,
                  x,
                  T = !1,
                  E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);else if (i.freeModeSticky) {
                for (var S, C = 0; C < l.length; C += 1) {
                  if (l[C] > -w) {
                    S = C;
                    break;
                  }
                }

                w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
              }
              if (x && t.once("transitionEnd", function () {
                t.loopFix();
              }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                }));
              })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses();
            } else if (i.freeModeSticky) return void t.slideToClosest();

            (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          } else {
            for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) {
              void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
            }

            var k = (p - o[M]) / z;

            if (u > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
            }
          }
        }.bind(e), e.onClick = function (e) {
          this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        }.bind(e);
        var r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;

        if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
          if (te.touch) {
            var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
              passive: !1,
              capture: n
            } : n), r.addEventListener(a.end, e.onTouchEnd, o);
          }

          (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1));
        } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);

        (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0);
      },
      detachEvents: function detachEvents() {
        var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;

        if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
          if (te.touch) {
            var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
          }

          (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1));
        } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);

        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides;
        void 0 === i && (i = 0);
        var s = e.params,
            r = s.breakpoints;

        if (r && (!r || 0 !== Object.keys(r).length)) {
          var n = e.getBreakpoint(r);

          if (n && e.currentBreakpoint !== n) {
            var o = n in r ? r[n] : void 0;
            o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
              var t = o[e];
              void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var l = o || e.originalParams,
                d = l.direction && l.direction !== s.direction,
                p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
            d && a && e.changeDirection(), ee.extend(e.params, l), ee.extend(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }), e.currentBreakpoint = n, p && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e) {
        if (e) {
          var t = !1,
              a = [];
          Object.keys(e).forEach(function (e) {
            a.push(e);
          }), a.sort(function (e, t) {
            return parseInt(e, 10) - parseInt(t, 10);
          });

          for (var i = 0; i < a.length; i += 1) {
            var s = a[i];
            this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s);
          }

          return t || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked;
        e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var t = this.classNames,
            a = this.params,
            e = this.rtl,
            i = this.$el,
            s = [];
        s.push("initialized"), s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
          t.push(a.containerModifierClass + e);
        }), i.addClass(t.join(" "));
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" "));
      }
    },
    images: {
      loadImage: function loadImage(e, t, a, i, s, r) {
        var n;

        function o() {
          r && r();
        }

        e.complete && s ? o() : t ? ((n = new J.Image()).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var a = 0; a < e.imagesToLoad.length; a += 1) {
          var i = e.imagesToLoad[a];
          e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      x = {},
      T = function (u) {
    function h() {
      for (var e, t, s, a = [], i = arguments.length; i--;) {
        a[i] = arguments[i];
      }

      1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(y).forEach(function (t) {
        Object.keys(y[t]).forEach(function (e) {
          h.prototype[e] || (h.prototype[e] = y[t][e]);
        });
      });
      var r = this;
      void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
        var t = r.modules[e];

        if (t.params) {
          var a = Object.keys(t.params)[0],
              i = t.params[a];
          if ("object" != _typeof(i) || null === i) return;
          if (!(a in s && "enabled" in i)) return;
          !0 === s[a] && (s[a] = {
            enabled: !0
          }), "object" != _typeof(s[a]) || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
            enabled: !1
          });
        }
      });
      var n = ee.extend({}, w);
      r.useModulesParams(n), r.params = ee.extend({}, n, x, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
      var o = (r.$ = L)(r.params.el);

      if (t = o[0]) {
        if (1 < o.length) {
          var l = [];
          return o.each(function (e, t) {
            var a = ee.extend({}, s, {
              el: t
            });
            l.push(new h(a));
          }), l;
        }

        t.swiper = r, o.data("swiper", r);
        var d,
            p,
            c = o.children("." + r.params.wrapperClass);
        return ee.extend(r, {
          $el: o,
          el: t,
          $wrapperEl: c,
          wrapperEl: c[0],
          classNames: [],
          slides: L(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === r.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === r.params.direction;
          },
          rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
          rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
          wrongRTL: "-webkit-box" === c.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
            start: d[0],
            move: d[1],
            end: d[2]
          }, r.touchEventsDesktop = {
            start: p[0],
            move: p[1],
            end: p[2]
          }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video",
            lastClickTime: ee.now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), r.useModules(), r.params.init && r.init(), r;
      }
    }

    u && (h.__proto__ = u);
    var e = {
      extendedDefaults: {
        configurable: !0
      },
      defaults: {
        configurable: !0
      },
      Class: {
        configurable: !0
      },
      $: {
        configurable: !0
      }
    };
    return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
      var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;

      if (t.centeredSlides) {
        for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
          a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
        }

        for (var p = r - 1; 0 <= p; p -= 1) {
          a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0));
        }
      } else for (var c = r + 1; c < a.length; c += 1) {
        i[c] - i[r] < s && (n += 1);
      }

      return n;
    }, h.prototype.update = function () {
      var a = this;

      if (a && !a.destroyed) {
        var e = a.snapGrid,
            t = a.params;
        t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update");
      }

      function i() {
        var e = a.rtlTranslate ? -1 * a.translate : a.translate,
            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
        a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
      }
    }, h.prototype.changeDirection = function (a, e) {
      void 0 === e && (e = !0);
      var t = this,
          i = t.params.direction;
      return a || (a = "horizontal" === i ? "vertical" : "horizontal"), a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), t.params.direction = a, t.slides.each(function (e, t) {
        "vertical" === a ? t.style.width = "" : t.style.height = "";
      }), t.emit("changeDirection"), e && t.update()), t;
    }, h.prototype.init = function () {
      var e = this;
      e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
    }, h.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var a = this,
          i = a.params,
          s = a.$el,
          r = a.$wrapperEl,
          n = a.slides;
      return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
        a.off(e);
      }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null;
    }, h.extendDefaults = function (e) {
      ee.extend(x, e);
    }, e.extendedDefaults.get = function () {
      return x;
    }, e.defaults.get = function () {
      return w;
    }, e.Class.get = function () {
      return u;
    }, e.$.get = function () {
      return L;
    }, Object.defineProperties(h, e), h;
  }(n),
      E = {
    name: "device",
    proto: {
      device: g
    },
    static: {
      device: g
    }
  },
      S = {
    name: "support",
    proto: {
      support: te
    },
    static: {
      support: te
    }
  },
      C = {
    name: "browser",
    proto: {
      browser: I
    },
    static: {
      browser: I
    }
  },
      M = {
    name: "resize",
    create: function create() {
      var e = this;
      ee.extend(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init() {
        J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      }
    }
  },
      z = {
    func: J.MutationObserver || J.WebkitMutationObserver,
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var a = this,
          i = new z.func(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            a.emit("observerUpdate", e[0]);
          };

          J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0);
        } else a.emit("observerUpdate", e[0]);
      });
      i.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), a.observer.observers.push(i);
    },
    init: function init() {
      var e = this;

      if (te.observer && e.params.observer) {
        if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
          e.observer.attach(t[a]);
        }
        e.observer.attach(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), e.observer.attach(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      P = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      ee.extend(this, {
        observer: {
          init: z.init.bind(this),
          attach: z.attach.bind(this),
          destroy: z.destroy.bind(this),
          observers: []
        }
      });
    },
    on: {
      init: function init() {
        this.observer.init();
      },
      destroy: function destroy() {
        this.observer.destroy();
      }
    }
  },
      k = {
    update: function update(e) {
      var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          c = d.to,
          u = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
      t.updateActiveIndex();
      var m,
          g,
          b,
          w = t.activeIndex || 0;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
      var y = Math.max((w || 0) - b, 0),
          x = Math.min((w || 0) + g, u.length - 1),
          T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function E() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (ee.extend(t.virtual, {
        from: y,
        to: x,
        offset: T,
        slidesGrid: t.slidesGrid
      }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: T,
        from: y,
        to: x,
        slides: function () {
          for (var e = [], t = y; t <= x; t += 1) {
            e.push(u[t]);
          }

          return e;
        }()
      }), void E();
      var S = [],
          C = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var M = p; M <= c; M += 1) {
        (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
      }

      for (var z = 0; z < u.length; z += 1) {
        y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z), z < p && S.push(z)));
      }

      C.forEach(function (e) {
        t.$wrapperEl.append(v(u[e], e));
      }), S.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(v(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E();
    },
    renderSlide: function renderSlide(e, t) {
      var a = this,
          i = a.params.virtual;
      if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
      var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
    },
    appendSlide: function appendSlide(e) {
      if ("object" == _typeof(e) && "length" in e) for (var t = 0; t < e.length; t += 1) {
        e[t] && this.virtual.slides.push(e[t]);
      } else this.virtual.slides.push(e);
      this.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var r = 0; r < e.length; r += 1) {
          e[r] && t.virtual.slides.unshift(e[r]);
        }

        i = a + e.length, s = e.length;
      } else t.virtual.slides.unshift(e);

      if (t.params.virtual.cache) {
        var n = t.virtual.cache,
            o = {};
        Object.keys(n).forEach(function (e) {
          o[parseInt(e, 10) + s] = n[e];
        }), t.virtual.cache = o;
      }

      t.virtual.update(!0), t.slideTo(i, 0);
    },
    removeSlide: function removeSlide(e) {
      var t = this;

      if (null != e) {
        var a = t.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; i -= 1) {
          t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
        } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
        t.virtual.update(!0), t.slideTo(a, 0);
      }
    },
    removeAllSlides: function removeAllSlides() {
      var e = this;
      e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
    }
  },
      $ = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      var e = this;
      ee.extend(e, {
        virtual: {
          update: k.update.bind(e),
          appendSlide: k.appendSlide.bind(e),
          prependSlide: k.prependSlide.bind(e),
          removeSlide: k.removeSlide.bind(e),
          removeAllSlides: k.removeAllSlides.bind(e),
          renderSlide: k.renderSlide.bind(e),
          slides: e.params.virtual.slides,
          cache: {}
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this;

        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");
          var t = {
            watchSlidesProgress: !0
          };
          ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      }
    }
  },
      D = {
    handle: function handle(e) {
      var t = this,
          a = t.rtlTranslate,
          i = e;
      i.originalEvent && (i = i.originalEvent);
      var s = i.keyCode || i.charCode;
      if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;

      if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
          var r = !1;
          if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
          var n = J.innerWidth,
              o = J.innerHeight,
              l = t.$el.offset();
          a && (l.left -= t.$el[0].scrollLeft);

          for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
            var c = d[p];
            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
          }

          if (!r) return;
        }

        t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s);
      }
    },
    enable: function enable() {
      this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  },
      O = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0
      }
    },
    create: function create() {
      ee.extend(this, {
        keyboard: {
          enabled: !1,
          enable: D.enable.bind(this),
          disable: D.disable.bind(this),
          handle: D.handle.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.params.keyboard.enabled && this.keyboard.enable();
      },
      destroy: function destroy() {
        this.keyboard.enabled && this.keyboard.disable();
      }
    }
  };

  var A = {
    lastScrollTime: ee.now(),
    event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
      var e = "onwheel",
          t = e in f;

      if (!t) {
        var a = f.createElement("div");
        a.setAttribute(e, "return;"), t = "function" == typeof a[e];
      }

      return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t;
    }() ? "wheel" : "mousewheel",
    normalize: function normalize(e) {
      var t = 0,
          a = 0,
          i = 0,
          s = 0;
      return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
        spinX: t,
        spinY: a,
        pixelX: i,
        pixelY: s
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle: function handle(e) {
      var t = e,
          a = this,
          i = a.params.mousewheel;
      if (!a.mouseEntered && !i.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var s = 0,
          r = a.rtlTranslate ? -1 : 1,
          n = A.normalize(t);
      if (i.forceToAxis) {
        if (a.isHorizontal()) {
          if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
          s = n.pixelX * r;
        } else {
          if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
          s = n.pixelY;
        }
      } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
      if (0 === s) return !0;

      if (i.invert && (s = -s), a.params.freeMode) {
        a.params.loop && a.loopFix();
        var o = a.getTranslate() + s * i.sensitivity,
            l = a.isBeginning,
            d = a.isEnd;
        if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function () {
          a.slideToClosest();
        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0;
      } else {
        if (60 < ee.now() - a.mousewheel.lastScrollTime) if (s < 0) {
          if (a.isEnd && !a.params.loop || a.animating) {
            if (i.releaseOnEdges) return !0;
          } else a.slideNext(), a.emit("scroll", t);
        } else if (a.isBeginning && !a.params.loop || a.animating) {
          if (i.releaseOnEdges) return !0;
        } else a.slidePrev(), a.emit("scroll", t);
        a.mousewheel.lastScrollTime = new J.Date().getTime();
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    enable: function enable() {
      var e = this;
      if (!A.event) return !1;
      if (e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(A.event, e.mousewheel.handle), e.mousewheel.enabled = !0;
    },
    disable: function disable() {
      var e = this;
      if (!A.event) return !1;
      if (!e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(A.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
    }
  },
      H = {
    update: function update() {
      var e = this,
          t = e.params.navigation;

      if (!e.params.loop) {
        var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
        s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function init() {
      var e,
          t,
          a = this,
          i = a.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
      a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
    }
  },
      N = {
    update: function update() {
      var e = this,
          t = e.rtl,
          s = e.params.pagination;

      if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var r,
            a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
          var o,
              l,
              d,
              p = e.pagination.bullets;
          if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
            var a = L(t),
                i = a.index();
            i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"));
          });else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) {
              p.eq(h).addClass(s.bulletActiveClass + "-main");
            }

            c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next");
          }

          if (s.dynamicBullets) {
            var v = Math.min(p.length, s.dynamicMainBullets + 4),
                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                m = t ? "right" : "left";
            p.css(e.isHorizontal() ? m : "top", f + "px");
          }
        }

        if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
          var g;
          g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
          var b = (r + 1) / n,
              w = 1,
              y = 1;
          "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed);
        }

        "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
    },
    render: function render() {
      var e = this,
          t = e.params.pagination;

      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";

        if ("bullets" === t.type) {
          for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) {
            t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
          }

          i.html(s), e.pagination.bullets = i.find("." + t.bulletClass);
        }

        "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
      }
    },
    init: function init() {
      var a = this,
          e = a.params.pagination;

      if (e.el) {
        var t = L(e.el);
        0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
          e.preventDefault();
          var t = L(this).index() * a.params.slidesPerGroup;
          a.params.loop && (t += a.loopedSlides), a.slideTo(t);
        }), ee.extend(a.pagination, {
          $el: t,
          el: t[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this,
          t = e.params.pagination;

      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.pagination.$el;
        a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
      }
    }
  },
      G = {
    setTranslate: function setTranslate() {
      var e = this;

      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
        a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
          o[0].style.opacity = 0, o.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      var e = this;

      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
        a[0].style.width = "", a[0].style.height = "";
        var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
        s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), ee.extend(t, {
          trackSize: r,
          divider: n,
          moveDivider: o,
          dragSize: s
        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
      }
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize;
      t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
      a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
      t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          a = this.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function () {
        i.css("opacity", 0), i.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            o = !(!te.passiveListener || !s.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
      }
    },
    disableDraggable: function disableDraggable() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            o = !(!te.passiveListener || !s.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
      }
    },
    init: function init() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = L(i.el);
        e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
        var r = s.find("." + e.params.scrollbar.dragClass);
        0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
          $el: s,
          el: s[0],
          $dragEl: r,
          dragEl: r[0]
        }), i.draggable && t.enableDraggable();
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      B = {
    setTransform: function setTransform(e, t) {
      var a = this.rtl,
          i = L(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y"),
          l = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");

      if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
        var p = d - (d - 1) * (1 - Math.abs(t));
        i[0].style.opacity = p;
      }

      if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");else {
        var c = l - (l - 1) * (1 - Math.abs(t));
        i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")");
      }
    },
    setTranslate: function setTranslate() {
      var i = this,
          e = i.$el,
          t = i.slides,
          s = i.progress,
          r = i.snapGrid;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
        i.parallax.setTransform(t, s);
      }), t.each(function (e, t) {
        var a = t.progress;
        1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
          i.parallax.setTransform(t, a);
        });
      });
    },
    setTransition: function setTransition(s) {
      void 0 === s && (s = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
        var a = L(t),
            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
        0 === s && (i = 0), a.transition(i);
      });
    }
  },
      X = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;

      if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureTouched = !0, s.scaleStart = X.getDistanceBetweenTouches(e);
      }

      s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;

      if (!te.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        a.fakeGestureMoved = !0, i.scaleMove = X.getDistanceBetweenTouches(e);
      }

      i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;

      if (!te.gestures) {
        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
        a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
      }

      i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.zoom,
          a = t.gesture,
          i = t.image;
      a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var n = s.width * a.scale,
            o = s.height * a.scale;

        if (!(n < i.slideWidth && o < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
        a.isTouched = !1, a.isMoved = !1;
        var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
        0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
        var p = Math.max(s, r);
        a.currentX = o, a.currentY = d;
        var c = a.width * e.scale,
            u = a.height * e.scale;
        a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t.in(e);
    },
    in: function _in(e) {
      var t,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g = this,
          b = g.zoom,
          w = g.params.zoom,
          y = b.gesture,
          x = b.image;
      (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
    },
    out: function out() {
      var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
      i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
    },
    enable: function enable() {
      var e = this,
          t = e.zoom;

      if (!t.enabled) {
        t.enabled = !0;
        var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
      }
    },
    disable: function disable() {
      var e = this,
          t = e.zoom;

      if (t.enabled) {
        e.zoom.enabled = !1;
        var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
      }
    }
  },
      Y = {
    loadInSlide: function loadInSlide(e, l) {
      void 0 === l && (l = !0);
      var d = this,
          p = d.params.lazy;

      if (void 0 !== e && 0 !== d.slides.length) {
        var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
            t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
        !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
          var i = L(t);
          i.addClass(p.loadingClass);
          var s = i.attr("data-background"),
              r = i.attr("data-src"),
              n = i.attr("data-srcset"),
              o = i.attr("data-sizes");
          d.loadImage(i[0], r || s, n, o, !1, function () {
            if (null != d && d && (!d || d.params) && !d.destroyed) {
              if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                var e = c.attr("data-swiper-slide-index");

                if (c.hasClass(d.params.slideDuplicateClass)) {
                  var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                  d.lazy.loadInSlide(t.index(), !1);
                } else {
                  var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  d.lazy.loadInSlide(a.index(), !1);
                }
              }

              d.emit("lazyImageReady", c[0], i[0]);
            }
          }), d.emit("lazyImageLoad", c[0], i[0]);
        });
      }
    },
    load: function load() {
      var i = this,
          t = i.$wrapperEl,
          a = i.params,
          s = i.slides,
          e = i.activeIndex,
          r = i.virtual && a.virtual.enabled,
          n = a.lazy,
          o = a.slidesPerView;

      function l(e) {
        if (r) {
          if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (s[e]) return !0;

        return !1;
      }

      function d(e) {
        return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
      }

      if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
        var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
        i.lazy.loadInSlide(a);
      });else if (1 < o) for (var p = e; p < e + o; p += 1) {
        l(p) && i.lazy.loadInSlide(p);
      } else i.lazy.loadInSlide(e);
      if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) {
          l(f) && i.lazy.loadInSlide(f);
        }

        for (var m = v; m < e; m += 1) {
          l(m) && i.lazy.loadInSlide(m);
        }
      } else {
        var g = t.children("." + a.slideNextClass);
        0 < g.length && i.lazy.loadInSlide(d(g));
        var b = t.children("." + a.slidePrevClass);
        0 < b.length && i.lazy.loadInSlide(d(b));
      }
    }
  },
      V = {
    LinearSpline: function LinearSpline(e, t) {
      var a,
          i,
          s,
          r,
          n,
          o = function o(e, t) {
        for (i = -1, a = e.length; 1 < a - i;) {
          e[s = a + i >> 1] <= t ? i = s : a = s;
        }

        return a;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      var t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var a,
          i,
          s = this,
          r = s.controller.control;

      function n(e) {
        var t = s.rtlTranslate ? -s.translate : s.translate;
        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof T && n(r[o]);
      } else r instanceof T && t !== r && n(r);
    },
    setTransition: function setTransition(t, e) {
      var a,
          i = this,
          s = i.controller.control;

      function r(e) {
        e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function () {
          e.updateAutoHeight();
        }), e.$wrapperEl.transitionEnd(function () {
          s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd());
        }));
      }

      if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) {
        s[a] !== e && s[a] instanceof T && r(s[a]);
      } else s instanceof T && e !== s && r(s);
    }
  },
      F = {
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function onEnterKey(e) {
      var t = this,
          a = t.params.a11y;

      if (13 === e.keyCode) {
        var i = L(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      var e = this;

      if (!e.params.loop) {
        var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
        i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
      }
    },
    updatePagination: function updatePagination() {
      var i = this,
          s = i.params.a11y;
      i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
        var a = L(t);
        i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
      });
    },
    init: function init() {
      var e = this;
      e.$el.append(e.a11y.liveRegion);
      var t,
          a,
          i = e.params.a11y;
      e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
    },
    destroy: function destroy() {
      var e,
          t,
          a = this;
      a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey);
    }
  },
      R = {
    init: function init() {
      var e = this;

      if (e.params.history) {
        if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
        var t = e.history;
        t.initialized = !0, t.paths = R.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = R.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues() {
      var e = J.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          t = e.length;
      return {
        key: e[t - 2],
        value: e[t - 1]
      };
    },
    setHistory: function setHistory(e, t) {
      if (this.history.initialized && this.params.history.enabled) {
        var a = this.slides.eq(t),
            i = R.slugify(a.attr("data-history"));
        J.location.pathname.includes(e) || (i = e + "/" + i);
        var s = J.history.state;
        s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
          value: i
        }, null, i) : J.history.pushState({
          value: i
        }, null, i));
      }
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, a) {
      var i = this;
      if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
        var n = i.slides.eq(s);

        if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
          var o = n.index();
          i.slideTo(o, e, a);
        }
      } else i.slideTo(0, e, a);
    }
  },
      q = {
    onHashCange: function onHashCange() {
      var e = this,
          t = f.location.hash.replace("#", "");

      if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
        if (void 0 === a) return;
        e.slideTo(a);
      }
    },
    setHash: function setHash() {
      var e = this;
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");else {
        var t = e.slides.eq(e.activeIndex),
            a = t.attr("data-hash") || t.attr("data-history");
        f.location.hash = a || "";
      }
    },
    init: function init() {
      var e = this;

      if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
        e.hashNavigation.initialized = !0;
        var t = f.location.hash.replace("#", "");
        if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
          var s = e.slides.eq(a);

          if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
            var r = s.index();
            e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
          }
        }
        e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      W = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
      }, a);
    },
    start: function start() {
      var e = this;
      return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
    },
    stop: function stop() {
      var e = this;
      return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      var t = this;
      t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
    }
  },
      j = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
        var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
        e.params.virtualTranslate || (s -= e.translate);
        var r = 0;
        e.isHorizontal() || (r = s, s = 0);
        var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: n
        }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var a = this,
          t = a.slides,
          i = a.$wrapperEl;

      if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
        var s = !1;
        t.transitionEnd(function () {
          if (!s && a && !a.destroyed) {
            s = !0, a.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
              i.trigger(e[t]);
            }
          }
        });
      }
    }
  },
      U = {
    setTranslate: function setTranslate() {
      var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          o = t.rtlTranslate,
          l = t.size,
          d = t.params.cubeEffect,
          p = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          u = 0;
      d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: r + "px"
      })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));

      for (var h = 0; h < s.length; h += 1) {
        var v = s.eq(h),
            f = h;
        c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
        var m = 90 * f,
            g = Math.floor(m / 360);
        o && (m = -m, g = Math.floor(-m / 360));
        var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
        f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
        var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";

        if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
          var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
            z = d.shadowScale,
            P = d.shadowScale / M,
            k = d.shadowOffset;
        e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
      }
      var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  },
      K = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
        var s = t.eq(i),
            r = s[0].progress;
        e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
        var n = -180 * r,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;

        if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
          var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0));
        }

        s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var a = this,
          t = a.slides,
          i = a.activeIndex,
          s = a.$wrapperEl;

      if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
        var r = !1;
        t.eq(i).transitionEnd(function () {
          if (!r && a && !a.destroyed) {
            r = !0, a.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
              s.trigger(e[t]);
            }
          }
        });
      }
    }
  },
      _ = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
        var v = i.eq(u),
            f = r[u],
            m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
            g = o ? p * m : 0,
            b = o ? 0 : p * m,
            w = -c * Math.abs(m),
            y = o ? 0 : n.stretch * m,
            x = o ? n.stretch * m : 0;
        Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
        var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";

        if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
          var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
        }
      }

      (te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%");
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      Z = {
    init: function init() {
      var e = this,
          t = e.params.thumbs,
          a = e.constructor;
      t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), ee.extend(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var e = this,
          t = e.thumbs.swiper;

      if (t) {
        var a = t.clickedIndex,
            i = t.clickedSlide;

        if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
          var s;

          if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
            var r = e.activeIndex;
            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
          }

          e.slideTo(s);
        }
      }
    },
    update: function update(e) {
      var t = this,
          a = t.thumbs.swiper;

      if (a) {
        var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;

        if (t.realIndex !== a.realIndex) {
          var s,
              r = a.activeIndex;

          if (a.params.loop) {
            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
            var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
            s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n;
          } else s = t.realIndex;

          a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0));
        }

        var l = 1,
            d = t.params.thumbs.slideThumbActiveClass;
        if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1) {
          a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
        } else for (var c = 0; c < l; c += 1) {
          a.slides.eq(t.realIndex + c).addClass(d);
        }
      }
    }
  },
      Q = [E, S, C, M, P, $, O, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarged: "container"
      }
    },
    create: function create() {
      var e = this;
      ee.extend(e, {
        mousewheel: {
          enabled: !1,
          enable: A.enable.bind(e),
          disable: A.disable.bind(e),
          handle: A.handle.bind(e),
          handleMouseEnter: A.handleMouseEnter.bind(e),
          handleMouseLeave: A.handleMouseLeave.bind(e),
          lastScrollTime: ee.now()
        }
      });
    },
    on: {
      init: function init() {
        this.params.mousewheel.enabled && this.mousewheel.enable();
      },
      destroy: function destroy() {
        this.mousewheel.enabled && this.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      var e = this;
      ee.extend(e, {
        navigation: {
          init: H.init.bind(e),
          update: H.update.bind(e),
          destroy: H.destroy.bind(e),
          onNextClick: H.onNextClick.bind(e),
          onPrevClick: H.onPrevClick.bind(e)
        }
      });
    },
    on: {
      init: function init() {
        this.navigation.init(), this.navigation.update();
      },
      toEdge: function toEdge() {
        this.navigation.update();
      },
      fromEdge: function fromEdge() {
        this.navigation.update();
      },
      destroy: function destroy() {
        this.navigation.destroy();
      },
      click: function click(e) {
        var t,
            a = this,
            i = a.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
        !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass));
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      var e = this;
      ee.extend(e, {
        pagination: {
          init: N.init.bind(e),
          render: N.render.bind(e),
          update: N.update.bind(e),
          destroy: N.destroy.bind(e),
          dynamicBulletIndex: 0
        }
      });
    },
    on: {
      init: function init() {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
      },
      snapIndexChange: function snapIndexChange() {
        this.params.loop || this.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange() {
        this.params.loop && (this.pagination.render(), this.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange() {
        this.params.loop || (this.pagination.render(), this.pagination.update());
      },
      destroy: function destroy() {
        this.pagination.destroy();
      },
      click: function click(e) {
        var t = this;
        t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      var e = this;
      ee.extend(e, {
        scrollbar: {
          init: G.init.bind(e),
          destroy: G.destroy.bind(e),
          updateSize: G.updateSize.bind(e),
          setTranslate: G.setTranslate.bind(e),
          setTransition: G.setTransition.bind(e),
          enableDraggable: G.enableDraggable.bind(e),
          disableDraggable: G.disableDraggable.bind(e),
          setDragPosition: G.setDragPosition.bind(e),
          onDragStart: G.onDragStart.bind(e),
          onDragMove: G.onDragMove.bind(e),
          onDragEnd: G.onDragEnd.bind(e),
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }
      });
    },
    on: {
      init: function init() {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      },
      update: function update() {
        this.scrollbar.updateSize();
      },
      resize: function resize() {
        this.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        this.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        this.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e) {
        this.scrollbar.setTransition(e);
      },
      destroy: function destroy() {
        this.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      ee.extend(this, {
        parallax: {
          setTransform: B.setTransform.bind(this),
          setTranslate: B.setTranslate.bind(this),
          setTransition: B.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      },
      init: function init() {
        this.params.parallax.enabled && this.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        this.params.parallax.enabled && this.parallax.setTranslate();
      },
      setTransition: function setTransition(e) {
        this.params.parallax.enabled && this.parallax.setTransition(e);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var i = this,
          t = {
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        }
      };
      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
        t[e] = X[e].bind(i);
      }), ee.extend(i, {
        zoom: t
      });
      var s = 1;
      Object.defineProperty(i.zoom, "scale", {
        get: function get() {
          return s;
        },
        set: function set(e) {
          if (s !== e) {
            var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
            i.emit("zoomChange", e, t, a);
          }

          s = e;
        }
      });
    },
    on: {
      init: function init() {
        this.params.zoom.enabled && this.zoom.enable();
      },
      destroy: function destroy() {
        this.zoom.disable();
      },
      touchStart: function touchStart(e) {
        this.zoom.enabled && this.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
      },
      transitionEnd: function transitionEnd() {
        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      ee.extend(this, {
        lazy: {
          initialImageLoaded: !1,
          load: Y.load.bind(this),
          loadInSlide: Y.loadInSlide.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
      },
      init: function init() {
        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
      },
      scroll: function scroll() {
        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
      },
      resize: function resize() {
        this.params.lazy.enabled && this.lazy.load();
      },
      scrollbarDragMove: function scrollbarDragMove() {
        this.params.lazy.enabled && this.lazy.load();
      },
      transitionStart: function transitionStart() {
        var e = this;
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function transitionEnd() {
        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      var e = this;
      ee.extend(e, {
        controller: {
          control: e.params.controller.control,
          getInterpolateFunction: V.getInterpolateFunction.bind(e),
          setTranslate: V.setTranslate.bind(e),
          setTransition: V.setTransition.bind(e)
        }
      });
    },
    on: {
      update: function update() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      resize: function resize() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      observerUpdate: function observerUpdate() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      setTranslate: function setTranslate(e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      },
      setTransition: function setTransition(e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}"
      }
    },
    create: function create() {
      var t = this;
      ee.extend(t, {
        a11y: {
          liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        }
      }), Object.keys(F).forEach(function (e) {
        t.a11y[e] = F[e].bind(t);
      });
    },
    on: {
      init: function init() {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
      },
      toEdge: function toEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        this.params.a11y.enabled && this.a11y.updatePagination();
      },
      destroy: function destroy() {
        this.params.a11y.enabled && this.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      var e = this;
      ee.extend(e, {
        history: {
          init: R.init.bind(e),
          setHistory: R.setHistory.bind(e),
          setHistoryPopState: R.setHistoryPopState.bind(e),
          scrollToSlide: R.scrollToSlide.bind(e),
          destroy: R.destroy.bind(e)
        }
      });
    },
    on: {
      init: function init() {
        this.params.history.enabled && this.history.init();
      },
      destroy: function destroy() {
        this.params.history.enabled && this.history.destroy();
      },
      transitionEnd: function transitionEnd() {
        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      var e = this;
      ee.extend(e, {
        hashNavigation: {
          initialized: !1,
          init: q.init.bind(e),
          destroy: q.destroy.bind(e),
          setHash: q.setHash.bind(e),
          onHashCange: q.onHashCange.bind(e)
        }
      });
    },
    on: {
      init: function init() {
        this.params.hashNavigation.enabled && this.hashNavigation.init();
      },
      destroy: function destroy() {
        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
      },
      transitionEnd: function transitionEnd() {
        this.hashNavigation.initialized && this.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function create() {
      var t = this;
      ee.extend(t, {
        autoplay: {
          running: !1,
          paused: !1,
          run: W.run.bind(t),
          start: W.start.bind(t),
          stop: W.stop.bind(t),
          pause: W.pause.bind(t),
          onTransitionEnd: function onTransitionEnd(e) {
            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
          }
        }
      });
    },
    on: {
      init: function init() {
        this.params.autoplay.enabled && this.autoplay.start();
      },
      beforeTransitionStart: function beforeTransitionStart(e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove() {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
      },
      destroy: function destroy() {
        this.autoplay.running && this.autoplay.stop();
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      ee.extend(this, {
        fadeEffect: {
          setTranslate: j.setTranslate.bind(this),
          setTransition: j.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this;

        if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          ee.extend(e.params, t), ee.extend(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate() {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      ee.extend(this, {
        cubeEffect: {
          setTranslate: U.setTranslate.bind(this),
          setTransition: U.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this;

        if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          ee.extend(e.params, t), ee.extend(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate() {
        "cube" === this.params.effect && this.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      ee.extend(this, {
        flipEffect: {
          setTranslate: K.setTranslate.bind(this),
          setTransition: K.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this;

        if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          ee.extend(e.params, t), ee.extend(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate() {
        "flip" === this.params.effect && this.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      ee.extend(this, {
        coverflowEffect: {
          setTranslate: _.setTranslate.bind(this),
          setTransition: _.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this;
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate() {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function create() {
      ee.extend(this, {
        thumbs: {
          swiper: null,
          init: Z.init.bind(this),
          update: Z.update.bind(this),
          onThumbClick: Z.onThumbClick.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this.params.thumbs;
        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
      },
      slideChange: function slideChange() {
        this.thumbs.swiper && this.thumbs.update();
      },
      update: function update() {
        this.thumbs.swiper && this.thumbs.update();
      },
      resize: function resize() {
        this.thumbs.swiper && this.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        this.thumbs.swiper && this.thumbs.update();
      },
      setTransition: function setTransition(e) {
        var t = this.thumbs.swiper;
        t && t.setTransition(e);
      },
      beforeDestroy: function beforeDestroy() {
        var e = this.thumbs.swiper;
        e && this.thumbs.swiperCreated && e && e.destroy();
      }
    }
  }];
  return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(Q), T;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
* iziModal | v1.5.1
* http://izimodal.marcelodolce.com
* by Marcelo Dolce.
*/
!function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, i) {
    return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i;
  } : t(jQuery);
}(function (t) {
  function e() {
    var t,
        e = document.createElement("fakeelement"),
        i = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd"
    };

    for (t in i) {
      if (void 0 !== e.style[t]) return i[t];
    }
  }

  function i(t) {
    return 9 === t ? navigator.appVersion.indexOf("MSIE 9.") !== -1 : navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1;
  }

  function n(t) {
    var e = /%|px|em|cm|vh|vw/;
    return parseInt(String(t).split(e)[0]);
  }

  var o = t(window),
      s = t(document),
      a = "iziModal",
      r = {
    CLOSING: "closing",
    CLOSED: "closed",
    OPENING: "opening",
    OPENED: "opened",
    DESTROYED: "destroyed"
  },
      l = e(),
      d = !!/Mobi/.test(navigator.userAgent);
  window.$iziModal = {}, window.$iziModal.autoOpen = 0, window.$iziModal.history = !1;

  var h = function h(t, e) {
    this.init(t, e);
  };

  return h.prototype = {
    constructor: h,
    init: function init(e, i) {
      var n = this;
      this.$element = t(e), void 0 !== this.$element[0].id && "" !== this.$element[0].id ? this.id = this.$element[0].id : (this.id = a + Math.floor(1e7 * Math.random() + 1), this.$element.attr("id", this.id)), this.classes = void 0 !== this.$element.attr("class") ? this.$element.attr("class") : "", this.content = this.$element.html(), this.state = r.CLOSED, this.options = i, this.width = 0, this.timer = null, this.timerTimeout = null, this.progressBar = null, this.isPaused = !1, this.isFullscreen = !1, this.headerHeight = 0, this.modalHeight = 0, this.$overlay = t('<div class="' + a + '-overlay" style="background-color:' + i.overlayColor + '"></div>'), this.$navigate = t('<div class="' + a + '-navigate"><div class="' + a + '-navigate-caption">Use</div><button class="' + a + '-navigate-prev"></button><button class="' + a + '-navigate-next"></button></div>'), this.group = {
        name: this.$element.attr("data-" + a + "-group"),
        index: null,
        ids: []
      }, this.$element.attr("aria-hidden", "true"), this.$element.attr("aria-labelledby", this.id), this.$element.attr("role", "dialog"), this.$element.hasClass("iziModal") || this.$element.addClass("iziModal"), void 0 === this.group.name && "" !== i.group && (this.group.name = i.group, this.$element.attr("data-" + a + "-group", i.group)), this.options.loop === !0 && this.$element.attr("data-" + a + "-loop", !0), t.each(this.options, function (t, e) {
        var o = n.$element.attr("data-" + a + "-" + t);

        try {
          "undefined" != typeof o && ("" === o || "true" == o ? i[t] = !0 : "false" == o ? i[t] = !1 : "function" == typeof e ? i[t] = new Function(o) : i[t] = o);
        } catch (s) {}
      }), i.appendTo !== !1 && this.$element.appendTo(i.appendTo), i.iframe === !0 ? (this.$element.html('<div class="' + a + '-wrap"><div class="' + a + '-content"><iframe class="' + a + '-iframe"></iframe>' + this.content + "</div></div>"), null !== i.iframeHeight && this.$element.find("." + a + "-iframe").css("height", i.iframeHeight)) : this.$element.html('<div class="' + a + '-wrap"><div class="' + a + '-content">' + this.content + "</div></div>"), null !== this.options.background && this.$element.css("background", this.options.background), this.$wrap = this.$element.find("." + a + "-wrap"), null === i.zindex || isNaN(parseInt(i.zindex)) || (this.$element.css("z-index", i.zindex), this.$navigate.css("z-index", i.zindex - 1), this.$overlay.css("z-index", i.zindex - 2)), "" !== i.radius && this.$element.css("border-radius", i.radius), "" !== i.padding && this.$element.find("." + a + "-content").css("padding", i.padding), "" !== i.theme && ("light" === i.theme ? this.$element.addClass(a + "-light") : this.$element.addClass(i.theme)), i.rtl === !0 && this.$element.addClass(a + "-rtl"), i.openFullscreen === !0 && (this.isFullscreen = !0, this.$element.addClass("isFullscreen")), this.createHeader(), this.recalcWidth(), this.recalcVerticalPos(), !n.options.afterRender || "function" != typeof n.options.afterRender && "object" != _typeof(n.options.afterRender) || n.options.afterRender(n);
    },
    createHeader: function createHeader() {
      this.$header = t('<div class="' + a + '-header"><h2 class="' + a + '-header-title">' + this.options.title + '</h2><p class="' + a + '-header-subtitle">' + this.options.subtitle + '</p><div class="' + a + '-header-buttons"></div></div>'), this.options.closeButton === !0 && this.$header.find("." + a + "-header-buttons").append('<a href="javascript:void(0)" class="' + a + "-button " + a + '-button-close" data-' + a + "-close></a>"), this.options.fullscreen === !0 && this.$header.find("." + a + "-header-buttons").append('<a href="javascript:void(0)" class="' + a + "-button " + a + '-button-fullscreen" data-' + a + "-fullscreen></a>"), this.options.timeoutProgressbar !== !0 || isNaN(parseInt(this.options.timeout)) || this.options.timeout === !1 || 0 === this.options.timeout || this.$header.prepend('<div class="' + a + '-progressbar"><div style="background-color:' + this.options.timeoutProgressbarColor + '"></div></div>'), "" === this.options.subtitle && this.$header.addClass(a + "-noSubtitle"), "" !== this.options.title && (null !== this.options.headerColor && (this.options.borderBottom === !0 && this.$element.css("border-bottom", "3px solid " + this.options.headerColor), this.$header.css("background", this.options.headerColor)), null === this.options.icon && null === this.options.iconText || (this.$header.prepend('<i class="' + a + '-header-icon"></i>'), null !== this.options.icon && this.$header.find("." + a + "-header-icon").addClass(this.options.icon).css("color", this.options.iconColor), null !== this.options.iconText && this.$header.find("." + a + "-header-icon").html(this.options.iconText)), this.$element.css("overflow", "hidden").prepend(this.$header));
    },
    setGroup: function setGroup(e) {
      var i = this,
          n = this.group.name || e;

      if (this.group.ids = [], void 0 !== e && e !== this.group.name && (n = e, this.group.name = n, this.$element.attr("data-" + a + "-group", n)), void 0 !== n && "" !== n) {
        var o = 0;
        t.each(t("." + a + "[data-" + a + "-group=" + n + "]"), function (e, n) {
          i.group.ids.push(t(this)[0].id), i.id == t(this)[0].id && (i.group.index = o), o++;
        });
      }
    },
    toggle: function toggle() {
      this.state == r.OPENED && this.close(), this.state == r.CLOSED && this.open();
    },
    open: function open(e) {
      function i() {
        o.state = r.OPENED, o.$element.trigger(r.OPENED), !o.options.onOpened || "function" != typeof o.options.onOpened && "object" != _typeof(o.options.onOpened) || o.options.onOpened(o);
      }

      function n() {
        o.$element.off("click", "[data-" + a + "-close]").on("click", "[data-" + a + "-close]", function (e) {
          e.preventDefault();
          var i = t(e.currentTarget).attr("data-" + a + "-transitionOut");
          void 0 !== i ? o.close({
            transition: i
          }) : o.close();
        }), o.$element.off("click", "[data-" + a + "-fullscreen]").on("click", "[data-" + a + "-fullscreen]", function (t) {
          t.preventDefault(), o.isFullscreen === !0 ? (o.isFullscreen = !1, o.$element.removeClass("isFullscreen")) : (o.isFullscreen = !0, o.$element.addClass("isFullscreen")), o.options.onFullscreen && "function" == typeof o.options.onFullscreen && o.options.onFullscreen(o), o.$element.trigger("fullscreen", o);
        }), o.$navigate.off("click", "." + a + "-navigate-next").on("click", "." + a + "-navigate-next", function (t) {
          o.next(t);
        }), o.$element.off("click", "[data-" + a + "-next]").on("click", "[data-" + a + "-next]", function (t) {
          o.next(t);
        }), o.$navigate.off("click", "." + a + "-navigate-prev").on("click", "." + a + "-navigate-prev", function (t) {
          o.prev(t);
        }), o.$element.off("click", "[data-" + a + "-prev]").on("click", "[data-" + a + "-prev]", function (t) {
          o.prev(t);
        });
      }

      var o = this;

      if (t.each(t("." + a), function (e, i) {
        if (void 0 !== t(i).data().iziModal) {
          var n = t(i).iziModal("getState");
          "opened" != n && "opening" != n || t(i).iziModal("close");
        }
      }), function () {
        if (o.options.history) {
          var t = document.title;
          document.title = t + " - " + o.options.title, document.location.hash = o.id, document.title = t, window.$iziModal.history = !0;
        } else window.$iziModal.history = !1;
      }(), this.state == r.CLOSED) {
        if (n(), this.setGroup(), this.state = r.OPENING, this.$element.trigger(r.OPENING), this.$element.attr("aria-hidden", "false"), this.options.iframe === !0) {
          this.$element.find("." + a + "-content").addClass(a + "-content-loader"), this.$element.find("." + a + "-iframe").on("load", function () {
            t(this).parent().removeClass(a + "-content-loader");
          });
          var h = null;

          try {
            h = "" !== t(e.currentTarget).attr("href") ? t(e.currentTarget).attr("href") : null;
          } catch (c) {}

          if (null === this.options.iframeURL || null !== h && void 0 !== h || (h = this.options.iframeURL), null === h || void 0 === h) throw new Error("Failed to find iframe URL");
          this.$element.find("." + a + "-iframe").attr("src", h);
        }

        (this.options.bodyOverflow || d) && (t("html").addClass(a + "-isOverflow"), d && t("body").css("overflow", "hidden")), this.options.onOpening && "function" == typeof this.options.onOpening && this.options.onOpening(this), function () {
          if (o.group.ids.length > 1) {
            o.$navigate.appendTo("body"), o.$navigate.addClass("fadeIn"), o.options.navigateCaption === !0 && o.$navigate.find("." + a + "-navigate-caption").show();
            var n = o.$element.outerWidth();
            o.options.navigateArrows !== !1 ? "closeScreenEdge" === o.options.navigateArrows ? (o.$navigate.find("." + a + "-navigate-prev").css("left", 0).show(), o.$navigate.find("." + a + "-navigate-next").css("right", 0).show()) : (o.$navigate.find("." + a + "-navigate-prev").css("margin-left", -(n / 2 + 84)).show(), o.$navigate.find("." + a + "-navigate-next").css("margin-right", -(n / 2 + 84)).show()) : (o.$navigate.find("." + a + "-navigate-prev").hide(), o.$navigate.find("." + a + "-navigate-next").hide());
            var s;
            0 === o.group.index && (s = t("." + a + "[data-" + a + '-group="' + o.group.name + '"][data-' + a + "-loop]").length, 0 === s && o.options.loop === !1 && o.$navigate.find("." + a + "-navigate-prev").hide()), o.group.index + 1 === o.group.ids.length && (s = t("." + a + "[data-" + a + '-group="' + o.group.name + '"][data-' + a + "-loop]").length, 0 === s && o.options.loop === !1 && o.$navigate.find("." + a + "-navigate-next").hide());
          }

          o.options.overlay === !0 && (o.options.appendToOverlay === !1 ? o.$overlay.appendTo("body") : o.$overlay.appendTo(o.options.appendToOverlay)), o.options.transitionInOverlay && o.$overlay.addClass(o.options.transitionInOverlay);
          var r = o.options.transitionIn;
          "object" == _typeof(e) && (void 0 === e.transition && void 0 === e.transitionIn || (r = e.transition || e.transitionIn)), "" !== r && void 0 !== l ? (o.$element.addClass("transitionIn " + r).show(), o.$wrap.one(l, function () {
            o.$element.removeClass(r + " transitionIn"), o.$overlay.removeClass(o.options.transitionInOverlay), o.$navigate.removeClass("fadeIn"), i();
          })) : (o.$element.show(), i()), o.options.pauseOnHover !== !0 || o.options.pauseOnHover !== !0 || o.options.timeout === !1 || isNaN(parseInt(o.options.timeout)) || o.options.timeout === !1 || 0 === o.options.timeout || (o.$element.off("mouseenter").on("mouseenter", function (t) {
            t.preventDefault(), o.isPaused = !0;
          }), o.$element.off("mouseleave").on("mouseleave", function (t) {
            t.preventDefault(), o.isPaused = !1;
          }));
        }(), this.options.timeout === !1 || isNaN(parseInt(this.options.timeout)) || this.options.timeout === !1 || 0 === this.options.timeout || (this.options.timeoutProgressbar === !0 ? (this.progressBar = {
          hideEta: null,
          maxHideTime: null,
          currentTime: new Date().getTime(),
          el: this.$element.find("." + a + "-progressbar > div"),
          updateProgress: function updateProgress() {
            if (!o.isPaused) {
              o.progressBar.currentTime = o.progressBar.currentTime + 10;
              var t = (o.progressBar.hideEta - o.progressBar.currentTime) / o.progressBar.maxHideTime * 100;
              o.progressBar.el.width(t + "%"), t < 0 && o.close();
            }
          }
        }, this.options.timeout > 0 && (this.progressBar.maxHideTime = parseFloat(this.options.timeout), this.progressBar.hideEta = new Date().getTime() + this.progressBar.maxHideTime, this.timerTimeout = setInterval(this.progressBar.updateProgress, 10))) : this.timerTimeout = setTimeout(function () {
          o.close();
        }, o.options.timeout)), this.options.overlayClose && !this.$element.hasClass(this.options.transitionOut) && this.$overlay.click(function () {
          o.close();
        }), this.options.focusInput && this.$element.find(":input:not(button):enabled:visible:first").focus(), function u() {
          o.recalcLayout(), o.timer = setTimeout(u, 300);
        }(), s.on("keydown." + a, function (t) {
          o.options.closeOnEscape && 27 === t.keyCode && o.close();
        });
      }
    },
    close: function close(e) {
      function i() {
        n.state = r.CLOSED, n.$element.trigger(r.CLOSED), n.options.iframe === !0 && n.$element.find("." + a + "-iframe").attr("src", ""), (n.options.bodyOverflow || d) && (t("html").removeClass(a + "-isOverflow"), d && t("body").css("overflow", "auto")), n.options.onClosed && "function" == typeof n.options.onClosed && n.options.onClosed(n), n.options.restoreDefaultContent === !0 && n.$element.find("." + a + "-content").html(n.content), 0 === t("." + a + ":visible").length && t("html").removeClass(a + "-isAttached");
      }

      var n = this;

      if (this.state == r.OPENED || this.state == r.OPENING) {
        s.off("keydown." + a), this.state = r.CLOSING, this.$element.trigger(r.CLOSING), this.$element.attr("aria-hidden", "true"), clearTimeout(this.timer), clearTimeout(this.timerTimeout), n.options.onClosing && "function" == typeof n.options.onClosing && n.options.onClosing(this);
        var o = this.options.transitionOut;
        "object" == _typeof(e) && (void 0 === e.transition && void 0 === e.transitionOut || (o = e.transition || e.transitionOut)), o === !1 || "" === o || void 0 === l ? (this.$element.hide(), this.$overlay.remove(), this.$navigate.remove(), i()) : (this.$element.attr("class", [this.classes, a, o, "light" == this.options.theme ? a + "-light" : this.options.theme, this.isFullscreen === !0 ? "isFullscreen" : "", this.options.rtl ? a + "-rtl" : ""].join(" ")), this.$overlay.attr("class", a + "-overlay " + this.options.transitionOutOverlay), n.options.navigateArrows !== !1 && this.$navigate.attr("class", a + "-navigate fadeOut"), this.$element.one(l, function () {
          n.$element.hasClass(o) && n.$element.removeClass(o + " transitionOut").hide(), n.$overlay.removeClass(n.options.transitionOutOverlay).remove(), n.$navigate.removeClass("fadeOut").remove(), i();
        }));
      }
    },
    next: function next(e) {
      var i = this,
          n = "fadeInRight",
          o = "fadeOutLeft",
          s = t("." + a + ":visible"),
          r = {};
      r.out = this, void 0 !== e && "object" != _typeof(e) ? (e.preventDefault(), s = t(e.currentTarget), n = s.attr("data-" + a + "-transitionIn"), o = s.attr("data-" + a + "-transitionOut")) : void 0 !== e && (void 0 !== e.transitionIn && (n = e.transitionIn), void 0 !== e.transitionOut && (o = e.transitionOut)), this.close({
        transition: o
      }), setTimeout(function () {
        for (var e = t("." + a + "[data-" + a + '-group="' + i.group.name + '"][data-' + a + "-loop]").length, o = i.group.index + 1; o <= i.group.ids.length; o++) {
          try {
            r["in"] = t("#" + i.group.ids[o]).data().iziModal;
          } catch (s) {}

          if ("undefined" != typeof r["in"]) {
            t("#" + i.group.ids[o]).iziModal("open", {
              transition: n
            });
            break;
          }

          if (o == i.group.ids.length && e > 0 || i.options.loop === !0) for (var l = 0; l <= i.group.ids.length; l++) {
            if (r["in"] = t("#" + i.group.ids[l]).data().iziModal, "undefined" != typeof r["in"]) {
              t("#" + i.group.ids[l]).iziModal("open", {
                transition: n
              });
              break;
            }
          }
        }
      }, 200), t(document).trigger(a + "-group-change", r);
    },
    prev: function prev(e) {
      var i = this,
          n = "fadeInLeft",
          o = "fadeOutRight",
          s = t("." + a + ":visible"),
          r = {};
      r.out = this, void 0 !== e && "object" != _typeof(e) ? (e.preventDefault(), s = t(e.currentTarget), n = s.attr("data-" + a + "-transitionIn"), o = s.attr("data-" + a + "-transitionOut")) : void 0 !== e && (void 0 !== e.transitionIn && (n = e.transitionIn), void 0 !== e.transitionOut && (o = e.transitionOut)), this.close({
        transition: o
      }), setTimeout(function () {
        for (var e = t("." + a + "[data-" + a + '-group="' + i.group.name + '"][data-' + a + "-loop]").length, o = i.group.index; o >= 0; o--) {
          try {
            r["in"] = t("#" + i.group.ids[o - 1]).data().iziModal;
          } catch (s) {}

          if ("undefined" != typeof r["in"]) {
            t("#" + i.group.ids[o - 1]).iziModal("open", {
              transition: n
            });
            break;
          }

          if (0 === o && e > 0 || i.options.loop === !0) for (var l = i.group.ids.length - 1; l >= 0; l--) {
            if (r["in"] = t("#" + i.group.ids[l]).data().iziModal, "undefined" != typeof r["in"]) {
              t("#" + i.group.ids[l]).iziModal("open", {
                transition: n
              });
              break;
            }
          }
        }
      }, 200), t(document).trigger(a + "-group-change", r);
    },
    destroy: function destroy() {
      var e = t.Event("destroy");
      this.$element.trigger(e), s.off("keydown." + a), clearTimeout(this.timer), clearTimeout(this.timerTimeout), this.options.iframe === !0 && this.$element.find("." + a + "-iframe").remove(), this.$element.html(this.$element.find("." + a + "-content").html()), this.$element.off("click", "[data-" + a + "-close]"), this.$element.off("click", "[data-" + a + "-fullscreen]"), this.$element.off("." + a).removeData(a).attr("style", ""), this.$overlay.remove(), this.$navigate.remove(), this.$element.trigger(r.DESTROYED), this.$element = null;
    },
    getState: function getState() {
      return this.state;
    },
    getGroup: function getGroup() {
      return this.group;
    },
    setWidth: function setWidth(t) {
      this.options.width = t, this.recalcWidth();
      var e = this.$element.outerWidth();
      this.options.navigateArrows !== !0 && "closeToModal" != this.options.navigateArrows || (this.$navigate.find("." + a + "-navigate-prev").css("margin-left", -(e / 2 + 84)).show(), this.$navigate.find("." + a + "-navigate-next").css("margin-right", -(e / 2 + 84)).show());
    },
    setTop: function setTop(t) {
      this.options.top = t, this.recalcVerticalPos(!1);
    },
    setBottom: function setBottom(t) {
      this.options.bottom = t, this.recalcVerticalPos(!1);
    },
    setHeader: function setHeader(t) {
      t ? this.$element.find("." + a + "-header").show() : (this.headerHeight = 0, this.$element.find("." + a + "-header").hide());
    },
    setTitle: function setTitle(t) {
      this.options.title = t, 0 === this.headerHeight && this.createHeader(), 0 === this.$header.find("." + a + "-header-title").length && this.$header.append('<h2 class="' + a + '-header-title"></h2>'), this.$header.find("." + a + "-header-title").html(t);
    },
    setSubtitle: function setSubtitle(t) {
      "" === t ? (this.$header.find("." + a + "-header-subtitle").remove(), this.$header.addClass(a + "-noSubtitle")) : (0 === this.$header.find("." + a + "-header-subtitle").length && this.$header.append('<p class="' + a + '-header-subtitle"></p>'), this.$header.removeClass(a + "-noSubtitle")), this.$header.find("." + a + "-header-subtitle").html(t), this.options.subtitle = t;
    },
    setIcon: function setIcon(t) {
      0 === this.$header.find("." + a + "-header-icon").length && this.$header.prepend('<i class="' + a + '-header-icon"></i>'), this.$header.find("." + a + "-header-icon").attr("class", a + "-header-icon " + t), this.options.icon = t;
    },
    setIconText: function setIconText(t) {
      this.$header.find("." + a + "-header-icon").html(t), this.options.iconText = t;
    },
    setHeaderColor: function setHeaderColor(t) {
      this.options.borderBottom === !0 && this.$element.css("border-bottom", "3px solid " + t), this.$header.css("background", t), this.options.headerColor = t;
    },
    setBackground: function setBackground(t) {
      t === !1 ? (this.options.background = null, this.$element.css("background", "")) : (this.$element.css("background", t), this.options.background = t);
    },
    setZindex: function setZindex(t) {
      isNaN(parseInt(this.options.zindex)) || (this.options.zindex = t, this.$element.css("z-index", t), this.$navigate.css("z-index", t - 1), this.$overlay.css("z-index", t - 2));
    },
    setFullscreen: function setFullscreen(t) {
      t ? (this.isFullscreen = !0, this.$element.addClass("isFullscreen")) : (this.isFullscreen = !1, this.$element.removeClass("isFullscreen"));
    },
    setContent: function setContent(t) {
      if ("object" == _typeof(t)) {
        var e = t["default"] || !1;
        e === !0 && (this.content = t.content), t = t.content;
      }

      this.options.iframe === !1 && this.$element.find("." + a + "-content").html(t);
    },
    setTransitionIn: function setTransitionIn(t) {
      this.options.transitionIn = t;
    },
    setTransitionOut: function setTransitionOut(t) {
      this.options.transitionOut = t;
    },
    resetContent: function resetContent() {
      this.$element.find("." + a + "-content").html(this.content);
    },
    startLoading: function startLoading() {
      this.$element.find("." + a + "-loader").length || this.$element.append('<div class="' + a + '-loader fadeIn"></div>'), this.$element.find("." + a + "-loader").css({
        top: this.headerHeight,
        borderRadius: this.options.radius
      });
    },
    stopLoading: function stopLoading() {
      var t = this.$element.find("." + a + "-loader");
      t.length || (this.$element.prepend('<div class="' + a + '-loader fadeIn"></div>'), t = this.$element.find("." + a + "-loader").css("border-radius", this.options.radius)), t.removeClass("fadeIn").addClass("fadeOut"), setTimeout(function () {
        t.remove();
      }, 600);
    },
    recalcWidth: function recalcWidth() {
      var t = this;

      if (this.$element.css("max-width", this.options.width), i()) {
        var e = t.options.width;
        e.toString().split("%").length > 1 && (e = t.$element.outerWidth()), t.$element.css({
          left: "50%",
          marginLeft: -(e / 2)
        });
      }
    },
    recalcVerticalPos: function recalcVerticalPos(t) {
      null !== this.options.top && this.options.top !== !1 ? (this.$element.css("margin-top", this.options.top), 0 === this.options.top && this.$element.css({
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      })) : t === !1 && this.$element.css({
        marginTop: "",
        borderRadius: this.options.radius
      }), null !== this.options.bottom && this.options.bottom !== !1 ? (this.$element.css("margin-bottom", this.options.bottom), 0 === this.options.bottom && this.$element.css({
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      })) : t === !1 && this.$element.css({
        marginBottom: "",
        borderRadius: this.options.radius
      });
    },
    recalcLayout: function recalcLayout() {
      var e = this,
          s = o.height(),
          l = this.$element.outerHeight(),
          d = this.$element.outerWidth(),
          h = this.$element.find("." + a + "-content")[0].scrollHeight,
          c = h + this.headerHeight,
          u = this.$element.innerHeight() - this.headerHeight,
          p = (parseInt(-((this.$element.innerHeight() + 1) / 2)) + "px", this.$wrap.scrollTop()),
          f = 0;
      i() && (d >= o.width() || this.isFullscreen === !0 ? this.$element.css({
        left: "0",
        marginLeft: ""
      }) : this.$element.css({
        left: "50%",
        marginLeft: -(d / 2)
      })), this.options.borderBottom === !0 && "" !== this.options.title && (f = 3), this.$element.find("." + a + "-header").length && this.$element.find("." + a + "-header").is(":visible") ? (this.headerHeight = parseInt(this.$element.find("." + a + "-header").innerHeight()), this.$element.css("overflow", "hidden")) : (this.headerHeight = 0, this.$element.css("overflow", "")), this.$element.find("." + a + "-loader").length && this.$element.find("." + a + "-loader").css("top", this.headerHeight), l !== this.modalHeight && (this.modalHeight = l, this.options.onResize && "function" == typeof this.options.onResize && this.options.onResize(this)), this.state != r.OPENED && this.state != r.OPENING || (this.options.iframe === !0 && (s < this.options.iframeHeight + this.headerHeight + f || this.isFullscreen === !0 ? this.$element.find("." + a + "-iframe").css("height", s - (this.headerHeight + f)) : this.$element.find("." + a + "-iframe").css("height", this.options.iframeHeight)), l == s ? this.$element.addClass("isAttached") : this.$element.removeClass("isAttached"), this.isFullscreen === !1 && this.$element.width() >= o.width() ? this.$element.find("." + a + "-button-fullscreen").hide() : this.$element.find("." + a + "-button-fullscreen").show(), this.recalcButtons(), this.isFullscreen === !1 && (s = s - (n(this.options.top) || 0) - (n(this.options.bottom) || 0)), c > s ? (this.options.top > 0 && null === this.options.bottom && h < o.height() && this.$element.addClass("isAttachedBottom"), this.options.bottom > 0 && null === this.options.top && h < o.height() && this.$element.addClass("isAttachedTop"), t("html").addClass(a + "-isAttached"), this.$element.css("height", s)) : (this.$element.css("height", h + (this.headerHeight + f)), this.$element.removeClass("isAttachedTop isAttachedBottom"), t("html").removeClass(a + "-isAttached")), function () {
        h > u && c > s ? (e.$element.addClass("hasScroll"), e.$wrap.css("height", l - (e.headerHeight + f))) : (e.$element.removeClass("hasScroll"), e.$wrap.css("height", "auto"));
      }(), function () {
        u + p < h - 30 ? e.$element.addClass("hasShadow") : e.$element.removeClass("hasShadow");
      }());
    },
    recalcButtons: function recalcButtons() {
      var t = this.$header.find("." + a + "-header-buttons").innerWidth() + 10;
      this.options.rtl === !0 ? this.$header.css("padding-left", t) : this.$header.css("padding-right", t);
    }
  }, o.off("load." + a).on("load." + a, function (e) {
    var i = document.location.hash;
    if (0 === window.$iziModal.autoOpen && !t("." + a).is(":visible")) try {
      var n = t(i).data();
      "undefined" != typeof n && n.iziModal.options.autoOpen !== !1 && t(i).iziModal("open");
    } catch (o) {}
  }), o.off("hashchange." + a).on("hashchange." + a, function (e) {
    var i = document.location.hash,
        n = t(i).data();
    if ("" !== i) try {
      "undefined" != typeof n && "opening" !== t(i).iziModal("getState") && setTimeout(function () {
        t(i).iziModal("open");
      }, 200);
    } catch (o) {} else window.$iziModal.history && t.each(t("." + a), function (e, i) {
      if (void 0 !== t(i).data().iziModal) {
        var n = t(i).iziModal("getState");
        "opened" != n && "opening" != n || t(i).iziModal("close");
      }
    });
  }), s.off("click", "[data-" + a + "-open]").on("click", "[data-" + a + "-open]", function (e) {
    e.preventDefault();
    var i = t("." + a + ":visible"),
        n = t(e.currentTarget).attr("data-" + a + "-open"),
        o = t(e.currentTarget).attr("data-" + a + "-transitionIn"),
        s = t(e.currentTarget).attr("data-" + a + "-transitionOut");
    void 0 !== s ? i.iziModal("close", {
      transition: s
    }) : i.iziModal("close"), setTimeout(function () {
      void 0 !== o ? t(n).iziModal("open", {
        transition: o
      }) : t(n).iziModal("open");
    }, 200);
  }), s.off("keyup." + a).on("keyup." + a, function (e) {
    if (t("." + a + ":visible").length) {
      var i = t("." + a + ":visible")[0].id,
          n = t("#" + i).iziModal("getGroup"),
          o = e || window.event,
          s = o.target || o.srcElement;
      void 0 === i || void 0 === n.name || o.ctrlKey || o.metaKey || o.altKey || "INPUT" === s.tagName.toUpperCase() || "TEXTAREA" == s.tagName.toUpperCase() || (37 === o.keyCode ? t("#" + i).iziModal("prev", o) : 39 === o.keyCode && t("#" + i).iziModal("next", o));
    }
  }), t.fn[a] = function (e, i) {
    if (!t(this).length && "object" == _typeof(e)) {
      var n = {
        $el: document.createElement("div"),
        id: this.selector.split("#"),
        "class": this.selector.split(".")
      };

      if (n.id.length > 1) {
        try {
          n.$el = document.createElement(id[0]);
        } catch (o) {}

        n.$el.id = this.selector.split("#")[1].trim();
      } else if (n["class"].length > 1) {
        try {
          n.$el = document.createElement(n["class"][0]);
        } catch (o) {}

        for (var s = 1; s < n["class"].length; s++) {
          n.$el.classList.add(n["class"][s].trim());
        }
      }

      document.body.appendChild(n.$el), this.push(t(this.selector));
    }

    for (var r = this, l = 0; l < r.length; l++) {
      var d = t(r[l]),
          c = d.data(a),
          u = t.extend({}, t.fn[a].defaults, d.data(), "object" == _typeof(e) && e);

      if (c || e && "object" != _typeof(e)) {
        if ("string" == typeof e && "undefined" != typeof c) return c[e].apply(c, [].concat(i));
      } else d.data(a, c = new h(d, u));

      u.autoOpen && (isNaN(parseInt(u.autoOpen)) ? u.autoOpen === !0 && c.open() : setTimeout(function () {
        c.open();
      }, u.autoOpen), window.$iziModal.autoOpen++);
    }

    return this;
  }, t.fn[a].defaults = {
    title: "",
    subtitle: "",
    headerColor: "#88A0B9",
    background: null,
    theme: "",
    icon: null,
    iconText: null,
    iconColor: "",
    rtl: !1,
    width: 600,
    top: null,
    bottom: null,
    borderBottom: !0,
    padding: 0,
    radius: 3,
    zindex: 999,
    iframe: !1,
    iframeHeight: 400,
    iframeURL: null,
    focusInput: !0,
    group: "",
    loop: !1,
    navigateCaption: !0,
    navigateArrows: !0,
    history: !1,
    restoreDefaultContent: !1,
    autoOpen: 0,
    bodyOverflow: !1,
    fullscreen: !1,
    openFullscreen: !1,
    closeOnEscape: !0,
    closeButton: !0,
    appendTo: "body",
    appendToOverlay: "body",
    overlay: !0,
    overlayClose: !0,
    overlayColor: "rgba(0, 0, 0, 0.4)",
    timeout: !1,
    timeoutProgressbar: !1,
    pauseOnHover: !1,
    timeoutProgressbarColor: "rgba(255,255,255,0.5)",
    transitionIn: "comingIn",
    transitionOut: "comingOut",
    transitionInOverlay: "fadeIn",
    transitionOutOverlay: "fadeOut",
    onFullscreen: function onFullscreen() {},
    onResize: function onResize() {},
    onOpening: function onOpening() {},
    onOpened: function onOpened() {},
    onClosing: function onClosing() {},
    onClosed: function onClosed() {},
    afterRender: function afterRender() {}
  }, t.fn[a].Constructor = h, t.fn.iziModal;
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Ion.RangeSlider, 2.3.0, © Denis Ineshin, 2010 - 2018, IonDen.com, Build date: 2018-12-12 00:00:37
!function (i) {
  !jQuery && "function" == typeof define && define.amd ? define(["jquery"], function (t) {
    return i(t, document, window, navigator);
  }) : jQuery || "object" != (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? i(jQuery, document, window, navigator) : i(require("jquery"), document, window, navigator);
}(function (a, c, l, t, _) {
  "use strict";

  var i,
      s,
      o = 0,
      e = (i = t.userAgent, s = /msie\s\d+/i, 0 < i.search(s) && s.exec(i).toString().split(" ")[1] < 9 && (a("html").addClass("lt-ie9"), !0));
  Function.prototype.bind || (Function.prototype.bind = function (o) {
    var e = this,
        h = [].slice;
    if ("function" != typeof e) throw new TypeError();

    var r = h.call(arguments, 1),
        n = function n() {
      if (this instanceof n) {
        var t = function t() {};

        t.prototype = e.prototype;
        var i = new t(),
            s = e.apply(i, r.concat(h.call(arguments)));
        return Object(s) === s ? s : i;
      }

      return e.apply(o, r.concat(h.call(arguments)));
    };

    return n;
  }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, i) {
    var s;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var o = Object(this),
        e = o.length >>> 0;
    if (0 === e) return -1;
    var h = +i || 0;
    if (Math.abs(h) === 1 / 0 && (h = 0), e <= h) return -1;

    for (s = Math.max(0 <= h ? h : e - Math.abs(h), 0); s < e;) {
      if (s in o && o[s] === t) return s;
      s++;
    }

    return -1;
  });

  var h = function h(t, i, s) {
    this.VERSION = "2.3.0", this.input = t, this.plugin_count = s, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, i = i || {}, this.$cache = {
      win: a(l),
      body: a(c.body),
      input: a(t),
      cont: null,
      rs: null,
      min: null,
      max: null,
      from: null,
      to: null,
      single: null,
      bar: null,
      line: null,
      s_single: null,
      s_from: null,
      s_to: null,
      shad_single: null,
      shad_from: null,
      shad_to: null,
      edge: null,
      grid: null,
      grid_labels: []
    }, this.coords = {
      x_gap: 0,
      x_pointer: 0,
      w_rs: 0,
      w_rs_old: 0,
      w_handle: 0,
      p_gap: 0,
      p_gap_left: 0,
      p_gap_right: 0,
      p_step: 0,
      p_pointer: 0,
      p_handle: 0,
      p_single_fake: 0,
      p_single_real: 0,
      p_from_fake: 0,
      p_from_real: 0,
      p_to_fake: 0,
      p_to_real: 0,
      p_bar_x: 0,
      p_bar_w: 0,
      grid_gap: 0,
      big_num: 0,
      big: [],
      big_w: [],
      big_p: [],
      big_x: []
    }, this.labels = {
      w_min: 0,
      w_max: 0,
      w_from: 0,
      w_to: 0,
      w_single: 0,
      p_min: 0,
      p_max: 0,
      p_from_fake: 0,
      p_from_left: 0,
      p_to_fake: 0,
      p_to_left: 0,
      p_single_fake: 0,
      p_single_left: 0
    };
    var o,
        e,
        h,
        r = this.$cache.input,
        n = r.prop("value");

    for (h in o = {
      skin: "flat",
      type: "single",
      min: 10,
      max: 100,
      from: null,
      to: null,
      step: 1,
      min_interval: 0,
      max_interval: 0,
      drag_interval: !1,
      values: [],
      p_values: [],
      from_fixed: !1,
      from_min: null,
      from_max: null,
      from_shadow: !1,
      to_fixed: !1,
      to_min: null,
      to_max: null,
      to_shadow: !1,
      prettify_enabled: !0,
      prettify_separator: " ",
      prettify: null,
      force_edges: !1,
      keyboard: !0,
      grid: !1,
      grid_margin: !0,
      grid_num: 4,
      grid_snap: !1,
      hide_min_max: !1,
      hide_from_to: !1,
      prefix: "",
      postfix: "",
      max_postfix: "",
      decorate_both: !0,
      values_separator: " — ",
      input_values_separator: ";",
      disable: !1,
      block: !1,
      extra_classes: "",
      scope: null,
      onStart: null,
      onChange: null,
      onFinish: null,
      onUpdate: null
    }, "INPUT" !== r[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", r[0]), (e = {
      skin: r.data("skin"),
      type: r.data("type"),
      min: r.data("min"),
      max: r.data("max"),
      from: r.data("from"),
      to: r.data("to"),
      step: r.data("step"),
      min_interval: r.data("minInterval"),
      max_interval: r.data("maxInterval"),
      drag_interval: r.data("dragInterval"),
      values: r.data("values"),
      from_fixed: r.data("fromFixed"),
      from_min: r.data("fromMin"),
      from_max: r.data("fromMax"),
      from_shadow: r.data("fromShadow"),
      to_fixed: r.data("toFixed"),
      to_min: r.data("toMin"),
      to_max: r.data("toMax"),
      to_shadow: r.data("toShadow"),
      prettify_enabled: r.data("prettifyEnabled"),
      prettify_separator: r.data("prettifySeparator"),
      force_edges: r.data("forceEdges"),
      keyboard: r.data("keyboard"),
      grid: r.data("grid"),
      grid_margin: r.data("gridMargin"),
      grid_num: r.data("gridNum"),
      grid_snap: r.data("gridSnap"),
      hide_min_max: r.data("hideMinMax"),
      hide_from_to: r.data("hideFromTo"),
      prefix: r.data("prefix"),
      postfix: r.data("postfix"),
      max_postfix: r.data("maxPostfix"),
      decorate_both: r.data("decorateBoth"),
      values_separator: r.data("valuesSeparator"),
      input_values_separator: r.data("inputValuesSeparator"),
      disable: r.data("disable"),
      block: r.data("block"),
      extra_classes: r.data("extraClasses")
    }).values = e.values && e.values.split(","), e) {
      e.hasOwnProperty(h) && (e[h] !== _ && "" !== e[h] || delete e[h]);
    }

    n !== _ && "" !== n && ((n = n.split(e.input_values_separator || i.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), i && i.values && i.values.length ? (o.from = n[0] && i.values.indexOf(n[0]), o.to = n[1] && i.values.indexOf(n[1])) : (o.from = n[0] && +n[0], o.to = n[1] && +n[1])), a.extend(o, i), a.extend(o, e), this.options = o, this.update_check = {}, this.validate(), this.result = {
      input: this.$cache.input,
      slider: null,
      min: this.options.min,
      max: this.options.max,
      from: this.options.from,
      from_percent: 0,
      from_value: null,
      to: this.options.to,
      to_percent: 0,
      to_value: null
    }, this.init();
  };

  h.prototype = {
    init: function init(t) {
      this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene();
    },
    append: function append() {
      var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
      this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
    },
    setTopHandler: function setTopHandler() {
      var t = this.options.min,
          i = this.options.max,
          s = this.options.from,
          o = this.options.to;
      t < s && o === i ? this.$cache.s_from.addClass("type_last") : o < i && this.$cache.s_to.addClass("type_last");
    },
    changeLevel: function changeLevel(t) {
      switch (t) {
        case "single":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
          break;

        case "from":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
          break;

        case "to":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
          break;

        case "both":
          this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last");
      }
    },
    appendDisableMask: function appendDisableMask() {
      this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled");
    },
    removeDisableMask: function removeDisableMask() {
      this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled");
    },
    remove: function remove() {
      this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), e && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id);
    },
    bindEvents: function bindEvents() {
      this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), e && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
    },
    pointerFocus: function pointerFocus(t) {
      var i, s;
      this.target || (i = (s = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, i += s.width() / 2 - 1, this.pointerClick("single", {
        preventDefault: function preventDefault() {},
        pageX: i
      }));
    },
    pointerMove: function pointerMove(t) {
      if (this.dragging) {
        var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
        this.coords.x_pointer = i - this.coords.x_gap, this.calc();
      }
    },
    pointerUp: function pointerUp(t) {
      this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, e && a("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (a.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1);
    },
    pointerDown: function pointerDown(t, i) {
      i.preventDefault();
      var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
      2 !== i.button && ("both" === t && this.setTempMinInterval(), t || (t = this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = s - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), e && a("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene());
    },
    pointerClick: function pointerClick(t, i) {
      i.preventDefault();
      var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
      2 !== i.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(s - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"));
    },
    key: function key(t, i) {
      if (!(this.current_plugin !== this.plugin_count || i.altKey || i.ctrlKey || i.shiftKey || i.metaKey)) {
        switch (i.which) {
          case 83:
          case 65:
          case 40:
          case 37:
            i.preventDefault(), this.moveByKey(!1);
            break;

          case 87:
          case 68:
          case 38:
          case 39:
            i.preventDefault(), this.moveByKey(!0);
        }

        return !0;
      }
    },
    moveByKey: function moveByKey(t) {
      var i = this.coords.p_pointer,
          s = (this.options.max - this.options.min) / 100;
      s = this.options.step / s, t ? i += s : i -= s, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * i), this.is_key = !0, this.calc();
    },
    setMinMax: function setMinMax() {
      if (this.options) {
        if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void (this.$cache.max[0].style.display = "none");
        if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else {
          var t = this._prettify(this.options.min),
              i = this._prettify(this.options.max);

          this.result.min_pretty = t, this.result.max_pretty = i, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(i, this.options.max));
        }
        this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1);
      }
    },
    setTempMinInterval: function setTempMinInterval() {
      var t = this.result.to - this.result.from;
      null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t;
    },
    restoreOriginalMinInterval: function restoreOriginalMinInterval() {
      null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null);
    },
    calc: function calc(t) {
      if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
        this.calcPointerPercent();
        var i = this.getHandleX();

        switch ("both" === this.target && (this.coords.p_gap = 0, i = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, i = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(i)), this.target) {
          case "base":
            var s = (this.options.max - this.options.min) / 100,
                o = (this.result.from - this.options.min) / s,
                e = (this.result.to - this.options.min) / s;
            this.coords.p_single_real = this.toFixed(o), this.coords.p_from_real = this.toFixed(o), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
            break;

          case "single":
            if (this.options.from_fixed) break;
            this.coords.p_single_real = this.convertToRealPercent(i), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
            break;

          case "from":
            if (this.options.from_fixed) break;
            this.coords.p_from_real = this.convertToRealPercent(i), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            break;

          case "to":
            if (this.options.to_fixed) break;
            this.coords.p_to_real = this.convertToRealPercent(i), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;

          case "both":
            if (this.options.from_fixed || this.options.to_fixed) break;
            i = this.toFixed(i + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(i) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(i) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;

          case "both_one":
            if (this.options.from_fixed || this.options.to_fixed) break;
            var h = this.convertToRealPercent(i),
                r = this.result.from_percent,
                n = this.result.to_percent - r,
                a = n / 2,
                c = h - a,
                l = h + a;
            c < 0 && (l = (c = 0) + n), 100 < l && (c = (l = 100) - n), this.coords.p_from_real = this.calcWithStep(c), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(l), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
        }

        "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels();
      }
    },
    calcPointerPercent: function calcPointerPercent() {
      this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0;
    },
    convertToRealPercent: function convertToRealPercent(t) {
      return t / (100 - this.coords.p_handle) * 100;
    },
    convertToFakePercent: function convertToFakePercent(t) {
      return t / 100 * (100 - this.coords.p_handle);
    },
    getHandleX: function getHandleX() {
      var t = 100 - this.coords.p_handle,
          i = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
      return i < 0 ? i = 0 : t < i && (i = t), i;
    },
    calcHandlePercent: function calcHandlePercent() {
      "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
    },
    chooseHandle: function chooseHandle(t) {
      return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from";
    },
    calcMinMax: function calcMinMax() {
      this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100);
    },
    calcLabels: function calcLabels() {
      this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake));
    },
    updateScene: function updateScene() {
      this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300));
    },
    drawHandles: function drawHandles() {
      this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1));
    },
    drawLabels: function drawLabels() {
      if (this.options) {
        var t,
            i,
            s,
            o,
            e,
            h = this.options.values.length,
            r = this.options.p_values;
        if (!this.options.hide_from_to) if ("single" === this.options.type) t = h ? this.decorate(r[this.result.from]) : (o = this._prettify(this.result.from), this.decorate(o, this.result.from)), this.$cache.single.html(t), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";else {
          s = h ? (this.options.decorate_both ? (t = this.decorate(r[this.result.from]), t += this.options.values_separator, t += this.decorate(r[this.result.to])) : t = this.decorate(r[this.result.from] + this.options.values_separator + r[this.result.to]), i = this.decorate(r[this.result.from]), this.decorate(r[this.result.to])) : (o = this._prettify(this.result.from), e = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(o, this.result.from), t += this.options.values_separator, t += this.decorate(e, this.result.to)) : t = this.decorate(o + this.options.values_separator + e, this.result.to), i = this.decorate(o, this.result.from), this.decorate(e, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(i), this.$cache.to.html(s), this.calcLabels();
          var n = Math.min(this.labels.p_single_left, this.labels.p_from_left),
              a = this.labels.p_single_left + this.labels.p_single_fake,
              c = this.labels.p_to_left + this.labels.p_to_fake,
              l = Math.max(a, c);
          this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", l = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(a, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), n < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", l > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
        }
      }
    },
    drawShadow: function drawShadow() {
      var t,
          i,
          s,
          o,
          e = this.options,
          h = this.$cache,
          r = "number" == typeof e.from_min && !isNaN(e.from_min),
          n = "number" == typeof e.from_max && !isNaN(e.from_max),
          a = "number" == typeof e.to_min && !isNaN(e.to_min),
          c = "number" == typeof e.to_max && !isNaN(e.to_max);
      "single" === e.type ? e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_single[0].style.display = "block", h.shad_single[0].style.left = t + "%", h.shad_single[0].style.width = i + "%") : h.shad_single[0].style.display = "none" : (e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_from[0].style.display = "block", h.shad_from[0].style.left = t + "%", h.shad_from[0].style.width = i + "%") : h.shad_from[0].style.display = "none", e.to_shadow && (a || c) ? (s = this.convertToPercent(a ? e.to_min : e.min), o = this.convertToPercent(c ? e.to_max : e.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), o = this.toFixed(o - this.coords.p_handle / 100 * o), s += this.coords.p_handle / 2, h.shad_to[0].style.display = "block", h.shad_to[0].style.left = s + "%", h.shad_to[0].style.width = o + "%") : h.shad_to[0].style.display = "none");
    },
    writeToInput: function writeToInput() {
      "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to));
    },
    callOnStart: function callOnStart() {
      this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result));
    },
    callOnChange: function callOnChange() {
      this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result));
    },
    callOnFinish: function callOnFinish() {
      this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result));
    },
    callOnUpdate: function callOnUpdate() {
      this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result));
    },
    toggleInput: function toggleInput() {
      this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index;
    },
    convertToPercent: function convertToPercent(t, i) {
      var s,
          o = this.options.max - this.options.min,
          e = o / 100;
      return o ? (s = (i ? t : t - this.options.min) / e, this.toFixed(s)) : (this.no_diapason = !0, 0);
    },
    convertToValue: function convertToValue(t) {
      var i,
          s,
          o = this.options.min,
          e = this.options.max,
          h = o.toString().split(".")[1],
          r = e.toString().split(".")[1],
          n = 0,
          a = 0;
      if (0 === t) return this.options.min;
      if (100 === t) return this.options.max;
      h && (n = i = h.length), r && (n = s = r.length), i && s && (n = s <= i ? i : s), o < 0 && (o = +(o + (a = Math.abs(o))).toFixed(n), e = +(e + a).toFixed(n));
      var c,
          l = (e - o) / 100 * t + o,
          _ = this.options.step.toString().split(".")[1];
      return l = _ ? +l.toFixed(_.length) : (l /= this.options.step, +(l *= this.options.step).toFixed(0)), a && (l -= a), (c = _ ? +l.toFixed(_.length) : this.toFixed(l)) < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c;
    },
    calcWithStep: function calcWithStep(t) {
      var i = Math.round(t / this.coords.p_step) * this.coords.p_step;
      return 100 < i && (i = 100), 100 === t && (i = 100), this.toFixed(i);
    },
    checkMinInterval: function checkMinInterval(t, i, s) {
      var o,
          e,
          h = this.options;
      return h.min_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o < h.min_interval && (o = e - h.min_interval) : o - e < h.min_interval && (o = e + h.min_interval), this.convertToPercent(o)) : t;
    },
    checkMaxInterval: function checkMaxInterval(t, i, s) {
      var o,
          e,
          h = this.options;
      return h.max_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o > h.max_interval && (o = e - h.max_interval) : o - e > h.max_interval && (o = e + h.max_interval), this.convertToPercent(o)) : t;
    },
    checkDiapason: function checkDiapason(t, i, s) {
      var o = this.convertToValue(t),
          e = this.options;
      return "number" != typeof i && (i = e.min), "number" != typeof s && (s = e.max), o < i && (o = i), s < o && (o = s), this.convertToPercent(o);
    },
    toFixed: function toFixed(t) {
      return +(t = t.toFixed(20));
    },
    _prettify: function _prettify(t) {
      return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t;
    },
    prettify: function prettify(t) {
      return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
    },
    checkEdges: function checkEdges(t, i) {
      return this.options.force_edges && (t < 0 ? t = 0 : 100 - i < t && (t = 100 - i)), this.toFixed(t);
    },
    validate: function validate() {
      var t,
          i,
          s = this.options,
          o = this.result,
          e = s.values,
          h = e.length;
      if ("string" == typeof s.min && (s.min = +s.min), "string" == typeof s.max && (s.max = +s.max), "string" == typeof s.from && (s.from = +s.from), "string" == typeof s.to && (s.to = +s.to), "string" == typeof s.step && (s.step = +s.step), "string" == typeof s.from_min && (s.from_min = +s.from_min), "string" == typeof s.from_max && (s.from_max = +s.from_max), "string" == typeof s.to_min && (s.to_min = +s.to_min), "string" == typeof s.to_max && (s.to_max = +s.to_max), "string" == typeof s.grid_num && (s.grid_num = +s.grid_num), s.max < s.min && (s.max = s.min), h) for (s.p_values = [], s.min = 0, s.max = h - 1, s.step = 1, s.grid_num = s.max, s.grid_snap = !0, i = 0; i < h; i++) {
        t = +e[i], t = isNaN(t) ? e[i] : (e[i] = t, this._prettify(t)), s.p_values.push(t);
      }
      ("number" != typeof s.from || isNaN(s.from)) && (s.from = s.min), ("number" != typeof s.to || isNaN(s.to)) && (s.to = s.max), "single" === s.type ? (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max)) : (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max), s.to < s.min && (s.to = s.min), s.to > s.max && (s.to = s.max), this.update_check.from && (this.update_check.from !== s.from && s.from > s.to && (s.from = s.to), this.update_check.to !== s.to && s.to < s.from && (s.to = s.from)), s.from > s.to && (s.from = s.to), s.to < s.from && (s.to = s.from)), ("number" != typeof s.step || isNaN(s.step) || !s.step || s.step < 0) && (s.step = 1), "number" == typeof s.from_min && s.from < s.from_min && (s.from = s.from_min), "number" == typeof s.from_max && s.from > s.from_max && (s.from = s.from_max), "number" == typeof s.to_min && s.to < s.to_min && (s.to = s.to_min), "number" == typeof s.to_max && s.from > s.to_max && (s.to = s.to_max), o && (o.min !== s.min && (o.min = s.min), o.max !== s.max && (o.max = s.max), (o.from < o.min || o.from > o.max) && (o.from = s.from), (o.to < o.min || o.to > o.max) && (o.to = s.to)), ("number" != typeof s.min_interval || isNaN(s.min_interval) || !s.min_interval || s.min_interval < 0) && (s.min_interval = 0), ("number" != typeof s.max_interval || isNaN(s.max_interval) || !s.max_interval || s.max_interval < 0) && (s.max_interval = 0), s.min_interval && s.min_interval > s.max - s.min && (s.min_interval = s.max - s.min), s.max_interval && s.max_interval > s.max - s.min && (s.max_interval = s.max - s.min);
    },
    decorate: function decorate(t, i) {
      var s = "",
          o = this.options;
      return o.prefix && (s += o.prefix), s += t, o.max_postfix && (o.values.length && t === o.p_values[o.max] ? (s += o.max_postfix, o.postfix && (s += " ")) : i === o.max && (s += o.max_postfix, o.postfix && (s += " "))), o.postfix && (s += o.postfix), s;
    },
    updateFrom: function updateFrom() {
      this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from]);
    },
    updateTo: function updateTo() {
      this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to]);
    },
    updateResult: function updateResult() {
      this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo();
    },
    appendGrid: function appendGrid() {
      if (this.options.grid) {
        var t,
            i,
            s,
            o,
            e,
            h,
            r = this.options,
            n = r.max - r.min,
            a = r.grid_num,
            c = 0,
            l = 4,
            _ = "";

        for (this.calcGridMargin(), r.grid_snap && (a = n / r.step), 50 < a && (a = 50), s = this.toFixed(100 / a), 4 < a && (l = 3), 7 < a && (l = 2), 14 < a && (l = 1), 28 < a && (l = 0), t = 0; t < a + 1; t++) {
          for (o = l, 100 < (c = this.toFixed(s * t)) && (c = 100), e = ((this.coords.big[t] = c) - s * (t - 1)) / (o + 1), i = 1; i <= o && 0 !== c; i++) {
            _ += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - e * i) + '%"></span>';
          }

          _ += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', h = this.convertToValue(c), _ += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (h = r.values.length ? r.p_values[h] : this._prettify(h)) + "</span>";
        }

        this.coords.big_num = Math.ceil(a + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(_), this.cacheGridLabels();
      }
    },
    cacheGridLabels: function cacheGridLabels() {
      var t,
          i,
          s = this.coords.big_num;

      for (i = 0; i < s; i++) {
        t = this.$cache.grid.find(".js-grid-text-" + i), this.$cache.grid_labels.push(t);
      }

      this.calcGridLabels();
    },
    calcGridLabels: function calcGridLabels() {
      var t,
          i,
          s = [],
          o = [],
          e = this.coords.big_num;

      for (t = 0; t < e; t++) {
        this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), s[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), o[t] = this.toFixed(s[t] + this.coords.big_p[t]);
      }

      for (this.options.force_edges && (s[0] < -this.coords.grid_gap && (s[0] = -this.coords.grid_gap, o[0] = this.toFixed(s[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), o[e - 1] > 100 + this.coords.grid_gap && (o[e - 1] = 100 + this.coords.grid_gap, s[e - 1] = this.toFixed(o[e - 1] - this.coords.big_p[e - 1]), this.coords.big_x[e - 1] = this.toFixed(this.coords.big_p[e - 1] - this.coords.grid_gap))), this.calcGridCollision(2, s, o), this.calcGridCollision(4, s, o), t = 0; t < e; t++) {
        i = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (i.style.marginLeft = -this.coords.big_x[t] + "%");
      }
    },
    calcGridCollision: function calcGridCollision(t, i, s) {
      var o,
          e,
          h,
          r = this.coords.big_num;

      for (o = 0; o < r && !(r <= (e = o + t / 2)); o += t) {
        h = this.$cache.grid_labels[e][0], s[o] <= i[e] ? h.style.visibility = "visible" : h.style.visibility = "hidden";
      }
    },
    calcGridMargin: function calcGridMargin() {
      this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"));
    },
    update: function update(t) {
      this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = a.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0));
    },
    reset: function reset() {
      this.input && (this.updateResult(), this.update());
    },
    destroy: function destroy() {
      this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), a.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null);
    }
  }, a.fn.ionRangeSlider = function (t) {
    return this.each(function () {
      a.data(this, "ionRangeSlider") || a.data(this, "ionRangeSlider", new h(this, t, o++));
    });
  }, function () {
    for (var h = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !l.requestAnimationFrame; ++i) {
      l.requestAnimationFrame = l[t[i] + "RequestAnimationFrame"], l.cancelAnimationFrame = l[t[i] + "CancelAnimationFrame"] || l[t[i] + "CancelRequestAnimationFrame"];
    }

    l.requestAnimationFrame || (l.requestAnimationFrame = function (t, i) {
      var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - h)),
          e = l.setTimeout(function () {
        t(s + o);
      }, o);
      return h = s + o, e;
    }), l.cancelAnimationFrame || (l.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }();
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
// SmoothScroll for websites v1.4.9 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me.
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any
// extension for browsers or native application
// without getting a written permission first.
//
var smoothFrameRate = 60;
var smoothAnimationTime = 700;
var smoothStepSize = 120;
!function () {
  var e,
      t,
      o,
      n,
      r = {
    frameRate: smoothFrameRate,
    animationTime: smoothAnimationTime,
    stepSize: smoothStepSize,
    pulseAlgorithm: !0,
    pulseScale: 4,
    pulseNormalize: 1,
    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: !0,
    arrowScroll: 50,
    fixedBackground: !0,
    excluded: ""
  },
      a = r,
      i = !1,
      l = !1,
      c = {
    x: 0,
    y: 0
  },
      s = !1,
      u = document.documentElement,
      d = [],
      m = /^Mac/.test(navigator.platform),
      f = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
  },
      h = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  function w() {
    if (!s && document.body) {
      s = !0;
      var n = document.body,
          r = document.documentElement,
          c = window.innerHeight,
          d = n.scrollHeight;
      if (u = document.compatMode.indexOf("CSS") >= 0 ? r : n, e = n, a.keyboardSupport && Y("keydown", S), top != self) l = !0;else if (Z && d > c && (n.offsetHeight <= c || r.offsetHeight <= c)) {
        var m,
            f = document.createElement("div");
        f.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + u.scrollHeight + "px", document.body.appendChild(f), o = function o() {
          m || (m = setTimeout(function () {
            i || (f.style.height = "0", f.style.height = u.scrollHeight + "px", m = null);
          }, 500));
        }, setTimeout(o, 10), Y("resize", o);

        if ((t = new q(o)).observe(n, {
          attributes: !0,
          childList: !0,
          characterData: !1
        }), u.offsetHeight <= c) {
          var h = document.createElement("div");
          h.style.clear = "both", n.appendChild(h);
        }
      }
      a.fixedBackground || i || (n.style.backgroundAttachment = "scroll", r.style.backgroundAttachment = "scroll");
    }
  }

  var p = [],
      v = !1,
      y = Date.now();

  function b(e, t, o) {
    var n, r;

    if (n = (n = t) > 0 ? 1 : -1, r = (r = o) > 0 ? 1 : -1, (c.x !== n || c.y !== r) && (c.x = n, c.y = r, p = [], y = 0), 1 != a.accelerationMax) {
      var i = Date.now() - y;

      if (i < a.accelerationDelta) {
        var l = (1 + 50 / i) / 2;
        l > 1 && (l = Math.min(l, a.accelerationMax), t *= l, o *= l);
      }

      y = Date.now();
    }

    if (p.push({
      x: t,
      y: o,
      lastX: t < 0 ? .99 : -.99,
      lastY: o < 0 ? .99 : -.99,
      start: Date.now()
    }), !v) {
      var s = F(),
          u = e === s || e === document.body;
      null == e.$scrollBehavior && function (e) {
        var t = M(e);

        if (null == B[t]) {
          var o = getComputedStyle(e, "")["scroll-behavior"];
          B[t] = "smooth" == o;
        }

        return B[t];
      }(e) && (e.$scrollBehavior = e.style.scrollBehavior, e.style.scrollBehavior = "auto");

      var d = function d(n) {
        for (var r = Date.now(), i = 0, l = 0, c = 0; c < p.length; c++) {
          var s = p[c],
              m = r - s.start,
              f = m >= a.animationTime,
              h = f ? 1 : m / a.animationTime;
          a.pulseAlgorithm && (h = I(h));
          var w = s.x * h - s.lastX >> 0,
              y = s.y * h - s.lastY >> 0;
          i += w, l += y, s.lastX += w, s.lastY += y, f && (p.splice(c, 1), c--);
        }

        u ? window.scrollBy(i, l) : (i && (e.scrollLeft += i), l && (e.scrollTop += l)), t || o || (p = []), p.length ? j(d, e, 1e3 / a.frameRate + 1) : (v = !1, null != e.$scrollBehavior && (e.style.scrollBehavior = e.$scrollBehavior, e.$scrollBehavior = null));
      };

      j(d, e, 0), v = !0;
    }
  }

  function g(t) {
    s || w();
    var o = t.target;
    if (t.defaultPrevented || t.ctrlKey) return !0;
    if (K(e, "embed") || K(o, "embed") && /\.pdf/i.test(o.src) || K(e, "object") || o.shadowRoot) return !0;
    var r = -t.wheelDeltaX || t.deltaX || 0,
        i = -t.wheelDeltaY || t.deltaY || 0;
    m && (t.wheelDeltaX && P(t.wheelDeltaX, 120) && (r = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120), t.wheelDeltaY && P(t.wheelDeltaY, 120) && (i = t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)), r || i || (i = -t.wheelDelta || 0), 1 === t.deltaMode && (r *= 40, i *= 40);
    var c = L(o);
    return c ? !!function (e) {
      if (!e) return;
      d.length || (d = [e, e, e]);
      e = Math.abs(e), d.push(e), d.shift(), clearTimeout(n), n = setTimeout(function () {
        try {
          localStorage.SS_deltaBuffer = d.join(",");
        } catch (e) {}
      }, 1e3);
      var t = e > 120 && R(e);
      return !R(120) && !R(100) && !t;
    }(i) || (Math.abs(r) > 1.2 && (r *= a.stepSize / 120), Math.abs(i) > 1.2 && (i *= a.stepSize / 120), b(c, r, i), t.preventDefault(), void C()) : !l || !U || (Object.defineProperty(t, "target", {
      value: window.frameElement
    }), parent.wheel(t));
  }

  function S(t) {
    var o = t.target,
        n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== f.spacebar;
    document.body.contains(e) || (e = document.activeElement);
    var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (t.defaultPrevented || /^(textarea|select|embed|object)$/i.test(o.nodeName) || K(o, "input") && !r.test(o.type) || K(e, "video") || function (e) {
      var t = e.target,
          o = !1;
      if (-1 != document.URL.indexOf("www.youtube.com/watch")) do {
        if (o = t.classList && t.classList.contains("html5-video-controls")) break;
      } while (t = t.parentNode);
      return o;
    }(t) || o.isContentEditable || n) return !0;
    if ((K(o, "button") || K(o, "input") && r.test(o.type)) && t.keyCode === f.spacebar) return !0;
    if (K(o, "input") && "radio" == o.type && h[t.keyCode]) return !0;
    var i = 0,
        c = 0,
        s = L(e);
    if (!s) return !l || !U || parent.keydown(t);
    var u = s.clientHeight;

    switch (s == document.body && (u = window.innerHeight), t.keyCode) {
      case f.up:
        c = -a.arrowScroll;
        break;

      case f.down:
        c = a.arrowScroll;
        break;

      case f.spacebar:
        c = -(t.shiftKey ? 1 : -1) * u * .9;
        break;

      case f.pageup:
        c = .9 * -u;
        break;

      case f.pagedown:
        c = .9 * u;
        break;

      case f.home:
        s == document.body && document.scrollingElement && (s = document.scrollingElement), c = -s.scrollTop;
        break;

      case f.end:
        var d = s.scrollHeight - s.scrollTop - u;
        c = d > 0 ? d + 10 : 0;
        break;

      case f.left:
        i = -a.arrowScroll;
        break;

      case f.right:
        i = a.arrowScroll;
        break;

      default:
        return !0;
    }

    b(s, i, c), t.preventDefault(), C();
  }

  function x(t) {
    e = t.target;
  }

  var k,
      D,
      M = (k = 0, function (e) {
    return e.uniqueID || (e.uniqueID = k++);
  }),
      E = {},
      T = {},
      B = {};

  function C() {
    clearTimeout(D), D = setInterval(function () {
      E = T = B = {};
    }, 1e3);
  }

  function H(e, t, o) {
    for (var n = o ? E : T, r = e.length; r--;) {
      n[M(e[r])] = t;
    }

    return t;
  }

  function z(e, t) {
    return (t ? E : T)[M(e)];
  }

  function L(e) {
    var t = [],
        o = document.body,
        n = u.scrollHeight;

    do {
      var r = z(e, !1);
      if (r) return H(t, r);

      if (t.push(e), n === e.scrollHeight) {
        var a = A(u) && A(o) || X(u);
        if (l && O(u) || !l && a) return H(t, F());
      } else if (O(e) && X(e)) return H(t, e);
    } while (e = e.parentElement);
  }

  function O(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }

  function A(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }

  function X(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t;
  }

  function Y(e, t, o) {
    window.addEventListener(e, t, o || !1);
  }

  function N(e, t, o) {
    window.removeEventListener(e, t, o || !1);
  }

  function K(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }

  if (window.localStorage && localStorage.SS_deltaBuffer) try {
    d = localStorage.SS_deltaBuffer.split(",");
  } catch (e) {}

  function P(e, t) {
    return Math.floor(e / t) == e / t;
  }

  function R(e) {
    return P(d[0], e) && P(d[1], e) && P(d[2], e);
  }

  var $,
      j = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, o) {
    window.setTimeout(e, o || 1e3 / 60);
  },
      q = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
      F = ($ = document.scrollingElement, function () {
    if (!$) {
      var e = document.createElement("div");
      e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
      var t = document.body.scrollTop;
      document.documentElement.scrollTop, window.scrollBy(0, 3), $ = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e);
    }

    return $;
  });

  function V(e) {
    var t, o;
    return (e *= a.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (o = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - o)), t * a.pulseNormalize;
  }

  function I(e) {
    return e >= 1 ? 1 : e <= 0 ? 0 : (1 == a.pulseNormalize && (a.pulseNormalize /= V(1)), V(e));
  }

  var _ = window.navigator.userAgent,
      W = /Edge/.test(_),
      U = /chrome/i.test(_) && !W,
      G = /safari/i.test(_) && !W,
      J = /mobile/i.test(_),
      Q = /Windows NT 6.1/i.test(_) && /rv:11/i.test(_),
      Z = G && (/Version\/8/i.test(_) || /Version\/9/i.test(_)),
      ee = (U || G || Q) && !J,
      te = !1;

  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: function get() {
        te = !0;
      }
    }));
  } catch (e) {}

  var oe = !!te && {
    passive: !1
  },
      ne = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  function re(e) {
    for (var t in e) {
      r.hasOwnProperty(t) && (a[t] = e[t]);
    }
  }

  ne && ee && (Y(ne, g, oe), Y("mousedown", x), Y("load", w)), re.destroy = function () {
    t && t.disconnect(), N(ne, g), N("mousedown", x), N("keydown", S), N("resize", o), N("load", w);
  }, window.SmoothScrollOptions && re(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
    return re;
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = re : window.SmoothScroll = re;
}();