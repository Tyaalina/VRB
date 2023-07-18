webpackHotUpdate("app",{

/***/ "./node_modules/grommet/themes/base.js":
/*!*********************************************!*\
  !*** ./node_modules/grommet/themes/base.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.base = exports.generate = void 0;

var _polished = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");

var _Actions = __webpack_require__(/*! grommet-icons/icons/Actions */ "./node_modules/grommet-icons/icons/Actions.js");

var _ClosedCaption = __webpack_require__(/*! grommet-icons/icons/ClosedCaption */ "./node_modules/grommet-icons/icons/ClosedCaption.js");

var _Expand = __webpack_require__(/*! grommet-icons/icons/Expand */ "./node_modules/grommet-icons/icons/Expand.js");

var _FormClose = __webpack_require__(/*! grommet-icons/icons/FormClose */ "./node_modules/grommet-icons/icons/FormClose.js");

var _FormDown = __webpack_require__(/*! grommet-icons/icons/FormDown */ "./node_modules/grommet-icons/icons/FormDown.js");

var _FormNext = __webpack_require__(/*! grommet-icons/icons/FormNext */ "./node_modules/grommet-icons/icons/FormNext.js");

var _FormPrevious = __webpack_require__(/*! grommet-icons/icons/FormPrevious */ "./node_modules/grommet-icons/icons/FormPrevious.js");

var _FormUp = __webpack_require__(/*! grommet-icons/icons/FormUp */ "./node_modules/grommet-icons/icons/FormUp.js");

var _Next = __webpack_require__(/*! grommet-icons/icons/Next */ "./node_modules/grommet-icons/icons/Next.js");

var _Pause = __webpack_require__(/*! grommet-icons/icons/Pause */ "./node_modules/grommet-icons/icons/Pause.js");

var _Play = __webpack_require__(/*! grommet-icons/icons/Play */ "./node_modules/grommet-icons/icons/Play.js");

var _Previous = __webpack_require__(/*! grommet-icons/icons/Previous */ "./node_modules/grommet-icons/icons/Previous.js");

var _Subtract = __webpack_require__(/*! grommet-icons/icons/Subtract */ "./node_modules/grommet-icons/icons/Subtract.js");

var _Volume = __webpack_require__(/*! grommet-icons/icons/Volume */ "./node_modules/grommet-icons/icons/Volume.js");

var _VolumeLow = __webpack_require__(/*! grommet-icons/icons/VolumeLow */ "./node_modules/grommet-icons/icons/VolumeLow.js");

var _base = __webpack_require__(/*! grommet-icons/themes/base */ "./node_modules/grommet-icons/themes/base.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/grommet/utils/object.js");

var _mixins = __webpack_require__(/*! ../utils/mixins */ "./node_modules/grommet/utils/mixins.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var brandColor = '#7D4CDB';
var accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
var neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
var statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC'
};
var darkColors = ['#333333', '#555555', '#777777', '#999999', '#999999', '#999999'];
var lightColors = ['#F8F8F8', '#F2F2F2', '#EDEDED', '#DADADA', '#DADADA', '#DADADA'];
var focusColor = accentColors[0];
var colors = {
  active: (0, _polished.rgba)(221, 221, 221, 0.5),
  'background-back': {
    dark: '#33333308',
    light: '#EDEDED'
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF'
  },
  'background-contrast': {
    light: '#33333310',
    dark: '#FFFFFF18'
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: (0, _polished.rgba)(255, 255, 255, 0.33),
    light: (0, _polished.rgba)(0, 0, 0, 0.33)
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand'
  },
  focus: focusColor,
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: {
    dark: '#f8f8f8',
    light: '#444444'
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#000000'
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#555555'
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#666666'
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});

var generate = function generate(baseSpacing, scale) {
  if (baseSpacing === void 0) {
    baseSpacing = 24;
  }

  if (scale === void 0) {
    scale = 6;
  }

  // 24
  var baseFontSize = baseSpacing * 0.75; // 18

  var fontScale = baseSpacing / scale; // 4

  var fontSizing = function fontSizing(factor) {
    return {
      size: baseFontSize + factor * fontScale + "px",
      height: baseSpacing + factor * fontScale + "px",
      // maxWidth chosen to be ~50 characters wide
      // see: https://ux.stackexchange.com/a/34125
      maxWidth: baseSpacing * (baseFontSize + factor * fontScale) + "px"
    };
  };

  var borderWidth = 2;
  var controlBorderWidth = 1;
  var result = (0, _object.deepMerge)(_base.base, {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s'
        }
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: baseSpacing / 6 + "px",
        // 4
        large: baseSpacing / 2 + "px",
        // 12
        xlarge: baseSpacing + "px" // 24

      },
      breakpoints: {
        small: {
          value: baseSpacing * 32,
          // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: baseSpacing / 6 + "px",
            // 4
            large: baseSpacing / 4 + "px",
            // 6
            xlarge: baseSpacing / 2 + "px" // 12

          },
          edgeSize: {
            none: '0px',
            hair: '1px',
            // for Chart
            xxsmall: '2px',
            xsmall: baseSpacing / 8 + "px",
            // 3
            small: baseSpacing / 4 + "px",
            // 6
            medium: baseSpacing / 2 + "px",
            // 12
            large: baseSpacing + "px",
            // 24
            xlarge: baseSpacing * 2 + "px" // 48

          },
          size: {
            xxsmall: baseSpacing + "px",
            // 24
            xsmall: baseSpacing * 2 + "px",
            // 48
            small: baseSpacing * 4 + "px",
            // 96
            medium: baseSpacing * 8 + "px",
            // 192
            large: baseSpacing * 16 + "px",
            // 384
            xlarge: baseSpacing * 32 + "px",
            // 768
            full: '100%'
          }
        },
        medium: {
          value: baseSpacing * 64 // 1536

        },
        large: {} // anything above 'medium'

      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large'
      },
      colors: colors,
      control: {
        border: {
          width: controlBorderWidth + "px",
          radius: '4px',
          color: 'border'
        },
        disabled: {
          opacity: 0.3
        }
      },
      // The time to wait after the user stopped typing, measured in ms.
      debounceDelay: 300,
      drop: {
        // intelligentMargin: undefined,
        background: {
          dark: 'black',
          light: 'white'
        },
        border: {
          radius: '0px'
        },
        // margin: undefined
        shadowSize: 'small',
        // shadowSize is deprecated, use 'elevation'
        zIndex: '20'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        // for Chart
        xxsmall: baseSpacing / 8 + "px",
        // 3
        xsmall: baseSpacing / 4 + "px",
        // 6
        small: baseSpacing / 2 + "px",
        // 12
        medium: baseSpacing + "px",
        // 24
        large: baseSpacing * 2 + "px",
        // 48
        xlarge: baseSpacing * 4 + "px",
        // 96
        responsiveBreakpoint: 'small'
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)'
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)'
        }
      },
      focus: {
        // shadow or outline are required for accessibility
        border: {
          // remove to only have shadow
          color: 'focus'
        },
        // outline: { color: undefined, size: undefined },
        shadow: {
          color: 'focus',
          size: '2px'
        }
      },
      font: _extends({}, fontSizing(0)),
      hover: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      input: {
        padding: {
          horizontal: (0, _mixins.parseMetricToNum)(baseSpacing / 2 + "px") - (0, _mixins.parseMetricToNum)(controlBorderWidth + "px") + "px",
          vertical: (0, _mixins.parseMetricToNum)(baseSpacing / 2 + "px") - (0, _mixins.parseMetricToNum)(controlBorderWidth + "px") + "px"
        },
        font: {
          // size: undefined,
          // height: undefined,
          weight: 600
        } // deprecate in v3
        // weight: undefined,

      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1
      },
      selected: {
        background: 'selected',
        color: 'white'
      },
      spacing: baseSpacing + "px",
      size: {
        xxsmall: baseSpacing * 2 + "px",
        // 48
        xsmall: baseSpacing * 4 + "px",
        // 96
        small: baseSpacing * 8 + "px",
        // 192
        medium: baseSpacing * 16 + "px",
        // 384
        large: baseSpacing * 32 + "px",
        // 768
        xlarge: baseSpacing * 48 + "px",
        // 1152
        xxlarge: baseSpacing * 64 + "px",
        // 1536
        full: '100%'
      }
    },
    accordion: {
      panel: {// border: {
        //   side: 'bottom',
        //   color: 'border',
        // },
      },
      border: {
        side: 'bottom',
        color: 'border'
      },
      heading: {
        level: '4' // level ranges from 1-6
        // margin: undefined

      },
      hover: {
        color: {
          dark: 'light-4',
          light: 'dark-3'
        },
        // deprecated
        heading: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          }
        }
      },
      icons: {
        collapse: _FormUp.FormUp,
        expand: _FormDown.FormDown // color: { dark: undefined, light: undefined },

      }
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'accent-1',
        light: 'brand'
      },
      hover: {
        textDecoration: 'underline' // fontWeight: undefined,
        // extend: undefined,

      } // extend: undefined,

    },
    avatar: {
      // extend: undefined,
      size: {
        xsmall: baseSpacing * 0.75 + "px",
        // 18px
        small: baseSpacing + "px",
        // 24px
        medium: baseSpacing * 2 + "px",
        // default 48px
        large: baseSpacing * 3 + "px",
        // 72px
        xlarge: baseSpacing * 4 + "px",
        // 96px
        '2xl': baseSpacing * 5 + "px",
        // 120px
        '3xl': baseSpacing * 6 + "px",
        // 144px
        '4xl': baseSpacing * 7 + "px",
        // 168px
        '5xl': baseSpacing * 8 + "px" // 192px

      },
      text: {
        size: {
          xsmall: 'small',
          // 14px
          small: 'medium',
          // 18px
          medium: 'large',
          // 22px
          large: 'xlarge',
          // 26px
          xlarge: 'xxlarge',
          // 34px
          '2xl': '3xl',
          // 42px
          '3xl': '4xl',
          // 54px
          '4xl': '5xl',
          // 70px
          '5xl': '6xl' // 90px

        } // fontWeight: undefined,
        // extend: undefined

      }
    },
    box: {
      responsiveBreakpoint: 'small' // when we switch rows to columns
      // extend: undefined,

    },
    button: {
      size: {
        small: {
          border: {
            radius: baseSpacing * 0.75 + "px"
          },
          pad: {
            vertical: baseSpacing / 4 - borderWidth + "px",
            // 4px
            horizontal: baseSpacing - borderWidth * 2 + "px" // 20px,

          }
        },
        medium: {
          border: {
            radius: baseSpacing * 0.75 + "px" // 18px

          },
          pad: {
            vertical: baseSpacing / 4 - borderWidth + "px",
            // 4px
            horizontal: baseSpacing - borderWidth + "px" // 22px

          }
        },
        large: {
          border: {
            radius: baseSpacing + "px" // 24px

          },
          pad: {
            vertical: baseSpacing / 4 + borderWidth + "px",
            // 8px
            horizontal: baseSpacing + borderWidth * 4 + "px" // 32px,

          }
        }
      },
      border: {
        // color: { dark: undefined, light: undefined }
        width: borderWidth + "px",
        radius: baseSpacing * 0.75 + "px"
      },
      // color: { dark: undefined, light: undefined }
      // default: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   font: {
      //     weight: undefined,
      //   },
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      // primary: {
      //   font: {
      //     weight: undefined,
      //   },
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      // secondary: {
      //   font: {
      //     weight: undefined,
      //   },
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      // option: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      active: {
        background: 'active-background',
        //   border: undefined,
        color: 'active-text' //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},

      },
      disabled: {
        //   background: undefined,
        //   border: undefined,
        //   color: undefined,
        opacity: 0.3 //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},

      },
      // hover: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   extend: undefined,
      //   default: {},
      //   primary: {},
      //   secondary: {},
      // },
      padding: {
        vertical: baseSpacing / 4 - borderWidth + "px",
        horizontal: baseSpacing - borderWidth + "px"
      },
      transition: {
        timing: 'ease-in-out',
        duration: 0.1,
        properties: ['color', 'background-color', 'border-color', 'box-shadow']
      }
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: baseFontSize - fontScale + "px",
        lineHeight: 1.375,
        daySize: baseSpacing * 8 / 7 + "px",
        slideDuration: '0.2s'
      },
      medium: {
        fontSize: baseFontSize + "px",
        lineHeight: 1.45,
        daySize: baseSpacing * 16 / 7 + "px",
        slideDuration: '0.5s'
      },
      large: {
        fontSize: baseFontSize + 3 * fontScale + "px",
        lineHeight: 1.11,
        daySize: baseSpacing * 32 / 7 + "px",
        slideDuration: '0.8s'
      },
      icons: {
        previous: _Previous.Previous,
        next: _Next.Next,
        small: {
          previous: _FormPrevious.FormPrevious,
          next: _FormNext.FormNext
        }
      },
      heading: {
        level: '4'
      } // level ranges from 1-6

    },
    card: {
      container: {
        round: 'small',
        elevation: 'small'
      },
      header: {},
      body: {},
      footer: {}
    },
    carousel: {
      icons: {
        current: _Subtract.Subtract,
        next: _Next.Next,
        previous: _Previous.Previous // color: { dark: undefined, light: undefined },

      },
      animation: {
        duration: 1000
      },
      disabled: {
        icons: {// color: { dark: undefined, light: undefined },
        }
      }
    },
    chart: {
      color: 'graph-0' // extend: undefined,

    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        // extend: undefined,
        radius: '4px',
        thickness: '4px'
      },
      // color: { dark: undefined, light: undefined },
      // extend: undefined,
      // gap: undefined
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// checked: undefined,
        // indeterminate: undefined,
      },
      // pad: undefined,
      size: baseSpacing + "px",
      toggle: {
        // background: undefined
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9'
        },
        knob: {// extend: undefined,
        },
        radius: baseSpacing + "px",
        size: baseSpacing * 2 + "px" // extend: undefined,

      }
    },
    checkBoxGroup: {// container: {
      //   // any box props
      //   extend: undefined,
      // },
    },
    clock: {
      analog: {
        // extend: undefined,
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3'
          },
          width: baseSpacing / 3 + "px",
          size: baseSpacing + "px",
          shape: 'round'
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          },
          width: baseSpacing / 6 + "px",
          size: Math.round(baseSpacing / 2) + "px",
          shape: 'round'
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          },
          width: baseSpacing / 8 + "px",
          size: Math.round(baseSpacing / 2.666) + "px",
          shape: 'round'
        },
        size: {
          xsmall: baseSpacing * 2 + "px",
          small: baseSpacing * 3 + "px",
          medium: baseSpacing * 4 + "px",
          large: baseSpacing * 6 + "px",
          xlarge: baseSpacing * 9 + "px",
          xxlarge: baseSpacing * 12 + "px",
          huge: baseSpacing * 12 + "px" // kept for backwards compatibility

        }
      },
      digital: {
        text: {
          xsmall: {
            size: baseFontSize - 2 * fontScale + "px",
            height: 1.5
          },
          small: {
            size: baseFontSize - fontScale + "px",
            height: 1.43
          },
          medium: {
            size: baseFontSize + "px",
            height: 1.375
          },
          large: {
            size: baseFontSize + fontScale + "px",
            height: 1.167
          },
          xlarge: {
            size: baseFontSize + 2 * fontScale + "px",
            height: 1.1875
          },
          xxlarge: {
            size: baseFontSize + 4 * fontScale + "px",
            height: 1.125
          }
        }
      }
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500
    },
    dateInput: {// icon: {
      //   size: undefined,
      // },
    },
    dataTable: {
      // body: {
      //   extend: undefined,
      // },
      pinned: {
        // body: {
        //    background: undefined,
        //    extend: undefined,
        // },
        header: {
          background: {
            opacity: 'strong'
          } //  extend: undefined,

        },
        footer: {
          background: {
            opacity: 'strong'
          } //  extend: undefined,

        }
      },
      container: {
        // any box props
        gap: 'xsmall' // extend: undefined,

      },
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2'
        },
        border: {
          side: 'bottom',
          size: 'xsmall'
        },
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        }
      },
      groupEnd: {
        border: {
          side: 'bottom',
          size: 'xsmall'
        }
      },
      header: {
        // background: undefined,
        // border: undefined,
        // color: undefined,
        // extend: undefined,
        // font: {
        //   weight: undefined,
        //   size: undefined,
        // },
        gap: 'small',
        // hover: {
        //   background: undefined,
        // },
        // pad: undefined,
        units: {
          color: 'text-xweak',
          margin: {
            left: 'xsmall'
          }
        }
      },
      icons: {
        ascending: _FormDown.FormDown,
        contract: _FormUp.FormUp,
        descending: _FormUp.FormUp,
        expand: _FormDown.FormDown // sortable: undefined,

      },
      primary: {
        weight: 'bold'
      },
      resize: {
        border: {
          color: 'border',
          side: 'end'
        } // hover: {
        //   border: {
        //     color: undefined,
        //     side: undefined,
        //     size: undefined,
        //   },
        // },

      }
    },
    diagram: {
      // extend: undefined,
      line: {
        color: 'graph-0'
      }
    },
    // drop: {
    //   extend: undefined,
    //   maxHeight: undefined,
    // },
    fileInput: {
      // background: {},
      border: {
        // color: undefined,
        side: 'all',
        size: 'small',
        style: 'dashed'
      },
      dragOver: {
        border: {
          color: 'control'
        } // extend: undefined,

      },
      hover: {
        border: {
          color: 'brand'
        } // extend: undefined,

      },
      icons: {
        remove: _FormClose.FormClose
      },
      // pad: {},
      label: {
        margin: 'small' // extend: undefined,

      },
      message: {
        margin: 'small' // extend: undefined,

      } // extend: undefined,

    },
    formField: {
      border: {
        color: 'border',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical'
          }
        },
        position: 'inner',
        side: 'bottom'
      },
      content: {
        // margin: undefined,
        pad: 'small'
      },
      disabled: {
        background: {
          color: 'status-disabled',
          opacity: 'medium'
        } // border: {
        //   color: undefined,
        // },
        // label: {
        //   color: undefined,
        // },

      },
      // focus: {
      //   background: {
      //     color: undefined,
      //   },
      //   border: {
      //     color: undefined,
      //   },
      // },
      error: {
        color: 'status-critical',
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        } // background: undefined,
        // container: {}, // any Box props
        // icon: undefined,

      },
      // extend: undefined,
      help: {
        color: 'dark-3',
        margin: {
          start: 'small'
        }
      },
      info: {
        color: 'text-xweak',
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        } // container: {}, // any Box props
        // icon: undefined,

      },
      label: {
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        } // requiredIndicator: undefined,

      },
      margin: {
        bottom: 'small'
      } // round: undefined,

    },
    grommet: {// extend: undefined
    },
    heading: {
      // color: undefined,
      font: {// family: undefined
      },
      level: {
        1: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(4)),
          medium: _extends({}, fontSizing(8)),
          large: _extends({}, fontSizing(16)),
          xlarge: _extends({}, fontSizing(24))
        },
        2: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(2)),
          medium: _extends({}, fontSizing(4)),
          large: _extends({}, fontSizing(8)),
          xlarge: _extends({}, fontSizing(12))
        },
        3: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(1)),
          medium: _extends({}, fontSizing(2)),
          large: _extends({}, fontSizing(4)),
          xlarge: _extends({}, fontSizing(6))
        },
        4: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(0)),
          medium: _extends({}, fontSizing(0)),
          large: _extends({}, fontSizing(0)),
          xlarge: _extends({}, fontSizing(0))
        },
        5: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(-0.5)),
          medium: _extends({}, fontSizing(-0.5)),
          large: _extends({}, fontSizing(-0.5)),
          xlarge: _extends({}, fontSizing(-0.5))
        },
        6: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(-1)),
          medium: _extends({}, fontSizing(-1)),
          large: _extends({}, fontSizing(-1)),
          xlarge: _extends({}, fontSizing(-1))
        }
      },
      responsiveBreakpoint: 'small',
      // when we scale the font size down
      weight: 600
    },
    layer: {
      background: {
        dark: 'black',
        light: 'white'
      },
      border: {
        radius: '4px' // intelligentRounding: undefined,

      },
      container: {
        // elevation: undefined,
        zIndex: '20'
      },
      // extend: undefined,
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
      },
      responsiveBreakpoint: 'small',
      // when Layer takes over the full screen
      zIndex: '20'
    },
    list: {
      container: {
        // any box props
        gap: 'xsmall' // extend: undefined,

      },
      item: {
        // background: undefined,
        border: 'horizontal',
        pad: {
          horizontal: 'medium',
          vertical: 'small'
        } // extend: undefined,

      } // extend: undefined,

    },
    maskedInput: {// container: {
      //   extend: undefined,
      // },
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    menu: {
      // background: undefined,
      // extend: undefined,
      drop: {
        align: {
          top: 'top',
          left: 'left'
        } // any drop props

      },
      icons: {
        down: _FormDown.FormDown // up: undefined,
        // color: { dark: undefined, light: undefined },

      }
    },
    meter: {
      color: 'graph-0' // colors: [] || colors: ['graph-0', 'graph-1', 'graph-2', 'graph-3'],
      // extend: undefined,

    },
    pagination: {
      button: {
        active: {
          background: {
            color: 'active-background'
          }
        },
        color: 'text-strong',
        hover: {
          background: {
            color: 'background-contrast'
          },
          color: undefined
        },
        size: {
          small: {
            border: {
              radius: baseSpacing / 8 + "px",
              // 3
              width: '2px'
            },
            pad: {
              vertical: "4px",
              horizontal: "4px"
            },
            font: _extends({}, fontSizing(-1)),
            height: baseSpacing * 1.25 + "px",
            width: baseSpacing * 1.25 + "px"
          },
          medium: {
            border: {
              radius: baseSpacing / 6 + "px",
              // 4
              width: '2px'
            },
            pad: {
              vertical: "4px",
              horizontal: "4px"
            },
            font: _extends({}, fontSizing(0)),
            height: baseSpacing * 1.5 + "px",
            width: baseSpacing * 1.5 + "px"
          },
          large: {
            border: {
              radius: baseSpacing / 4 + "px",
              // 6
              width: '2px'
            },
            pad: {
              vertical: "4px",
              horizontal: "4px"
            },
            font: _extends({}, fontSizing(1)),
            height: baseSpacing * 2 + "px",
            width: baseSpacing * 2 + "px"
          }
        }
      },
      // container: {
      //   // any box props,
      //   extend: undefined,
      // },
      controls: {
        align: 'center',
        direction: 'row',
        gap: 'xxsmall',
        margin: 'none',
        pad: 'none'
      },
      icons: {
        // color: undefined,
        next: _Next.Next,
        previous: _Previous.Previous
      }
    },
    paragraph: {
      font: {// family: undefined
      },
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      large: _extends({}, fontSizing(1)),
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    spinner: {
      container: {
        animation: 'rotateRight',
        color: 'brand',
        pad: 'small',
        round: 'full',
        size: 'small'
      },
      // icon: undefined
      size: {
        xsmall: baseSpacing * 0.75 + "px",
        small: baseSpacing + "px",
        // default 24
        medium: baseSpacing * 2 + "px",
        large: baseSpacing * 3 + "px",
        xlarge: baseSpacing * 4 + "px"
      }
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '100%' // background: {
        //  color: undefined,
        // },
        // color: { dark: undefined, light: undefined },
        // extend: undefined,

      },
      // color: undefined,
      hover: {
        // background: {
        //   color: undefined,
        // },
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// circle: undefined,
      },
      gap: 'small',
      size: baseSpacing + "px",
      font: {// weight: undefined,
      },
      container: {// extend: undefined
      }
    },
    radioButtonGroup: {// container: {}, // any box props
    },
    rangeInput: {
      // extend: undefined
      track: {
        height: '4px',
        color: 'border' // opacity: undefined,
        // lower: {
        //   color: 'undefined',
        //   opacity: undefined,
        // },
        // upper: {
        //   color: undefined,
        //   opacity: undefined,
        // },
        // extend: undefined

      },
      thumb: {// color: { dark: undefined, light: undefined },
        // extend: undefined
      }
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4'
        }
      } // edge: {
      //   type: undefined,
      // },

    },
    select: {
      // background: undefined,
      clear: {
        container: {
          pad: 'small',
          background: 'background-contrast'
        },
        // any box props
        text: {
          color: 'text-weak'
        } // any text props

      },
      container: {// extend: undefined,
      },
      control: {// extend: undefined,
        // open: undefined,
      },
      icons: {
        // color: { dark: undefined, light: undefined },
        margin: {
          horizontal: 'small'
        },
        down: _FormDown.FormDown // up: undefined

      },
      options: {
        container: {
          align: 'start',
          pad: 'small'
        },
        text: {
          margin: 'none'
        }
      },
      // searchInput: undefined,
      step: 20
    },
    skipLinks: {
      position: 'top',
      container: {
        elevation: 'large',
        round: 'small',
        pad: 'medium'
      },
      label: {
        margin: {
          bottom: 'medium'
        },
        size: 'medium'
      }
    },
    tab: {
      active: {
        color: 'text' // background: undefined,

      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'accent-1',
          light: 'brand'
        },
        active: {
          color: {
            dark: 'white',
            light: 'black'
          }
        },
        disabled: {// color: undefined,
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black'
          } // extend: undefined,

        }
      },
      color: 'control',
      // disabled: {
      //   color: undefined,
      // },
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small'
      },
      pad: {
        bottom: 'xsmall'
      }
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      // gap: undefined,
      header: {// background: undefined,
        // border: {
        //   side: undefined,
        //   size: undefined,
        //   style: undefined,
        //   color: undefined,
        // },
        // extend: undefined,
      },
      panel: {// extend: undefined,
      }
    },
    table: {
      header: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'bottom' // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,

      },
      body: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        } // background: undefined,
        // border: undefined,
        // extend: undefined,

      },
      // row: {
      //   hover: {
      //     background: undefined,
      //     color: undefined,
      //   },
      // },
      footer: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'top' // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,

      }
    },
    text: {
      font: {// family: undefined
      },
      xsmall: _extends({}, fontSizing(-1.5)),
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      // 18px
      large: _extends({}, fontSizing(1)),
      // 22px
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4)),
      '2xl': _extends({}, fontSizing(4)),
      '3xl': _extends({}, fontSizing(6)),
      '4xl': _extends({}, fontSizing(9)),
      '5xl': _extends({}, fontSizing(13)),
      '6xl': _extends({}, fontSizing(18))
    },
    textArea: {// extend: undefined,
      // disabled: { opacity: undefined },
    },
    textInput: {// extend: undefined,
      // disabled: { opacity: undefined },
    },
    tip: {
      content: {
        // any Box props
        background: 'background-contrast',
        elevation: 'small',
        margin: 'xsmall',
        pad: {
          vertical: 'xsmall',
          horizontal: 'small'
        },
        round: 'small'
      },
      drop: {
        // any props for the drop
        align: {
          top: 'bottom'
        },
        // most common use case is Header with Buttons
        background: 'none',
        elevation: 'none',
        margin: 'none'
      }
    },
    video: {
      captions: {
        background: 'rgba(0, 0, 0, 0.7)'
      },
      // controls: { background: undefined },
      icons: {
        closedCaption: _ClosedCaption.ClosedCaption,
        configure: _Actions.Actions,
        fullScreen: _Expand.Expand,
        pause: _Pause.Pause,
        play: _Play.Play,
        reduceVolume: _VolumeLow.VolumeLow,
        volume: _Volume.Volume // color: { dark: undefined, light: undefined },

      },
      // scrubber: { track: { color: undefined } },
      scrubber: {
        color: 'light-4'
      }
    },
    worldMap: {
      color: 'light-3',
      continent: {
        active: '8px',
        base: '6px'
      },
      hover: {
        color: 'light-4'
      },
      place: {
        active: '20px',
        base: '8px'
      }
    }
  });
  return (0, _object.deepFreeze)(result);
};

