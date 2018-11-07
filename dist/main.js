/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function (e) {\n  function faq() {\n    var sect = document.getElementsByClassName('questions-container')[0];\n    console.log(data[\"faq\"]);\n    var counter = 0;\n\n    while (counter < 4) {\n      var div = document.createElement('div');\n      div.className = 'faq-item-container';\n      var q = document.createElement('p');\n      q.className = \"faq-sub-header\";\n      q.innerText = data[\"faq\"][0];\n      var a = document.createElement('p');\n      a.className = \"faq-body-type\";\n      a.innerText = data[\"faq\"][1];\n      div.appendChild(q);\n      div.appendChild(a);\n      sect.appendChild(div);\n      counter++;\n    }\n  }\n\n  faq(); // enter timeline \n\n  var tl = new TimelineMax();\n  tl.to(\"#things\", 1, {\n    opacity: 1\n  });\n  tl.to(\"#prices\", 1, {\n    opacity: 1\n  });\n  tl.to(\"#brands\", 1, {\n    opacity: 1\n  }); // init GSAP controller\n\n  var controller = new ScrollMagic.Controller({\n    globalSceneOptions: {\n      triggerHook: 'onLeave'\n    }\n  }); // pin email form to nav bar\n\n  var pin = new ScrollMagic.Scene({\n    triggerElement: '#test',\n    offset: -10\n  }).setPin('#test');\n  pin.setClassToggle('#test', 'nav-class');\n  pin.addTo(controller); // show Toothbrush\n\n  var showToothbrush = new ScrollMagic.Scene({\n    triggerElement: '#two'\n  });\n  showToothbrush.setClassToggle('#toothbrush', 'display');\n  showToothbrush.on(\"enter\", function () {\n    return changeBrand(\"toothbrush\");\n  });\n  showToothbrush.on(\"leave\", function () {\n    return changeBrand(\"shoe\");\n  });\n  showToothbrush.addTo(controller); // hide Shoe\n\n  var hideShoe = new ScrollMagic.Scene({\n    triggerElement: '#two'\n  });\n  hideShoe.setClassToggle('#shoe', 'hidden');\n  hideShoe.addTo(controller); // show Lipstick\n\n  var showLipstick = new ScrollMagic.Scene({\n    triggerElement: '#four'\n  });\n  showLipstick.setClassToggle('#lipstick', 'display');\n  showLipstick.on(\"enter\", function () {\n    return changeBrand(\"lipstick\");\n  });\n  showLipstick.on(\"leave\", function () {\n    return changeBrand(\"toothbrush\");\n  });\n  showLipstick.addTo(controller); // hideToothbrush\n\n  var hideToothBrush = new ScrollMagic.Scene({\n    triggerElement: '#four'\n  });\n  hideToothBrush.setClassToggle('#toothbrush', 'hidden');\n  hideToothBrush.addTo(controller); // section three animations\n\n  var enterY = new ScrollMagic.Scene({\n    triggerElement: '#two'\n  });\n  enterY.setClassToggle('');\n  enterY.addTo(controller);\n\n  function changeBrand(el) {\n    var price = document.getElementById('price-tag');\n    var factory = document.getElementById('factory');\n    var brand = document.getElementById('from-brand');\n\n    switch (el) {\n      case \"shoe\":\n        price.innerText = \"$80\";\n        factory.innerText = \"These shoes are made in the same factory as:\";\n        brand.innerText = \"Nike\";\n        break;\n\n      case \"toothbrush\":\n        price.innerText = \"$35\";\n        factory.innerText = \"This toothbrush is made in the same factory as:\";\n        brand.innerText = \"Quip\";\n        break;\n\n      case \"lipstick\":\n        price.innerText = \"$20\";\n        factory.innerText = \"This lipstick is made in the same factory as:\";\n        brand.innerText = \"La Mer\";\n        break;\n\n      default:\n        price.innerText = \"$80\";\n        factory.innerText = \"These shoes are made in the same factory as:\";\n        brand.innerText = \"Nike\";\n        break;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });