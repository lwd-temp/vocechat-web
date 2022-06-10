"use strict";(globalThis.webpackChunkrustchat_web=globalThis.webpackChunkrustchat_web||[]).push([[556],{8140:(e,t,i)=>{i.d(t,{Z:()=>r});var n,l,a=i(7313);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s.apply(this,arguments)}const o=(e,t)=>{let{title:i,titleId:o,...r}=e;return a.createElement("svg",s({width:16,height:12,viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},r),i?a.createElement("title",{id:o},i):null,n||(n=a.createElement("g",{clipPath:"url(#clip0_9046_23916)"},a.createElement("path",{d:"M4.93942 9.69781L1.62578 6.38648C1.25336 6.01431 0.651746 6.01431 0.27932 6.38648C-0.0931066 6.75865 -0.0931066 7.35984 0.27932 7.73201L4.27096 11.7209C4.64339 12.093 5.245 12.093 5.61743 11.7209L15.7207 1.62465C16.0931 1.25248 16.0931 0.651292 15.7207 0.279125C15.3483 -0.0930417 14.7466 -0.0930417 14.3742 0.279125L4.93942 9.69781Z",fill:"#78787C"}))),l||(l=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_9046_23916"},a.createElement("rect",{width:16,height:12,fill:"white"})))))},r=(0,a.forwardRef)(o)},7814:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(7313),l=i(9184),a=i(5536);const s=i.p+"static/media/upload.image.9f8c7fc90042d2ff4eb7.svg";var o=i(6417);const r=l.ZP.div`
  width: 96px;
  height: 96px;
  position: relative;
  cursor: pointer;
  .avatar {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
    /* border: 1px solid #eee; */
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    input[type="file"] {
      cursor: pointer;
      display: block;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .tip {
      white-space: nowrap;
      padding: 4px;
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      line-height: 18px;
    }
    &:hover .tip {
      display: flex;
    }
  }
  .icon {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;function c(e){let{url:t="",name:i="",type:l="user",uploadImage:c,disabled:d=!1}=e;const[p,x]=(0,n.useState)(!1);return(0,o.jsxs)(r,{children:[(0,o.jsxs)("div",{className:"avatar",children:[(0,o.jsx)(a.Z,{type:l,url:t,name:i}),!d&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"tip",children:p?"Uploading":"Change Avatar"}),(0,o.jsx)("input",{multiple:!1,onChange:async e=>{if(p)return;const[t]=e.target.files;x(!0),await c(t),x(!1)},type:"file",accept:"image/*",name:"avatar",id:"avatar"})]})]}),!d&&(0,o.jsx)("img",{src:s,alt:"icon",className:"icon"})]})}},11:(e,t,i)=>{i.d(t,{Z:()=>_});var n=i(7313),l=i(9184),a=i(2963),s=i(9784),o=i(3709),r=i(3657),c=i(6432),d=i(4527),p=i(8198),x=i(5120),h=i(8648),m=i(1296),g=i(6417);const f=l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 32px;
  .tip {
    font-weight: 500;
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 8px;
  }
  .link {
    width: 512px;
    margin-bottom: 12px;
    position: relative;
    button {
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      padding-right: 75px;
    }
  }
  .sub_tip {
    margin-left: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #616161;
    margin-bottom: 20px;
  }
`;function u(){const{generating:e,link:t,linkCopied:i,copyLink:n,generateNewLink:l}=(0,x.Z)();return(0,g.jsxs)(f,{children:[(0,g.jsx)("span",{className:"tip",children:"Share this link to invite people to this server."}),(0,g.jsxs)("div",{className:"link",children:[(0,g.jsx)(h.Z,{readOnly:!0,className:"large",placeholder:"Generating",value:t}),(0,g.jsx)(m.Z,{onClick:n,className:"ghost small border_less",children:i?"Copied":"Copy"})]}),(0,g.jsx)("span",{className:"sub_tip",children:"Invite link expires in 7 days."}),(0,g.jsx)(m.Z,{className:"ghost",disabled:e,onClick:()=>{l()},children:e?"Generating":"Generate New Link"})]})}var b,v,w=i(169),j=i(8214);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},y.apply(this,arguments)}const k=(e,t)=>{let{title:i,titleId:l,...a}=e;return n.createElement("svg",y({width:6,height:6,viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},a),i?n.createElement("title",{id:l},i):null,b||(b=n.createElement("rect",{opacity:.01,width:6,height:6,fill:"#D8D8D8"})),v||(v=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.62506 1.64911C5.41795 1.4503 5.08216 1.45029 4.87506 1.64911L3.00003 3.44911L1.12506 1.64916C0.917951 1.45034 0.582164 1.45034 0.375057 1.64916C0.16795 1.84798 0.16795 2.17033 0.375057 2.36915L2.62506 4.52912C2.83217 4.72794 3.16795 4.72794 3.37506 4.52912C3.37665 4.5276 3.37822 4.52608 3.37977 4.52454L5.62506 2.36911C5.83216 2.17029 5.83216 1.84793 5.62506 1.64911Z",fill:"black",fillOpacity:.5})))},N=(0,n.forwardRef)(k);var C=i(8140),Z=i(7054);const z=l.ZP.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .intro {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    .title {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #374151;
    }
    .desc {
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
    }
  }
  .members {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 512px;
    margin-bottom: 176px;
    .member {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      border-radius: var(--br);
      &:hover {
        background: #f9fafb;
      }
      .left {
        display: flex;
        gap: 8px;
        .info {
          display: flex;
          flex-direction: column;
          .name {
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;
            color: #52525b;
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .email {
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: #52525b;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        gap: 28px;
        .role {
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          text-align: right;
          color: #616161;
          display: flex;
          align-items: center;
          gap: 4px;
          > .icon {
            cursor: pointer;
          }
          /* override */
          .menu {
            min-width: 120px;
            .item .icon {
              width: 16px;
              height: 12px;
            }
          }
        }
        .opts {
          position: relative;
          width: 24px;
          height: 24px;
          .dots {
            cursor: pointer;
          }
          .menu {
            position: absolute;
          }
        }
      }
    }
  }
`;function _(e){var t;let{cid:i=null}=e;const{contacts:l,channels:x,loginUser:h}=(0,o.v9)((e=>({contacts:e.contacts,channels:e.channels,loginUser:e.contacts.byId[e.authData.uid]}))),{copyEmail:m,removeFromChannel:f,removeUser:b,canRemove:v,canRemoveFromChannel:y}=(0,Z.Z)({cid:i}),[k,{isSuccess:_}]=(0,c.wv)();(0,n.useEffect)((()=>{_&&r.ZP.success("Update Successfully")}),[_]);const E=e=>{let{ignore:t=!1,uid:i=null,isAdmin:n=!0}=e;(0,s.Bn)(),t||k({id:i,is_admin:n})},P=null!==(t=x.byId[i])&&void 0!==t?t:null,L=P?P.is_public?l.ids:P.members:l.ids;return(0,g.jsxs)(z,{children:[(null===h||void 0===h?void 0:h.is_admin)&&(0,g.jsx)(u,{}),(0,g.jsxs)("div",{className:"intro",children:[(0,g.jsx)("h4",{className:"title",children:"Manage Members"}),(0,g.jsx)("p",{className:"desc",children:"Disabling your account means you can recover it at any time after taking this action."})]}),(0,g.jsx)("ul",{className:"members",children:L.map((e=>{const{name:t,email:n,is_admin:s}=l.byId[e],o=P&&P.owner==e,r=h.is_admin&&h.uid!==e,c=n||(null===h||void 0===h?void 0:h.is_admin);return(0,g.jsxs)("li",{className:"member",children:[(0,g.jsxs)("div",{className:"left",children:[(0,g.jsx)(d.Z,{compact:!0,uid:e,interactive:!1}),(0,g.jsxs)("div",{className:"info",children:[(0,g.jsxs)("span",{className:"name",children:[t," ",o&&(0,g.jsx)(j.Z,{})]}),(0,g.jsx)("span",{className:"email",children:n})]})]}),(0,g.jsxs)("div",{className:"right",children:[(0,g.jsxs)("span",{className:"role",children:[s?"Admin":"User",r&&(0,g.jsx)(a.ZP,{interactive:!0,placement:"bottom-end",trigger:"click",content:(0,g.jsxs)(p.Z,{className:"menu",children:[(0,g.jsxs)("li",{className:"item sb",onClick:E.bind(null,{ignore:s,uid:e,isAdmin:!0}),children:["Admin",s&&(0,g.jsx)(C.Z,{className:"icon"})]}),(0,g.jsxs)("li",{className:"item sb",onClick:E.bind(null,{ignore:!s,uid:e,isAdmin:!1}),children:["User",!s&&(0,g.jsx)(C.Z,{className:"icon"})]})]}),children:(0,g.jsx)(N,{className:"icon"})})]}),c&&(0,g.jsx)(a.ZP,{interactive:!0,placement:"right-start",trigger:"click",content:(0,g.jsxs)(p.Z,{className:"menu",children:[n&&(0,g.jsx)("li",{className:"item",onClick:m.bind(null,n),children:"Copy Email"}),y&&(0,g.jsx)("li",{className:"item danger",onClick:f.bind(null,e),children:"Remove From Channel"}),v&&!i&&(0,g.jsx)("li",{className:"item danger",onClick:b.bind(null,e),children:"Remove From Server"})]}),children:(0,g.jsx)("div",{className:"opts",children:(0,g.jsx)("img",{className:"dots",src:w,alt:"dots icon"})})})]})]},e)}))})]})}},5607:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(7313),l=i(1168);function a(e){let{id:t="root-modal",mask:i=!0,children:a}=e;const[s,o]=(0,n.useState)(null);return(0,n.useEffect)((()=>{const e=document.getElementById(t);i&&e.classList.add("mask");const n=document.createElement("div");return n.classList.add("wrapper"),e.appendChild(n),o(n),()=>{e.removeChild(n)}}),[t,i]),s?(0,l.createPortal)(a,s):null}},6567:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(9184),l=i(6417);const a=n.ZP.div`
  width: 100%;
  position: absolute;
  bottom: 64px;
  left: 0;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  background: #fff;
  /* gap: 20px; */
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 25px;
  .txt {
    padding: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 14px;
    .btn {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      padding: 8px 14px;
      background: #1fe1f9;
      border: 1px solid #1fe1f9;
      box-sizing: border-box;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 25px;
      &.reset {
        background: none;
        color: #667085;
        border: none;
        box-shadow: none;
      }
    }
  }
`;function s(e){let{saveHandler:t,resetHandler:i}=e;return(0,l.jsxs)(a,{className:"animate__animated animate__flipInX animate__faster",children:[(0,l.jsx)("span",{className:"txt",children:"You have unsaved changes!"}),(0,l.jsxs)("div",{className:"btns",children:[(0,l.jsx)("button",{className:"btn reset",onClick:i,children:"Reset"}),(0,l.jsx)("button",{className:"btn",onClick:t,children:"Save Changes"})]})]})}},1129:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(9184),l=i(9466),a=i(7890);const s=i.p+"static/media/arrow.left.92fbb139607631555459.svg";var o=i(6417);const r=n.ZP.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  > .left {
    max-height: 100vh;
    overflow: scroll;
    padding: 32px 16px;
    min-width: 212px;
    background-color: #f5f6f7;
    > .title {
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #1c1c1e;
      margin-bottom: 32px;
      padding-left: 24px;
      background: url(${s});
      background-size: 16px;
      background-repeat: no-repeat;
      background-position: left;
    }
    > .items {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 36px;
      &:before {
        padding-left: 12px;
        content: attr(data-title);
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        color: #6b7280;
        margin-bottom: 2px;
      }
      .item {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #44494f;
        border-radius: 4px;
        &:hover,
        &.curr {
          background: #e7e5e4;
        }
        > a {
          display: block;
          padding: 4px 12px;
        }
      }
      &.danger .item {
        cursor: pointer;
        padding: 4px 12px;
        color: #ef4444;
        &:hover {
          background: none;
        }
      }
    }
  }
  > .right {
    background-color: #fff;
    width: 100%;
    max-height: 100%;
    /* max-height: -webkit-fill-available; */
    overflow: auto;
    padding: 32px;
    > .title {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #374151;
      margin-bottom: 32px;
    }
  }