exports.generate = generate;
var base = generate(24);
exports.base = base;

/***/ }),

/***/ "./node_modules/grommet/themes/dark.js":
/*!*********************************************!*\
  !*** ./node_modules/grommet/themes/dark.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dark = void 0;

var _polished = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/grommet/utils/object.js");

var _colors = __webpack_require__(/*! ../utils/colors */ "./node_modules/grommet/utils/colors.js");

var accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
var neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
var statusColors = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var backgroundColor = '#111111';
var colors = {
  active: (0, _polished.rgba)(102, 102, 102, 0.5),
  background: backgroundColor,
  black: '#000000',
  brand: '#FD6FFF',
  control: {
    dark: '#FFCA58',
    light: '#403216'
  },
  focus: '#FFCA58',
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  placeholder: '#AAAAAA',
  text: {
    dark: '#eeeeee',
    light: '#444444'
  },
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});
var dark = (0, _object.deepFreeze)({
  global: {
    colors: colors,
    drop: {
      background: '#333333'
    },
    focus: {
      border: {
        color: (0, _styledComponents.css)(["", ";"], function (props) {
          return (0, _colors.normalizeColor)('focus', props.theme);
        }),
        width: '2px'
      }
    },
    font: {
      family: 'Arial'
    },
    input: {
      weight: 700
    }
  },
  anchor: {
    color: 'control'
  },
  layer: {
    background: backgroundColor,
    overlay: {
      background: (0, _polished.rgba)(48, 48, 48, 0.5)
    }
  }
});
exports.dark = dark;

