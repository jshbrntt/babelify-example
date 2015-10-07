(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Bug = (function () {
  function Bug() {
    _classCallCheck(this, Bug);

    this._foo();
    this._bar();
  }

  _createClass(Bug, [{
    key: '_foo',
    value: function _foo() {
      console.log('foo');
    }
  }, {
    key: '_bar',
    value: function _bar() {
      console.log('bar');
    }
  }]);

  return Bug;
})();

exports.Bug = Bug;

},{}],2:[function(require,module,exports){
'use strict';

var _bug = require('./bug');

var bug = new _bug.Bug();

},{"./bug":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc3ludGhlY3lwaGVyL1Byb2plY3RzL2JhYmVsaWZ5LXNsb3dkb3duL3NyYy9idWcuanMiLCIvVXNlcnMvc3ludGhlY3lwaGVyL1Byb2plY3RzL2JhYmVsaWZ5LXNsb3dkb3duL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxVQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFLLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUFFO0dBQUUsT0FBUSxVQUFVLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQUUsUUFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFLLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsT0FBUSxXQUFXLENBQUM7R0FBRSxDQUFDO0NBQUUsQ0FBQSxFQUFHLENBQUM7O0FBRXRqQixTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFO0FBQUUsTUFBSSxFQUFFLFFBQVEsWUFBWSxXQUFXLENBQUEsRUFBRztBQUFFLFVBQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQztHQUFFO0NBQUU7O0FBRXpKLElBVmEsR0FBRyxHQUFBLENBQUEsWUFBQTtBQUNILFdBREEsR0FBRyxHQUNBO0FBV1osbUJBQWUsQ0FBQyxJQUFJLEVBWlgsR0FBRyxDQUFBLENBQUE7O0FBRVosUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ2I7O0FBY0QsY0FBWSxDQWxCRCxHQUFHLEVBQUEsQ0FBQTtBQW1CWixPQUFHLEVBQUUsTUFBTTtBQUNYLFNBQUssRUFmSCxTQUFBLElBQUEsR0FBRztBQUNMLGFBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7R0FnQkEsRUFBRTtBQUNELE9BQUcsRUFBRSxNQUFNO0FBQ1gsU0FBSyxFQWpCSCxTQUFBLElBQUEsR0FBRztBQUNMLGFBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7R0FrQkEsQ0FBQyxDQUFDLENBQUM7O0FBRUosU0E5QlcsR0FBRyxDQUFBO0NBK0JmLENBQUEsRUFBRyxDQUFDOztBQUVMLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOzs7QUNqQ2xCLFlBQVksQ0FBQzs7QUFFYixJQUFJLElBQUksR0FBRyxPQUFPLENBRkEsT0FBTyxDQUFBLENBQUE7O0FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUEsSUFBQSxDQUFBLEdBQUEsRUFBUyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBjbGFzcyBCdWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9mb28oKTtcbiAgICB0aGlzLl9iYXIoKTtcbiAgfVxuICBfZm9vKCkge1xuICAgIGNvbnNvbGUubG9nKCdmb28nKTtcbiAgfVxuICBfYmFyKCkge1xuICAgIGNvbnNvbGUubG9nKCdiYXInKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtCdWd9IGZyb20gJy4vYnVnJztcbnZhciBidWcgPSBuZXcgQnVnKCk7XG4iXX0=
