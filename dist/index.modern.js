import React__default, { createElement, useState, useEffect, Fragment } from 'react';
import ReactModal from 'react-modal';

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
  return /*#__PURE__*/createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 22"
  }, props), _path || (_path = /*#__PURE__*/createElement("path", {
    d: "M11.192 9.071l7.779-7.778a1.5 1.5 0 012.12 2.121l-7.777 7.778 7.778 7.779a1.5 1.5 0 11-2.121 2.12l-7.779-7.777-7.778 7.778a1.5 1.5 0 11-2.121-2.121l7.778-7.779-7.778-7.778a1.5 1.5 0 012.121-2.121l7.778 7.778z",
    fill: "#FFF"
  })));
}

const customModalStylesMd = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: '9999',
    backgroundColor: 'rgba(31,31,31,0.4)'
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translateX(calc(-50% - 2px)) translateY(calc(-50% - 2px))',
    width: '80%',
    minWidth: '900px',
    maxWidth: '1060px',
    height: '100%',
    maxHeight: '620px',
    padding: 0,
    background: 'transparent',
    border: 'none',
    overflow: 'hidden'
  }
};
const customModalStylesXs = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: '9999',
    backgroundColor: 'rgba(31,31,31,0.4)'
  },
  content: {
    top: 40,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    padding: 0,
    background: 'transparent',
    border: 'none',
    overflow: 'scroll',
    inset: '50px 0 0 0'
  }
};
const customModalStylesSm = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: '9999',
    backgroundColor: 'rgba(31,31,31,0.4)'
  },
  content: {
    top: 40,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    padding: 0,
    background: 'transparent',
    border: 'none',
    overflow: 'scroll',
    inset: '50px 0px',
    maxWidth: 660,
    margin: 'auto'
  }
};
const styles = {
  closeButtonMd: {
    position: 'fixed',
    top: '25px',
    right: '25px',
    width: '19px',
    height: '19px',
    cursor: 'pointer',
    color: '#fff',
    backgroundSize: 'contain',
    zIndex: 10000
  },
  closeButtonXs: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    width: '15px',
    height: '15px',
    cursor: 'pointer',
    color: '#fff',
    backgroundSize: 'contain',
    zIndex: 10000
  },
  overlay: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0
  }
};

