module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},a=!0;try{e[n].call(o.exports,o,o.exports,r),a=!1}finally{a&&delete t[n]}return o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/_next/",r(r.s=12)}({"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function a(t){return e.exports=a=o?n:function(e){return e.__proto__||n(e)},a(t)}e.exports=a},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},12:function(e,t,r){e.exports=r("ziBp")},"5Uuq":function(e,t,r){var n=r("Jo+v"),o=r("hfKm");e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o&&n?n(e,r):{};a.get||a.set?o(t,r,a):t[r]=e[r]}return t.default=e,t}},"9Pu4":function(e,t){e.exports=require("@material-ui/core/styles")},Bhuq:function(e,t,r){e.exports=r("/+oN")},"Jo+v":function(e,t,r){e.exports=r("Z6Kq")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},MW28:function(e,t,r){"use strict";var n=r("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(r("/HRN")),a=n(r("WaGi")),u=n(r("ZDA2")),s=n(r("/+P4")),i=n(r("N9n2")),c=n(r("cDcd")),l=(n(r("rf6O")),r("k004")),f=r("oAEb"),p=n(r("qt1I")),d=n(r("Wh1t")),y=n(r("UVoM"));t.styles=function(e){return{layout:{width:"100%",flex:1,display:"flex",justifyContent:"center",alignItems:"center"},paper:{width:300,background:e.main.paper},row:{display:"flex",justifyContent:"center"},item:{width:"33%",fontSize:"200%"},label:{display:"flex",justifyContent:"center",alignItems:"center"},toast:{background:e.palette.primary.main,color:e.palette.primary.contrastText,"& button":{color:e.palette.primary.contrastText}},progress:{background:e.palette.secondary.main,color:e.palette.primary.contrastText}}};var m=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,i.default)(t,e),(0,a.default)(t,[{key:"toast",value:function(e){(0,f.toast)(c.default.createElement("div",null,c.default.createElement("h3",null,c.default.createElement(l.FormattedMessage,{id:"NOTIFICATIONS_TITLE"})),c.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare viverra sapien in cursus.")),{position:e,className:this.props.classes.toast,progressClassName:this.props.classes.progress})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:this.props.classes.layout},c.default.createElement(p.default,{className:this.props.classes.paper},c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(d.default,{className:this.props.classes.item,onClick:function(){return e.toast(f.toast.POSITION.TOP_LEFT)}},"⬁"),c.default.createElement(d.default,{className:this.props.classes.item,onClick:function(){return e.toast(f.toast.POSITION.TOP_CENTER)}},"⇧"),c.default.createElement(d.default,{className:this.props.classes.item,onClick:function(){return e.toast(f.toast.POSITION.TOP_RIGHT)}},"⬀")),c.default.createElement("div",{className:this.props.classes.label},c.default.createElement(y.default,{variant:"overline"},c.default.createElement(l.FormattedMessage,{id:"NOTIFICATIONS_LABEL"}))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(d.default,{className:this.props.classes.item,onClick:function(){return e.toast(f.toast.POSITION.BOTTOM_LEFT)}},"⬃"),c.default.createElement(d.default,{className:this.props.classes.item,onClick:function(){return e.toast(f.toast.POSITION.BOTTOM_CENTER)}},"⇩"),c.default.createElement(d.default,{className:this.props.classes.item,onClick:function(){return e.toast(f.toast.POSITION.BOTTOM_RIGHT)}},"⬂"))))}}]),t}(c.default.Component);t.default=m},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},UVoM:function(e,t){e.exports=require("@material-ui/core/Typography")},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},Wh1t:function(e,t){e.exports=require("@material-ui/core/Button")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},Z6Kq:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-descriptor")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},cDcd:function(e,t){e.exports=require("react")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function a(e){return(a="function"==typeof o&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function u(t){return"function"==typeof o&&"symbol"===a(n)?e.exports=u=function(e){return a(e)}:e.exports=u=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":a(e)},u(t)}e.exports=u},k004:function(e,t){e.exports=require("react-intl")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},oAEb:function(e,t){e.exports=require("react-toastify")},qt1I:function(e,t){e.exports=require("@material-ui/core/Paper")},rf6O:function(e,t){e.exports=require("prop-types")},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},xb4I:function(e,t,r){"use strict";var n=r("5Uuq");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("9Pu4"),a=n(r("MW28")),u=(0,o.withStyles)(a.styles)(a.default);u.getInitialProps=a.default.getInitialProps;var s=u;t.default=s},ziBp:function(e,t,r){"use strict";var n=r("KI45");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(r("xb4I"))}});