/***/ }),

/***/ "./node_modules/grommet/themes/grommet.js":
/*!************************************************!*\
  !*** ./node_modules/grommet/themes/grommet.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.grommet = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/grommet/utils/object.js");

var grommet = (0, _object.deepFreeze)({
  global: {
    colors: {
      background: {
        light: '#ffffff',
        dark: '#000000'
      }
    },
    font: {
      family: "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
    }
  },
  button: {
    extend: (0, _styledComponents.css)(["", ""], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});
exports.grommet = grommet;

/***/ }),

/***/ "./node_modules/grommet/themes/index.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/themes/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.dark = exports.grommet = exports.generate = exports.base = void 0;

var _base = __webpack_require__(/*! ./base */ "./node_modules/grommet/themes/base.js");

exports.base = _base.base;
exports.generate = _base.generate;

var _grommet = __webpack_require__(/*! ./grommet */ "./node_modules/grommet/themes/grommet.js");

exports.grommet = _grommet.grommet;

var _dark = __webpack_require__(/*! ./dark */ "./node_modules/grommet/themes/dark.js");

exports.dark = _dark.dark;

/***/ }),

/***/ "./node_modules/grommet/utils/colors.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/utils/colors.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRGBA = exports.colorIsDark = exports.normalizeColor = void 0;

