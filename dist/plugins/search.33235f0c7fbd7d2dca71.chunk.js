(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[8166],{403410:(e,t,r)=>{"use strict";r.d(t,{hn:()=>o,yg:()=>a,vD:()=>s,jJ:()=>n,oy:()=>l,W:()=>i,B1:()=>c,fU:()=>p,cY:()=>d});const o="ADDITIONALLAYER:ADD_ADDITIONAL_LAYERS",a="ADDITIONALLAYER:REMOVE_ADDITIONAL_LAYER",s="ADDITIONALLAYER:REMOVE_ALL_ADDITIONAL_LAYERS",n="ADDITIONALLAYER:UPDATE_ADDITIONAL_LAYER",l="ADDITIONALLAYER:UPDATE_OPTIONS_BY_OWNER",i=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"override",o=arguments.length>3?arguments[3]:void 0;return{type:n,id:e,owner:t,actionType:r,options:o}},c=(e,t)=>({type:l,owner:e,options:t}),p=function(){let{id:e,owner:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:a,id:e,owner:t}},d=e=>({type:s,owner:e})},420544:(e,t,r)=>{"use strict";r.d(t,{Cv:()=>o,RD:()=>a,NR:()=>s,mV:()=>n,N3:()=>l,dR:()=>i,sS:()=>c,sm:()=>p});const o="SET_SEARCH_BOOKMARK_CONFIG",a="RESET_BOOKMARK_CONFIG",s="UPDATE_BOOKMARK",n="FILTER_BOOKMARKS";function l(e,t){return{type:o,property:e,value:t}}function i(){return{type:a}}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{type:s,bookmark:e,idx:t}}function p(e){return{type:n,filter:e}}},940711:(e,t,r)=>{"use strict";r.d(t,{b:()=>d});var o=r(727418),a=r.n(o);const s=e=>null===e?[]:e.map((e=>({properties:{...e},id:e.osm_id,type:"Feature",bbox:e.boundingbox.map((e=>parseFloat(e))).reduce(((e,t,r)=>(e[(e=>{switch(e){case 0:return 1;case 1:return 3;case 2:return 0;case 3:return 2;default:return-1}})(r)]=t,e)),[]),geometry:e.geojson||{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}})));var n=r(348660),l=r(487758);const i=e=>{let{searchText:t,staticFilter:r,blacklist:o,item:a,queriableAttributes:s,predicate:l}=e;const i=(0,n.generateTemplateString)(r||"")(a);let c,p=t.split(" ").filter((e=>e)).filter((e=>o.indexOf(e.toLowerCase())<0));return 0===p.length&&(p=t?[t]:[]),p.length>0&&(c="(".concat(p.map((e=>s.map((t=>`${t} ${l} '%${e.replace("'","''")}%'`)).join(" OR "))).join(") AND (")).concat(")")),c=c?c.concat(i):i||null,c};let c={nominatim:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{returnFullData:!1};return r(61427).Z.geocode(e,t).then((e=>t.returnFullData?e:s(e.data)))},wfs:(e,t)=>{let{url:r,typeName:o,queriableAttributes:s=[],outputFormat:n="application/json",predicate:c="ILIKE",staticFilter:p="",blacklist:d=[],item:u,fromTextToFilter:h=i,returnFullData:m=!1,...g}=t;const b=h({searchText:e,staticFilter:p,blacklist:d,item:u,queriableAttributes:s,predicate:c});return l.DH(r,a()({maxFeatures:10,typeName:o,outputFormat:n,cql_filter:b},g)).then((e=>m?e:e.features))}};const p={setService:(e,t)=>{c[e]=t},getService:e=>c[e]?c[e]:null},d={Services:c,Utils:p}},802728:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(124852),a=r.n(o);const s=e=>{let{className:t,style:r,children:o}=e;return a().createElement("div",{id:"map-search-bar",style:r,className:"MapSearchBar"+(t?" "+t:"")},o)}},270250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r(124852),a=r.n(o),s=r(45697),n=r.n(s),l=r(630294),i=r(719648);const c=(e,t)=>{let{show:r,autoFocusOnSelect:o=!0,selectedItems:s=[],className:n,style:c={textOverflow:"ellipsis"},placeholder:p,placeholderMsgId:d,hideOnBlur:u=!0,searchText:h="",typeAhead:m=!0,delay:g=1e3,blurResetDelay:b=300,onSearch:f=(()=>{}),onSearchTextChange:y=(()=>{}),onCancelSelectedItem:S=(()=>{}),onPurgeResults:v=(()=>{})}=e;const _=a().useRef(),E=a().useRef(),[I,C]=a().useState(),[T,k]=a().useState(),[O,R]=a().useState(!1);a().useEffect((()=>{const e=E.current;if(o&&s&&(e<s.length||!e&&1===s.length)){const e=_.current;e&&e.focus instanceof Function&&setTimeout((()=>e.focus()),200)}E.current=s&&s.length})),a().useEffect((()=>{O&&(f(),R(!1))}),[O,f]);let x="search.addressSearch";if(!p&&t.messages){const e=(0,i.S$)(t.messages,d||x);e&&(x=e)}else x=p;return r&&a().createElement(l.FormControl,{className:"searchInput"+(n?` ${n}`:""),key:"search-input",placeholder:x,type:"text",inputRef:e=>{_.current=e},style:c,value:h,onKeyDown:e=>{switch(e.keyCode){case 13:f();break;case 8:!h&&s&&s.length>0&&S(s[s.length-1])}},onBlur:()=>{u&&(I&&clearTimeout(I),C(setTimeout((()=>{v()}),b)))},onFocus:()=>{m&&h&&f()},onChange:e=>{let t=e.target.value;y(t),m&&(T&&clearTimeout(T),k(setTimeout((()=>{R(!0)}),g)))}})};c.contextTypes={messages:n().object};const p=c},859653:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var o=r(124852),a=r.n(o),s=r(727418),n=r.n(s),l=r(472986),i=r.n(l),c=r(8204);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p.apply(this,arguments)}const d=e=>{let{loading:t,splitTools:r,toolbarProps:o={},toolbarButtons:s=[],children:l}=e;return a().createElement("span",{className:"search-toolbar-options"},t&&a().createElement(i(),{style:n()({},{position:"absolute"},{right:"69px",zIndex:1,top:"13px"}),spinnerName:"pulse",noFadeIn:!0}),a().createElement(c.Z,p({btnGroupProps:{className:"btn-group-menu-options"},transitionProps:null,btnDefaultProps:{className:"square-button-md",bsStyle:"primary"}},o,{buttons:s})),l)}},312471:(e,t,r)=>{"use strict";r.d(t,{f:()=>o});const o=e=>{let{searchText:t,selectedItems:r,searchOptions:o,maxResults:a,onSearch:s=(()=>{}),onSearchReset:n=(()=>{})}=e;return()=>{const e=t,l=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(t,r){var o;return t+((null==r||null===(o=r.options)||void 0===o?void 0:o.maxFeatures)||e)}),0)||e}(null==o?void 0:o.services,a);void 0!==e&&""!==e||r&&0!==r.length?void 0!==e&&""!==e&&s(e,o,l):n()}}},177180:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>We});var o=r(227361),a=r.n(o),s=r(727418),n=r.n(s),l=r(45697),i=r.n(l),c=r(124852),p=r.n(c),d=r(171703),u=r(22222),h=r(403410),m=r(926854),g=r(687753),b=r(859518),f=r(596974),y=r(420544),S=r(630294),v=r(441609),_=r.n(v),E=r(352353),I=r.n(E),C=r(804504),T=r(36549),k=r(423570),O=r.n(k);function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},R.apply(this,arguments)}const x=(0,T.Z)(S.DropdownButton),P={disabled:!1,className:"square-button-md",noCaret:!0,idDropDown:O()()},w={title:p().createElement(S.Glyphicon,{glyph:"menu-hamburger"}),tooltipId:"search.changeSearchInputField",tooltipPosition:"bottom",className:"square-button-md no-border",pullRight:!0},N=function(){let{menuItems:e=[],disabled:t=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p().createElement(x,R({disabled:t},P,w),e.length?e.map((e=>e)):null)};var A=r(802728),F=r(270250),V=r(859653),M=r(312471),L=r(743129);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},D.apply(this,arguments)}const Z=(0,r(486234).Z)(["placeholder","clearValueText","noResultsText"])(L.ZP),j={searchByBookmark:(e,t,r,o,a)=>{const{options:s={},layerVisibilityReload:n=!1}=e;var l,i;n?t({...r,map:{...r.map,bookmark_search_config:o}},null,{bounds:[s.west,s.south,s.east,s.north],crs:(null==r||null===(l=r.map)||void 0===l||null===(i=l.center)||void 0===i?void 0:i.crs)||"EPSG:4326"}):s&&!_()(s)&&a([s.west,s.south,s.east,s.north],"EPSG:4326")},searchIcon:(e,t)=>{let{onLayerVisibilityLoad:r,mapInitial:o,bookmarkConfig:a,onZoomToExtent:s}=t;return{tooltipId:"bookmarkSearch"===e?"search.zoomToBookmark":"",tooltipPosition:"bottom",visible:"bookmarkSearch"===e&&!(null!=a&&a.zoomOnSelect),disabled:"bookmarkSearch"===e&&!a.selected,onClick:()=>{"bookmarkSearch"===e&&j.searchByBookmark(a.selected,r,o,a.bookmarkSearchConfig||{},s)}}}},B=e=>{let{bookmarkConfig:t,onPropertyChange:r,onLayerVisibilityLoad:o,mapInitial:a,onZoomToExtent:s}=e;const[n,l]=(0,c.useState)([]),{selected:i={},bookmarkSearchConfig:d={},zoomOnSelect:u=!0}=t||{},{bookmarks:h=[]}=d,{searchByBookmark:m}=j;return(0,c.useEffect)((()=>{_()(h)||l(h.map((e=>e.title)))}),[h]),p().createElement("div",{className:"search-select"},p().createElement("div",{style:{flex:"1 1 0%",padding:"0px 4px"}},p().createElement(Z,D({},{clearable:!0,isSearchable:!0,isClearable:!0},{onChange:e=>{const t=e&&e.value||"",[n]=h.filter(((r,o)=>r.title===t&&o===e.idx));r("selected",n),u&&m(n,o,a,d,s)},value:(null==i?void 0:i.title)||"",options:n.map(((e,t)=>({label:e,value:e,idx:t}))),placeholder:"search.b_placeholder",clearValueText:"search.b_clearvalue",noResultsText:"search.b_noresult"}))))};B.propTypes={bookmarkConfig:i().object.isRequired,onPropertyChange:i().func.isRequired};const G=(0,d.connect)((e=>({bookmarkConfig:e.searchbookmarkconfig||{}})),{onPropertyChange:y.N3,onZoomToExtent:b.Px,onLayerVisibilityLoad:m.H0})(B);var z=r(281763),q=r.n(z),K=r(700802),U=r(766586);const Y={clearCoordinates:(e,t)=>{e({owner:"search"}),t("lat",""),t("lon","")},areValidCoordinates:e=>q()(null==e?void 0:e.lon)&&q()(null==e?void 0:e.lat),zoomToPoint:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;e({x:parseFloat(t.lon),y:parseFloat(t.lat)},r,"EPSG:4326")},coordinateFormatChange:(e,t,r,o)=>({buttonConfig:{title:p().createElement(S.Glyphicon,{glyph:"cog"}),tooltipId:"search.changeSearchInputField",tooltipPosition:"bottom",className:"square-button-md no-border",pullRight:!0},menuOptions:[{active:"decimal"===e,onClick:()=>t("decimal"),text:p().createElement(C.Z,{msgId:"search.decimal"})},{active:"aeronautical"===e,onClick:()=>t("aeronautical"),text:p().createElement(C.Z,{msgId:"search.aeronautical"})}],visible:r&&"coordinatesSearch"===o,Element:U.Z}),removeIcon:(e,t,r,o)=>({visible:"coordinatesSearch"===e&&(q()(t.lon)||q()(t.lat)),onClick:()=>Y.clearCoordinates(r,o)}),searchIcon:(e,t,r,o)=>({visible:"coordinatesSearch"===e,onClick:()=>{"coordinatesSearch"===e&&Y.areValidCoordinates(t)&&Y.zoomToPoint(r,t,o)}}),coordinatesMenuItem:e=>{let{activeTool:t,searchText:r,clearSearch:o,onChangeActiveSearchTool:a,onClearBookmarkSearch:s}=e;return p().createElement(S.MenuItem,{active:"coordinatesSearch"===t,onClick:()=>{void 0!==r&&""!==r&&o(),s("selected"),a("coordinatesSearch"),document.dispatchEvent(new MouseEvent("click"))}},p().createElement(S.Glyphicon,{glyph:"search-coords"})," ",p().createElement(C.Z,{msgId:"search.coordinatesSearch"}))}},W=e=>{let{coordinate:t={},format:r,onClearCoordinatesSearch:o,onZoomToPoint:a,onChangeCoord:s,defaultZoomLevel:n,aeronauticalOptions:l={seconds:{decimals:4,step:1e-4}},constraintsCoordEditor:i={decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}}}=e;const{zoomToPoint:c,areValidCoordinates:d}=Y,u=(e,t)=>{s(e,parseFloat(t)),d()||o({owner:"search"})},h=()=>{c(a,t,n)};return p().createElement("div",{className:"coordinateEditor",style:{flexWrap:"decimal"===r?"nowrap":"wrap"}},p().createElement(S.Row,{className:`entryRow ${r}`},p().createElement(S.FormGroup,null,p().createElement(S.InputGroup,null,p().createElement(S.InputGroup.Addon,{style:{minWidth:45}},p().createElement(C.Z,{msgId:"search.latitude"})),p().createElement(K.Z,{format:r,aeronauticalOptions:l,coordinate:"lat",idx:1,value:t.lat,constraints:i,onChange:e=>u("lat",e),onKeyDown:()=>{d(t)&&h()}})))),p().createElement(S.Row,{className:`entryRow ${r}`},p().createElement(S.FormGroup,null,p().createElement(S.InputGroup,null,p().createElement(S.InputGroup.Addon,{style:{minWidth:45}},p().createElement(C.Z,{msgId:"search.longitude"})),p().createElement(K.Z,{format:r,aeronauticalOptions:l,coordinate:"lon",idx:2,value:t.lon,constraints:i,onChange:e=>u("lon",e),onKeyDown:()=>{d(t)&&h()}})))))};W.propTypes={coordinate:i().object,format:i().string,onClearCoordinatesSearch:i().func,onZoomToPoint:i().func,onChangeCoord:i().func,defaultZoomLevel:i().number};const H=(0,d.connect)((e=>({coordinate:e.search.coordinate||{}})),{onZoomToPoint:f.Z,onChangeCoord:f.TS})(W);var $=r(313311),X=r.n($),Q=r(8204),J=r(348660);function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class te extends p().Component{constructor(){super(...arguments),ee(this,"onClick",(()=>{let e=this.props.item;this.props.onItemClick(e)}))}render(){if(void 0===this.props.item)return null;let e=this.props.item;return p().createElement("div",{key:e.osm_id,className:"search-result",style:e.resultCssStyle,onClick:this.onClick},p().createElement("div",{className:"search-result-left-container"},p().createElement("div",{className:"icon"}," ",p().createElement("img",{src:e.icon})),p().createElement("div",{className:"text-result-title"},a()(e,this.props.displayName)||(0,J.generateTemplateString)(this.props.displayName||"")(e)),p().createElement("small",{className:"text-info"},this.props.subTitle&&a()(e,this.props.subTitle)||(0,J.generateTemplateString)(this.props.subTitle||"")(e))),p().createElement("div",{className:"search-result-right-container"},p().createElement("div",{className:"search-result-tools"},p().createElement(Q.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},buttons:this.props.tools}))))}}ee(te,"propTypes",{subTitle:i().string,item:i().object,displayName:i().string,idField:i().string,icon:i().string,onItemClick:i().func,tools:i().array}),ee(te,"defaultProps",{displayName:"properties.display_name",idField:"id",icon:"properties.icon",tools:[]});const re=te;var oe=r(131400),ae=r(182148);function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ne extends p().Component{constructor(){super(...arguments),se(this,"onItemClick",(e=>{this.props.onItemClick(e,this.props.mapConfig)})),se(this,"renderResults",(()=>this.props.results.map(((e,t)=>{var r;const o=this.findService(e)||{},a=X()(this.props.layers,{name:null===(r=o.options)||void 0===r?void 0:r.typeName}),s=(0,ae.zA)(o),n=!(0,ae.Tv)(a,o);return p().createElement(re,{subTitle:o.subTitle,idField:o.idField,displayName:o.displayName,key:e.osm_id||e.id||"res_"+t,item:e,onItemClick:this.onItemClick,tools:[{id:"open-gfi",keyProp:"open-gfi",visible:s,disabled:n,glyph:"info-sign",tooltipId:s&&n?"search.layerMustBeVisible":"search.showGFI",onClick:t=>{t.stopPropagation(),this.props.showGFI(e)}}]})})))),se(this,"findService",(e=>{const t=this.props.searchOptions&&this.props.searchOptions.services;if(null!==e.__SERVICE__)if(t&&"string"==typeof e.__SERVICE__){for(let r=0;r<t.length;r++)if(t[r]&&t[r].id===e.__SERVICE__)return t[r];for(let r=0;r<t.length;r++)if(t[r]&&t[r].type===e.__SERVICE__)return t[r]}else if("object"==typeof e.__SERVICE__)return e.__SERVICE__;return null}))}render(){var e=this.props.notFoundMessage;e||(e=p().createElement(oe.ZP.Message,{msgId:"noresultfound"}));let t=this.props.containerStyle,r=this.props.mapConfig&&this.props.mapConfig.size;if(this.props.fitToMapSize&&r){let e=r.width-this.props.sizeAdjustment.width,o=r.height-this.props.sizeAdjustment.height;t=n()({},this.props.containerStyle,{maxWidth:e,maxHeight:o})}return this.props.results?0===this.props.results.length?p().createElement("div",{className:"search-result-list",style:n()({padding:"10px",textAlign:"center"},t)},e):p().createElement("div",{className:"search-result-list",style:t},this.renderResults()):null}}se(ne,"propTypes",{results:i().array,layers:i().array,searchOptions:i().object,mapConfig:i().object,fitToMapSize:i().bool,containerStyle:i().object,sizeAdjustment:i().object,onItemClick:i().func,addMarker:i().func,afterItemClick:i().func,showGFI:i().func,notFoundMessage:i().oneOfType([i().object,i().string])}),se(ne,"defaultProps",{layers:[],sizeAdjustment:{width:0,height:110},containerStyle:{zIndex:1e3},onItemClick:()=>{},addMarker:()=>{},afterItemClick:()=>{},showGFI:()=>{}});var le=r(49977),ie=r(294707),ce=r.n(ie),pe=r(235385),de=r.n(pe),ue=r(414293),he=r.n(ue),me=r(189734),ge=r.n(me),be=r(455877),fe=r.n(be),ye=r(612912),Se=r(917450),ve=r(333101),_e=r(351546),Ee=r(940711),Ie=r(487758),Ce=r(726598),Te=r(975872),ke=r(387305),Oe=r(492619),Re=r(274363);const xe=(e,t)=>(0,Ce.mx)(e,{...(0,Te.oq)(t)});var Pe=r(988737);var we=r(234228),Ne=r(23888);function Ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class Fe extends p().Component{render(){return p().createElement(Ne.Z,{onClick:()=>this.props.onToggle(this.props.pressed),bsStyle:this.props.pressed?"default":"primary",className:"square-button"},p().createElement(S.Glyphicon,{glyph:"search"}))}}Ae(Fe,"propTypes",{pressed:i().bool,onToggle:i().func}),Ae(Fe,"defaultProps",{pressed:!1,onToggle:()=>{}});const Ve=(0,d.connect)((e=>({pressed:e.controls&&e.controls.search&&e.controls.search.enabled||!1})),{onToggle:g.Xi.bind(null,"search",null)})(Fe);var Me,Le=r(350126),De=r(652700),Ze=r(294184),je=r.n(Ze);function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Be.apply(this,arguments)}function Ge(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ze=(0,u.P1)([e=>e.search||null,e=>e.controls&&e.controls.searchBookmarkConfig||null,e=>e.mapConfigRawData||{},e=>(null==e?void 0:e.searchbookmarkconfig)||""],((e,t,r,o)=>({enabledSearchBookmarkConfig:t&&t.enabled||!1,error:e&&e.error,coordinate:e&&e.coordinate||{},loading:e&&e.loading,searchText:e?e.searchText:"",activeSearchTool:a()(e,"activeSearchTool","addressSearch"),format:a()(e,"format")||we.ZP.getConfigProp("defaultCoordinateFormat"),selectedItems:e&&e.selectedItems,mapInitial:r,bookmarkConfig:o||{}}))),qe=(0,d.connect)(ze,{onSearch:f.tt,onChangeCoord:f.TS,onChangeActiveSearchTool:f.a,onClearCoordinatesSearch:h.fU,onClearBookmarkSearch:y.N3,onChangeFormat:f.Zw,onToggleControl:g.Xi,onZoomToPoint:f.Z,onPurgeResults:f.kV,onSearchReset:f.v2,onSearchTextChange:f.k9,onCancelSelectedItem:f.KG,onZoomToExtent:b.Px,onLayerVisibilityLoad:m.H0})((e=>{let{activeSearchTool:t="addressSearch",removeIcon:r="1-close",searchIcon:o="search",isSearchClickable:a=!0,splitTools:s,searchText:n="",maxResults:l=15,searchOptions:i,loading:c,delay:d,blurResetDelay:u,typeAhead:h,coordinate:m={},selectedItems:g=[],defaultZoomLevel:b=12,enabledSearchBookmarkConfig:f=!1,error:y,format:v="decimal",placeholder:E,placeholderMsgId:T="search.addressSearch",showOptions:k=!0,showAddressSearchOption:O=!0,showCoordinatesSearchOption:R=!0,showBookMarkSearchOption:x=!0,onSearch:P,onSearchReset:w,onSearchTextChange:L,onCancelSelectedItem:D,onChangeCoord:Z=(()=>{}),onChangeActiveSearchTool:B=(()=>{}),onClearCoordinatesSearch:z=(()=>{}),onChangeFormat:q=(()=>{}),onToggleControl:K=(()=>{}),onZoomToPoint:U=(()=>{}),onClearBookmarkSearch:W=(()=>{}),onPurgeResults:$,items:X=[],...Q}=e;const J=(0,M.f)({searchText:n,selectedItems:g,searchOptions:i,maxResults:l,onSearch:P,onSearchReset:w}),ee=()=>{w()};let te,re=[];if(O&&re.push(p().createElement(S.MenuItem,{active:"addressSearch"===t,onClick:()=>{z({owner:"search"}),W("selected"),B("addressSearch")}},p().createElement(S.Glyphicon,{glyph:o})," ",p().createElement(C.Z,{msgId:"search.addressSearch"}))),R&&re.push(p().createElement(Y.coordinatesMenuItem,{activeTool:t,searchText:n,clearSearch:ee,onChangeActiveSearchTool:B,onClearBookmarkSearch:W})),x&&!_()(X)){var oe;const{allowUser:e,bookmarkSearchConfig:r}=Q.bookmarkConfig||{},o=X.find((e=>{let{name:t}=e;return"SearchByBookmark"===t}))||{};if(o.menuItem){const e=o.menuItem;re.push(p().createElement(e,null))}o.bookmarkConfig&&(te={...o.bookmarkConfig(K,f,t),...!e&&{visible:!1}}),e||0!==(null==r||null===(oe=r.bookmarks)||void 0===oe?void 0:oe.length)||"bookmarkSearch"!==t||B("addressSearch")}const ae=()=>{if(k){if("coordinatesSearch"===t)return Y.coordinateFormatChange(v,q,k,t);if("bookmarkSearch"===t)return te}return null};return p().createElement(A.Z,null,p().createElement(S.FormGroup,null,p().createElement("div",{className:"input-group",style:{display:"flex"}},g&&g.map(((e,t)=>p().createElement("span",{key:"selected-item"+t,className:"input-group-addon"},p().createElement("div",{className:"selectedItem-text"},e.text)))),p().createElement(F.Z,{show:"addressSearch"===t,delay:d,typeAhead:h,blurResetDelay:u,placeholder:E,placeholderMsgId:T,searchText:n,selectedItems:g,onSearch:J,onSearchTextChange:L,onCancelSelectedItem:D,onPurgeResults:$}),"coordinatesSearch"===t&&R&&p().createElement(H,{format:v,defaultZoomLevel:b,onClearCoordinatesSearch:z}),"bookmarkSearch"===t&&x&&p().createElement(G,{mapInitial:Q.mapInitial}),p().createElement(V.Z,{splitTools:!1,toolbarButtons:[...ae()?[{...ae()}]:[],...X.filter((e=>{let{target:t}=e;return"button"===t})).map((e=>{let{component:t}=e;return{visible:!!k,Element:t}})),{glyph:r,className:"square-button-md no-border",bsStyle:"default",pullRight:!0,loading:!I()(c)&&c,visible:"addressSearch"===t&&(""!==n||g&&g.length>0),onClick:()=>{"addressSearch"===t&&ee()},..."coordinatesSearch"===t&&Y.removeIcon(t,m,z,Z)},{glyph:o,className:"square-button-md no-border "+(a||"addressSearch"!==t?"magnifying-glass clickable":"magnifying-glass"),bsStyle:"default",pullRight:!0,tooltipPosition:"bottom",visible:!("addressSearch"!==t||(""!==n||g&&g.length>0)&&s),onClick:()=>a&&J(),..."coordinatesSearch"===t&&Y.searchIcon(t,m,U,b),..."bookmarkSearch"===t&&j.searchIcon(t,Q)},{tooltip:(se=y,se?p().createElement(C.Z,{msgId:se.msgId||"search.generic_error",msgParams:{message:se.message,serviceType:se.serviceType}}):null),tooltipPosition:"bottom",className:"square-button-md no-border",glyph:"warning-sign",bsStyle:"danger",glyphClassName:"searcherror",visible:!!y,onClick:ee},{visible:k,renderButton:p().createElement(N,{disabled:k,menuItems:re})}]}))));var se})),Ke=(0,u.P1)([Re.Od,ye.l2,e=>e.search||null],((e,t,r)=>({mapConfig:e,layers:t,results:r?r.results:null}))),Ue=(0,d.connect)(Ke,{onItemClick:f.Jc,addMarker:f._q,showGFI:f.w4})(ne),Ye=(0,d.connect)((e=>({enabled:e.controls&&e.controls.search&&e.controls.search.enabled||!1,selectedServices:e&&e.search&&e.search.selectedServices,selectedItems:e&&e.search&&e.search.selectedItems,textSearchConfig:e&&e.searchconfig&&e.searchconfig.textSearchConfig})),{onUpdateResultsStyle:f.o$})((Me=class extends p().Component{constructor(){super(...arguments),Ge(this,"getServiceOverrides",(e=>this.props.selectedItems&&this.props.selectedItems[this.props.selectedItems.length-1]&&a()(this.props.selectedItems[this.props.selectedItems.length-1],e))),Ge(this,"getSearchOptions",(()=>{const{searchOptions:e,textSearchConfig:t}=this.props;return t&&t.services&&t.services.length>0?t.override?n()({},e,{services:t.services}):n()({},e,{services:e.services.concat(t.services)}):e})),Ge(this,"getCurrentServices",(()=>{const{selectedServices:e}=this.props,t=this.getSearchOptions();return e&&e.length>0?n()({},t,{services:e}):t})),Ge(this,"searchFitToTheScreen",(()=>{const{offsets:{right:e,left:t},mapSize:{width:r=window.innerWidth}}=this.props;return r-e-t-60>=500})),Ge(this,"getSearchAndToggleButton",(()=>{const e=p().createElement(qe,Be({key:"searchBar"},this.props,{searchOptions:this.getCurrentServices(),placeholder:this.getServiceOverrides("placeholder"),placeholderMsgId:this.getServiceOverrides("placeholderMsgId")}));return this.searchFitToTheScreen()?e:p().createElement(p().Fragment,null,p().createElement(Ve,null),this.props.enabled?e:null)}))}componentDidMount(){this.props.onUpdateResultsStyle({...ae.be,...this.props.resultsStyle})}render(){return p().createElement("span",{id:"search-bar-container",className:je()({toggled:!this.searchFitToTheScreen(),"no-sidebar":!this.props.sidebarIsActive}),style:this.props.sidebarIsActive?this.props.style:null},this.getSearchAndToggleButton(),p().createElement(Ue,{fitToMapSize:this.props.fitResultsToMapSize,searchOptions:this.props.searchOptions,onUpdateResultsStyle:this.props.onUpdateResultsStyle,key:"nominatimresults"}))}},Ge(Me,"propTypes",{splitTools:i().bool,showOptions:i().bool,isSearchClickable:i().bool,fitResultsToMapSize:i().bool,searchOptions:i().object,resultsStyle:i().object,selectedItems:i().array,selectedServices:i().array,userServices:i().array,withToggle:i().oneOfType([i().bool,i().array]),enabled:i().bool,textSearchConfig:i().object,style:i().object,sidebarIsActive:i().bool}),Ge(Me,"defaultProps",{searchOptions:{services:[{type:"nominatim",priority:5}]},isSearchClickable:!1,splitTools:!0,resultsStyle:{color:"#3388ff",weight:4,dashArray:"",fillColor:"#3388ff",fillOpacity:.2},fitResultsToMapSize:!0,withToggle:!1,enabled:!0,style:{},sidebarIsActive:!1}),Me)),We={SearchPlugin:n()((0,d.connect)((0,u.zB)({style:e=>(0,Le.ic)(e,{right:!0}),offsets:e=>(0,Le.ic)(e,{right:!0,left:!0}),mapSize:e=>(0,Re.GV)({width:!0})(e),sidebarIsActive:e=>(0,De.z)(e)}),{})(Ye),{OmniBar:{name:"search",position:1,tool:!0,priority:1}}),epics:{searchEpic:e=>e.ofType(f.bj).debounceTime(250).switchMap((t=>le.Observable.from((t.services||[{type:"nominatim",priority:5}]).map((e=>{const r=Ee.b.Utils.getService(e.type);if(!r){const t=new Error("Service Missing");return t.msgId="search.service_missing",t.serviceType=e.type,le.Observable.of(t).do((e=>{throw e}))}return le.Observable.defer((()=>r(t.searchText,e.options).then((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((t=>({...t,__SERVICE__:e,__PRIORITY__:e.priority||0})))})))).retryWhen((e=>e.delay(200).scan(((e,t)=>{if(e>=2)throw t;return e+1}),0)))}))).mergeAll().scan(((e,t)=>ge()([...e,...t],["__PRIORITY__"]))).map((e=>(0,f.WN)(e.slice(0,t.maxResults||15),!1))).startWith((0,f.yo)(!0)).takeUntil(e.ofType(f.Av,f.M8,f.dX)).concat([(0,f.yo)(!1)]).catch((e=>{const t={msgId:"search.generic_error",...e,message:e.message,stack:e.stack};return le.Observable.from([(0,f.kE)(t),(0,f.yo)(!1)])})))),searchOnStartEpic:(e,t)=>e.ofType(f.Vc).switchMap((e=>{let{layer:r,cql_filter:o}=e;const a=t.getState();if(0===(0,ye.OX)(a).filter((e=>e.name===r)).length)return le.Observable.of((0,f.Tw)());const s=(0,ye.dT)(a,r);return s&&o?le.Observable.defer((()=>(0,Ie.DH)(s.url,{maxFeatures:1,typeName:r,srsName:"EPSG:4326",outputFormat:"application/json",cql_filter:o}).then((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.features&&e.features.length&&{...e.features[0],typeName:r}})))).switchMap((e=>{let{type:r,geometry:a,typeName:s}=e;const n=de()({type:r,geometry:a}).geometry.coordinates;if(n){const e={lng:n[0],lat:n[1]},r=(0,Re.uy)(t.getState()),{x:a,y:l}=(0,_e.reproject)(n,"EPSG:4326",r);let i;return i=(0,Te.xt)(t.getState())?le.Observable.of((0,ke.i8)(fe()(),{component:Oe.IDENTIFY_POPUP,maxWidth:600,position:{coordinates:[a,l]}})):le.Observable.of((0,Se.HP)()),le.Observable.of((0,Se.lK)({latlng:e},s,[s],{[s]:{cql_filter:o}})).merge(i)}return le.Observable.empty()})).catch((()=>le.Observable.of((0,f.I3)()))):le.Observable.empty()})),searchItemSelected:(e,t)=>e.ofType(f.dX).switchMap((e=>{let r=le.Observable.of(e.item).concatMap((t=>{if(t&&t.__SERVICE__&&t.__SERVICE__.geomService){let e=(0,J.generateTemplateString)(t.__SERVICE__.geomService.options.staticFilter||"")(t);return le.Observable.fromPromise(Ee.b.Utils.getService(t.__SERVICE__.geomService.type)("",n()({},t.__SERVICE__.geomService.options,{staticFilter:e})).then((e=>n()({},t,{geometry:_e.default.mergeToPolyGeom(e)}))))}return le.Observable.of(e.item)})).concatMap((e=>{let r=e.bbox||e.properties.bbox||ce()(e),o=[(0,b.Px)([r[0],r[1],r[2],r[3]],"EPSG:4326",e.__SERVICE__&&e.__SERVICE__.options&&e.__SERVICE__.options.maxZoomLevel||21),(0,f._q)(e)];if(e.__SERVICE__&&!he()(e.__SERVICE__.launchInfoPanel)&&e.__SERVICE__.options&&e.__SERVICE__.options.typeName){let r=de()(e).geometry.coordinates;const a={lng:r[0],lat:r[1]},s=e.__SERVICE__.options.typeName;if(r){const r=t.getState(),n=s&&(0,ye.dT)(r,s);let l=null,i=[],c={},p=!1;return"single_layer"===e.__SERVICE__.launchInfoPanel&&(p=e.__SERVICE__.forceSearchLayerVisibility,i=[s],l=e.id,c={[e.__SERVICE__.options.typeName]:{info_format:xe(n,r),...l?{featureid:l,CQL_FILTER:void 0}:{}}}),[...p&&n?[(0,ve.He)(n.id,{visibility:!0})]:[],...e.__SERVICE__.openFeatureInfoButtonEnabled?[]:[(0,Se.lK)({latlng:a},s,i,c,l)],(0,Se.HP)(),...o]}}return o}));const o=e.item;let a=o&&o.__SERVICE__&&o.__SERVICE__.then,s=a?le.Observable.of((0,f.QJ)(a.map((e=>({...e,options:{item:o,...e.options}}))),{text:(0,J.generateTemplateString)(o.__SERVICE__.displayName||"")(o),placeholder:o.__SERVICE__.nestedPlaceholder&&(0,J.generateTemplateString)(o.__SERVICE__.nestedPlaceholder||"")(o),placeholderMsgId:o.__SERVICE__.nestedPlaceholderMsgId&&(0,J.generateTemplateString)(o.__SERVICE__.nestedPlaceholderMsgId||"")(o)},(0,J.generateTemplateString)(o.__SERVICE__.searchTextTemplate||"")(o))):le.Observable.empty(),l=o.__SERVICE__&&o.__SERVICE__.searchTextTemplate,i=l?le.Observable.of((0,f.k9)((0,J.generateTemplateString)(l)(o))):le.Observable.empty();return le.Observable.of((0,f.kV)()).concat(r,s,i)})),zoomAndAddPointEpic:(e,t)=>e.ofType(f.b4).switchMap((e=>{const r={type:"Feature",geometry:{type:"Point",coordinates:[e.pos.x,e.pos.y]}},o=t.getState();return le.Observable.from([(0,h.W)("search","search","overlay",{features:[r],type:"vector",name:"searchPoints",id:"searchPoints",visibility:!0,style:o.search&&o.search.style||ae.be}),(0,b.xy)(e.pos,e.zoom,e.crs)])})),textSearchShowGFIEpic:(e,t)=>e.ofType(f.al).filter((e=>{var t;let{item:r={}}=e;return!(null!=r&&null!==(t=r.__SERVICE__)&&void 0!==t&&t.customGFI)})).switchMap((r=>{var o,a,s,n,l;let{item:i}=r;const c=t.getState(),p=null==i||null===(o=i.__SERVICE__)||void 0===o||null===(a=o.options)||void 0===a?void 0:a.typeName,d=p&&(0,ye.dT)(c,p),u=i.bbox||i.properties.bbox||ce()(i),h=de()(i).geometry.coordinates,m={lng:h[0],lat:h[1]},g=i.id;return h&&(0,ae.zA)(null==i?void 0:i.__SERVICE__)&&(0,ae.Tv)(d,null==i?void 0:i.__SERVICE__)?le.Observable.of(...null!=i&&null!==(s=i.__SERVICE__)&&void 0!==s&&s.forceSearchLayerVisibility&&d?[(0,ve.He)(d.id,{visibility:!0})]:[],(0,Se.lK)({latlng:m},p,[p],{[p]:{info_format:xe(d,c),...g?{featureid:g,CQL_FILTER:void 0}:{}}},g),(0,Se.HP)(),(0,f._q)(i)).merge(u?e.ofType(Se.XL).take(1).mapTo((0,b.Px)([u[0],u[1],u[2],u[3]],"EPSG:4326",(null==i||null===(n=i.__SERVICE__)||void 0===n||null===(l=n.options)||void 0===l?void 0:l.maxZoomLevel)||21)).takeUntil(e.ofType(Se.Ih,Se.km)):le.Observable.empty()).let((e=>u&&(0,ye._$)(t.getState())?e.startWith((0,Se.PM)(!1)).concat(le.Observable.of((0,Se.PM)(!0))):e)):le.Observable.empty()})),delayedSearchEpic:e=>e.ofType(f.qj).switchMap((t=>{let{layer:r,cql_filter:o}=t;return e.ofType(ve.oE).filter((e=>{let{layer:t}=e;return t.name===r})).take(1).switchMap((()=>le.Observable.of((0,f.l4)({layer:r,cql_filter:o}))))}))},reducers:{search:function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case f.NN:return n()({},t,{loading:r.loading});case f.O7:return n()({},t,{error:r.error});case f.gs:return n()({},t,{searchText:r.searchText,error:null});case f.p7:let o=r.results;return!0===r.append&&t&&t.results&&(o=[...t.results,...r.results]),n()({},t,{results:o,error:null});case f.Av:return n()({},t,{results:null,error:null});case f.wn:const a=r.markerPosition.latlng?{latlng:r.markerPosition.latlng,lat:r.markerPosition.latlng.lat,lng:r.markerPosition.latlng.lng}:r.markerPosition;return n()({},t,{markerPosition:a,markerLabel:r.markerLabel});case f.Gh:return n()({},t,{highlightedFeature:r.highlightedFeature});case f.M8:return{style:t.style||{}};case g.l:return null;case f.C2:return n()({},t,{selectedServices:r.services,searchText:r.searchText,selectedItems:(t.selectedItems||[]).concat(r.items)});case f.oQ:return t?n()({},{selectedItems:t.selectedItems&&t.selectedItems.filter((e=>e!==r.item)),searchText:""===t.searchText&&r.item&&r.item.text?r.item.text.substring(0,r.item.text.length):t.searchText}):t;case f.x2:return n()({},t,{style:r.style});case f.Y7:return{...t,activeSearchTool:r.activeSearchTool};case f.GI:return{...t,format:r.format};case f.KP:return{...t,coordinate:{...t.coordinate,[r.coord]:r.val}};case f.dS:return n()({},t,{markerPosition:null!=t&&null!==(e=t.markerPosition)&&void 0!==e&&e.latlng?{}:null==t?void 0:t.markerPosition});default:return t}},mapInfo:Pe.Z}}}}]);