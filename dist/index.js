function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var _path;

function _extends() {
  _extends = Object.assign || function (target) {
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

function SvgCloseIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 22"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M11.192 9.071l7.779-7.778a1.5 1.5 0 012.12 2.121l-7.777 7.778 7.778 7.779a1.5 1.5 0 11-2.121 2.12l-7.779-7.777-7.778 7.778a1.5 1.5 0 11-2.121-2.121l7.778-7.779-7.778-7.778a1.5 1.5 0 012.121-2.121l7.778 7.778z",
    fill: "#FFF"
  })));
}

var TimelyModal = function TimelyModal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      children = _ref.children;
  var isBrowser = typeof window !== 'undefined';

  var _useState = React.useState({
    width: 0,
    height: 0
  }),
      viewport = _useState[0],
      setViewport = _useState[1];

  var handleViewportChange = function handleViewportChange() {
    if (isBrowser) {
      setViewport({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    }
  };

  React.useEffect(function () {
    if (isBrowser) {
      window.addEventListener('resize', handleViewportChange);
      setViewport({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    }

    return function () {
      if (isBrowser) {
        window.removeEventListener('resize', handleViewportChange);
      }
    };
  }, []);
  return isOpen && React__default.createElement("div", {
    id: 'myModal',
    style: {
      position: 'fixed',
      zIndex: 1,
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)'
    }
  }, React__default.createElement("button", {
    style: {
      background: 'transparent',
      border: 'none',
      "float": 'right',
      marginRight: 15,
      marginTop: 15,
      fontWeight: 'bold',
      width: 30,
      cursor: 'pointer'
    },
    onClick: onClose
  }, React__default.createElement(SvgCloseIcon, null)), React__default.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: viewport.width < 768 ? 1080 : 980,
      height: viewport.width < 768 ? 600 : 550
    }
  }, children));
};

var _circle, _circle2, _circle3, _circle4, _circle5;

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function SvgLoader(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      margin: "auto",
      background: "0 0"
    },
    width: 200,
    height: 200,
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    display: "block"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 84,
    cy: 50,
    r: 10,
    fill: "#3dabf5"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "0.9259259259259258s",
    calcMode: "spline",
    keyTimes: "0;1",
    values: "10;0",
    keySplines: "0 0.5 0.5 1",
    begin: "0s"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "discrete",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "#3dabf5;#ffffff;#3dabf5;#ffffff;#3dabf5",
    begin: "0s"
  }))), _circle2 || (_circle2 = /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 50,
    r: 10,
    fill: "#3dabf5"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "0s"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "0s"
  }))), _circle3 || (_circle3 = /*#__PURE__*/React.createElement("circle", {
    cx: 50,
    cy: 50,
    r: 10,
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-0.9259259259259258s"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-0.9259259259259258s"
  }))), _circle4 || (_circle4 = /*#__PURE__*/React.createElement("circle", {
    cx: 84,
    cy: 50,
    r: 10,
    fill: "#3dabf5"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-1.8518518518518516s"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-1.8518518518518516s"
  }))), _circle5 || (_circle5 = /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 50,
    r: 10,
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-2.7777777777777777s"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-2.7777777777777777s"
  }))));
}

var TimelyWidget = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TimelyWidget, _React$Component);

  function TimelyWidget(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleMessage = function (event) {
      var data = event.data;

      if (data.from === 'timely') {
        if (data.action === 'confirm-close') {
          _this.setState({
            isOpen: false,
            confirmClose: false
          });
        } else if (data.action === 'reset-confirmation') {
          _this.setState({
            confirmClose: false
          });
        }
      }
    };

    _this.show = function (props) {
      _this.setState({
        isOpen: true,
        content: React__default.createElement(TimelyIframe, Object.assign({}, props))
      });
    };

    _this.close = function () {
      if (!_this.state.confirmClose && _this.state.isOpen) {
        _this.setState({
          confirmClose: true
        });

        if (window && window.document) {
          var _window, _window$document;

          var timelyIframe = (_window = window) === null || _window === void 0 ? void 0 : (_window$document = _window.document) === null || _window$document === void 0 ? void 0 : _window$document.getElementById('timely-iframe');

          if (timelyIframe) {
            var _timelyIframe$content;

            (_timelyIframe$content = timelyIframe.contentWindow) === null || _timelyIframe$content === void 0 ? void 0 : _timelyIframe$content.postMessage({
              from: 'react-timely',
              action: 'close'
            }, '*');
          }
        }
      }
    };

    _this.state = {
      isOpen: false,
      content: null,
      confirmClose: false
    };
    TimelyWidget.singletonRef = _assertThisInitialized(_this);
    return _this;
  }

  var _proto = TimelyWidget.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('message', this.handleMessage, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  };

  _proto.render = function render() {
    var isOpen = this.state.isOpen;
    return React__default.createElement(TimelyModal, {
      isOpen: isOpen,
      onClose: this.close,
      closeBtn: !this.state.confirmClose
    }, React__default.createElement(React.Fragment, null, this.state.content));
  };

  return TimelyWidget;
}(React__default.Component);

var TimelyProvider = function TimelyProvider(_ref) {
  var children = _ref.children;
  return React__default.createElement(React.Fragment, null, children, React__default.createElement(TimelyWidget, null));
};
var TimelyIframe = function TimelyIframe(_ref2) {
  var url = _ref2.url,
      utm = _ref2.utm,
      embed = _ref2.embed,
      iframeTitle = _ref2.iframeTitle;

  var _useState = React.useState(true),
      loading = _useState[0],
      showLoader = _useState[1];

  var formUrl = function formUrl() {
    var queryStringIndex = url.indexOf('?');
    var hasQueryString = queryStringIndex > -1;
    var queryString = hasQueryString ? url.slice(queryStringIndex + 1) : null;
    var baseUrl = hasQueryString ? url.slice(0, queryStringIndex) : url;
    var updatedQueryString = [queryString, utm ? Object.keys(utm).map(function (utmParam) {
      return utmParam + "=" + utm[utmParam];
    }).join('&') : null, embed ? Object.keys(embed).map(function (embedProp) {
      return embedProp + "=" + embed[embedProp];
    }).join('&') : null].filter(function (item) {
      return item !== null;
    }).join('&');
    return baseUrl + "?" + updatedQueryString;
  };

  var finalUrl = formUrl();
  return React__default.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, loading && React__default.createElement("div", {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: -1
    }
  }, React__default.createElement(SvgLoader, {
    style: {
      width: 75,
      height: 57
    }
  })), React__default.createElement("iframe", {
    id: 'timely-iframe',
    src: finalUrl,
    frameBorder: 0,
    width: '100%',
    height: '100%',
    title: iframeTitle ? iframeTitle : 'Ditto Timely',
    onLoad: function onLoad() {
      return showLoader(false);
    },
    allowTransparency: true,
    style: {
      visibility: loading ? 'hidden' : 'visible'
    }
  }));
};
var openPopupWidget = function openPopupWidget(options) {
  TimelyWidget.singletonRef.show(options);
};

exports.TimelyProvider = TimelyProvider;
exports.openPopupWidget = openPopupWidget;
//# sourceMappingURL=index.js.map
