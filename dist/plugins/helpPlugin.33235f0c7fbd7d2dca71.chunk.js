(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[3103],{632307:(e,n,l)=>{"use strict";l.r(n),l.d(n,{default:()=>E});var t=l(727418),s=l.n(t),p=l(124852),o=l.n(p),i=l(630294),a=l(171703),r=l(687753),c=l(45697),h=l.n(c),d=l(590504);function m(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}l(877939);class b extends o().Component{render(){const e=this.props.asPanel?o().createElement(i.Panel,{header:o().createElement("span",null,o().createElement("span",{className:"help-panel-title"},this.props.title),o().createElement("span",{className:"help-panel-close panel-close",onClick:this.props.onClose}))},this.props.helpText):o().createElement(d.Z,{id:this.props.id,style:this.props.panelStyle,className:this.props.panelClassName},o().createElement("span",{role:"header"},o().createElement("span",{className:"help-panel-title"},this.props.title),o().createElement("button",{onClick:this.props.onClose,className:"help-panel-close close"},this.props.closeGlyph?o().createElement(i.Glyphicon,{glyph:this.props.closeGlyph}):o().createElement("span",null,"×"))),o().createElement("span",{role:"body"},this.props.helpText));return o().createElement("div",{id:this.props.id,className:this.props.isVisible?"":"hidden",style:{position:"absolute",top:"140px",marginLeft:"8px"}},e)}}m(b,"propTypes",{id:h().string,helpText:h().string,isVisible:h().bool,title:h().string,onClose:h().func,asPanel:h().bool,closeGlyph:h().string,panelStyle:h().object,panelClassName:h().string}),m(b,"defaultProps",{id:"mapstore-helptext-panel",isVisible:!1,title:"HELP",onClose:()=>{},asPanel:!1,closeGlyph:"1-close"});const u=b;var x=l(804504),g=l(781512);const y=(0,a.connect)((e=>({isVisible:e.controls&&e.controls.help&&e.controls.help.enabled,helpText:e.help&&e.help.helpText})),{onClose:r.Xi.bind(null,"help",null)})(u),E={HelpPlugin:s()(y,{Toolbar:{name:"help",position:1e3,icon:o().createElement(i.Glyphicon,{glyph:"question-sign"}),tooltip:"help",toggle:!0,priority:1},BurgerMenu:{name:"help",position:1e3,text:o().createElement(x.Z,{msgId:"help"}),icon:o().createElement(i.Glyphicon,{glyph:"question-sign"}),action:r.Xi.bind(null,"help",null),priority:3,doNotHide:!0},SidebarMenu:{name:"help",position:1e3,text:o().createElement(x.Z,{msgId:"help"}),icon:o().createElement(i.Glyphicon,{glyph:"question-sign"}),action:r.Xi.bind(null,"help",null),priority:2,doNotHide:!0}}),reducers:{help:g.Z}}},679343:(e,n,l)=>{"use strict";l.d(n,{Z:()=>p});var t=l(923645),s=l.n(t)()((function(e){return e[1]}));s.push([e.id,".ms2 .mapToolbar .mapstore-tb-helpbadge {\n    display: block;\n    background-color: #777;\n    position: absolute;\n    z-index: 1000;\n    top : -10px;\n    left: -10px;\n}\n\n\n.ms2 #helpbadge-zoomToMaxExtent {\n    display: inline;\n    position: absolute;\n    left: 34px;\n    top: 72px;\n    z-index: 100000\n}\n\n.ms2 #helpbadge-scaleBox {\n    display: inline;\n    position: absolute;\n    left: 116px;\n    bottom: 48px;\n    z-index: 100000\n}\n\n.ms2 #helpbadge-seachBar {\n    display: inline;\n    position: absolute;\n    left: 46px;\n    top: 10px;\n    z-index: 100000\n}\n\n\n.ms2 .btn .badge {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n}\n\n.ms2 .themed .btn .badge {\n    top: -35px;\n    left: -50px;\n}\n\n.ms2 .badge {\n    cursor: pointer;\n}\n\n.ms2 #helpbadge-scaleBox {\n    left: 0 !important;\n}\n\n.ms2 #mapstore-navbar #helpbadge-search-help {\n    position: absolute;\n    left: -10px;\n    bottom: -8px;\n    z-index: 1;\n}\n",""]);const p=s},877939:(e,n,l)=>{"use strict";var t=l(893379),s=l.n(t),p=l(679343);s()(p.Z,{insert:"head",singleton:!1}),p.Z.locals}}]);