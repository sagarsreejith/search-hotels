(this["webpackJsonphotel-search"]=this["webpackJsonphotel-search"]||[]).push([[0],{2:function(e,t,o){"use strict";var n=o(26);o.o(n,"ActionsEnum")&&o.d(t,"ActionsEnum",(function(){return n.ActionsEnum}));var r=o(27);o.o(r,"ActionsEnum")&&o.d(t,"ActionsEnum",(function(){return r.ActionsEnum}));var _=o(28);o.d(t,"ActionsEnum",(function(){return _.a}));o(29),o(30)},26:function(e,t){},27:function(e,t){},28:function(e,t,o){"use strict";var n;o.d(t,"a",(function(){return n})),function(e){e.NETWORK_ERROR="NETWORK_ERROR",e.UPDATE_FROM_DATE="UPDATE_FROM_DATE",e.UPDATE_TO_DATE="UPDATE_TO_DATE",e.UPDATE_HOTEL_LIST="UPDATE_HOTEL_LIST",e.SHOW_LOADER="SHOW_LOADER",e.UPDATE_FILTERS="UPDATE_FILTERS",e.UPDATE_SORT_BY="UPDATE_SORT_BY"}(n||(n={}))},29:function(e,t){},30:function(e,t){},41:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(7),r=o.n(n),_=o(9),i=o(34),a=o.n(i),l={"Content-type":"application/json"},c={listOfHotels:"".concat("https://www.mocky.io/v2","/5eb8fcb12d0000d088357f2a")},s=function(){var e=Object(_.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.a.get("".concat(c.listOfHotels),{headers:l}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},46:function(e,t,o){},47:function(e,t,o){},53:function(e,t,o){},75:function(e,t,o){},76:function(e,t,o){},77:function(e,t,o){},78:function(e,t,o){},79:function(e,t,o){},8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getHotelList})),__webpack_require__.d(__webpack_exports__,"b",(function(){return updateFilters})),__webpack_require__.d(__webpack_exports__,"c",(function(){return updateSortBy}));var _Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),_services_Api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),getHotelList=function getHotelList(fromDate,toDate){return function(){var _ref=Object(_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(dispatch){var apiResponse,hotelList;return _Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return isShowLoader(dispatch,!0),dispatch({type:_types__WEBPACK_IMPORTED_MODULE_3__.ActionsEnum.UPDATE_HOTEL_LIST,payload:{hotelList:[]}}),_context.prev=2,_context.next=5,Object(_services_Api__WEBPACK_IMPORTED_MODULE_2__.a)();case 5:apiResponse=_context.sent,hotelList=eval(apiResponse.data.toString()),dispatch({type:_types__WEBPACK_IMPORTED_MODULE_3__.ActionsEnum.UPDATE_HOTEL_LIST,payload:{hotelList:hotelList,fromDate:fromDate,toDate:toDate}}),isShowLoader(dispatch,!1),_context.next=15;break;case 11:_context.prev=11,_context.t0=_context.catch(2),isShowLoader(dispatch,!1),dispatch({type:_types__WEBPACK_IMPORTED_MODULE_3__.ActionsEnum.NETWORK_ERROR,payload:null});case 15:case"end":return _context.stop()}}),_callee,null,[[2,11]])})));return function(e){return _ref.apply(this,arguments)}}()},updateFilters=function(e){return function(){var t=Object(_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function t(o){return _Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o({type:_types__WEBPACK_IMPORTED_MODULE_3__.ActionsEnum.UPDATE_FILTERS,payload:{filters:{hotelName:null===e||void 0===e?void 0:e.hotelName,hotelPrice:null===e||void 0===e?void 0:e.hotelPrice}}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateSortBy=function(e){return function(){var t=Object(_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function t(o){return _Users_macbookpro_Documents_reactApp_hotel_search_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o({type:_types__WEBPACK_IMPORTED_MODULE_3__.ActionsEnum.UPDATE_SORT_BY,payload:{sortBy:{name:"name"===e,price:"price"===e}}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},isShowLoader=function(e,t){e({type:_types__WEBPACK_IMPORTED_MODULE_3__.ActionsEnum.SHOW_LOADER,payload:{loaderStatus:t}})}},80:function(e,t,o){},81:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),_=o(11),i=o.n(_),a=(o(46),o(47),o(5)),l=o(32),c=o(33),s=o(40),u=o(39),d={NAME:"Name: ",PRICE:"Price: ",CITY:"City: ",CURRENCY_CODE:"AED"},p={FROM:"From: ",TO:"To: "},v="No record found!",m="yyyy-mm-DD",b="Total Nights: ",O={NAME:"name",PRICE:"price",INPUT_PLACE_HOLDER:"Enter Hotel Name"},E={NAME:"name",PRICE:"price"},h={SORT_BY_NAME:"Sort By Name",SORT_BY_PRICE:"Sort By Price"},f=(o(53),o(0)),j=(n.Component,o(3)),D=o(8),A=o(10),T=o.n(A),P=function(e,t){return T()(e,m).add(t,"days").format(m).toString()},y=function(e,t){return T()(t).isSameOrAfter(e)},R=function(e,t){return T()(t).diff(T()(e),"days")},L=function(e,t,o){return e.filter((function(e){return function(e){switch(!0){case""!==t&&""!==o:return parseInt(null===e||void 0===e?void 0:e.price)<=parseInt(o)&&(null===e||void 0===e?void 0:e.name.toLowerCase().includes(t.toLowerCase()));case""!==o:return parseInt(null===e||void 0===e?void 0:e.price)<=parseInt(o);case""!==t:return null===e||void 0===e?void 0:e.name.toLowerCase().includes(t.toLowerCase());default:return!0}}(e)}))},x=function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(o,n){return-1==t?n[e].localeCompare(o[e]):o[e].localeCompare(n[e])}},M=(o(75),function(e){var t,o,n,r,_,i=Object(a.b)(),l=null===e||void 0===e||null===(t=e.filters)||void 0===t?void 0:t.hotelName,c=(null===e||void 0===e||null===(o=e.hotelList)||void 0===o?void 0:o.length)>0?parseInt(null===(n=(null===e||void 0===e?void 0:e.hotelList).reduce((function(e,t){return parseInt(null===t||void 0===t?void 0:t.price)<=parseInt(null===e||void 0===e?void 0:e.price)?e:t})))||void 0===n?void 0:n.price):0,s=(null===e||void 0===e||null===(r=e.hotelList)||void 0===r?void 0:r.length)>0?parseInt(null===(_=function(e){return e.reduce((function(e,t){return parseInt(null===t||void 0===t?void 0:t.price)>=parseInt(null===e||void 0===e?void 0:e.price)?e:t}))}(null===e||void 0===e?void 0:e.hotelList))||void 0===_?void 0:_.price):0,u=function(t,o){var n,r,_,a,l,c={hotelName:o===O.NAME?null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value:null===e||void 0===e||null===(r=e.filters)||void 0===r?void 0:r.hotelName,hotelPrice:o===O.PRICE?"0"===(null===t||void 0===t||null===(_=t.target)||void 0===_?void 0:_.value)?"":null===t||void 0===t||null===(a=t.target)||void 0===a?void 0:a.value:null===e||void 0===e||null===(l=e.filters)||void 0===l?void 0:l.hotelPrice};i(Object(D.b)(c))};return Object(f.jsxs)("div",{className:"filter-section",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:"assets/images/search-icon.svg",alt:""}),Object(f.jsx)("input",{type:"text",name:"hotel-name",id:"hotel-name",placeholder:O.INPUT_PLACE_HOLDER,defaultValue:l,onChange:function(e){return u(e,O.NAME)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"range",id:"hotel-price",name:"hotel-price",min:s,max:c,step:"1",onChange:function(e){return u(e,O.PRICE)}})})]})}),N=(o(76),function(e){var t;return Object(f.jsxs)("div",{className:"details-card",children:[Object(f.jsxs)("div",{className:"hotel-name",children:[Object(f.jsx)("strong",{children:d.NAME}),null===e||void 0===e||null===(t=e.hotel)||void 0===t?void 0:t.name]}),Object(f.jsxs)("div",{className:"hotel-price",children:[Object(f.jsx)("strong",{children:d.PRICE}),parseInt(null===e||void 0===e?void 0:e.hotel.price)*(null===e||void 0===e?void 0:e.totalNights)," ",d.CURRENCY_CODE]}),Object(f.jsxs)("div",{className:"hotel-city",children:[Object(f.jsx)("strong",{children:d.CITY}),null===e||void 0===e?void 0:e.hotel.city]})]})}),U=(o(77),function(e){var t,o,n,r,_,i,l,c,s=Object(a.b)(),u=(null===e||void 0===e||null===(t=e.filters)||void 0===t?void 0:t.hotelName)||(null===e||void 0===e||null===(o=e.filters)||void 0===o?void 0:o.hotelPrice)||(null===e||void 0===e||null===(n=e.sortBy)||void 0===n?void 0:n.name)||(null===e||void 0===e||null===(r=e.sortBy)||void 0===r?void 0:r.price)?(null===e||void 0===e||null===(_=e.sortBy)||void 0===_?void 0:_.name)||(null===e||void 0===e||null===(i=e.sortBy)||void 0===i?void 0:i.price)?function(){var t,o,n,r=(null===e||void 0===e||null===(t=e.sortBy)||void 0===t?void 0:t.name)?E.NAME:E.PRICE;return function(e,t){return e.sort(x(t))}(L(null===e||void 0===e?void 0:e.hotelList,null===e||void 0===e||null===(o=e.filters)||void 0===o?void 0:o.hotelName,null===e||void 0===e||null===(n=e.filters)||void 0===n?void 0:n.hotelPrice),r)}():L(null===e||void 0===e?void 0:e.hotelList,null===e||void 0===e||null===(l=e.filters)||void 0===l?void 0:l.hotelName,null===e||void 0===e||null===(c=e.filters)||void 0===c?void 0:c.hotelPrice):null===e||void 0===e?void 0:e.hotelList,d=null===u||void 0===u?void 0:u.map((function(t,o){return Object(f.jsx)(N,{hotel:t,totalNights:null===e||void 0===e?void 0:e.totalNumberOfNigts},o)})),p=function(e){s(Object(D.c)(e))};return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"sort-section",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("strong",{children:[b," ",e.totalNumberOfNigts," "]})}),Object(f.jsxs)("div",{className:"sort-button",children:[Object(f.jsxs)("div",{className:e.sortBy.name?"active":"",onClick:function(){return p(E.NAME)},children:[" ",h.SORT_BY_NAME]}),Object(f.jsxs)("div",{className:e.sortBy.price?"active":"",onClick:function(){return p(E.PRICE)},children:[" ",h.SORT_BY_PRICE]})]})]}),Object(f.jsx)("div",{className:"hotel-list",children:d})]})}),C=o(2),g=(o(78),function(e){var t=Object(a.b)(),o=(null===e||void 0===e?void 0:e.fromDate)?e.fromDate:T()().format(m),r=(null===e||void 0===e?void 0:e.toDate)?e.toDate:P(e.fromDate,1);Object(n.useEffect)((function(){_()}),[o]);var _=function(){y(e.fromDate,e.toDate)||t({type:C.ActionsEnum.UPDATE_TO_DATE,payload:{toDate:P(e.fromDate,1)}})};return Object(f.jsxs)("div",{className:"search-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:p.FROM}),Object(f.jsx)("input",{type:"date",id:"start",name:"from-date",value:o,onChange:function(e){var o;t({type:C.ActionsEnum.UPDATE_FROM_DATE,payload:{fromDate:null===e||void 0===e||null===(o=e.target)||void 0===o?void 0:o.value}})},min:"2021-05-05",max:"2021-12-31"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:p.TO})," ",Object(f.jsx)("input",{type:"date",id:"end",name:"to-date",value:r,onChange:function(e){var o;t({type:C.ActionsEnum.UPDATE_TO_DATE,payload:{toDate:null===e||void 0===e||null===(o=e.target)||void 0===o?void 0:o.value}})},readOnly:!o,min:o,max:"2021-12-31"})]}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{disabled:!y(e.fromDate,e.toDate),type:"button",value:"Search",onClick:function(){t(Object(D.a)(null===e||void 0===e?void 0:e.fromDate,null===e||void 0===e?void 0:e.toDate))}})})]})}),I=(o(79),function(){var e,t=Object(a.c)((function(e){return e}));return Object(f.jsxs)("div",{children:[Object(f.jsx)(g,Object(j.a)({},t)),(null===t||void 0===t||null===(e=t.hotelList)||void 0===e?void 0:e.length)>0&&Object(f.jsxs)("div",{className:"search-result-container",children:[Object(f.jsx)("div",{children:Object(f.jsx)(M,Object(j.a)({},t))}),Object(f.jsx)("div",{children:Object(f.jsx)(U,Object(j.a)({},t))})]})]})}),B=(o(80),function(){return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)("div",{className:"loading"})})}),k=function(){var e,t,o=Object(a.c)((function(e){return e})),n=(0===(null===o||void 0===o||null===(e=o.hotelList)||void 0===e?void 0:e.length)&&!o.isLoading&&(null===o||void 0===o||null===(t=o.error)||void 0===t||t.message),o.isLoading?Object(f.jsx)(B,{}):null);return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(I,{}),n]})})},S=o(6),w=o(35),W=o(36),K=o(16),H=o(37),F={isLoading:!1,error:{hasError:!1,message:"Please try after some time!"},fromDate:"",toDate:"",hotelList:[],filters:{hotelName:"",hotelPrice:""},sortBy:{name:!1,price:!1},totalNumberOfNigts:0},Y={key:"root",storage:o.n(H).a},q=Object(K.a)(Y,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.ActionsEnum.NETWORK_ERROR:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,hotelList:[],error:{hasError:!0,message:"Please try After Some time"}});case C.ActionsEnum.UPDATE_FROM_DATE:return Object(j.a)(Object(j.a)({},e),{},{fromDate:t.payload.fromDate});case C.ActionsEnum.UPDATE_TO_DATE:var o;return Object(j.a)(Object(j.a)({},e),{},{toDate:null===t||void 0===t||null===(o=t.payload)||void 0===o?void 0:o.toDate});case C.ActionsEnum.UPDATE_HOTEL_LIST:var n,r,_;return Object(j.a)(Object(j.a)({},e),{},{hotelList:null===t||void 0===t||null===(n=t.payload)||void 0===n?void 0:n.hotelList,filters:{hotelName:"",hotelPrice:""},sortBy:{name:!1,price:!1},totalNumberOfNigts:R(null===t||void 0===t||null===(r=t.payload)||void 0===r?void 0:r.fromDate,null===t||void 0===t||null===(_=t.payload)||void 0===_?void 0:_.toDate)});case C.ActionsEnum.UPDATE_FILTERS:var i,a,l,c;return Object(j.a)(Object(j.a)({},e),{},{filters:{hotelName:null===t||void 0===t||null===(i=t.payload)||void 0===i||null===(a=i.filters)||void 0===a?void 0:a.hotelName,hotelPrice:null===t||void 0===t||null===(l=t.payload)||void 0===l||null===(c=l.filters)||void 0===c?void 0:c.hotelPrice}});case C.ActionsEnum.UPDATE_SORT_BY:var s,u,d,p;return Object(j.a)(Object(j.a)({},e),{},{sortBy:{name:null===t||void 0===t||null===(s=t.payload)||void 0===s||null===(u=s.sortBy)||void 0===u?void 0:u.name,price:null===t||void 0===t||null===(d=t.payload)||void 0===d||null===(p=d.sortBy)||void 0===p?void 0:p.price}});case C.ActionsEnum.SHOW_LOADER:var v;return Object(j.a)(Object(j.a)({},e),{},{isLoading:null===t||void 0===t||null===(v=t.payload)||void 0===v?void 0:v.loaderStatus});default:return e}})),G=Object(S.createStore)(q,Object(w.composeWithDevTools)(Object(S.applyMiddleware)(W.a))),J=Object(K.b)(G),V=o(38);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(a.a,{store:G,children:Object(f.jsx)(V.a,{loading:null,persistor:J,children:Object(f.jsx)(k,{})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.4209a4b8.chunk.js.map