`;function c(e){let{closeModal:t,title:i="Settings",navs:n=[],dangers:s=[],nav:c,children:d}=e;const{pathname:p}=(0,a.TH)();return(0,o.jsxs)(r,{children:[(0,o.jsxs)("div",{className:"left",children:[(0,o.jsx)("h2",{onClick:t,className:"title",children:i}),n.map((e=>{let{title:t,items:i}=e;return(0,o.jsx)("ul",{"data-title":t,className:"items",children:i.map((e=>{let{name:t,title:i}=e;return(0,o.jsx)("li",{className:"item "+(t==(null===c||void 0===c?void 0:c.name)?"curr":""),children:(0,o.jsx)(l.OL,{to:`${p}?nav=${t}`,children:i})},t)}))},t)})),s.length?(0,o.jsx)("ul",{className:"items danger",children:s.map((e=>{if(!e)return null;const{title:t,handler:i}=e;return(0,o.jsx)("li",{onClick:i,className:"item",children:t},t)}))}):null]}),(0,o.jsxs)("div",{className:"right",children:[c&&(0,o.jsx)("h4",{className:"title",children:c.title}),d]})]})}},8648:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(7313),l=i(4901),a=i(9184),s=i(6417);const o=a.ZP.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  .prefix {
    padding: 8px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ca3af;
    background: #f3f4f6;
    border-right: 1px solid #e5e7eb;
  }
  .view {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`,r=a.ZP.input`
  width: 100%;
  background: #ffffff;

  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  padding: 8px;
  outline: none;
  &:not(.inner) {
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  }
  &.large {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 11px 8px;
  }
  &.none {
    outline: none;
    border: none;
    background: none;
    box-shadow: none;
  }
  &:disabled {
    color: #78787c;
    background-color: #f9fafb;
  }
  &::placeholder {
    color: #d1d5db;
  }
  &[type="password"] {
    padding-right: 30px;
  }
`;function c(e){let{type:t="text",prefix:i="",className:a,...c}=e;const[d,p]=(0,n.useState)(t);return"password"==t?(0,s.jsxs)(o,{className:a,children:[(0,s.jsx)(r,{type:d,className:`inner ${a}`,...c}),(0,s.jsx)("div",{className:"view",onClick:()=>{p((e=>"password"==e?"text":"password"))},children:"password"==d?(0,s.jsx)(l.MBb,{color:"#78787c"}):(0,s.jsx)(l.Rbo,{color:"#78787c"})})]}):i?(0,s.jsxs)(o,{className:a,children:[(0,s.jsx)("span",{className:"prefix",children:i}),(0,s.jsx)(r,{className:`inner ${a}`,type:d,...c})]}):(0,s.jsx)(r,{type:d,className:a,...c})}},1707:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i(9184).ZP.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #6b7280;
`},5845:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(9184),l=i(6417);const a=n.ZP.div`
  padding: 32px;
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 8px;
  background-color: #fff;
  min-width: 440px;
  &.compact {
    padding: 16px;
    min-width: 406px;
    .title,
    .desc {
      text-align: left;
    }
  }
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    color: #374151;
    margin-bottom: 16px;
  }
  .desc {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
    margin-bottom: 8px;
  }
  .btns {
    padding-top: 16px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
  }