// Returns the specific color that should be used according to the theme.
// If 'dark' is supplied, it takes precedence over 'theme.dark'.
// Can return undefined.
var normalizeColor = function normalizeColor(color, theme, dark) {
  var colorSpec = theme.global && theme.global.colors[color] !== undefined ? theme.global.colors[color] : color; // If the color has a light or dark object, use that

  var result = colorSpec;

  if (colorSpec) {
    if ((dark === true || dark === undefined && theme.dark) && colorSpec.dark !== undefined) {
      result = colorSpec.dark;
    } else if ((dark === false || !theme.dark) && colorSpec.light !== undefined) {
      result = colorSpec.light;
    }
  } // allow one level of indirection in color names


  if (result && theme.global && theme.global.colors[result] !== undefined) {
    result = normalizeColor(result, theme, dark);
  }

  return result;
};

exports.normalizeColor = normalizeColor;

var parseHexToRGB = function parseHexToRGB(color) {
  return color.length < 7 // 7 is what's needed for '#RRGGBB'
  ? color.match(/[A-Za-z0-9]{1}/g).map(function (v) {
    return parseInt("" + v + v, 16);
  }) : // https://stackoverflow.com/a/42429333
  color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
    return parseInt(v, 16);
  });
}; // From: https://stackoverflow.com/a/9493060/8513067
// Converts an HSL color value to RGB. Conversion formula
// adapted from http://en.wikipedia.org/wiki/HSL_color_space.
// Assumes h, s, and l are contained in the set [0, 1] and
// returns r, g, and b in the set [0, 255].


