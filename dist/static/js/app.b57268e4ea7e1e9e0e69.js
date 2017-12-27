webpackJsonp([1],{"1m3R":function(e,t){},"6Nev":function(e,t){},Ev9E:function(e,t){},NHnr:function(e,t,s){"use strict";function a(e){s("6Nev")}function i(e){s("1m3R")}function n(e){s("uP6w")}function r(e){s("Ev9E")}function l(e){s("x2IG")}Object.defineProperty(t,"__esModule",{value:!0});var o=s("7+uW"),c=new o.a,u=s("bOdI"),d=s.n(u),h=s("XILU"),m=s.n(h),g=s("PJh5"),p=s.n(g),v={name:"ArticleTag",methods:{deleteTag:function(){this.$parent.$emit("deleteTag",this.tag)}},props:["tag","showDeleteTagButtons"]},f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"article-tag-item badge badge-pill badge-secondary"},[e._v("\n    "+e._s(e.tag)+"\n    "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.showDeleteTagButtons,expression:"showDeleteTagButtons"}],staticClass:"fa fa-minus-circle",on:{click:function(t){e.deleteTag()}}})])},w=[],j={render:f,staticRenderFns:w},b=j,x=s("VU/8"),D=a,y=x(v,b,!1,D,null,null),A=y.exports,C=s("m6he"),T={name:"ArticleListItem",methods:d()({getEditorId:function(){return"vue-editor-"+this.articleIndex},editArticleForm:function(){this.showEditArticleTextarea=!this.showEditArticleTextarea},toggleTagInputField:function(){!0===this.showTagInputField?(this.showTagInputField=!1,this.clearTagInputField()):this.showTagInputField=!0},toggleDeleteTagButtons:function(){this.showDeleteTagButtons=!this.showDeleteTagButtons},deleteArticle:function(e){this.$parent.$emit("deleteArticle",e)},addTag:function(e){this.article.tags.includes(this.newTag)?(this.tagInputFieldHasErrors=!0,this.tagInputFieldErrorMessage="Your tag exists already."):(this.article.tags.push(this.newTag),this.clearTagInputField())},deleteTag:function(e){var t=this.article.tags.indexOf(e);this.article.tags.splice(t,1)},clearTagInputField:function(){this.newTag="",this.tagInputFieldHasErrors=!1,this.tagInputFieldErrorMessage=""}},"toggleDeleteTagButtons",function(){!0===this.showDeleteTagButtons?this.showDeleteTagButtons=!1:this.showDeleteTagButtons=!0}),created:function(){var e=this;this.$on("deleteTag",function(t){e.deleteTag(t)}),this.editorId=this.getEditorId()},filters:{formatDateHumanReadable:function(e){return p()(e).format("LL")}},props:["article","articleIndex"],components:{ArticleTag:A,DatePicker:m.a,VueEditor:C.VueEditor},data:function(){return{newTag:"",showCardFooter:!1,showTagInputField:!1,tagInputFieldHasErrors:!1,tagInputFieldErrorMessage:"",showDeleteTagButtons:!1,showDatepicker:!1,showEditArticleTextarea:!1,editorId:"",customEditorToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{font:[]}],[{align:[]}]]}}},k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"article-list-item-wrap"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.article.dateHeadline,expression:"article.dateHeadline"}],staticClass:"col-lg-8"},[s("h2",[e._v(e._s(e._f("formatDateHumanReadable")(e.article.created)))])]),e._v(" "),s("div",{staticClass:"card article-list-item"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"article-text-wrap"},[s("blockquote",{directives:[{name:"show",rawName:"v-show",value:!e.showEditArticleTextarea,expression:"!showEditArticleTextarea"}],staticClass:"card-blockquote",on:{click:e.editArticleForm}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showEditArticleTextarea,expression:"!showEditArticleTextarea"}],domProps:{innerHTML:e._s(e.article.text)}})]),e._v(" "),s("vue-editor",{directives:[{name:"show",rawName:"v-show",value:e.showEditArticleTextarea,expression:"showEditArticleTextarea"}],attrs:{id:e.editorId,editorToolbar:e.customEditorToolbar},model:{value:e.article.text,callback:function(t){e.$set(e.article,"text",t)},expression:"article.text"}}),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:e.showEditArticleTextarea,expression:"showEditArticleTextarea"}],staticClass:"btn-save-article-text btn btn-primary",attrs:{type:"button"},on:{click:e.editArticleForm}},[e._v("Save Article")])],1),e._v(" "),s("span",{staticClass:"fa pull-right touchable-elem",class:[e.showCardFooter?"fa-arrow-circle-up":"fa-arrow-circle-down"],on:{click:function(t){e.showCardFooter=!e.showCardFooter}}})]),e._v(" "),s("transition",{attrs:{name:"card-footer-slide","enter-active-class":"animated zoomInDown","leave-active-class":"animated zoomOutUp"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showCardFooter,expression:"showCardFooter"}],staticClass:"card-footer"},[s("div",{staticClass:"article-tag row"},[s("div",{staticClass:"col-md-6"},[e._l(e.article.tags,function(t,a){return s("article-tag",{key:a,attrs:{showDeleteTagButtons:e.showDeleteTagButtons,tag:t}})}),e._v(" "),s("span",{staticClass:"touchable-elem fa fa-plus-circle",on:{click:function(t){e.toggleTagInputField()}}}),e._v(" "),s("span",{staticClass:"touchable-elem fa fa-minus-circle",on:{click:function(t){e.toggleDeleteTagButtons()}}})],2),e._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"show",rawName:"v-show",value:e.showTagInputField,expression:"showTagInputField"},{name:"model",rawName:"v-model",value:e.newTag,expression:"newTag"}],staticClass:"form-control form-control-sm",class:[e.tagInputFieldHasErrors?"is-invalid":""],attrs:{type:"text",placeholder:"Add new tag"},domProps:{value:e.newTag},on:{keypress:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.addTag()},input:function(t){t.target.composing||(e.newTag=t.target.value)}}}),e._v(" "),e.tagInputFieldHasErrors?s("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.tagInputFieldErrorMessage))]):e._e()])]),e._v(" "),s("div",{staticClass:"article-date row"},[s("div",{staticClass:"col-md-6"},[s("span",{staticClass:"btn btn-outline-secondary  btn-sm",on:{click:function(t){e.showDatepicker=!e.showDatepicker}}},[e._v("Edit date")])]),e._v(" "),s("div",{staticClass:"col-md-6"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.showDatepicker,expression:"!showDatepicker"}],staticClass:"article-item-date"},[e._v(e._s(e._f("formatDateHumanReadable")(e.article.created)))]),e._v(" "),s("date-picker",{directives:[{name:"show",rawName:"v-show",value:e.showDatepicker,expression:"showDatepicker"}],attrs:{"wrapper-class":"sf-articlelist-datepicker","input-class":"form-control form-control-sm"},on:{selected:function(t){e.showDatepicker=!1}},model:{value:e.article.created,callback:function(t){e.$set(e.article,"created",t)},expression:"article.created"}})],1)]),e._v(" "),s("div",{staticClass:"article-delete row"},[s("div",{staticClass:"col-sm-12"},[s("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button","aria-label":"Delete Article"},on:{click:function(t){e.deleteArticle(e.articleIndex)}}},[s("span",[e._v("Delete Article")]),e._v(" "),s("i",{staticClass:"fa fa-trash"})])])])])])],1)])},I=[],E={render:k,staticRenderFns:I},F=E,_=s("VU/8"),P=i,q=_(T,F,!1,P,null,null),N=q.exports,z={name:"ArticleList",methods:{deleteArticle:function(e){this.articles.splice(e,1)},sortArticlesByDateDesc:function(){this.articles.sort(function(e,t){return p()(e.created).isAfter(t.created,"day")?-1:p()(e.created).isBefore(t.created,"day")?1:0})},searchDateRanges:function(){var e=[],t=this.articles.length-1;this.dateChangedArrayIndex=[],this.articles.forEach(function(t,s){e.push(s)}),this.searchNextMatchingDate(e,t)},searchNextMatchingDate:function(e,t){for(var s=this,a=[],i=e[0],n=0;n<e.length;n++){var r=e[n],l=s.articles[i].created,o=s.articles[r].created;if(!p()(l).isSame(o,"day")){this.dateChangedArrayIndex.push(i),a=e.slice(n,e.length);break}}a.length>0?s.searchNextMatchingDate(a,t):this.dateChangedArrayIndex.push(e[0])},setDateHeadlineFlags:function(){var e=this;e.dateChangedArrayIndex.length<0||e.articles.forEach(function(t,s){e.dateChangedArrayIndex.includes(s)?e.$set(t,"dateHeadline",!0):e.$set(t,"dateHeadline",!1)})},sortArticlesByIdandDateRange:function(){var e=this,t=[];if(!(this.dateChangedArrayIndex.length<1)){for(var s=0;s<this.dateChangedArrayIndex.length;s++){var a=this.dateChangedArrayIndex[s],i=s===this.dateChangedArrayIndex.length-1?e.articles.length:this.dateChangedArrayIndex[s+1];this.articles.slice(a,i).sort(function(e,t){return e.id>t.id?-1:e.id<t.id?1:0}).forEach(function(e){t.push(e)})}t.forEach(function(t,s){e.$set(e.$articlesStore.articles,s,t)})}}},created:function(){var e=this;e.$on("deleteArticle",function(t){e.deleteArticle(t)})},computed:{sortedList:function(){return this.sortArticlesByDateDesc(),this.searchDateRanges(),this.sortArticlesByIdandDateRange(),this.setDateHeadlineFlags(),this.articles}},data:function(){return{articles:this.$articlesStore.articles,dateChangedArrayIndex:[]}},components:{ArticleListItem:N}},H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},e._l(e.sortedList,function(e,t){return s("article-list-item",{key:e.id,attrs:{article:e,articleIndex:t}})}))},M=[],S={render:H,staticRenderFns:M},B=S,L=s("VU/8"),R=n,O=L(z,B,!1,R,"data-v-09d6e1e6",null),V=O.exports,U={name:"ArticleCreate",methods:{createArticle:function(){var e={text:this.newArticle,created:p()().format("Y-MM-DD"),tags:[]};this.$articlesStore.addNewArticle(e),this.newArticle=""}},data:function(){return{newArticle:""}}},$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"article-create"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newArticle,expression:"newArticle"}],staticClass:"form-control",attrs:{placeholder:"What´s on your mind today?"},domProps:{value:e.newArticle},on:{input:function(t){t.target.composing||(e.newArticle=t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){e.createArticle()}}},[e._v("Submit")])])},X=[],J={render:$,staticRenderFns:X},G=J,W=s("VU/8"),Q=r,K=W(U,G,!1,Q,"data-v-0957d106",null),Y=K.exports,Z=s("HSQo"),ee=s.n(Z),te=s("pFYg"),se=s.n(te),ae=s("mvHQ"),ie=s.n(ae),ne=s("yKL4"),re=s.n(ne),le=new o.a({data:{articles:[]},created:function(){var e=this;localStorage.articles?this.articles=this.getLocalstorage():this.initData(),c.$on("resetData",function(){e.resetData()})},watch:{articles:{handler:function(){this.update()},deep:!0}},methods:{update:function(){this.setLocalstorage(this.articles)},setLocalstorage:function(e){var t=ie()(e);localStorage.setItem("articles",t)},getLocalstorage:function(){var e=localStorage.getItem("articles");return e=JSON.parse(e)},initData:function(){if(!(void 0===re.a?"undefined":se()(re.a))||re.a.length<1)return!1;for(var e=0;e<re.a.length;e++){re.a[e].id=this.getNewArticleId(),this.$set(this.articles,e,re.a[e])}},resetData:function(){this.articles.length>0&&this.articles.splice(0,this.articles.length),localStorage.clear(),this.initData()},getNewArticleId:function(){if(0===this.articles.length)return 1;if(this.articles.length>0){var e=[];this.articles.forEach(function(t){e.push(t.id)});return Math.max.apply(Math,e)+1}return!1},addNewArticle:function(e){e.id=this.getNewArticleId(),this.articles.push(e)}}});ee()(o.a.prototype,{$articlesStore:{get:function(){return le}}});var oe={name:"app",data:function(){return{}},methods:{resetApp:function(){c.$emit("resetData")}},components:{ArticleList:V,ArticleCreate:Y,Github:{template:'<span>Source code <i class="fa fa-code"></i> available on <a href="https://github.com/shopfreelancer/streamyourconsciousness" target="_blank"><i class="fa fa-github"></i> GitHub</a></span>'}}},ce=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"jumbotron"},[s("div",{staticClass:"article-create-wrap"},[s("h1",[e._v("Stream your consciousness")]),e._v(" "),s("p",[e._v("A small micro blog made with Vue.js. There is no server attached, the data is stored in the localstorage of the browser. "),s("github")],1),e._v(" "),s("article-create")],1)])]),e._v(" "),s("article-list"),e._v(" "),s("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3 button-reset-wrap text-center text-sm-left"},[s("span",{staticClass:"button-reset btn btn-outline-danger",on:{click:function(t){e.resetApp()}}},[s("i",{staticClass:"fa fa-exclamation-triangle",attrs:{"aria-hidden":"true"}}),e._v("Reset App")])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-9"},[s("p",{staticClass:"text-muted text-center text-sm-right"},[e._v("\n                    Built by "),s("a",{attrs:{href:"https://www.shop-freelancer.de",target:"_blank"}},[e._v("Hans-Christian Psaar | Shop Freelancer")]),e._v(" "),s("br"),e._v(" "),s("github")],1)])])])])],1)},ue=[],de={render:ce,staticRenderFns:ue},he=de,me=s("VU/8"),ge=l,pe=me(oe,he,!1,ge,null,null),ve=pe.exports;o.a.prototype.moment=p.a,o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:ve}})},uP6w:function(e,t){},uslO:function(e,t,s){function a(e){return s(i(e))}function i(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="uslO"},x2IG:function(e,t){},yKL4:function(e,t){e.exports=[{id:1,text:"Donec mattis dictum orci, in gravida justo dictum at. Donec massa diam, commodo eu rhoncus a, auctor sed orci. Duis luctus, dolor vel faucibus finibus, neque ex dignissim neque, at molestie purus est facilisis urna. Phasellus accumsan iaculis gravida. Morbi ante leo, tincidunt sit amet nisi feugiat, feugiat lobortis ipsum. Sed vitae velit turpis. Nunc auctor odio purus. Integer volutpat, lorem nec ultrices placerat, ante lacus tempus nulla, eu porttitor odio ipsum id eros. Praesent facilisis a sapien in laoreet.",created:"2017-03-01",tags:["JAVA","CSS"]},{id:2,text:"Mauris vestibulum quam odio, nec tempus nisi lacinia eu. Sed pulvinar risus in dapibus tristique. Nunc sagittis arcu vitae diam pharetra luctus. Praesent nec vulputate nisl. Nullam luctus blandit risus, eget elementum nisi molestie placerat. Etiam sed sem id leo molestie eleifend nec et dolor. Suspendisse sodales elit in libero lacinia, eget tincidunt metus ultricies.",created:"2017-03-01",tags:["PHP","CSS","jQuery"]},{id:3,text:"Duis in congue mi. Donec sit amet magna sit amet nunc aliquam laoreet. Phasellus blandit mi eget sapien pulvinar consequat. Praesent lacinia ex ex, quis sagittis enim posuere ac. Praesent ut lobortis libero, non aliquet orci. Duis ipsum tellus, maximus in arcu ut, aliquam varius nisi. Donec venenatis sapien non elementum volutpat. Donec efficitur eros interdum mollis bibendum. Mauris orci eros, sodales vitae metus in, tempus feugiat augue.",created:"2017-04-02",tags:["LAMP","Java","jQuery"]},{id:4,text:"Plus Duis in congue mi. Donec sit amet magna sit amet nunc aliquam laoreet. Phasellus blandit mi eget sapien pulvinar consequat. Praesent lacinia ex ex, quis sagittis enim posuere ac. Praesent ut lobortis libero, non aliquet orci. Duis ipsum tellus, maximus in arcu ut, aliquam varius nisi. Donec venenatis sapien non elementum volutpat. Donec efficitur eros interdum mollis bibendum. Mauris orci eros, sodales vitae metus in, tempus feugiat augue.",created:"2017-12-03",tags:["MAMP","Javascript","jQuery"]},{id:5,text:"Wlus Duis in congue mi. Donec sit amet magna sit amet nunc aliquam laoreet. Phasellus blandit mi eget sapien pulvinar consequat. Praesent lacinia ex ex, quis sagittis enim posuere ac. Praesent ut lobortis libero, non aliquet orci. Duis ipsum tellus, maximus in arcu ut, aliquam varius nisi. Donec venenatis sapien non elementum volutpat. Donec efficitur eros interdum mollis bibendum. Mauris orci eros, sodales vitae metus in, tempus feugiat augue.",created:"2017-12-03",tags:["TAMP","Javascript","jQuery"]},{id:6,text:"Wlus Duis in congue mi. Donec sit amet magna sit amet nunc aliquam laoreet. Phasellus blandit mi eget sapien pulvinar consequat. Praesent lacinia ex ex, quis sagittis enim posuere ac. Praesent ut lobortis libero, non aliquet orci. Duis ipsum tellus, maximus in arcu ut, aliquam varius nisi. Donec venenatis sapien non elementum volutpat. Donec efficitur eros interdum mollis bibendum. Mauris orci eros, sodales vitae metus in, tempus feugiat augue.",created:"2017-12-01",tags:["GAMP","Javascript","jQuery"]}]}},["NHnr"]);
//# sourceMappingURL=app.b57268e4ea7e1e9e0e69.js.map