`;function s(e){let{title:t="",description:i="",buttons:n=null,children:s,...o}=e;return(0,l.jsxs)(a,{...o,children:[t&&(0,l.jsx)("h3",{className:"title",children:t}),i&&(0,l.jsx)("p",{className:"desc",children:i}),s,n&&(0,l.jsx)("div",{className:"btns",children:n})]})}},4155:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i(9184).ZP.textarea`
  font-family: inherit;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  border-radius: 4px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  padding: 8px;
  color: #333;
  resize: unset;
  &:disabled {
    color: #78787c;
    background-color: #f9fafb;
  }
  &::placeholder {
    color: #d1d5db;
  }
`},5120:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(7313),l=i(1026),a=i(4695),s=i(5564);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const[t,i]=(0,n.useState)(""),{data:o,isSuccess:r}=(0,a.n8)(),[c,{data:d,isLoading:p}]=(0,s.CU)(),[x,{data:h,isLoading:m}]=(0,a.CU)(),{copied:g,copy:f}=(0,l.Z)({enableToast:!1}),u=()=>{f(t)};(0,n.useEffect)((()=>{e?c(e):x()}),[e]),(0,n.useEffect)((()=>{const e=h||d;e&&r&&i(e)}),[h,d,r]);const b=()=>{x()};return{enableSMTP:o,generating:e?p:m,generateNewLink:e?c.bind(null,e):b,link:t,linkCopied:g,copyLink:u}}},169:(e,t,i)=>{e.exports=i.p+"static/media/more.54cac536d52aae6f342e.svg"}}]);