(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e){e.exports=[{key:1,name:"Broccoli",price:"2.99 USD",location:"27 Each, Aisle 3, Section 5",img:"/img/broccolli.png",status:"Deterioating",orderDate:"10/7/2019",perishable:!0},{key:2,name:"Tortilla Chips",price:"4.99 USD",location:"35 Each, Aisle 17, Section 5",img:"/img/tortillachips.png",status:"In-Stock",orderDate:"10/7/2019",perishable:!1},{key:3,name:"Soap Bars",price:"5.49 USD",location:"3 Each, Aisle 23, Section 21",img:"/img/soap.png",status:"Re-Stock",orderDate:"10/7/2019",perishable:!1},{key:4,name:"2% Skim Milk",price:"5.99 USD",location:"27 Each, Aisle 12, Section 3",img:"/img/milk.png",status:"In-Stock",orderDate:"10/7/2019",perishable:!0},{key:5,name:"Lettuce",price:"6.79 USD",location:"4 Each, Aisle 3, Section 4",img:"/img/lettuce.png",status:"Re-Stock",orderDate:"10/7/2019",perishable:!0},{key:6,name:"Whole Chicken",price:"3.99 /LB",location:"27 Each, Aisle 7, Section 17",img:"/img/chicken.png",status:"In-Stock",orderDate:"10/7/2019",perishable:!0},{key:7,name:"Storage Bin",price:"7.99 USD",location:"19 Each, Aisle 27, Section 9",img:"/img/storagebin.png",status:"In-Stock",orderDate:"10/7/2019",perishable:!1},{key:8,name:"Electric Kettle",price:"10.99 USD",location:"10 Each, Aisle 14, Section 36",img:"/img/kettle.png",status:"In-Stock",orderDate:"10/7/2019",perishable:!1}]},147:function(e,t,a){e.exports=a.p+"static/media/logo.60a8874b.png"},160:function(e,t,a){e.exports=a(197)},165:function(e,t,a){},194:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(144),c=a.n(i),l=a(118),s=a(60),o=(a(165),a(5)),u=a(3),m=a(8),p=a(6),d=a(7),h=a(76),f=a.n(h),g=a(62),E=a(48),b=a(69),y=a(85),k=a(44),S=a(100),v=a(28),N=a(104),P=a(55),I=a(56),C=a(102),x=a(154),O=a(146),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).navToDetail=function(){a.props.history.push("/detail")},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app-content"},r.a.createElement(E.a,{level:"H3"},"Featured"),r.a.createElement("section",{className:"section"},g.featured.map(function(t){return r.a.createElement(b.a,{key:t.key,onHeaderClick:e.navToDetail,heading:t.heading,subtitle:t.subtitle,status:t.status,headerInteractive:!0,className:"ui5card"},r.a.createElement(y.a,{separators:"Inner"},t.items.map(function(e){return r.a.createElement(k.a,{key:e.key,icon:e.icon,description:e.description,info:e.info,infoState:e.infoState,className:"ui5list-item"},e.title)})))})),r.a.createElement(E.a,{level:"H3"},"Today at a glance"),r.a.createElement("section",{className:"section"},r.a.createElement(b.a,{heading:"Upcoming Activities",subtitle:"28 Jun 2019",className:"ui5card"},r.a.createElement(x.a,null,g.activities.map(function(e){return r.a.createElement(O.a,{key:e.key,icon:e.icon,titleText:e.title,subtitleText:e.subtitle,className:"ui5list-item"},r.a.createElement("div",null,e.location))}))),r.a.createElement(b.a,{heading:"Energy Efficiency",subtitle:"Smart Store A",className:"ui5card"},r.a.createElement(y.a,{separators:"Inner"},g.energystats.map(function(e){return r.a.createElement(k.a,{key:e.key,icon:e.icon,description:e.description,info:e.info,className:"ui5list-item"},e.title)}))),r.a.createElement(b.a,{avatar:"sap-icon://retail-store",heading:"Smart Stores",subtitle:"Bulgaria",status:"6 of 6",className:"ui5card ui5card-large"},r.a.createElement("div",{className:"card-content"},r.a.createElement(k.a,{separators:"Inner",className:"card-content-child"},g.storesa.map(function(e){return r.a.createElement(k.a,{key:e.key,image:f.a,description:e.description},e.title)})),r.a.createElement(k.a,{separators:"Inner",className:"card-content-child"},g.storesb.map(function(e){return r.a.createElement(k.a,{key:e.key,image:f.a,description:e.description},e.title)}))))),r.a.createElement(E.a,{level:"H3"},"Action Required"),r.a.createElement("section",{className:"section"},g.actions.map(function(e){return r.a.createElement(b.a,{key:e.key,heading:"Smart Store 1",subtitle:"today",status:"3 of 6",className:"ui5card ui5card-large"},r.a.createElement(N.a,{columns:e.columns.map(function(e){return r.a.createElement(I.a,{key:e.key},r.a.createElement("div",null,r.a.createElement(v.a,null,e.name)))})},e.rows.map(function(e){return r.a.createElement(C.a,{key:e.key},e.cells.map(function(e){return r.a.createElement(P.a,{key:e.key},r.a.createElement(v.a,{className:e.error},e.text))}))})))}),g.alerts.map(function(e){return r.a.createElement(b.a,{key:e.key,heading:e.heading,subtitle:e.subtitle,className:"ui5card ui5card-alert"},r.a.createElement("div",{className:"ui5card-alert-content"},r.a.createElement(S.a,{src:e.icon,className:"ui5icon-size ui5card-alert-icon"}),r.a.createElement(v.a,{className:"ui5label-size error"},e.text)))})))}}]),t}(n.Component),w=a(68),A=a(20),j=a(57),T=a(122),R=a(93),B=a(158),L=a(159),M=a(151),U=a(112),W=a(153),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).dialog=r.a.createRef(),a.nameInput=r.a.createRef(),a.priceInput=r.a.createRef(),a.locationInput=r.a.createRef(),a.dateInput=r.a.createRef(),a.imageInput=r.a.createRef(),a.statusInput=r.a.createRef(),a.rbPerishable=r.a.createRef(),a.handleOnInput=function(e){var t=e.getParameter("value");a.props.filter(t)},a.openDialog=function(){a.dialog.current.open()},a.submitNewProduct=function(){var e={name:a.nameInput.current.value,price:a.priceInput.current.value,location:a.locationInput.current.value,img:a.imageInput.current.value,status:[].filter.call(a.statusInput.current.children,function(e){return e.selected})[0].textContent,orderDate:a.dateInput.current.value,perishable:!!a.rbPerishable.current.selected};a.props.createProduct(e),a.dialog.current.close()},a.closeDialog=function(){a.dialog.current.close()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"details-page-filter-bar"},r.a.createElement(E.a,{level:"H3"},"Products"),r.a.createElement("div",{className:"details-page-filter-bar-actions"},r.a.createElement(R.a,{className:"details-page-searchfield",placeholder:"Search",onInput:this.handleOnInput,icon:r.a.createElement(S.a,{slot:"icon",src:"sap-icon://search"})}),r.a.createElement(j.a,{onClick:this.openDialog,design:"Transparent",title:"Create Product"},"Create"),r.a.createElement(j.a,{onClick:this.props.sortDesc,icon:"sap-icon://sort-descending",design:"Transparent",title:"Sort By Status"}),r.a.createElement(j.a,{onClick:this.props.sortAsc,icon:"sap-icon://sort-ascending",design:"Transparent",title:"Sort By Status"}),r.a.createElement(j.a,{icon:"sap-icon://excel-attachment",design:"Transparent"})),r.a.createElement(B.a,{headerText:"Add a new product",ref:this.dialog},r.a.createElement("div",{className:"dialog-content"},r.a.createElement("div",{className:"dialog-section"},r.a.createElement(v.a,null,"Product name:"),r.a.createElement(R.a,{ref:this.nameInput})),r.a.createElement("div",{className:"dialog-section"},r.a.createElement(v.a,null,"Product price:"),r.a.createElement(R.a,{ref:this.priceInput})),r.a.createElement("div",{className:"dialog-section"},r.a.createElement(v.a,null,"Product location:"),r.a.createElement(W.a,{ref:this.locationInput,showExceededText:!0,maxLength:"100"})),r.a.createElement("div",{className:"dialog-section"},r.a.createElement(v.a,null,"Order date:"),r.a.createElement(M.a,{ref:this.dateInput})),r.a.createElement("div",{className:"dialog-section"},r.a.createElement(v.a,null,"Image URL:"),r.a.createElement(R.a,{ref:this.imageInput,type:"URL",placeholder:"https://..."})),r.a.createElement("div",{className:"dialog-section"},r.a.createElement(v.a,null,"Status:"),r.a.createElement(L.a,{ref:this.statusInput},r.a.createElement(U.a,null,"In-Stock"),r.a.createElement(U.a,null,"Re-Stock"),r.a.createElement(U.a,null,"Deterioating"))),r.a.createElement("div",{className:"dialog-section horizontal-flex"},r.a.createElement(T.a,{selected:!0,name:"perishable",text:"Perishable",ref:this.rbPerishable}),r.a.createElement(T.a,{name:"perishable",text:"Non-Perishable"}))),r.a.createElement("div",{slot:"footer",className:"dialog-footer"},r.a.createElement(j.a,{design:"Emphasized",onClick:this.submitNewProduct},"OK"),r.a.createElement(j.a,{onClick:this.closeDialog},"Cancel"))))}}]),t}(n.Component),H=a(152),z=a(94),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onTabItemSelect=function(e){var t=e.getParameter("item").getAttribute("data-filter-type");a.props.tabPress(t)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"detail-page-header"},r.a.createElement("div",{className:"detail-page-header-bar"},r.a.createElement(E.a,null,"Inventory"),r.a.createElement(j.a,{design:"Transparent",icon:"sap-icon://action",className:"action-button"})),r.a.createElement(H.a,{fixed:!0,collapsed:!0,className:"detail-page-header-menu",onItemSelect:this.onTabItemSelect},r.a.createElement(z.a,{"data-filter-type":"all",text:"All Items",additionalText:this.props.products.length}),r.a.createElement(z.a,{"data-filter-type":"noPerishable",text:"Non-Perishable",additionalText:this.props.nonPerishableCount}),r.a.createElement(z.a,{"data-filter-type":"perishable",text:"Perishable",additionalText:this.props.perishableCount}),r.a.createElement(z.a,{"data-filter-type":"alerts",text:"Alerts",additionalText:this.props.alertCount})))}}]),t}(n.Component),J=(a(194),a(123)),V=a(155),K=function(e){switch(e){case"In-Stock":return"8";case"Deterioating":return"2";case"Re-Stock":return"1";default:return"0"}},Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={products:Object(A.a)(J),filteredProducts:Object(A.a)(J),filterType:"all"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"filterPerishableProducts",value:function(e){return e.filter(function(e){return e.perishable})}},{key:"filterNoPerishableProducts",value:function(e){return e.filter(function(e){return!e.perishable})}},{key:"filterAlertProducts",value:function(e){return e.filter(function(e){return"Deterioating"===e.status||"Re-Stock"===e.status})}},{key:"filterItems",value:function(e,t){var a=[];switch(e){case"all":a=t;break;case"noPerishable":a=this.filterNoPerishableProducts(t);break;case"perishable":a=this.filterPerishableProducts(t);break;case"alerts":a=this.filterAlertProducts(t);break;default:a=t}return a}},{key:"applyFilter",value:function(e){var t=this.filterItems(e,this.state.products);this.setState(Object(w.a)({},this.state,{filteredProducts:t,filterType:e}))}},{key:"createProduct",value:function(e){var t=[].concat(Object(A.a)(this.state.products),[Object(w.a)({key:this.state.products.length+1},e)]);this.setState(Object(w.a)({},this.state,{products:t,filteredProducts:this.filterItems(this.state.filterType,t)}))}},{key:"filterVisibleItemsByText",value:function(e){var t=this.filterItems(this.state.filterType,this.state.products).filter(function(t){return t.name.toLowerCase().startsWith(e)});this.setState(Object(w.a)({},this.state,{filteredProducts:t}))}},{key:"filter",value:function(e){this.filterVisibleItemsByText(e)}},{key:"sortAsc",value:function(){var e=this,t=this.state.filteredProducts.sort(function(t,a){return e.statusCriteriaMapping[t.status]>e.statusCriteriaMapping[a.status]?1:e.statusCriteriaMapping[t.status]<e.statusCriteriaMapping[a.status]?-1:0});this.setState(Object(w.a)({},this.state,{filteredProducts:t}))}},{key:"sortDesc",value:function(){var e=this,t=this.state.filteredProducts.sort(function(t,a){return e.statusCriteriaMapping[t.status]>e.statusCriteriaMapping[a.status]?-1:e.statusCriteriaMapping[t.status]<e.statusCriteriaMapping[a.status]?1:0});this.setState(Object(w.a)({},this.state,{filteredProducts:t}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"detail-page"},r.a.createElement(_,{products:this.state.products,nonPerishableCount:this.filterNoPerishableProducts(this.state.products).length,perishableCount:this.filterPerishableProducts(this.state.products).length,alertCount:this.filterAlertProducts(this.state.products).length,tabPress:this.applyFilter.bind(this)}),r.a.createElement("main",{className:"detail-page-content"},r.a.createElement(F,{createProduct:this.createProduct.bind(this),filter:this.filter.bind(this),sortAsc:this.sortAsc.bind(this),sortDesc:this.sortDesc.bind(this)}),r.a.createElement(N.a,{className:"items-table",noDataText:"No Items available for search criteria",showNoData:!0,columns:[r.a.createElement(I.a,null,r.a.createElement(v.a,{className:"table-column-header-content"},"Product")),r.a.createElement(I.a,null,r.a.createElement(v.a,{className:"table-column-header-content"},"Price")),r.a.createElement(I.a,null,r.a.createElement(v.a,{className:"table-column-header-content"},"Location")),r.a.createElement(I.a,null,r.a.createElement(v.a,{className:"table-column-header-content"},"Order date")),r.a.createElement(I.a,null,r.a.createElement(v.a,{className:"table-column-header-content"},"Image")),r.a.createElement(I.a,null,r.a.createElement(v.a,{className:"table-column-header-content"},"Status"))]},this.state.filteredProducts.map(function(e){return r.a.createElement(C.a,{key:e.key},r.a.createElement(P.a,null,r.a.createElement(v.a,{className:"table-cell-content"},r.a.createElement("b",null,e.name))),r.a.createElement(P.a,null,r.a.createElement("span",{className:"table-cell-content"},e.price)),r.a.createElement(P.a,null,r.a.createElement("span",{className:"table-cell-content"},e.location)),r.a.createElement(P.a,null,r.a.createElement("span",{className:"table-cell-content"},e.orderDate)),r.a.createElement(P.a,null,r.a.createElement("span",{className:"table-cell-content"},r.a.createElement("img",{alt:"",className:"image-cell",src:"/ui5con-smart-store"+e.img}))),r.a.createElement(P.a,null,r.a.createElement("span",{className:"table-cell-content"},r.a.createElement(V.a,{colorScheme:K(e.status)},e.status))))}))))}},{key:"statusCriteriaMapping",get:function(){return{"In-Stock":0,"Re-Stock":1,Deterioating:2}}}]),t}(n.Component),q=a(147),G=a.n(q),X=a(49),Q=(a(198),a(148)),Z=a(156),$=a(157),ee=a(149),te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onLogoClick=function(){window.location.hash="#/home"},a.onProfileClicked=function(e){window["profile-popover"].openBy(e.getParameter("targetRef"))},a.onThemeSwitchPressed=function(e){Object(X.d)(e.getParameter("checked")?"sap_belize_hcb":"sap_fiori_3")},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-bar"},r.a.createElement(Z.a,{primaryTitle:"Smart Store Manager",showNotifications:!0,showProductSwitch:!0,showCoPilot:!0,profile:f.a,onProfileClick:this.onProfileClicked,logo:G.a,onLogoClick:this.onLogoClick}),r.a.createElement(Q.a,{id:"profile-popover","placement-type":"Bottom","horizontal-align":"Right"},r.a.createElement("div",{className:"profile-header centered"},r.a.createElement("img",{src:f.a,alt:"",className:"profile-img"}),r.a.createElement(E.a,{level:"3"},"Darius Cummings"),r.a.createElement(v.a,null,"Store Manager")),r.a.createElement("div",{className:"profile-content"},r.a.createElement(y.a,{separators:"None"},r.a.createElement(ee.a,{type:"Inactive"},r.a.createElement("div",{className:"profile-hcb-switch centered"},r.a.createElement(k.a,{icon:"sap-icon://palette",type:"Inactive"},"High Contrast Black"),r.a.createElement($.a,{onChange:this.onThemeSwitchPressed}))),r.a.createElement(k.a,{icon:"sap-icon://settings"},"Settings"),r.a.createElement(k.a,{icon:"sap-icon://sys-help"},"Help"),r.a.createElement(k.a,{icon:"sap-icon://log"},"Sign out")))))}}]),t}(n.Component),ae=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(te,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/home",component:D}),r.a.createElement(s.b,{path:"/detail",component:Y}),r.a.createElement(s.a,{from:"/",to:"/home"})))};c.a.render(r.a.createElement(l.a,null,r.a.createElement(ae,null)),document.getElementById("root"))},62:function(e){e.exports={featured:[{key:"f1",heading:"Inventory",status:"3 of 22",items:[{key:"1",title:"Soap Bars",description:"1579340",icon:"sap-icon://product"},{key:"2",title:"Lettuce",description:"1579441",icon:"sap-icon://product"},{key:"3",title:"Broccoli",description:"1579542",icon:"sap-icon://product"}]},{key:"f2",heading:"Security",status:"3 of 3",subtitle:"Cameras",items:[{key:"4",title:"Parking A",description:"#36",icon:"sap-icon://web-cam",info:"Recording",infoState:"Success"},{key:"5",title:"Deli Department 1",description:"#41",icon:"sap-icon://web-cam",info:"Recording",infoState:"Success"},{key:"6",title:"Warehouse B",description:"#75",icon:"sap-icon://hide",info:"Off",infoState:"Error"}]}],activities:[{key:"1",title:"Weekly Sync - Managers and Tech support",subtitle:"10:00 - 10:30",location:"MR WDF18 C3(GLASSBOX)",icon:"sap-icon://calendar"},{key:"2",title:"Video Converence Call - Tech Update",subtitle:"14:30 - 15:30",location:"St. Leon Rot, NYC",icon:"sap-icon://calendar"},{key:"3",title:"Call 'Project Nimbus' (Skype Meeting)",subtitle:"15:00 - 16:30",location:"",icon:"sap-icon://phone"}],energystats:[{key:"1",title:"Fridges",description:"Fridges are on",icon:"sap-icon://fridge",info:"13,548 Watts"},{key:"2",title:"Lights",description:"Lights are on",icon:"sap-icon://lightbulb",info:"3,896 Watts"},{key:"3",title:"Air condition",description:"All are on",icon:"sap-icon://heating-cooling",info:"2,752 Watts"},{key:"4",title:"Ovens",description:"Ovens are on",icon:"sap-icon://washing-machine",info:"2,317 Watts"}],storesa:[{key:"s1",title:"Smart Store 1",description:"New York City"},{key:"s2",title:"Smart Store 2",description:"Washington"},{key:"s3",title:"Smart Store 3",description:"Boston"}],storesb:[{key:"s4",title:"Smart Store 4",description:"Dallas"},{key:"s5",title:"Smart Store 5",description:"Los Angeles"},{key:"s6",title:"Smart Store 6",description:"Chicago"}],actions:[{key:"3",type:"table",title:"Smart Store 1",subtitle:"today",status:"3 of 6",columns:[{key:"4",name:"Product"},{key:"5",name:"Location"},{key:"6",name:"Price"},{key:"7",name:"Status"}],rows:[{key:"7",cells:[{key:"8",text:"Soap Bars"},{key:"9",text:"Aisle 23, Section 21"},{key:"10",text:"5.49 USD"},{key:"11",text:"Re-stock",error:"error"}]},{key:"8",cells:[{key:"12",text:"Lettuce"},{key:"13",text:"Aisle 23, Section 23"},{key:"14",text:"6.79 USD"},{key:"15",text:"Re-stock",error:"error"}]},{key:"9",cells:[{key:"16",text:"Broccoli"},{key:"17",text:"Aisle 21, Section 5"},{key:"18",text:"2.99 USD"},{key:"19",text:"Deteriorating",error:"error"}]}]}],alerts:[{key:"20",heading:"Fridge #37",subtitle:"Temperature too low",icon:"sap-icon://fridge",text:"-9 \u2103"},{key:"21",heading:"Room A",subtitle:"Temperature high",icon:"sap-icon://temperature",text:"28 \u2103"},{key:"22",heading:"Entrance Lamp",subtitle:"Maintenance Overdue",icon:"sap-icon://lightbulb",text:"5 days"}]}},76:function(e,t,a){e.exports=a.p+"static/media/profile.c5319308.png"}},[[160,1,2]]]);
//# sourceMappingURL=main.846aa568.chunk.js.map