(this["webpackJsonpmovie-galaxy"]=this["webpackJsonpmovie-galaxy"]||[]).push([[0],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(37),i=a.n(o),r=a(84),s=a(20),l=a(28),d=a(58),O=a(98),j=a(121),u=a(15),p=a(14),b="MOVIE_ON_START_SEARCH",m="MOVIE_ON_ERROR_SEARCH",h="MOVIE_ON_SEARCH",v="MOVIE_ON_START_GET_TRENDING",x="MOVIE_ON_ERROR_GET_TRENDING",_="MOVIE_ON_GET_TRENDING",f="MOVIE_ON_START_GET_MOVIE_BY_ID",g="MOVIE_ON_ERROR_GET_MOVIE_BY_ID",y="MOVIE_ON_GET_MOVIE_BY_ID",E="MOVIE_ON_START_GET_MOVIE_VIDEOS_BY_ID",I="MOVIE_ON_ERROR_GET_MOVIE_VIDEOS_BY_ID",R="MOVIE_ON_GET_MOVIE_VIDEOS_BY_ID",M="MOVIE_ON_ADD_TO_FAVORITES",T="MOVIE_ON_REMOVE_FROM_FAVORITES",N="MOVIE_ON_ADD_TO_WATCHLIST",V="MOVIE_ON_REMOVE_FROM_WATCHLIST",S={movieResults:[],movieResultsCount:0,movieFavoritesArr:[],movieWatchlist:[],currentMovie:null,currentMovieVideos:null,loading:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return console.log("MOVIE_ON_START_SEARCH",t.payload),Object(p.a)(Object(p.a)({},e),{},{movieResults:[],movieResultsCount:0,loading:!0});case m:return console.log("MOVIE_ON_START_SEARCH",t.payload),Object(p.a)(Object(p.a)({},e),{},{movieResults:[],movieResultsCount:0,loading:!1});case h:console.log("MOVIE_ON_START_SEARCH",t.payload);var a=t.payload,n=a.total_results,c=a.results;return Object(p.a)(Object(p.a)({},e),{},{movieResults:c,movieResultsCount:n,loading:!1});case v:return console.log("MOVIE_ON_START_GET_TRENDING",t.payload),Object(p.a)(Object(p.a)({},e),{},{movieResults:[],movieResultsCount:0,loading:!0});case x:return console.log("MOVIE_ON_ERROR_GET_TRENDING",t.payload),Object(p.a)(Object(p.a)({},e),{},{movieResults:[],movieResultsCount:0,loading:!1});case _:console.log("MOVIE_ON_GET_TRENDING",t.payload);var o=t.payload,i=o.total_results,r=o.results;return Object(p.a)(Object(p.a)({},e),{},{movieResults:r,movieResultsCount:i,loading:!1});case f:return console.log("MOVIE_ON_START_GET_MOVIE_BY_ID",t.payload),Object(p.a)(Object(p.a)({},e),{},{currentMovie:null,loading:!0});case g:return console.log("MOVIE_ON_ERROR_GET_MOVIE_BY_ID",t.payload),Object(p.a)(Object(p.a)({},e),{},{currentMovie:null,loading:!1});case y:return console.log("MOVIE_ON_GET_MOVIE_BY_ID",t.payload),Object(p.a)(Object(p.a)({},e),{},{currentMovie:t.payload,loading:!1});case E:return console.log("MOVIE_ON_START_GET_MOVIE_VIDEOS_BY_ID",t.payload),Object(p.a)(Object(p.a)({},e),{},{currentMovieVideos:[],loading:!0});case I:return console.log("MOVIE_ON_ERROR_GET_MOVIE_VIDEOS_BY_ID",t.payload),Object(p.a)(Object(p.a)({},e),{},{currentMovieVideos:[],loading:!1});case R:return console.log("MOVIE_ON_GET_MOVIE_VIDEOS_BY_ID",t.payload),Object(p.a)(Object(p.a)({},e),{},{currentMovieVideos:t.payload,loading:!1});case M:return console.log("MOVIE_ON_ADD_TO_FAVORITES",t.payload),Object(p.a)(Object(p.a)({},e),{},{movieFavoritesArr:[].concat(Object(u.a)(e.movieFavoritesArr),[t.payload])});case T:return console.log("MOVIE_ON_REMOVE_FROM_FAVORITES",t.payload),Object(p.a)(Object(p.a)({},e),{},{movieFavoritesArr:e.movieFavoritesArr.filter((function(e){return e!==t.payload}))});case N:return console.log("MOVIE_ON_ADD_TO_WATCHLIST",t.payload),Object(p.a)(Object(p.a)({},e),{},{movieWatchlist:[].concat(Object(u.a)(e.movieWatchlist),[t.payload])});case V:return console.log("MOVIE_ON_REMOVE_FROM_WATCHLIST",t.payload),Object(p.a)(Object(p.a)({},e),{},{movieWatchlist:e.movieWatchlist.filter((function(e){return e.id!==t.payload}))});default:return e}},A=function(e){return Object(d.b)({router:Object(r.b)(e),Movies:C})},D=Object(l.a)(),w=[j.a,Object(O.routerMiddleware)(D)],F=d.c.apply(void 0,[d.a.apply(void 0,w)].concat([])),G=Object(d.d)(Object(O.connectRouter)(D)(A(D)),F),B=a(77),W=a(49),k=a(132),H=a(131),Y=a(18),L=a(276),z=a(129),P=Object(z.a)({palette:{type:"light",primary:{main:"#ef5350"},secondary:{main:"#b0bec5"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),U=a(13),J=a(85),q=a(287),K=a(288),Q=a(289),X=a(279),Z=a(71),$=a(290),ee=a(286),te=a(278),ae=a(271),ne=a(250),ce=a(253),oe=a(263),ie=a(266),re=a(262),se=a(261),le=a(124),de=a.n(le).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"2ce5d470e8093da0bda93516898bb220"},headers:{"Content-Type":"application/json"}}),Oe=function(e,t){return function(a){a({type:b}),de.get("search/movie",{params:{query:e,page:t}}).then((function(e){var t=e.data;a(t?{type:h,payload:t}:{type:m})})).catch((function(e){a({type:m,payload:e})}))}},je=function(e){return function(t){t({type:v}),de.get("trending/movie/week",{params:{page:e}}).then((function(e){var a=e.data;t(a?{type:_,payload:a}:{type:x})})).catch((function(e){t({type:x,payload:e})}))}},ue=a(264),pe=a(265),be=a(246),me=a(1),he=Object(ie.a)({searchFeild:{maxWidth:400}});function ve(e){var t=he(),a=c.a.useState(e.value),n=Object(U.a)(a,2),o=n[0],i=n[1];return c.a.useEffect((function(){i(e.value)}),[e.value]),Object(me.jsx)(pe.a,{className:t.searchFeild,fullWidth:!0,size:"small",value:o,placeholder:"Search...",onKeyDown:function(t){13===t.keyCode&&""!==o&&e.handleSearch(o)},onChange:function(e){return i(e.target.value)},InputProps:{endAdornment:Object(me.jsx)(X.a,{onClick:function(){return""!==o?e.handleSearch(o):console.log("So search param")},children:Object(me.jsx)(be.a,{})})}})}var xe=a(274),_e=a(267),fe=a(40),ge=a(284),ye=a(285),Ee=a(270),Ie=a(130),Re=a(273),Me=a(247),Te=a(248),Ne=a(249),Ve=a(251),Se=a(252),Ce=Object(ie.a)({cardActions:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 5px 5px 10px"}});function Ae(e){var t,a=Ce(),n=Object(s.useDispatch)(),o=Object(s.useSelector)((function(e){return e.Movies.movieFavoritesArr})),i=Object(s.useSelector)((function(e){return e.Movies.movieWatchlist})),r=c.a.useState(i.find((function(t){return t.id===e.movie.id}))),l=Object(U.a)(r,2),d=l[0],O=l[1],j=c.a.useState(null),u=Object(U.a)(j,2),p=u[0],b=u[1],m=Boolean(p);return Object(me.jsxs)(me.Fragment,{children:[Object(me.jsxs)("div",{className:a.cardActions,children:[Object(me.jsx)(Ee.a,{name:"read-only",value:(t=e.movie.vote_average,t/10*5),readOnly:!0,precision:.1}),Object(me.jsxs)("div",{children:[Object(me.jsx)(ue.a,{title:"Add to favorites","arial-label":"Add to favorites",children:Object(me.jsx)(X.a,{color:"primary",size:"small",onClick:function(){var t,a=o.find((function(t){return t===e.movie.id}));n(a?function(e){return function(t){t({type:T,payload:e})}}(e.movie.id):(t=e.movie.id,function(e){e({type:M,payload:t})}))},children:o.find((function(t){return t===e.movie.id}))?Object(me.jsx)(Me.a,{}):Object(me.jsx)(Te.a,{})})}),Object(me.jsx)(ue.a,{title:"More actions","arial-label":"More actions",children:Object(me.jsx)(X.a,{color:"primary",size:"small",onClick:function(t){b(t.currentTarget),O(i.find((function(t){return t.id===e.movie.id})))},children:Object(me.jsx)(Ne.a,{})})})]})]}),Object(me.jsx)(Ie.a,{id:"basic-menu",anchorEl:p,open:m,onClose:function(){b(null)},children:Object(me.jsxs)(Re.a,{onClick:function(){b(null);var t,a,c=i.find((function(t){return t.id===e.movie.id}));n(c?(t=e.movie.id,function(e){e({type:V,payload:t})}):(a=e.movie,function(e){e({type:N,payload:a})}))},children:[Object(me.jsx)(ne.a,{children:d?Object(me.jsx)(Ve.a,{fontSize:"small"}):Object(me.jsx)(Se.a,{fontSize:"small"})}),Object(me.jsx)(ce.a,{children:d?"Remove from watchlist":"Add to watchlist"})]})})]})}var De=a(255),we=a(280),Fe=a(257),Ge=a(281),Be=a(282),We=a(275),ke=a(283),He=a(256),Ye=c.a.forwardRef((function(e,t){return Object(me.jsx)(De.a,Object(p.a)({direction:"up",ref:t},e))})),Le=Object(ie.a)({closeBtn:{position:"absolute !important",top:10,right:10},movieTitle:{paddingTop:"0px !important"},movieControllerContainer:{padding:"0 8px"},imgBackdrop:{minHeight:50},videoContainer:{position:"relative",width:"100%",height:0,paddingTop:"60%"},video:{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%"},genre:{marginRight:5,marginBottom:5},releaseDate:{marginBottom:"5px !important"}});function ze(e){var t=Le(),a=Object(s.useSelector)((function(e){return e.Movies.currentMovie})),n=Object(s.useSelector)((function(e){return e.Movies.currentMovieVideos})),c=function(){e.setOpen(!1)};return Object(fe.isNull)(a)?"":Object(me.jsxs)(we.a,{open:e.open,TransitionComponent:Ye,keepMounted:!0,onClose:c,fullWidth:!0,maxWidth:"md","aria-describedby":"alert-dialog-slide-description",children:[Object(me.jsx)(X.a,{onClick:c,className:t.closeBtn,color:"secondary",children:Object(me.jsx)(He.a,{})}),Object(fe.isEmpty)(n)?Object(me.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path),alt:a.title,className:t.imgBackdrop}):Object(me.jsx)("div",{className:t.videoContainer,children:e.open?Object(me.jsx)("iframe",{title:"dialog-video",id:"video",src:function(){var e=n.find((function(e){return"Trailer"===e.type}));switch(Object(fe.isUndefined)(e)&&(e=n[0]),e.site){case"YouTube":return"https://www.youtube.com/embed/".concat(e.key);case"Vimeo":return"https://player.vimeo.com/video/".concat(e.key);default:return""}}(),frameBorder:"0",allow:"autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,autoPlay:!0,className:t.video}):""}),Object(me.jsx)("div",{className:t.movieControllerContainer,children:Object(me.jsx)(Ae,Object(p.a)({},e))}),Object(me.jsx)(Fe.a,{className:t.movieTitle,children:a.title}),Object(me.jsx)(Ge.a,{"data-testid":"movie-dialog",children:Object(me.jsxs)(xe.a,{container:!0,spacing:2,children:[Object(me.jsx)(xe.a,{item:!0,xs:12,sm:8,md:9,children:Object(me.jsx)(Be.a,{id:"alert-dialog-slide-description",children:a.overview})}),Object(me.jsxs)(xe.a,{item:!0,xs:12,sm:4,md:3,children:[Object(me.jsxs)(Z.a,{className:t.releaseDate,children:["Release",": ".concat(a.release_date)]}),Object(me.jsxs)(Z.a,{children:[Object(me.jsx)("span",{children:"Genres: "}),Object(fe.isEmpty)(a.genres)?"":a.genres.map((function(e){return Object(me.jsx)(We.a,{label:e.name,size:"small",className:t.genre})}))]})]})]})}),Object(me.jsx)(ke.a,{})]})}var Pe=Object(ie.a)({card:{position:"relative","&:hover":{boxShadow:"0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"}},cardMedia:{"&:hover":{cursor:"pointer"}}});function Ue(e){var t=Object(s.useDispatch)(),a=Pe(),n=c.a.useState(!1),o=Object(U.a)(n,2),i=o[0],r=o[1];return Object(me.jsxs)(me.Fragment,{children:[Object(me.jsx)(xe.a,{item:!0,lg:3,md:4,sm:6,xs:12,"data-testid":"movie-grid-child",children:Object(me.jsxs)(ge.a,{className:a.card,children:[Object(me.jsx)(ye.a,{className:a.cardMedia,"data-testid":"movie-cardmedia-"+e.movie.id,onClick:function(){var a;t((a=e.movie.id,function(e){e({type:f}),de.get("movie/".concat(a),{params:{}}).then((function(t){var a=t.data;e(a?{type:y,payload:a}:{type:g})})).catch((function(t){e({type:g,payload:t})}))})),t(function(e){return function(t){t({type:E}),de.get("movie/".concat(e,"/videos"),{params:{}}).then((function(e){var a=e.data;t(a?{type:R,payload:a.results}:{type:I})})).catch((function(e){t({type:I,payload:e})}))}}(e.movie.id)),r(!0)},component:"img",height:"440",image:"https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path),alt:e.movie.title}),Object(me.jsx)(Ae,Object(p.a)({},e))]})}),Object(me.jsx)(ze,Object(p.a)(Object(p.a)({},e),{},{open:i,setOpen:r}))]})}var Je=Object(ie.a)({gridContainer:{paddingTop:"2rem",paddingBottom:"2rem"}});function qe(e){var t,a=Je(),n=c.a.useState(e.page),o=Object(U.a)(n,2),i=o[0],r=o[1];return c.a.useEffect((function(){r(e.page)}),[e.page]),Object(me.jsx)("div",{className:a.gridContainer,children:Object(me.jsxs)(xe.a,{container:!0,spacing:2,children:[Object(fe.isEmpty)(e.movies)?"":e.movies.map((function(e,t){return Object(me.jsx)(Ue,{movie:e},t)})),Object(fe.isUndefined)(e.page)||Object(fe.isUndefined)(e.handleSetPage)?"":Object(me.jsx)(xe.a,{item:!0,xs:12,container:!0,justifyContent:"center",children:Object(me.jsx)(_e.a,{count:(t=e.count,Math.ceil(t/20)),color:"primary",page:i,onChange:function(t,a){r(a),e.handleSetPage(a)}})})]})})}var Ke=a(258),Qe=a(259),Xe=a(260),Ze=Object(ie.a)({clearButton:{marginLeft:"8px !important"},title:{marginLeft:8}});var $e=Object(ie.a)({clearButton:{marginLeft:"8px !important"},title:{marginLeft:8}});var et=Object(ie.a)({container:{display:"flex",alignItems:"center",justifyContent:"center"},pageNotFoundTitle:{fontSize:40,fontWeight:"bold"}});var tt=[{text:"Home",icon:Object(me.jsx)(re.a,{}),component:function(){var e=Ze(),t=Object(s.useDispatch)(),a=c.a.useState(""),n=Object(U.a)(a,2),o=n[0],i=n[1],r=c.a.useState(1),l=Object(U.a)(r,2),d=l[0],O=l[1],j=Object(s.useSelector)((function(e){return e.Movies.movieResults})),u=Object(s.useSelector)((function(e){return e.Movies.movieResultsCount}));return c.a.useEffect((function(){t(je())}),[t]),Object(me.jsxs)(me.Fragment,{children:[Object(me.jsxs)(ee.a,{sx:{display:"flex",alignItems:{xs:"flex-start",sm:"center"},justifyContent:"space-between",flexDirection:{xs:"column-reverse",sm:"row"}},children:[Object(me.jsxs)(ee.a,{sx:{marginTop:{xs:"15px",sm:0},display:"flex",alignItems:"center"},children:[""===o?Object(me.jsx)(Ke.a,{color:"dark"}):Object(me.jsx)(Qe.a,{color:"primary"}),Object(me.jsxs)(Z.a,{variant:"h6",children:[Object(me.jsx)("span",{className:e.title,children:""===o?"Trending":'Search results for "'.concat(o,'"')}),""===o?"":Object(me.jsx)(ue.a,{title:"Clear search!","aria-label":"Clear search!",children:Object(me.jsx)(X.a,{size:"small",className:e.clearButton,onClick:function(){i(""),O(1),t(je(1))},children:Object(me.jsx)(Xe.a,{})})})]})]}),Object(me.jsx)(ve,{handleSearch:function(e){i(e),O(1),t(Oe(e,1))},value:o})]}),Object(me.jsx)(qe,{page:d,handleSetPage:function(e){O(e),t(""===o?je(e):Oe(o,e))},movies:j,count:u})]})},path:"/",exact:!0},{text:"Watchlater",icon:Object(me.jsx)(se.a,{}),component:function(){var e=$e(),t=Object(s.useSelector)((function(e){return e.Movies.movieWatchlist}));return Object(me.jsxs)(me.Fragment,{children:[Object(me.jsx)(xe.a,{container:!0,children:Object(me.jsx)(xe.a,{item:!0,xs:12,sm:8,children:Object(me.jsxs)(ee.a,{sx:{display:"flex",alignItems:"center"},children:[Object(me.jsx)(se.a,{}),Object(me.jsx)(Z.a,{variant:"h6",children:Object(me.jsx)("span",{className:e.title,children:"Watchlist"})})]})})}),Object(me.jsx)(qe,{movies:t})]})},path:"/watchlater",exact:!0},{text:"PageNotFound",icon:Object(me.jsx)(se.a,{}),component:function(){var e=et();return Object(me.jsx)("div",{className:e.container,children:Object(me.jsx)("h1",{className:e.pageNotFoundTitle,children:"404 not found..."})})},path:"*",exact:!0}],at=Object(ie.a)({_toolbar:{paddingLeft:"0px !important"},logo:{paddingLeft:10,color:"white",textDecoration:"none","&:active":{color:"white"}},container:{padding:"0 16px !important"}});function nt(){var e=at(),t=c.a.useState(!1),a=Object(U.a)(t,2),n=a[0],o=a[1],i=function(){o(!1)};return Object(me.jsxs)(me.Fragment,{children:[Object(me.jsx)(q.a,{color:"primary",position:"sticky",children:Object(me.jsx)(K.a,{maxWidth:"lg",className:e.container,children:Object(me.jsxs)(Q.a,{variant:"dense",className:e._toolbar,children:[Object(me.jsx)(X.a,{color:"inherit",onClick:function(){o(!0)},children:Object(me.jsx)(oe.a,{})}),Object(me.jsx)(Z.a,{variant:"h6",noWrap:!0,component:"div",children:Object(me.jsx)(J.a,{to:"/",className:e.logo,children:"MovieGalaxy"})})]})})}),Object(me.jsx)($.a,{anchor:"left",open:n,onClose:i,children:Object(me.jsx)(ee.a,{sx:{width:250,paddingTop:5},children:Object(me.jsx)(te.a,{children:tt.map((function(e,t){return"*"===e.path?"":Object(me.jsxs)(ae.a,{button:!0,component:J.a,onClick:i,to:e.path,selected:e.path===D.location.pathname,children:[Object(me.jsx)(ne.a,{children:e.icon}),Object(me.jsx)(ce.a,{primary:e.text})]},t)}))})})})]})}var ct=Object(ie.a)({container:{paddingTop:"2rem",minHeight:"calc(100vh - 48px)"}});function ot(e){var t=ct();return Object(me.jsx)(K.a,{maxWidth:"lg",className:t.container,children:e.children})}var it=function(e){Object(k.a)(a,e);var t=Object(H.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){return Object(me.jsxs)(L.a,{theme:P,children:[Object(me.jsx)(nt,{}),Object(me.jsx)(ot,{children:Object(me.jsx)(Y.Switch,{children:tt.map((function(e,t){return Object(me.jsx)(Y.Route,{exact:e.exact,path:e.path,component:e.component},t)}))})})]})}}]),a}(n.Component),rt=Object(Y.withRouter)(it);var st=function(){return Object(me.jsx)(s.Provider,{store:G,children:Object(me.jsx)(r.a,{history:D,children:Object(me.jsx)(rt,{})})})};i.a.render(Object(me.jsx)(c.a.StrictMode,{children:Object(me.jsx)(st,{})}),document.getElementById("root"))}},[[192,1,2]]]);
//# sourceMappingURL=main.c117bad4.chunk.js.map