var hslToRGB = function hslToRGB(h, s, l) {
  var r;
  var g;
  var b;

  if (s === 0 || s === '0') {
    // achromatic
    r = l;
    g = l;
    b = l;
  } else {
    var hue2rgb = function hue2rgb(p, q, inT) {
      var t = inT;
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 0.16666667) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 0.66666667) return p + (q - p) * (0.66666667 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 0.33333333);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 0.33333333);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}; // allow for alpha: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA


var hexExp = /^#[A-Za-z0-9]{3,4}$|^#[A-Za-z0-9]{6,8}$/;
var rgbExp = /^rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?\)/;
var rgbaExp = /^rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([.0-9]*)\s?\)/; // e.g. hsl(240, 60%, 50%)

var hslExp = /^hsla?\(\s?([0-9]*)\s?,\s?([0-9]*)%?\s?,\s?([0-9]*)%?\s?.*?\)/;

var canExtractRGBArray = function canExtractRGBArray(color) {
  return hexExp.test(color) || rgbExp.test(color) || rgbaExp.test(color) || hslExp.test(color);
};

var getRGBArray = function getRGBArray(color) {
  if (hexExp.test(color)) {
    var _parseHexToRGB = parseHexToRGB(color),
        red = _parseHexToRGB[0],
        green = _parseHexToRGB[1],
        blue = _parseHexToRGB[2],
        alpha = _parseHexToRGB[3];

    return [red, green, blue, alpha !== undefined ? alpha / 255.0 : undefined];
  }

  var match = color.match(rgbExp);

  if (match) {
    return match.splice(1).map(function (v) {
      return parseInt(v, 10);
    });
  }

  match = color.match(rgbaExp);

  if (match) {
    return match.splice(1).map(function (v) {
      return parseFloat(v, 10);
    });
  }

  match = color.match(hslExp);

  if (match) {
    var _match$splice$map = match.splice(1).map(function (v) {
      return parseInt(v, 10);
    }),
        h = _match$splice$map[0],
        s = _match$splice$map[1],
        l = _match$splice$map[2];

    return hslToRGB(h / 360.0, s / 100.0, l / 100.0);
  }

  return color;
};

