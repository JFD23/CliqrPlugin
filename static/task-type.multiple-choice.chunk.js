(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{365:function(e,n,t){"use strict";t.r(n),n.default=function(e){if(!e)return"";var n=window.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""}},368:function(e,n,t){"use strict";t.r(n);var i=t(7);n.default=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.pop(),new i.SafeString(n.join(""))}},369:function(e,n,t){"use strict";t.r(n);var i=t(1),l=t.n(i),r=t(3),c=t.n(r),o=t(12);function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){s(e,n,t[n])})}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=o.a.extend({tagName:"section",className:"cliqr--multiple-choice-assignment-view",initialize:function(e){var n=e.voting;o.a.prototype.initialize.call(this),this.voting=n,this.listenTo(this.voting,"change",this.render)},template:t(414),context:function(){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=e.get("id"),i=function(e,n){for(var t=[],i=0,l=e.get("task").answers.length;i<l;++i)t[i]=0;return c.a.reduce(n&&n.get("responses"),function(e,n){return c.a.each(n.answer,function(n){return e[n]++}),e},t)}(e,n),l=n.toJSON(),r=c.a.reduce(i,function(e,n){return e+n},0),o="single"===e.get("task").type,s=n.get("responses").length;return a({},l,{task:c.a.first(l.test.tasks),isRunning:n.isRunning(),answers:c.a.map(e.get("task").answers,function(e,n){var l=0;return o&&r?l=i[n]/r:!o&&s&&(l=i[n]/s),a({},e,{id:"".concat(t,"-").concat(n),isCorrect:!!e.score,votes_count:i[n],percent:Math.floor(100*l)})}),isSingleSelect:o,votes_count:r})}(this.model,this.voting)},afterTemplate:function(){this.voting.isRunning()||this.postRender()},postRender:function(){this.voting.isRunning()||this.enhanceChart(this.context());var e=window.MathJax.Hub;this.$(".cliqr--mc-description, td.text").each(function(n,t){return e.Queue(["Typeset",e,t])})},enhanceChart:function(e){this.$(".chart").remove();var n=e.answers,t=c.a.max(c.a.pluck(n,"votes_count")),i=c.a.map(n,function(e){return t>0?e.votes_count/t*150:0});this.$(".graph").append(function(e){return n[e].votes_count?l.a.$('<span class="chart"></span>').css({width:i[e],marginLeft:t?150-i[e]:0}):null})}}),p=t(413),h=t.n(p),d=o.a.extend({tagName:"span",className:"cliqr--component-text-input",template:h.a,events:{"keypress input":"onTextUpdate","change input":"onTextUpdate","input input":"onTextUpdate"},initialize:function(e){o.a.prototype.initialize.call(this),this.key=e.key,this.placeholderKey=e.placeholderKey,this.listenTo(this.model,"change:".concat(this.key),this.onModelChange),this.listenTo(this.model,"change:".concat(this.placeholderKey),this.render)},context:function(){return{key:this.key,placeholder:this.placeholderKey&&this.model.get(this.placeholderKey),value:this.model.get(this.key)}},onModelChange:function(e,n){this.model.set(this.key,n)},onTextUpdate:function(e){this.model.set(this.key,l.a.$(e.target).val())}}),m=t(412),f=t.n(m),v=o.a.extend({tagName:"div",className:"cliqr--component-wysiwyg",template:f.a,events:{"keypress textarea":"onTextUpdate","change textarea":"onTextUpdate","input textarea":"onTextUpdate"},initialize:function(e){o.a.prototype.initialize.call(this),this.key=e.key,this.listenTo(this.model,"change:".concat(this.key),this.onModelChange)},remove:function(){this.removeWysiwyg(),o.a.prototype.remove.call(this)},editor:null,removeWysiwyg:function(){this.editor&&(this.editor.removeAllListeners(),this.editor=null)},context:function(){return{key:this.key,value:this.model.get(this.key)}},afterTemplate:function(){var e=this.$("textarea").get(0);if(e&&window.STUDIP.wysiwyg){window.STUDIP.wysiwyg.replace(e);var n=window.CKEDITOR.dom.element.get(e);n&&(this.editor=n.getEditor(),this.editor.on("change",this.onEditorChange,this),this.editor.once("focus",this.onEditorFocus,this))}},onEditorChange:function(e){var n=e.editor;this.model.set(this.key,n.getData())},onEditorFocus:function(e){var n=e.editor;this.$(".cke_toolbox_collapser_min").length&&n.execCommand("toolbarCollapse")},onTextUpdate:function(e){this.model.set(this.key,l.a.$(e.target).val())},onModelChange:function(e,n){n!==this.model.get(this.key)&&this.render()}});function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){w(e,n,t[n])})}return e}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=[{id:"custom",text:"Individuell"},{id:"yesno",text:"Ja·Nein"},{id:"truefalse",text:"Wahr·Falsch"},{id:"evaluation",text:"Evaluation"},{id:"grading",text:"Benotung"}],y=o.a.extend({tagName:"section",$selectedSubtype:"custom",$custom:null,events:{"click .js-add":"onClickAdd","click .js-remove":"onClickRemove","submit form":"onSubmitForm","click .js-cancel":"onClickCancel","keypress input.choice":"onChoiceUpdate","change input.choice":"onChoiceUpdate","input input.choice":"onChoiceUpdate",'change input[name="select-type"]':"onChangeMultiSingle","click .cliqr--mc-subtypes button":"onSelectSubtype"},initialize:function(e){var n=this;o.a.prototype.initialize.call(this),this.type=e.type,this.taskGroup=e.taskGroup;var t=new d({model:this.model,key:"title",placeholderKey:"description"}),i=new v({model:this.model,key:"description"});this.setView(".cliqr--mc-title",t),this.setView(".cliqr--mc-description",i),this.listenTo(this.model,"change:task",this.render),this.listenTo(this.model,"invalid",function(){return n.render({force:!0})})},template:t(411),context:function(){var e=this;return{taskGroup:this.taskGroup&&this.taskGroup.toJSON(),task:this.model.toJSON(),error:this.model.validationError||null,singleSelect:"single"===this.model.getSelectType(),$selectedSubtype:this.$selectedSubtype,subtypes:b.map(function(n){return g({},n,{selected:n.id===e.$selectedSubtype})})}},onClickAdd:function(e){e.preventDefault(),this.model.addAnswer()},onClickRemove:function(e){e.preventDefault();var n=parseInt(l.a.$(e.target).closest(".choice-input").find("input[name]").attr("name").match(/\d+/)[0],10);this.model.removeAnswer(n)},onChoiceUpdate:function(e){var n=l.a.$(e.target),t=parseInt(n.attr("name").match(/\d+/)[0],10),i=n.val();this.model.updateAnswer(t,{text:i})},onChangeMultiSingle:function(e){var n=e.target,t=l.a.$(n).prop("checked")?"multiple":"single";this.model.setSelectType(t)},onSelectSubtype:function(e){var n=function(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e.target.classList).filter(function(e){return e.match(/^js-type-/)});if(n.length){var t=n[0].substr(8);b.some(function(e){return e.id===t})&&this.selectSubtype(t)}},selectSubtype:function(e){var n=this.$selectedSubtype;if(e!==n){switch(this.$selectedSubtype=e,"custom"===n&&(this.$custom=g({},this.model.attributes)),e){case"custom":this.model.set(g({},this.$custom));break;case"yesno":this.fillWithSubtype(["ja","nein"]);break;case"truefalse":this.fillWithSubtype(["wahr","falsch"]);break;case"evaluation":this.fillWithSubtype(["trifft voll zu","trifft eher zu","weder noch","trifft eher nicht zu","trifft gar nicht zu"]);break;case"grading":this.fillWithSubtype(["sehr gut","gut","befriedigend","ausreichend","mangelhaft","ungenügend"])}this.render()}},fillWithSubtype:function(e){var n=this;this.model.clearAnswers(),this.model.setSelectType("single"),e.forEach(function(e){return n.model.addAnswer({text:e})})}}),q=y.extend({className:"cliqr--multiple-choice-create-view",onSubmitForm:function(e){e.preventDefault(),this.model.isValid()&&this.trigger("newTask",this.model)},onClickCancel:function(e){e.preventDefault(),this.trigger("cancel")}}),x=y.extend({className:"cliqr--multiple-choice-edit-view",onSubmitForm:function(e){e.preventDefault(),this.model.isValid()&&this.trigger("editTask",this.model)},onClickCancel:function(e){e.preventDefault(),this.trigger("cancel",this.model)}}),k=o.a.extend({className:"cliqr--multiple-choice-poll-view",events:{"submit form":"onSubmitForm"},initialize:function(e){o.a.prototype.initialize.call(this),this.voting=e.voting},template:t(410),context:function(){return e=this.model,t=(n=this.voting).getTask(),{response:e.toJSON(),voting:c.a.omit(n.toJSON(),"task"),task:t.toJSON(),answers:t.get("task").answers,isSingleSelect:"single"===t.get("task").type};var e,n,t},postRender:function(){var e=window.MathJax.Hub;this.$(".description, .text").each(function(n,t){return e.Queue(["Typeset",e,t])})},onSubmitForm:function(e){e.preventDefault();var n=l.a.$(e.target).closest("form").serializeArray();this.model.set("response",{answer:c.a.map(n,function(e){return parseInt(e.value,10)})}),this.voting.trigger("newResponse",this.model,this.voting)}});function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){C(e,n,t[n])})}return e}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O=l.a.View.extend({tagName:"section",className:"cliqr--multiple-choice-show-view",render:function(){var e,n,i=t(409);return this.$el.html(i((e=this.model,n=e.get("id"),S({},e.toJSON(),{answers:c.a.map(e.get("task").answers,function(e,t){return S({},e,{id:"".concat(n,"-").concat(t),isCorrect:!!e.score})}),isSingleSelect:"single"===e.get("task").type})))),this},postRender:function(){var e=window.MathJax.Hub;this.$(".cliqr--mc-description, td.text").each(function(n,t){return e.Queue(["Typeset",e,t])})}});function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){A(e,n,t[n])})}return e}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var E=t(78).a.extend({defaults:{type:"multiple-choice",task:{type:"single",answers:[]}},validate:function(e,n){var t=e.description,i=e.task;if(!t||c.a.isEmpty(t))return"Der Fragetext darf nicht leer sein.";if(window.STUDIP.wysiwyg&&t.trim()===window.STUDIP.wysiwyg.htmlMarker)return"Der Fragetext darf nicht leer sein.";if(!i)return"Task fehlt.";var l=i.answers,r=void 0!==l&&l;return!r||c.a.isEmpty(r)?"Es wird mindestens eine Antwort benötigt.":null},addAnswer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=this.get("task"),i=j(t.answers).concat([T({text:"",score:0,feedback:""},e)]);this.set("task",T({},t,{answers:i}),n)},removeAnswer:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var n=this.get("task"),t=j(n.answers.slice(0,e)).concat(j(n.answers.slice(e+1)));this.set("task",T({},n,{answers:t}))},updateAnswer:function(e,n){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var t=this.get("task"),i=t.answers[e],l=j(t.answers.slice(0,e)).concat([T({},i,n)],j(t.answers.slice(e+1)));this.set("task",T({},t,{answers:l}),{silent:!0})},getAnswers:function(){return this.get("task").answers},setAnswers:function(e){this.set("task",T({},this.get("task"),{answers:e}),{silent:!0})},clearAnswers:function(){this.setAnswers([])},setSelectType:function(e){"single"!==e&&"multiple"!==e||this.set("task",T({},this.get("task"),{type:e}),{silent:!0})},getSelectType:function(){return this.get("task").type}}),U=t(395).a.extend({defaults:{}});function R(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t(408);var _=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.task=n}var n,t;return n=e,(t=[{key:"getAssignmentView",value:function(e){return new u({model:this.task,voting:e,type:this})}},{key:"getShowView",value:function(){return new O({model:this.task,type:this})}},{key:"getEditView",value:function(){return new x({model:this.wrapTask(this.task),type:this})}},{key:"getCreateView",value:function(e){return new q({model:this.createTask(),taskGroup:e,type:this})}},{key:"getPollView",value:function(e){return new k({model:this.createResponse(e),voting:e,type:this})}},{key:"createTask",value:function(e){var n=new E;return c.a.times(4,function(){return n.addAnswer()}),n}},{key:"wrapTask",value:function(e){return new E(e.attributes)}},{key:"createResponse",value:function(e){return new U({voting_id:e.id,task_id:e.getTask().id})}}])&&R(n.prototype,t),e}();c.a.extend(_.prototype,l.a.Events),n.default=_},391:function(e,n,t){"use strict";t.r(n),t(7);var i="A".charCodeAt(0);n.default=function(e){return String.fromCharCode(i+parseInt(e,10)%26)}},392:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,i=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var l,r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(l=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(l)+")")})}},393:function(e,n,t){var i,l,r={},c=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===l&&(l=i.apply(this,arguments)),l}),o=function(e){var n={};return function(e){if("function"==typeof e)return e();if(void 0===n[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}}(),a=null,s=0,u=[],p=t(392);function h(e,n){for(var t=0;t<e.length;t++){var i=e[t],l=r[i.id];if(l){l.refs++;for(var c=0;c<l.parts.length;c++)l.parts[c](i.parts[c]);for(;c<i.parts.length;c++)l.parts.push(w(i.parts[c],n))}else{var o=[];for(c=0;c<i.parts.length;c++)o.push(w(i.parts[c],n));r[i.id]={id:i.id,refs:1,parts:o}}}}function d(e,n){for(var t=[],i={},l=0;l<e.length;l++){var r=e[l],c=n.base?r[0]+n.base:r[0],o={css:r[1],media:r[2],sourceMap:r[3]};i[c]?i[c].parts.push(o):t.push(i[c]={id:c,parts:[o]})}return t}function m(e,n){var t=o(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var l=o(e.insertInto+" "+e.insertAt.before);t.insertBefore(n,l)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function v(e){var n=document.createElement("style");return e.attrs.type="text/css",g(n,e.attrs),m(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function w(e,n){var t,i,l,r;if(n.transform&&e.css){if(!(r=n.transform(e.css)))return function(){};e.css=r}if(n.singleton){var c=s++;t=a||(a=v(n)),i=q.bind(null,t,c,!1),l=q.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",g(n,e.attrs),m(e,n),n}(n),i=function(e,n,t){var i=t.css,l=t.sourceMap,r=void 0===n.convertToAbsoluteUrls&&l;(n.convertToAbsoluteUrls||r)&&(i=p(i)),l&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */");var c=new Blob([i],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(c),o&&URL.revokeObjectURL(o)}.bind(null,t,n),l=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(n),i=function(e,n){var t=n.css,i=n.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),l=function(){f(t)});return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else l()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=c()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=d(e,n);return h(t,n),function(e){for(var i=[],l=0;l<t.length;l++){var c=t[l];(o=r[c.id]).refs--,i.push(o)}for(e&&h(d(e,n),n),l=0;l<i.length;l++){var o;if(0===(o=i[l]).refs){for(var a=0;a<o.parts.length;a++)o.parts[a]();delete r[o.id]}}}};var b,y=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function q(e,n,t,i){var l=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(n,l);else{var r=document.createTextNode(l),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(r,c[n]):e.appendChild(r)}}},394:function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t,i=e[1]||"",l=e[3];if(!l)return i;if(n&&"function"==typeof btoa){var r=(t=l,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"),c=l.sources.map(function(e){return"/*# sourceURL="+l.sourceRoot+e+" */"});return[i].concat(c).concat([r]).join("\n")}return[i].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},l=0;l<this.length;l++){var r=this[l][0];"number"==typeof r&&(i[r]=!0)}for(l=0;l<e.length;l++){var c=e[l];"number"==typeof c[0]&&i[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="("+c[2]+") and ("+t+")"),n.push(c))}},n}},395:function(e,n,t){"use strict";var i=t(1),l=t.n(i),r=t(3),c=t.n(r),o={create:"create",update:"update",delete:"destroy",read:"show"},a=l.a.Model.extend({sync:function(e,n,t){return c.a.extend(t,{url:"function"==typeof n.url?n.url(o[e]):void 0}),l.a.sync(e,n,t)},url:function(e){var n=null!=this.id?"/"+this.id:"";return cliqr.config.PLUGIN_URL+"responses/"+e+n}});n.a=a},396:function(e,n,t){"use strict";t.r(n);var i=t(7);n.default=function(e,n){return n.hash,e=Object(i.escapeExpression)(e),new i.SafeString(e)}},407:function(e,n,t){(e.exports=t(394)(!1)).push([e.i,"#cliqr-container .cliqr--votings-compare .cliqr--multiple-choice-assignment-view h1, #cliqr-poll-container .cliqr--votings-compare .cliqr--multiple-choice-assignment-view h1 {\n    display: none;\n  }\n\n  #cliqr-container .cliqr--multiple-choice-assignment-view .cliqr--mc-description, #cliqr-poll-container .cliqr--multiple-choice-assignment-view .cliqr--mc-description {\n      font-weight: 400;\n      font-size: 2.75em;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-assignment-view table, #cliqr-poll-container .cliqr--multiple-choice-assignment-view table {\n      font-size: 2em;\n      line-height: 1.5;\n      overflow: hidden;\n      border-collapse: collapse;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-assignment-view table td, #cliqr-poll-container .cliqr--multiple-choice-assignment-view table td {\n        padding-top: .75em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-assignment-view table .nominal, #cliqr-poll-container .cliqr--multiple-choice-assignment-view table .nominal {\n        color: #999999;\n        width: 1em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-assignment-view table .text, #cliqr-container .cliqr--multiple-choice-assignment-view table .graph, #cliqr-container .cliqr--multiple-choice-assignment-view table .percent, #cliqr-poll-container .cliqr--multiple-choice-assignment-view table .text, #cliqr-poll-container .cliqr--multiple-choice-assignment-view table .graph, #cliqr-poll-container .cliqr--multiple-choice-assignment-view table .percent {\n        padding-left: 0.75em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-assignment-view .chart, #cliqr-poll-container .cliqr--multiple-choice-assignment-view .chart {\n      display: inline-block;\n      background-color: #ffbd33;\n      box-shadow: 1px 1px 1px 0px #f26e00;\n\n      height: 1.5em;\n      margin-left: 0.5em;\n      vertical-align: middle;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-assignment-view .count, #cliqr-poll-container .cliqr--multiple-choice-assignment-view .count {\n      padding-left: 0.25em;\n      color: #f26e00;\n      text-align: right;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-assignment-view .percent, #cliqr-poll-container .cliqr--multiple-choice-assignment-view .percent {\n      color: #999999;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-show-view .cliqr--mc-description, #cliqr-poll-container .cliqr--multiple-choice-show-view .cliqr--mc-description {\n      font-weight: 400;\n      font-size: 2.75em;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-show-view table, #cliqr-poll-container .cliqr--multiple-choice-show-view table {\n      font-size: 2em;\n      line-height: 1.5;\n      overflow: hidden;\n      border-collapse: collapse;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-show-view table td, #cliqr-poll-container .cliqr--multiple-choice-show-view table td {\n        padding-top: .75em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-show-view table .nominal, #cliqr-poll-container .cliqr--multiple-choice-show-view table .nominal {\n        color: #999999;\n        width: 1em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-show-view table .text, #cliqr-poll-container .cliqr--multiple-choice-show-view table .text {\n        padding-left: 0.75em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .cliqr--mc-description, #cliqr-container .cliqr--multiple-choice-edit-view .cliqr--mc-description, #cliqr-poll-container .cliqr--multiple-choice-create-view .cliqr--mc-description, #cliqr-poll-container .cliqr--multiple-choice-edit-view .cliqr--mc-description {\n\n      margin-bottom: 2em;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .cliqr--mc-description .cke_contents, #cliqr-container .cliqr--multiple-choice-edit-view .cliqr--mc-description .cke_contents, #cliqr-poll-container .cliqr--multiple-choice-create-view .cliqr--mc-description .cke_contents, #cliqr-poll-container .cliqr--multiple-choice-edit-view .cliqr--mc-description .cke_contents {\n        font-size: 2.75em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input, #cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input, #cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input, #cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input {\n        display: flex;\n        flex-flow: row nowrap;\n        align-items: stretch;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .choices input, #cliqr-container .cliqr--multiple-choice-edit-view .choices input, #cliqr-poll-container .cliqr--multiple-choice-create-view .choices input, #cliqr-poll-container .cliqr--multiple-choice-edit-view .choices input {\n        /* width: 500px; */\n        flex: 1;\n        margin: 0;\n        padding: 4px 6px;\n        border: 1px solid #CCCCCC;\n        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.024);\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .choices span.nominal, #cliqr-container .cliqr--multiple-choice-edit-view .choices span.nominal, #cliqr-poll-container .cliqr--multiple-choice-create-view .choices span.nominal, #cliqr-poll-container .cliqr--multiple-choice-edit-view .choices span.nominal {\n        line-height: 3em;\n        display: inline-block;\n        background-color: #e7ebf1;\n        padding: 0 .5em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input  + .choice-input, #cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input  + .choice-input, #cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input  + .choice-input, #cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input  + .choice-input {\n        margin-top: 0.5em;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input input, #cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input input, #cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input input, #cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input input {\n        display: inline-block;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .choices .cliqr--mc-choice-actions, #cliqr-container .cliqr--multiple-choice-edit-view .choices .cliqr--mc-choice-actions, #cliqr-poll-container .cliqr--multiple-choice-create-view .choices .cliqr--mc-choice-actions, #cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .cliqr--mc-choice-actions {\n        margin-left: 8px;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .choices .choices-required, #cliqr-container .cliqr--multiple-choice-edit-view .choices .choices-required, #cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choices-required, #cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choices-required {\n        position: relative;\n      }\n\n  #cliqr-container .cliqr--multiple-choice-create-view .choices .choices-required select, #cliqr-container .cliqr--multiple-choice-edit-view .choices .choices-required select, #cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choices-required select, #cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choices-required select {\n          position: absolute;\n          left: 0;\n          top: -25px;\n          z-index: -1;\n          border: none;\n        }\n\n  #cliqr-container .cliqr--multiple-choice-poll-view .description, #cliqr-poll-container .cliqr--multiple-choice-poll-view .description {\n      font-size: 2em;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-poll-view li, #cliqr-poll-container .cliqr--multiple-choice-poll-view li {\n      padding: 0;\n    }\n\n  #cliqr-container .cliqr--multiple-choice-poll-view label, #cliqr-poll-container .cliqr--multiple-choice-poll-view label {\n      display: block;\n      padding: .75rem 1.25rem;\n      margin: 0;\n    }\n",""])},408:function(e,n,t){var i=t(407);"string"==typeof i&&(i=[[e.i,i,""]]);t(393)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(e.exports=i.locals)},409:function(e,n,t){var i=t(7);e.exports=(i.default||i).template({1:function(e,n,i,l,r){var c,o=e.escapeExpression;return'                <tr>\n                    <td class="nominal"> '+o((c=t(391),c&&(c.__esModule?c.default:c)).call(null!=n?n:e.nullContext||{},r&&r.index,{name:"nominal",hash:{},data:r}))+' </td>\n                    <td class="text"> '+o(e.lambda(null!=n?n.text:n,n))+" </td>\n                </tr>\n"},compiler:[7,">= 4.0.0"],main:function(e,n,t,i,l){var r;return'<header>\n    <h1>Frage:</h1>\n    <div class="cliqr--mc-description">'+(null!=(r=e.lambda(null!=n?n.description_html:n,n))?r:"")+"</div>\n</header>\n\n<main>\n    <table>\n        <tbody>\n"+(null!=(r=t.each.call(null!=n?n:e.nullContext||{},null!=n?n.answers:n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+"        </tbody>\n    </table>\n</main>\n"},useData:!0})},410:function(e,n,t){var i=t(7);e.exports=(i.default||i).template({1:function(e,n,t,i,l){var r;return'                <p class="lead"> '+e.escapeExpression(e.lambda(null!=(r=null!=n?n.task:n)?r.title:r,n))+" </p>\n"},3:function(e,n,i,l,r,c,o){var a,s,u=null!=n?n:e.nullContext||{},p=e.escapeExpression;return'                        <li class="list-group-item">\n                            <label>\n'+(null!=(a=i.if.call(u,null!=o[1]?o[1].isSingleSelect:o[1],{name:"if",hash:{},fn:e.program(4,r,0,c,o),inverse:e.program(6,r,0,c,o),data:r}))?a:"")+'                                <span class="nominal">'+p((s=t(391),s&&(s.__esModule?s.default:s)).call(u,r&&r.index,{name:"nominal",hash:{},data:r}))+':</span>\n                                <span class="text">'+p(e.lambda(null!=n?n.text:n,n))+"</span>\n                            </label>\n                        </li>\n"},4:function(e,n,t,i,l){return'                                    <input type="radio" name="choice" value="'+e.escapeExpression(e.lambda(l&&l.index,n))+'" required>\n'},6:function(e,n,t,i,l){var r=e.lambda,c=e.escapeExpression;return'                                    <input type="checkbox" name="choice['+c(r(l&&l.index,n))+']" value="'+c(r(l&&l.index,n))+'">\n'},compiler:[7,">= 4.0.0"],main:function(e,n,t,i,l,r,c){var o,a=null!=n?n:e.nullContext||{};return'<section class="cliqr--multiple-choice-poll">\n    <div class="jumbotron">\n        <div class="container">\n'+(null!=(o=t.if.call(a,null!=(o=null!=n?n.task:n)?o.title:o,{name:"if",hash:{},fn:e.program(1,l,0,r,c),inverse:e.noop,data:l}))?o:"")+'\n            <div class="description">'+(null!=(o=e.lambda(null!=(o=null!=n?n.task:n)?o.description_html:o,n))?o:"")+'</div>\n        </div>\n    </div>\n\n    <div class="container">\n        <form action="" method="post">\n\n            <div class="form-group">\n                <ul class="list-group">\n'+(null!=(o=t.each.call(a,null!=n?n.answers:n,{name:"each",hash:{},fn:e.program(3,l,0,r,c),inverse:e.noop,data:l}))?o:"")+'                </ul>\n            </div>\n\n\n            <div class="form-group">\n                <button class="btn btn-primary btn-block" type="submit">Antwort abschicken</button>\n            </div>\n        </form>\n\n    </div>\n</section>\n'},useData:!0,useDepths:!0})},411:function(e,n,t){var i=t(7);function l(e){return e&&(e.__esModule?e.default:e)}e.exports=(i.default||i).template({1:function(e,n,t,i,l){return'        <div class="messagebox messagebox_error">\n            Fehler: '+e.escapeExpression(e.lambda(null!=n?n.error:n,n))+"\n        </div>\n"},3:function(e,n,t,i,l){var r,c=null!=n?n:e.nullContext||{};return(null!=(r=t.if.call(c,null!=n?n.selected:n,{name:"if",hash:{},fn:e.program(4,l,0),inverse:e.noop,data:l}))?r:"")+(null!=(r=t.if.call(c,null!=n?n.selected:n,{name:"if",hash:{},fn:e.noop,inverse:e.program(6,l,0),data:l}))?r:"")},4:function(e,n,i,r,c){var o=null!=n?n:e.nullContext||{};return"                    "+e.escapeExpression(l(t(32)).call(o,l(t(368)).call(o,"type-",null!=n?n.id:n,{name:"concat",hash:{},data:c}),null!=n?n.text:n,{name:"button",hash:{class:"active"},data:c}))+"\n"},6:function(e,n,i,r,c){var o=null!=n?n:e.nullContext||{};return"                    "+e.escapeExpression(l(t(32)).call(o,l(t(368)).call(o,"type-",null!=n?n.id:n,{name:"concat",hash:{},data:c}),null!=n?n.text:n,{name:"button",hash:{},data:c}))+"\n"},8:function(e,n,i,r,c){var o=null!=n?n:e.nullContext||{},a=e.escapeExpression,s=e.lambda;return'                    <div class="choice-input">\n                        <span class="nominal">'+a(l(t(391)).call(o,c&&c.index,{name:"nominal",hash:{},data:c}))+'</span>\n\n                        <input\n                            class="choice no-hint" maxlength="100" type="text"\n                            name="answers['+a(s(c&&c.index,n))+']"\n                            value="'+a(s(null!=n?n.text:n,n))+'" required>\n\n                        <span class="cliqr--mc-choice-actions">\n                            '+a(l(t(58)).call(o,"remove","Entfernen","trash",{name:"fab",hash:{},data:c}))+"\n                            \x3c!-- "+a(l(t(58)).call(o,"upload","Bild hochladen","upload",{name:"fab",hash:{},data:c}))+" --\x3e\n                            \x3c!-- "+a(l(t(58)).call(o,"options","Optionen","tools",{name:"fab",hash:{},data:c}))+" --\x3e\n                        </span>\n                    </div>\n"},10:function(e,n,i,r,c){return'                    <div class="choices-required">\n                        <select required oninvalid="setCustomValidity(\''+e.escapeExpression(l(t(396)).call(null!=n?n:e.nullContext||{},"Mindestens eine Antwort wird benötigt.",{name:"i18n",hash:{},data:c}))+"')\"></select>\n                    </div>\n"},12:function(e,n,t,i,l){return" checked"},compiler:[7,">= 4.0.0"],main:function(e,n,i,r,c){var o,a=null!=n?n:e.nullContext||{},s=e.escapeExpression;return'<form class="default" method="post" accept-char="UTF-8">\n\n'+(null!=(o=i.if.call(a,null!=n?n.error:n,{name:"if",hash:{},fn:e.program(1,c,0),inverse:e.noop,data:c}))?o:"")+'\n    <fieldset>\n        <legend>Multiple-Choice-Frage</legend>\n        <label>\n            Was möchten Sie fragen?\n            <div class="cliqr--mc-description"></div>\n        </label>\n        <label>\n            Titel der Frage (wird in Listendarstellungen verwendet)\n            <div class="cliqr--mc-title"></div>\n        </label>\n    </fieldset>\n\n    <fieldset>\n        <legend>Antwortmöglichkeiten</legend>\n\n        <div class="cliqr--mc-subtypes button-group">\n'+(null!=(o=i.each.call(a,null!=n?n.subtypes:n,{name:"each",hash:{},fn:e.program(3,c,0),inverse:e.noop,data:c}))?o:"")+'        </div>\n\n        <label>\n            Tragen Sie die Antworten ein\n\n            <div class="choices">\n'+(null!=(o=i.each.call(a,null!=(o=null!=(o=null!=n?n.task:n)?o.task:o)?o.answers:o,{name:"each",hash:{},fn:e.program(8,c,0),inverse:e.noop,data:c}))?o:"")+"\n                "+s(l(t(32)).call(a,"add","Antwort hinzufügen",{name:"button",hash:{class:"choice-add",icon:"add"},data:c}))+"\n\n"+(null!=(o=i.unless.call(a,null!=(o=null!=(o=null!=n?n.task:n)?o.task:o)?o.answers:o,{name:"unless",hash:{},fn:e.program(10,c,0),inverse:e.noop,data:c}))?o:"")+'            </div>\n        </label>\n    </fieldset>\n\n    <fieldset class="collapsable collapsed">\n        <legend>Optionen</legend>\n\n        <label>\n            <input type="checkbox" name="select-type" value="multi"'+(null!=(o=i.unless.call(a,null!=n?n.singleSelect:n,{name:"unless",hash:{},fn:e.program(12,c,0),inverse:e.noop,data:c}))?o:"")+">\n            Nutzer dürfen mehr als eine Antwort ankreuzen\n        </label>\n    </fieldset>\n\n    <footer>\n        "+s(l(t(32)).call(a,"save","Speichern",{name:"button",hash:{type:"submit",icon:"accept"},data:c}))+"\n        "+s(l(t(32)).call(a,"cancel","Abbrechen",{name:"button",hash:{icon:"decline"},data:c}))+"\n    </footer>\n</form>\n"},useData:!0})},412:function(e,n,t){var i=t(7);e.exports=(i.default||i).template({compiler:[7,">= 4.0.0"],main:function(e,n,t,i,l){var r,c=null!=n?n:e.nullContext||{},o=t.helperMissing,a=e.escapeExpression;return'<textarea name="'+a("function"==typeof(r=null!=(r=t.key||(null!=n?n.key:n))?r:o)?r.call(c,{name:"key",hash:{},data:l}):r)+'" class="x-wysiwyg" required="required"\n          placeholder="Was möchten Sie fragen">'+a("function"==typeof(r=null!=(r=t.value||(null!=n?n.value:n))?r:o)?r.call(c,{name:"value",hash:{},data:l}):r)+"</textarea>\n"},useData:!0})},413:function(e,n,t){var i=t(7);e.exports=(i.default||i).template({compiler:[7,">= 4.0.0"],main:function(e,n,i,l,r){var c,o=e.lambda,a=e.escapeExpression;return'<input type="text" name="'+a(o(null!=n?n.key:n,n))+'" value="'+a(o(null!=n?n.value:n,n))+'" placeholder="'+a((c=t(365),c&&(c.__esModule?c.default:c)).call(null!=n?n:e.nullContext||{},null!=n?n.placeholder:n,{name:"strip_tags",hash:{},data:r}))+'">\n'},useData:!0})},414:function(e,n,t){var i=t(7);e.exports=(i.default||i).template({1:function(e,n,i,l,r,c,o){var a,s,u=null!=n?n:e.nullContext||{},p=e.escapeExpression;return'                <tr>\n                    <td class="nominal"> '+p((s=t(391),s&&(s.__esModule?s.default:s)).call(u,r&&r.index,{name:"nominal",hash:{},data:r}))+' </td>\n                    <td class="text"> '+p(e.lambda(null!=n?n.text:n,n))+" </td>\n\n"+(null!=(a=i.unless.call(u,null!=o[1]?o[1].isRunning:o[1],{name:"unless",hash:{},fn:e.program(2,r,0,c,o),inverse:e.noop,data:r}))?a:"")+"                </tr>\n"},2:function(e,n,t,i,l){var r;return'                        <td class="graph"></td>\n                        <td class="count">'+e.escapeExpression(e.lambda(null!=n?n.votes_count:n,n))+'</td>\n                        <td class="percent">\n                            '+(null!=(r=t.if.call(null!=n?n:e.nullContext||{},null!=n?n.votes_count:n,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+"\n                        </td>\n"},3:function(e,n,t,i,l){return e.escapeExpression(e.lambda(null!=n?n.percent:n,n))+"%"},compiler:[7,">= 4.0.0"],main:function(e,n,t,i,l,r,c){var o;return'<header>\n    <h1>Abstimmung:</h1>\n    <div class="cliqr--mc-description">'+(null!=(o=e.lambda(null!=(o=null!=n?n.task:n)?o.description_html:o,n))?o:"")+"</div>\n</header>\n\n<main>\n    <table>\n        <tbody>\n"+(null!=(o=t.each.call(null!=n?n:e.nullContext||{},null!=n?n.answers:n,{name:"each",hash:{},fn:e.program(1,l,0,r,c),inverse:e.noop,data:l}))?o:"")+"        </tbody>\n    </table>\n</main>\n"},useData:!0,useDepths:!0})}}]);
//# sourceMappingURL=task-type.multiple-choice.chunk.js.map