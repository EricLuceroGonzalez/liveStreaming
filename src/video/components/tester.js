var _gaq = _gaq || [];

var scriptHost = 'play.streamingvideoprovider.com';

if(document.currentScript) {
	var src = document.currentScript.src;

	if(src && typeof URL === 'function') {
		var url = new URL(src);
		var hostName = url.hostname;

		if(/(streamingvideoprovider\.com|webvideocore\.net)$/.test(hostName)) {
			scriptHost = hostName;
		}
	}
}

if(typeof SvpSwfObject === "undefined") var SvpSwfObject = {
	get: function() {
		if(typeof this.swfobject !== "undefined") return this.swfobject;
		/*! SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
		is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
		*/
		this.swfobject=function(){var D="undefined",r="object",T="Shockwave Flash",Z="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",S="SWFObjectExprInst",x="onreadystatechange",Q=window,h=document,t=navigator,V=false,X=[],o=[],P=[],K=[],I,p,E,B,L=false,a=false,m,G,j=true,l=false,O=function(){var ad=typeof h.getElementById!=D&&typeof h.getElementsByTagName!=D&&typeof h.createElement!=D,ak=t.userAgent.toLowerCase(),ab=t.platform.toLowerCase(),ah=ab?/win/.test(ab):/win/.test(ak),af=ab?/mac/.test(ab):/mac/.test(ak),ai=/webkit/.test(ak)?parseFloat(ak.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,aa=t.appName==="Microsoft Internet Explorer",aj=[0,0,0],ae=null;if(typeof t.plugins!=D&&typeof t.plugins[T]==r){ae=t.plugins[T].description;if(ae&&(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&t.mimeTypes[q].enabledPlugin)){V=true;aa=false;ae=ae.replace(/^.*\s+(\S+\s+\S+$)/,"$1");aj[0]=n(ae.replace(/^(.*)\..*$/,"$1"));aj[1]=n(ae.replace(/^.*\.(.*)\s.*$/,"$1"));aj[2]=/[a-zA-Z]/.test(ae)?n(ae.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0}}else{if(typeof Q.ActiveXObject!=D){try{var ag=new ActiveXObject(Z);if(ag){ae=ag.GetVariable("$version");if(ae){aa=true;ae=ae.split(" ")[1].split(",");aj=[n(ae[0]),n(ae[1]),n(ae[2])]}}}catch(ac){}}}return{w3:ad,pv:aj,wk:ai,ie:aa,win:ah,mac:af}}(),i=function(){if(!O.w3){return}if((typeof h.readyState!=D&&(h.readyState==="complete"||h.readyState==="interactive"))||(typeof h.readyState==D&&(h.getElementsByTagName("body")[0]||h.body))){f()}if(!L){if(typeof h.addEventListener!=D){h.addEventListener("DOMContentLoaded",f,false)}if(O.ie){h.attachEvent(x,function aa(){if(h.readyState=="complete"){h.detachEvent(x,aa);f()}});if(Q==top){(function ac(){if(L){return}try{h.documentElement.doScroll("left")}catch(ad){setTimeout(ac,0);return}f()}())}}if(O.wk){(function ab(){if(L){return}if(!/loaded|complete/.test(h.readyState)){setTimeout(ab,0);return}f()}())}}}();function f(){if(L||!document.getElementsByTagName("body")[0]){return}try{var ac,ad=C("span");ad.style.display="none";ac=h.getElementsByTagName("body")[0].appendChild(ad);ac.parentNode.removeChild(ac);ac=null;ad=null}catch(ae){return}L=true;var aa=X.length;for(var ab=0;ab<aa;ab++){X[ab]()}}function M(aa){if(L){aa()}else{X[X.length]=aa}}function s(ab){if(typeof Q.addEventListener!=D){Q.addEventListener("load",ab,false)}else{if(typeof h.addEventListener!=D){h.addEventListener("load",ab,false)}else{if(typeof Q.attachEvent!=D){g(Q,"onload",ab)}else{if(typeof Q.onload=="function"){var aa=Q.onload;Q.onload=function(){aa();ab()}}else{Q.onload=ab}}}}}function Y(){var aa=h.getElementsByTagName("body")[0];var ae=C(r);ae.setAttribute("style","visibility: hidden;");ae.setAttribute("type",q);var ad=aa.appendChild(ae);if(ad){var ac=0;(function ab(){if(typeof ad.GetVariable!=D){try{var ag=ad.GetVariable("$version");if(ag){ag=ag.split(" ")[1].split(",");O.pv=[n(ag[0]),n(ag[1]),n(ag[2])]}}catch(af){O.pv=[8,0,0]}}else{if(ac<10){ac++;setTimeout(ab,10);return}}aa.removeChild(ae);ad=null;H()}())}else{H()}}function H(){var aj=o.length;if(aj>0){for(var ai=0;ai<aj;ai++){var ab=o[ai].id;var ae=o[ai].callbackFn;var ad={success:false,id:ab};if(O.pv[0]>0){var ah=c(ab);if(ah){if(F(o[ai].swfVersion)&&!(O.wk&&O.wk<312)){w(ab,true);if(ae){ad.success=true;ad.ref=z(ab);ad.id=ab;ae(ad)}}else{if(o[ai].expressInstall&&A()){var al={};al.data=o[ai].expressInstall;al.width=ah.getAttribute("width")||"0";al.height=ah.getAttribute("height")||"0";if(ah.getAttribute("class")){al.styleclass=ah.getAttribute("class")}if(ah.getAttribute("align")){al.align=ah.getAttribute("align")}var ak={};var aa=ah.getElementsByTagName("param");var af=aa.length;for(var ag=0;ag<af;ag++){if(aa[ag].getAttribute("name").toLowerCase()!="movie"){ak[aa[ag].getAttribute("name")]=aa[ag].getAttribute("value")}}R(al,ak,ab,ae)}else{b(ah);if(ae){ae(ad)}}}}}else{w(ab,true);if(ae){var ac=z(ab);if(ac&&typeof ac.SetVariable!=D){ad.success=true;ad.ref=ac;ad.id=ac.id}ae(ad)}}}}}X[0]=function(){if(V){Y()}else{H()}};function z(ac){var aa=null,ab=c(ac);if(ab&&ab.nodeName.toUpperCase()==="OBJECT"){if(typeof ab.SetVariable!==D){aa=ab}else{aa=ab.getElementsByTagName(r)[0]||ab}}return aa}function A(){return !a&&F("6.0.65")&&(O.win||O.mac)&&!(O.wk&&O.wk<312)}function R(ad,ae,aa,ac){var ah=c(aa);aa=W(aa);a=true;E=ac||null;B={success:false,id:aa};if(ah){if(ah.nodeName.toUpperCase()=="OBJECT"){I=J(ah);p=null}else{I=ah;p=aa}ad.id=S;if(typeof ad.width==D||(!/%$/.test(ad.width)&&n(ad.width)<310)){ad.width="310"}if(typeof ad.height==D||(!/%$/.test(ad.height)&&n(ad.height)<137)){ad.height="137"}var ag=O.ie?"ActiveX":"PlugIn",af="MMredirectURL="+encodeURIComponent(Q.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+ag+"&MMdoctitle="+encodeURIComponent(h.title.slice(0,47)+" - Flash Player Installation");if(typeof ae.flashvars!=D){ae.flashvars+="&"+af}else{ae.flashvars=af}if(O.ie&&ah.readyState!=4){var ab=C("div");aa+="SWFObjectNew";ab.setAttribute("id",aa);ah.parentNode.insertBefore(ab,ah);ah.style.display="none";y(ah)}u(ad,ae,aa)}}function b(ab){if(O.ie&&ab.readyState!=4){ab.style.display="none";var aa=C("div");ab.parentNode.insertBefore(aa,ab);aa.parentNode.replaceChild(J(ab),aa);y(ab)}else{ab.parentNode.replaceChild(J(ab),ab)}}function J(af){var ae=C("div");if(O.win&&O.ie){ae.innerHTML=af.innerHTML}else{var ab=af.getElementsByTagName(r)[0];if(ab){var ag=ab.childNodes;if(ag){var aa=ag.length;for(var ad=0;ad<aa;ad++){if(!(ag[ad].nodeType==1&&ag[ad].nodeName=="PARAM")&&!(ag[ad].nodeType==8)){ae.appendChild(ag[ad].cloneNode(true))}}}}}return ae}function k(aa,ab){var ac=C("div");ac.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+aa+"'>"+ab+"</object>";return ac.firstChild}function u(ai,ag,ab){var aa,ad=c(ab);ab=W(ab);if(O.wk&&O.wk<312){return aa}if(ad){var ac=(O.ie)?C("div"):C(r),af,ah,ae;if(typeof ai.id==D){ai.id=ab}for(ae in ag){if(ag.hasOwnProperty(ae)&&ae.toLowerCase()!=="movie"){e(ac,ae,ag[ae])}}if(O.ie){ac=k(ai.data,ac.innerHTML)}for(af in ai){if(ai.hasOwnProperty(af)){ah=af.toLowerCase();if(ah==="styleclass"){ac.setAttribute("class",ai[af])}else{if(ah!=="classid"&&ah!=="data"){ac.setAttribute(af,ai[af])}}}}if(O.ie){P[P.length]=ai.id}else{ac.setAttribute("type",q);ac.setAttribute("data",ai.data)}ad.parentNode.replaceChild(ac,ad);aa=ac}return aa}function e(ac,aa,ab){var ad=C("param");ad.setAttribute("name",aa);ad.setAttribute("value",ab);ac.appendChild(ad)}function y(ac){var ab=c(ac);if(ab&&ab.nodeName.toUpperCase()=="OBJECT"){if(O.ie){ab.style.display="none";(function aa(){if(ab.readyState==4){for(var ad in ab){if(typeof ab[ad]=="function"){ab[ad]=null}}ab.parentNode.removeChild(ab)}else{setTimeout(aa,10)}}())}else{ab.parentNode.removeChild(ab)}}}function U(aa){return(aa&&aa.nodeType&&aa.nodeType===1)}function W(aa){return(U(aa))?aa.id:aa}function c(ac){if(U(ac)){return ac}var aa=null;try{aa=h.getElementById(ac)}catch(ab){}return aa}function C(aa){return h.createElement(aa)}function n(aa){return parseInt(aa,10)}function g(ac,aa,ab){ac.attachEvent(aa,ab);K[K.length]=[ac,aa,ab]}function F(ac){ac+="";var ab=O.pv,aa=ac.split(".");aa[0]=n(aa[0]);aa[1]=n(aa[1])||0;aa[2]=n(aa[2])||0;return(ab[0]>aa[0]||(ab[0]==aa[0]&&ab[1]>aa[1])||(ab[0]==aa[0]&&ab[1]==aa[1]&&ab[2]>=aa[2]))?true:false}function v(af,ab,ag,ae){var ad=h.getElementsByTagName("head")[0];if(!ad){return}var aa=(typeof ag=="string")?ag:"screen";if(ae){m=null;G=null}if(!m||G!=aa){var ac=C("style");ac.setAttribute("type","text/css");ac.setAttribute("media",aa);m=ad.appendChild(ac);if(O.ie&&typeof h.styleSheets!=D&&h.styleSheets.length>0){m=h.styleSheets[h.styleSheets.length-1]}G=aa}if(m){if(typeof m.addRule!=D){m.addRule(af,ab)}else{if(typeof h.createTextNode!=D){m.appendChild(h.createTextNode(af+" {"+ab+"}"))}}}}function w(ad,aa){if(!j){return}var ab=aa?"visible":"hidden",ac=c(ad);if(L&&ac){ac.style.visibility=ab}else{if(typeof ad==="string"){v("#"+ad,"visibility:"+ab)}}}function N(ab){var ac=/[\\\"<>\.;]/;var aa=ac.exec(ab)!=null;return aa&&typeof encodeURIComponent!=D?encodeURIComponent(ab):ab}var d=function(){if(O.ie){window.attachEvent("onunload",function(){var af=K.length;for(var ae=0;ae<af;ae++){K[ae][0].detachEvent(K[ae][1],K[ae][2])}var ac=P.length;for(var ad=0;ad<ac;ad++){y(P[ad])}for(var ab in O){O[ab]=null}O=null;for(var aa in swfobject){swfobject[aa]=null}swfobject=null})}}();return{registerObject:function(ae,aa,ad,ac){if(O.w3&&ae&&aa){var ab={};ab.id=ae;ab.swfVersion=aa;ab.expressInstall=ad;ab.callbackFn=ac;o[o.length]=ab;w(ae,false)}else{if(ac){ac({success:false,id:ae})}}},getObjectById:function(aa){if(O.w3){return z(aa)}},embedSWF:function(af,al,ai,ak,ab,ae,ad,ah,aj,ag){var ac=W(al),aa={success:false,id:ac};if(O.w3&&!(O.wk&&O.wk<312)&&af&&al&&ai&&ak&&ab){w(ac,false);M(function(){ai+="";ak+="";var an={};if(aj&&typeof aj===r){for(var aq in aj){an[aq]=aj[aq]}}an.data=af;an.width=ai;an.height=ak;var ar={};if(ah&&typeof ah===r){for(var ao in ah){ar[ao]=ah[ao]}}if(ad&&typeof ad===r){for(var am in ad){if(ad.hasOwnProperty(am)){var ap=(l)?encodeURIComponent(am):am,at=(l)?encodeURIComponent(ad[am]):ad[am];if(typeof ar.flashvars!=D){ar.flashvars+="&"+ap+"="+at}else{ar.flashvars=ap+"="+at}}}}if(F(ab)){var au=u(an,ar,al);if(an.id==ac){w(ac,true)}aa.success=true;aa.ref=au;aa.id=au.id}else{if(ae&&A()){an.data=ae;R(an,ar,al,ag);return}else{w(ac,true)}}if(ag){ag(aa)}})}else{if(ag){ag(aa)}}},switchOffAutoHideShow:function(){j=false},enableUriEncoding:function(aa){l=(typeof aa===D)?true:aa},ua:O,getFlashPlayerVersion:function(){return{major:O.pv[0],minor:O.pv[1],release:O.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(ac,ab,aa){if(O.w3){return u(ac,ab,aa)}else{return undefined}},showExpressInstall:function(ac,ad,aa,ab){if(O.w3&&A()){R(ac,ad,aa,ab)}},removeSWF:function(aa){if(O.w3){y(aa)}},createCSS:function(ad,ac,ab,aa){if(O.w3){v(ad,ac,ab,aa)}},addDomLoadEvent:M,addLoadEvent:s,getQueryParamValue:function(ad){var ac=h.location.search||h.location.hash;if(ac){if(/\?/.test(ac)){ac=ac.split("?")[1]}if(ad==null){return N(ac)}var ab=ac.split("&");for(var aa=0;aa<ab.length;aa++){if(ab[aa].substring(0,ab[aa].indexOf("="))==ad){return N(ab[aa].substring((ab[aa].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var aa=c(S);if(aa&&I){aa.parentNode.replaceChild(I,aa);if(p){w(p,true);if(O.ie){I.style.display="block"}}if(E){E(B)}}a=false}},version:"2.3"}}();
		return this.swfobject;
	},
	destroy: function() {
		delete this.swfobject;
	}
};

if(typeof svp_player_color === "undefined") svp_player_color = undefined;
if(typeof svp_player_color1 === "undefined") svp_player_color1 = undefined;
if(typeof svp_player_color_ratio === "undefined") svp_player_color_ratio = undefined;
if(typeof svp_player_alpha === "undefined") svp_player_alpha = undefined;
if(typeof svp_player_height === "undefined") svp_player_height = undefined;
if(typeof svp_player_width === "undefined") svp_player_width = undefined;
if(typeof svp_transparent === "undefined") svp_transparent = undefined;
if(typeof svp_stretch_video === "undefined") svp_stretch_video = undefined;
if(typeof svp_extra_buttons === "undefined") svp_extra_buttons = undefined;
if(typeof svp_pause === "undefined") svp_pause = undefined;
if(typeof svp_auto_hide === "undefined") svp_auto_hide = undefined;
if(typeof svp_brand_new_window === "undefined") svp_brand_new_window = undefined;
if(typeof svp_no_fullscreen === "undefined") svp_no_fullscreen = undefined;
if(typeof svp_playlist_id === "undefined") svp_playlist_id = undefined;
if(typeof svp_clip_id === "undefined") svp_clip_id = undefined;
if(typeof svp_vskin === "undefined") svp_vskin = undefined;
if(typeof svp_player === "undefined") svp_player = undefined;
if(typeof svp_no_controls === "undefined") svp_no_controls = undefined;
if(typeof svp_start_img === "undefined") svp_start_img = undefined;
if(typeof svp_start_volume === "undefined") svp_start_volume = undefined;
if(typeof nexus_user_id === "undefined") nexus_user_id = undefined;
if(typeof svp_uk === "undefined") svp_uk = undefined;
if(typeof svp_popapp === "undefined") svp_popapp = undefined;
if(typeof svp_debug === "undefined") svp_debug = undefined;
if(typeof svp_preview === "undefined") svp_preview = undefined;
if(typeof svp_use_div === "undefined") svp_use_div = undefined;
if(typeof svp_ext === "undefined") svp_ext = undefined;
if(typeof svp_referer === "undefined") svp_referer = undefined;
if(typeof svp_live_id === "undefined") svp_live_id = undefined;
if(typeof svp_sel_playlist === "undefined") svp_sel_playlist = undefined;
if(typeof svp_sel_multiplaylist === "undefined") svp_sel_multiplaylist = undefined;
if(typeof svp_use_html5 === "undefined") svp_use_html5 = undefined;
if(typeof svp_layout === "undefined") svp_layout = undefined;
if(typeof svp_theme === "undefined") svp_theme = undefined;
if(typeof svp_is_inversed === "undefined") svp_is_inversed = undefined;
if(typeof svp_is_responsive === "undefined") svp_is_responsive = undefined;
if(typeof svp_is_vertical === "undefined") svp_is_vertical = undefined;
if(typeof svp_one_thumb_per_row === "undefined") svp_one_thumb_per_row = undefined;
if(typeof svp_thumbs_size === "undefined") svp_thumbs_size = undefined;
if(typeof svp_services_entry === "undefined") svp_services_entry = undefined;
if(typeof svp_site_root === "undefined") svp_site_root = undefined;
if(typeof svp_disable_hash === "undefined") svp_disable_hash = undefined;
if(typeof svp_hide_playlist === "undefined") svp_hide_playlist = undefined;
if(typeof svp_hide_description === "undefined") svp_hide_description = undefined;
if(typeof svp_hide_live_chat === "undefined") svp_hide_live_chat = undefined;
if(typeof svp_description_position === "undefined") svp_description_position = undefined;
if(typeof svp_playlist_position === "undefined") svp_playlist_position = undefined;
if(typeof svp_chat_position === "undefined") svp_chat_position = undefined;

if(typeof hashObject === "undefined") var hashObject = {};
var hash = window.location.hash;

function buildPlayerHash() {
	var params = [], key = null;
	for(key in hashObject) {
		params.push(key + '=' + hashObject[key]);
	}
	return '#' + params.join('&');
}

function parsePlayerHash(windowHash) {
	var hashTempObject = {};
	if(windowHash.charAt(0) === '#') windowHash = windowHash.substring(1);
	var params = windowHash.split('&');
	var length = params.length;
	for(var i = 0; i < length; i++) {
		var attribute =  params[i];
		var attributes = attribute.split('=');
		var value = attributes[1];
		if(typeof value !== "undefined") hashTempObject[attributes[0]] = value;
	}
	return hashTempObject;
}

var player_set_page = function(new_title, page, key) {
	if(typeof key !== "undefined") {
		hashObject[key] = page;
		page = buildPlayerHash();
	}
	if(new_title) document.title = new_title;
	if(page !== window.location.hash) {
		window.location.hash = page;
		var k = null;
		for(k in VappHashMap) {
			VappHashMap[k].currentHash = page;
		}
	}
};

var player_get_hash = function(key) {
	if(typeof key !== "undefined") {
		hashObject = parsePlayerHash(window.location.hash);
		return hashObject[key];
	}
	else {
		return window.location.hash;
	}
};

if(hash.indexOf('ticket=') !== -1) {
	var params = hash.split('&');
	var ticketCodeData = typeof params[0] !== "undefined" ? params[0] : "";
	var svpHashTicketCode = ticketCodeData.replace('#ticket=', '');
	var clip = typeof params[1] !== "undefined" ? params[1] : "";
	if(clip.indexOf('clip=') !== -1) {
		var clipKey = clip.replace('clip=', '');
		window.location.hash='#clip='+clipKey;
	}
}

if(typeof SvpBrowserDetect === "undefined") var SvpBrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	getParam: function(param) {
		var value = "unknown parameter";
		switch(param) {
			case 'browser' :
				value = this.browser;
			break;
			case 'version' :
				value = this.version;
			break;
			case 'OS' :
				value = this.OS;
			break;
		}
		return value;
	},
	searchString: function (data) {
		for(var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if(typeof dataString != "undefined" && dataString) {
				if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
			}
			else if(typeof dataProp != "undefined" && dataProp) return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
		{string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb"},
		{string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version"},
		{prop: window.opera, identity: "Opera"},
		{string: navigator.vendor, subString: "iCab", identity: "iCab"},
		{string: navigator.vendor, subString: "KDE", identity: "Konqueror"},
		{string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
		{string: navigator.vendor, subString: "Camino", identity: "Camino"},
		{string: navigator.userAgent, subString: "Netscape", identity: "Netscape"}, //for newer Netscapes (6+)
		{string: navigator.userAgent, subString: "MSIE", identity: "Explorer",versionSearch: "MSIE"},
		{string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv"},
		{string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"} //for older Netscapes (4-)
	],
	dataOS : [
		{string: navigator.userAgent, subString: "iPhone", identity: "iPlatform"},
		{string: navigator.userAgent, subString: "iPod", identity: "iPlatform"},
		{string: navigator.userAgent, subString: "iPad", identity: "iPlatform"},
		{string: navigator.platform, subString: "Win", identity: "Windows"},
		{string: navigator.platform, subString: "Mac", identity: "Mac"},
		{string: navigator.platform, subString: "Linux", identity: "Linux"}
	]
};
if(typeof SvpPlayerIndexes === "undefined") var SvpPlayerIndexes = 0;
if(typeof svpJSLoader === "undefined") {
	var svpJSLoader={};
	svpJSLoader.JS=(function(){
		var h,stack={},loaded=[],tr=0,mtr=5,tm=3000;
		function load(u,sC,eC,nt){
			var lock=true;
			for(var i=0;i<loaded.length;i++){
				if(loaded[i]===u){
					sC();return false;
				}
			}
			if(nt===1) lock=false;
			else{
				if(typeof stack[u]==='undefined'){
					stack[u]=[];
					lock=false;
				}
				stack[u].push({sC:sC,eC:eC});
			}
			if(!lock) {
				var s=document.createElement('script');
				s.id='svp_js_'+(new Date().getTime())+Math.floor((Math.random()*1000));
				s.src=u;
				s.async=true;
				s.onload=s.onreadystatechange=function(){
					if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){
						loaded.push(u);
						clearTimeout(t);
						s.onload=s.onreadystatechange=null;
						for(var i=0;i<stack[u].length;i++){
							var ob=stack[u][i].sC;
							if(typeof ob!=='undefined') ob();
						}
						delete stack[u];
					}
				};
				var t=setTimeout(function(){
					clearTimeout(t);
					h.removeChild(s);
					if(tr<mtr){
						tr++;
						svpJSLoader.JS.load(u,sC,eC,1);
					}
					else{
						tr=0;
						for(var i=0;i<stack[u].length;i++){
							var ob=stack[u][i].eC;
							if(typeof ob!=='undefined') ob();
						}
						delete stack[u];
					}
				},tm);
				if(!h) h=document.getElementsByTagName('head')[0];
				h.appendChild(s);
			}
		}
		return {
			load:load
		};
	}());
}

function HTML5VappPlayer(vappController) {
	this.id = vappController.use_div;
	this.player_height = vappController.player_height;
	this.vars = vappController.vars;
	this.iframe = null;
	this.events = {};

	this.isReady = false;
	this.isPlaying = false;
	this.isComplete = false;
	this.isLive = false;
	this.currentSecond = 0;
	this.duration = 0;
	this.volume = 0;
	this.videoID = '';

	this.initGetters();
	this.build();
}

HTML5VappPlayer.prototype.initGetters = function() {
	Object.defineProperty(this, 'style', {
		get: function() {
			return this.iframe.style;
		}
	});
	Object.defineProperty(this, 'scrollLeft', {
		get: function() {
			return this.iframe.scrollLeft;
		}
	});
	Object.defineProperty(this, 'scrollTop', {
		get: function() {
			return this.iframe.scrollTop;
		}
	});
	Object.defineProperty(this, 'offsetLeft', {
		get: function() {
			return this.iframe.offsetLeft;
		}
	});
	Object.defineProperty(this, 'offsetTop', {
		get: function() {
			return this.iframe.offsetTop;
		}
	});
	Object.defineProperty(this, 'offsetParent', {
		get: function() {
			return this.iframe.offsetParent;
		}
	});
	Object.defineProperty(this, 'parentNode', {
		get: function() {
			return this.iframe.parentNode;
		}
	});
};

HTML5VappPlayer.prototype.encode = function(key, value, prefix) {
	if(typeof prefix === 'undefined') {
		prefix = '';
	}

	return prefix + encodeURIComponent(key) + '=' + encodeURIComponent(value);
};

HTML5VappPlayer.prototype.build = function() {
	var container = document.getElementById(this.id);
	var clipId = player_get_hash('clip');
	var time = player_get_hash('time');
	var src = this.vars.site_root + 'vapp.html?' + this.encode('project_id', this.vars.player_id) + this.encode('services_entry', this.vars.services_entry, '&');

	if(this.vars.uk) src += this.encode('uk', this.vars.uk, '&');
	if(clipId) src += this.encode('clip_id', clipId, '&');
	if(time) src += this.encode('start_time', time, '&');
	if(this.vars.layout) src += this.encode('layout', this.vars.layout, '&');
	if(this.vars.theme) src += this.encode('theme', this.vars.theme, '&');
	if(this.vars.is_inversed) src += this.encode('is_inversed', '1', '&');
	if(this.vars.is_responsive) src += this.encode('is_responsive', '1', '&');
	if(this.vars.is_vertical) src += this.encode('is_vertical', '1', '&');
	if(this.vars.one_thumb_per_row) src += this.encode('one_thumb_per_row', '1', '&');
	if(this.vars.thumbs_size) src += this.encode('thumbs_size', this.vars.thumbs_size, '&');
	if(this.vars.sel_playlist) src += this.encode('single_playlist', this.vars.sel_playlist, '&');
	if(this.vars.sel_multiplaylist) src += this.encode('multi_playlist', this.vars.sel_multiplaylist, '&');
	if(this.vars.live_id) src += this.encode('live_video', this.vars.live_id, '&');
	if(this.vars.disable_hash) src += this.encode('disable_hash', '1', '&');
	if(this.vars.hide_playlist) src += this.encode('hide_playlist', '1', '&');
	if(this.vars.hide_description) src += this.encode('hide_description', '1', '&');
	if(this.vars.hide_live_chat) src += this.encode('hide_live_chat', '1', '&');
	if(this.vars.description_position) src += this.encode('description_position', '1', '&');
	if(this.vars.playlist_position) src += this.encode('playlist_position', '1', '&');
	if(this.vars.chat_position) src += this.encode('chat_position', '1', '&');
	if(this.vars.widget_height_behavior) src += this.encode('widget_height_behavior', '1', '&');
	if(this.vars.popapp) src += this.encode('popapp', '1', '&');

	this.iframe = document.createElement('iframe');
	this.iframe.setAttribute('src', src);
	this.iframe.setAttribute('allowtransparency', 'true');
	this.iframe.setAttribute('allowfullscreen', 'true');
	this.iframe.setAttribute('frameborder', '0');
	this.iframe.setAttribute('scrolling', 'no');
	this.iframe.setAttribute('style', 'width: 100%; height: 100%');

	this.onMessageListener = this.onMessage.bind(this);
	window.addEventListener('message', this.onMessageListener, false);

	container.innerHTML = '';
	container.classList.add('html5');
	container.appendChild(this.iframe);

	var iframeHeight = this.vars.widget_height_behavior ? this.player_height + 'px' : '';

	if(this.vars.is_responsive) {
		this.iframe.style.height = iframeHeight;
		container.style.height = iframeHeight;
		container.style.width = '100%';
	}
	else {
		this.iframe.style.position = 'absolute';
		this.iframe.style.top = '0';
		this.iframe.style.left = '0';
		this.iframe.style.height = '100%';
		container.style.position = 'relative';
		container.style.height = this.player_height + 'px';
	}
};

HTML5VappPlayer.prototype.doExecuteCommand = function(command) {
	this.sendMessage('executeCommand', command);
};

// PUBLIC API

// Player control methods

HTML5VappPlayer.prototype.doPlayerCommand = function(command) {
	this.sendMessage('playerCommand', command);
};

// Setters

HTML5VappPlayer.prototype.doPlayerSeekToAndPlay = function(seconds) {
	this.sendMessage('seekToAndPlay', seconds);
};

HTML5VappPlayer.prototype.doPlayerSeekToAndPause = function(seconds) {
	this.sendMessage('seekToAndPause', seconds);
};

HTML5VappPlayer.prototype.doPlayerSetVolume = function(volume) {
	this.sendMessage('setVolume', volume);
};

HTML5VappPlayer.prototype.doPlayerLoadVideo = function(videoID) {
	this.videoID = videoID;

	this.sendMessage('loadVideo', videoID);
};

// Getters

HTML5VappPlayer.prototype.get_isPlaying = function() {
	return this.isPlaying;
};

HTML5VappPlayer.prototype.get_isPaused = function() {
	return !this.isPlaying;
};

HTML5VappPlayer.prototype.get_isComplete = function() {
	return this.isComplete;
};

HTML5VappPlayer.prototype.get_isMuted = function() {
	return this.volume === 0;
};

HTML5VappPlayer.prototype.get_isLive = function() {
	return this.isLive;
};

HTML5VappPlayer.prototype.get_videoID = function() {
	return this.videoID;
};

HTML5VappPlayer.prototype.get_streamTime = function() {
	return this.currentSecond;
};

HTML5VappPlayer.prototype.get_streamDuration = function() {
	return this.duration;
};

HTML5VappPlayer.prototype.get_volume = function() {
	return this.volume;
};


HTML5VappPlayer.prototype.sendMessage = function(message, data) {
	this.iframe.contentWindow.postMessage({
		message: message,
		data: data
	}, '*');
};

HTML5VappPlayer.prototype.onMessage = function(event) {
	if(event.source !== this.iframe.contentWindow) {
		return;
	}

	var key = event.message ? 'message' : 'data';
	var details = event[key];
	var message = details.message;
	var data = details.data;

	this.processMessage(message, data);
};

HTML5VappPlayer.prototype.setHash = function(data) {
	var keys = Object.keys(data);
	var length = keys.length;
	var i = 0;
	var key = '';

	for(i; i < length; i++) {
		key = keys[i];
		player_set_page('', data[key], key);
	}
};

HTML5VappPlayer.prototype.processMessage = function(message, data) {
	switch(message) {
		case 'init': {
			this.onInitialization(data.height);
			break;
		}
		case 'ready': {
			this.isLive = data.isLive;
			this.duration = data.duration;
			this.volume = data.volume;
			this.videoID = data.videoID;
			break;
		}
		case 'hash': {
			this.setHash(data);
			break;
		}
		case 'set-height': {
			this.setHeight(data.height);
			break;
		}
		case 'isPlaying': {
			this.isPlaying = data;
			break;
		}
		case 'isComplete': {
			this.isComplete = data;
			break;
		}
		case 'isLive': {
			this.isLive = data;
			break;
		}
		case 'videoID': {
			this.videoID = data;
			break;
		}
		case 'currentSecond': {
			this.currentSecond = data;
			break;
		}
		case 'volume': {
			this.volume = data;
			break;
		}
		case 'player-event': {
			this.fireEvent(data.eventName, data.data);
			break;
		}
	}
};

HTML5VappPlayer.prototype.onInitialization = function(height) {
	this.setHeight(height);

	this.executeCommand = this.doExecuteCommand;
	this.playerLoadVideo = this.doPlayerLoadVideo;
	this.playerSetVolume = this.doPlayerSetVolume;
	this.playerSeekToAndPause = this.doPlayerSeekToAndPause;
	this.playerSeekToAndPlay = this.doPlayerSeekToAndPlay;
	this.playerCommand = this.doPlayerCommand;
};

HTML5VappPlayer.prototype.setHeight = function(height) {
	if(this.vars.popapp && !this.vars.widget_height_behavior && this.vars.is_responsive) {
		height = window.innerHeight + 'px';
	}

	this.style.height = height;
};

HTML5VappPlayer.prototype.fireEvent = function(name, data) {
	if(typeof this.events[name] === 'undefined') {
		return;
	}

	var length = this.events[name].length;
	var index = 0;
	var handler = null;

	for(index; index < length; index++) {
		handler = eval(this.events[name][index]);

		handler.call(this, data);
	}
};

HTML5VappPlayer.prototype.registerJSEvent = function(name, handler) {
	if(typeof this.events[name] === 'undefined') {
		this.events[name] = [];
	}

	this.events[name].push(handler);
};

HTML5VappPlayer.prototype.destroy = function() {
	window.removeEventListener('message', this.onMessageListener);
	delete this.onMessageListener;

	this.iframe.parentNode.removeChild(this.iframe);

	delete this.events;
	delete this.iframe;
	delete this.vars;
};

function VappController(common, data) {
	//Player variables
	this.object_id = "eplayer"+(new Date()).getTime();
	this.use_div = typeof common.use_div === "undefined" ? false: common.use_div;
	this.div = "svp_player"+(new Date()).getTime();
	this.content_id = this.use_div ? this.use_div : this.div;
	this.static_cache = typeof common.static_cache === "undefined" ? true : common.static_cache;
	this.player_width = common.player_width;
	this.player_height = common.player_height;
	this.is_ssl = true;
	this.site_root = (this.is_ssl ? 'https:' : 'http:') + '//' + scriptHost + '/';
	this.skin = typeof common.skin === "undefined" ? '0' : common.skin;
	this.services_entry = this.is_ssl ? "https://player.webvideocore.net/" : 'http://player.webvideocore.net/';
	this.popapp = typeof common.popapp === "undefined" ? false : common.popapp;
	this.isPPV = false;
	this.isDownloadable = false;
	this.isHTML5Player = false;

	// TRACKING VARIABLES
	this.clipName = '';
	this.gaTrackingEnabled = false;
	this.gaTrackingCode = '';
	this.refCode = '';
	// END OF TRACKING VARIABLES

	this.player_object = null;
	this.object = null;
	this.currentHash = '';
	this.defaultHash = window.location.hash;
	this.visibilityInterval = null;
	this.visibilityDelay = 250;

	this.iPlatform = true;
	this.iPlatformAjax = true;

	this.initHTMLPlayer = function() {
		this.player_object = new HTML5VappPlayer(this);
		this.object.player_instance = this.player_object;
		this.isHTML5Player = true;
	};

	this.build = function() {
		var _this = this;

		if(this.vars.use_html5) {
			this.initHTMLPlayer();
			return;
		}

		this.player_content_html =
		'<a href="http://get.adobe.com/flashplayer/" target="_blank" class="svp_no_flash" style="width:100%;position:absolute;left:0;top:0;height:100%;background: #000;text-align:center;-webkit-transform-style: preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;">'+
			'<div id="svp_no_flash_layer'+this.vars.clip_id+'" style="position:relative; display:inline-block; color:#fff; overflow:hidden; margin:auto 10px; text-align:center; font-size:11px; font-family:Arial, Helvetica, sans-serif;  top: 50%;transform: translateY(-50%);-moz-transform: translateY(-50%);-webkit-transform: translateY(-50%);">'+
				'<p align="left" style="color:#fff;margin:0;padding:0;font-size:12px;line-height16px;">'+
					'<img border="0" src="'+this.site_root+'img/flash_icon.png" style="float:left; margin-right:11px;width:20vmin; max-width:80px;"/>'+
					'<b style="font-size:14px;">ADOBE FLASH PLAYER</b><br />'+
					'You must activate <b>ADOBE Flash Player</b> to watch this playlist.<br /><br />'+
					'<span style="color:#3ac9f8; text-decoration:none; font-size:11px; font-weight:bold;" >Activate Flash</span>'+
				'</p>'+
			'</div>'+
		'</a>';

		var player_content = this.createElement('div', this.object_id, this.object_id);
		var player_wrapper = this.getObject(this.content_id);
		if(player_wrapper === null) return false;
		player_content.innerHTML = player_wrapper.innerHTML;
		player_wrapper.innerHTML = '';
		player_wrapper.appendChild(player_content);
		SvpSwfObject.get().embedSWF(this.site_root + 'dplayer' + this.skin + '.swf', this.object_id, this.player_width, this.player_height, "8", "", this.vars, this.params, this.attributes, function(e) {
			if(e.success !== true || e.ref === null) {
				_this.initHTMLPlayer();
			}
			else {
				_this.player_object = document.getElementById(_this.object_id);
				_this.object.player_instance = _this.player_object;
			}
		});
	};
	this.adjustHeight = function() {
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		var element = this.getObject(this.use_div);
		var multiplier = null;

		if (width <= 480 ) {
			multiplier = 1.8;
		}
		else if  (width <= 768) {
			multiplier = 1.3;
		}
		else {
			multiplier = 1;
		}

		element.style.height = parseInt((width * multiplier), 10)+ 'px';
	};
	this.onLoad = function() {
		this.adjustHeight();
	};
	this.onResize = function() {
		this.adjustHeight();
	};
	this.addListener = function(elem, evt, func) {
		if(elem === this._w && evt === 'load' && document.readyState === 'complete') {
			func();
			return true;
		}
		if(elem.addEventListener) { //W3C DOM
			elem.addEventListener(evt, func, false);
			return true;
		}
		else if(elem.attachEvent) { //IE DOM
			var r = elem.attachEvent("on" + evt, func);
			return r;
		}
		return false;
	};
	this.init = function(data) {
		var hasLocalStorage = typeof window.localStorage !== 'undefined';

		this.params = {quality: "high", swLiveConnect: "true", LOOP: "false", allowScriptAccess: "always"};
		this.data = data;
		this.attributes = {id: this.object_id, name: this.object_id};
		this._d = document;

		if(typeof this.data.color === "undefined") this.data.color = "";
		if(typeof this.data.color1 === "undefined") this.data.color1 = "";
		if(typeof this.data.color_ratio === "undefined") this.data.color_ratio = "";
		if(typeof this.data.color1alpha === "undefined") this.data.color1alpha = "";
		if(typeof this.player_height === "undefined") this.player_height = 341;
		if(typeof this.player_width === "undefined") this.player_width = 400;
		if(typeof this.data.transparent === "undefined") this.data.transparent = true;
		if(typeof this.data.stretch_video === "undefined") this.data.stretch_video = 0;
		if(typeof this.data.b_buttons === "undefined") this.data.b_buttons = "";
		if(typeof this.data.pause === "undefined" || this.data.pause === '0') this.data.pause = false;
		if(typeof this.data.autoHide === "undefined" || this.data.autoHide === '') this.data.autoHide = '0';
		if(typeof this.data.brandNW === "undefined" || this.data.brandNW === '') this.data.brandNW = '1';
		if(typeof this.data.no_fullscreen === "undefined" || this.data.no_fullscreen === '0') this.data.no_fullscreen = false;
		if(typeof this.data.no_controls === "undefined") this.data.no_controls = 0;
		if(typeof this.data.playlist_id === "undefined") this.data.playlist_id = '';
		if(typeof this.data.clip_id === "undefined") this.data.clip_id = '';
		if(typeof this.data.player_id === "undefined") this.data.player_id = '';
		if(typeof this.data.start_img === "undefined") this.data.start_img = 0;
		if(typeof this.data.start_volume === "undefined") this.data.start_volume = '';
		if(typeof this.data.nexusUser === "undefined") this.data.nexusUser = '';
		if(typeof this.data.uk === "undefined") this.data.uk = '';
		if(typeof this.data.debug === "undefined") this.data.debug = false;
		if(typeof this.data.preview === "undefined") this.data.preview = false;
		if(typeof this.data.use_html5 === "undefined") this.data.use_html5 = false;
		if(typeof this.data.layout === "undefined") this.data.layout = 'default';
		if(typeof this.data.theme === "undefined") this.data.theme = 'light';
		if(typeof this.data.is_inversed === "undefined") this.data.is_inversed = false;
		if(typeof this.data.is_responsive === "undefined") this.data.is_responsive = false;
		if(typeof this.data.is_vertical === "undefined") this.data.is_vertical = false;
		if(typeof this.data.one_thumb_per_row === "undefined") this.data.one_thumb_per_row = false;
		if(typeof this.data.thumbs_size === "undefined") this.data.thumbs_size = false;
		if(typeof this.data.disable_hash === "undefined") this.data.disable_hash = false;
		if(typeof this.data.hide_playlist === "undefined") this.data.hide_playlist = false;
		if(typeof this.data.hide_description === "undefined") this.data.hide_description = false;
		if(typeof this.data.hide_live_chat === "undefined") this.data.hide_live_chat = true;
		if(typeof this.data.description_position === "undefined") this.data.description_position = false;
		if(typeof this.data.playlist_position === "undefined") this.data.playlist_position = false;
		if(typeof this.data.chat_position === "undefined") this.data.chat_position = false;
		if(typeof this.data.popapp === "undefined") this.data.popapp = false;
		if(typeof this.data.widget_height_behavior === "undefined") this.data.widget_height_behavior = this.data.is_responsive === false || this.data.is_responsive === '' ? '1' : '0';
		if(hasLocalStorage && typeof window.localStorage.svp_use_html5 !== 'undefined') this.data.use_html5 = window.localStorage.svp_use_html5 === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_layout !== 'undefined') this.data.layout = window.localStorage.svp_layout;
		if(hasLocalStorage && typeof window.localStorage.svp_theme !== 'undefined') this.data.theme = window.localStorage.svp_theme;
		if(hasLocalStorage && typeof window.localStorage.svp_is_inversed !== 'undefined') this.data.is_inversed = window.localStorage.svp_is_inversed === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_is_responsive !== 'undefined') this.data.is_responsive = window.localStorage.svp_is_responsive === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_is_vertical !== 'undefined') this.data.is_vertical = window.localStorage.svp_is_vertical === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_one_thumb_per_row !== 'undefined') this.data.one_thumb_per_row = window.localStorage.svp_one_thumb_per_row === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_thumbs_size !== 'undefined') this.data.svp_thumbs_size = window.localStorage.svp_thumbs_size;
		if(hasLocalStorage && typeof window.localStorage.svp_hide_description !== 'undefined') this.data.hide_description = window.localStorage.svp_hide_description === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_hide_live_chat !== 'undefined') this.data.hide_live_chat = window.localStorage.svp_hide_live_chat === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_description_position !== 'undefined') this.data.description_position = window.localStorage.svp_description_position === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_playlist_position !== 'undefined') this.data.playlist_position = window.localStorage.svp_playlist_position === '1';
		if(hasLocalStorage && typeof window.localStorage.svp_chat_position !== 'undefined') this.data.chat_position = window.localStorage.svp_chat_position === '1';

		this.site_root = typeof this.data.site_root !== 'undefined' ? this.data.site_root : this.site_root;
		this.services_entry = typeof this.data.services_entry !== 'undefined' ? this.data.services_entry : this.services_entry;

		this.data.native_fullscreen = true;

		this.vars = {
			clip_id:this.data.clip_id,
			player_id:this.data.player_id,
			playlist_id:this.data.playlist_id,
			uk:this.data.uk,
			color1:this.data.color1,
			color1alpha:this.data.color1alpha,
			color:this.data.color,
			b_buttons:this.data.b_buttons,
			autoHide:this.data.autoHide,
			nexusUser:this.data.nexusUser,
			rid:new Date().getTime(),
			brandNW:this.data.brandNW,
			color_ratio:this.data.color_ratio,
			page:encodeURIComponent(location.href),
			is_ssl: this.is_ssl,
			site_root: this.site_root,
			services_entry: this.services_entry,
			use_html5: this.data.use_html5,
			layout: this.data.layout,
			theme: this.data.theme,
			is_inversed: this.data.is_inversed,
			is_responsive: this.data.is_responsive,
			is_vertical: this.data.is_vertical,
			one_thumb_per_row: this.data.one_thumb_per_row,
			thumbs_size: this.data.thumbs_size,
			disable_hash: this.data.disable_hash,
			hide_playlist: this.data.hide_playlist,
			hide_description: this.data.hide_description,
			hide_live_chat: this.data.hide_live_chat,
			description_position: this.data.description_position,
			playlist_position: this.data.playlist_position,
			chat_position: this.data.chat_position,
			widget_height_behavior: parseInt(this.data.widget_height_behavior, 10),
			popapp: this.popapp
		};

		if(typeof this.data.live_id !== "undefined") this.vars.live_id = this.data.live_id;
		if(typeof this.data.sel_playlist !== "undefined") this.vars.sel_playlist = this.data.sel_playlist;
		if(typeof this.data.sel_multiplaylist !== "undefined") this.vars.sel_multiplaylist = this.data.sel_multiplaylist;

		if(this.data.transparent=="false") this.data.transparent = false;
		if(this.data.no_controls){
			this.data.no_fullscreen = true;
		}

		if(this.data.transparent) this.params.wmode = "transparent";
		else if(this.data.native_fullscreen) this.params.wmode = "window";
		else this.params.wmode = "opaque";

		if(this.data.pause) this.vars.autoStart = "0";
		if(this.data.no_fullscreen) this.vars.no_fs = "1";
		if(this.data.stretch_video) this.vars.stretch_video = "1";
		if(this.data.no_controls) this.vars.noControls = this.data.no_controls;
		if(this.data.start_img) this.vars.start_img = this.data.start_img;
		if(this.data.start_volume) this.vars.start_volume = this.data.start_volume;

		if(typeof this.data.ext!="undefined") this.vars.svpex = this.data.ext;
		if(typeof this.data.referer!="undefined") this.vars.referer = encodeURIComponent(this.data.referer);

		if(this.data.native_fullscreen){
			this.params.allowFullScreen = "true";
			this.vars.native_fs = "1";
		}

		this.vars.branded = 0; // branded = 0 remove streaming video provider images (used from branding)
		this.vars.socialPlugin_url = this.site_root;
		if(this.data.debug) this.vars.debug = this.data.debug;
		if(this.data.preview) this.vars.preview = this.data.preview;

		if(!this.use_div) {
			document.write('<div id="' + this.div + '" style="height: '+this.player_height+'px; width: '+this.player_width+'px;">EMBEDED PLAYER</div>');
		}

		this.object={
			staticCache:this.static_cache,
			site_root:this.site_root,
			player_id:this.object_id,
			vars:{},
			player_instance:null,
			back_player_instance:null,
			baseZindex:10000,
			player_width:this.player_width,
			player_height:this.player_height
		};

		VappHashMap[this.object_id] = this;

		this.build();
		this.initEvents();

		this.addPlayerEventListener('TIMELINE.DOWNLOAD', this.bindEvent(this.timelineDLEventHandler));
		this.addPlayerEventListener('TIMELINE.PPV', this.bindEvent(this.timelinePPVEventHandler));
		this.addPlayerEventListener('CONFIRM.RESULT', this.bindEvent(this.confirmPPVEventHandler));
		this.addPlayerEventListener('PLAYER.INITIALIZED', this.bindEvent(this.playerInitialized));
		this.addPlayerEventListener('TIMELINE.GA', this.bindEvent(this.handleGAData));
		this.addPlayerEventListener('PLAYHEAD.START', this.bindEvent(this.executeVideoTracking));
	};
	this.bindEvent = function(callback) {
		var _this = this;
		return function() {
			callback.apply(_this, arguments);
		};
	};
	this.initEvents = function() {
		var _this = this;
		this.eventInterval = setInterval(function() {
			_this.checkRegisterJSEvents();
		}, 5);
	};
	this.checkRegisterJSEvents = function() {
		if(this.player_object !== null && typeof this.player_object.registerJSEvent !== "undefined") {
			clearInterval(this.eventInterval);

			this.registerCachedEvents();
			this.executePlayerEvent('PLAYER.STARTED', true);
		}
	};
	this.setVisibilityInterval = function() {
		if(this.visibilityDelay <= 0 || this.visibilityInterval !== null) return false;
		var hidden = false;
		var _this = this;
		this.visibilityInterval = setInterval(function() {
			if(typeof _this.player_object.registerJSEvent === "undefined") {
				if(!hidden) hidden = true;
			}
			else {
				if(hidden) {
					hidden = false;
					_this.registerEvents();
				}
			}
		}, this.visibilityDelay);
	};
	this.playerInitialized = function() {
		if(typeof this.hashInterval === "undefined") {
			var _this = this;
			this.hashInterval = setInterval(function() {
				var key;
				if(_this.defaultHash !== "") {
					hashObject = parsePlayerHash(_this.defaultHash);

					if(_this.player_object.navigate_to_page2) {
						for(key in hashObject) {
							_this.player_object.navigate_to_page2(key, hashObject[key]);
						}
					}
					else if(_this.player_object.navigate_to_page) _this.player_object.navigate_to_page(_this.defaultHash);
					_this.defaultHash = "";
				}
				else if(_this.currentHash !== window.location.hash) {
					_this.currentHash = window.location.hash;
					hashObject = parsePlayerHash(_this.currentHash);

					if(_this.player_object.navigate_to_page2) {
						for(key in hashObject) {
							_this.player_object.navigate_to_page2(key, hashObject[key]);
						}
					}
					else if(_this.player_object.navigate_to_page) _this.player_object.navigate_to_page(_this.currentHash);
				}
			}, 500);
		}
		var container = this.player_object.parentNode;
		btn = container.getElementsByTagName('a');
		if(btn[0] !== undefined) {
			var id = btn[0].id;
			var dt = document.getElementById(id);
			dt.parentNode.removeChild(dt);
		}
	};
	this.registerEvents = function() {
		for(var event in this.eventHandlers) {
			this.registerJSEvent(event);
		}
	};
	this.registerCachedEvents = function() {
		if(typeof this.eventStack === 'undefined') return false;
		var length = this.eventStack.length;
		if(length > 0) this.setVisibilityInterval();
		for(var i = 0; i < length; i++) {
			this.registerJSEvent(this.eventStack[i]);
		}
	};
	this.registerJSEvent = function(event) {
		this.player_object.registerJSEvent(event, 'VappHashMap["'+this.object_id+'"].eventHandlers["' + event + '"].fireEvent');
	};
	this.addPlayerEventListener = function(event, eventHandler) {
		var registered = false;
		if(typeof this.eventHandlers === "undefined") this.eventHandlers = {};
		if(typeof this.eventHandlers[event] === "undefined") this.eventHandlers[event] = {};
		else registered = true;
		if(typeof this.eventHandlers[event].listeners === "undefined") this.eventHandlers[event].listeners = [];

		this.eventHandlers[event].listeners.push(eventHandler);
		var thisEvent = event;
		var thisObject = this;
		if(typeof this.eventHandlers[event].fireEvent === "undefined") this.eventHandlers[event].fireEvent = function(args) {
			thisObject.executePlayerEvent(thisEvent, args);
		};
		if(this.player_object && this.player_object.registerJSEvent) {
			if(!registered) {
				this.registerJSEvent(event);
				this.setVisibilityInterval();
			}
		}
		else {
			var exists = false;
			if(typeof this.eventStack === "undefined") this.eventStack = [];
			for(var i = 0; i < this.eventStack.length; i++) {
				if(this.eventStack[i] === event) exists = true;
			}
			if(exists === false) this.eventStack.push(event);
		}
	};
	this.removePlayerEventListener = function(event, eventHandler) {
		if(typeof this.eventHandlers === "undefined") return;
		if(typeof this.eventHandlers[event] === "undefined") return;
		if(typeof this.eventHandlers[event].listeners === "undefined") return;
		for(var i = 0; i < this.eventHandlers[event].listeners.length; i++) {
			if(this.eventHandlers[event].listeners[i] === eventHandler) {
				this.eventHandlers[event].listeners.splice(i);
				break;
			}
		}
		if(this.eventHandlers[event].listeners.length === 0) delete this.eventHandlers[event];
		var empty = true;
		for(var k in this.eventHandlers) {
			empty = false;
			break;
		}
		if(empty && this.visibilityInterval !== null) {
			clearInterval(this.visibilityInterval);
			this.visibilityInterval = null;
		}
	};
	this.execEvent = function(event, i, args) {
		var that = this;
		setTimeout(function() {
			that.eventHandlers[event].listeners[i](args,that,event);
		}, 0);
	};
	this.executePlayerEvent = function(event, args) {
		if(typeof this.eventHandlers === "undefined") return;
		if(typeof this.eventHandlers[event] === "undefined") return;
		if(typeof this.eventHandlers[event].listeners === "undefined") return;
		for(var i = 0; typeof this.eventHandlers[event] !== 'undefined' && i < this.eventHandlers[event].listeners.length; i++){
			this.execEvent(event,i,args);
		}
	};
	this.playerCommand = function(command) {
		if(this.player_object === null || typeof this.player_object.playerCommand !== 'function') {
			return;
		}

		this.player_object.playerCommand(command);
	};
	this.playerSet = function(method, value) {
		if(this.player_object === null || typeof this.player_object[method] !== 'function') {
			return false;
		}

		this.player_object[method](value);

		return true;
	};
	this.playerGet = function(method) {
		if(this.player_object === null || typeof this.player_object[method] !== 'function') {
			return;
		}

		return this.player_object[method]();
	};

	this.play = function() {this.playerCommand('play');};
	this.pause = function() {this.playerCommand('pause');};
	this.stop = function() {this.playerCommand('stop');};
	this.toggle = function() {this.playerCommand('toggle');};
	this.replay = function() {this.playerCommand('replay');};
	this.adjust = function() {this.playerCommand('adjust');};
	this.toggleAudio = function() {this.playerCommand('toggle_audio');};
	this.mute = function() {this.playerCommand('mute');};
	this.unMute = function() {this.playerCommand('unmute');};
	this.seekToAndPlay = function(seconds) {this.playerSet('playerSeekToAndPlay', seconds);};
	this.seekToAndPause = function(seconds) {this.playerSet('playerSeekToAndPause', seconds);};
	this.setVolume = function(volume) {this.playerSet('playerSetVolume', volume);};
	this.loadVideo = function(videoID) {
		if(this.getVideoID() !== videoID){
			this.player_object.playerLoadVideo(videoID);
			this.executePlayerEvent('PLAYER.CLIP_CHANGED', true);
		}
	};
	this.isPlaying = function() {return this.playerGet('get_isPlaying');};
	this.isPaused = function() {return this.playerGet('get_isPaused');};
	this.isComplete = function() {return this.playerGet('get_isComplete');};
	this.getVideoID = function() {return this.playerGet('get_videoID');};
	this.getStreamTime = function() {return this.playerGet('get_streamTime');};
	this.getStreamDuration = function() {return this.playerGet('get_streamDuration');};
	this.getVolume = function() {return this.playerGet('get_volume');};
	this.isMuted = function() {return this.playerGet('get_isMuted');};
	this.isLive = function() {return this.playerGet('get_isLive');};
	this.handleGAData = function(event) {
		var eventData = event.split(',');
		var that = this;

		if(eventData[0].length > 0)
		{
			this.gaTrackingEnabled = true; this.gaTrackingCode = eventData[0]; this.clipName = eventData[1]; this.refCode = eventData[2];
			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = (that.is_ssl ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		}
	};
	this.executeVideoTracking = function() {
		if(this.gaTrackingEnabled === true)
		{
			_gaq.push(['_setAccount', this.gaTrackingCode]);
			_gaq.push(['_trackEvent', 'Videos Played', this.refCode, this.clipName]);
		}
	};
	this.confirmPPVEventHandler = function(e) {
		var att=e.split(':'),
		s=typeof att[0]!=='undefined'?unescape(att[0]):'',
		ed=typeof att[1]!=='undefined'?unescape(att[1]).replace(/&amp;/g, '&').split(';'):'',
		m=typeof att[2]!=='undefined'?unescape(att[2]):'';
		var d = {};
		for(var i=0;i<ed.length;i++){
			var val=ed[i].split('=');
			var idx=val.shift();
			d[idx]=val.join('=');
		}
		if(d.code==='PPV')svpDplayerUtils.PPV.confirmResponse(this.object,d.code,s,m);
		else if(d.code==='DL'){
			window.location.href = d.storage_link;
		}
	};
	this.timelinePPVEventHandler = function(event) {
		this.commonTimelineEventHandler(event,'PPV');
	};
	this.timelineDLEventHandler = function(event) {
		this.commonTimelineEventHandler(event,'DL');
	};
	this.commonTimelineEventHandler = function(event,type) {
		var _this = this;
		var eventParams = event.split(',');
		var r=(this.static_cache===false?'?v='+(new Date().getTime()):'');
		var clip = this.player_object.get_videoID();
		if(!clip) {
			alert('There is a problem with getting video ID. Please try again in a few minutes.');
			return false;
		}
		this.object.vars.clip_id = clip;
		svpJSLoader.JS.load(this.site_root + 'js/dplayerUtils.js'+r,function(){
			svpDplayerUtils.SETTINGS.cache=_this.static_cache;
			svpDplayerUtils.CORE.init(function(){
				var params = {};
				params.layout = parseInt(eventParams[0], 10);
				var isLive = parseInt(eventParams[1], 10);
				if(type==='PPV'){
					_this.isPPV = true;
					svpDplayerUtils.PPV.init(params,_this.object);
				}else if(type==='DL' && !isLive){
					_this.isDownloadable = true;
					svpDplayerUtils.DL.init(params,_this.object);
				}
			},function(){alert('There is a problem with initializiation of utils library. Please try again in a few minutes.');});
		},function(){alert('There is a problem with loading of utils library. Please try again in a few minutes.');});
	};
	this.createElement = function(nodeName, name, id, style) {
		var node;
		try {
			var attributes = '';
			if(typeof name != "undefined") attributes += ' name="' + name + '"';
			if(typeof id != "undefined") attributes += ' id="' + id + '"';
			if(typeof style != "undefined") attributes += ' style="' + style + '"';
			node = this._d.createElement('<' + nodeName + attributes + '>');

		} catch (e) {
			node = this._d.createElement(nodeName);
			if(typeof name != "undefined") node.setAttribute('name', name);
			if(typeof id != "undefined") node.setAttribute('id', id);
			if(typeof style != "undefined") node.setAttribute('style', style);
		}
		return node;
	};
	this.getObject = function(id) {
		var object = null;
		if(this._d.getElementById) {
			object = this._d.getElementById(id);
		}
		else if(this._d.layers) {
			object = this._d.layers[id];
		}
		else if(this._d.all) {
			object = this._d.all[id];
		}
		return object;
	};
	this.destroy = function() {
		if(this.player_object === null) {
			return;
		}

		if(this.isPPV) {
			svpDplayerUtils.PPV.destroy(this);
		}
		if(this.isDownloadable) {
			svpDplayerUtils.DL.destroy(this);
		}

		if(this.isHTML5Player) {
			this.player_object.destroy();
		}
		else {
			SvpSwfObject.get().removeSWF(this.object_id);
			SvpSwfObject.destroy();
		}

		if(!this.use_div) {
			var div = document.getElementById(this.div);

			div.parentNode.removeChild(div);
		}

		if(this.visibilityInterval !== null) {
			clearInterval(this.visibilityInterval);
			this.visibilityInterval = null;
		}

		if(this.hashInterval !== null) {
			clearInterval(this.hashInterval);
			this.hashInterval = null;
		}

		delete VappHashMap[this.object_id];

		this.player_object = null;

		delete this._d;
		delete this.eventHandlers;
		delete this.eventStack;
		delete this.attributes;
		delete this.params;
		delete this.vars;
		delete this.object.player_instance;
		delete this.object;
		delete this.data;
	};

	this.init(data);
}
if(typeof VappHashMap == "undefined") var VappHashMap = {};
if(typeof SvpVappInstances === "undefined") var SvpVappInstances = {
	getPlayerInstance: function(playerId) {
		for(var key in VappHashMap) {
			var instance = VappHashMap[key];
			if(instance.vars.player_id == playerId) return instance;
		}
		return null;
	},
};
var vAppCommon = {use_div: svp_use_div, player_width: svp_player_width, player_height: svp_player_height, skin: svp_vskin, popapp: svp_popapp};
var vAppVars = {clip_id:svp_clip_id,player_id:svp_player,playlist_id:svp_playlist_id,uk:svp_uk,color1:svp_player_color1,color1alpha:svp_player_alpha,color:svp_player_color,b_buttons:svp_extra_buttons,autoHide:svp_auto_hide,nexusUser:nexus_user_id,brandNW:svp_brand_new_window,color_ratio:svp_player_color_ratio,transparent:svp_transparent,strech_video:svp_stretch_video,pause:svp_pause,no_fullscreen: svp_no_fullscreen,no_controls: svp_no_controls,start_img: svp_start_img,start_volume:svp_start_volume,debug: svp_debug,ext: svp_ext,referer: svp_referer,live_id:svp_live_id,sel_playlist:svp_sel_playlist,sel_multiplaylist:svp_sel_multiplaylist,use_html5:svp_use_html5,layout:svp_layout,theme:svp_theme,is_responsive:svp_is_responsive,is_inversed:svp_is_inversed, is_vertical:svp_is_vertical,one_thumb_per_row:svp_one_thumb_per_row,svp_thumbs_size:svp_thumbs_size, services_entry:svp_services_entry,site_root:svp_site_root,disable_hash:svp_disable_hash,hide_playlist:svp_hide_playlist, hide_description: svp_hide_description, hide_live_chat: svp_hide_live_chat, description_position: svp_description_position, playlist_position: svp_playlist_position, chat_position: svp_chat_position};
if(svp_player || svp_playlist_id || svp_clip_id) new VappController(vAppCommon, vAppVars);