(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[7202],{944538:(t,i,e)=>{"use strict";e.d(i,{Z:()=>C});var s=e(179682),o=e(421915),n=e(303696),r=e(28795),a=e(432538),h=e(583729),l=e(438667),d=e(686204),f=e(321422),u=e(260897),p=e(804027),c=e(95173),g=e(862418);const C=function(t){function i(i,e){t.call(this),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===e||Array.isArray(i[0])?this.setCoordinates(i,e):this.setFlatCoordinates(e,i)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.appendCoordinate=function(t){this.flatCoordinates?(0,s.l7)(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()},i.prototype.clone=function(){return new i(this.flatCoordinates.slice(),this.layout)},i.prototype.closestPointXY=function(t,i,e,s){return s<(0,o.qf)(this.getExtent(),t,i)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,h.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,h.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,i,e,s))},i.prototype.forEachSegment=function(t){return(0,c.E)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},i.prototype.getCoordinateAtM=function(t,i){if(this.layout!=n.Z.XYM&&this.layout!=n.Z.XYZM)return null;var e=void 0!==i&&i;return(0,f.iJ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e)},i.prototype.getCoordinates=function(){return(0,d.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},i.prototype.getCoordinateAt=function(t,i){return(0,f.WW)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i)},i.prototype.getLength=function(){return(0,p.W)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},i.prototype.getFlatMidpoint=function(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_},i.prototype.getSimplifiedGeometryInternal=function(t){var e=[];return e.length=(0,g.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new i(e,n.Z.XY)},i.prototype.getType=function(){return r.Z.LINE_STRING},i.prototype.intersectsExtent=function(t){return(0,u.Kz)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},i.prototype.setCoordinates=function(t,i){this.setLayout(i,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,l.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},i}(a.ZP)},525642:(t,i,e)=>{"use strict";e.d(i,{Z:()=>g});var s=e(179682),o=e(421915),n=e(303696),r=e(28795),a=e(944538),h=e(432538),l=e(583729),d=e(438667),f=e(686204),u=e(321422),p=e(260897),c=e(862418);const g=function(t){function i(i,e,o){if(t.call(this),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(i[0]))this.setCoordinates(i,e);else if(void 0!==e&&o)this.setFlatCoordinates(e,i),this.ends_=o;else{for(var n=this.getLayout(),r=i,a=[],h=[],l=0,d=r.length;l<d;++l){var f=r[l];0===l&&(n=f.getLayout()),(0,s.l7)(a,f.getFlatCoordinates()),h.push(a.length)}this.setFlatCoordinates(n,a),this.ends_=h}}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.appendLineString=function(t){this.flatCoordinates?(0,s.l7)(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},i.prototype.clone=function(){return new i(this.flatCoordinates.slice(),this.layout,this.ends_.slice())},i.prototype.closestPointXY=function(t,i,e,s){return s<(0,o.qf)(this.getExtent(),t,i)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,l.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,l.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,i,e,s))},i.prototype.getCoordinateAtM=function(t,i,e){if(this.layout!=n.Z.XYM&&this.layout!=n.Z.XYZM||0===this.flatCoordinates.length)return null;var s=void 0!==i&&i,o=void 0!==e&&e;return(0,u.dG)(this.flatCoordinates,0,this.ends_,this.stride,t,s,o)},i.prototype.getCoordinates=function(){return(0,f.o1)(this.flatCoordinates,0,this.ends_,this.stride)},i.prototype.getEnds=function(){return this.ends_},i.prototype.getLineString=function(t){return t<0||this.ends_.length<=t?null:new a.Z(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},i.prototype.getLineStrings=function(){for(var t=this.flatCoordinates,i=this.ends_,e=this.layout,s=[],o=0,n=0,r=i.length;n<r;++n){var h=i[n],l=new a.Z(t.slice(o,h),e);s.push(l),o=h}return s},i.prototype.getFlatMidpoints=function(){for(var t=[],i=this.flatCoordinates,e=0,o=this.ends_,n=this.stride,r=0,a=o.length;r<a;++r){var h=o[r],l=(0,u.WW)(i,e,h,n,.5);(0,s.l7)(t,l),e=h}return t},i.prototype.getSimplifiedGeometryInternal=function(t){var e=[],s=[];return e.length=(0,c.UJ)(this.flatCoordinates,0,this.ends_,this.stride,t,e,0,s),new i(e,n.Z.XY,s)},i.prototype.getType=function(){return r.Z.MULTI_LINE_STRING},i.prototype.intersectsExtent=function(t){return(0,p.AW)(this.flatCoordinates,0,this.ends_,this.stride,t)},i.prototype.setCoordinates=function(t,i){this.setLayout(i,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var e=(0,d._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===e.length?0:e[e.length-1],this.changed()},i}(h.ZP)},552329:(t,i,e)=>{"use strict";e.d(i,{Z:()=>f});var s=e(179682),o=e(421915),n=e(28795),r=e(752043),a=e(432538),h=e(438667),l=e(686204),d=e(921882);const f=function(t){function i(i,e){t.call(this),e&&!Array.isArray(i[0])?this.setFlatCoordinates(e,i):this.setCoordinates(i,e)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.appendPoint=function(t){this.flatCoordinates?(0,s.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()},i.prototype.clone=function(){return new i(this.flatCoordinates.slice(),this.layout)},i.prototype.closestPointXY=function(t,i,e,s){if(s<(0,o.qf)(this.getExtent(),t,i))return s;for(var n=this.flatCoordinates,r=this.stride,a=0,h=n.length;a<h;a+=r){var l=(0,d.bI)(t,i,n[a],n[a+1]);if(l<s){s=l;for(var f=0;f<r;++f)e[f]=n[a+f];e.length=r}}return s},i.prototype.getCoordinates=function(){return(0,l.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},i.prototype.getPoint=function(t){var i=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||i<=t?null:new r.Z(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)},i.prototype.getPoints=function(){for(var t=this.flatCoordinates,i=this.layout,e=this.stride,s=[],o=0,n=t.length;o<n;o+=e){var a=new r.Z(t.slice(o,o+e),i);s.push(a)}return s},i.prototype.getType=function(){return n.Z.MULTI_POINT},i.prototype.intersectsExtent=function(t){for(var i=this.flatCoordinates,e=this.stride,s=0,n=i.length;s<n;s+=e){var r=i[s],a=i[s+1];if((0,o.jE)(t,r,a))return!0}return!1},i.prototype.setCoordinates=function(t,i){this.setLayout(i,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,h.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},i}(a.ZP)},513987:(t,i,e)=>{"use strict";e.d(i,{Z:()=>R});var s=e(179682),o=e(421915),n=e(303696),r=e(28795),a=e(552329),h=e(640353),l=e(432538),d=e(832562),f=e(192526),u=e(583729),p=e(430197),c=e(438667),g=e(686204),C=e(538529),y=e(260897),_=e(680793),v=e(862418);const R=function(t){function i(i,e,o){if(t.call(this),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!o&&!Array.isArray(i[0])){for(var n=this.getLayout(),r=i,a=[],h=[],l=0,d=r.length;l<d;++l){var f=r[l];0===l&&(n=f.getLayout());for(var u=a.length,p=f.getEnds(),c=0,g=p.length;c<g;++c)p[c]+=u;(0,s.l7)(a,f.getFlatCoordinates()),h.push(p)}e=n,i=a,o=h}void 0!==e&&o?(this.setFlatCoordinates(e,i),this.endss_=o):this.setCoordinates(i,e)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.appendPolygon=function(t){var i;if(this.flatCoordinates){var e=this.flatCoordinates.length;(0,s.l7)(this.flatCoordinates,t.getFlatCoordinates());for(var o=0,n=(i=t.getEnds().slice()).length;o<n;++o)i[o]+=e}else this.flatCoordinates=t.getFlatCoordinates().slice(),i=t.getEnds().slice(),this.endss_.push();this.endss_.push(i),this.changed()},i.prototype.clone=function(){for(var t=this.endss_.length,e=new Array(t),s=0;s<t;++s)e[s]=this.endss_[s].slice();return new i(this.flatCoordinates.slice(),this.layout,e)},i.prototype.closestPointXY=function(t,i,e,s){return s<(0,o.qf)(this.getExtent(),t,i)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,u.sD)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,u.gI)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,i,e,s))},i.prototype.containsXY=function(t,i){return(0,p.Zl)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,i)},i.prototype.getArea=function(){return(0,d.Eu)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)},i.prototype.getCoordinates=function(t){var i;return void 0!==t?(i=this.getOrientedFlatCoordinates().slice(),(0,_.dL)(i,0,this.endss_,this.stride,t)):i=this.flatCoordinates,(0,g.ug)(i,0,this.endss_,this.stride)},i.prototype.getEndss=function(){return this.endss_},i.prototype.getFlatInteriorPoints=function(){if(this.flatInteriorPointsRevision_!=this.getRevision()){var t=(0,f.E)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,C.U)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_},i.prototype.getInteriorPoints=function(){return new a.Z(this.getFlatInteriorPoints().slice(),n.Z.XYM)},i.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;(0,_.$v)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,_.dL)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},i.prototype.getSimplifiedGeometryInternal=function(t){var e=[],s=[];return e.length=(0,v.Pp)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,s),new i(e,n.Z.XY,s)},i.prototype.getPolygon=function(t){if(t<0||this.endss_.length<=t)return null;var i;if(0===t)i=0;else{var e=this.endss_[t-1];i=e[e.length-1]}var s=this.endss_[t].slice(),o=s[s.length-1];if(0!==i)for(var n=0,r=s.length;n<r;++n)s[n]-=i;return new h.ZP(this.flatCoordinates.slice(i,o),this.layout,s)},i.prototype.getPolygons=function(){for(var t=this.layout,i=this.flatCoordinates,e=this.endss_,s=[],o=0,n=0,r=e.length;n<r;++n){var a=e[n].slice(),l=a[a.length-1];if(0!==o)for(var d=0,f=a.length;d<f;++d)a[d]-=o;var u=new h.ZP(i.slice(o,l),t,a);s.push(u),o=l}return s},i.prototype.getType=function(){return r.Z.MULTI_POLYGON},i.prototype.intersectsExtent=function(t){return(0,y.oW)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)},i.prototype.setCoordinates=function(t,i){this.setLayout(i,t,3),this.flatCoordinates||(this.flatCoordinates=[]);var e=(0,c.QT)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===e.length)this.flatCoordinates.length=0;else{var s=e[e.length-1];this.flatCoordinates.length=0===s.length?0:s[s.length-1]}this.changed()},i}(l.ZP)},192526:(t,i,e)=>{"use strict";e.d(i,{E:()=>o});var s=e(421915);function o(t,i,e,o){for(var n=[],r=(0,s.lJ)(),a=0,h=e.length;a<h;++a){var l=e[a];r=(0,s.GN)(t,i,l[0],o),n.push((r[0]+r[2])/2,(r[1]+r[3])/2),i=l[l.length-1]}return n}},321422:(t,i,e)=>{"use strict";e.d(i,{WW:()=>n,iJ:()=>r,dG:()=>a});var s=e(179682),o=e(921882);function n(t,i,e,n,r,a){var h=NaN,l=NaN,d=(e-i)/n;if(1===d)h=t[i],l=t[i+1];else if(2==d)h=(1-r)*t[i]+r*t[i+n],l=(1-r)*t[i+1]+r*t[i+n+1];else if(0!==d){for(var f=t[i],u=t[i+1],p=0,c=[0],g=i+n;g<e;g+=n){var C=t[g],y=t[g+1];p+=Math.sqrt((C-f)*(C-f)+(y-u)*(y-u)),c.push(p),f=C,u=y}var _=r*p,v=(0,s.ry)(c,_);if(v<0){var R=(_-c[-v-2])/(c[-v-1]-c[-v-2]),F=i+(-v-2)*n;h=(0,o.t7)(t[F],t[F+n],R),l=(0,o.t7)(t[F+1],t[F+n+1],R)}else h=t[i+v*n],l=t[i+v*n+1]}return a?(a[0]=h,a[1]=l,a):[h,l]}function r(t,i,e,s,n,r){if(e==i)return null;var a;if(n<t[i+s-1])return r?((a=t.slice(i,i+s))[s-1]=n,a):null;if(t[e-1]<n)return r?((a=t.slice(e-s,e))[s-1]=n,a):null;if(n==t[i+s-1])return t.slice(i,i+s);for(var h=i/s,l=e/s;h<l;){var d=h+l>>1;n<t[(d+1)*s-1]?l=d:h=d+1}var f=t[h*s-1];if(n==f)return t.slice((h-1)*s,(h-1)*s+s);var u=(n-f)/(t[(h+1)*s-1]-f);a=[];for(var p=0;p<s-1;++p)a.push((0,o.t7)(t[(h-1)*s+p],t[h*s+p],u));return a.push(n),a}function a(t,i,e,s,o,n,a){if(a)return r(t,i,e[e.length-1],s,o,n);var h;if(o<t[s-1])return n?((h=t.slice(0,s))[s-1]=o,h):null;if(t[t.length-1]<o)return n?((h=t.slice(t.length-s))[s-1]=o,h):null;for(var l=0,d=e.length;l<d;++l){var f=e[l];if(i!=f){if(o<t[i+s-1])return null;if(o<=t[f-1])return r(t,i,f,s,o,!1);i=f}}return null}}}]);