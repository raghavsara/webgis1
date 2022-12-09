(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[4551],{555735:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(124852),s=n.n(o),l=n(45697),r=n.n(l),i=n(630294),a=n(91175),p=n.n(a),c=n(719648),d=n(401811),u=n(23888);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class g extends s().Component{constructor(){super(...arguments),m(this,"launchFlagAction",(e=>{this.props.onFlagSelected(e)}))}render(){let e,t=s().createElement(i.Tooltip,{id:"flag-button."+this.props.code},this.props.label);try{e=n(28435)("./"+this.props.code+".png")}catch(t){e=null}return e?s().createElement(d.Z,{key:"overlay-"+this.props.code,overlay:t,placement:this.props.tooltipPlacement},this.props.componentAsButton?s().createElement(u.Z,{key:this.props.code,onClick:this.launchFlagAction.bind(this,this.props.code),active:this.props.active},s().createElement("img",{src:e,alt:this.props.label})):s().createElement("span",{className:"lang-button"},s().createElement("img",{src:e,alt:this.props.label}))):null}}m(g,"propTypes",{id:r().string,lang:r().string,code:r().string,active:r().bool,label:r().string,description:r().string,onFlagSelected:r().func,tooltipPlacement:r().string,componentAsButton:r().bool}),m(g,"defaultProps",{componentAsButton:!0,locales:(0,c.w8)(),code:"en-US",onLanguageChange:function(){},onFlagSelected:()=>{},tooltipPlacement:"bottom"});const h=g;function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class y extends s().Component{render(){const e=(0,c.w8)(),t=p()(Object.keys(e).filter((t=>e[t].code===this.props.currentLocale)));return this.props.dropdown?s().createElement("div",{className:this.props.className},s().createElement(i.DropdownButton,{pullRight:!0,id:this.props.id,title:s().createElement(h,{componentAsButton:!1,key:t,code:this.props.currentLocale,label:e[t]&&e[t].description,lang:t})},Object.keys(e).filter((t=>e[t].code!==this.props.currentLocale)).map((t=>s().createElement(i.MenuItem,{key:t,eventKey:t,onClick:()=>this.props.onLanguageChange(e[t].code)},s().createElement(h,{componentAsButton:!1,key:t,code:e[t].code,label:e[t].description,lang:t,active:e[t].code===this.props.currentLocale})," "+e[t].description))))):s().createElement(i.ButtonGroup,{id:this.props.id,type:"select",bsSize:"small"},Object.keys(e).map((t=>s().createElement(h,{key:t,code:e[t].code,label:e[t].description,lang:t,active:e[t].code===this.props.currentLocale,onFlagSelected:this.props.onLanguageChange}))))}}b(y,"propTypes",{id:r().string,className:r().string,locales:r().object,currentLocale:r().string,onLanguageChange:r().func,dropdown:r().bool}),b(y,"defaultProps",{id:"mapstore-langselector",className:"mapstore-langselector",locales:{},currentLocale:"en-US",onLanguageChange:function(){},dropdown:!0});const f=y},481063:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(45697),s=n.n(o),l=n(124852),r=n.n(l),i=n(727418),a=n.n(i);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class c extends r().Component{constructor(){super(...arguments),p(this,"getStyle",(()=>{var e={cursor:this.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return this.props.image?a()(e,{overflow:"hidden"}):a()(e,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),a()(e,this.props.style),e}))}render(){return r().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}p(c,"propTypes",{id:s().string,image:s().string,onClick:s().func,style:s().object,disabled:s().bool,tooltip:s().string,className:s().string}),p(c,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const d=c},787603:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var o=n(893379),s=n.n(o),l=n(73710);s()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var r=n(727418),i=n.n(r),a=n(45697),p=n.n(a),c=n(124852),d=n.n(c),u=n(984596),m=n.n(u),g=n(630294),h=n(171703),b=n(21090),y=n(687753),f=n(682465),E=n(555735),v=n(401811),k=n(481063),C=n(23888);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class B extends d().Component{constructor(){super(...arguments),P(this,"getNormalButtons",(()=>{let e=d().createElement(g.Tooltip,{id:"undo-btn"},this.props.undoBtnProps.label),t=d().createElement(g.Tooltip,{id:"redo-btn"},this.props.redoBtnProps.label);return d().createElement(g.ButtonGroup,{id:this.props.id,bsSize:"small"},d().createElement(v.Z,{placement:"left",key:"overlay-undo-btn",overlay:e},d().createElement(C.Z,w({bsStyle:"default"},this.props.undoBtnProps,{id:"undo-btn",key:"undo-btn"}),d().createElement(g.Glyphicon,{glyph:"step-backward"}))),d().createElement(v.Z,{key:"overlay-redo-btn",overlay:t},d().createElement(C.Z,w({bsStyle:"default"},this.props.redoBtnProps,{id:"redo-btn",key:"redo-btn"}),d().createElement(g.Glyphicon,{glyph:"step-forward"}))))})),P(this,"getImageButtons",(()=>d().createElement("span",{id:this.props.id,style:{margin:0,pading:0}},d().createElement(k.Z,this.props.undoBtnProps),d().createElement(k.Z,this.props.redoBtnProps))))}render(){return"normal"===this.props.btnType?this.getNormalButtons():this.getImageButtons()}}P(B,"propTypes",{id:p().string,undoBtnProps:p().object,redoBtnProps:p().object,btnType:p().oneOf(["normal","image"])}),P(B,"defaultProps",{id:"mapstore-historybar",undoBtnProps:{onClick:function(){}},redoBtnProps:{onClick:function(){},label:""},btnType:"normal"});const x=B;var S=n(590504),j=n(719648),N=n(488400);function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class T extends d().Component{render(){return d().createElement("div",{style:this.props.style},this.props.children)}}Z(T,"propTypes",{isPanel:p().bool,buttonTooltip:p().oneOfType([p().string,p().element]),style:p().object}),Z(T,"defaultProps",{isPanel:!0,icon:d().createElement(g.Glyphicon,{glyph:"cog"}),style:{width:"300px"}});const O=T;function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const L=(0,h.connect)((e=>({currentLocale:e.locale&&e.locale.current})),{onLanguageChange:f.HO.bind(null,null)})(E.Z),{undo:I,redo:F}=b.zF;class A extends d().Component{constructor(){super(...arguments),G(this,"renderSettings",(()=>{const e={language:d().createElement("span",{key:"language-label"},d().createElement(g.FormGroup,null,d().createElement(g.Row,null,d().createElement(g.Col,{xs:12},d().createElement("label",null,d().createElement(N.Z,{msgId:"language"})))),d().createElement(g.Row,null,d().createElement(g.Col,{xs:12},d().createElement(L,{dropdown:!1,locales:(0,j.w8)(),key:"langSelector"})))))},t={history:d().createElement(x,{key:"history",undoBtnProps:{onClick:this.props.undo,label:d().createElement(N.Z,{msgId:"history.undoBtnTooltip"}),disabled:!(this.props.mapHistory.past.length>0)},redoBtnProps:{onClick:this.props.redo,label:d().createElement(N.Z,{msgId:"history.redoBtnTooltip"}),disabled:!(this.props.mapHistory.future.length>0)}})};return Object.keys(e).filter(this.isEnabled).map((t=>e[t])).concat(this.props.items.map((e=>m()(e.tool).map(((t,n)=>(0,c.cloneElement)(t,{...e.cfg,key:`${e.name}-${n}`})))))).concat(Object.keys(t).filter(this.isEnabled).map((e=>t[e])))})),G(this,"isEnabled",(e=>i()({},this.props.settings,this.props.overrideSettings)[e]))}render(){const e=d().createElement(O,{key:"SettingsPanel",role:"body",style:this.props.style},this.renderSettings());return this.props.wrap?this.props.visible?this.props.wrapWithPanel?d().createElement(g.Panel,{id:this.props.id,header:d().createElement("span",null,d().createElement("span",{className:"settings-panel-title"},d().createElement(N.Z,{msgId:"settings"})),d().createElement("span",{className:"settings-panel-close panel-close",onClick:this.props.toggleControl})),style:this.props.panelStyle,className:this.props.panelClassName},e):d().createElement(S.Z,{id:this.props.id,style:{...this.props.panelStyle,display:this.props.visible?"block":"none"},className:this.props.panelClassName,draggable:!1,modal:!0},d().createElement("span",{role:"header"},d().createElement("span",{className:"settings-panel-title"},d().createElement(N.Z,{msgId:"settings"})),d().createElement("button",{onClick:this.props.toggleControl,className:"settings-panel-close close"},this.props.closeGlyph?d().createElement(g.Glyphicon,{glyph:this.props.closeGlyph}):d().createElement("span",null,"×"))),e):null:e}}G(A,"propTypes",{id:p().string,undo:p().func,redo:p().func,mapHistory:p().object,settings:p().object,overrideSettings:p().object,items:p().array,style:p().object,wrap:p().bool,wrapWithPanel:p().bool,panelStyle:p().object,panelClassName:p().string,visible:p().bool,toggleControl:p().func,closeGlyph:p().string}),G(A,"defaultProps",{id:"mapstore-settings",settings:{language:!0,history:!0},overrideSettings:{history:!1},items:[],style:{width:"300px"},wrap:!1,wrapWithPanel:!1,panelStyle:{minWidth:"300px",zIndex:1996,position:"absolute",overflow:"visible",top:"90px",left:"calc(50% - 150px)",backgroundColor:"white"},panelClassName:"toolbar-panel",visible:!1,toggleControl:()=>{},closeGlyph:"1-close"});const H=(0,h.connect)((e=>({mapHistory:e.map&&e.map.past&&{past:e.map.past,future:e.map.future}||{past:[],future:[]},visible:e.controls&&e.controls.settings&&e.controls.settings.enabled||!1,settings:{language:!!e.locale,history:!(!e.map||!e.map.history)}})),{undo:I,redo:F,toggleControl:y.Xi.bind(null,"settings",null)})(A),z={SettingsPlugin:i()(H,{Toolbar:{name:"settings",position:100,tooltip:"settings",help:d().createElement(N.Z,{msgId:"helptexts.settingsPanel"}),icon:d().createElement(g.Glyphicon,{glyph:"cog"}),panel:!0,wrap:!0,exclusive:!0,priority:1},DrawerMenu:{name:"settings",position:3,title:"settings",priority:2},BurgerMenu:{name:"settings",position:100,text:d().createElement(N.Z,{msgId:"settings"}),tooltip:"settingsTooltip",icon:d().createElement(g.Glyphicon,{glyph:"cog"}),action:y.Xi.bind(null,"settings",null),priority:4,doNotHide:!0},SidebarMenu:{name:"settings",position:100,tooltip:"settingsTooltip",text:d().createElement(N.Z,{msgId:"settings"}),icon:d().createElement(g.Glyphicon,{glyph:"cog"}),toggle:!0,action:y.Xi.bind(null,"settings",null),priority:3,doNotHide:!0}}),reducers:{}}},73710:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(923645),s=n.n(o)()((function(e){return e[1]}));s.push([e.id,"\n.ms2 #mapstore-settings .btn-group {\n    width: auto;\n}\n\n.ms2 #mapstore-settings .modal-body #mapstore-mousepositionsettings button {\n    float: none;\n    margin-left: 40%;\n}\n\n.ms2 #mapstore-settings .modal-body #mapstore-mousepositionsettings select {\n    float: none;\n    margin-left: 40%;\n}\n\n.ms2 #mapstore-settings .modal-body .form-group {\n    margin-top: 15px;\n    border-top: solid 1px #EEE;\n    padding-top: 10px;\n}\n",""]);const l=s}}]);