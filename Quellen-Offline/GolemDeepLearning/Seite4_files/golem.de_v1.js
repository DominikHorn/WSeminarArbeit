if(window.PLISTA===void 0){window.PLISTA={publickey:"cfdeb2e72a2eff788500e423"};
(function(lib,name,path,cdnpath,clickpath,wwwpath,prefix,version,document,window){var inited,ready;lib=lib||{};if(lib.init instanceof Function){throw new Error('will not redefine '+lib.name);}
if(!lib.publickey){throw new Error('missing publickey');}
lib.status=0;lib.type='async';lib.name=lib.name||name;lib.publickey=lib.publickey||'';lib.path=lib.path||path;lib.cdnpath=lib.cdnpath||cdnpath;lib.clickpath=lib.clickpath||clickpath;lib.wwwpath=lib.wwwpath||wwwpath;lib.prefix=lib.prefix||prefix;lib.sandbox=lib.debug||lib.sandbox;lib.dataMode=lib.dataMode||'data-widget';lib.context=lib.context||{};lib.context.widgets={};lib.context.script=function(){};lib.readyState=0;lib.version=version;if(lib.isTouch===void 0){lib.isTouch='ontouchstart'in document.documentElement;}
if(lib.useDocumentReady===void 0){lib.useDocumentReady=true;}
if(lib.isFrame===void 0){try{lib.isFrame=!!(window.frameElement)||void 0;}catch(error){lib.isFrame=true;}}
function timeout(){if(lib.status<1){(new Image()).src=lib.path+'errorreport.php?publickey='+lib.publickey+'&msgkey=remotedata&error='+encodeURIComponent(lib.name+' bad status '+lib.status+' after 30 seconds');}}
setTimeout(timeout,3e4);function onload(e){if(document.addEventListener||document.readyState==='interactive'||document.readyState==='complete'||e.type==='load'){detach();init();}}
function detach(){if(document.addEventListener){document.removeEventListener('DOMContentLoaded',onload,false);window.removeEventListener('load',onload,false);}else{document.detachEvent('onreadystatechange',onload);window.detachEvent('onload',onload);}}
function load(){if(!lib.useDocumentReady){init();}else if(document.attachEvent?document.readyState==='complete':document.readyState!=='loading'){setTimeout(init);}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',onload,false);window.addEventListener('load',onload,false);}else{document.attachEvent('onreadystatechange',onload);window.attachEvent('onload',onload);if(!lib.isFrame&&document.documentElement&&document.documentElement.doScroll){(function scroll(){if(!ready){try{document.documentElement.doScroll('left');}catch(e){setTimeout(scroll,50);return;}
detach();init();}})();}}}
function init(){ready=true;var modules=lib.require||[];if(window.JSON&&JSON.stringify&&JSON.stringify([])==='[]'&&JSON.stringify({x:void 0})==='{}'){lib.JSON=window.JSON;}else{modules.push('json');}
if(document.querySelectorAll){lib.querySelector=function(selector){return document.querySelector(selector);};lib.querySelectorAll=function(selector){return document.querySelectorAll(selector);};}else{modules.push('sizzle');}
lib.loadModules(modules,lib.init);lib.status+=0.01;}
lib.init=function(){if(inited){throw new Error('already inited. call '+lib.name+'.reset');}
inited=true;lib.readyState=1;lib.status+=0.1;lib.dispatchEvent(lib.event.INIT);};lib.reset=function(){if(!inited){throw new Error('not inited. call '+lib.name+'.init');}
inited=false;lib.status-=0.1;lib.readyState=0;lib.dispatchEvent(lib.event.UNLOAD);};try{
(function(){var log='';lib.debug=!!(lib.debug||String(window.location.hash).indexOf(lib.name+'.debug')>-1);lib.log=function(){var stack,args=lib.array(arguments);try{stack=new Error().stack.match(/((https?:)?\/\/.+?):(\d+:\d+)/g);stack.splice(0,1);args.unshift('\n\n\n');args.push('\n\n\n');args.push(stack.join('\n'));}catch(error){}
log+=args.join(' \n');if(lib.debug&&window.console){try{console.log.apply(console,args);}catch(error){console.log(args.toString());}}};lib.getLog=function(){return log;};}());
(function(){lib.error=function(type,message,error){lib.log('ERROR',type,message,error);error=error||{};var e={};e.version=lib.version;e.message=type+':'+message;e.description=error.name&&error.name+':'+error.message;e.file=error.fileName&&error.fileName+':'+error.lineNumber;e.stack=error.stack&&error.stack.toString().substr(0,1000);if(Math.random()>=0.95){(new Image()).src=lib.path+'errorreport.php?publickey='+lib.publickey+'&msgkey=remotedata&error='+encodeURIComponent(lib.JSON.stringify(e));}};}());
(function(){lib.bind=function(f,t){return Function.prototype.bind?f.bind(t):function(){f.apply(t,arguments);};};lib.array=function(a){for(var i=0,r=[],l=a.length;i<l;r[i]=a[i],i+=1);return r;};lib.trim=function(s){return String.prototype.trim?String.prototype.trim.call(String(s)):String(s).replace(/^\s+|\s+$/g,'');};lib.formatString=function(){var i,s=arguments[0];for(i=1;i<arguments.length;i+=1){s=s.replace(new RegExp('\\{'+(i-1)+'\\}','gm'),arguments[i]);}
return s;};lib.evalScript=function(s,t){var r,f;if(s){try{lib.currentTarget=t;f=new Function('lib',s);r=f.apply(t,[lib]);lib.currentTarget=void 0;}catch(error){lib.log('EVAL_SCRIPT',error);}}
return r;};}());
(function(){lib.unique=function(a,b){var x,y,r=[];if(b===void 0){b=r;}else{a=lib.unique(a.concat(b));}
label:for(x=0;x<a.length;x+=1){for(y=0;y<b.length;y+=1){if(b[y]===a[x]){continue label;}}
r.push(a[x]);}
return r;};}());
(function(){var NAME='EVENT',ERROR_DISPATCH='error dispatching ',ERROR_FUNCTION=' listener is no function';lib.event={CLICK:'click',COMPLETE:'complete',INIT:'init',INSIGHT:'insight',LOAD:'load',MESSAGE:'message',MOUSEDOWN:'mousedown',MOUSEOVER:'mouseover',MOUSEOUT:'mouseout',ORIENTATION_CHANGE:'orientationchange',RESIZE:'resize',SCROLL:'scroll',UNLOAD:'unload',ADD_ITEM:'additem',ADD_CATEGORY:'assigncategory',COUNT_ENGAGEMENT:'countengagement',IS_ARTICLE:'isarticle',RECOMMENDATION_SEEN:'recommendationseen',SEND_ITEM:'senditem',SEND_CATEGORY:'sendcategory',WIDGET_LOAD:'widgetload',WIDGET_VIEW:'widgetview',WIDGET_INIT:'widgetinit'};function EventDispatcher(){var listeners={};function callListener(listener,type,data){try{listener.call(this,data);}catch(error){if(lib.debug){throw error;}
lib.error(NAME,ERROR_DISPATCH+type,error);}}
this.addEventListener=function(type,listener,element){if(typeof listener!=='function'){throw new Error(type+ERROR_FUNCTION);}
if(element===void 0){listeners[type]=listeners[type]||[];listeners[type].push(listener);}else if(element.addEventListener){element.addEventListener(type,listener,false);}else if(element.attachEvent){element.attachEvent('on'+type,listener);}};this.removeEventListener=function(type,listener,element){var i,ls;if(element===void 0){if(listener===void 0){listeners[type]=[];}else if(listeners[type]){ls=listeners[type];for(i=0;i<ls.length;i+=1){if(ls[i]===listener){ls[i]=void 0;}}}}else if(element.removeEventListener){element.removeEventListener(type,listener,false);}else if(element.detachEvent){element.detachEvent('on'+type,listener);}};this.dispatchEvent=function(type,data){var ls,i;lib.log(NAME,type,data);if(typeof this['on'+type]==='function'){callListener.call(this,this['on'+type],type,data);}
if(listeners[type]){ls=listeners[type];for(i=0;i<ls.length;i+=1){if(ls[i]){callListener.call(this,ls[i],type,data);}}
for(i=ls.length-1;i>=0;i-=1){if(ls[i]===void 0){ls.splice(i,1);}}}};}
lib.EventDispatcher=EventDispatcher;lib.EventDispatcher.call(lib);}());
(function(lib,document){var NAME='WIDGET',LOG_NOT_FOUND='could not find widget {0}',ATTR_REPLACE='data-replace-url',ATTR_REDIRECT='data-redirect',ATTR_MOUSEDOWN='this.href=this.getAttribute(\''+ATTR_REDIRECT+'\');';function Widget(widget){var c,t;lib.EventDispatcher.call(this);this.name=widget.name;this.id=widget.id;this.uid=widget.uid||widget.id;this.bv=widget.bv;this.items=widget.items;this.campaigns=widget.campaigns;this.language=widget.language;this.optout=widget.optout;this.oba=lib.context.WIDGET_OBA!==void 0?lib.context.WIDGET_OBA:widget.oba;this.view=Widget.getViewSettings(widget.view);this.addCSS(widget.css);this.additionalScript();this.container=this.getContainer();if(!this.container){lib.log(NAME,lib.formatString(LOG_NOT_FOUND,this.id));return;}
c=lib.prefix+widget.name;t=this.container.className;this.className=t;this.container.id=this.uid;this.container.setAttribute(lib.dataMode,'');this.container.className=t&&t!==c?c+' '+t:c;this.container.innerHTML=widget.html||'';this.remove=lib.bind(this.remove,this);lib.placements[this.uid]=this;lib.addEventListener(lib.event.UNLOAD,this.remove);Widget.replaceUrl.call(this);lib.dispatchEvent(lib.event.WIDGET_INIT,this);lib.evalScript(widget.script,this);}
Widget.replaceUrl=function(){var i,a,t=lib.querySelectorAll('#'+this.uid+' ['+ATTR_REPLACE+']');for(i=0;i<t.length;i+=1){a=t[i];a.setAttribute(ATTR_REDIRECT,a.href);a.href=a.getAttribute(ATTR_REPLACE);a.setAttribute('onmousedown',ATTR_MOUSEDOWN);a.removeAttribute(ATTR_REPLACE);}};Widget.getViewSettings=function(data){data=data||{};data.percent=data.percent>=0?data.percent:0;data.time=data.time>=0?data.time:3e3;data.last=data.last>=0?data.last:0;return data;};Widget.prototype.additionalScript=function(){var w=lib.context.widgets&&lib.context.widgets[this.name];if(w&&w.script){try{w.script.call(this);}catch(e){lib.error(NAME,this.name,e);}}};Widget.prototype.addCSS=function(css){var w=lib.context.widgets&&lib.context.widgets[this.name];css=css||w&&w.css;lib.addCSS(css,this.name);};Widget.prototype.getContainer=function(){return document.getElementById(this.id)||lib.querySelector('['+lib.dataMode+'="'+this.id+'"]');};Widget.prototype.remove=function(){lib.removeEventListener(lib.event.UNLOAD,this.remove);lib.placements[this.uid]=void 0;this.container.setAttribute(lib.dataMode,this.id);this.container.id='';this.container.innerHTML='';this.container.className=this.className;};lib.Widget=Widget;lib.placements={};}(lib,document));
(function(){lib.getRect=function(element){var r=element.getBoundingClientRect();if(r.width===void 0){return{top:r.top,bottom:r.bottom,left:r.left,right:r.right,width:r.right-r.left,height:r.bottom-r.top};}
return r;};}());
(function(){var video=document.createElement('video'),hasVideo=video&&video.canPlayType?true:void 0;lib.hasVideo=function(){return hasVideo;};}());
(function(){var plugin,version=0;try{plugin=navigator.plugins&&navigator.plugins['Shockwave Flash'];if(plugin){version=parseFloat(plugin.description.replace(/^.*?(\d+\.\d+).*$/,'$1'));}else if(ActiveXObject){plugin=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');version=parseFloat(plugin.GetVariable('$version').replace(/^.*?(\d+),(\d+).*$/,'$1.$2'));}}catch(error){}
lib.hasFlash=function(){return version>=10||void 0;};}());
(function(){var hasAdBlock;function isInvisible(d){var s=window.getComputedStyle(d,null);return s.display==='none'||(s.MozBinding&&s.MozBinding.match(/url\("about:(abp|sab)/));}
lib.hasAdBlock=function(){return hasAdBlock;};lib.detectAdBlock=function(complete){var a=document.createElement('a'),b=document.createElement('div'),w=document.createElement('div');try{w.id='plwldplwldplwld';w.style.display='block';w.style.position='absolute';w.style.left='-999em';w.style.width='1px';w.style.height='1px';w.appendChild(document.createTextNode('&nbsp;'));document.body.appendChild(w);b.style.position='absolute';b.className='plistaList';a.className='itemLinkPET';a.href='ht'+'tp://click.plista.com/pets/abp';a.style.display='block';a.style.position='absolute';a.style.left='-999em';a.style.width='1px';a.style.height='1px';a.appendChild(document.createTextNode('&nbsp;'));b.appendChild(a);document.body.appendChild(b);hasAdBlock=isInvisible(w)?2:isInvisible(a)?1:0;}catch(e){}
if(w.parentNode){w.parentNode.removeChild(w);}
if(b.parentNode){b.parentNode.removeChild(b);}
complete();};}());
(function(){var NAME='LOAD SCRIPT',ERROR_TIMEOUT='timeout({0}) src {1}',head=document.getElementsByTagName('head')[0]||document.documentElement;lib.loadScript=function(src,complete,timeout){var t,loaded,s=document.createElement('script');s.async='async';s.type='text/javascript';s.charset='utf-8';s.onload=s.onreadystatechange=function(){if(!loaded&&(!this.readyState||this.readyState==='loaded'||this.readyState==='complete')){loaded=true;s.onload=s.onreadystatechange=null;clearTimeout(t);if(complete){complete(s);}
s.parentNode.removeChild(s);}};timeout=timeout||20000;t=setTimeout(function(){lib.error(NAME,lib.formatString(ERROR_TIMEOUT,timeout,src.substr(0,1000)));},timeout);s.src=src;head.insertBefore(s,head.firstChild);return s;};}());
(function(){var loadedModules=[],additionalModules=[];lib.addModules=function(modules){additionalModules=additionalModules.concat(modules);};lib.loadModules=function(modules,complete){if(additionalModules.length){modules=modules.concat(additionalModules);additionalModules=[];}
modules=lib.unique(modules,loadedModules);if(modules.length){loadedModules=loadedModules.concat(modules);lib.loadScript(lib.cdnpath+'async/module/'+modules.join(',')+'/'+encodeURIComponent(lib.name)+'.js',complete);return true;}
if(complete){complete();}
return false;};}());
(function(){var t,json={name:lib.name,publickey:lib.publickey,sb:lib.debug||lib.sandbox||void 0};lib.call=function(name,data,bvd){var req=[name];if(data){req.push(data);}
json.req=json.req||[];json.req.push(req);json.objectid=lib.getObjectId();json.nt=lib.noTracking;json.ssp=lib.ssp;json.geo=lib.geo;json.app=lib.isApp;if(bvd){json.bvd=lib.bvd;}
clearTimeout(t);t=setTimeout(function(){lib.callRequest(json);json.req=void 0;json.bvd=void 0;if(bvd){lib.bvd={};}},50);};lib.callRequest=function(data){lib.loadScript(lib.path+'async_lib.js?json='+encodeURIComponent(lib.JSON.stringify(data))+'&x');};lib.bvd={};}());
(function(){lib.getCSS=function(e,p,d){d=d||'';return e.style[p]?e.style[p]:window.getComputedStyle?window.getComputedStyle(e)[p]:e.currentStyle?e.currentStyle[p]:d;};}());
(function(){var style,addedCSS={},head=document.getElementsByTagName('head')[0]||document.documentElement;lib.addCSS=function(css,key){if(!style){style=document.createElement('style');style.type='text/css';head.insertBefore(style,head.firstChild);}
if(!css||key in addedCSS){return;}
if(style.textContent!==void 0){style.textContent+=css;}else{style.styleSheet.cssText+=css;}
if(key){addedCSS[key]=true;}};}());
(function(lib){function init(){if(lib.getObjectId()){var d;if(lib.updateItem){cleanItem(lib.item);d=lib.item;}
lib.addEventListener(lib.event.IS_ARTICLE,isArticle);lib.call(lib.event.IS_ARTICLE,d);}}
function isArticle(e){lib.removeEventListener(lib.event.IS_ARTICLE,isArticle);if(e.action==='sendItemData'){lib.sendItem();}
if(e.action===lib.event.ADD_CATEGORY){lib.sendCategory();}
lib.status+=10;}
function convertHTMLEntities(s){var t=document.createElement('textarea');t.innerHTML='_'+s.replace(/(<([^>]+)>)/ig,"")+'_';s=t.value;return s.substr(1,s.length-2);}
function cleanItem(item){var i,v;for(i in item){if(item.hasOwnProperty(i)&&item[i]){v=lib.trim(item[i]);if(v.match(/^https?:\/\//)){v=v.substr(0,1024);}else{v=convertHTMLEntities(v).substr(0,255);}
item[i]=v;}}
if(Number(item.created_at)>1e11){item.created_at=Math.floor(Number(item.created_at)/1e3);}}
lib.item=lib.item||{};lib.updateItem=lib.updateItem||false;lib.sendCategory=function(){lib.dispatchEvent(lib.event.SEND_CATEGORY);if(lib.category){lib.category=lib.trim(lib.category);lib.call(lib.event.ADD_CATEGORY,{category:lib.category});}};lib.sendItem=function(){lib.dispatchEvent(lib.event.SEND_ITEM);if(lib.item){cleanItem(lib.item);lib.call(lib.event.ADD_ITEM,lib.item);}};lib.getObjectId=function(){return lib.item&&lib.item.objectid?lib.trim(lib.item.objectid):void 0;};lib.addEventListener(lib.event.LOAD,init);}(lib));
(function(){lib.getCookie=function(name){var match=String(document.cookie).match(new RegExp(' ?'+name+'=(.*?)(;|$)'));return match&&match[1]?match[1]:null;};lib.setCookie=function(name,value,expires,path){path=path||'/';expires=Number(expires)||0;document.cookie=name+'='+value+(expires>=0?'; expires='+new Date(expires).toUTCString():'')+'; path='+path;};lib.deleteCookie=function(name){lib.setCookie(name,'',0);};}());
(function(){var CNAME='plista_referral',pref,dref;lib.getReferrerHost=function(){var ref=dref+'/';ref=ref.match(/^.*?\/\/.*?\//);return ref?ref[0]:'';};lib.getReferrer=function(){return String(document.referrer);};lib.isOnsiteReferral=function(){return pref?pref===dref:false;};function load(){pref=lib.getCookie(CNAME);dref=lib.getReferrer();}
function onclick(){lib.setCookie(CNAME,document.location.href,new Date().getTime()+10000);}
function init(widget){var i,items=lib.querySelectorAll('.'+lib.prefix+widget.name+'_item');for(i=0;i<items.length;i+=1){lib.addEventListener(lib.event.MOUSEDOWN,onclick,items[i]);lib.addEventListener(lib.event.CLICK,onclick,items[i]);}}
function complete(){lib.deleteCookie(CNAME);}
lib.addEventListener(lib.event.LOAD,load);lib.addEventListener(lib.event.WIDGET_INIT,init);lib.addEventListener(lib.event.COMPLETE,complete);}());
(function(lib,document,window){var ready,loading;function init(){if(lib.ssp||lib.noCache){return;}
loading=true;lib.loadScript(lib.cdnpath+'async/'+lib.publickey+'/'+encodeURIComponent(lib.name)+'.js',preload);}
function preload(){loading=false;if(ready){load();}}
function load(){if(loading){ready=true;return;}
lib.readyState=2;lib.status+=1;if(lib.modules&&lib.modules.length){lib.addModules(lib.modules);}
if(lib.context.css){lib.addCSS(lib.context.css,lib.publickey);}
if(lib.context.script){lib.context.script();}
lib.dispatchEvent(lib.event.LOAD);lib.detectAdBlock(lib.loadWidgets);}
function complete(widgets){var i;for(i in widgets){if(widgets.hasOwnProperty(i)&&widgets[i]){lib.addWidget(widgets[i]);}}
lib.readyState=4;lib.status+=100;lib.dispatchEvent(lib.event.COMPLETE);}
function widgetload(e){lib.removeEventListener(lib.event.WIDGET_LOAD,widgetload);if(e.success){e.useragent=e.useragent||{};lib.language=e.useragent.language||'en';lib.browser=e.useragent.browser||'unknown';lib.system=e.useragent.system||'unknown';lib.loadModules(e.modules,function(){complete(e.widgets);});}}
lib.activeWidgets=[];lib.enabled=lib.enabled||[];lib.disabled=lib.disabled||[];lib.addWidget=function(widget){new lib[widget.base](widget);};lib.loadWidgets=function(widgets){var i,ii,w,rw;if(lib.ssp||lib.noCache){lib.activeWidgets=lib.widgets||[];}
widgets=widgets||lib.widgets||[];if(widgets.length){rw=true;}else{if(lib.activeWidgets.length){for(i=0;i<lib.activeWidgets.length;i+=1){w=lib.activeWidgets[i];for(ii=0;ii<lib.querySelectorAll('#'+lib.prefix+w+', ['+lib.dataMode+'="'+lib.prefix+w+'"]').length;ii+=1){widgets.push(w);}}}}
if(!rw&&lib.enabled){widgets=widgets.concat(lib.unique(lib.enabled));}
if(!widgets.length){lib.loadModules([]);return false;}
lib.addEventListener(lib.event.WIDGET_LOAD,widgetload);lib.call(lib.event.WIDGET_LOAD,lib.getSettings({widgets:widgets,rw:rw}));return true;};lib.getSettings=function(data){data=data||{};var uc=[];if(lib.getCookie('slide.removed')){uc.push('slide');}
if(lib.getCookie('sticky.removed')){uc.push('sticky');}
if(uc.length){data.uc=uc;}
if(lib.disabled&&lib.disabled.length){data.ds=lib.unique(lib.disabled);}
data.c=lib.categories;data.ab=lib.hasAdBlock();data.fl=lib.hasFlash();data.vo=lib.hasVideo();data.pm=window.postMessage!==void 0;data.sc=window.screen&&screen.width+'x'+screen.height;data.px=window.devicePixelRatio||1;data.xc=lib.exclude||void 0;data.fr=lib.isFrame||void 0;data.nc=lib.noCache||void 0;data.tc=lib.isTouch||void 0;data.fc=lib.fc!==void 0?lib.fc:void 0;data.kw=lib.keywords;data.or=lib.isOnsiteReferral()||void 0;data.rf=lib.getReferrerHost()||void 0;data.rv=lib.context&&lib.context.rev||0;return data;};init();lib.addEventListener(lib.event.INIT,load);}(lib,document,window));
(function(){var t,widgets=[];if(lib.widgets&&lib.widgets.length){lib.widgets.push=function(){Array.prototype.push.apply(widgets,arguments);Array.prototype.push.apply(lib.widgets,arguments);if(lib.readyState>2){loadWidgets();}};}
function loadWidgets(){clearTimeout(t);t=setTimeout(loadWidgetsDelayed,50);}
function loadWidgetsDelayed(){if(widgets.length){lib.loadWidgets(widgets);widgets=[];}}
lib.addEventListener(lib.event.COMPLETE,loadWidgets);}());
(function(){var y,v=[],TICK=250;function Visibility(widget){this.widget=widget;this.t=0;}
Visibility.prototype.isVisible=function(){var x,b,r=lib.getRect(this.widget.container),db=document.body,de=document.documentElement,dh=Math.max(db.scrollHeight,db.offsetHeight,de.clientHeight,de.scrollHeight,de.offsetHeight),w=window.innerWidth||de.clientWidth||db.clientWidth,h=window.innerHeight||de.clientHeight||db.clientHeight;if(this.widget.view.last){b=r.bottom<=h&&r.bottom>=0;}else{x=r.height*this.widget.view.percent;b=r.bottom>=x&&r.top<=h-x;}
if(b&&r.right>=0&&r.left<=(w-100)&&dh>=(r.height+50)&&r.height>0&&r.width>0){this.t+=TICK;if(this.t>=this.widget.view.time){lib.call(lib.event.WIDGET_VIEW,{eventtype:14,widgetname:this.widget.name,bv:this.widget.bv,items:this.widget.items,campaigns:this.widget.campaigns});this.widget.dispatchEvent(lib.event.WIDGET_VIEW);return true;}}else{this.t=0;}
return false;};function init(widget){if(lib.hasAdBlock()===1||lib.sandbox||window.$sf){return;}
v.push(new Visibility(widget));y=y||setInterval(tick,TICK);}
function tick(){for(var i=0;i<v.length;i+=1){if(v[i]&&v[i].isVisible()){v[i]=void 0;}}}
function unload(){clearInterval(y);y=void 0;v=[];}
lib.addEventListener(lib.event.WIDGET_INIT,init);lib.addEventListener(lib.event.UNLOAD,unload);}());
(function(lib,document,window){var height=14,width=16,mwidth=110,pxr=window.devicePixelRatio>1?2:1,cs=lib.prefix+'oba';function init(){lib.addCSS(''+'.'+cs+'{display:block;cursor:pointer;margin-left:4px;width:'+width+'px;height:'+height+'px;background-repeat:no-repeat}'+'.'+cs+':hover{width:'+mwidth+'px}'+'.'+cs+'_hint{width:'+mwidth+'px!important}'+'.'+cs+'_right{float:right;background-position:right top}'+'.'+cs+'_right:hover{background-position:right -'+height+'px;}'+'.'+cs+'_left{margin-left:0}'+'.'+cs+'_left:hover{background-position:left -'+height+'px;}','oba');}
function background(p,a,t,l){return'url('+lib.cdnpath+'image/'+(p.getAttribute('data-pcd')?'pcd':'ad')+'choices'+(t?'2':'')+'/'+l+'/'+((height-1)*pxr)+'/'+color(p)+'/'+a+'/1.png'+')';}
function color(p){var c=lib.getCSS(p,'color');if(c){c=c.replace(/ /g,'').match(/([0-9]+),([0-9]+),([0-9]+)/);c=c&&c[0]?c[0]:null;}
return c||'939393';}
function position(p){var l,n=document.createElement('span');n.className='plista-oba-image';p.parentNode.insertBefore(n,p);l=lib.getCSS(n,'position','static')==='absolute';p.parentNode.removeChild(n);return l?'left':'right';}
function paint(p,l,o){if(p.hasOBA){return;}
p.hasOBA=true;var t,s=document.createElement('span');s.setAttribute('data-optout',o);s.className=cs;s.onclick=click;if(pxr===2){s.style.backgroundSize='auto '+(height*pxr)+'px';}
if(p.className.indexOf('plista-powered')>-1){s.style.backgroundImage=background(p,0,t,l);s.className+=' '+cs+'_right';p.style.textAlign='right';p.insertBefore(s,p.firstChild);}else{t=p.getAttribute('data-oba').match(/^2;/);if(p.tagName.toLowerCase()==='img'){s.className+=' '+cs+'_hint';}
if(p.getAttribute('data-position')==='left'||position(p)==='left'){s.style.backgroundImage=background(p,2,t,l);s.className+=' '+cs+'_left';}else{s.style.backgroundImage=background(p,0,t,l);s.className+=' '+cs+'_right';}
p.parentNode.insertBefore(s,p);p.parentNode.removeChild(p);s.className='plista-oba '+s.className;}}
function click(e){window.open(this.getAttribute('data-optout'),'_newtab');e=e||window.event;e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}
return false;}
function render(widget){var i,q,w;if(widget.container&&widget.container.id){if(widget.oba===1){q='#'+widget.container.id+' .plista-powered';}else if(widget.oba===2){q='#'+widget.container.id+' span[data-oba], #'+widget.container.id+' img[data-oba]';}
w=lib.querySelectorAll(q);for(i=0;i<w.length;i+=1){paint(w[i],widget.language,widget.optout);}}}
lib.addEventListener(lib.event.WIDGET_INIT,render);lib.addEventListener(lib.event.LOAD,init);}(lib,document,window));load();lib.status+=0.001;}catch(error){(new Image()).src=lib.path+'errorreport.php?publickey='+lib.publickey+'&msgkey=remotedata&error='+encodeURIComponent(error.toString()+(error.stack&&':'+error.stack.toString().substr(0,1000)));}}(window.PLISTA,'PLISTA','http://farm.plista.com/','http://static.plista.com/','http://click.plista.com/','http://www.plista.com/','plista_widget_','3-0-6',document,window));}window.plista=PLISTA;PLISTA.items=PLISTA.items||[];
PLISTA.items.push=function(){PLISTA.item=arguments[0];Array.prototype.push.apply(PLISTA.items,arguments);};
PLISTA.flyad={enable:function(b){if(b){PLISTA.enabled.push('flyad')}else{PLISTA.disabled.push('flyad')}}};
PLISTA.listwidgets={slide:{enable:function(b){if(b){PLISTA.enabled.push('slide')}else{PLISTA.disabled.push('slide')}}}};
PLISTA.pictureads={enable:function(b){if(b){PLISTA.enabled.push('pictureads')}else{PLISTA.disabled.push('pictureads')}}};
PLISTA.partner={init:function(){}};