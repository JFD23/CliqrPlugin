webpackJsonp([1],{370:function(e,i,n){"use strict";function t(e){if(Array.isArray(e)){for(var i=0,n=Array(e.length);i<e.length;i++)n[i]=e[i];return n}return Array.from(e)}function l(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var c=n(11),o=n.n(c),r=n(16),a=n.n(r),s=n(36),u=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.get("id"),t=h(e,i),l=i.toJSON(),c=a.a.reduce(t,function(e,i){return e+i},0);return u({},l,{task:a.a.first(l.test.tasks),isRunning:i.isRunning(),answers:a.a.map(e.get("task").answers,function(e,i){return u({},e,{id:n+"-"+i,isCorrect:!!e.score,votes_count:t[i],percent:c?Math.floor(t[i]/c*100):0})}),isSingleSelect:"single"===e.get("task").type,votes_count:c})},h=function(e,i){for(var n=[],t=0,l=e.get("task").answers.length;t<l;++t)n[t]=0;return a.a.reduce(i&&i.get("responses"),function(e,i){return a.a.each(i.answer,function(i){return e[i]++}),e},n)},d=s.a.extend({tagName:"section",className:"cliqr--multiple-choice-assignment-view",initialize:function(e){var i=e.voting;s.a.prototype.initialize.call(this),this.voting=i,this.listenTo(this.voting,"change",this.render)},template:n(399),context:function(){return p(this.model,this.voting)},afterTemplate:function(){this.voting.isRunning()||this.postRender()},postRender:function(){this.voting.isRunning()||this.enhanceChart(this.context());var e=window.MathJax.Hub;this.$(".cliqr--mc-description, td.text").each(function(i,n){return e.Queue(["Typeset",e,n])})},enhanceChart:function(e){this.$(".chart").remove();var i=e.answers,n=a.a.max(a.a.pluck(i,"votes_count")),t=a.a.map(i,function(e){return n>0?e.votes_count/n*150:0});this.$(".graph").append(function(e){return i[e].votes_count?o.a.$('<span class="chart"></span>').css({width:t[e],marginLeft:n?150-t[e]:0}):null})}}),m=d,v=s.a.extend({tagName:"div",className:"cliqr--component-wysiwyg",events:{"keypress textarea":"onTextUpdate","change textarea":"onTextUpdate","input textarea":"onTextUpdate"},initialize:function(e){s.a.prototype.initialize.call(this),this.key=e.key,this.listenTo(this.model,"change:"+this.key,this.onModelChange)},remove:function(){this.removeWysiwyg(),s.a.prototype.remove.call(this)},editor:null,removeWysiwyg:function(){this.editor&&(this.editor.removeAllListeners(),this.editor=null)},template:n(400),context:function(){return{key:this.key,value:this.model.get(this.key)}},afterTemplate:function(){var e=this.$("textarea").get(0);if(e&&window.STUDIP.wysiwyg){window.STUDIP.wysiwyg.replace(e);var i=window.CKEDITOR.dom.element.get(e);i&&(this.editor=i.getEditor(),this.editor.on("change",this.onEditorChange,this),this.editor.once("focus",this.onEditorFocus,this))}},onEditorChange:function(e){var i=e.editor;this.model.set(this.key,i.getData(),{silent:!0})},onEditorFocus:function(e){var i=e.editor;this.$(".cke_toolbox_collapser_min").length&&i.execCommand("toolbarCollapse")},onTextUpdate:function(e){var i=o.a.$(e.target).val();this.model.set(this.key,i,{silent:!0})},onModelChange:function(){this.render()}}),f=v,w=s.a.extend({tagName:"section",events:{"click .js-add":"onClickAdd","click .js-remove":"onClickRemove","submit form":"onSubmitForm","click .js-cancel":"onClickCancel","keypress input.choice":"onChoiceUpdate","change input.choice":"onChoiceUpdate","input input.choice":"onChoiceUpdate"},initialize:function(e){var i=this;s.a.prototype.initialize.call(this),this.type=e.type,this.taskGroup=e.taskGroup;var n=new f({model:this.model,key:"description"});this.setView(".cliqr--mc-description",n),this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"invalid",function(){return i.render({force:!0})})},template:n(401),context:function(){return{taskGroup:this.taskGroup&&this.taskGroup.toJSON(),task:this.model.toJSON(),error:this.model.validationError||null}},afterTemplate:function(){},onClickAdd:function(e){e.preventDefault(),this.model.addAnswer()},onClickRemove:function(e){e.preventDefault();var i=parseInt(o.a.$(e.target).closest(".choice-input").find("input[name]").attr("name").match(/\d+/)[0],10);this.model.removeAnswer(i)},onChoiceUpdate:function(e){var i=o.a.$(e.target),n=parseInt(i.attr("name").match(/\d+/)[0],10),t=i.val();this.model.updateAnswer(n,{text:t})}}),g=w,q=g.extend({className:"cliqr--multiple-choice-create-view",onSubmitForm:function(e){e.preventDefault(),this.model.isValid()&&(window.STUDIP.editor_enabled&&this.model.set("description",window.STUDIP.wysiwyg.markAsHtml(this.model.get("description")),{silent:!0}),this.trigger("newTask",this.model))},onClickCancel:function(e){e.preventDefault(),this.trigger("cancel")}}),b=q,x=g.extend({className:"cliqr--multiple-choice-edit-view",onSubmitForm:function(e){e.preventDefault(),this.model.isValid()&&this.trigger("editTask",this.model)},onClickCancel:function(e){e.preventDefault(),this.trigger("cancel",this.model)}}),k=x,y=function(e,i){var n=i.getTask();return{response:e.toJSON(),voting:a.a.omit(i.toJSON(),"task"),task:n.toJSON(),answers:n.get("task").answers,isSingleSelect:"single"===n.get("task").type}},C=s.a.extend({className:"cliqr--multiple-choice-poll-view",events:{"submit form":"onSubmitForm"},initialize:function(e){s.a.prototype.initialize.call(this),this.voting=e.voting},template:n(402),context:function(){return y(this.model,this.voting)},postRender:function(){var e=window.MathJax.Hub;this.$(".description, .text").each(function(i,n){return e.Queue(["Typeset",e,n])})},onSubmitForm:function(e){e.preventDefault();var i=o.a.$(e.target).closest("form").serializeArray();this.model.set("response",{answer:a.a.map(i,function(e){return parseInt(e.value,10)})}),this.voting.trigger("newResponse",this.model,this.voting)}}),_=C,S=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},T=function(e){var i=e.get("id");return S({},e.toJSON(),{answers:a.a.map(e.get("task").answers,function(e,n){return S({},e,{id:i+"-"+n,isCorrect:!!e.score})}),isSingleSelect:"single"===e.get("task").type})},E=o.a.View.extend({tagName:"section",className:"cliqr--multiple-choice-show-view",render:function(){var e=n(403);return this.$el.html(e(T(this.model))),this},postRender:function(){var e=window.MathJax.Hub;this.$(".cliqr--mc-description, td.text").each(function(i,n){return e.Queue(["Typeset",e,n])})}}),A=E,D=n(106),O=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},z=D.a.extend({defaults:{type:"multiple-choice",task:{type:"single",answers:[]}},validate:function(e,i){var n=e.description,t=e.task;if(!n||a.a.isEmpty(n))return"Der Fragetext darf nicht leer sein.";if(window.STUDIP.wysiwyg&&n.trim()===window.STUDIP.wysiwyg.htmlMarker)return"Der Fragetext darf nicht leer sein.";if(!t)return"Task fehlt.";var l=t.answers,c=void 0!==l&&l;return!c||a.a.isEmpty(c)?"Es wird mindestens eine Antwort benötigt.":null},addAnswer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.get("task"),l=[].concat(t(n.answers),[O({text:"",score:0,feedback:""},e)]);this.set("task",O({},n,{answers:l}),i)},removeAnswer:function(e){var i=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],this.get("task")),n=[].concat(t(i.answers.slice(0,e)),t(i.answers.slice(e+1)));this.set("task",O({},i,{answers:n}))},updateAnswer:function(e,i){var n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],this.get("task")),l=n.answers[e],c=[].concat(t(n.answers.slice(0,e)),[O({},l,i)],t(n.answers.slice(e+1)));this.set("task",O({},n,{answers:c}),{silent:!0})}}),M=z,N=n(397),U=N.a.extend({defaults:{}}),R=U,j=(n(404),function(){function e(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(i,n,t){return n&&e(i.prototype,n),t&&e(i,t),i}}()),P=function(){function e(i){l(this,e),this.task=i}return j(e,[{key:"getAssignmentView",value:function(e){return new m({model:this.task,voting:e,type:this})}},{key:"getShowView",value:function(){return new A({model:this.task,type:this})}},{key:"getEditView",value:function(){return new k({model:this.wrapTask(this.task),type:this})}},{key:"getCreateView",value:function(e){return new b({model:this.createTask(),taskGroup:e,type:this})}},{key:"getPollView",value:function(e){return new _({model:this.createResponse(e),voting:e,type:this})}},{key:"createTask",value:function(e){var i=new M;return a.a.times(2,function(){return i.addAnswer()}),i}},{key:"wrapTask",value:function(e){return new M(e.attributes)}},{key:"createResponse",value:function(e){return new R({voting_id:e.id,task_id:e.getTask().id})}}]),e}();a.a.extend(P.prototype,o.a.Events);i.default=P},395:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=n(20),l=(n.n(t),"A".charCodeAt(0)),c=function(e){return String.fromCharCode(l+parseInt(e,10)%26)};i.default=c},396:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=n(20),l=(n.n(t),function(e,i){i.hash;return e=Object(t.escapeExpression)(e),new t.SafeString(e)});i.default=l},397:function(e,i,n){"use strict";var t=n(11),l=n.n(t),c=n(16),o=n.n(c),r={create:"create",update:"update",delete:"destroy",read:"show"},a=l.a.Model.extend({sync:function(e,i,n){return o.a.extend(n,{url:"function"==typeof i.url?i.url(r[e]):void 0}),l.a.sync(e,i,n)},url:function(e){var i=null!=this.id?"/"+this.id:"";return cliqr.config.PLUGIN_URL+"responses/"+e+i}});i.a=a},399:function(e,i,n){function t(e){return e&&(e.__esModule?e.default:e)}var l=n(20);e.exports=(l.default||l).template({1:function(e,i,l,c,o,r,a){var s,u=null!=i?i:e.nullContext||{},p=e.escapeExpression;return'                <tr>\n                    <td class="nominal"> '+p(t(n(395)).call(u,o&&o.index,{name:"nominal",hash:{},data:o}))+' </td>\n                    <td class="text"> '+p(e.lambda(null!=i?i.text:i,i))+" </td>\n\n"+(null!=(s=l.unless.call(u,null!=a[1]?a[1].isRunning:a[1],{name:"unless",hash:{},fn:e.program(2,o,0,r,a),inverse:e.noop,data:o}))?s:"")+"                </tr>\n"},2:function(e,i,n,t,l){var c;return'                        <td class="graph"></td>\n                        <td class="count">'+e.escapeExpression(e.lambda(null!=i?i.votes_count:i,i))+'</td>\n                        <td class="percent">\n                            '+(null!=(c=n.if.call(null!=i?i:e.nullContext||{},null!=i?i.votes_count:i,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?c:"")+"\n                        </td>\n"},3:function(e,i,n,t,l){return e.escapeExpression(e.lambda(null!=i?i.percent:i,i))+"%"},compiler:[7,">= 4.0.0"],main:function(e,i,n,t,l,c,o){var r;return'<header>\n    <h1>Abstimmung:</h1>\n    <div class="cliqr--mc-description">'+(null!=(r=e.lambda(null!=(r=null!=i?i.task:i)?r.description_html:r,i))?r:"")+"</div>\n</header>\n\n<main>\n    <table>\n        <tbody>\n"+(null!=(r=n.each.call(null!=i?i:e.nullContext||{},null!=i?i.answers:i,{name:"each",hash:{},fn:e.program(1,l,0,c,o),inverse:e.noop,data:l}))?r:"")+"        </tbody>\n    </table>\n</main>\n"},useData:!0,useDepths:!0})},400:function(e,i,n){var t=n(20);e.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(e,i,n,t,l){var c,o=null!=i?i:e.nullContext||{},r=n.helperMissing,a=e.escapeExpression;return'<textarea name="'+a((c=null!=(c=n.key||(null!=i?i.key:i))?c:r,"function"==typeof c?c.call(o,{name:"key",hash:{},data:l}):c))+'" class="x-wysiwyg" required="required">'+a((c=null!=(c=n.value||(null!=i?i.value:i))?c:r,"function"==typeof c?c.call(o,{name:"value",hash:{},data:l}):c))+"</textarea>\n"},useData:!0})},401:function(e,i,n){function t(e){return e&&(e.__esModule?e.default:e)}var l=n(20);e.exports=(l.default||l).template({1:function(e,i,n,t,l){return'        <div class="messagebox messagebox_error">\n            Fehler: '+e.escapeExpression(e.lambda(null!=i?i.error:i,i))+"\n        </div>\n"},3:function(e,i,l,c,o){var r=null!=i?i:e.nullContext||{},a=e.escapeExpression,s=e.lambda;return'                    <div class="choice-input">\n                        <span class="nominal">'+a(t(n(395)).call(r,o&&o.index,{name:"nominal",hash:{},data:o}))+'</span>\n\n                        <input\n                            class="choice" maxlength="100" type="text"\n                            name="answers['+a(s(o&&o.index,i))+']"\n                            value="'+a(s(null!=i?i.text:i,i))+'" required>\n\n                        <span class="cliqr--mc-choice-actions">\n                            '+a(t(n(54)).call(r,"remove","Entfernen","trash",{name:"fab",hash:{},data:o}))+"\n                            \x3c!-- "+a(t(n(54)).call(r,"upload","Bild hochladen","upload",{name:"fab",hash:{},data:o}))+" --\x3e\n                            \x3c!-- "+a(t(n(54)).call(r,"options","Optionen","tools",{name:"fab",hash:{},data:o}))+" --\x3e\n                        </span>\n                    </div>\n"},5:function(e,i,l,c,o){return'                    <div class="choices-required">\n                        <select required oninvalid="setCustomValidity(\''+e.escapeExpression(t(n(396)).call(null!=i?i:e.nullContext||{},"Mindestens eine Antwort wird benötigt.",{name:"i18n",hash:{},data:o}))+"')\"></select>\n                    </div>\n"},compiler:[7,">= 4.0.0"],main:function(e,i,l,c,o){var r,a=null!=i?i:e.nullContext||{},s=e.escapeExpression;return'<form class="default" method="post" accept-char="UTF-8">\n\n'+(null!=(r=l.if.call(a,null!=i?i.error:i,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o}))?r:"")+'\n    <fieldset>\n        <legend>Multiple-Choice-Frage</legend>\n        <label>\n            Was möchten Sie fragen?\n            <div class="cliqr--mc-description"></div>\n        </label>\n    </fieldset>\n\n    <fieldset>\n        <legend>Antwortmöglichkeiten</legend>\n        <label>\n            Tragen Sie die Antworten ein\n\n            <div class="choices">\n'+(null!=(r=l.each.call(a,null!=(r=null!=(r=null!=i?i.task:i)?r.task:r)?r.answers:r,{name:"each",hash:{},fn:e.program(3,o,0),inverse:e.noop,data:o}))?r:"")+"\n                "+s(t(n(30)).call(a,"add","Antwort hinzufügen",{name:"button",hash:{class:"choice-add",icon:"add"},data:o}))+"\n\n"+(null!=(r=l.unless.call(a,null!=(r=null!=(r=null!=i?i.task:i)?r.task:r)?r.answers:r,{name:"unless",hash:{},fn:e.program(5,o,0),inverse:e.noop,data:o}))?r:"")+"            </div>\n\n        </label>\n    </fieldset>\n\n    <footer>\n        "+s(t(n(30)).call(a,"save","Speichern",{name:"button",hash:{type:"submit",icon:"accept"},data:o}))+"\n        "+s(t(n(30)).call(a,"cancel","Abbrechen",{name:"button",hash:{icon:"decline"},data:o}))+"\n    </footer>\n</form>\n"},useData:!0})},402:function(e,i,n){function t(e){return e&&(e.__esModule?e.default:e)}var l=n(20);e.exports=(l.default||l).template({1:function(e,i,n,t,l){var c;return'                <p class="lead"> '+e.escapeExpression(e.lambda(null!=(c=null!=i?i.task:i)?c.title:c,i))+" </p>\n"},3:function(e,i,l,c,o,r,a){var s,u=null!=i?i:e.nullContext||{},p=e.escapeExpression;return'                        <li class="list-group-item">\n                            <label>\n'+(null!=(s=l.if.call(u,null!=a[1]?a[1].isSingleSelect:a[1],{name:"if",hash:{},fn:e.program(4,o,0,r,a),inverse:e.program(6,o,0,r,a),data:o}))?s:"")+'                                <span class="nominal">'+p(t(n(395)).call(u,o&&o.index,{name:"nominal",hash:{},data:o}))+':</span>\n                                <span class="text">'+p(e.lambda(null!=i?i.text:i,i))+"</span>\n                            </label>\n                        </li>\n"},4:function(e,i,n,t,l){return'                                    <input type="radio" name="choice" value="'+e.escapeExpression(e.lambda(l&&l.index,i))+'" required>\n'},6:function(e,i,n,t,l){var c=e.lambda,o=e.escapeExpression;return'                                    <input type="checkbox" name="choice['+o(c(l&&l.index,i))+']" value="'+o(c(l&&l.index,i))+'">\n'},compiler:[7,">= 4.0.0"],main:function(e,i,n,t,l,c,o){var r,a=null!=i?i:e.nullContext||{};return'<section class="cliqr--multiple-choice-poll">\n    <div class="jumbotron">\n        <div class="container">\n'+(null!=(r=n.if.call(a,null!=(r=null!=i?i.task:i)?r.title:r,{name:"if",hash:{},fn:e.program(1,l,0,c,o),inverse:e.noop,data:l}))?r:"")+'\n            <div class="description">'+(null!=(r=e.lambda(null!=(r=null!=i?i.task:i)?r.description_html:r,i))?r:"")+'</div>\n        </div>\n    </div>\n\n    <div class="container">\n        <form action="" method="post">\n\n            <div class="form-group">\n                <ul class="list-group">\n'+(null!=(r=n.each.call(a,null!=i?i.answers:i,{name:"each",hash:{},fn:e.program(3,l,0,c,o),inverse:e.noop,data:l}))?r:"")+'                </ul>\n            </div>\n\n\n            <div class="form-group">\n                <button class="btn btn-primary btn-block" type="submit">Antwort abschicken</button>\n            </div>\n        </form>\n\n    </div>\n</section>\n'},useData:!0,useDepths:!0})},403:function(e,i,n){function t(e){return e&&(e.__esModule?e.default:e)}var l=n(20);e.exports=(l.default||l).template({1:function(e,i,l,c,o){var r=e.escapeExpression;return'                <tr>\n                    <td class="nominal"> '+r(t(n(395)).call(null!=i?i:e.nullContext||{},o&&o.index,{name:"nominal",hash:{},data:o}))+' </td>\n                    <td class="text"> '+r(e.lambda(null!=i?i.text:i,i))+" </td>\n                </tr>\n"},compiler:[7,">= 4.0.0"],main:function(e,i,n,t,l){var c;return'<header>\n    <h1>Frage:</h1>\n    <div class="cliqr--mc-description">'+(null!=(c=e.lambda(null!=i?i.description_html:i,i))?c:"")+"</div>\n</header>\n\n<main>\n    <table>\n        <tbody>\n"+(null!=(c=n.each.call(null!=i?i:e.nullContext||{},null!=i?i.answers:i,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?c:"")+"        </tbody>\n    </table>\n</main>\n"},useData:!0})},404:function(e,i,n){var t=n(405);"string"==typeof t&&(t=[[e.i,t,""]]);var l={};l.transform=void 0;n(369)(t,l);t.locals&&(e.exports=t.locals)},405:function(e,i,n){i=e.exports=n(368)(void 0),i.push([e.i,"#cliqr-container .cliqr--votings-compare .cliqr--multiple-choice-assignment-view h1,#cliqr-poll-container .cliqr--votings-compare .cliqr--multiple-choice-assignment-view h1{display:none}#cliqr-container .cliqr--multiple-choice-assignment-view .cliqr--mc-description,#cliqr-poll-container .cliqr--multiple-choice-assignment-view .cliqr--mc-description{font-weight:400;font-size:2.75em}#cliqr-container .cliqr--multiple-choice-assignment-view table,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table{font-size:2em;line-height:1.5;overflow:hidden;border-collapse:collapse}#cliqr-container .cliqr--multiple-choice-assignment-view table td,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table td{padding-top:.75em}#cliqr-container .cliqr--multiple-choice-assignment-view table .nominal,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table .nominal{color:#999;width:1em}#cliqr-container .cliqr--multiple-choice-assignment-view table .graph,#cliqr-container .cliqr--multiple-choice-assignment-view table .percent,#cliqr-container .cliqr--multiple-choice-assignment-view table .text,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table .graph,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table .percent,#cliqr-poll-container .cliqr--multiple-choice-assignment-view table .text{padding-left:.75em}#cliqr-container .cliqr--multiple-choice-assignment-view .chart,#cliqr-poll-container .cliqr--multiple-choice-assignment-view .chart{display:inline-block;background-color:#ffbd33;-webkit-box-shadow:1px 1px 1px 0 #f26e00;box-shadow:1px 1px 1px 0 #f26e00;height:1.5em;margin-left:.5em;vertical-align:middle}#cliqr-container .cliqr--multiple-choice-assignment-view .count,#cliqr-poll-container .cliqr--multiple-choice-assignment-view .count{padding-left:.25em;color:#f26e00;text-align:right}#cliqr-container .cliqr--multiple-choice-assignment-view .percent,#cliqr-poll-container .cliqr--multiple-choice-assignment-view .percent{color:#999}#cliqr-container .cliqr--multiple-choice-show-view .cliqr--mc-description,#cliqr-poll-container .cliqr--multiple-choice-show-view .cliqr--mc-description{font-weight:400;font-size:2.75em}#cliqr-container .cliqr--multiple-choice-show-view table,#cliqr-poll-container .cliqr--multiple-choice-show-view table{font-size:2em;line-height:1.5;overflow:hidden;border-collapse:collapse}#cliqr-container .cliqr--multiple-choice-show-view table td,#cliqr-poll-container .cliqr--multiple-choice-show-view table td{padding-top:.75em}#cliqr-container .cliqr--multiple-choice-show-view table .nominal,#cliqr-poll-container .cliqr--multiple-choice-show-view table .nominal{color:#999;width:1em}#cliqr-container .cliqr--multiple-choice-show-view table .text,#cliqr-poll-container .cliqr--multiple-choice-show-view table .text{padding-left:.75em}#cliqr-container .cliqr--multiple-choice-create-view .cliqr--mc-description .cke_contents,#cliqr-container .cliqr--multiple-choice-edit-view .cliqr--mc-description .cke_contents,#cliqr-poll-container .cliqr--multiple-choice-create-view .cliqr--mc-description .cke_contents,#cliqr-poll-container .cliqr--multiple-choice-edit-view .cliqr--mc-description .cke_contents{font-size:2.75em}#cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}#cliqr-container .cliqr--multiple-choice-create-view .choices input,#cliqr-container .cliqr--multiple-choice-edit-view .choices input,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices input,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices input{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-bottom:5px;padding:4px 6px;border:1px solid #ccc;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.024);box-shadow:inset 0 1px 2px rgba(0,0,0,.024)}#cliqr-container .cliqr--multiple-choice-create-view .choices span.nominal,#cliqr-container .cliqr--multiple-choice-edit-view .choices span.nominal,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices span.nominal,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices span.nominal{line-height:30px;display:inline-block;background-color:#e7ebf1;padding:0 .5em}#cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input+.choice-input,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input+.choice-input,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input+.choice-input,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input+.choice-input{margin-top:.5em}#cliqr-container .cliqr--multiple-choice-create-view .choices .choice-input input,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choice-input input,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choice-input input,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choice-input input{display:inline-block}#cliqr-container .cliqr--multiple-choice-create-view .choices .cliqr--mc-choice-actions,#cliqr-container .cliqr--multiple-choice-edit-view .choices .cliqr--mc-choice-actions,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .cliqr--mc-choice-actions,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .cliqr--mc-choice-actions{margin-left:8px}#cliqr-container .cliqr--multiple-choice-create-view .choices .choices-required,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choices-required,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choices-required,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choices-required{position:relative}#cliqr-container .cliqr--multiple-choice-create-view .choices .choices-required select,#cliqr-container .cliqr--multiple-choice-edit-view .choices .choices-required select,#cliqr-poll-container .cliqr--multiple-choice-create-view .choices .choices-required select,#cliqr-poll-container .cliqr--multiple-choice-edit-view .choices .choices-required select{position:absolute;left:0;top:-25px;z-index:-1;border:none}#cliqr-container .cliqr--multiple-choice-poll-view .description,#cliqr-poll-container .cliqr--multiple-choice-poll-view .description{font-size:2em}#cliqr-container .cliqr--multiple-choice-poll-view li,#cliqr-poll-container .cliqr--multiple-choice-poll-view li{padding:0}#cliqr-container .cliqr--multiple-choice-poll-view label,#cliqr-poll-container .cliqr--multiple-choice-poll-view label{display:block;padding:.75rem 1.25rem;margin:0}",""])}});
//# sourceMappingURL=task-type.multiple-choice.chunk.js.map