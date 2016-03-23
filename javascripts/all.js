/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
function activateLanguage(e){$("#lang-selector a").removeClass("active"),$("#lang-selector a[data-language-name='"+e+"']").addClass("active");for(var t=0;t<languages.length;t++)$(".highlight."+languages[t]).hide();$(".highlight."+e).show()}function setupLanguages(e){languages=e,currentLanguage=languages[0],defaultLanguage=localStorage.getItem("language"),""!=location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),languages)?(activateLanguage(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):activateLanguage(null!==defaultLanguage&&-1!=jQuery.inArray(defaultLanguage,languages)?defaultLanguage:languages[0]),$("#lang-selector a").bind("click",function(){return window.location.replace("?"+$(this).data("language-name")+window.location.hash),!1})}!function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(o){}n(t)},e.widget=function(i,s,n){var o,a,r,l,c={},h=i.split(".")[0];i=i.split(".")[1],o=h+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][o.toLowerCase()]=function(t){return!!e.data(t,o)},e[h]=e[h]||{},a=e[h][i],r=e[h][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new r(e,i)},e.extend(r,a,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),l=new s,l.options=e.widget.extend({},l.options),e.each(n,function(i,n){return e.isFunction(n)?(c[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,o=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),t):(c[i]=n,t)}),r.prototype=e.widget.extend(l,{widgetEventPrefix:a?l.widgetEventPrefix:i},c,{constructor:r,namespace:h,widgetName:i,widgetFullName:o}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),e.widget.bridge(i,r)},e.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,l=a.length;l>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==t&&(i[n]=e.isPlainObject(o)?e.isPlainObject(i[n])?e.widget.extend({},i[n],o):e.widget.extend({},o):o);return i},e.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;e.fn[i]=function(a){var r="string"==typeof a,l=s.call(arguments,1),c=this;return a=!r&&l.length?e.widget.extend.apply(null,[a].concat(l)):a,r?this.each(function(){var s,n=e.data(this,o);return n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,l),s!==n&&s!==t?(c=s&&s.jquery?c.pushStack(s.get()):s,!1):t):e.error("no such method '"+a+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+a+"'")}):this.each(function(){var t=e.data(this,o);t?t.option(a||{})._init():e.data(this,o,new n(a,this))}),c}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=e.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),s===t)return o[i]===t?null:o[i];o[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),e.each(n,function(n,r){function l(){return i||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):t}"string"!=typeof r&&(l.guid=r.guid=r.guid||l.guid||e.guid++);var c=n.match(/^(\w+)\s*(.*)$/),h=c[1]+a.eventNamespace,d=c[2];d?o.delegate(d,h,l):s.bind(h,l)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,o,a=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(e.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),a=!e.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){e(this)[t](),o&&o.call(s[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(e){"use strict";e(window.jQuery,window,document)}(function(e,t,i,s){"use strict";var n="tocify",o="tocify-focus",a="tocify-hover",r="tocify-hide",l="tocify-header",c="."+l,h="tocify-subheader",d="."+h,u="tocify-item",f="."+u,g="tocify-extend-page",p="."+g;e.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var e in t)if(e&&-1!==e.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),e(t).load(function(){i._setActiveElement(!0),e("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var t,i,s=this,o=s.options.ignoreSelector;return t=-1!==this.options.selectors.indexOf(",")?e(this.options.context).find(this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(","))):e(this.options.context).find(this.options.selectors.replace(/ /g,"")),t.length?(s.element.addClass(n),void t.each(function(t){e(this).is(o)||(i=e("<ul/>",{id:l+t,"class":l}).append(s._nestElements(e(this),t)),s.element.append(i),e(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===e(this).find(s.options.selectors).length?e(this).filter(s.options.selectors).each(function(){e(this).is(o)||s._appendSubheaders.call(this,s,i)}):e(this).find(s.options.selectors).each(function(){e(this).is(o)||s._appendSubheaders.call(this,s,i)})}))})):void s.element.addClass(r)},_setActiveElement:function(e){var i=this,s=t.location.hash.substring(1),n=i.element.find("li[data-unique='"+s+"']");return s.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),n.addClass(i.focusClass),i.options.showAndHide&&n.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!s.length&&e&&i.options.highlightDefault&&i.element.find(f).first().addClass(i.focusClass)),i},_nestElements:function(t,i){var s,n,o;return s=e.grep(this.items,function(e){return e===t.text()}),s.length?this.items.push(t.text()+i):this.items.push(t.text()),o=this._generateHashValue(s,t,i),n=e("<li/>",{"class":u,"data-unique":o}).append(e("<a/>",{text:t.text()})),t.before(e("<div/>",{name:o,"data-unique":o})),n},_generateHashValue:function(e,t,i){var s="",n=this.options.hashGenerator;if("pretty"===n){for(s=t.text().toLowerCase().replace(/\s/g,"-"),s=s.replace(/[^\x00-\x7F]/g,"");s.indexOf("--")>-1;)s=s.replace(/--/g,"-");for(;s.indexOf(":-")>-1;)s=s.replace(/:-/g,"-")}else s="function"==typeof n?n(t.text(),t):t.text().replace(/\s/g,"");return e.length&&(s+=""+i),s},_appendSubheaders:function(t,i){var s=e(this).index(t.options.selectors),n=e(t.options.selectors).eq(s-1),o=+e(this).prop("tagName").charAt(1),a=+n.prop("tagName").charAt(1);a>o?t.element.find(d+"[data-tag="+o+"]").last().append(t._nestElements(e(this),s)):o===a?i.find(f).last().after(t._nestElements(e(this),s)):i.find(f).last().after(e("<ul/>",{"class":h,"data-tag":o})).next(d).append(t._nestElements(e(this),s))},_setEventHandlers:function(){var s=this;this.element.on("click.tocify","li",function(i){if(s.options.history&&(t.location.hash=e(this).attr("data-unique")),s.element.find("."+s.focusClass).removeClass(s.focusClass),e(this).addClass(s.focusClass),s.options.showAndHide){var n=e('li[data-unique="'+e(this).attr("data-unique")+'"]');s._triggerShow(n)}s._scrollTo(e(this))}),this.element.find("li").on({"mouseenter.tocify":function(){e(this).addClass(s.hoverClass),e(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==s.options.theme&&e(this).removeClass(s.hoverClass)}}),e(t).on("resize",function(){console.log("resizing"+s.cachedHeights),s.calculateHeights(),console.log("done"+s.cachedHeights)}),e(t).on("scroll.tocify",function(){e("html, body").promise().done(function(){var n,o,a,r,l=e(t).scrollTop(),c=e(t).height(),h=e(i).height(),d=e("body")[0].scrollHeight;if(s.options.extendPage&&(s.webkit&&l>=d-c-s.options.extendPageOffset||!s.webkit&&c+l>h-s.options.extendPageOffset)&&!e(p).length){if(o=e('div[data-unique="'+e(f).last().attr("data-unique")+'"]'),!o.length)return;a=o.offset().top,e(s.options.context).append(e("<div />",{"class":g,height:Math.abs(a-l)+"px","data-unique":g})),s.extendPageScroll&&(r=s.element.find("li.active"),s._scrollTo(e("div[data-unique="+r.attr("data-unique")+"]")))}setTimeout(function(){var o,a=null;0==s.cachedHeights.length&&s.calculateHeights(),s.cachedAnchors.each(function(i){return s.cachedHeights[i]-e(t).scrollTop()<0?void(a=i):!1}),o=e(s.cachedAnchors[a]).attr("data-unique"),n=e('li[data-unique="'+o+'"]'),s.options.highlightOnScroll&&n.length&&(s.element.find("."+s.focusClass).removeClass(s.focusClass),n.addClass(s.focusClass)),s.options.scrollHistory&&t.location.hash!=="#"+o&&(history.replaceState?history.replaceState({},"","#"+o):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+o,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),s.options.showAndHideOnScroll&&s.options.showAndHide&&s._triggerShow(n,!0)},0)})})},calculateHeights:function(){var t=this;t.cachedHeights=[],t.cachedAnchors=[];var i=e(t.options.context).find("div[data-unique]");i.each(function(i){var s=(e(this).next().length?e(this).next():e(this)).offset().top-t.options.highlightOffset;t.cachedHeights[i]=s}),t.cachedAnchors=i},show:function(t,i){var s=this;if(!t.is(":visible"))switch(t.find(d).length||t.parent().is(c)||t.parent().is(":visible")?t.children(d).length||t.parent().is(c)||(t=t.closest(d)):t=t.parents(d).add(t),s.options.showEffect){case"none":t.show();break;case"show":t.show(s.options.showEffectSpeed);break;case"slideDown":t.slideDown(s.options.showEffectSpeed);break;case"fadeIn":t.fadeIn(s.options.showEffectSpeed);break;default:t.show()}return t.parent().is(c)?s.hide(e(d).not(t)):s.hide(e(d).not(t.closest(c).find(d).not(t.siblings()))),s},hide:function(e){var t=this;switch(t.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(t.options.hideEffectSpeed);break;case"slideUp":e.slideUp(t.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(t.options.hideEffectSpeed);break;default:e.hide()}return t},_triggerShow:function(e,t){var i=this;return e.parent().is(c)||e.next().is(d)?i.show(e.next(d),t):e.parent().is(d)&&i.show(e.parent(),t),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(c+","+d).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=a),this},setOption:function(){e.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){e.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(t){var i=this,s=i.options.smoothScroll||0,n=i.options.scrollTo;return e("html, body").promise().done(function(){e("html, body").animate({scrollTop:e('div[data-unique="'+t.attr("data-unique")+'"]').next().offset().top-(e.isFunction(n)?n.call():n)+"px"},{duration:s})}),i}})}),/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
languages=[];