var colorIsDark = function colorIsDark(color) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray = getRGBArray(color),
        red = _getRGBArray[0],
        green = _getRGBArray[1],
        blue = _getRGBArray[2],
        alpha = _getRGBArray[3]; // if there is an alpha and it's greater than 50%, we can't really tell


    if (alpha < 0.5) return undefined;
    var brightness = (299 * red + 587 * green + 114 * blue) / 1000; // From: http://www.had2know.com/technology/color-contrast-calculator-web-design.html
    // Above domain is no longer registered.

    return brightness < 125;
  }

  return undefined;
};

exports.colorIsDark = colorIsDark;

var getRGBA = function getRGBA(color, opacity) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray2 = getRGBArray(color),
        red = _getRGBArray2[0],
        green = _getRGBArray2[1],
        blue = _getRGBArray2[2],
        alpha = _getRGBArray2[3];

    var normalizedAlpha;

    if (opacity !== undefined) {
      normalizedAlpha = opacity;
    } else if (alpha !== undefined) {
      normalizedAlpha = alpha;
    } else {
      normalizedAlpha = 1;
    }

    return "rgba(" + red + ", " + green + ", " + blue + ", " + normalizedAlpha + ")";
  }

  return undefined;
};

exports.getRGBA = getRGBA;

