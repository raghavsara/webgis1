(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[3513],{994345:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(867076),r=a(36549),l=a(832979);const s=(0,o.compose)((0,o.withProps)((e=>{let{renderPopover:t,popoverOptions:a,...o}=e;return t?{renderPopover:t,popoverOptions:a,...o}:{...o}})),(0,o.branch)((function(){let{renderPopover:e,popoverOptions:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&!!t}),l.Z,r.Z))},832979:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var o=a(124852),r=a.n(o),l=a(118438),s=a(630294),n=a(957557),i=a.n(n),p=a(180307),d=a.n(p);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},c.apply(this,arguments)}const u=e=>class extends r().Component{render(){let t=null;const{popoverOptions:a,keyProp:o,...n}=this.props;return r().createElement("span",{className:"mapstore-info-popover"},r().createElement(e,c({},i()(n,["renderPopover","tooltipId"]),{key:o,ref:e=>{t=e}})),r().createElement(l.Z,{placement:a.placement,shouldUpdatePosition:!0,show:!0,target:()=>d().findDOMNode(t)},r().createElement(s.Popover,a.props,a.content)))}}},712845:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(124852),r=a.n(o),l=a(630294),s=a(23888);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},n.apply(this,arguments)}const i={width:0,padding:0,borderWidth:0},p={},d=e=>e?p:i,c=(0,o.forwardRef)(((e,t)=>{let{disabled:a,id:o,visible:i,onClick:p,glyph:c,active:u,className:m="square-button-md",...v}=e;return r().createElement(s.Z,n({ref:t},v,{bsStyle:u?"success":"primary",disabled:a,id:`fg-${o}`,style:d(i),className:m,onClick:()=>!a&&p()}),r().createElement(l.Glyphicon,{glyph:c}))}))},81674:(e,t,a)=>{"use strict";a.d(t,{l:()=>i});var o=a(49977),r=a(470509),l=a.n(r),s=a(510810),n=a(474810);const i=(e,t)=>o.Observable.defer((()=>l().get((0,n.Jy)(e,{version:"1.0.0",REQUEST:"DescribeProcess",IDENTIFIER:t}),{timeout:5e3,headers:{Accept:"application/json","Content-Type":"application/xml"}}))).let(s.oB)},372236:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Ht});var o={};a.r(o),a.d(o,{checkExportDataEntriesEpic:()=>qt,checkWPSAvailabilityEpic:()=>Wt,closeExportDownload:()=>Bt,fetchFormatsWFSDownload:()=>Zt,openDownloadTool:()=>Mt,resetExportDataResultsOnLogout:()=>Vt,serializeCookieOnExportDataChange:()=>Xt,setExportDataResultsOnLoginSuccessAndMapConfigLoaded:()=>Ut,showInfoBubbleMessageEpic:()=>jt,startFeatureExportDownload:()=>_t});var r=a(171703),l=a(22222);const s="LAYERDOWNLOAD:CHECK_WPS_AVAILABILITY",n="LAYERDOWNLOAD:CHECKING_WPS_AVAILABILITY",i="LAYERDOWNLOAD:DOWNLOAD_FEATURES",p="LAYERDOWNLOAD:DOWNLOAD_FINISHED",d="LAYERDOWNLOAD:FORMAT_SELECTED",c="LAYERDOWNLOAD:CLEAR_DOWNLOAD_OPTIONS",u="LAYERDOWNLOAD:FORMAT_FETCH",m="LAYERDOWNLOAD:FORMAT_UPDATE",v="LAYERDOWNLOAD:SET_WPS_AVAILABLE",w="LAYERDOWNLOAD:SET_SERVICE",g="LAYERDOWNLOAD:SET_EXPORT_DATA_RESULTS",y="LAYERDOWNLOAD:ADD_EXPORT_DATA_RESULT",b="LAYERDOWNLOAD:UPDATE_EXPORT_DATA_RESULT",h="LAYERDOWNLOAD:REMOVE_EXPORT_DATA_RESULT",f="LAYERDOWNLOAD:REMOVE_EXPORT_DATA_RESULTS",E="LAYERDOWNLOAD:CHECK_EXPORT_DATA_ENTRIES",O="LAYERDOWNLOAD:CHECKING_EXPORT_DATA_ENTRIES",S="LAYERDOWNLOAD:SERIALIZE_COOKIE",A="LAYERDOWNLOAD:SHOW_INFO_BUBBLE_MESSAGE",D="LAYERDOWNLOAD:SHOW_INFO_BUBBLE",R="LAYERDOWNLOAD:SET_INFO_BUBBLE_MESSAGE",N=e=>({type:n,checking:e}),C=(e,t)=>({type:d,key:e,value:t}),P=()=>({type:p}),x=e=>({type:v,value:e}),T=e=>({type:w,service:e}),F=e=>({type:g,results:e}),L=(e,t)=>({type:b,id:e,newProps:t}),I=e=>({type:O,checking:e}),k=(e,t,a,o)=>({type:A,msgId:e,msgParams:t,level:a,duration:o}),G=e=>({type:D,show:e}),W=(e,t,a)=>({type:R,msgId:e,msgParams:t,level:a});var M=a(687753),Z=a(820709),_=a(612912),B=a(254020);const j=e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.service},q=(0,l.P1)(Z.Rd,B.X1,_.Iz,((e,t,a)=>e?t:null!=a&&a.name?{featureTypeName:a.name,filterType:"OGC",ogcVersion:"1.1.0"}:null)),X=e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.results};var V=a(707366),U=a(124852),H=a.n(U),Y=a(45697),z=a.n(Y),$=a(630998),K=a.n($),J=a(727418),Q=a.n(J),ee=a(630294),te=a(472986),ae=a.n(te),oe=a(89518),re=a(590504),le=a(466737),se=a(804504),ne=a(747119),ie=a(743129),pe=a(227361),de=a.n(pe),ce=a(91175),ue=a.n(ce),me=a(747037),ve=a.n(me),we=a(594239);const ge=e=>{let{cropDataSetVisible:t=!1,cropDataSetEnabled:a=!1,donwloadFilteredVisible:o=!1,downloadFilteredEnabled:r=!1,advancedOptionsVisible:l=!1,compressionOptions:s=["CCITT RLE","LZW","JPEG","ZLib","PackBits","Deflate"],selectedCompression:n,tileWidth:i,tileHeight:p,quality:d,onChange:c=(()=>{})}=e;const[u,m]=H().useState(!1);return H().createElement(H().Fragment,null,t&&H().createElement("div",{className:"mapstore-downloadwpsoptions-menuitem"},H().createElement(we.Z,{checked:a,onClick:e=>c("cropDataSet",e)}),H().createElement(se.Z,{msgId:"layerdownload.cropDataSet"})),o&&H().createElement("div",{className:"mapstore-downloadwpsoptions-menuitem"},H().createElement(we.Z,{checked:r,onClick:e=>c("downloadFilteredDataSet",e)}),H().createElement(se.Z,{msgId:"layerdownload.downloadFilteredDataSet"})),l&&H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced-options"},H().createElement(ee.Button,{className:"no-border",onClick:()=>m(!u)},H().createElement(ee.Glyphicon,{glyph:"chevron-"+(u?"down":"right")})),H().createElement(se.Z,{msgId:"layerdownload.advancedOptions"})),u&&l&&H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced"},H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced-menuitem"},H().createElement(se.Z,{msgId:"layerdownload.compression"}),H().createElement(ie.ZP,{clearable:!0,value:n,options:s.map((e=>ve()(e)?{value:e,label:e}:e)),onChange:e=>c("compression",null==e?void 0:e.value)})),H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced-menuitem"},H().createElement(se.Z,{msgId:"layerdownload.quality"}),H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced-menuitem-control"},H().createElement(ee.FormControl,{placeholder:"0.75",type:"number",min:"0",max:"1",value:d||"",onChange:e=>c("quality",e.target.value)}))),H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced-menuitem"},H().createElement(se.Z,{msgId:"layerdownload.tileWidth"}),H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced-menuitem-control"},H().createElement(ee.FormControl,{placeholder:"256",type:"number",min:"0",value:i||"",onChange:e=>c("tileWidth",e.target.value&&e.target.value.length>0?`${parseInt(e.target.value,10)}`:"")}),H().createElement("span",null,"px"))),H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced-menuitem"},H().createElement(se.Z,{msgId:"layerdownload.tileHeight"}),H().createElement("div",{className:"mapstore-downloadwpsoptions-advanced-menuitem-control"},H().createElement(ee.FormControl,{placeholder:"256",type:"number",min:"0",value:p||"",onChange:e=>c("tileHeight",e.target.value&&e.target.value.length>0?`${parseInt(e.target.value,10)}`:"")}),H().createElement("span",null,"px")))))};function ye(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class be extends H().Component{constructor(e){super(e),ye(this,"getSelectedFormat",(()=>de()(this.props,"downloadOptions.selectedFormat"))),ye(this,"getSelectedSRS",(()=>de()(this.props,"downloadOptions.selectedSrs")||this.props.defaultSrs||de()(ue()(this.props.srsList),"name")))}render(){var e;return H().createElement("form",null,this.props.wpsAvailable&&this.props.wfsAvailable&&H().createElement(H().Fragment,null,H().createElement("label",null,H().createElement(se.Z,{msgId:"layerdownload.service"})),H().createElement(ie.ZP,{clearable:!1,value:this.props.service,onChange:e=>this.props.setService(e.value),options:this.props.services})),H().createElement("label",null,H().createElement(se.Z,{msgId:"layerdownload.format"})),H().createElement(ie.ZP,{clearable:!1,isLoading:this.props.formatsLoading,onOpen:()=>this.props.formatOptionsFetch(this.props.layer),value:null===(e=this.props.downloadOptions)||void 0===e?void 0:e.selectedFormat,noResultsText:H().createElement(se.Z,{msgId:"layerdownload.format"}),onChange:e=>this.props.onChange("selectedFormat",e.value),options:this.props.formats.map((e=>({value:e.name,label:e.label||e.name})))}),H().createElement("label",null,H().createElement(se.Z,{msgId:"layerdownload.srs"})),H().createElement(ie.ZP,{clearable:!1,value:this.getSelectedSRS(),onChange:e=>this.props.onChange("selectedSrs",e.value),options:this.props.srsList.map((e=>({value:e.name,label:e.label||e.name})))}),this.props.wpsOptionsVisible&&H().createElement(ge,{cropDataSetVisible:!0,donwloadFilteredVisible:this.props.downloadFilteredVisible,advancedOptionsVisible:this.props.wpsAdvancedOptionsVisible,cropDataSetEnabled:this.props.downloadOptions.cropDataSet,downloadFilteredEnabled:this.props.downloadOptions.downloadFilteredDataSet,selectedCompression:this.props.downloadOptions.compression,quality:this.props.downloadOptions.quality,tileWidth:this.props.downloadOptions.tileWidth,tileHeight:this.props.downloadOptions.tileHeight,onChange:this.props.onChange}),this.props.virtualScroll?null:H().createElement(ee.Checkbox,{checked:this.props.downloadOptions.singlePage,onChange:()=>this.props.onChange("singlePage",!this.props.downloadOptions.singlePage)},H().createElement(se.Z,{msgId:"layerdownload.downloadonlycurrentpage"})))}}ye(be,"propTypes",{wpsAvailable:z().bool,wfsAvailable:z().bool,service:z().string,downloadOptions:z().object,formatOptionsFetch:z().func,formats:z().array,srsList:z().array,setService:z().func,onChange:z().func,defaultSrs:z().string,wpsOptionsVisible:z().bool,wpsAdvancedOptionsVisible:z().bool,downloadFilteredVisible:z().bool,layer:z().object,formatsLoading:z().bool,virtualScroll:z().bool,services:z().arrayOf(z().object)}),ye(be,"defaultProps",{wpsAvailable:!1,wfsAvailable:!0,service:"wps",downloadOptions:{},formatsLoading:!1,formats:[],srsList:[],wpsOptionsVisible:!1,wpsAdvancedOptionsVisible:!1,downloadFilteredVisible:!1,virtualScroll:!0,services:[{value:"wps",label:"WPS"},{value:"wfs",label:"WFS"}]});const he=be;var fe=a(23888),Ee=a(112008);function Oe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class Se extends H().Component{constructor(){super(...arguments),Oe(this,"onClose",(()=>{this.props.onClose()})),Oe(this,"renderIcon",(()=>this.props.loading?H().createElement("div",{style:{float:"left"}},H().createElement(ae(),{spinnerName:"circle",noFadeIn:!0})):H().createElement(ee.Glyphicon,{glyph:"download"}))),Oe(this,"handleExport",(()=>{const{url:e,filterObj:t,downloadOptions:a,defaultSrs:o,srsList:r,onExport:l,layer:s,attributes:n,customAttributeSettings:i}=this.props,p=a&&a.selectedSrs||o||(r[0]||{}).name,d=(0,Ee.Pf)(n,i);l(e||s.url,t,Q()({},a,{selectedSrs:p},{propertyName:d}))}))}componentDidUpdate(e){this.props.enabled!==e.enabled&&this.props.enabled&&(this.props.onClearDownloadOptions(),"wms"===this.props.layer.type&&this.props.onCheckWPSAvailability(this.props.url||this.props.layer.url,this.props.defaultSelectedService))}render(){var e,t,a;const o=e=>this.props.formats.filter((t=>{var a,o;let{validServices:r,type:l="vector"}=t;return(!r||K()(r,(t=>t===e))>-1)&&("vector"===l&&(null===(a=this.props.layer.search)||void 0===a?void 0:a.url)||"raster"===l&&!(null!==(o=this.props.layer.search)&&void 0!==o&&o.url))})),r=o("wfs"),l=o("wps"),s=r.length>0?r.filter((e=>this.props.wfsFormats.find((t=>t.name.toLowerCase()===e.name.toLowerCase())))):this.props.wfsFormats,n=Boolean(null===(e=this.props.layer.search)||void 0===e?void 0:e.url);return this.props.enabled?H().createElement(le.Z,null,H().createElement(re.Z,{id:"mapstore-export",draggable:!1,modal:!0},H().createElement("span",{role:"header"},H().createElement("span",{className:"about-panel-title"},H().createElement(se.Z,{msgId:"layerdownload.title"})),H().createElement("button",{onClick:this.onClose,className:"settings-panel-close close"},this.props.closeGlyph?H().createElement(ee.Glyphicon,{glyph:this.props.closeGlyph}):H().createElement("span",null,"×"))),H().createElement("div",{role:"body"},this.props.checkingWPSAvailability?H().createElement(oe.Z,{size:100,style:{margin:"0 auto"}}):this.props.wpsAvailable||n?H().createElement(he,{wpsAvailable:this.props.wpsAvailable,wfsAvailable:n,service:this.props.service,downloadOptions:this.props.downloadOptions,setService:this.props.setService,onChange:this.props.onDownloadOptionChange,formatOptionsFetch:"wfs"===this.props.service?this.props.onFormatOptionsFetch:()=>{},formatsLoading:this.props.formatsLoading,formats:"wfs"===this.props.service?s:l,srsList:this.props.srsList,defaultSrs:this.props.defaultSrs,wpsOptionsVisible:"wps"===this.props.service,wpsAdvancedOptionsVisible:!(null!==(t=this.props.layer.search)&&void 0!==t&&t.url),downloadFilteredVisible:!(null===(a=this.props.layer.search)||void 0===a||!a.url),layer:this.props.layer,virtualScroll:this.props.virtualScroll,customAttributesSettings:this.props.customAttributeSettings,attributes:this.props.attributes}):H().createElement(ne.Z,{title:H().createElement(se.Z,{msgId:"layerdownload.noSupportedServiceFound"})})),!this.props.checkingWPSAvailability&&H().createElement("div",{role:"footer"},H().createElement(fe.Z,{bsStyle:"primary",className:"download-button",disabled:!this.props.downloadOptions.selectedFormat||this.props.loading,onClick:this.handleExport},this.renderIcon()," ",H().createElement(se.Z,{msgId:"layerdownload.export"}))))):null}}Oe(Se,"propTypes",{filterObj:z().object,closeGlyph:z().string,url:z().string,wpsAvailable:z().bool,service:z().string,defaultSelectedService:z().string,enabled:z().bool,loading:z().bool,checkingWPSAvailability:z().bool,onClose:z().func,onExport:z().func,onCheckWPSAvailability:z().func,setService:z().func,onDownloadOptionChange:z().func,onClearDownloadOptions:z().func,onFormatOptionsFetch:z().func,downloadOptions:z().object,wfsFormats:z().array,formats:z().array,srsList:z().array,defaultSrs:z().string,layer:z().object,formatsLoading:z().bool,virtualScroll:z().bool,customAttributeSettings:z().object,attributes:z().array}),Oe(Se,"defaultProps",{onExport:()=>{},onClose:()=>{},onCheckWPSAvailability:()=>{},setService:()=>{},onDownloadOptionChange:()=>{},onClearDownloadOptions:()=>{},onFormatOptionsFetch:()=>{},checkingWPSAvailability:!1,layer:{},closeGlyph:"1-close",wpsAvailable:!1,service:"wfs",defaultSelectedService:"wps",wfsFormats:[],formats:[{name:"application/json",label:"GeoJSON",type:"vector",validServices:["wps"]},{name:"application/arcgrid",label:"ArcGrid",type:"raster",validServices:["wps"]},{name:"image/tiff",label:"TIFF",type:"raster",validServices:["wps"]},{name:"image/png",label:"PNG",type:"raster",validServices:["wps"]},{name:"image/jpeg",label:"JPEG",type:"raster",validServices:["wps"]},{name:"application/wfs-collection-1.0",label:"wfs-collection-1.0",type:"vector",validServices:["wps"]},{name:"application/wfs-collection-1.1",label:"wfs-collection-1.1",type:"vector",validServices:["wps"]},{name:"application/zip",label:"Shapefile",type:"vector",validServices:["wps"]},{name:"text/csv",label:"CSV",type:"vector",validServices:["wps"]}],formatsLoading:!1,srsList:[{name:"native",label:"Native"},{name:"EPSG:4326",label:"WGS84"}],virtualScroll:!0,downloadOptions:{}});const Ae=Se;var De=a(141919),Re=a(401811),Ne=a(399790);const Ce=H().createElement(ee.Button,{bsStyle:"primary",bsSize:"small",className:"mapstore-exportdataresults-item-failed"},H().createElement(ee.Glyphicon,{glyph:"exclamation-sign"})),Pe=(0,De.Z)((e=>{let{results:t=[]}=e;return!t.length}),{title:H().createElement(se.Z,{msgId:"exportDataResults.emptyStateMessage"})})((e=>{let{loading:t=!1,results:a=[],currentLocale:o,onRemoveResult:r=(()=>{})}=e;return t?H().createElement(oe.Z,{size:100,style:{margin:"0 auto",padding:"10px"}}):H().createElement("div",{className:"mapstore-exportdataresults-container"},a.map((e=>{let{id:t,layerName:a,layerTitle:l,startTime:s,status:n,result:i}=e;const p=(0,Ne.in)({name:a,title:l},o),d=new Date(s),c=e=>e<10?`0${e}`:`${e}`,u=`${c(d.getDate())}/${c(d.getMonth()+1)}/${d.getFullYear()} ${c(d.getHours())}:${c(d.getMinutes())}`;return H().createElement("div",{key:t,className:"mapstore-exportdataresults-item"},H().createElement("div",{className:"mapstore-exportdataresults-item-name"},p),H().createElement("div",{className:"mapstore-exportdataresults-item-date"},u),H().createElement("div",{className:"mapstore-exportdataresults-item-buttons"},"pending"===n&&H().createElement(oe.Z,{size:22,style:{marginLeft:"2px"}}),"failed"===n&&i&&i.msgId?H().createElement(Re.Z,{placement:"top",overlay:H().createElement(ee.Tooltip,{id:"exportresults-failure-tooltip"},H().createElement(se.Z,{msgId:i.msgId,msgParams:i.msgParams}))},Ce):null,"failed"!==n||i&&i.msgId?null:Ce,"completed"===n&&H().createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},H().createElement(ee.Button,{bsStyle:"primary",bsSize:"small"},H().createElement(ee.Glyphicon,{glyph:"floppy-disk"}))),H().createElement(ee.Button,{bsStyle:"primary",bsSize:"small",onClick:()=>r(t)},H().createElement(ee.Glyphicon,{glyph:"trash"}))))})))}));var xe=a(294184),Te=a.n(xe);const Fe=e=>{let{show:t,arrowDirection:a="bottom",className:o,containerClassName:r,children:l}=e;return H().createElement("div",{className:Te()("mapstore-info-bubble",...t?["mapstore-info-bubble-visible"]:[],o)},H().createElement("div",{className:Te()("mapstore-info-bubble-container",r)},H().createElement("div",{className:Te()("mapstore-info-bubble-arrow-container",`arrow-${a}`)},H().createElement("div",{className:"mapstore-info-bubble-arrow"})),H().createElement("div",{className:"mapstore-info-bubble-inner"},l)))},Le=e=>{let{msgId:t,msgParams:a,level:o="normal",className:r}=e;return H().createElement("div",{className:Te()("mapstore-info-bubble-default-inner",`mapstore-info-bubble-default-inner-level-${o}`,r)},t?H().createElement(se.Z,{msgId:t,msgParams:a}):null)};var Ie=a(994345),ke=a(712845);const Ge=(0,Ie.Z)(ke.Z);var We=a(49977),Me=a.n(We),Ze=a(313311),_e=a.n(Ze),Be=a(478718),je=a.n(Be),qe=a(493220),Xe=a.n(qe),Ve=a(984596),Ue=a.n(Ve),He=a(178598),Ye=a(505055),ze=a(507526),$e=a(423570),Ke=a.n($e),Je=a(275982),Qe=a(333101),et=a(612132),tt=a(504518),at=a(412961),ot=a(926854),rt=a(119008),lt=a(274363),st=a(510644),nt=a(141520),it=a(81674),pt=a(3674),dt=a.n(pt),ct=a(957557),ut=a.n(ct),mt=a(474810),vt=a(735075);const wt=e=>{let{type:t,data:a}=e;return"TEXT"===t?(0,mt.XA)((0,mt.p5)((0,mt.Rr)(a.data),a.mimeType)):(0,mt.fA)(a.mimeType,a.href,a.method,(0,mt.Rr)(a.requestBodyData))},gt=e=>{let{layerName:t,ROI:a,roiCRS:o,dataFilter:r,targetCRS:l}=e;return(0,vt.Uh)("gs:DownloadEstimator",[(0,mt.qP)("layerName",(0,mt.XA)((0,mt.gN)(t))),...a?[(0,mt.qP)("ROI",wt(a))]:[],...o?[(0,mt.qP)("RoiCRS",(0,mt.XA)((0,mt.gN)(o)))]:[],...r?[(0,mt.qP)("filter",wt(r))]:[],...l?[(0,mt.qP)("targetCRS",(0,mt.XA)((0,mt.gN)(l)))]:[]])},yt=e=>{let{layerName:t,dataFilter:a,outputFormat:o,targetCRS:r,roiCRS:l,ROI:s,cropToROI:n,asynchronous:i,outputAsReference:p,resultOutput:d,writeParameters:c}=e;return(0,vt.Uh)("gs:Download",[(0,mt.qP)("layerName",(0,mt.XA)((0,mt.gN)(t))),(0,mt.qP)("outputFormat",(0,mt.XA)((0,mt.gN)(o))),...s?[(0,mt.qP)("ROI",wt(s))]:[],...a?[(0,mt.qP)("filter",wt(a))]:[],...r?[(0,mt.qP)("targetCRS",(0,mt.XA)((0,mt.gN)(r)))]:[],...l?[(0,mt.qP)("RoiCRS",(0,mt.XA)((0,mt.gN)(l)))]:[],(0,mt.qP)("cropToROI",(0,mt.XA)((0,mt.gN)(n?"true":"false"))),...c&&dt()(c).length>0?[(0,mt.XJ)(Xe()(c).map((e=>{let[t,a]=e;return(0,mt.Dx)(t,a)})).join(""))]:[]],(0,mt.DK)(i?(0,mt.Tr)(!0,!0,p?(0,mt.t$)(d,!0,"result"):(0,mt.En)("result",d)):(0,mt.En)("result",d)))},bt=(e,t,a)=>{if(e&&t){const o=(0,vt.mG)(e,gt({layerName:t.layerName,ROI:t.ROI,roiCRS:t.roiCRS,dataFilter:t.dataFilter,targetCRS:t.targetCRS}),{outputsExtractor:(0,vt.dr)(vt.ai)}),r=t.resultOutput||t.outputFormat||"application/zip",l=(0,vt.mG)(e,yt({...ut()(t,"notifyDownloadEstimatorSuccess","attribute"),outputAsReference:!!t.asynchronous&&t.outputAsReference,resultOutput:r}),a,{headers:{"Content-Type":"application/xml",Accept:`application/xml, ${r}`}});return o.catch((()=>{throw new Error("DownloadEstimatorException")})).mergeMap((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length>0&&"result"===e[0].identifier&&"true"===e[0].data)return t.notifyDownloadEstimatorSuccess?We.Observable.of("DownloadEstimatorSuccess").concat(l):l;throw new Error("DownloadEstimatorFailed")}))}return We.Observable.empty()},ht=(e,t,a)=>{if(e&&t){const o=(0,vt.mG)(e,gt({layerName:t.layerName,ROI:t.ROI,roiCRS:t.roiCRS,dataFilter:t.dataFilter,targetCRS:t.targetCRS}),{outputsExtractor:(0,vt.dr)(vt.ai)}),r=t.resultOutput||t.outputFormat||"application/zip",l=(0,vt.mG)(e,yt({...ut()(t,"notifyDownloadEstimatorSuccess","attribute","asynchronous","outputFormat"),asynchronous:!0,outputAsReference:!0,resultOutput:"application/wfs-collection-1.0",outputFormat:"application/wfs-collection-1.0"}),a,{headers:{"Content-Type":"application/xml",Accept:"application/xml, application/wfs-collection-1.0"}});return o.catch((()=>{throw new Error("DownloadEstimatorException")})).mergeMap((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length>0&&"result"===e[0].identifier&&"true"===e[0].data)return t.notifyDownloadEstimatorSuccess?We.Observable.of("DownloadEstimatorSuccess").concat(l):l;throw new Error("DownloadEstimatorFailed")})).mergeMap((o=>{if("DownloadEstimatorSuccess"===o)return We.Observable.of("DownloadEstimatorSuccess");if(o&&1===(null==o?void 0:o.length))return(0,vt.mG)(e,(e=>{let{input:t,attribute:a,filter:o,asynchronous:r,outputAsReference:l,resultOutput:s}=e;return(0,vt.Uh)("vec:Query",[(0,mt.qP)("features",(0,mt.fA)(t.mimeType,t.href.replace(/&/g,"&amp;"),"GET")),...a?a.map((e=>(0,mt.qP)("attribute",(0,mt.XA)((0,mt.gN)(e))))):[],...o?[(0,mt.qP)("filter",wt(o))]:[]],(0,mt.DK)(r?(0,mt.Tr)(!0,!0,l?(0,mt.t$)(s,!0,"result"):(0,mt.En)("result",s)):(0,mt.En)("result",s)))})({...ut()(t,"notifyDownloadEstimatorSuccess"),input:o[0],filter:null,outputAsReference:!!t.asynchronous&&t.outputAsReference,resultOutput:r}),a,{headers:{"Content-Type":"application/xml",Accept:`application/xml, ${r}`}});throw new Error("DownloadFailed")}))}return We.Observable.empty()};var ft=a(191332),Et=a(475897),Ot=a(351546),St=a(510810),At=a(388826),Dt=a.n(At),Rt=a(988594);const Nt={gml3:"GML3.1",GML2:"GML2","DXF-ZIP":"DXF-ZIP","application/vnd.google-earth.kml+xml":"KML","OGR-CSV":"OGR-CSV","OGR-FileGDB":"OGR-GeoDatabase","OGR-GPKG":"OGR-GeoPackage","OGR-KML":"OGR-KML","OGR-MIF":"OGR-MIF","OGR-TAB":"OGR-TAB","SHAPE-ZIP":"Shapefile",gml32:"GML3.2","application/json":"GeoJSON",csv:"CSV","application/x-gpkg":"GeoPackage",excel:"excel",excel2007:"excel2007"},{getFeature:Ct,query:Pt,sortBy:xt,propertyName:Tt}=Dt()({wfsVersion:"1.1.0"}),Ft=function(){let{url:e,filterObj:t={},layerFilter:a,downloadOptions:o={},options:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{sortOptions:l,propertyNames:s}=r,n=(0,ft.mergeFiltersToOGC)({ogcVersion:"1.1.0",addXmlnsToRoot:!0,xmlnsToAdd:['xmlns:ogc="http://www.opengis.net/ogc"','xmlns:gml="http://www.opengis.net/gml"']},a,t);return(0,nt.V6)(e,Ct(Pt(t.featureTypeName,[...l?[xt(l.sortBy,l.sortOrder)]:[],...s?[Tt(s)]:[],...n?Ue()(n):[]],{srsName:o.selectedSrs})),r,o.selectedFormat)},Lt=e=>{const t=de()(e,"filterObj.featureTypeName"),a=(0,Et.y7)(de()(e,"downloadOptions.selectedFormat"));return a&&a.extension?t+"."+a.extension:t},It=e=>e.query&&e.query.featureTypes&&e.query.featureTypes[e.query.typeName]&&e.query.featureTypes[e.query.typeName].attributes&&e.query.featureTypes[e.query.typeName].attributes[0]&&e.query.featureTypes[e.query.typeName].attributes[0].attribute||null,kt=e=>{switch(e.code){case"ProcessFailed":return{msgId:"layerdownload.wpsExecuteError.processFailed",msgParams:{exceptionReport:e.message}};case"NoStatusLocation":case"NoExecutionId":case"UnexpectedProcessStatus":return{msgId:"layerdownload.wpsExecuteError.badResponse",msgParams:{eCode:e.code}};case"ExecuteProcessXHRFailed":return{msgId:"layerdownload.wpsExecuteError.executeProcessXhrFailed"};case"GetExecutionStatusXHRFailed":return{msgId:"layerdonwload.wpsExecuteError.getExecutionStatusXhrFailed"};default:return{msgId:"layerdownload.wpsExecuteError.unexpectedError"}}},Gt=e=>{const t=(0,st.np)(e);if(null!=t&&t.id){const e=document.cookie.split(";").filter((e=>e.indexOf(`exportDataResults_${t.id}=`)>-1))[0];if(e){const{results:t}=JSON.parse(decodeURIComponent(e.split("=")[1]));return Me().Observable.of(F(t.filter((e=>{let{status:t}=e;return"pending"!==t}))))}}return Me().Observable.empty()},Wt=(e,t)=>e.ofType(s).switchMap((e=>{let{url:a,selectedService:o}=e;return(0,it.l)(a,"gs:DownloadEstimator,gs:Download").switchMap((e=>Me().Observable.defer((()=>new Promise(((t,a)=>(0,Ye.parseString)(e.data,{tagNameProcessors:[ze.stripPrefix]},((e,o)=>e?a(e):t(o))))))))).flatMap((e=>{var a,r,l,s,n,i,p,d,c;const u=t.getState(),m=(0,_.Iz)(u),v=[null==e||null===(a=e.ProcessDescriptions)||void 0===a||null===(r=a.ProcessDescription)||void 0===r||null===(l=r[0])||void 0===l||null===(s=l.Identifier)||void 0===s?void 0:s[0],null==e||null===(n=e.ProcessDescriptions)||void 0===n||null===(i=n.ProcessDescription)||void 0===i||null===(p=i[1])||void 0===p||null===(d=p.Identifier)||void 0===d?void 0:d[0]],w=K()(v,(e=>"gs:DownloadEstimator"===e))>-1&&K()(v,(e=>"gs:Download"===e))>-1,g=null===(c=m.search)||void 0===c?void 0:c.url,y=w&&("wps"===o||!g);return Me().Observable.of(T(y?"wps":"wfs"),x(w),N(!1))})).catch((()=>Me().Observable.of(T("wfs"),x(!1),N(!1)))).startWith(N(!0))})),Mt=e=>e.ofType(Qe.HN).switchMap((e=>{var t;return Me().Observable.from([(0,M.Xi)("layerdownload"),C("singlePage",!1),...null!==(t=e.layer.search)&&void 0!==t&&t.url?[(0,et.rP)(e.layer.url,{featureTypeName:e.layer.name})]:[]])})),Zt=e=>e.ofType(u).switchMap((e=>(0,nt.ED)(e).map((e=>{return t=(e=>{const t=de()(e,"WFS_Capabilities.OperationsMetadata.Operation"),a=_e()(t,(function(e){return"GetFeature"===e.name})),o=de()(a,"Parameter"),r=_e()(o,(function(e){return"outputFormat"===e.name})).Value,l=je()(Nt,r);return Xe()(l).map((e=>{let[t,a]=e;return{name:t,label:a}}))})(e),{type:m,wfsFormats:t};var t})))),_t=(e,t)=>e.ofType(i).switchMap((a=>{const o=t.getState(),{virtualScroll:r=!1}=o.featuregrid||{},l=j(o),s=(0,_.Iz)(o),n=(0,lt.pQ)(o),i=(0,V.Pz)(o),p=a.downloadOptions.propertyName?[(0,Rt.dm)((0,B.qj)(o,s.name)),...a.downloadOptions.propertyName]:null,{layerFilter:d}=s;return"wps"===l?(()=>{var t;const o=!(null===(t=s.search)||void 0===t||!t.url),r=a.downloadOptions.cropDataSet&&!!n&&!!n.bounds,l={layerName:s.name,outputFormat:a.downloadOptions.selectedFormat,asynchronous:!0,outputAsReference:!0,targetCRS:a.downloadOptions.selectedSrs&&"native"!==a.downloadOptions.selectedSrs?a.downloadOptions.selectedSrs:void 0,cropToROI:r,dataFilter:a.downloadOptions.downloadFilteredDataSet?{type:"TEXT",data:{mimeType:"text/xml; subtype=filter/1.1",data:(0,ft.mergeFiltersToOGC)({ogcVersion:"1.1.0",addXmlnsToRoot:!0,xmlnsToAdd:['xmlns:ogc="http://www.opengis.net/ogc"','xmlns:gml="http://www.opengis.net/gml"']},s.layerFilter,a.filterObj)}}:void 0,ROI:r?{type:"TEXT",data:{mimeType:"application/json",data:JSON.stringify((0,Ot.bboxToFeatureGeometry)(n.bounds))}}:void 0,roiCRS:r?n.crs||"EPSG:4326":void 0,writeParameters:{...a.downloadOptions.tileWidth?{tilewidth:a.downloadOptions.tileWidth}:{},...a.downloadOptions.tileHeight?{tileheight:a.downloadOptions.tileHeight}:{},...a.downloadOptions.compression?{compression:a.downloadOptions.compression,...a.downloadOptions.quality?{quality:a.downloadOptions.quality}:{}}:{}},notifyDownloadEstimatorSuccess:!0,attribute:p},d={id:Ke()(),layerName:s.name,layerTitle:s.title,status:"pending"},c={outputsExtractor:(0,vt.dr)(vt.RW)};return(o&&p?ht:bt)(a.url,l,c).takeUntil(e.ofType(h).filter((e=>{let{id:t}=e;return t===d.id})).take(1)).flatMap((e=>{return"DownloadEstimatorSuccess"===e?Me().Observable.of((t={...d,startTime:(new Date).getTime()},{type:y,result:t}),k("layerdownload.exportResultsMessages.newExport"),P(),(0,M.Xi)("layerdownload","enabled")):Me().Observable.of(...e&&e.length>0&&e[0].href?[L(d.id,{status:"completed",result:e[0].href}),k("layerdownload.exportResultsMessages.exportSuccess",{layerTitle:(0,Ne.in)(s,i)},"success")]:[L(d.id,{status:"failed",result:{msgId:"layerdonwload.exportResultsMessages.invalidHref"}}),k("layerdownload.exportResultsMessages.exportFailure",{layerTitle:(0,Ne.in)(s,i)},"danger")]);var t})).catch((e=>Me().Observable.of(...e.message&&e.message.indexOf("DownloadEstimator")>-1?[(0,tt.vU)({error:e,title:"layerdownload.error.downloadEstimatorTitle",message:"layerdownload.error.downloadEstimatorFailed"}),P()]:[L(d.id,{status:"failed",result:kt(e)}),k("layerdownload.exportResultsMessages.exportFailure",{layerTitle:(0,Ne.in)(s,i)},"danger")])))})():Ft({url:a.url,downloadOptions:a.downloadOptions,filterObj:a.filterObj,layerFilter:d,options:{pagination:!r&&de()(a,"downloadOptions.singlePage")?a.filterObj&&a.filterObj.pagination:null,propertyNames:p}}).do((e=>{let{data:t,headers:a}=e;if("application/xml"===a["content-type"]){let e=String.fromCharCode.apply(null,new Uint8Array(t));if(0===e.indexOf("<ows:ExceptionReport"))throw e}})).catch((()=>{return Ft({url:a.url,downloadOptions:a.downloadOptions,filterObj:a.filterObj,layerFilter:d,options:{pagination:!r&&de()(a,"downloadOptions.singlePage")?a.filterObj&&a.filterObj.pagination:null,sortOptions:(e=It(t.getState()),e?{sortBy:e,sortOrder:"A"}:{}),propertyNames:a.downloadOptions.propertyName?[...a.downloadOptions.propertyName,(0,Rt.dm)((0,B.qj)(o,s.name))]:null}}).do((e=>{let{data:t,headers:o}=e;if("application/xml"===o["content-type"]){let e=String.fromCharCode.apply(null,new Uint8Array(t));if(0===e.indexOf("<ows:ExceptionReport"))throw e}(0,He.saveAs)(new Blob([t],{type:o&&o["content-type"]}),Lt(a))}));var e})).do((e=>{let{data:t,headers:o}=e;(0,He.saveAs)(new Blob([t],{type:o&&o["content-type"]}),Lt(a))})).map((()=>P())).catch((e=>Me().Observable.of((0,tt.vU)({error:e,title:"layerdownload.error.title",message:"layerdownload.error.invalidOutputFormat",autoDismiss:5,position:"tr"}),P())))})),Bt=(e,t)=>e.ofType(M.kM).filter((e=>"queryPanel"===e.control&&!(0,rt._d)(t.getState())&&(0,rt.lI)(t.getState()))).switchMap((()=>Me().Observable.of((0,M.Xi)("layerdownload")))),jt=e=>e.ofType(A).concatMap((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Me().Observable.of(W(e.msgId,e.msgParams,e.level),G(!0)).delay(10).concat(Me().Observable.of(G(!1)).delay(e.duration||3e3)).concat(Me().Observable.empty().delay(1e3))})),qt=(e,t)=>e.ofType(E).exhaustMap((()=>{const e=t.getState(),a=(X(e)||[]).filter((e=>{let{status:t}=e;return"completed"===t}));return a.length>0?Me().Observable.forkJoin(a.map((e=>{const{result:t}=e,a=t.indexOf("executionId="),o=t.slice(a),r=o.indexOf("&"),l=(r>-1?o.slice(0,r):o).slice(12),s=t.indexOf("?"),n=t.slice(0,s);return(0,vt.W5)(n,l).let(St.oB).catch((()=>Me().Observable.of(null))).map((t=>t?null:e.id))}))).flatMap((e=>{return Me().Observable.of((t=e.filter((e=>!!e)),{type:f,ids:t}),{type:S},I(!1));var t})).startWith(I(!0)):Me().Observable.empty()})),Xt=(e,t)=>e.ofType(y,h,b,S).filter((()=>(0,st.jl)(t.getState()))).do((()=>{const e=t.getState(),a=X(e),{id:o}=(0,st.np)(e),r=JSON.stringify({results:a});document.cookie=`exportDataResults_${o}=${encodeURIComponent(r)}`})).flatMap((()=>Me().Observable.empty())),Vt=e=>e.ofType(ot.ok).switchMap((()=>e.ofType(at.Nv).switchMap((()=>Me().Observable.of(F([])))).takeUntil(e.ofType(Je.nk)))),Ut=(e,t)=>e.ofType(ot.ok).switchMap((()=>Gt(t.getState()).concat(e.ofType(at.XP).switchMap((()=>Gt(t.getState()))).takeUntil(e.ofType(Je.nk))))),Ht=(0,a(152543).rx)("LayerDownload",{component:(0,r.connect)((0,l.zB)({url:B.Bu,filterObj:q,enabled:e=>{var t,a;return null==e||null===(t=e.controls)||void 0===t||null===(a=t.layerdownload)||void 0===a?void 0:a.enabled},downloadOptions:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.downloadOptions},loading:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.loading},wfsFormats:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.wfsFormats},formatsLoading:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.formatsLoading},layer:_.Iz,wpsAvailable:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.wpsAvailable},service:j,checkingWPSAvailability:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.checkingWPSAvailability},virtualScroll:e=>e&&e.featuregrid&&e.featuregrid.virtualScroll,customAttributeSettings:Z.Xh,attributes:B.L}),{onExport:(e,t,a)=>({type:i,url:e,filterObj:t,downloadOptions:a}),setService:T,onDownloadOptionChange:C,onClearDownloadOptions:()=>({type:c}),onFormatOptionsFetch:e=>({type:u,layer:e}),onCheckWPSAvailability:(e,t)=>({type:s,url:e,selectedService:t}),onClose:()=>(0,M.Xi)("layerdownload")})(Ae),containers:{TOC:{doNotHide:!0,name:"LayerDownload"},FeatureEditor:{doNotHide:!0,name:"LayerDownload",position:20,target:"toolbar",Component:(0,r.connect)((0,l.zB)({isDownloadOpen:e=>{var t,a;return null==e||null===(t=e.controls)||void 0===t||null===(a=t.layerdownload)||void 0===a?void 0:a.enabled}}),{onClick:()=>(0,M.Xi)("layerdownload")})((e=>{let{disabled:t,results:a=[],mode:o,isDownloadOpen:r,onClick:l=(()=>{})}=e;return H().createElement(Ge,{id:"download-grid",keyProp:"download-grid",tooltipId:"featuregrid.toolbar.downloadGridData",disabled:t||0===a.length,active:r,visible:"VIEW"===o,onClick:l,glyph:"download"})}))},MapFooter:{doNotHide:!0,name:"LayerDownload",position:1,tool:(0,r.connect)((0,l.zB)({active:e=>{var t,a;return null==e||null===(t=e.controls)||void 0===t||null===(a=t.exportDataResults)||void 0===a?void 0:a.enabled},showInfoBubble:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.showInfoBubble},infoBubbleMessage:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.infoBubbleMessage},checkingExportDataEntries:e=>{var t;return null==e||null===(t=e.layerdownload)||void 0===t?void 0:t.checkingExportDataEntries},results:X,currentLocale:V.Pz}),{onToggle:M.Xi.bind(null,"exportDataResults","enabled"),onActive:()=>({type:E}),onRemoveResult:e=>({type:h,id:e})})((e=>{let{active:t=!1,showInfoBubble:a=!1,infoBubbleMessage:o={},checkingExportDataEntries:r,results:l=[],currentLocale:s,onToggle:n=(()=>{}),onActive:i=(()=>{}),onRemoveResult:p}=e;return H().useEffect((()=>{t&&i()}),[t]),H().createElement(H().Fragment,null,l.length>0?H().createElement("div",{id:"mapstore-export-data-results-button-container"},H().createElement(Re.Z,{placement:"left",overlay:H().createElement(ee.Tooltip,{id:"mapstore-export-data-results-tooltip"},H().createElement(se.Z,{msgId:"exportDataResults.title"}))},H().createElement(ee.Button,{bsStyle:"primary",bsSize:"small",onClick:()=>n()},H().createElement(ee.Glyphicon,{glyph:"download"}))),H().createElement(Fe,{show:a,className:"mapstore-export"},H().createElement(Le,o))):null,H().createElement("div",null,t&&H().createElement(le.Z,null,H().createElement(re.Z,{id:"mapstore-export-data-results",draggable:!1,modal:!0},H().createElement("span",{role:"header"},H().createElement("span",{className:"about-panel-title"},H().createElement(se.Z,{msgId:"exportDataResults.title"})),H().createElement("button",{onClick:()=>n(),className:"settings-panel-close close"},H().createElement(ee.Glyphicon,{glyph:"1-close"}))),H().createElement("div",{role:"body"},H().createElement(Pe,{loading:r,results:l,currentLocale:s,onRemoveResult:p}))))))}))}},epics:o,reducers:{layerdownload:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{downloadOptions:{singlePage:!0}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return{...e,loading:!0};case d:return{...e,downloadOptions:{...e.downloadOptions,[t.key]:t.value}};case c:return{...e,downloadOptions:{singlePage:!0}};case u:return{...e,layer:t.layer,wfsFormats:[],formatsLoading:!0};case p:return{...e,loading:!1};case m:return{...e,wfsFormats:t.wfsFormats,formatsLoading:!1};case w:return{...e,service:t.service};case v:return{...e,wpsAvailable:t.value};case n:return{...e,checkingWPSAvailability:t.checking};case g:return{...e,results:t.results};case y:return{...e,results:[...e.results||[],t.result]};case b:{const a=K()(e.results||[],{id:t.id});return{...e,results:a>-1?[...e.results.slice(0,a),{...e.results[a],...t.newProps||{}},...e.results.slice(a+1)]:e.results}}case h:return{...e,results:(e.results||[]).filter((e=>e.id!==t.id))};case f:return{...e,results:(e.results||[]).filter((e=>-1===K()(t.ids,(t=>t===e.id))))};case D:return{...e,showInfoBubble:t.show};case R:return{...e,infoBubbleMessage:{msgId:t.msgId,msgParams:t.msgParams,level:t.level}};case O:return{...e,checkingExportDataEntries:t.checking};default:return e}}}})}}]);