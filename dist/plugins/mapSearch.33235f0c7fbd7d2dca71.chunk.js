(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[3527],{157217:(e,u,t)=>{"use strict";t.d(u,{Z:()=>S});var a=t(124852),s=t.n(a),r=t(630294),l=t(804504),n=t(802728),o=t(270250),E=t(859653),c=t(604788),i=t.n(c),F=t(500711),g=t.n(F),C=t(618446),A=t.n(C),d=t(743129),h=t(433954),p=t(242598);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var u=1;u<arguments.length;u++){var t=arguments[u];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},b.apply(this,arguments)}const m=e=>{let{nextPageIcon:u="chevron-right",prevPageIcon:t="chevron-left",pagination:a={paginated:!0,firstPage:!1,lastPage:!1,loadPrevPage:()=>{},loadNextPage:()=>{}},applyOptionsFilter:l=!1,valueComparator:n=A(),...o}=e;const E=s().useRef(),c=s().useRef();return s().useEffect((()=>{void 0===c.current?c.current=o.value:n(c.current,o.value)||(c.current=o.value)})),s().createElement(d.ZP,b({},o,{value:c.current||o.value,filterOptions:(e,u,t,a)=>o.filterOptions?o.filterOptions(e,u,t,a):(0,h.Z)(e,l?u:"",t,a),menuRenderer:e=>{const{paginated:l,firstPage:n,lastPage:c,loadPrevPage:i=(()=>{}),loadNextPage:F=(()=>{})}=a,g=o.menuRenderer?o.menuRenderer(e):(0,p.Z)(e);return s().createElement(s().Fragment,null,s().createElement("div",{ref:E,className:"paged-select-options"},g),l&&!(n&&c)&&s().createElement("div",{className:"paged-select-bar-container"},s().createElement("div",{className:"paged-select-bar"},!n&&s().createElement(r.Glyphicon,{className:"prev-page-button",glyph:t,onClick:()=>{E.current&&(E.current.scrollTop=0),i()}}),!c&&s().createElement(r.Glyphicon,{className:"next-page-button",glyph:u,onClick:()=>{E.current&&(E.current.scrollTop=0),F()}}))))}}))};var f=t(8204),D=t(89518);const v=(e,u,t)=>({label:e.name,value:e,disabled:t||u&&u.reduce(((u,t)=>u||t.name===e.name),!1)}),B=e=>{let{loadFlags:u={},show:t=!1,showContextSearchOption:a=!0,enableClearAll:r=!0,title:n=s().createElement(l.Z,{msgId:"search.advancedSearchPanel.title"}),contextTitle:o=s().createElement(l.Z,{msgId:"search.advancedSearchPanel.context.title"}),searchFilter:E={},contexts:c={},pagination:F=!0,onClearAll:C=(()=>{}),onSearchFilterChange:A=(()=>{}),onLoadContexts:d=(()=>{})}=e;return t&&a?s().createElement("div",{className:"advanced-search-panel"},s().createElement("div",{className:"advanced-search-title-area"},s().createElement("h5",null,n),u.loadingFilter&&s().createElement(D.Z,{size:16}),s().createElement(f.Z,{btnDefaultProps:{className:"square-button-md no-border",bsStyle:"default"},buttons:[{visible:r&&!u.loadingFilter,glyph:"clear-filter",onClick:()=>C()}]})),s().createElement("div",{className:"advanced-search-context"},s().createElement("h5",null,o),s().createElement(m,{multi:!0,isLoading:u.loadingContexts,onChange:e=>A("contexts",e.map((e=>e.value))),onInputChange:e=>((e||"*")!==(c.searchText||"*")&&d(e,{params:{start:0,limit:c.limit}},500),e),value:(E.contexts||[]).map((e=>v(e))),options:(c.results||[]).map((e=>v(e,E.contexts,u.loadingContexts))),valueComparator:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length===u.length&&g()(i()(e,u),(e=>{let[{label:u},{label:t}]=e;return u===t}))},applyOptionsFilter:!1,removeSelected:!1,onBlurResetsInput:!1,closeOnSelect:!1,pagination:{paginated:F,firstPage:!c.start,lastPage:c.totalCount-c.start<=c.limit,loadPrevPage:()=>d(c.searchText,{params:{start:c.start-c.limit,limit:c.limit}}),loadNextPage:()=>d(c.searchText,{params:{start:c.start+c.limit,limit:c.limit}})},clearable:!0}))):null};var x=t(312471);const S=e=>{let{loadingFilter:u,loadingContexts:t,showContextSearchOption:a=!0,showAdvancedSearchPanel:c=!1,removeIcon:i="1-close",searchIcon:F="search",advancedSearchIcon:g="filter",searchText:C="",searchOptions:A,maxResults:d,searchFilter:h,contexts:p,onSearch:b,onSearchReset:m,onSearchTextChange:f,onToggleControl:D,onSearchFilterClearAll:v,onSearchFilterChange:S,onLoadContexts:y}=e;const P=(0,x.f)({searchText:C,searchOptions:A,maxResults:d,onSearch:b,onSearchReset:m}),O=!h||0===(h.contexts||[]).length;return s().createElement(n.Z,{className:"maps-search"},s().createElement(r.FormGroup,null,s().createElement("div",{className:"input-group"},s().createElement(o.Z,{show:!0,hideOnBlur:!1,typeAhead:!1,placeholderMsgId:"maps.search",searchText:C,onSearch:P,onSearchTextChange:f}),s().createElement(E.Z,{splitTools:!1,toolbarButtons:[{glyph:i,className:"square-button-md no-border",bsStyle:"default",pullRight:!0,visible:""!==C,onClick:()=>m()},{glyph:F,className:"square-button-md no-border magnifying-glass clickable",bsStyle:"default",pullRight:!0,visible:!0,onClick:()=>P()},{glyph:g,tooltip:s().createElement(l.Z,{msgId:`search.advancedSearchPanel.${c?"hide":"show"}Tooltip`+(O?"":"Active")}),className:"square-button-md no-border "+(c&&a?"active":""),bsStyle:O?"default":"success",pullRight:!0,visible:a,onClick:()=>{D("advancedsearchpanel"),y("*",{params:{start:0,limit:12}})}}]}))),s().createElement(B,{loading:u||t,loadFlags:{loadingFilter:u,loadingContexts:t},show:c,showContextSearchOption:a,searchFilter:h,contexts:p,onClearAll:v,onSearchFilterChange:S,onLoadContexts:y}))}},802728:(e,u,t)=>{"use strict";t.d(u,{Z:()=>r});var a=t(124852),s=t.n(a);const r=e=>{let{className:u,style:t,children:a}=e;return s().createElement("div",{id:"map-search-bar",style:t,className:"MapSearchBar"+(u?" "+u:"")},a)}},270250:(e,u,t)=>{"use strict";t.d(u,{Z:()=>c});var a=t(124852),s=t.n(a),r=t(45697),l=t.n(r),n=t(630294),o=t(719648);const E=(e,u)=>{let{show:t,autoFocusOnSelect:a=!0,selectedItems:r=[],className:l,style:E={textOverflow:"ellipsis"},placeholder:c,placeholderMsgId:i,hideOnBlur:F=!0,searchText:g="",typeAhead:C=!0,delay:A=1e3,blurResetDelay:d=300,onSearch:h=(()=>{}),onSearchTextChange:p=(()=>{}),onCancelSelectedItem:b=(()=>{}),onPurgeResults:m=(()=>{})}=e;const f=s().useRef(),D=s().useRef(),[v,B]=s().useState(),[x,S]=s().useState(),[y,P]=s().useState(!1);s().useEffect((()=>{const e=D.current;if(a&&r&&(e<r.length||!e&&1===r.length)){const e=f.current;e&&e.focus instanceof Function&&setTimeout((()=>e.focus()),200)}D.current=r&&r.length})),s().useEffect((()=>{y&&(h(),P(!1))}),[y,h]);let O="search.addressSearch";if(!c&&u.messages){const e=(0,o.S$)(u.messages,i||O);e&&(O=e)}else O=c;return t&&s().createElement(n.FormControl,{className:"searchInput"+(l?` ${l}`:""),key:"search-input",placeholder:O,type:"text",inputRef:e=>{f.current=e},style:E,value:g,onKeyDown:e=>{switch(e.keyCode){case 13:h();break;case 8:!g&&r&&r.length>0&&b(r[r.length-1])}},onBlur:()=>{F&&(v&&clearTimeout(v),B(setTimeout((()=>{m()}),d)))},onFocus:()=>{C&&g&&h()},onChange:e=>{let u=e.target.value;p(u),C&&(x&&clearTimeout(x),S(setTimeout((()=>{P(!0)}),A)))}})};E.contextTypes={messages:l().object};const c=E},859653:(e,u,t)=>{"use strict";t.d(u,{Z:()=>i});var a=t(124852),s=t.n(a),r=t(727418),l=t.n(r),n=t(472986),o=t.n(n),E=t(8204);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var u=1;u<arguments.length;u++){var t=arguments[u];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)}const i=e=>{let{loading:u,splitTools:t,toolbarProps:a={},toolbarButtons:r=[],children:n}=e;return s().createElement("span",{className:"search-toolbar-options"},u&&s().createElement(o(),{style:l()({},{position:"absolute"},{right:"69px",zIndex:1,top:"13px"}),spinnerName:"pulse",noFadeIn:!0}),s().createElement(E.Z,c({btnGroupProps:{className:"btn-group-menu-options"},transitionProps:null,btnDefaultProps:{className:"square-button-md",bsStyle:"primary"}},a,{buttons:r})),n)}},312471:(e,u,t)=>{"use strict";t.d(u,{f:()=>a});const a=e=>{let{searchText:u,selectedItems:t,searchOptions:a,maxResults:s,onSearch:r=(()=>{}),onSearchReset:l=(()=>{})}=e;return()=>{const e=u,n=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(u,t){var a;return u+((null==t||null===(a=t.options)||void 0===a?void 0:a.maxFeatures)||e)}),0)||e}(null==a?void 0:a.services,s);void 0!==e&&""!==e||t&&0!==t.length?void 0!==e&&""!==e&&r(e,a,n):l()}}},744838:(e,u,t)=>{"use strict";t.r(u),t.d(u,{default:()=>c});var a=t(171703),s=t(227361),r=t.n(s),l=t(371714),n=t(748481),o=t(687753),E=t(234228);const c={MapSearchPlugin:(0,a.connect)((e=>({className:"maps-search",placeholderMsgId:"maps.search",start:e&&e.maps&&e.maps.start,limit:e&&e.maps&&e.maps.limit,searchText:e.maps&&"*"!==e.maps.searchText&&e.maps.searchText||"",showAdvancedSearchPanel:e.controls&&e.controls.advancedsearchpanel&&e.controls.advancedsearchpanel.enabled||!1,searchFilter:(0,n.Ed)(e),contexts:(0,n.QO)(e),loadingContexts:r()((0,n.E4)(e),"loadingContexts"),loadingFilter:r()((0,n.E4)(e),"loadingMaps")})),{onSearchTextChange:l.u3,onToggleControl:o.Xi,onSearch:(e,u)=>{let t=e&&""!==e?e:E.ZP.getDefaults().initialMapFilter||"*";return(0,l.MT)(E.ZP.getDefaults().geoStoreUrl,t,u)},onSearchReset:function(){for(var e=arguments.length,u=new Array(e),t=0;t<e;t++)u[t]=arguments[t];return(0,l.MT)(E.ZP.getDefaults().geoStoreUrl,E.ZP.getDefaults().initialMapFilter||"*",...u)},onSearchFilterChange:l.fj,onSearchFilterClearAll:l.vh,onLoadContexts:l.Qw},((e,u,t)=>({...e,...t,onSearch:t=>{let a=e.limit;u.onSearch(t,{start:0,limit:a})},onSearchReset:()=>{u.onSearchReset({start:0,limit:e.limit})},onSearchTextChange:u.onSearchTextChange,onToggleControl:u.onToggleControl,onSearchFilterChange:u.onSearchFilterChange,onSearchFilterClearAll:u.onSearchFilterClearAll,onLoadContexts:u.onLoadContexts})))(t(157217).Z),reducers:{maps:t(980153).Z}}},433954:(e,u,t)=>{"use strict";var a=r(t(525226)),s=r(t(70416));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return null!=e&&""!==e};u.Z=function(e,u,t,r){return r.ignoreAccents&&(u=(0,a.default)(u)),r.ignoreCase&&(u=u.toLowerCase()),r.trimFilter&&(u=(0,s.default)(u)),t&&(t=t.map((function(e){return e[r.valueKey]}))),e.filter((function(e){if(t&&t.indexOf(e[r.valueKey])>-1)return!1;if(r.filterOption)return r.filterOption.call(void 0,e,u);if(!u)return!0;var s=e[r.valueKey],n=e[r.labelKey],o=l(s),E=l(n);if(!o&&!E)return!1;var c=o?String(s):null,i=E?String(n):null;return r.ignoreAccents&&(c&&"label"!==r.matchProp&&(c=(0,a.default)(c)),i&&"value"!==r.matchProp&&(i=(0,a.default)(i))),r.ignoreCase&&(c&&"label"!==r.matchProp&&(c=c.toLowerCase()),i&&"value"!==r.matchProp&&(i=i.toLowerCase())),"start"===r.matchPos?c&&"label"!==r.matchProp&&c.substr(0,u.length)===u||i&&"value"!==r.matchProp&&i.substr(0,u.length)===u:c&&"label"!==r.matchProp&&c.indexOf(u)>=0||i&&"value"!==r.matchProp&&i.indexOf(u)>=0}))}},242598:(e,u,t)=>{"use strict";var a=l(t(294184)),s=l(t(45697)),r=l(t(124852));function l(e){return e&&e.__esModule?e:{default:e}}var n=function(e){var u=e.focusedOption,t=e.focusOption,s=e.inputValue,l=e.instancePrefix,n=e.onFocus,o=e.onOptionRef,E=e.onSelect,c=e.optionClassName,i=e.optionComponent,F=e.optionRenderer,g=e.options,C=e.removeValue,A=e.selectValue,d=e.valueArray,h=e.valueKey,p=i;return g.map((function(e,i){var g=d&&d.some((function(u){return u[h]===e[h]})),b=e===u,m=(0,a.default)(c,{"Select-option":!0,"is-selected":g,"is-focused":b,"is-disabled":e.disabled});return r.default.createElement(p,{className:m,focusOption:t,inputValue:s,instancePrefix:l,isDisabled:e.disabled,isFocused:b,isSelected:g,key:"option-"+i+"-"+e[h],onFocus:n,onSelect:E,option:e,optionIndex:i,ref:function(e){o(e,b)},removeValue:C,selectValue:A},F(e,i,s))}))};n.propTypes={focusOption:s.default.func,focusedOption:s.default.object,inputValue:s.default.string,instancePrefix:s.default.string,onFocus:s.default.func,onOptionRef:s.default.func,onSelect:s.default.func,optionClassName:s.default.string,optionComponent:s.default.func,optionRenderer:s.default.func,options:s.default.array,removeValue:s.default.func,selectValue:s.default.func,valueArray:s.default.array,valueKey:s.default.string},u.Z=n},525226:(e,u)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});var t=[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}];u.default=function(e){for(var u=0;u<t.length;u++)e=e.replace(t[u].letters,t[u].base);return e}},70416:(e,u)=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e.replace(/^\s+|\s+$/g,"")}}}]);