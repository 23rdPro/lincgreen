import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

var callback = function callback() {};

function containsAOSNode(nodes) {
  var index = void 0,
      currentNode = void 0,
      result = void 0;

  for (index = 0; index < nodes.length; index += 1) {
    currentNode = nodes[index];

    if (currentNode.dataset && currentNode.dataset.aos) {
      return true;
    }

    result = currentNode.children && containsAOSNode(currentNode.children);

    if (result) {
      return true;
    }
  }

  return false;
}

function check(mutations) {
  if (!mutations) return;

  for (const mutation of mutations) {
    var addedNodes = Array.prototype.slice.call(mutation.addedNodes);
    var removedNodes = Array.prototype.slice.call(mutation.removedNodes);
    var allNodes = addedNodes.concat(removedNodes);

    if (containsAOSNode(allNodes)) {
       callback(); continue;
    }
  }
}

function getMutationObserver() {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
}

function isSupported() {
  return !!getMutationObserver();
}

function ready(selector, function_) {
  var document_ = window.document;
  var MutationObserver = getMutationObserver();

  var observer = new MutationObserver(check);
  callback = function_;

  observer.observe(document_.documentElement, {
    childList: true,
    subtree: true,
    removedNodes: true
  });
}

var observer = { isSupported: isSupported, ready: ready };

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, properties) {
    for (var descriptor of properties) {
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProperties, staticProperties) {
    if (protoProperties) defineProperties(Constructor.prototype, protoProperties);
    if (staticProperties) defineProperties(Constructor, staticProperties);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var index = 1; index < arguments.length; index++) {
    var source = arguments[index];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Device detector
 */

var fullNameRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
var prefixRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
var fullNameMobileRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
var prefixMobileRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;

function ua() {
  return navigator.userAgent || navigator.vendor || window.opera || '';
}

var Detector = function () {
  function Detector() {
    classCallCheck(this, Detector);
  }

  createClass(Detector, [{
    key: 'phone',
    value: function phone() {
      var a = ua();
      return !!(fullNameRe.test(a) || prefixRe.test(a.slice(0, 4)));
    }
  }, {
    key: 'mobile',
    value: function mobile() {
      var a = ua();
      return !!(fullNameMobileRe.test(a) || prefixMobileRe.test(a.slice(0, 4)));
    }
  }, {
    key: 'tablet',
    value: function tablet() {
      return this.mobile() && !this.phone();
    }

    // http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c

  }, {
    key: 'ie11',
    value: function ie11() {
      return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
    }
  }]);
  return Detector;
}();

var detect = new Detector();

/**
 * Adds multiple classes on node
 * @param {DOMNode} node
 * @param {array}  classes
 */
var addClasses = function addClasses(node, classes) {
  return classes && classes.forEach(function (className) {
    return node.classList.add(className);
  });
};

/**
 * Removes multiple classes from node
 * @param {DOMNode} node
 * @param {array}  classes
 */
var removeClasses = function removeClasses(node, classes) {
  return classes && classes.forEach(function (className) {
    return node.classList.remove(className);
  });
};

var fireEvent = function fireEvent(eventName, data) {
  var customEvent = void 0;

  if (detect.ie11()) {
    customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(eventName, true, true, { detail: data });
  } else {
    customEvent = new CustomEvent(eventName, {
      detail: data
    });
  }

  return document.dispatchEvent(customEvent);
};

/**
 * Set or remove aos-animate class
 * @param {node} el         element
 * @param {int}  top        scrolled distance
 */
var applyClasses = function applyClasses(element, top) {
  var options = element.options,
      position = element.position,
      node = element.node,
      data = element.data;


  var hide = function hide() {
    if (!element.animated) return;

    removeClasses(node, options.animatedClassNames);
    fireEvent('aos:out', node);

    if (element.options.id) {
      fireEvent('aos:in:' + element.options.id, node);
    }

    element.animated = false;
  };

  var show = function show() {
    if (element.animated) return;

    addClasses(node, options.animatedClassNames);

    fireEvent('aos:in', node);
    if (element.options.id) {
      fireEvent('aos:in:' + element.options.id, node);
    }

    element.animated = true;
  };

  if (options.mirror && top >= position.out && !options.once) {
    hide();
  } else if (top >= position.in) {
    show();
  } else if (element.animated && !options.once) {
    hide();
  }
};

/**
 * Scroll logic - add or remove 'aos-animate' class on scroll
 *
 * @param  {array} $elements         array of elements nodes
 * @return {void}
 */
var handleScroll = function handleScroll($elements) {
  return $elements.forEach(function (element, index) {
    return applyClasses(element, window.pageYOffset);
  });
};

/**
 * Get offset of DOM element
 * like there were no transforms applied on it
 *
 * @param  {Node} el [DOM element]
 * @return {Object} [top and left offset]
 */
var offset = function offset(element) {
  var _x = 0;
  var _y = 0;

  while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
    _x += element.offsetLeft - (element.tagName == 'BODY' ? 0 : element.scrollLeft);
    _y += element.offsetTop - (element.tagName == 'BODY' ? 0 : element.scrollTop);
    element = element.offsetParent;
  }

  return {
    top: _y,
    left: _x
  };
};

/**
 * Get inline option with a fallback.
 *
 * @param  {Node} el [Dom element]
 * @param  {String} key [Option key]
 * @param  {String} fallback [Default (fallback) value]
 * @return {Mixed} [Option set with inline attributes or fallback value if not set]
 */

var getInlineOption = (function (element, key, fallback) {
  var attribute = element.getAttribute('data-aos-' + key);

  if (attribute !== undefined) {
    if (attribute === 'true') {
      return true;
    } else if (attribute === 'false') {
      return false;
    }
  }

  return attribute || fallback;
});

/**
 * Calculate offset
 * basing on element's settings like:
 * - anchor
 * - offset
 *
 * @param  {Node} el [Dom element]
 * @return {Integer} [Final offset that will be used to trigger animation in good position]
 */

var getPositionIn = function getPositionIn(element, defaultOffset, defaultAnchorPlacement) {
  var windowHeight = window.innerHeight;
  var anchor = getInlineOption(element, 'anchor');
  var inlineAnchorPlacement = getInlineOption(element, 'anchor-placement');
  var additionalOffset = Number(getInlineOption(element, 'offset', inlineAnchorPlacement ? 0 : defaultOffset));
  var anchorPlacement = inlineAnchorPlacement || defaultAnchorPlacement;
  var finalElement = element;

  if (anchor && document.querySelectorAll(anchor)) {
    finalElement = document.querySelectorAll(anchor)[0];
  }

  var triggerPoint = offset(finalElement).top - windowHeight;

  switch (anchorPlacement) {
    case 'top-bottom': {
      // Default offset
      break;
    }
    case 'center-bottom': {
      triggerPoint += finalElement.offsetHeight / 2;
      break;
    }
    case 'bottom-bottom': {
      triggerPoint += finalElement.offsetHeight;
      break;
    }
    case 'top-center': {
      triggerPoint += windowHeight / 2;
      break;
    }
    case 'center-center': {
      triggerPoint += windowHeight / 2 + finalElement.offsetHeight / 2;
      break;
    }
    case 'bottom-center': {
      triggerPoint += windowHeight / 2 + finalElement.offsetHeight;
      break;
    }
    case 'top-top': {
      triggerPoint += windowHeight;
      break;
    }
    case 'bottom-top': {
      triggerPoint += windowHeight + finalElement.offsetHeight;
      break;
    }
    case 'center-top': {
      triggerPoint += windowHeight + finalElement.offsetHeight / 2;
      break;
    }
  }

  return triggerPoint + additionalOffset;
};

var getPositionOut = function getPositionOut(element, defaultOffset) {
  var windowHeight = window.innerHeight;
  var anchor = getInlineOption(element, 'anchor');
  var additionalOffset = getInlineOption(element, 'offset', defaultOffset);
  var finalElement = element;

  if (anchor && document.querySelectorAll(anchor)) {
    finalElement = document.querySelectorAll(anchor)[0];
  }

  var elementOffsetTop = offset(finalElement).top;

  return elementOffsetTop + finalElement.offsetHeight - additionalOffset;
};

/* Clearing variables */

var prepare = function prepare($elements, options) {
  for (const [index, element] of $elements.entries()) {
    var mirror = getInlineOption(element.node, 'mirror', options.mirror);
    var once = getInlineOption(element.node, 'once', options.once);
    var id = getInlineOption(element.node, 'id');
    var customClassNames = options.useClassNames && element.node.dataset.aos;

    var animatedClassNames = [options.animatedClassName].concat(customClassNames ? customClassNames.split(' ') : []).filter(function (className) {
      return typeof className === 'string';
    });

    if (options.initClassName) {
      element.node.classList.add(options.initClassName);
    }

    element.position = {
      in: getPositionIn(element.node, options.offset, options.anchorPlacement),
      out: mirror && getPositionOut(element.node, options.offset)
    };

    element.options = {
      once: once,
      mirror: mirror,
      animatedClassNames: animatedClassNames,
      id: id
    };
  }

  return $elements;
};

/**
 * Generate initial array with elements as objects
 * This array will be extended later with elements attributes values
 * like 'position'
 */
var elements = (function () {
  var elements = document.querySelectorAll('[data-aos]');
  return Array.prototype.map.call(elements, function (node) {
    return { node: node };
  });
});

/**
 * *******************************************************
 * AOS (Animate on scroll) - wowjs alternative
 * made to animate elements on scroll in both directions
 * *******************************************************
 */

/**
 * Private variables
 */
var $aosElements = [];
var initialized = false;

/**
 * Default options
 */
var options = {
  offset: 120,
  delay: 0,
  easing: 'ease',
  duration: 400,
  disable: false,
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
  startEvent: 'DOMContentLoaded',
  animatedClassName: 'aos-animate',
  initClassName: 'aos-init',
  useClassNames: false,
  disableMutationObserver: false,
  throttleDelay: 99,
  debounceDelay: 50
};

// Detect not supported browsers (<=IE9)
// http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
var isBrowserNotSupported = function isBrowserNotSupported() {
  return document.all && !window.atob;
};

var initializeScroll = function initializeScroll() {
  // Extend elements objects in $aosElements with their positions
  $aosElements = prepare($aosElements, options);
  // Perform scroll event, to refresh view and show/hide elements
  handleScroll($aosElements);

  /**
   * Handle scroll event to animate elements on scroll
   */
  window.addEventListener('scroll', throttle(function () {
    handleScroll($aosElements, options.once);
  }, options.throttleDelay));

  return $aosElements;
};

/**
 * Refresh AOS
 */
var refresh = function refresh() {
  var initialize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  // Allow refresh only when it was first initialized on startEvent
  if (initialize) initialized = true;
  if (initialized) initializeScroll();
};

/**
 * Hard refresh
 * create array with new elements and trigger refresh
 */
var refreshHard = function refreshHard() {
  $aosElements = elements();

  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  refresh();
};

/**
 * Disable AOS
 * Remove all attributes to reset applied styles
 */
var disable = function disable() {
  for (const [index, element] of $aosElements.entries()) {
    delete element.node.dataset.aos;
    delete element.node.dataset.aosEasing;
    delete element.node.dataset.aosDuration;
    delete element.node.dataset.aosDelay;

    if (options.initClassName) {
      element.node.classList.remove(options.initClassName);
    }

    if (options.animatedClassName) {
      element.node.classList.remove(options.animatedClassName);
    }
  }
};

/**
 * Check if AOS should be disabled based on provided setting
 */
var isDisabled = function isDisabled(optionDisable) {
  return optionDisable === true || optionDisable === 'mobile' && detect.mobile() || optionDisable === 'phone' && detect.phone() || optionDisable === 'tablet' && detect.tablet() || typeof optionDisable === 'function' && optionDisable() === true;
};

/**
 * Initializing AOS
 * - Create options merging defaults with user defined options
 * - Set attributes on <body> as global setting - css relies on it
 * - Attach preparing elements to options.startEvent,
 *   window resize and orientation change
 * - Attach function that handle scroll and everything connected to it
 *   to window scroll event and fire once document is ready to set initial state
 */
var init = function init(settings) {
  options = _extends(options, settings);

  // Create initial array with elements -> to be fullfilled later with prepare()
  $aosElements = elements();

  /**
   * Disable mutation observing if not supported
   */
  if (!options.disableMutationObserver && !observer.isSupported()) {
    console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    ');
    options.disableMutationObserver = true;
  }

  /**
   * Observe [aos] elements
   * If something is loaded by AJAX
   * it'll refresh plugin automatically
   */
  if (!options.disableMutationObserver) {
    observer.ready('[data-aos]', refreshHard);
  }

  /**
   * Don't init plugin if option `disable` is set
   * or when browser is not supported
   */
  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  /**
   * Set global settings on body, based on options
   * so CSS can use it
   */
  document.querySelector('body').dataset.aosEasing = options.easing;

  document.querySelector('body').dataset.aosDuration = options.duration;

  document.querySelector('body').dataset.aosDelay = options.delay;

  /**
   * Handle initializing
   */
  if (['DOMContentLoaded', 'load'].includes(options.startEvent)) {
    window.addEventListener('load', function () {
      refresh(true);
    });
  } else {
    // Listen to options.startEvent and initialize AOS
    document.addEventListener(options.startEvent, function () {
      refresh(true);
    });
  }

  if (options.startEvent === 'DOMContentLoaded' && ['complete', 'interactive'].includes(document.readyState)) {
    // Initialize AOS if default startEvent was already fired
    refresh(true);
  }

  /**
   * Refresh plugin on window resize or orientation change
   */
  window.addEventListener('resize', debounce(refresh, options.debounceDelay, true));

  window.addEventListener('orientationchange', debounce(refresh, options.debounceDelay, true));

  return $aosElements;
};

/**
 * Export Public API
 */

var aos = {
  init: init,
  refresh: refresh,
  refreshHard: refreshHard
};

export default aos;
