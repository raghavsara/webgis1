(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[6716],{994345:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(867076),r=n(36549),i=n(832979);const l=(0,o.compose)((0,o.withProps)((e=>{let{renderPopover:t,popoverOptions:n,...o}=e;return t?{renderPopover:t,popoverOptions:n,...o}:{...o}})),(0,o.branch)((function(){let{renderPopover:e,popoverOptions:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&!!t}),i.Z,r.Z))},832979:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(124852),r=n.n(o),i=n(118438),l=n(630294),a=n(957557),d=n.n(a),s=n(180307),p=n.n(s);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}const u=e=>class extends r().Component{render(){let t=null;const{popoverOptions:n,keyProp:o,...a}=this.props;return r().createElement("span",{className:"mapstore-info-popover"},r().createElement(e,c({},d()(a,["renderPopover","tooltipId"]),{key:o,ref:e=>{t=e}})),r().createElement(i.Z,{placement:n.placement,shouldUpdatePosition:!0,show:!0,target:()=>p().findDOMNode(t)},r().createElement(l.Popover,n.props,n.content)))}}},712845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(124852),r=n.n(o),i=n(630294),l=n(23888);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}const d={width:0,padding:0,borderWidth:0},s={},p=e=>e?s:d,c=(0,o.forwardRef)(((e,t)=>{let{disabled:n,id:o,visible:d,onClick:s,glyph:c,active:u,className:b="square-button-md",...g}=e;return r().createElement(l.Z,a({ref:t},g,{bsStyle:u?"success":"primary",disabled:n,id:`fg-${o}`,style:p(d),className:b,onClick:()=>!n&&s()}),r().createElement(i.Glyphicon,{glyph:c}))}))},531479:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var o=n(124852),r=n.n(o),i=n(45697),l=n.n(i),a=n(49977),d=n.n(a),s=n(492838),p=n(306692),c=n(296252),u=n(884757),b=n(687753),g=n(333101),f=n(275982),h=n(612132),m=n(952273),y=n(254020),v=n(119008);const w=e=>{let t=(0,m.GW)(e);return[t.search&&t.search.url,t.name]},k={openWidgetEditor:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.AE,s.dm,s.IT).filter((()=>(0,v.PJ)(t()))).switchMap((()=>d().Observable.of((0,b.Xg)("widgetBuilder","enabled",!0),(0,b.Xg)("metadataexplorer","enabled",!1))))},closeWidgetEditorOnFinish:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.Jm,g.oE).filter((()=>(0,v.PJ)(t()))).switchMap((()=>d().Observable.of((0,b.Xg)("widgetBuilder","enabled",!1))))},initEditorOnNew:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.AE).filter((()=>(0,v.PJ)(t()))).switchMap((e=>d().Observable.of((0,s.bS)({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0,...e,type:void 0},{step:0}))))},initEditorOnNewChart:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.IT).filter((()=>(0,v.PJ)(t()))).switchMap((e=>d().Observable.of((0,p.YV)(),(0,s.bS)({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0,widgetType:"chart",filter:(0,y.X1)(t()),...e,type:void 0},{step:0}),(0,s.Rz)("returnToFeatureGrid",!0))))},handleWidgetsFilterPanel:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.lG).filter((()=>(0,v.PJ)(t()))).switchMap((()=>d().Observable.of((0,h.gT)(...w(t())),(0,u.F)((0,m.um)(t())),(0,b.Xg)("widgetBuilder","enabled",!1),(0,b.Xg)("queryPanel","enabled",!0)).concat(d().Observable.race(e.ofType(u.Wm).take(1),e.ofType(b.kM).filter((function(){let{control:e,property:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"queryPanel"===e&&(!t||"enabled"===t)})).take(1)).switchMap((e=>(e.filterObj?d().Observable.of((0,s.Rz)("filter",e.filterObj)):d().Observable.empty()).merge(d().Observable.of((0,b.Xg)("widgetBuilder","enabled",!0)))))).takeUntil(e.ofType(f.nk,s.dm).merge(e.ofType(b.kM).filter((function(){let{control:e,property:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"widgetBuilder"===e&&0==!t})))).concat(d().Observable.of((0,c.bp)(),(0,b.Xg)("queryPanel","enabled",!1)))))}};var O=n(152543),T=n(565329),P=n(171703),C=n(22222),E=n(867076),W=n(350126);const z=(0,E.compose)((0,P.connect)((e=>({returnToFeatureGrid:(0,m.Wo)(e)})),{backToWidgetList:()=>(0,s.Rz)("widgetType",void 0),closeWidgetBuilder:()=>(0,b.Xg)("widgetBuilder","enabled",!1,!1),openFeatureGridTable:()=>(0,p.t9)()}),(0,E.withHandlers)({backFromWizard:e=>{let{backToWidgetList:t=(()=>{}),closeWidgetBuilder:n=(()=>{}),openFeatureGridTable:o=(()=>{}),returnToFeatureGrid:r}=e;return()=>{r?(n(),o()):t()}}}),(0,E.withProps)((e=>{let{returnToFeatureGrid:t,backFromWizard:n=(()=>{})}=e;return{exitButton:{onClick:n,glyph:"arrow-left",tooltipId:t?"widgets.builder.wizard.backToFeatureGrid":"widgets.builder.wizard.backToWidgetTypeSelection"}}})));var M=n(736465),S=n(994345),B=n(712845);const F=(0,S.Z)(B.Z),X=(0,P.connect)((()=>({})),{onClick:()=>(0,s.C2)()})((e=>{let{disabled:t,mode:n,onClick:o=(()=>{})}=e;return r().createElement(F,{id:"grid-map-chart",keyProp:"grid-map-chart",tooltipId:"featuregrid.toolbar.createNewChart",disabled:t,visible:"VIEW"===n,onClick:o,glyph:"stats"})}));function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const x=(0,E.compose)((0,P.connect)((0,C.P1)(m.h9,m.zA,((e,t)=>({dependencies:e,...t}))),{toggleConnection:s.w2}),z)(M.Z);class Z extends r().Component{componentDidMount(){this.props.onMount()}componentWillUnmount(){this.props.onUnmount()}render(){return r().createElement(T.Z,{open:this.props.enabled,size:this.props.dockSize,zIndex:this.props.zIndex,position:this.props.position,bsStyle:"primary",hideHeader:!0,style:{...this.props.layout,background:"white"}},r().createElement(x,{enabled:this.props.enabled,onClose:this.props.onClose,typeFilter:function(){let{type:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"map"!==e&&"legend"!==e}}))}}j(Z,"propTypes",{id:l().string,enabled:l().bool,limitDockHeight:l().bool,fluid:l().bool,zIndex:l().number,dockSize:l().number,position:l().string,onMount:l().func,onUnmount:l().func,onClose:l().func,dimMode:l().string,src:l().string,style:l().object,layout:l().object}),j(Z,"defaultProps",{id:"widgets-builder-plugin",enabled:!1,dockSize:500,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:()=>{},onUnmount:()=>{},onClose:()=>{},layout:{}});const G=(0,P.connect)((0,C.P1)(v.dH,(e=>(0,W.ic)(e,{height:!0})),((e,t)=>({enabled:e,layout:t}))),{onMount:()=>(0,b.Xg)("widgetBuilder","available",!0),onUnmount:()=>(0,b.Xg)("widgetBuilder","available",!1),onClose:b.Xg.bind(null,"widgetBuilder","enabled",!1,!1)})(Z),I=(0,O.rx)("WidgetsBuilder",{component:G,epics:k,containers:{TOC:{doNotHide:!0,name:"WidgetBuilder"},FeatureEditor:{doNotHide:!0,target:"toolbar",position:21,Component:X}}})}}]);