/***/ }),

/***/ "./node_modules/grommet/utils/mixins.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/utils/mixins.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getAvailableAtBadge = exports.findAllByType = exports.breakpointStyle = exports.fontSize = exports.parseMetricToNum = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var parseMetricToNum = function parseMetricToNum(metric) {
  if (typeof metric === 'number') return metric;

  if (metric.match(/\s/) && "development" !== 'production') {
    console.warn("Invalid single measurement value: \"" + metric + "\"");
  }

  return parseFloat(metric.match(/\d+(\.\d+)?/), 10);
};

exports.parseMetricToNum = parseMetricToNum;

var fontSize = function fontSize(size, lineHeight) {
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], function (props) {
    return parseMetricToNum(size) / parseMetricToNum(props.theme.global.font.size) * 1 + "rem";
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToNum(size) / parseMetricToNum(props.theme.global.lineHeight)) * (parseMetricToNum(props.theme.global.lineHeight) / parseMetricToNum(size)) + "px";
  });
};

exports.fontSize = fontSize;

var breakpointStyle = function breakpointStyle(breakpoint, content) {
  return (0, _styledComponents.css)(["@media only screen ", "{", ";}"], breakpoint.value && "and (max-width: " + breakpoint.value + "px)", content);
};

exports.breakpointStyle = breakpointStyle;

var findAllByType = function findAllByType(component, type) {
  var matches = [];

  if (component.type === type) {
    matches.push(component);
  }

  if (component.children) {
    component.children.forEach(function (child) {
      matches = matches.concat(findAllByType(child, type));
    });
  }

  return matches;
};

exports.findAllByType = findAllByType;

var getAvailableAtBadge = function getAvailableAtBadge(availableAt, componentType) {
  return [{
    url: "https://storybook.grommet.io/?selectedKind=" + componentType + "-" + availableAt + "&full=0&stories=1&panelRight=0",
    badge: 'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
    label: 'Storybook'
  }, {
    url: "https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/" + availableAt.toLowerCase() + "&module=%2Fsrc%2F" + availableAt + ".js",
    badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
    label: 'CodeSandbox'
  }];
};

exports.getAvailableAtBadge = getAvailableAtBadge;

/***/ }),

/***/ "./node_modules/grommet/utils/object.js":
/*!**********************************************!*\
  !*** ./node_modules/grommet/utils/object.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeUndefined = exports.deepMerge = exports.deepFreeze = exports.isObject = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};

exports.isObject = isObject;

var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};

exports.deepFreeze = deepFreeze;

var deepMerge = function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) {
    return target;
  } // making sure to not change target (immutable)


  var output = _extends({}, target);

  sources.forEach(function (source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = _extends({}, source[key]);
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
};

exports.deepMerge = deepMerge;

var removeUndefined = function removeUndefined(obj) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  });
  return result;
};

exports.removeUndefined = removeUndefined;

/***/ }),

/***/ "./src/app/components/pages/topic/TopicForm.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/pages/topic/TopicForm.tsx ***!
  \******************************************************/
/*! exports provided: TopicForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicForm", function() { return TopicForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _TopicPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopicPage.css */ "./src/app/components/pages/topic/TopicPage.css");
/* harmony import */ var _TopicPage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopicPage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/topic/topicComponent */ "./src/app/components/shared/topic/topicComponent.tsx");
/* harmony import */ var _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../img/palm_tree_PNG93263.png */ "./src/img/palm_tree_PNG93263.png");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet/themes */ "./node_modules/grommet/themes/index.js");
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var Topic = (function (_super) {
    __extends(Topic, _super);
    function Topic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Topic.prototype.render = function () {
        var cards = Array(20);
        console.log("Размер массива", cards.length);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_2__["Translation"], null, function (t) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grommet"], { theme: grommet_themes__WEBPACK_IMPORTED_MODULE_7__["grommet"], full: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], { pad: "large" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Grid"], { columns: 'small', gap: "small" }, cards.map(function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_topic_topicComponent__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"], { id: "1", imagelink: _img_palm_tree_PNG93263_png__WEBPACK_IMPORTED_MODULE_5__["default"], className: "1", title: "test title", description: "test description 1 2 3 lalala sasasasa one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen" })); }))))); }));
    };
    return Topic;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
function mapStateToProps(state) {
    return state.registration;
}
var TopicForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Topic);


/***/ }),

/***/ "./src/app/components/shared/topic/topicComponent.css":
/*!************************************************************!*\
  !*** ./src/app/components/shared/topic/topicComponent.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/shared/topic/topicComponent.tsx":
/*!************************************************************!*\
  !*** ./src/app/components/shared/topic/topicComponent.tsx ***!
  \************************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _topicComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topicComponent.css */ "./src/app/components/shared/topic/topicComponent.css");
/* harmony import */ var _topicComponent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_topicComponent_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");



var theme = {
    global: {
        font: {
            family: 'Prosto One',
        },
    },
    card: {
        container: {
            background: '#FFFFFF10',
            elevation: 'none',
        },
        footer: {
            pad: { horizontal: 'medium', vertical: 'small' },
        },
    },
    heading: {
        color: '#ADFF0037',
        level: {
            2: {
                medium: {
                    size: "24px",
                    height: "30px",
                }
            }
        }
    },
};
var TopicComponent = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Card"], { elevation: "large", width: "medium" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["CardBody"], { height: "small" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Image"], { fit: "contain", alignSelf: "center", src: props.imagelink })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { pad: { horizontal: 'medium' }, responsive: false },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], { level: "2", alignSelf: "center" }, props.title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], { color: "white", size: "small", margin: { top: 'none' } }, props.description)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], { direction: "row", align: "center", gap: "small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Anchor"], { href: "https://www.collinsdictionary.com/us/dictionary/english/bridge", label: "MORE", size: "medium", color: "#ADFF0037" }))))));
};


/***/ }),

/***/ "./src/img/palm_tree_PNG93263.png":
/*!****************************************!*\
  !*** ./src/img/palm_tree_PNG93263.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c5c64618126fb988f8398c311ddd0a4b.png");

/***/ })

})
//# sourceMappingURL=app.63431e4022908d04751b.hot-update.js.map