const TimelyModal = ({
  isOpen,
  onClose,
  closeBtn: _closeBtn = true,
  children
}) => {
  const isBrowser = typeof window !== 'undefined';
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0
  });

  const handleViewportChange = () => {
    if (isBrowser) {
      setViewport({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('resize', handleViewportChange);
      setViewport({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener('resize', handleViewportChange);
      }
    };
  }, []);
  return React__default.createElement(ReactModal, {
    isOpen: isOpen,
    style: viewport && viewport.width < 768 ? customModalStylesXs : viewport && viewport.width < 960 ? customModalStylesSm : customModalStylesMd,
    overlayElement: (props, contentElement) => React__default.createElement("div", {
      style: styles.overlay,
      onClick: onClose
    }, _closeBtn && React__default.createElement("div", {
      style: viewport && viewport.width < 960 ? styles.closeButtonXs : styles.closeButtonMd,
      onClick: e => {
        e.stopPropagation();
        onClose();
      }
    }, React__default.createElement(SvgCloseIcon, null)), React__default.createElement("div", Object.assign({}, props), contentElement)),
    ariaHideApp: false,
    onAfterOpen: () => document.body.style.overflow = 'hidden',
    onAfterClose: () => document.body.style.overflow = 'unset'
  }, children);
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
  return /*#__PURE__*/createElement("svg", _extends$1({
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
  }, props), _circle || (_circle = /*#__PURE__*/createElement("circle", {
    cx: 84,
    cy: 50,
    r: 10,
    fill: "#3dabf5"
  }, /*#__PURE__*/createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "0.9259259259259258s",
    calcMode: "spline",
    keyTimes: "0;1",
    values: "10;0",
    keySplines: "0 0.5 0.5 1",
    begin: "0s"
  }), /*#__PURE__*/createElement("animate", {
    attributeName: "fill",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "discrete",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "#3dabf5;#ffffff;#3dabf5;#ffffff;#3dabf5",
    begin: "0s"
  }))), _circle2 || (_circle2 = /*#__PURE__*/createElement("circle", {
    cx: 16,
    cy: 50,
    r: 10,
    fill: "#3dabf5"
  }, /*#__PURE__*/createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "0s"
  }), /*#__PURE__*/createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "0s"
  }))), _circle3 || (_circle3 = /*#__PURE__*/createElement("circle", {
    cx: 50,
    cy: 50,
    r: 10,
    fill: "#fff"
  }, /*#__PURE__*/createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-0.9259259259259258s"
  }), /*#__PURE__*/createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-0.9259259259259258s"
  }))), _circle4 || (_circle4 = /*#__PURE__*/createElement("circle", {
    cx: 84,
    cy: 50,
    r: 10,
    fill: "#3dabf5"
  }, /*#__PURE__*/createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-1.8518518518518516s"
  }), /*#__PURE__*/createElement("animate", {
    attributeName: "cx",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "16;16;16;50;84",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-1.8518518518518516s"
  }))), _circle5 || (_circle5 = /*#__PURE__*/createElement("circle", {
    cx: 16,
    cy: 50,
    r: 10,
    fill: "#fff"
  }, /*#__PURE__*/createElement("animate", {
    attributeName: "r",
    repeatCount: "indefinite",
    dur: "3.7037037037037033s",
    calcMode: "spline",
    keyTimes: "0;0.25;0.5;0.75;1",
    values: "0;0;10;10;10",
    keySplines: "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",
    begin: "-2.7777777777777777s"
  }), /*#__PURE__*/createElement("animate", {
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

class TimelyWidget extends React__default.Component {
  constructor(props) {
    super(props);

    this.handleMessage = event => {
      const {
        data
      } = event;

      if (data.from === 'timely') {
        if (data.action === 'confirm-close') {
          this.setState({
            isOpen: false,
            confirmClose: false
          });
        } else if (data.action === 'reset-confirmation') {
          this.setState({
            confirmClose: false
          });
        }
      }
    };

    this.show = props => {
      this.setState({
        isOpen: true,
        content: React__default.createElement(TimelyIframe, Object.assign({}, props))
      });
    };

    this.close = () => {
      if (!this.state.confirmClose && this.state.isOpen) {
        this.setState({
          confirmClose: true
        });

        if (window && window.document) {
          var _window, _window$document;

          const timelyIframe = (_window = window) === null || _window === void 0 ? void 0 : (_window$document = _window.document) === null || _window$document === void 0 ? void 0 : _window$document.getElementById('timely-iframe');

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

    this.state = {
      isOpen: false,
      content: null,
      confirmClose: false
    };
    TimelyWidget.singletonRef = this;
  }

  componentDidMount() {
    window.addEventListener('message', this.handleMessage, false);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  render() {
    const {
      isOpen
    } = this.state;
    return React__default.createElement(TimelyModal, {
      isOpen: isOpen,
      onClose: this.close,
      closeBtn: !this.state.confirmClose
    }, React__default.createElement(Fragment, null, this.state.content));
  }

}

const TimelyProvider = ({
  children
}) => {
  return React__default.createElement(Fragment, null, children, React__default.createElement(TimelyWidget, null));
};
const TimelyIframe = ({
  url,
  utm,
  embed,
  iframeTitle
}) => {
  const [loading, showLoader] = useState(true);

  const formUrl = () => {
    const queryStringIndex = url.indexOf('?');
    const hasQueryString = queryStringIndex > -1;
    const queryString = hasQueryString ? url.slice(queryStringIndex + 1) : null;
    const baseUrl = hasQueryString ? url.slice(0, queryStringIndex) : url;
    const updatedQueryString = [queryString, utm ? Object.keys(utm).map(utmParam => `${utmParam}=${utm[utmParam]}`).join('&') : null, embed ? Object.keys(embed).map(embedProp => `${embedProp}=${embed[embedProp]}`).join('&') : null].filter(item => item !== null).join('&');
    return `${baseUrl}?${updatedQueryString}`;
  };

  const finalUrl = formUrl();
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
    onLoad: () => showLoader(false),
    allowTransparency: true,
    style: {
      visibility: loading ? 'hidden' : 'visible'
    }
  }));
};
const openPopupWidget = options => {
  TimelyWidget.singletonRef.show(options);
};

export { TimelyProvider, openPopupWidget };
//# sourceMappingURL=index.modern.js.map
