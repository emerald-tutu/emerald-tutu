"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{7094:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(2598),i=r(7294),s=r(2299),c=r(5653),a=r(8459),o=r(1664),l=r(5893);function u(e){var t=e.page,r=e.otherPages,u=(0,i.useState)({isHidden:!0}),d=u[0],m=u[1],f=0;return(0,l.jsxs)("div",{id:"pheading",className:"site-container p-0 display-2 hidden-link w-auto text-center mb-4",children:[(0,l.jsx)("div",{className:"position-relative",style:{left:"50px"},children:(0,l.jsxs)("div",{id:"siteHeading",className:"site-heading display-1 d-flex",children:[(0,l.jsx)("div",{className:"mx-2 my-auto",children:(0,l.jsx)(s.Z,{size:"50"})}),(0,l.jsx)("div",{className:"my-auto",children:(0,l.jsx)(o.default,{href:"/",passHref:!0,children:(0,l.jsx)("a",{children:(0,l.jsx)(c.Z,{text:"EMERALD TUTU"})})})})]})}),(0,l.jsxs)("div",{className:"position-relative",style:{left:"121px"},onMouseEnter:function(){return m(!1)},onMouseLeave:function(){return m(!0)},children:[(0,l.jsxs)("div",{className:"font-monument width-fit-content d-flex",children:[(0,l.jsx)("div",{className:"pheading-number width-fit-content",children:(0,n.Z)(t.pageNumber)}),(0,l.jsx)("span",{children:t.title})]}),r&&(0,l.jsx)(a.Z,{in:!d,children:(0,l.jsx)("div",{className:"position-absolute",children:r.map((function(e,r){if(e.pageNumber!=t.pageNumber)return function(e,t){return(0,l.jsxs)("div",{className:"d-flex font-monument white-bg display-2",children:[(0,l.jsx)("div",{className:"pheading-number",children:(0,n.Z)(e.pageNumber)}),(0,l.jsx)("span",{className:"hidden-link",children:(0,l.jsx)("a",{href:e.slug,children:e.title})})]},t)}(e,r)}))})})]}),(0,l.jsx)("div",{className:"d-flex text",children:null===t||void 0===t?void 0:t.blocks.map((function(e,r){if("Section"==e.__typename){var n="font-monument mx- h6 d-flex text-uppercase text-underline-green";return n+=0==f?" me-auto":" mx-auto",f+=1,(0,l.jsx)("h4",{className:n,onClick:function(){return location.href=(null===t||void 0===t?void 0:t.slug)+"#"+e.name},children:e.name},r)}}))})]})}},2299:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(5893);function i(e){var t=e.size+"px";return(0,n.jsx)("div",{className:"blue-bg circle",style:{minWidth:t,minHeight:t}})}},6656:function(e,t,r){r.d(t,{Z:function(){return J}});var n={};r.r(n),r.d(n,{AnnotatedPicture:function(){return g},BigMenu:function(){return f},CollapsibleText:function(){return H},Heading:function(){return V},Image:function(){return Z},ImageCarousel:function(){return A},NavigationItem:function(){return a},NumberedList:function(){return G},PageHeading:function(){return F.Z},PersonList:function(){return S},Picture:function(){return h},Section:function(){return b},Text:function(){return o},Tooltip:function(){return x},TooltipPicture:function(){return w},Video:function(){return B},VimeoEmbeddable:function(){return E}});var i=r(2809),s=r(219),c=r(5893);function a(){return(0,c.jsx)("span",{})}function o(e){var t=e.paragraphs,r=e.isBlueBackground;return(0,c.jsx)("div",{className:"text w-auto",children:t.map((function(e,t){return(0,c.jsx)("div",{className:"justify-content-center",children:(0,c.jsx)("p",{className:"py-3"+(r?" blue-bg":""),children:e})},t)}))})}var l=r(2598),u=r(7294);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=e.pages;return(0,c.jsx)("div",{className:"ms-2 me-auto h3 hidden-link",children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,c.jsx)("div",{children:(0,c.jsx)(p,m({},e))},t)}))})}function p(e){return(0,c.jsx)("div",{id:"page"+e.title,className:"row",children:(0,c.jsxs)("a",{href:"/"+e.slug,className:"display-2 font-monument hidden-link w-auto text-center",children:[(0,c.jsx)("div",{className:"float-start me-3",children:(0,l.Z)(e.pageNumber)}),(0,c.jsx)("div",{className:"float-start",children:e.title})]})})}function h(e){var t=e.photo,r=e.altText,n=e.caption;return(0,c.jsxs)("div",{className:"container text-center",children:[(0,c.jsx)("img",{src:t.url,height:t.height,width:t.width,alt:r}),n&&(0,c.jsx)("span",{className:"row mb-3",children:t.caption})]})}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){var t=e.name,r=e.contents;return(0,c.jsxs)("div",{className:"site-container anchor mb-3 g-0",id:t,children:[(0,c.jsx)("h2",{className:"font-monument d-flex text me-auto mb-2 pt-3 text-uppercase text-underline-green",children:t}),r.map((function(e){var t=n[e.__typename];return t?(0,c.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.id):null}))]})}function x(e){var t=e.xPos,r=e.yPos,n=e.number,i=e.text,s=e.id,a={left:t+"px",top:r+"px"};return(0,c.jsxs)("div",{className:"position-absolute d-flex text-bold p-2 align-middle annotation overflow-visible",style:a,children:[(0,c.jsx)("div",{className:"h2 position-relative top-0 mb-auto mx-auto info-tip d-flex blue-bg align-content-middle",children:(0,c.jsx)("span",{className:"m-auto",children:""+n})}),(0,c.jsx)("div",{className:"annotation-text",children:(0,c.jsx)("p",{className:"ms-2 blue-bg p-2 fade-in my-auto",children:i})})]},s)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t=e.tooltip,r=e.picture;return(0,c.jsx)("div",{className:"text-center",children:(0,c.jsxs)("div",{className:"position-relative d-inline-flex overflow-visible",children:[(0,c.jsx)(h,v({},r)),t&&void 0!=t&&t.map((function(e){return(0,c.jsx)(x,v({},e),e.id)}))]})})}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){var t=e.annotatedPhoto;return(0,c.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t))}var N=r(2299);function P(e){var t=e.name,r=e.title,n=e.bio,i=e.photo;return(0,c.jsxs)("div",{className:"p-3 my-4 blue-border d-flex",children:[(0,c.jsxs)("div",{className:"me-4",children:[(0,c.jsx)("div",{className:"mb-3",children:(0,c.jsxs)("div",{className:"d-flex font-monument mb-3",children:[(0,c.jsx)(N.Z,{size:"22"}),r.length>0?(0,c.jsxs)("h3",{className:"ms-3 my-auto fw-bold",children:[t,", ",r]}):(0,c.jsx)("h3",{className:"ms-3 my-auto fw-bold",children:t})]})}),(0,c.jsx)("div",{className:"mx-auto",children:(0,c.jsx)("p",{children:n})})]}),i&&(0,c.jsx)("div",{className:"col-4 p-0 person-mh my-auto d-flex",children:(0,c.jsx)("img",{className:"mw-100 mh-100",src:i.url,alt:t})})]})}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){var t=e.people;return(0,c.jsx)("div",{className:"text",children:t.map((function(e,t){return(0,c.jsx)(P,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),t)}))})}var k=r(4298);function E(e){var t=e.videoID,r=e.iframeSrc;return(0,c.jsxs)("div",{id:"player-"+t,className:"my-3 col-12 col-lg-9 container",children:[(0,c.jsx)("div",{style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,c.jsx)("iframe",{src:""+r,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0})}),(0,c.jsx)(k.default,{src:"https://player.vimeo.com/api/player.js"})]})}function Z(e){var t=e.image,r=e.altText,n=e.caption;return(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{className:"mw-100",src:t.url,alt:r}),n&&(0,c.jsx)("div",{className:"text-center mt-2",children:(0,c.jsx)("span",{className:"h6",children:n})})]})}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,s=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw s}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e){var t,r=e.images,n=e.blueBackground,i=e.id,s=e.heading,a=(0,u.useState)(0),o=a[0],l=a[1],d=r.length,m=function(e){l(parseInt(e.target.dataset.index))},f=0,p=0,h=_(r);try{for(h.s();!(t=h.n()).done;){var j=t.value;f=Math.max(f,j.image.width),p=Math.max(p,j.image.height)}}catch(b){h.e(b)}finally{h.f()}return(0,c.jsxs)("div",{id:i,className:"width-max-content w-100 my-auto mx-0 pt-4 pb-2 mb-4 d-flex flex-column ".concat(n?"blue-bg":""),children:[(0,c.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200"}),s&&(0,c.jsx)("h2",{className:"text-center mb-3",children:s}),(0,c.jsxs)("div",{className:"mx-auto mt-auto",children:[r.map((function(e,t){return(0,c.jsx)("div",{className:"d-flex",children:t===o&&(0,c.jsx)(Z,C({},e))},t)})),(0,c.jsxs)("div",{className:"d-flex w-100",children:[(0,c.jsx)("div",{className:"carousel-arrow me-auto d-flex",onClick:function(){l(0===o?d-1:o-1)},children:(0,c.jsx)("span",{className:"material-symbols-outlined my-auto ".concat(n?"":"color-blue"),style:{fontSize:"48px",fontWeight:"700"},children:"arrow_back"})}),(0,c.jsx)("div",{className:"d-flex",children:(0,c.jsx)("div",{className:"my-auto mx-auto d-flex",children:r.map((function(e,t){return(0,c.jsxs)("div",{onClick:m,children:[t===o&&(0,c.jsx)("div",{"data-index":t,className:"circle ".concat(n?"bg-green":"blue-bg")}),t!==o&&(0,c.jsx)("div",{"data-index":t,className:"circle ".concat(n?"bg-white":"border-thin-blue")})]},t)}))})}),(0,c.jsx)("div",{className:"carousel-arrow ms-auto d-flex",onClick:function(){l(o===d-1?0:o+1)},children:(0,c.jsx)("span",{className:"material-symbols-outlined my-auto ".concat(n?"":"color-blue"),style:{fontSize:"48px",fontWeight:"700"},children:"arrow_forward"})})]})]})]})}var I=r(8459);function H(e){var t=e.heading,r=e.text,n=e.highlight,i=(0,u.useState)({isExpanded:!1}),s=i[0],a=i[1];return(0,c.jsxs)("div",{className:"container col-12 col-md-10 col-xl-8 p-2 my-2"+(n?" blue-bg":""),onClick:function(){return a(!s)},children:[(0,c.jsxs)("div",{className:"d-inline-flex w-100 px-1",children:[(0,c.jsx)("h4",{className:"mb-0 w-100",children:t}),(0,c.jsx)("span",{children:s?"+":"-"})]}),(0,c.jsx)(I.Z,{in:!s,children:(0,c.jsx)("p",{className:"p-1 mt-2 mb-0 fade-in",children:r})})]})}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e){var t=e.video.url,r=(0,u.useRef)(null),n=(0,u.useState)({isPlaying:!1,progress:0,isMuted:!1,currentTimeString:"0:00"}),i=n[0],s=n[1],a=function(e){var t=Math.floor(e/60),r=Math.floor(e-60*t);return t+":"+(r=r<10?"0"+r.toString():r)},o=function(){i.isPlaying?r.current.pause():r.current.play(),s(z(z({},i),{},{isPlaying:!i.isPlaying}))},l=(0,c.jsx)("video",{className:"w-100",ref:r,onTimeUpdate:function(){s(z(z({},i),{},{progress:r.current.currentTime/r.current.duration*100,currentTimeString:a(r.current.currentTime)}))},children:(0,c.jsx)("source",{src:t})});return(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"}),l,(0,c.jsxs)("div",{className:"d-flex w-100",children:[(0,c.jsx)("div",{className:"me-2",children:i.currentTimeString}),!i.isPlaying&&(0,c.jsx)("span",{onClick:o,className:"me-2 material-symbols-outlined my-auto",children:"play_arrow"}),i.isPlaying&&(0,c.jsx)("span",{onClick:o,className:"me-2 my-auto material-symbols-outlined",children:"pause"}),(0,c.jsx)("input",{className:"video-progress-bar m-auto w-100",type:"range",min:"0",max:"100",value:i.progress,onChange:function(e){var t=Number(e.target.value);r.current.currentTime=r.current.duration/100*t,s(z(z({},i),{},{progress:t,currentTimeString:a(r.current.currentTime)}))}})]})]})}var F=r(7094);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e){var t=e.itemTitle,r=e.itemDescription;return(0,c.jsxs)("div",{className:"mb-2",children:[(0,c.jsx)("span",{className:"text mx-1 my-2",children:t}),(0,c.jsx)("p",{className:"text mx-1",children:r})]})}function G(e){var t=e.title,r=e.items,n=(0,u.useState)({isHidden:!1}),i=n[0],s=n[1];return(0,c.jsx)("div",{className:"text-margins p-2 my-2 blue-bg",onClick:function(){return s(!i)},children:(0,c.jsxs)("div",{className:"blue-bg",children:[(0,c.jsxs)("div",{className:"d-inline-flex w-100",children:[(0,c.jsxs)("div",{className:"d-flex w-100",children:[(0,c.jsx)("div",{className:"circle white-bg me-3",style:{minWidth:"16px",minHeight:"16px"}}),(0,c.jsx)("span",{className:"h2 mb-0 w-100",children:t})]}),(0,c.jsx)("span",{className:"my-auto me-1",children:i?"+":"-"})]}),(0,c.jsx)(I.Z,{in:!i,children:(0,c.jsx)("div",{className:"mt-3",children:r.map((function(e,t){return(0,c.jsxs)("div",{className:"d-flex mx-auto",children:[(0,c.jsx)("div",{className:"font-monument text ms-0 me-2",children:(0,l.Z)(t+1)}),(0,c.jsx)(W,U({},e))]},t)}))})})]})})}function V(e){var t=e.heading;return(0,c.jsx)("div",{className:"site-container font-monument text-margins my-3",children:(0,c.jsx)("h2",{className:"mb-0 pt-4 pb-2",children:t})})}var $=["banner","blocks","hero","navigation"];function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){e.banner;var t=e.blocks,r=(e.hero,e.navigation,(0,s.Z)(e,$));return(0,c.jsx)(c.Fragment,{children:t.map((function(e){var t=n[e.component]||n[e.__typename];return t?(0,c.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({page:r},e),e.id):null}))})}}}]);