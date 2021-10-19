var L=Object.defineProperty;var O=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var S=(i,a,n)=>a in i?L(i,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[a]=n,N=(i,a)=>{for(var n in a||(a={}))D.call(a,n)&&S(i,n,a[n]);if(O)for(var n of O(a))H.call(a,n)&&S(i,n,a[n]);return i};import{c as T,j as P,w as W,L as $,m,C as y,a as E,A as h,b as f,R as q,I as b,d as p,e as M,f as I,g as A,h as C,r as z,D as B,B as x,F as G,i as Q,k as R,u as _,l as J,n as K,o as V,T as X,M as U,p as u,q as Y,s as Z,t as k,v as ee,x as ie,_ as ae,S as se,y as te,z as ne,E as re}from"./vendor.7c72ec30.js";const ue=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};ue();const l={50:"#ceebec",100:"#9dd8d9",200:"#85ced0",300:"#54babd",400:"#3cb1b3",500:"#0b9da0",600:"#0a8d90",700:"#097e80",800:"#086e70",900:"#075e60",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"},v="#f7f7f7",j={textColor:"#393939",LMSWhiteBackground:"#fafafa",codeQuestion:{testCaseResultBackground:v},blankQuestion:{inputBgColor:v,blankBgColor:"#93dde6",blankBorderColor:"#0ba7aa",droppedBlankBgColor:"#e3e3e3"},multipleChoiceQuestion:{choiceBg:v},numericResponseQuestion:{answerFieldBg:v},selectedComponent:{bgColor:v},yellow:"#ffd13f",darkGray:"#6D6D6D",kournikova:"#ffdc6f",lightGray:"#C5C5C5",sandGray:"#ECEDEE",failed:"#EE4266",passed:"#2AE99E",black:"#000000",white:"#fff",azure:"#f0fffc",mediumGray:"#c6c6c6"};var oe=T({palette:{primary:{light:l[50],main:l[500],dark:l[900]}},colors:j,boxShadow:"0 2px 20px 0 rgba(0, 0, 0, 0.08)",fibBoxShadow:"0 0 15px 0 rgba(0, 0, 0, 0.12)",overrides:{MuiCard:{root:{boxShadow:"0px 3px 9px rgba(0, 0, 0, 8.3%);",borderRadius:"8px"}},MuiPickersToolbar:{toolbar:{backgroundColor:l[400]}},MuiPickersCalendarHeader:{switchHeader:{}},MuiPaper:{root:{boxShadow:"0px 3px 9px rgba(0, 0, 0, 8.3%);",borderRadius:"8px"},elevation1:{boxShadow:"0px 3px 9px rgba(0, 0, 0, 8.3%);"}},MuiPickersDay:{day:{color:"#000"},daySelected:{backgroundColor:l[400]},dayDisabled:{color:l[100]},current:{color:l[900]}},MuiPickersModal:{dialogAction:{color:l[400]}},MuiTypography:{root:{color:j.textColor}}},direction:"ltr",typography:{fontFamily:"tajawal,Open Sans,serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});const e=P.exports.jsx,c=P.exports.jsxs,le=P.exports.Fragment,ce=W(i=>({root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:i.palette.grey[i.palette.type==="light"?200:700]},bar:{borderRadius:5,backgroundColor:"#097e80"}}))($);m(i=>({root:{position:"relative"},bottom:{color:i.palette.grey[i.palette.type==="light"?200:700]},top:{color:"#097e80",animationDuration:"550ms",position:"absolute",left:0},circle:{strokeLinecap:"round"}}));const de=m({root:{flexGrow:1}});function me(){const i=de();return c("div",{className:i.root,children:[e("h1",{children:"50%"}),e(ce,{variant:"determinate",value:50})]})}const pe=m(i=>({root:{marginTop:10,marginBottom:10},header:{whiteSpace:"pre-wrap",padding:10},avatar:{backgroundColor:({completed:a})=>a?"#097e80":"inherit",width:30,height:30,border:({completed:a})=>a?"#097e80 solid 2px":"#097e80 dashed 2px"}}));function ge({text:i,open:a,completed:n}){const t=pe({completed:n});return e(y,{className:t.root,onClick:s=>{s.stopPropagation(),s.nativeEvent.stopImmediatePropagation()},children:e(E,{onClick:s=>{s.stopPropagation(),s.nativeEvent.stopImmediatePropagation()},className:t.header,avatar:e(h,{"aria-label":"recipe",className:t.avatar,children:n?e(f,{}):""}),title:i})})}const ve=m(i=>({root:{cursor:"pointer"},header:{whiteSpace:"pre-wrap",padding:10},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:i.transitions.create("transform",{duration:i.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:({completed:a})=>a?"#097e80":"inherit",width:30,height:30,border:({completed:a})=>a?"#097e80 solid 2px":"#097e80 dashed 2px"}}));function he({text:i,open:a,completed:n}){const t=ve({completed:n}),[s,r]=q.useState(!1),o=d=>{a&&(d.stopPropagation(),d.nativeEvent.stopImmediatePropagation(),r(!s))};return c(y,{className:t.root,children:[e(E,{onClick:s?()=>{}:o,className:t.header,avatar:e(h,{"aria-label":"recipe",className:t.avatar,children:n?e(f,{}):""}),action:e(b,{className:p(t.expand,{[t.expandOpen]:s}),onClick:o,children:e(M,{})}),title:i}),e(I,{in:s,timeout:"auto",unmountOnExit:!0,children:e(A,{children:Array.from({length:5}).map((d,g)=>e(ge,{open:a,text:C.exports.name.jobTitle(),completed:g%2==0},g))})})]})}const fe=m(i=>({root:{cursor:"pointer"},header:{whiteSpace:"pre-wrap",padding:10},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:i.transitions.create("transform",{duration:i.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:({completed:a})=>a?"#097e80":"inherit",width:30,height:30,border:({completed:a})=>a?"#097e80 solid 2px":"#097e80 dashed 2px"},cardOnly:{padding:10,display:"flex",justifyContent:"center",alignItems:"center",cursor:"inherit"}}));function F({text:i,completed:a,open:n}){const t=fe({completed:a}),[s,r]=q.useState(!1);z.exports.useEffect(()=>{!n&&s&&r(!1)},[n]);const o=d=>{n&&(d.stopPropagation(),d.nativeEvent.stopImmediatePropagation(),r(!s))};return e(y,{className:n?t.root:t.cardOnly,children:n?c(le,{children:[" ",e(E,{onClick:s?()=>{}:o,className:t.header,avatar:e(h,{"aria-label":"recipe",className:t.avatar,children:a?e(f,{}):""}),action:e(b,{className:p(t.expand,{[t.expandOpen]:s}),children:e(M,{})}),title:i}),e(I,{in:s,timeout:"auto",unmountOnExit:!0,children:e(A,{children:e(he,{text:C.exports.name.firstName(),open:n,completed:a})})})]}):e(h,{"aria-label":"recipe",className:t.avatar,children:a?e(f,{}):""})})}const qe=m({root:{width:"100%"}}),be=({open:i,setOpen:a})=>(qe(),c(B,{type:"temporary",open:i,style:{width:"100%"},children:[e(x,{display:"flex",justifyContent:"end",onClick:()=>a(!1),children:e(G,{size:"small",color:"secondary",children:e(Q,{})})}),e(R,{children:["Inbox","Starred","Send email","Drafts"].map((n,t)=>e(x,{p:1,children:e(F,{text:C.exports.name.jobTitle(),completed:t%2==0,open:i})},t))})]})),w=400,Ce=m(i=>({root:{display:"flex"},appBar:{background:"#097e80",zIndex:i.zIndex.drawer+1,transition:i.transitions.create(["width","margin"],{easing:i.transitions.easing.sharp,duration:i.transitions.duration.leavingScreen}),borderRadius:0,color:"#fff"},appBarShift:{marginLeft:w,width:`calc(100% - ${w}px)`,transition:i.transitions.create(["width","margin"],{easing:i.transitions.easing.sharp,duration:i.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:w,flexShrink:0,whiteSpace:"nowrap"},t:{color:"white",paddingLeft:10,paddingRight:10},drawerOpen:{width:w,transition:i.transitions.create("width",{easing:i.transitions.easing.sharp,duration:i.transitions.duration.enteringScreen})},drawerClose:{transition:i.transitions.create("width",{easing:i.transitions.easing.sharp,duration:i.transitions.duration.leavingScreen}),overflowX:"hidden",width:i.spacing(7)+1,[i.breakpoints.up("sm")]:{width:i.spacing(9)+1}},toolbar:N({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:i.spacing(0,1)},i.mixins.toolbar),content:{flexGrow:1,padding:i.spacing(3)}}));function xe(){const i=Ce(),a=_(),n=J(a.breakpoints.down("md")),[t,s]=q.useState(n),r=()=>{s(!0)},o=()=>{s(!1)};return c("div",{className:i.root,children:[e(K,{}),e(V,{variant:"outlined",position:"fixed",className:p(i.appBar,{[i.appBarShift]:n?!1:t}),children:c(X,{children:[e(b,{color:"inherit","aria-label":"open drawer",onClick:r,edge:"start",className:p(i.menuButton,{[i.hide]:t}),children:e(U,{})}),e(u,{className:i.t,variant:"h6",noWrap:!0,children:e("img",{src:"https://emojis.slackmojis.com/emojis/images/1517898183/3499/hidethepain.png?1517898183",width:"20",height:"20"})}),e(u,{className:i.t,variant:"h6",noWrap:!0,children:e("img",{src:"https://emojis.slackmojis.com/emojis/images/1517898183/3499/hidethepain.png?1517898183",width:"20",height:"20"})}),e(u,{className:i.t,variant:"h6",noWrap:!0,children:e("img",{src:"https://emojis.slackmojis.com/emojis/images/1517898183/3499/hidethepain.png?1517898183",width:"20",height:"20"})})]})}),n?e(be,{open:t,setOpen:s}):c(B,{variant:"permanent",className:p(i.drawer,{[i.drawerOpen]:t,[i.drawerClose]:!t}),classes:{paper:p({[i.drawerOpen]:t,[i.drawerClose]:!t})},children:[e("div",{className:i.toolbar,children:e(b,{onClick:o,children:a.direction==="rtl"?e(Y,{}):e(Z,{})})}),e(k,{}),t&&e(x,{p:2,children:e(me,{})}),e(k,{}),e(R,{children:["Inbox","Starred","Send email","Drafts"].map((d,g)=>e(x,{p:1,children:e(F,{text:C.exports.name.jobTitle(),completed:g%2==0,open:t})},g))}),e(k,{})]}),c("main",{className:i.content,children:[e("div",{className:i.toolbar}),e(u,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),e(u,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]})]})}const we=ee({plugins:[...ie().plugins,ae()]}),Pe=()=>e(se,{children:e(te,{jss:we,children:e(ne,{theme:oe,children:e(xe,{})})})});re.render(e(q.StrictMode,{children:e(Pe,{})}),document.getElementById("root"));
