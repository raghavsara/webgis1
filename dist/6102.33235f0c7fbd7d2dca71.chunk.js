(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[6102],{23279:(t,e,i)=>{var n=i(513218),o=i(707771),r=i(14841),s=Math.max,a=Math.min;t.exports=function(t,e,i){var h,d,p,u,f,l,c=0,g=!1,v=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function C(e){var i=h,n=d;return h=d=void 0,c=e,u=t.apply(n,i)}function T(t){return c=t,f=setTimeout(E,e),g?C(t):u}function y(t){var i=t-l;return void 0===l||i>=e||i<0||v&&t-c>=p}function E(){var t=o();if(y(t))return _(t);f=setTimeout(E,function(t){var i=e-(t-l);return v?a(i,p-(t-c)):i}(t))}function _(t){return f=void 0,m&&h?C(t):(h=d=void 0,u)}function P(){var t=o(),i=y(t);if(h=arguments,d=this,l=t,i){if(void 0===f)return T(l);if(v)return clearTimeout(f),f=setTimeout(E,e),C(l)}return void 0===f&&(f=setTimeout(E,e)),u}return e=r(e)||0,n(i)&&(g=!!i.leading,p=(v="maxWait"in i)?s(r(i.maxWait)||0,e):p,m="trailing"in i?!!i.trailing:m),P.cancel=function(){void 0!==f&&clearTimeout(f),c=0,h=l=d=f=void 0},P.flush=function(){return void 0===f?u:_(o())},P}},843624:(t,e,i)=>{var n=i(314259),o=i(640554);t.exports=function(t,e,i){var r=null==t?0:t.length;return r?(e=i||void 0===e?1:o(e),n(t,0,(e=r-e)<0?0:e)):[]}},707771:(t,e,i)=>{var n=i(555639);t.exports=function(){return n.Date.now()}},193409:(t,e,i)=>{"use strict";i.d(e,{Z:()=>g});var n=i(540188),o=i(558493),r=i(12868),s=i(267644),a=i(85386),h=i(613002),d=i(421915),p="element",u="map",f="offset",l="position",c="positioning";const g=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+s.$A,this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,(0,h.oL)(this,(0,o.v_)(p),this.handleElementChanged,this),(0,h.oL)(this,(0,o.v_)(u),this.handleMapChanged,this),(0,h.oL)(this,(0,o.v_)(f),this.handleOffsetChanged,this),(0,h.oL)(this,(0,o.v_)(l),this.handlePositionChanged,this),(0,h.oL)(this,(0,o.v_)(c),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:r.Z.TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(p)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(u)},e.prototype.getOffset=function(){return this.get(f)},e.prototype.getPosition=function(){return this.get(l)},e.prototype.getPositioning=function(){return this.get(c)},e.prototype.handleElementChanged=function(){(0,a.ep)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&((0,a.ZF)(this.element),(0,h.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,h.oL)(t,n.Z.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(l)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(p,t)},e.prototype.setMap=function(t){this.set(u,t)},e.prototype.setOffset=function(t){this.set(f,t)},e.prototype.setPosition=function(t){this.set(l,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),i=this.getElement(),n=this.getRect(i,[(0,a.iO)(i),(0,a.Pb)(i)]),o=this.autoPanMargin;if(!(0,d.r4)(e,n)){var r=n[0]-e[0],s=e[2]-n[2],h=n[1]-e[1],p=e[3]-n[3],u=[0,0];if(r<0?u[0]=r-o:s<0&&(u[0]=Math.abs(s)+o),h<0?u[1]=h-o:p<0&&(u[1]=Math.abs(p)+o),0!==u[0]||0!==u[1]){var f=t.getView().getCenter(),l=t.getPixelFromCoordinate(f),c=[l[0]+u[0],l[1]+u[1]];t.getView().animate({center:t.getCoordinateFromPixel(c),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var i=t.getBoundingClientRect(),n=i.left+window.pageXOffset,o=i.top+window.pageYOffset;return[n,o,n+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(c,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var i=t.getPixelFromCoordinate(e),n=t.getSize();this.updateRenderedPosition(i,n)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var i=this.element.style,n=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var s=n[0],a=n[1];if(o==r.Z.BOTTOM_RIGHT||o==r.Z.CENTER_RIGHT||o==r.Z.TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=i.left="");var h=Math.round(e[0]-t[0]-s)+"px";this.rendered.right_!=h&&(this.rendered.right_=i.right=h)}else{""!==this.rendered.right_&&(this.rendered.right_=i.right=""),o!=r.Z.BOTTOM_CENTER&&o!=r.Z.CENTER_CENTER&&o!=r.Z.TOP_CENTER||(s-=this.element.offsetWidth/2);var d=Math.round(t[0]+s)+"px";this.rendered.left_!=d&&(this.rendered.left_=i.left=d)}if(o==r.Z.BOTTOM_LEFT||o==r.Z.BOTTOM_CENTER||o==r.Z.BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=i.top="");var p=Math.round(e[1]-t[1]-a)+"px";this.rendered.bottom_!=p&&(this.rendered.bottom_=i.bottom=p)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=i.bottom=""),o!=r.Z.CENTER_LEFT&&o!=r.Z.CENTER_CENTER&&o!=r.Z.CENTER_RIGHT||(a-=this.element.offsetHeight/2);var u=Math.round(t[1]+a)+"px";this.rendered.top_!=u&&(this.rendered.top_=i.top=u)}},e.prototype.getOptions=function(){return this.options},e}(o.ZP)},12868:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},869669:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var n=i(421915),o=i(28795),r=i(432538),s=i(438667),a=function(t){function e(e,i,n){if(t.call(this),void 0!==n&&void 0===i)this.setFlatCoordinates(n,e);else{var o=i||0;this.setCenterAndRadius(e,o,n)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),void 0,this.layout)},e.prototype.closestPointXY=function(t,e,i,n){var o=this.flatCoordinates,r=t-o[0],s=e-o[1],a=r*r+s*s;if(a<n){if(0===a)for(var h=0;h<this.stride;++h)i[h]=o[h];else{var d=this.getRadius()/Math.sqrt(a);i[0]=o[0]+d*r,i[1]=o[1]+d*s;for(var p=2;p<this.stride;++p)i[p]=o[p]}return i.length=this.stride,a}return n},e.prototype.containsXY=function(t,e){var i=this.flatCoordinates,n=t-i[0],o=e-i[1];return n*n+o*o<=this.getRadiusSquared_()},e.prototype.getCenter=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.computeExtent=function(t){var e=this.flatCoordinates,i=e[this.stride]-e[0];return(0,n.T9)(e[0]-i,e[1]-i,e[0]+i,e[1]+i,t)},e.prototype.getRadius=function(){return Math.sqrt(this.getRadiusSquared_())},e.prototype.getRadiusSquared_=function(){var t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e},e.prototype.getType=function(){return o.Z.CIRCLE},e.prototype.intersectsExtent=function(t){var e=this.getExtent();if((0,n.kK)(t,e)){var i=this.getCenter();return t[0]<=i[0]&&t[2]>=i[0]||t[1]<=i[1]&&t[3]>=i[1]||(0,n.H6)(t,this.intersectsCoordinate,this)}return!1},e.prototype.setCenter=function(t){var e=this.stride,i=this.flatCoordinates[e]-this.flatCoordinates[0],n=t.slice();n[e]=n[0]+i;for(var o=1;o<e;++o)n[e+o]=t[o];this.setFlatCoordinates(this.layout,n),this.changed()},e.prototype.setCenterAndRadius=function(t,e,i){this.setLayout(i,t,0),this.flatCoordinates||(this.flatCoordinates=[]);var n=this.flatCoordinates,o=(0,s.IG)(n,0,t,this.stride);n[o++]=n[0]+e;for(var r=1,a=this.stride;r<a;++r)n[o++]=n[r];n.length=o,this.changed()},e.prototype.getCoordinates=function(){return null},e.prototype.setCoordinates=function(t,e){},e.prototype.setRadius=function(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()},e}(r.ZP);a.prototype.transform;const h=a}}]);