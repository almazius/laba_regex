﻿(()=>{"use strict";var __webpack_modules__={51620:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tooltips:()=>tooltips});var _shared_lib_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(40906),_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49535),_web_lib_fx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35676),_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(95724),_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15544),_web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87481),tooltips={show:function show(el,options){if(window.AudioPage&&window.AudioPage.forceFix&&window.AudioPage.forceFix(),el.hidetimer)return el.hidetimer&&clearTimeout(el.hidetimer),void(el.hidetimer=0);if(el.tt){if("object"==typeof el.tt&&(el.tt.shown=!1),el.ttimer&&clearTimeout(el.ttimer),(0,_shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options.text)){var ttText=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domByClass)(el.tt.container,"tt_text");if(ttText){var text=options.text();if(!text)return;ttText.innerHTML=text}}var opts=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(el.tt.opts?(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.clone)(el.tt.opts):{},options||{}),isNewTT=void 0!==opts.dir,canshow;if(!el.tt.el)return el.tt="show",void(el.ttimer=setTimeout((function(){if(el.tt.el)return opts.showdt=0,void tooltips.show(el,opts);el.tt="shownow"}),opts.showdt||0));if(opts.js){var evalString="(function(){return function(){var tip=this;"+opts.js+"};})()";try{var evalResult=eval(evalString),evalApply=evalResult.apply(el.tt);canshow=!1!==evalApply}catch(_){(0,_web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__.logEvalError)(_,evalString)}}else canshow=!0;canshow&&((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isVisible)(el.tt.container)?el.tt.showing||(0,_web_lib_fx__WEBPACK_IMPORTED_MODULE_2__.animate)(el.tt.container,{opacity:1},void 0!==opts.showsp?opts.showsp:200):el.ttimer=setTimeout((function(){var _=el.tt.container;if(!(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isVisible)(_)){var e=opts.forcexy?opts.forcexy:(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getXY)(el),t=opts.forcesize?opts.forcesize:(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(el,!1,!0),o=opts.toup,i=vk.rtl&&!opts.asrtl||opts.asrtl&&!vk.rtl,r=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ge)("page_header_wrap")&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isAncestor)(el,"page_layout")?(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)("page_header_wrap"):(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ge)("ads-app-header")?(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)("ads-app-header"):[0,0];if(t[0]||t[1]){_.style.opacity=0,opts.width&&(_.style.width=opts.width+"px"),opts.maxWidth&&(_.style["max-width"]=opts.maxWidth+"px"),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.show)(_),isNewTT||(_.firstChild.className="toup"+(opts.toup?1:""));var l=opts.shift;(0,_shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(l)&&(l=l()),void 0!==l&&2==l.length&&l.push(l[1]);var s=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(_),n=bodyNode.scrollTop||htmlNode.scrollTop||0,d=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(_),a=e[1]-d[1]-l[1]-r[1]-n,E=lastWindowHeight-(e[1]+t[1]+d[1]+l[2])+n,b=a<0,c=E<0,p=a<0;b&&c?(a>E&&a+n>0&&(o=!0,p=!1),o&&p?o=!1:o||!c||p||(o=!0)):o&&b?o=!1:o||!c||b||(o=!0);var w=opts.needLeft||(opts.black||opts.checkLeft)&&window.lastWindowWidth&&lastWindowWidth-(e[0]+(i?t[0]+l[0]:d[0]-l[0]))<1,P="";opts.forceright&&(w=0),opts.forcetodown&&(o=!1),opts.forcetoup&&(o=!0),isNewTT?((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.removeClass)(_,"tt_up"),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.removeClass)(_,"tt_down"),P=opts.dir&&(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.inArray)(opts.dir,["up","down","left","right"])?"tt_"+opts.dir:"tt_"+(o?"down":"up"),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.addClass)(_,P),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.toggleClass)(_,"toleft",!!w),d=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(_)):(P="toup"+(o?1:""),(o!=opts.toup||w)&&(P+=w?" toleft":"",d=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(_)),_.firstChild.className=P,(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.addClass)(_,o?"tt_toup":""));var O,m=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getXY)(s);if(e[0]-=m[0],e[1]-=m[1],el.tt.zIndexEls=[],!opts.noZIndex)for(;s&&s!=bodyNode&&!(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hasClass)(s,"scroll_fix");){var u=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getStyle)(s,"zIndex")),M=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(s.ttCount);if(u&&!M)break;(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(s,"zIndex",opts.zIndex||100),el.tt.zIndexEls.push(s),s.ttCount=M+1,s=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(s)}var D=(O=isNewTT?!(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.inArray)(opts.dir,["left","right"])||opts.forcetoup||opts.forcetodown?o?e[1]-(d[1]+l[1]):e[1]+t[1]+l[2]:e[1]-Math.floor(d[1]/2)-l[1]:e[1]+(o?-(d[1]+l[1]):t[1]+l[2]))+(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(opts.slide)*(o?-1:1),h=e[0]+(i?l[0]+t[0]-d[0]:o?-l[0]:-(l[3]||l[0]));w&&(h-=(d[0]-(opts.reverseOffset||39))*(i?-1:1)),opts.center&&((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.addClass)(_,"tocenter"),d[0]!=t[0]&&(h-=i?0:(d[0]-t[0])/2));var f=h+(i?-1:1)*(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(opts.slideX);if(opts.showIfFit&&(h+m[0]<0||h+m[0]+d[0]>lastWindowWidth||O+m[1]<0||O+m[1]+d[1]>lastWindowHeight))return(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(el.tt.container);el.tt.showing=!0,(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(_,{top:D,left:f});var v={opacity:1};f!=h&&(v.left=h),D!=O&&(v.top=O),(0,_web_lib_fx__WEBPACK_IMPORTED_MODULE_2__.animate)(_,v,void 0!==opts.showsp?opts.showsp:200,(function(){el.tt&&el.tt.showing&&(el.tt.showing=!1),opts.onShowEnd&&opts.onShowEnd(),"object"==typeof el.tt&&el.tt&&(el.tt.shown=!0)})),opts.onShowStart&&opts.onShowStart(el.tt)}else(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(el.tt.container)}}),opts.showdt||0))}},clearZindex:function(_){_.tt&&_.tt.opts&&_.tt.zIndexEls&&(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.each)(_.tt.zIndexEls,(function(){var _=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.intval)(this.ttCount);_<=1?((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(this,"zIndex",""),this.ttCount=0):this.ttCount=_-1}))},hide:function(_,e){if("shownow"!==_.tt){if(_.tt&&"object"==typeof _.tt&&(_.tt.shown=!1),(e||{}).fasthide)return clearTimeout(_.hidetimer),clearTimeout(_.ttimer),_.hidetimer=0,_.tt&&_.tt.el&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(_.tt.container),void tooltips.clearZindex(_);_.hidetimer||(_.hidetimer=setTimeout((function(){if(_.hidetimer=0,clearTimeout(_.ttimer),!_.tt||"hide"==_.tt||_.tt.el&&!(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isVisible)(_.tt.container))return _.tt&&_.tt.el&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(_.tt.container),void tooltips.clearZindex(_);var t=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(_.tt.opts?(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.clone)(_.tt.opts):{},e||{});_.tt.el?_.ttimer=setTimeout((function(){t.hasover||(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(_.tt.container,{pointerEvents:"none"}),(0,_web_lib_fx__WEBPACK_IMPORTED_MODULE_2__.fadeOut)(_.tt.container,void 0!==t.showsp?t.showsp:200,(function(){_.tt&&_.tt.container&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(_.tt.container,{pointerEvents:"auto"}),tooltips.clearZindex(_)})),t.onHide&&t.onHide()}),t.hidedt||0):_.tt="hide"}),1))}},hideAll:function(_){if(cur.tooltips)for(var e=0;e<cur.tooltips.length;++e){var t=cur.tooltips[e];_&&!(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isAncestor)(t.el,_)||(t.opts.forceNoHide||(t.el&&t.el.ttimer&&clearTimeout(t.el.ttimer),t.hide({fasthide:!0})))}},rePositionTT:function(_){if(_){var e=_.opts,t=_.el,o=_.container,i=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getXY)(t),r=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(t,!1,!0);if(r[0]||r[1]){var l=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getSize)(o),s=e.needLeft||e.black&&lastWindowWidth&&lastWindowWidth-(i[0]+l[0])<1,n=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hasClass)(o.firstChild,"toup1")||e.toup||(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hasClass)(o,"tt_down"),d=e.shift,a=vk.rtl&&!e.asrtl||e.asrtl&&!vk.rtl;(0,_shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(d)&&(d=d());var E=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.getXY)((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(o));i[0]-=E[0],i[1]-=E[1];var b=i[0]+(a?d[0]+r[0]-l[0]:n?-d[0]:-(d[3]||d[0]));s&&(b-=l[0]-39),e.center&&l[0]!=r[0]&&(b-=(l[0]-r[0])/2);var c=i[1]+(n?-(l[1]+d[1]):r[1]+d[2]);(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(o,{left:b,top:c})}}},rePositionAll:function(){if(cur.tooltips)for(var _=0;_<cur.tooltips.length;++_){var e=cur.tooltips[_].opts;e&&(e.nohideover||e.nohide)&&tooltips.rePositionTT(cur.tooltips[_])}},destroy:function(_){if(_){if(clearTimeout(_.ttimer),clearTimeout(_.hidetimer),_.tt&&_.tt.el){if(_.tt.onClean&&_.tt.onClean(),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.cleanElems)(_.tt.container),(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(_,"mouseout",_.tthide),(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(_,"click",_.tthide),(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(window,"scroll",_.tthide),(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(document,"click",_.tthide),_.tt.container){var e=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(_.tt.container);e&&e.removeChild(_.tt.container)}tooltips.clearZindex(_),_.tt.el=!1}(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.removeAttr)(_,"tt","tthide","ttimer","hidetimer")}},destroyAll:function(_){if(cur.tooltips){for(var e=0;e<cur.tooltips.length;++e)_&&!(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.isAncestor)(cur.tooltips[e].el,_)||cur.tooltips[e].destroy();_||delete cur.tooltips}},create:function(_,e){var t;void 0!==e.shift&&2==e.shift.length&&e.shift.push(e.shift[1]);var o=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)({shift:e.black?[11,8,8]:void 0!==e.dir?[2,8,8]:[2,3,3],toup:!0},e);e.black&&!o.dir&&(o.dir="auto",o.typeClass="tt_black"),_.tthide||(_.tthide=tooltips.hide.pbind(_),e.nohide||((0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(_,"mouseout",_.tthide),(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(window,"scroll",_.tthide),e.hideOnTooltipContainerClick||(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(_,"click",_.tthide),e.hasover||(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(document,"click",_.tthide)));var i=o.no_shadow?" tt_no_shadow":"";if(!o.content){if(_.tt&&!o.force)return _.hidetimer?(clearTimeout(_.hidetimer),void(_.hidetimer=0)):void 0;if(!o.text){if(!o.url)return;return clearTimeout(_.ttimer),void(_.ttimer=setTimeout((function(){_.tt="show",ajax.post(o.url,o.params||{},{onDone:function(e,t){var i=_.tt,r=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.clone)(o);(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(r,{content:e||"",js:t}),tooltips.create(_,r),"shownow"==i&&tooltips.show(_,(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(r,{showdt:0}))},onFail:function(){return!0},cache:o.cache||0}),tooltips.show(_,o)}),o.ajaxdt||0))}o.content='<div class="tt_text">'+((0,_shared_lib_common__WEBPACK_IMPORTED_MODULE_0__.isFunction)(o.text)?o.text():o.text),o.link&&(o.content+='<br /><a style="display: flex; margin-top: 8px" target="_blank" href="'+o.link.link+'">'+o.link.text+"</a>"),o.content+="</div>"}var r=(void 0!==o.dir?"tt_w":"tt")+" "+(void 0!==o.dir?o.typeClass||"tt_default":"")+" "+(o.className||"");if(_.tt&&_.tt.el){var l=_.tt.container;_.tt.onClean&&_.tt.onClean(),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.geByClass1)("wrapped",l).innerHTML=o.content,(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)(_.tt,{opts:o,show:tooltips.show.pbind(_,e)}),l.className=r,(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(l)}else{var s;s=o.black?(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ce)("div",{innerHTML:o.content,className:r},{display:"none"}):void 0!==o.dir?(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ce)("div",{innerHTML:'<div class="wrapped">'+o.content+"</div>",className:r+i},{display:"none"}):(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ce)("div",{innerHTML:`<table cellspacing="0" cellpadding="0">\n    <tr><td colspan="3" class="tt_top"><div class="top_pointer"></div></td></tr>\n    <tr>\n      <td class="side_sh"></td>\n      <td class="outer"><table cellspacing="0" cellpadding="0">\n        <tr><td class="side_sh"></td>\n          <td class="wrapped">${o.content}</td>\n        <td class="side_sh"></td></tr>\n        <tr><td colspan="3"><div class="bottom_sh"></div></td></tr>\n      </table></td>\n      <td class="side_sh"></td>\n    </tr>\n    <tr><td colspan="3" class="tt_bottom"><div class="bottom_sh"></div><div class="bottom_pointer${i}"></div></td></tr>\n  </table>`,className:r},{display:"none"});var n=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domPN)(_);if(e.appendEl)n=e.appendEl;else if(e.appendParentCls)n=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domClosest)(e.appendParentCls,n);else if(!(n=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domClosest)("tt_w",n)||(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domClosest)("tt_default",n)))do{n=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.domClosestPositioned)(n||_,{noOverflow:!0})}while((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hasClass)(n,"tt_noappend"));n||(n=bodyNode),n.appendChild(s),t=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_3__.extend)({el:_,opts:o,show:tooltips.show.pbind(_,e),hide:_.tthide,destroy:tooltips.destroy.pbind(_),container:s},o.tip||{}),o.nohideover||o.text&&!o.hasover||((0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(s,"mouseover",t.show),(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(s,"mouseout",t.hide)),o.hideOnTooltipContainerClick&&(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_1__.addEvent)(s,"click",t.hide),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.removeClass)(t.container,"fixed"),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.setStyle)(t.container,{position:"absolute"}),_.tt=t,cur.tooltips||(cur.tooltips=[]),cur.tooltips.push(t)}o.init&&o.init(t)},addAudio:function(_,e,t,o){ajax.post("audio.php",{act:"a_add",oid:e,aid:t,hash:o},{onDone:function(){_.parentNode.replaceChild((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.ce)("div",{className:"fl_r add_audio_plus done"}),_)},onFail:function(){return!0},showProgress:function(){(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(_.nextSibling),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.show)(_.previousSibling)},hideProgress:function(){(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.hide)(_.previousSibling),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_4__.show)(_.nextSibling)}})}}},31522:(_,e,t)=>{var o=t(51620);window.tooltips=o.tooltips;try{window.stManager.done(window.jsc("web/tooltips.js"))}catch(_){}}},__webpack_module_cache__={},deferred,leafPrototypes,getProto;function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[_]={id:_,loaded:!1,exports:{}};return __webpack_modules__[_].call(t.exports,t,t.exports,__webpack_require__),t.loaded=!0,t.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(_,e,t,o)=>{if(!e){var i=1/0;for(n=0;n<deferred.length;n++){for(var[e,t,o]=deferred[n],r=!0,l=0;l<e.length;l++)(!1&o||i>=o)&&Object.keys(__webpack_require__.O).every((_=>__webpack_require__.O[_](e[l])))?e.splice(l--,1):(r=!1,o<i&&(i=o));if(r){deferred.splice(n--,1);var s=t();void 0!==s&&(_=s)}}return _}o=o||0;for(var n=deferred.length;n>0&&deferred[n-1][2]>o;n--)deferred[n]=deferred[n-1];deferred[n]=[e,t,o]},__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},getProto=Object.getPrototypeOf?_=>Object.getPrototypeOf(_):_=>_.__proto__,__webpack_require__.t=function(_,e){if(1&e&&(_=this(_)),8&e)return _;if("object"==typeof _&&_){if(4&e&&_.__esModule)return _;if(16&e&&"function"==typeof _.then)return _}var t=Object.create(null);__webpack_require__.r(t);var o={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var i=2&e&&_;"object"==typeof i&&!~leafPrototypes.indexOf(i);i=getProto(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>_[e]));return o.default=()=>_,__webpack_require__.d(t,o),t},__webpack_require__.d=(_,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(_,t)&&Object.defineProperty(_,t,{enumerable:!0,get:e[t]})},__webpack_require__.e=()=>Promise.resolve(),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"==typeof window)return window}}(),__webpack_require__.hmd=_=>((_=Object.create(_)).children||(_.children=[]),Object.defineProperty(_,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+_.id)}}),_),__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},(()=>{var _={55954:0};__webpack_require__.O.j=e=>0===_[e];var e=(e,t)=>{var o,i,[r,l,s]=t,n=0;for(o in l)__webpack_require__.o(l,o)&&(__webpack_require__.m[o]=l[o]);if(s)var d=s(__webpack_require__);for(e&&e(t);n<r.length;n++)i=r[n],__webpack_require__.o(_,i)&&_[i]&&_[i][0](),_[r[n]]=0;return __webpack_require__.O(d)},t=self.webpackChunkvk=self.webpackChunkvk||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var __webpack_exports__=__webpack_require__.O(void 0,[76429,22897,68592],(()=>__webpack_require__(31522)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();