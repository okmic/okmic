"use strict";(self.webpackChunkres=self.webpackChunkres||[]).push([[511],{7762:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(181);function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}},8814:function(e,t,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}n.d(t,{Z:function(){return r}})},3511:function(e,t,n){n.r(t),n.d(t,{default:function(){return he}});var r=n(885),o=n(7762),a=n(9611),i=n(8814);function l(e,t,n){return l=(0,i.Z)()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,a.Z)(o,n.prototype),o},l.apply(null,arguments)}var c=n(2982),u=Object.entries,s=Object.setPrototypeOf,f=Object.isFrozen,m=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,d=Object.freeze,h=Object.seal,g=Object.create,y="undefined"!==typeof Reflect&&Reflect,T=y.apply,E=y.construct;d||(d=function(e){return e}),h||(h=function(e){return e}),T||(T=function(e,t,n){return e.apply(t,n)}),E||(E=function(e,t){return l(e,(0,c.Z)(t))});var A,v=M(Array.prototype.forEach),b=M(Array.prototype.lastIndexOf),_=M(Array.prototype.pop),S=M(Array.prototype.push),N=M(Array.prototype.splice),w=M(String.prototype.toLowerCase),R=M(String.prototype.toString),O=M(String.prototype.match),C=M(String.prototype.replace),D=M(String.prototype.indexOf),L=M(String.prototype.trim),x=M(Object.prototype.hasOwnProperty),k=M(RegExp.prototype.test),I=(A=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return E(A,t)});function M(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return T(e,t,r)}}function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;s&&s(e,null);for(var r=t.length;r--;){var o=t[r];if("string"===typeof o){var a=n(o);a!==o&&(f(t)||(t[r]=a),o=a)}e[o]=!0}return e}function z(e){for(var t=0;t<e.length;t++){x(e,t)||(e[t]=null)}return e}function P(e){var t,n=g(null),a=(0,o.Z)(u(e));try{for(a.s();!(t=a.n()).done;){var i=(0,r.Z)(t.value,2),l=i[0],c=i[1];x(e,l)&&(Array.isArray(c)?n[l]=z(c):c&&"object"===typeof c&&c.constructor===Object?n[l]=P(c):n[l]=c)}}catch(s){a.e(s)}finally{a.f()}return n}function H(e,t){for(;null!==e;){var n=p(e,t);if(n){if(n.get)return M(n.get);if("function"===typeof n.value)return M(n.value)}e=m(e)}return function(){return null}}var F=d(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),B=d(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),W=d(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),G=d(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Z=d(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),j=d(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Y=d(["#text"]),X=d(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),q=d(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$=d(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=d(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),V=h(/\{\{[\w\W]*|[\w\W]*\}\}/gm),J=h(/<%[\w\W]*|[\w\W]*%>/gm),Q=h(/\$\{[\w\W]*/gm),ee=h(/^data-[\-\w.\u00B7-\uFFFF]+$/),te=h(/^aria-[\-\w]+$/),ne=h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),re=h(/^(?:\w+script|data):/i),oe=h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ae=h(/^html$/i),ie=h(/^[a-z][.\w]*(-[.\w]+)+$/i),le=Object.freeze({__proto__:null,ARIA_ATTR:te,ATTR_WHITESPACE:oe,CUSTOM_ELEMENT:ie,DATA_ATTR:ee,DOCTYPE_NAME:ae,ERB_EXPR:J,IS_ALLOWED_URI:ne,IS_SCRIPT_OR_DATA:re,MUSTACHE_EXPR:V,TMPLIT_EXPR:Q}),ce=1,ue=3,se=7,fe=8,me=9,pe=function(){return"undefined"===typeof window?null:window},de=function(e,t){if("object"!==typeof e||"function"!==typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(a){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};var he=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe(),n=function(t){return e(t)};if(n.version="3.2.4",n.removed=[],!t||!t.document||t.document.nodeType!==me||!t.Element)return n.isSupported=!1,n;var r,o=t.document,a=o,i=a.currentScript,l=t.DocumentFragment,s=t.HTMLTemplateElement,f=t.Node,m=t.Element,p=t.NodeFilter,h=t.NamedNodeMap,y=void 0===h?t.NamedNodeMap||t.MozNamedAttrMap:h,T=t.HTMLFormElement,E=t.DOMParser,A=t.trustedTypes,M=m.prototype,z=H(M,"cloneNode"),V=H(M,"remove"),J=H(M,"nextSibling"),Q=H(M,"childNodes"),ee=H(M,"parentNode");if("function"===typeof s){var te=o.createElement("template");te.content&&te.content.ownerDocument&&(o=te.content.ownerDocument)}var re="",oe=o,ie=oe.implementation,he=oe.createNodeIterator,ge=oe.createDocumentFragment,ye=oe.getElementsByTagName,Te=a.importNode,Ee={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"===typeof u&&"function"===typeof ee&&ie&&void 0!==ie.createHTMLDocument;var Ae=le.MUSTACHE_EXPR,ve=le.ERB_EXPR,be=le.TMPLIT_EXPR,_e=le.DATA_ATTR,Se=le.ARIA_ATTR,Ne=le.IS_SCRIPT_OR_DATA,we=le.ATTR_WHITESPACE,Re=le.CUSTOM_ELEMENT,Oe=le.IS_ALLOWED_URI,Ce=null,De=U({},[].concat((0,c.Z)(F),(0,c.Z)(B),(0,c.Z)(W),(0,c.Z)(Z),(0,c.Z)(Y))),Le=null,xe=U({},[].concat((0,c.Z)(X),(0,c.Z)(q),(0,c.Z)($),(0,c.Z)(K))),ke=Object.seal(g(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,Me=null,Ue=!0,ze=!0,Pe=!1,He=!0,Fe=!1,Be=!0,We=!1,Ge=!1,Ze=!1,je=!1,Ye=!1,Xe=!1,qe=!0,$e=!1,Ke="user-content-",Ve=!0,Je=!1,Qe={},et=null,tt=U({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),nt=null,rt=U({},["audio","video","img","source","image","track"]),ot=null,at=U({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),it="http://www.w3.org/1998/Math/MathML",lt="http://www.w3.org/2000/svg",ct="http://www.w3.org/1999/xhtml",ut=ct,st=!1,ft=null,mt=U({},[it,lt,ct],R),pt=U({},["mi","mo","mn","ms","mtext"]),dt=U({},["annotation-xml"]),ht=U({},["title","style","font","a","script"]),gt=null,yt=["application/xhtml+xml","text/html"],Tt="text/html",Et=null,At=null,vt=o.createElement("form"),bt=function(e){return e instanceof RegExp||e instanceof Function},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!At||At!==e){if(e&&"object"===typeof e||(e={}),e=P(e),gt=-1===yt.indexOf(e.PARSER_MEDIA_TYPE)?Tt:e.PARSER_MEDIA_TYPE,Et="application/xhtml+xml"===gt?R:w,Ce=x(e,"ALLOWED_TAGS")?U({},e.ALLOWED_TAGS,Et):De,Le=x(e,"ALLOWED_ATTR")?U({},e.ALLOWED_ATTR,Et):xe,ft=x(e,"ALLOWED_NAMESPACES")?U({},e.ALLOWED_NAMESPACES,R):mt,ot=x(e,"ADD_URI_SAFE_ATTR")?U(P(at),e.ADD_URI_SAFE_ATTR,Et):at,nt=x(e,"ADD_DATA_URI_TAGS")?U(P(rt),e.ADD_DATA_URI_TAGS,Et):rt,et=x(e,"FORBID_CONTENTS")?U({},e.FORBID_CONTENTS,Et):tt,Ie=x(e,"FORBID_TAGS")?U({},e.FORBID_TAGS,Et):{},Me=x(e,"FORBID_ATTR")?U({},e.FORBID_ATTR,Et):{},Qe=!!x(e,"USE_PROFILES")&&e.USE_PROFILES,Ue=!1!==e.ALLOW_ARIA_ATTR,ze=!1!==e.ALLOW_DATA_ATTR,Pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,He=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Fe=e.SAFE_FOR_TEMPLATES||!1,Be=!1!==e.SAFE_FOR_XML,We=e.WHOLE_DOCUMENT||!1,je=e.RETURN_DOM||!1,Ye=e.RETURN_DOM_FRAGMENT||!1,Xe=e.RETURN_TRUSTED_TYPE||!1,Ze=e.FORCE_BODY||!1,qe=!1!==e.SANITIZE_DOM,$e=e.SANITIZE_NAMED_PROPS||!1,Ve=!1!==e.KEEP_CONTENT,Je=e.IN_PLACE||!1,Oe=e.ALLOWED_URI_REGEXP||ne,ut=e.NAMESPACE||ct,pt=e.MATHML_TEXT_INTEGRATION_POINTS||pt,dt=e.HTML_INTEGRATION_POINTS||dt,ke=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&bt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ke.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&bt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ke.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ke.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(ze=!1),Ye&&(je=!0),Qe&&(Ce=U({},Y),Le=[],!0===Qe.html&&(U(Ce,F),U(Le,X)),!0===Qe.svg&&(U(Ce,B),U(Le,q),U(Le,K)),!0===Qe.svgFilters&&(U(Ce,W),U(Le,q),U(Le,K)),!0===Qe.mathMl&&(U(Ce,Z),U(Le,$),U(Le,K))),e.ADD_TAGS&&(Ce===De&&(Ce=P(Ce)),U(Ce,e.ADD_TAGS,Et)),e.ADD_ATTR&&(Le===xe&&(Le=P(Le)),U(Le,e.ADD_ATTR,Et)),e.ADD_URI_SAFE_ATTR&&U(ot,e.ADD_URI_SAFE_ATTR,Et),e.FORBID_CONTENTS&&(et===tt&&(et=P(et)),U(et,e.FORBID_CONTENTS,Et)),Ve&&(Ce["#text"]=!0),We&&U(Ce,["html","head","body"]),Ce.table&&(U(Ce,["tbody"]),delete Ie.tbody),e.TRUSTED_TYPES_POLICY){if("function"!==typeof e.TRUSTED_TYPES_POLICY.createHTML)throw I('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!==typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw I('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');r=e.TRUSTED_TYPES_POLICY,re=r.createHTML("")}else void 0===r&&(r=de(A,i)),null!==r&&"string"===typeof re&&(re=r.createHTML(""));d&&d(e),At=e}},St=U({},[].concat((0,c.Z)(B),(0,c.Z)(W),(0,c.Z)(G))),Nt=U({},[].concat((0,c.Z)(Z),(0,c.Z)(j))),wt=function(e){var t=ee(e);t&&t.tagName||(t={namespaceURI:ut,tagName:"template"});var n=w(e.tagName),r=w(t.tagName);return!!ft[e.namespaceURI]&&(e.namespaceURI===lt?t.namespaceURI===ct?"svg"===n:t.namespaceURI===it?"svg"===n&&("annotation-xml"===r||pt[r]):Boolean(St[n]):e.namespaceURI===it?t.namespaceURI===ct?"math"===n:t.namespaceURI===lt?"math"===n&&dt[r]:Boolean(Nt[n]):e.namespaceURI===ct?!(t.namespaceURI===lt&&!dt[r])&&(!(t.namespaceURI===it&&!pt[r])&&(!Nt[n]&&(ht[n]||!St[n]))):!("application/xhtml+xml"!==gt||!ft[e.namespaceURI]))},Rt=function(e){S(n.removed,{element:e});try{ee(e).removeChild(e)}catch(t){V(e)}},Ot=function(e,t){try{S(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){S(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(je||Ye)try{Rt(t)}catch(r){}else try{t.setAttribute(e,"")}catch(r){}},Ct=function(e){var t=null,n=null;if(Ze)e="<remove></remove>"+e;else{var a=O(e,/^[\r\n\t ]+/);n=a&&a[0]}"application/xhtml+xml"===gt&&ut===ct&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=r?r.createHTML(e):e;if(ut===ct)try{t=(new E).parseFromString(i,gt)}catch(c){}if(!t||!t.documentElement){t=ie.createDocument(ut,"template",null);try{t.documentElement.innerHTML=st?re:i}catch(c){}}var l=t.body||t.documentElement;return e&&n&&l.insertBefore(o.createTextNode(n),l.childNodes[0]||null),ut===ct?ye.call(t,We?"html":"body")[0]:We?t.documentElement:l},Dt=function(e){return he.call(e.ownerDocument||e,e,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null)},Lt=function(e){return e instanceof T&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof y)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},xt=function(e){return"function"===typeof f&&e instanceof f};function kt(e,t,r){v(e,(function(e){e.call(n,t,r,At)}))}var It=function(e){var t=null;if(kt(Ee.beforeSanitizeElements,e,null),Lt(e))return Rt(e),!0;var r=Et(e.nodeName);if(kt(Ee.uponSanitizeElement,e,{tagName:r,allowedTags:Ce}),e.hasChildNodes()&&!xt(e.firstElementChild)&&k(/<[/\w]/g,e.innerHTML)&&k(/<[/\w]/g,e.textContent))return Rt(e),!0;if(e.nodeType===se)return Rt(e),!0;if(Be&&e.nodeType===fe&&k(/<[/\w]/g,e.data))return Rt(e),!0;if(!Ce[r]||Ie[r]){if(!Ie[r]&&Ut(r)){if(ke.tagNameCheck instanceof RegExp&&k(ke.tagNameCheck,r))return!1;if(ke.tagNameCheck instanceof Function&&ke.tagNameCheck(r))return!1}if(Ve&&!et[r]){var o=ee(e)||e.parentNode,a=Q(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i){var l=z(a[i],!0);l.__removalCount=(e.__removalCount||0)+1,o.insertBefore(l,J(e))}}return Rt(e),!0}return e instanceof m&&!wt(e)?(Rt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!k(/<\/no(script|embed|frames)/i,e.innerHTML)?(Fe&&e.nodeType===ue&&(t=e.textContent,v([Ae,ve,be],(function(e){t=C(t,e," ")})),e.textContent!==t&&(S(n.removed,{element:e.cloneNode()}),e.textContent=t)),kt(Ee.afterSanitizeElements,e,null),!1):(Rt(e),!0)},Mt=function(e,t,n){if(qe&&("id"===t||"name"===t)&&(n in o||n in vt))return!1;if(ze&&!Me[t]&&k(_e,t));else if(Ue&&k(Se,t));else if(!Le[t]||Me[t]){if(!(Ut(e)&&(ke.tagNameCheck instanceof RegExp&&k(ke.tagNameCheck,e)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(e))&&(ke.attributeNameCheck instanceof RegExp&&k(ke.attributeNameCheck,t)||ke.attributeNameCheck instanceof Function&&ke.attributeNameCheck(t))||"is"===t&&ke.allowCustomizedBuiltInElements&&(ke.tagNameCheck instanceof RegExp&&k(ke.tagNameCheck,n)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))))return!1}else if(ot[t]);else if(k(Oe,C(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==D(n,"data:")||!nt[e]){if(Pe&&!k(Ne,C(n,we,"")));else if(n)return!1}else;return!0},Ut=function(e){return"annotation-xml"!==e&&O(e,Re)},zt=function(e){kt(Ee.beforeSanitizeAttributes,e,null);var t=e.attributes;if(t&&!Lt(e)){for(var o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Le,forceKeepAttr:void 0},a=t.length,i=function(){var i=t[a],l=i.name,c=i.namespaceURI,u=i.value,s=Et(l),f="value"===l?u:L(u);if(o.attrName=s,o.attrValue=f,o.keepAttr=!0,o.forceKeepAttr=void 0,kt(Ee.uponSanitizeAttribute,e,o),f=o.attrValue,!$e||"id"!==s&&"name"!==s||(Ot(l,e),f=Ke+f),Be&&k(/((--!?|])>)|<\/(style|title)/i,f))return Ot(l,e),"continue";if(o.forceKeepAttr)return"continue";if(Ot(l,e),!o.keepAttr)return"continue";if(!He&&k(/\/>/i,f))return Ot(l,e),"continue";Fe&&v([Ae,ve,be],(function(e){f=C(f,e," ")}));var m=Et(e.nodeName);if(!Mt(m,s,f))return"continue";if(r&&"object"===typeof A&&"function"===typeof A.getAttributeType)if(c);else switch(A.getAttributeType(m,s)){case"TrustedHTML":f=r.createHTML(f);break;case"TrustedScriptURL":f=r.createScriptURL(f)}try{c?e.setAttributeNS(c,l,f):e.setAttribute(l,f),Lt(e)?Rt(e):_(n.removed)}catch(p){}};a--;)i();kt(Ee.afterSanitizeAttributes,e,null)}},Pt=function e(t){var n=null,r=Dt(t);for(kt(Ee.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)kt(Ee.uponSanitizeShadowNode,n,null),It(n),zt(n),n.content instanceof l&&e(n.content);kt(Ee.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,i=null,c=null,u=null;if((st=!e)&&(e="\x3c!--\x3e"),"string"!==typeof e&&!xt(e)){if("function"!==typeof e.toString)throw I("toString is not a function");if("string"!==typeof(e=e.toString()))throw I("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Ge||_t(t),n.removed=[],"string"===typeof e&&(Je=!1),Je){if(e.nodeName){var s=Et(e.nodeName);if(!Ce[s]||Ie[s])throw I("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof f)(i=(o=Ct("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType===ce&&"BODY"===i.nodeName||"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!je&&!Fe&&!We&&-1===e.indexOf("<"))return r&&Xe?r.createHTML(e):e;if(!(o=Ct(e)))return je?null:Xe?re:""}o&&Ze&&Rt(o.firstChild);for(var m=Dt(Je?e:o);c=m.nextNode();)It(c),zt(c),c.content instanceof l&&Pt(c.content);if(Je)return e;if(je){if(Ye)for(u=ge.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(Le.shadowroot||Le.shadowrootmode)&&(u=Te.call(a,u,!0)),u}var p=We?o.outerHTML:o.innerHTML;return We&&Ce["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&k(ae,o.ownerDocument.doctype.name)&&(p="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+p),Fe&&v([Ae,ve,be],(function(e){p=C(p,e," ")})),r&&Xe?r.createHTML(p):p},n.setConfig=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_t(e),Ge=!0},n.clearConfig=function(){At=null,Ge=!1},n.isValidAttribute=function(e,t,n){At||_t({});var r=Et(e),o=Et(t);return Mt(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&S(Ee[e],t)},n.removeHook=function(e,t){if(void 0!==t){var n=b(Ee[e],t);return-1===n?void 0:N(Ee[e],n,1)[0]}return _(Ee[e])},n.removeHooks=function(e){Ee[e]=[]},n.removeAllHooks=function(){Ee={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}()}}]);
//# sourceMappingURL=511.11ef6c9c.chunk.js.map