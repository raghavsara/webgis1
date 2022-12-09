(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[2549],{962549:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>M});var r=a(124852),n=a.n(r),l=(a(707169),a(893379)),i=a.n(l),o=a(585250);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var s=a(967134),d=a(909041),m=a(689265),p=a.n(m),u=a(717247),c=a.n(u),h=a(486234),g=a(45697),b=a.n(g),y=a(743129),v=a(727418),E=a.n(v),f=a(423570),k=a.n(f),P=a(478718),S=a.n(P),C=a(957557),x=a.n(C),w=a(227361),T=a.n(w),Z=a(3674),D=a.n(Z),F=a(281763),I=a.n(F),A=a(451584),O=a.n(A),j=a(804504),N=a(283604),L=a(630294),R=a(23888),G=a(807058),z=a(719648);function B(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const U=(0,a(36549).Z)(R.Z),$=(0,h.Z)("placeholder")(s.Editor);class M extends n().Component{constructor(e){var t;super(e),B(this,"state",{title:"",format:"image/png",thumbnail:{},additionalParameters:[],credits:{}}),B(this,"assignParameters",(e=>D()(e).map(((t,a)=>{const r=e[t],n=I()(r)?"number":O()(r)?"boolean":"string";return{id:a,param:t,type:n,val:"string"===n?r?r.toString():"":r}})))),B(this,"addAdditionalParameter",((e,t,a,r)=>{this.setState({additionalParameters:this.state.additionalParameters.map((n=>{if(n.id===a){let a;if("val"===t)switch(r){case"number":a=Number(e),a&&!isNaN(a)||(a=0);break;case"boolean":a=!O()(e)||e;break;default:a=e?e.toString():""}else a=e;return E()({},n,{[t]:a,type:r})}return n}))})})),B(this,"resetParameters",(()=>this.setState({additionalParameters:[]})));const a=S()(this.props,"title","format","style","thumbnail","credits"),r=(null==a||null===(t=a.credits)||void 0===t?void 0:t.title)||"",n=c()(r),l=d.ContentState.createFromBlockArray(n.contentBlocks),i=d.EditorState.createWithContent(l),o=E()({},a,{additionalParameters:this.assignParameters(this.props.additionalParameters),editorState:i});this.state=o}onEditorStateChange(e){this.setState({...this.state,editorState:e})}renderStyleSelector(){return this.props.capabilities?n().createElement(L.FormGroup,null,n().createElement(L.ControlLabel,null,n().createElement(j.Z,{msgId:"layerProperties.style"})),n().createElement(y.ZP,{onChange:e=>this.setState({style:e?e.value:void 0}),clearable:!0,value:this.state.style,options:(this.props.capabilities.availableStyles||[]).map((e=>{let{name:t}=e;return{label:t,value:t}}))})):null}renderThumbnailErrors(){const e={FORMAT:n().createElement(j.Z,{msgId:"map.errorFormat"}),SIZE:n().createElement(j.Z,{msgId:"map.errorSize"})};return this.state.thumbnailErrors&&this.state.thumbnailErrors.length>0?n().createElement("div",{className:"dropzone-errorBox alert-danger"},n().createElement("p",null,n().createElement(j.Z,{msgId:"map.error"})),this.state.thumbnailErrors.map((t=>n().createElement("div",{id:"error"+t,key:"error"+t,className:"error"+t},e[t])))):null}renderSpecificTypeForm(){return"wms"===this.props.layer.type?n().createElement(n().Fragment,null,n().createElement(L.FormGroup,{controlId:"formControlsSelect"},n().createElement(L.ControlLabel,null,n().createElement(j.Z,{msgId:"layerProperties.format.title"})),n().createElement(y.ZP,{onChange:e=>this.setState({format:e&&e.value}),value:this.state.format||this.props.defaultFormat,clearable:!0,options:this.props.formatOptions})),this.renderStyleSelector(),n().createElement(U,null,n().createElement("div",{style:{display:"flex",alignItems:"center"}},n().createElement(L.ControlLabel,{style:{flex:1}},n().createElement(j.Z,{msgId:"backgroundDialog.additionalParameters"})),n().createElement(U,{className:"square-button-md",tooltipId:"backgroundDialog.addAdditionalParameterTooltip",style:{borderColor:"transparent"},onClick:()=>{const e=Math.max(...this.state.additionalParameters.length>0?this.state.additionalParameters.map((e=>e.id)):[-1])+1;this.setState({additionalParameters:[...this.state.additionalParameters,{id:e,type:"string",param:"",val:""}]})}},n().createElement(L.Glyphicon,{glyph:"plus"}))),this.state.additionalParameters.map((e=>n().createElement("div",{key:"val:"+e.id,style:{display:"flex",marginTop:8}},n().createElement("div",{style:{display:"flex",flex:1,marginRight:8}},n().createElement(L.FormControl,{style:{width:"50%",marginRight:8,minWidth:0},placeholder:(0,z.S$)(this.context.messages,"backgroundDialog.parameter"),value:e.param,onChange:t=>this.addAdditionalParameter(t.target.value,"param",e.id,e.type)}),"boolean"===e.type?n().createElement("div",{style:{width:"50%"}},n().createElement(y.ZP,{onChange:t=>this.addAdditionalParameter(t.value,"val",e.id,e.type),clearable:!1,value:e.val,options:this.props.booleanOptions})):n().createElement(L.FormControl,{style:{width:"50%",minWidth:0},placeholder:(0,z.S$)(this.context.messages,"backgroundDialog.value"),value:e.val.toString(),onChange:t=>this.addAdditionalParameter(t.target.value,"val",e.id,e.type)})),n().createElement(y.ZP,{style:{flex:1,width:90},onChange:t=>this.addAdditionalParameter(e.val,"val",e.id,t.value),clearable:!1,value:e.type,options:this.props.parameterTypeOptions.map((e=>{let{label:t,...a}=e;return{...a,label:(0,z.S$)(this.context.messages,t)}}))}),n().createElement(U,{onClick:()=>this.setState({additionalParameters:this.state.additionalParameters.filter((t=>e.id!==t.id))}),tooltipId:"backgroundDialog.removeAdditionalParameterTooltip",className:"square-button-md",style:{borderColor:"transparent"}},n().createElement(L.Glyphicon,{glyph:"trash"}))))))):"wmts"===this.props.layer.type?n().createElement(n().Fragment,null,n().createElement(L.FormGroup,{controlId:"formControlsSelect"},n().createElement(L.ControlLabel,null,n().createElement(j.Z,{msgId:"backgroundDialog.editAttribution"})),n().createElement($,{editorState:this.state.editorState,editorClassName:"ms2 form-control",toolbarClassName:"bg-dialog-attribution-toolbar",onEditorStateChange:this.onEditorStateChange.bind(this),placeholder:"backgroundDialog.editAttributionPlaceholder",toolbar:{options:["inline","blockType","link","remove"],inline:{options:["bold","italic","underline","strikethrough"]},blockType:{inDropDown:!0,options:["Normal","H5"]},link:{inDropDown:!0,options:["link","unlink"]}}}))):null}render(){return n().createElement(N.Z,{fitContent:!0,title:n().createElement(j.Z,{msgId:this.props.editing?"backgroundDialog.editTitle":"backgroundDialog.addTitle"}),show:!0,fade:!0,clickOutEnabled:!1,bodyClassName:"ms-flex modal-properties-container background-dialog",loading:this.props.loading,onClose:()=>{this.props.onClose(),this.resetParameters()},buttons:this.props.loading?[]:[{text:n().createElement(j.Z,{msgId:this.props.editing?"save":"backgroundDialog.add"}),bsStyle:"primary",onClick:()=>{const e=this.props.editing?this.props.layer.id:k()(),t=this.props.layer.thumbURL||"",a=this.state.format||this.props.defaultFormat,r=p()((0,d.convertToRaw)(this.state.editorState.getCurrentContent()));this.props.updateThumbnail(this.state.thumbnail.data,e),this.props.onSave(E()({},this.props.layer,x()(this.state,"thumbnail"),this.props.editing?{}:{id:e},{params:x()(this.state.additionalParameters.reduce(((e,t)=>E()(e,{[t.param]:t.val})),{}),["source","title"]),format:a,credits:{...this.state.credits,title:r},group:"background"},t||this.state.thumbnail.data?{thumbURL:this.state.thumbnail.url}:{})),this.resetParameters()}}]},n().createElement(L.Form,{style:{width:"100%"}},this.renderThumbnailErrors(),n().createElement(G.Z,{onUpdate:(e,t)=>this.setState({thumbnail:{data:e,url:t}}),onError:e=>this.setState({thumbnailErrors:e}),message:n().createElement(j.Z,{msgId:"backgroundDialog.thumbnailMessage"}),suggestion:"",map:{newThumbnail:T()(this.state.thumbnail,"url")||"NODATA"}}),n().createElement(L.FormGroup,null,n().createElement(L.ControlLabel,null,n().createElement(j.Z,{msgId:"layerProperties.title"})),n().createElement(L.FormControl,{value:this.state.title,placeholder:(0,z.S$)(this.context.messages,"backgroundDialog.titlePlaceholder"),onChange:e=>this.setState({title:e.target.value})})),this.renderSpecificTypeForm()))}}B(M,"propTypes",{loading:b().bool,editing:b().bool,layer:b().object,capabilities:b().object,onAdd:b().func,onClose:b().func,source:b().string,onSave:b().func,addParameters:b().func,updateThumbnail:b().func,thumbURL:b().string,title:b().string,format:b().string,credits:b().object,style:b().string,thumbnail:b().object,additionalParameters:b().object,addParameter:b().func,defaultFormat:b().string,formatOptions:b().array,parameterTypeOptions:b().array,booleanOptions:b().array}),B(M,"contextTypes",{messages:b().object}),B(M,"defaultProps",{updateThumbnail:()=>{},onClose:()=>{},onSave:()=>{},addParameters:()=>{},addParameter:()=>{},loading:!1,editing:!1,layer:{},capabilities:{},title:"",thumbnail:{},additionalParameters:{},formatOptions:[{label:"image/png",value:"image/png"},{label:"image/png8",value:"image/png8"},{label:"image/jpeg",value:"image/jpeg"},{label:"image/vnd.jpeg-png",value:"image/vnd.jpeg-png"},{label:"image/gif",value:"image/gif"}],parameterTypeOptions:[{label:"backgroundDialog.string",value:"string"},{label:"backgroundDialog.number",value:"number"},{label:"backgroundDialog.boolean",value:"boolean"}],booleanOptions:[{label:"True",value:!0},{label:"False",value:!1}]})},585250:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(923645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,".ms2 .bg-dialog-attribution-toolbar {\n    border: 1px solid #dddddd;\n    border-radius: 0;\n    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.ms2 .rdw-link-modal {\n    width: 197px;\n    height: 215px;\n}\n\n.ms2 .rdw-link-modal-target-option,\n.ms2 .rdw-link-modal-label {\n    font-size: 12px;\n}\n\n.ms2 .rdw-link-modal-buttonsection {\n    position: absolute;\n    bottom: 5px;\n    left: 32px;\n}\n.ms2 .rdw-link-modal-buttonsection .rdw-link-modal-btn {\n    font-size: 12px;\n    width: 50px;\n    height: 25px;\n}\n",""]);const l=n},451584:(e,t,a)=>{var r=a(644239),n=a(637005);e.exports=function(e){return!0===e||!1===e||n(e)&&"[object Boolean]"==r(e)}}}]);