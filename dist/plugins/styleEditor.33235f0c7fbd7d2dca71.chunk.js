(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[7709],{902746:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>X});var l=a(49977),s=a.n(l),r=a(227361),i=a.n(r),n=a(91175),o=a.n(n),d=a(701469),c=a.n(d),y=a(941106),m=a.n(y),u=a(545578),b=a.n(u),p=a(504518),g=a(333101),v=a(403410),S=a(16075),f=a(943650),h=a(687753),w=a(399790),E=a(546243),N=a(860294),O=a(470509),T=a.n(O),U=a(984596),$=a.n(U),M=a(644825);const W=function(e,t,a){let l=e+"layers/"+t+".json";return T().get(l,a).then((e=>e.data&&e.data.layer))},I=e=>{let{baseUrl:t,layerName:a,styles:l=[],options:s={}}=e;const{name:r,workspace:i}=(0,M.$N)(a),n=`${t}rest/${i&&`workspaces/${i}/`||""}layers/${r}.json`;return T().get(n,s).then((e=>{let{data:t}=e;const a=t.layer||{},s=a.styles&&a.styles.style&&$()(a.styles.style)||[],r=l.map((e=>{let{name:t}=e;return t})),i=s.filter((e=>{let{name:t}=e;return-1===r.indexOf(t)}));return{layer:{...a,styles:{"@class":"linked-hash-set",style:i}}}})).then((e=>T().put(n,e).then((()=>e))))},k=e=>{let{baseUrl:t,layerName:a,styles:l=[],options:s={}}=e;const{name:r,workspace:i}=(0,M.$N)(a),n=`${t}rest/${i&&`workspaces/${i}/`||""}layers/${r}.json`;return T().get(n,s).then((e=>{let{data:t}=e;const a=t.layer||{},s=a.styles&&a.styles.style&&$()(a.styles.style)||[];return{layer:{...a,styles:{"@class":"linked-hash-set",style:[...s,...l]}}}})).then((e=>T().put(n,e).then((()=>e))))},D=e=>{let{baseUrl:t,layerName:a,styleName:l,options:s={}}=e;const{name:r,workspace:i}=(0,M.$N)(a),n=`${t}rest/${i&&`workspaces/${i}/`||""}layers/${r}.json`;return T().get(n,s).then((e=>{let{data:t}=e;const a=t.layer||{},s=a.styles&&a.styles.style&&$()(a.styles.style)||[],r=a.defaultStyle||{},i=b()([r,...s],"name");return{layer:{...a,defaultStyle:{name:l},styles:{"@class":"linked-hash-set",style:i}}}})).then((e=>T().put(n,e).then((()=>e))))};var V=a(703011),C=a(612912),x=a(119008),Z=a(811408);const F=e=>{let{status:t,styleName:a,baseUrl:l}=e;return"edit"===t?s().Observable.defer((()=>N.ZP.getStyleCodeByName({baseUrl:l,styleName:a}).then((e=>(0,M.co)(e).then((t=>[e,t])).catch((()=>[e,!1])))))).switchMap((e=>{var t,a;let[l,r]=e;return s().Observable.of((0,E.FU)({languageVersion:l.languageVersion,code:l.code,templateId:"",format:l.format,init:!0}),(0,E.bB)(r?{editorType:"textarea",styleJSON:null}:{editorType:(null==l||null===(t=l.metadata)||void 0===t?void 0:t.msEditorType)||"textarea",styleJSON:null==l||null===(a=l.metadata)||void 0===a?void 0:a.msStyleJSON}))})).catch((e=>s().Observable.of((0,E.Fe)("edit",e)))):s().Observable.empty()},P=e=>{let{styleName:t,baseUrl:a,onSuccess$:l,onError$:r}=e;return s().Observable.defer((()=>N.ZP.deleteStyle({baseUrl:a,styleName:t}))).switchMap((()=>l||s().Observable.empty())).catch((()=>r||s().Observable.empty()))},A=function(e){let{baseUrl:t,update:a,code:l,format:r,styleName:i,status:n,languageVersion:o,options:d}=e,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s().Observable.defer((()=>N.ZP[a?"updateStyle":"createStyle"]({baseUrl:t,code:l,format:r,styleName:i,languageVersion:o,options:d}))).switchMap((()=>c()(y)&&s().Observable.of((0,E.Wm)(),...y)||y)).catch((e=>s().Observable.of((0,E.Fe)(n,e),(0,E.Wm)(),...m))).startWith((0,E.pt)(n))};function L(e,t){return!t&&e.availableStyles?s().Observable.of((0,g.Xy)({availableStyles:e.availableStyles}),(0,E.Wm)()):(0,f.kB)(e).switchMap((t=>{const a=(0,w.IA)(t);return a.availableStyles?s().Observable.of((0,g.Xy)({availableStyles:a.availableStyles}),(0,g.tV)(e.id,"layer",{...a}),(0,E.Wm)()):s().Observable.of((0,E.Fe)("availableStyles",{status:401}),(0,E.Wm)())})).catch((e=>{const t=-1!==e.message.indexOf("could not be unmarshalled")?"parsingCapabilities":"global";return s().Observable.of((0,E.Fe)(t,e),(0,E.Wm)())})).startWith((0,E.pt)("global"))}function R(e){return a.e(2568).then(a.t.bind(a,402568,23)).then((t=>(0,t.default)(e)))}const X={toggleStyleEditorEpic:(e,t)=>e.ofType(E.vZ).filter((()=>!(0,V.aN)(t.getState()))).switchMap((e=>{const a=t.getState(),l=(0,C.jN)(a),r=!!i()(l,"options.availableStyles");if(!e.enabled)return(e=>{const t=(0,V.gc)(e),{baseUrl:a=""}=(0,V.Z0)(e);return s().Observable.of((0,E.l1)(),(0,v.fU)({owner:M.s1})).merge(t?P({styleName:t,baseUrl:a}):s().Observable.empty())})(a);if((0,V.ji)(a)&&r)return s().Observable.empty();const n=e.layer||(0,C.Iz)(a);if(!n||n&&!n.url)return s().Observable.empty();const o=(0,w.Nd)(n);if(!o)return L(n);const d=`${n.url.split(o)[0]}${o}`,c=(0,V.Z0)(a);return s().Observable.concat(s().Observable.of((0,E.pt)("global"),(0,E.l1)()),s().Observable.defer((()=>(0,Z.eb)({baseUrl:d,styleService:c}))).switchMap((e=>s().Observable.concat(s().Observable.of((0,E.E0)(e)),s().Observable.defer((()=>W(d+"rest/",n.name))).switchMap((e=>{var t;const a=(null==e||null===(t=e.styles)||void 0===t?void 0:t.style)||[],l=b()([e.defaultStyle,...a],"name");return 0===l.length?s().Observable.of((0,E.Fe)("availableStyles",{status:401}),(0,E.Wm)()):s().Observable.defer((()=>Promise.all([N.ZP.getStylesInfo({baseUrl:d,styles:l}),(0,f.kB)(n).toPromise().then((e=>e)).catch((()=>null))]))).switchMap((e=>{let[t,a]=e;const l=a&&(0,w.IA)(a),r=((null==l?void 0:l.availableStyles)||[]).map((e=>({...e,...(0,M.$N)(e.name)}))).filter((function(){let{name:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e})),i=r.length>0?t.map((e=>{const t=(0,M.$N)(e.name),{name:a,workspace:l,...s}=r.find((e=>e.name===t.name))||{};return s?{...s,...e}:e})):t;return s().Observable.of((0,v.W)(n.id,M.s1,"override",{}),(0,g.Xy)({availableStyles:i}),(0,g.tV)(n.id,"layer",{availableStyles:i}),(0,E.Wm)())}))})).catch((()=>L(n,!0)))))))})),updateLayerOnStatusChangeEpic:(e,t)=>e.ofType(E.g$).filter((e=>{let{status:t}=e;return!!t})).switchMap((a=>{const l=t.getState(),r=(0,V.Vf)(l),i=r&&r.params||{},n=r&&!r.describeFeatureType&&(0,S.H)(r.url,r,{query:i}),o=(0,V.i7)(l)||r.availableStyles&&r.availableStyles[0]&&r.availableStyles[0].name,{baseUrl:d=""}=(0,V.Z0)(l);return n&&function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>{};return s().Observable.of((0,E.pt)("global"),...l).merge(e.ofType(g.K$).filter((()=>{const e=(0,C.Iz)(t.getState());return a(e)})).switchMap((()=>{const e=(0,C.Iz)(t.getState());return r(e)})).catch((e=>s().Observable.of((0,E.Fe)("global",e),(0,E.Wm)()))).takeUntil(e.ofType(E.E2)))}(e,t,(e=>e&&e.describeLayer),[n],(e=>s().Observable.concat(F({status:a.status,styleName:o,baseUrl:d}),s().Observable.of((0,E.xR)(!(e&&e.describeLayer&&401===e.describeLayer.error)),(0,E.Wm)()))))||F({status:a.status,styleName:o,baseUrl:d})})),updateTemporaryStyleEpic:(e,t)=>e.ofType(E.TB,E.DX).switchMap((e=>{const a=t.getState(),l=(0,V.gc)(a),s=(0,V.Vf)(a),{workspace:r}=(0,M.$N)(s.name),i=e.format&&e.format!==(0,V.iB)(a),n=l||`${r?`${r}:`:""}${(0,M.Vi)()}`,o=e.format||(0,V.iB)(a),d=(0,V.ex)(a),{baseUrl:c=""}=(0,V.Z0)(a),y=(0,V.j5)(a),m="sld"===o&&(e.code||"").match(/version=\"1\.1\.0\"/)&&{version:"1.1.0"}||e.format&&!e.languageVersion&&{version:"1.0.0"}||e.languageVersion||{version:"1.0.0"},u=y.version!==m.version?{params:{raw:!0}}:{},b=m,g=t=>A({update:!0,code:e.code,format:o,styleName:t,status:d,baseUrl:c,languageVersion:b,options:u},[(0,v.B1)(M.s1,[{style:t,_v_:Date.now(),singleTile:!0}]),(0,E.k5)({temporaryId:t,templateId:e.templateId||"",code:e.code,format:o,init:e.init,languageVersion:b})],"edit"===d?[]:[(0,p.vU)({title:"styleeditor.updateTmpErrorTitle",message:"styleeditor.updateTmpStyleErrorMessage",uid:"updateTmpStyleError",autoDismiss:5})]),S=("css"===o?"* { stroke: #888888; }":"sld"===o&&'<?xml version="1.0" encoding="ISO-8859-1"?>\n<StyledLayerDescriptor version="1.0.0"\n\t\txsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"\n\t\txmlns="http://www.opengis.net/sld"\n\t\txmlns:ogc="http://www.opengis.net/ogc"\n\t\txmlns:xlink="http://www.w3.org/1999/xlink"\n\t\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\n\t<NamedLayer>\n\t\t<Name>Default Style</Name>\n\t\t<UserStyle>\n\t\t\t<Title>${styleTitle}</Title>\n\t\t\t<Abstract>${styleAbstract}</Abstract>\n\t\t\t<FeatureTypeStyle>\n\t\t\t\t<Rule>\n\t\t\t\t\t<Name>Rule Name</Name>\n\t\t\t\t\t<Title>Rule Title</Title>\n\t\t\t\t\t<Abstract>Rule Abstract</Abstract>\n\t\t\t\t\t<LineSymbolizer>\n\t\t\t\t\t\t<Stroke>\n\t\t\t\t\t\t\t<CssParameter name="stroke">#0000FF</CssParameter>\n\t\t\t\t\t\t</Stroke>\n\t\t\t\t\t\t</LineSymbolizer>\n\t\t\t\t\t<PointSymbolizer>\n\t\t\t\t\t\t<Graphic>\n\t\t\t\t\t\t\t<Mark>\n\t\t\t\t\t\t\t\t<WellKnownName>square</WellKnownName>\n\t\t\t\t\t\t\t\t<Fill>\n\t\t\t\t\t\t\t\t\t<CssParameter name="fill">#FF0000</CssParameter>\n\t\t\t\t\t\t\t\t</Fill>\n\t\t\t\t\t\t\t</Mark>\n\t\t\t\t\t\t</Graphic>\n\t\t\t\t\t</PointSymbolizer>\n\t\t\t\t\t</Rule>\n\t\t\t\t</FeatureTypeStyle>\n\t\t\t</UserStyle>\n\t\t</NamedLayer>\n\t</StyledLayerDescriptor>\n')||"",f=e=>A({code:S,format:o,styleName:e,status:d,baseUrl:c},g(e),[(0,p.vU)({title:"styleeditor.createTmpErrorTitle",message:"styleeditor.createTmpStyleErrorMessage",uid:"createTmpStyleError",autoDismiss:5}),(0,E.k5)({temporaryId:null,templateId:"",code:"",format:"",init:"",languageVersion:null})]);return i&&l&&P({styleName:l,baseUrl:c,onSuccess$:f(`${r?`${r}:`:""}${(0,M.Vi)()}`),onError$:g(n)})||l&&g(n)||f(n)})),createStyleEpic:(e,t)=>e.ofType(E.vA).switchMap((e=>{const a=t.getState(),l=(0,V.gB)(a),r=(0,V.Vf)(a),{workspace:i}=(0,M.$N)(r.name),n=`${i?`${i}:`:""}${(0,M.nK)(e.settings)}`,d=(0,V.iB)(a),{title:c="",_abstract:y=""}=e.settings||{},{baseUrl:u=""}=(0,V.Z0)(a),b={title:c,description:y,msStyleJSON:null,msEditorType:"visual"},S=m()(l)({styleTitle:c,styleAbstract:y});return s().Observable.defer((()=>R(S).then((e=>N.ZP.createStyle({baseUrl:u,code:S,format:d,styleName:n,metadata:{...b,msMD5Hash:e}}))))).switchMap((()=>s().Observable.of((0,v.B1)(M.s1,[{}]),(0,g.Xy)({style:n||""},!0),(0,E.Nf)(""),(0,E.Wm)()).merge((e=>{let{baseUrl:t,layer:a,styleName:l,format:r,title:i,_abstract:n,metadata:d}=e;return s().Observable.defer((()=>k({baseUrl:t,layerName:a.name,styles:[{name:l}]}))).switchMap((()=>{const e={filename:`${l}.${r}`,format:r,name:l,title:i,_abstract:n,...d&&{metadata:d}},t=o()(a.availableStyles),c=a.availableStyles&&[t,e,...a.availableStyles.filter(((e,t)=>t>0))]||[e];return s().Observable.of((0,g.Xy)({availableStyles:c},!0),(0,E.Wm)())})).catch((()=>s().Observable.of((0,E.Wm)()))).startWith((0,E.pt)("global"))})({layer:r,styleName:n,format:d,title:c,_abstract:y,baseUrl:u,metadata:b})))).catch((e=>s().Observable.of((0,E.Fe)("",e),(0,E.Wm)(),(0,p.vU)({title:"styleeditor.createStyleErrorTitle",message:"styleeditor.createStyleErrorMessage",uid:"createStyleError",autoDismiss:5})))).startWith((0,E.pt)(""))})),updateStyleCodeEpic:(e,t)=>e.ofType(E.ch).switchMap((()=>{const e=t.getState(),a=(0,V.iB)(e),l=(0,V.j5)(e),r=(0,V.gB)(e),i=(0,V.i7)(e),n=(0,V.gc)(e),o=(0,V.Vf)(e),{baseUrl:d=""}=(0,V.Z0)(e),c=(0,V.WW)(e)||{},y={msStyleJSON:c.styleJSON||null,msEditorType:c.editorType},m=(o.availableStyles||[]).map((e=>e.name===i?{...e,metadata:{...e.metadata,...y}}:e));return s().Observable.defer((()=>R(r).then((e=>N.ZP.updateStyle({baseUrl:d,code:r,format:a,styleName:i,languageVersion:l,options:{params:{raw:!0}},metadata:{...y,msMD5Hash:e}}))))).switchMap((()=>s().Observable.of((0,E.Wm)(),(0,g.tV)(o.id,"layer",{_v_:Date.now(),availableStyles:m}),(0,g.Xy)({availableStyles:m}),(0,E.k5)({temporaryId:n,templateId:"",code:r,format:a,init:!0,languageVersion:l}),(0,p.Vp)({title:"styleeditor.savedStyleTitle",message:"styleeditor.savedStyleMessage",uid:"savedStyleTitle",autoDismiss:5})))).catch((e=>s().Observable.of((0,E.Fe)("global",e),(0,E.Wm)(),(0,p.vU)({title:"styleeditor.updateStyleErrorTitle",message:"styleeditor.updateStyleErrorMessage",uid:"updateStyleError",autoDismiss:5})))).startWith((0,E.pt)("global"))})),deleteStyleEpic:(e,t)=>e.ofType(E.j1).filter((e=>{let{styleName:t}=e;return!!t})).switchMap((e=>{let{styleName:a}=e;const l=t.getState(),r=(0,V.Vf)(l),{baseUrl:i=""}=(0,V.Z0)(l),n=(0,x.tL)(l),o=(0,x.Gd)(l);return s().Observable.defer((()=>I({baseUrl:i,layerName:r.name,styles:[{name:a}]}))).switchMap((()=>{const e=r.availableStyles&&r.availableStyles.filter((e=>{let{name:t}=e;return t!==a}))||[];return s().Observable.concat(s().Observable.of((0,g.Xy)({style:"",availableStyles:e},!0),(0,E.Wm)(),(0,h.Xg)("layersettings","originalSettings",{...n,style:""}),(0,h.Xg)("layersettings","initialSettings",{...o,style:""})),P({styleName:a,baseUrl:i,onSuccess$:s().Observable.of((0,p.Vp)({title:"styleeditor.deletedStyleSuccessTitle",message:"styleeditor.deletedStyleSuccessMessage",uid:"deletedStyleSuccess",autoDismiss:5})),onError$:s().Observable.of((0,p.vU)({title:"styleeditor.deletedStyleErrorTitle",message:"styleeditor.deletedStyleErrorMessage",uid:"deletedStyleError",autoDismiss:5}))}))})).catch((()=>s().Observable.of((0,E.Wm)()))).startWith((()=>s().Observable.of((0,E.pt)("global"))))})),setDefaultStyleEpic:(e,t)=>e.ofType(E.rb).switchMap((()=>{const e=t.getState(),{baseUrl:a=""}=(0,V.Z0)(e),l=(0,V.Vf)(e),r=(0,V.i7)(e);return s().Observable.defer((()=>D({baseUrl:a,layerName:l.name,styleName:r}))).switchMap((()=>{const e=[...l.availableStyles.filter((e=>{let{name:t}=e;return r===t})),...l.availableStyles.filter((e=>{let{name:t}=e;return r!==t}))];return s().Observable.of((0,g.Xy)({availableStyles:e},!0),(0,p.Vp)({title:"styleeditor.setDefaultStyleSuccessTitle",message:"styleeditor.setDefaultStyleSuccessMessage",uid:"setDefaultStyleSuccess",autoDismiss:5}),(0,E.Wm)())})).startWith((0,E.pt)("global")).catch((()=>s().Observable.of((0,p.vU)({title:"styleeditor.setDefaultStyleErrorTitle",message:"styleeditor.setDefaultStyleErrorMessage",uid:"setDefaultStyleError",autoDismiss:5}),(0,E.Wm)())))}))}},995305:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var l=a(701469),s=a.n(l),r=a(747037),i=a.n(r),n=a(727418),o=a.n(n),d=a(45697),c=a.n(d),y=a(124852),m=a.n(y),u=a(171703),b=a(867076),p=a(22222),g=a(333101),v=a(546243),S=a(867517),f=a(756435),h=a(141919),w=a(554155),E=a(89518),N=a(510644),O=a(703011),T=a(644825),U=a(756311);function $(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class M extends m().Component{UNSAFE_componentWillMount(){const e=!this.props.editingAllowedRoles||s()(this.props.editingAllowedRoles)&&i()(this.props.userRole)&&-1!==this.props.editingAllowedRoles.indexOf(this.props.userRole);this.props.onInit(this.props.styleService,e&&(0,T.uW)(this.props.layer,this.props.styleService))}render(){return m().createElement(f.Z,{className:"ms-style-editor-container",header:this.props.showToolbar?m().createElement("div",{className:"ms-style-editor-container-header"},this.props.header,m().createElement("div",{className:"text-center"},m().createElement(U.lC,{enableSetDefaultStyle:this.props.enableSetDefaultStyle}))):null,footer:m().createElement("div",{style:{height:25}})},this.props.isEditing?m().createElement(U.m2,{config:this.props.editorConfig}):m().createElement(U.tM,{showDefaultStyleIcon:this.props.canEdit&&this.props.enableSetDefaultStyle}))}}$(M,"propTypes",{layer:c().object,header:c().node,isEditing:c().bool,showToolbar:c().node.bool,onInit:c().func,styleService:c().object,userRole:c().string,editingAllowedRoles:c().array,enableSetDefaultStyle:c().bool,canEdit:c().bool,editorConfig:c().object}),$(M,"defaultProps",{layer:{},onInit:()=>{},editingAllowedRoles:["ADMIN"],editorConfig:{}});const W=(0,b.compose)(b.toClass,(0,b.branch)((function(){let{active:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!e}),(()=>()=>null)),(0,u.connect)((0,p.P1)([O.ex,O.aN,O.Vf,O.p,N.L3,O.z_,O.Z0],((e,t,a,l,s,r,i)=>({isEditing:"edit"===e,loading:t,layer:a,error:l,userRole:s,canEdit:r,styleService:i}))),{onInit:v.E0,onUpdateParams:g.Xy},((e,t,a)=>{var l,s,r;const i=(null===(l=a.styleService)||void 0===l?void 0:l.baseUrl)===(null===(s=e.styleService)||void 0===s?void 0:s.baseUrl)&&(null===(r=e.styleService)||void 0===r?void 0:r.isStatic),n=a.styleService&&!i?{...a.styleService,isStatic:!0}:{...e.styleService};return{...a,...e,...t,styleService:n}})),(0,h.Z)((e=>{let{error:t}=e;return!!(null!=t&&t.availableStyles||null!=t&&t.global||null!=t&&t.parsingCapabilities)}),(e=>{let{error:t}=e;return{glyph:"exclamation-mark",title:m().createElement(S.Z,{msgId:"styleeditor.errorTitle"}),description:m().createElement(S.Z,{msgId:((null==t?void 0:t.availableStyles)?"styleeditor.missingAvailableStylesMessage":(null==t?void 0:t.parsingCapabilities)&&"styleeditor.parsingCapabilitiesError")||(null==t?void 0:t.global)&&"styleeditor.globalError"}),style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},mainViewStyle:{margin:"auto",width:300}}})),(0,w.Z)((e=>{let{loading:t}=e;return"global"===t}),{size:150,style:{margin:"auto"}},(e=>m().createElement("div",{style:{position:"relative",height:"100%",display:"flex"}},m().createElement(E.Z,e)))),(0,b.compose)((0,u.connect)((()=>({})),{toggleStyleEditor:v.Wv}),(0,b.lifecycle)({componentDidMount(){this.props.toggleStyleEditor(null,!0)}})))(M),I={StyleEditorPlugin:o()(W,{TOC:{priority:1,container:"TOCItemSettings"},TOCItemsSettings:{name:"StyleEditor",target:"style",priority:1,ToolbarComponent:U.lC}}),reducers:{styleeditor:a(703137).Z},epics:a(902746).ZP}},703137:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var l=a(546243),s=a(747037),r=a.n(s);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.wL:return{...e,service:t.service,canEdit:t.canEdit};case l.Nm:return{...e,canEdit:t.canEdit};case l.gF:return{...e,temporaryId:t.temporaryId,templateId:t.templateId,code:t.code,format:t.format,error:null,languageVersion:t.languageVersion,initialCode:t.init?t.code:e.initialCode};case l.g$:return""===t.status?{...e,status:t.status,code:"",templateId:"",initialCode:"",addStyle:!1,error:{}}:{...e,status:t.status};case l.dJ:return{service:e.service&&{...e.service}||{},canEdit:e.canEdit,loading:e.loading};case l.uz:return{...e,addStyle:t.add};case l.lX:return{...e,loading:!t.status||t.status};case l.E2:return{...e,loading:!1,enabled:!0};case l.mF:{var a,s,i;const l=(null==t||null===(a=t.error)||void 0===a?void 0:a.statusText)||(null==t||null===(s=t.error)||void 0===s?void 0:s.message)||"",n=r()(null==t||null===(i=t.error)||void 0===i?void 0:i.messageId)&&{messageId:t.error.messageId},o=l.match(/line\s([\d]+)|column\s([\d]+)|lineNumber:\s([\d]+)|columnNumber:\s([\d]+)/g),d=o&&2===o.length&&o.reduce(((e,t)=>{const a=t.split(" "),l=a[0].replace(/Number:/g,""),s=parseFloat(a[1]);return l&&!isNaN(s)&&{...e,[l]:s}||{...e}}),{message:l,...n})||{message:l,...n};return{...e,loading:!1,canEdit:!(t.error&&(401===t.error.status||403===t.error.status||t.error.message&&-1!==t.error.message.indexOf("could not be unmarshalled"))),error:{...e.error,[t.status||"global"]:{status:t.error&&t.error.status||400,...d}}}}case l.dk:return{...e,metadata:{...e.metadata,...t.metadata}};default:return e}}},968929:(e,t,a)=>{var l=a(548403),s=a(135393)((function(e,t,a){return t=t.toLowerCase(),e+(a?l(t):t)}));e.exports=s}}]);