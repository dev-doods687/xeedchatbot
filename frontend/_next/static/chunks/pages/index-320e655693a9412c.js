(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4595)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return C}});let s=r(8754),a=r(1757),n=a._(r(7294)),i=s._(r(2636)),l=r(7757),o=r(3735),c=r(3341);r(4210);let u=s._(r(7746)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/files/chatbot/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function d(e){return void 0!==e.default}function f(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,s,a,n,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&n(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;s.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}})}function g(e){let[t,r]=n.version.split("."),s=parseInt(t,10),a=parseInt(r,10);return s>18||18===s&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,n.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:s,widthInt:a,qualityInt:i,className:l,imgStyle:o,blurStyle:c,isLazy:u,fetchPriority:h,fill:d,placeholder:f,loading:p,srcString:b,config:C,unoptimized:v,loader:w,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:k,onLoad:M,onError:S,...N}=e;return p=u?"lazy":p,n.default.createElement("img",{...N,...g(h),loading:p,width:a,height:s,decoding:"async","data-nimg":d?"fill":"1",className:l,style:{...o,...c},...r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,b,f,x,y,j,v))},[b,f,x,y,j,S,v,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,f,x,y,j,v)},onError:e=>{k(!0),"blur"===f&&j(!0),S&&S(e)}})}),b=(0,n.forwardRef)((e,t)=>{var r;let s,a,{src:m,sizes:b,unoptimized:C=!1,priority:v=!1,loading:w,className:x,quality:y,width:j,height:k,fill:M,style:S,onLoad:N,onLoadingComplete:_,placeholder:E="empty",blurDataURL:R,fetchPriority:L,layout:O,objectFit:I,objectPosition:$,lazyBoundary:B,lazyRoot:W,...P}=e,A=(0,n.useContext)(c.ImageConfigContext),F=(0,n.useMemo)(()=>{let e=h||A||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[A]),T=P.loader||u.default;delete P.loader;let z="__next_img_default"in T;if(z){if("custom"===F.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...s}=t;return e(s)}}if(O){"fill"===O&&(M=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!b&&(b=t)}let D="",J=f(j),H=f(k);if("object"==typeof(r=m)&&(d(r)||void 0!==r.src)){let e=d(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,a=e.blurHeight,R=R||e.blurDataURL,D=e.src,!M){if(J||H){if(J&&!H){let t=J/e.width;H=Math.round(e.height*t)}else if(!J&&H){let t=H/e.height;J=Math.round(e.width*t)}}else J=e.width,H=e.height}}let V=!v&&("lazy"===w||void 0===w);(!(m="string"==typeof m?m:D)||m.startsWith("data:")||m.startsWith("blob:"))&&(C=!0,V=!1),F.unoptimized&&(C=!0),z&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(C=!0),v&&(L="high");let[G,Z]=(0,n.useState)(!1),[q,U]=(0,n.useState)(!1),X=f(y),Y=Object.assign(M?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:$}:{},q?{}:{color:"transparent"},S),K="blur"===E&&R&&!G?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:J,heightInt:H,blurWidth:s,blurHeight:a,blurDataURL:R,objectFit:Y.objectFit})+'")'}:{},Q=function(e){let{config:t,src:r,unoptimized:s,width:a,quality:n,sizes:i,loader:l}=e;if(s)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,r){let{deviceSizes:s,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(r);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:s,kind:"w"};let n=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:n,kind:"x"}}(t,a,i),u=o.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:o.map((e,s)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===c?e:s+1)+c).join(", "),src:l({config:t,src:r,quality:n,width:o[u]})}}({config:F,src:m,unoptimized:C,width:J,quality:X,sizes:b,loader:T}),ee=m,et=(0,n.useRef)(N);(0,n.useEffect)(()=>{et.current=N},[N]);let er=(0,n.useRef)(_);(0,n.useEffect)(()=>{er.current=_},[_]);let es={isLazy:V,imgAttributes:Q,heightInt:H,widthInt:J,qualityInt:X,className:x,imgStyle:Y,blurStyle:K,loading:w,config:F,fetchPriority:L,fill:M,unoptimized:C,placeholder:E,loader:T,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:Z,setShowAltText:U,...P};return n.default.createElement(n.default.Fragment,null,n.default.createElement(p,{...es,ref:t}),v?n.default.createElement(i.default,null,n.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:P.crossOrigin,referrerPolicy:P.referrerPolicy,...g(L)})):null)}),C=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:s,blurHeight:a,blurDataURL:n,objectFit:i}=e,l=s||t,o=a||r,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+o+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(s&&a?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:s,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+s+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r.__next_img_default=!0;let s=r},4595:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var s=r(5893),a=e=>{let{className:t}=e;return(0,s.jsx)("svg",{viewBox:"0 0 15 16",xmlns:"http://www.w3.org/2000/svg",className:t,children:(0,s.jsx)("path",{d:"M14.847 7.7569L0.400114 0.0307151C0.341394 -0.000602298 0.274038 -0.00797104 0.210137 0.00860875C0.139216 0.0273104 0.0781317 0.0752259 0.0402594 0.141864C0.00238707 0.208502 -0.00918731 0.288432 0.00807067 0.364153L1.4968 6.85238C1.51925 6.95001 1.5866 7.02923 1.67641 7.06055L4.22728 7.99454L1.67814 8.92853C1.58833 8.96169 1.52098 9.03907 1.50025 9.1367L0.00807067 15.6341C-0.00747288 15.7023 -0.000564558 15.7741 0.0287955 15.8349C0.0961509 15.9805 0.261949 16.0394 0.400114 15.9676L14.847 8.28561C14.9005 8.25797 14.9437 8.21008 14.9713 8.15481C15.0387 8.00744 14.9834 7.83059 14.847 7.7569ZM12.5604 8.01849L7.67795 8.13455C7.71767 8.11981 13.9862 8.04421 14 8C14.0242 7.92263 7.75048 7.88217 7.67795 7.85453L12.5604 8.01849Z",fill:"inherit"})})},n=e=>{let{prefixComponent:t,suffixComponent:r,className:a,innerClassName:n,...i}=e;return(0,s.jsxs)("div",{className:"flex items-center gap-2 rounded-lg border-[1px] border-[#D9D9D9] p-2 ".concat(a),children:[t,(0,s.jsx)("input",{...i,className:"w-full bg-transparent focus:border-none focus:outline-none focus:ring-0 ".concat(n)}),r]})},i=r(8398),l=r(7294),o=r(3605),c=r.n(o),u=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[(0,s.jsx)("g",{"clip-path":"url(#clip0_74_1344)",children:(0,s.jsx)("path",{d:"M6.956 14.534C7.021 15.47 7.908 16.193 8.864 15.954L9.125 15.889C9.36444 15.8331 9.58455 15.7141 9.7625 15.5444C9.94045 15.3747 10.0698 15.1605 10.137 14.924C10.357 14.108 10.67 12.412 10.199 10.414C10.335 10.434 10.484 10.451 10.642 10.465C11.355 10.53 12.311 10.536 13.158 10.254C13.676 10.081 14.152 9.574 14.358 8.982C14.4611 8.69543 14.4937 8.38822 14.453 8.08639C14.4123 7.78456 14.2994 7.49698 14.124 7.248C14.182 7.13 14.227 7.006 14.262 6.886C14.339 6.616 14.375 6.318 14.375 6.03C14.375 5.74 14.339 5.444 14.262 5.173C14.2228 5.03349 14.1691 4.89843 14.102 4.77C14.271 4.383 14.209 3.95 14.099 3.621C13.9863 3.29648 13.8215 2.9925 13.611 2.721C13.665 2.568 13.687 2.408 13.687 2.256C13.6827 1.93527 13.5956 1.6211 13.434 1.344C13.1 0.756999 12.437 0.279999 11.5 0.279999H8C7.395 0.279999 6.93 0.359999 6.534 0.496999C6.19346 0.621684 5.86807 0.784379 5.564 0.981999L5.516 1.011C5.012 1.319 4.517 1.621 3.448 1.734C2.682 1.815 2 2.434 2 3.279V7.279C2 8.13 2.685 8.712 3.357 8.895C4.206 9.127 4.931 9.682 5.489 10.305C6.049 10.931 6.403 11.585 6.528 11.943C6.727 12.518 6.884 13.483 6.956 14.534V14.534Z",fill:"inherit"})}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"clip0_74_1344",children:(0,s.jsx)("rect",{width:"16",height:"16",fill:"inherit"})})})]})},h=e=>{let{className:t}=e;return(0,s.jsx)("svg",{viewBox:"0 0 19 10",xmlns:"http://www.w3.org/2000/svg",className:t,children:(0,s.jsx)("path",{d:"M10.455 0.455003C10.6663 0.253837 10.9475 0.142624 11.2392 0.144831C11.531 0.147039 11.8104 0.262494 12.0187 0.466835C12.2269 0.671176 12.3476 0.94842 12.3553 1.24006C12.363 1.53171 12.2571 1.81494 12.06 2.03L6.07499 9.515C5.97208 9.62585 5.84787 9.71481 5.70979 9.77655C5.57171 9.8383 5.4226 9.87157 5.27137 9.87437C5.12014 9.87717 4.9699 9.84944 4.82963 9.79285C4.68936 9.73626 4.56194 9.65196 4.45499 9.545L0.485992 5.576C0.375462 5.47301 0.286808 5.34881 0.225321 5.21081C0.163833 5.07281 0.13077 4.92384 0.128105 4.77279C0.12544 4.62173 0.153227 4.47169 0.209808 4.33161C0.26639 4.19152 0.350607 4.06427 0.457435 3.95745C0.564263 3.85062 0.691513 3.7664 0.831596 3.70982C0.971678 3.65324 1.12172 3.62545 1.27278 3.62812C1.42383 3.63078 1.5728 3.66384 1.7108 3.72533C1.8488 3.78682 1.973 3.87547 2.07599 3.986L5.21699 7.1255L10.425 0.488004C10.4343 0.476423 10.4444 0.465403 10.455 0.455003ZM9.07499 8.165L10.455 9.545C10.5619 9.65173 10.6892 9.73583 10.8294 9.79228C10.9695 9.84874 11.1196 9.87639 11.2706 9.87359C11.4217 9.87079 11.5706 9.8376 11.7085 9.77599C11.8465 9.71438 11.9706 9.62562 12.0735 9.515L18.0615 2.03C18.1691 1.92381 18.2541 1.79702 18.3116 1.65722C18.3691 1.51741 18.3978 1.36746 18.396 1.21631C18.3943 1.06517 18.3621 0.915925 18.3013 0.777501C18.2406 0.639076 18.1526 0.514308 18.0426 0.410647C17.9326 0.306987 17.8028 0.226559 17.661 0.174167C17.5192 0.121776 17.3684 0.0984951 17.2174 0.105715C17.0664 0.112936 16.9184 0.150509 16.7823 0.216192C16.6461 0.281874 16.5246 0.374318 16.425 0.488004L11.2155 7.1255L10.488 6.3965L9.07349 8.165H9.07499Z",fill:"inherit"})})},d=e=>{let{className:t}=e;return(0,s.jsx)("svg",{viewBox:"0 0 13 18",xmlns:"http://www.w3.org/2000/svg",className:t,children:(0,s.jsx)("path",{d:"M4.956 1.745C5.021 0.810002 5.908 0.0870021 6.864 0.325002L7.125 0.391002C7.588 0.507002 7.999 0.847002 8.137 1.356C8.357 2.172 8.67 3.867 8.199 5.866C8.34626 5.84566 8.49397 5.82865 8.642 5.815C9.355 5.75 10.311 5.743 11.158 6.025C11.676 6.198 12.152 6.706 12.358 7.298C12.542 7.83 12.518 8.46 12.124 9.031C12.182 9.15 12.227 9.273 12.262 9.394C12.339 9.664 12.375 9.961 12.375 10.25C12.375 10.539 12.339 10.836 12.262 11.106C12.223 11.241 12.172 11.379 12.102 11.51C12.271 11.897 12.209 12.329 12.099 12.658C11.9864 12.9829 11.8216 13.2872 11.611 13.559C11.665 13.711 11.687 13.871 11.687 14.024C11.687 14.329 11.598 14.649 11.434 14.936C11.1 15.522 10.437 16 9.5 16H6C5.395 16 4.93 15.919 4.534 15.782C4.1935 15.6577 3.8681 15.4953 3.564 15.298L3.516 15.268C3.012 14.961 2.517 14.659 1.448 14.546C0.682 14.464 0 13.846 0 13V9C0 8.15 0.685 7.568 1.357 7.385C2.206 7.153 2.931 6.598 3.489 5.975C4.049 5.348 4.403 4.695 4.528 4.336C4.727 3.761 4.884 2.797 4.956 1.746V1.745Z",fill:"inherit"})})},f=r(5675),m=r.n(f),g=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200px",height:"200px",viewBox:"0 0 100 100",className:t,children:[(0,s.jsx)("g",{transform:"translate(25 50)",children:(0,s.jsx)("circle",{cx:"0",cy:"0",r:"6",fill:"#8c8c8c",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.3333333333333333s",calcMode:"spline",keySplines:"0.3 0 0.7 1;0.3 0 0.7 1",values:"0;1;0",keyTimes:"0;0.5;1",dur:"1s",repeatCount:"indefinite"})})}),(0,s.jsx)("g",{transform:"translate(50 50)",children:(0,s.jsx)("circle",{cx:"0",cy:"0",r:"6",fill:"#8c8c8c",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.16666666666666666s",calcMode:"spline",keySplines:"0.3 0 0.7 1;0.3 0 0.7 1",values:"0;1;0",keyTimes:"0;0.5;1",dur:"1s",repeatCount:"indefinite"})})}),(0,s.jsx)("g",{transform:"translate(75 50)",children:(0,s.jsx)("circle",{cx:"0",cy:"0",r:"6",fill:"#8c8c8c",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",calcMode:"spline",keySplines:"0.3 0 0.7 1;0.3 0 0.7 1",values:"0;1;0",keyTimes:"0;0.5;1",dur:"1s",repeatCount:"indefinite"})})})]})},p=e=>{let{chatItem:t,feedbackHandler:r,scrollDownHandler:a}=e,[n,i]=(0,l.useState)(""),[o,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(t.ownChat)i(t.message);else if(t.message){c(!0);let e=0,r=setInterval(()=>{e<t.message.length?(null==a||a(),i(r=>r+t.message[e-1]),e++):(c(!1),clearInterval(r))},20);return()=>clearInterval(r)}},[a]),(0,s.jsx)("div",{className:"".concat(t.ownChat?"bg-transparent":"bg-[#E2F1FD] dark:bg-gray-600"),children:(0,s.jsxs)("div",{className:"mx-auto flex gap-4 p-4 max-md:px-8 md:w-4/5 md:gap-8",children:[(0,s.jsx)(m(),{src:t.ownChat?"/images/mock/profile.svg":"/images/logo.png",alt:t.ownChat?"Me":"ChatGPT",height:100,width:100,className:"h-8 w-8 rounded-sm object-contain p-1 ".concat(t.ownChat?"bg-[#BFBFBF]":"bg-white")}),""!==t.message?(0,s.jsxs)("p",{className:"grow",children:[n,o&&(0,s.jsx)("span",{children:"|"})]}):(0,s.jsx)(g,{className:"h-8 w-8 bg-transparent"}),""!==t.message&&(0,s.jsx)(s.Fragment,{children:t.ownChat?(0,s.jsx)(h,{className:"h-4 w-4 fill-[#1D39C4]"}):(0,s.jsxs)("span",{className:"flex h-4 w-10 gap-2",children:[(0,s.jsx)("button",{onClick:()=>null==r?void 0:r(t.chatId,!0),children:(0,s.jsx)(d,{className:"h-4 w-4 fill-transparent stroke-black/[0.45] hover:fill-black/[0.45] hover:stroke-transparent"})}),(0,s.jsx)("button",{onClick:()=>null==r?void 0:r(t.chatId,!1),children:(0,s.jsx)(u,{className:"h-[0.9rem] w-[0.9rem] fill-transparent stroke-black/[0.45] hover:fill-black/[0.45] hover:stroke-transparent"})})]})})]})})},b=r(9342),C=r(1254),v=r(464),w=r(2161),x=r(9886),y=r(81),j=r(3989);class k extends j.l{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let r=this.options;this.options=this.client.defaultMutationOptions(e),(0,w.VS)(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:(0,x.R)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){y.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,r,s,a,n,i,l,o;e.onSuccess?(null==(t=(r=this.mutateOptions).onSuccess)||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(s=(a=this.mutateOptions).onSettled)||s.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(n=(i=this.mutateOptions).onError)||n.call(i,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(l=(o=this.mutateOptions).onSettled)||l.call(o,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}var M=r(5945),S=r(4798);function N(e,t,r){let s=(0,w.lV)(e,t,r),a=(0,M.NL)({context:s.context}),[n]=l.useState(()=>new k(a,s));l.useEffect(()=>{n.setOptions(s)},[n,s]);let i=(0,v.$)(l.useCallback(e=>n.subscribe(y.V.batchCalls(e)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),o=l.useCallback((e,t)=>{n.mutate(e,t).catch(_)},[n]);if(i.error&&(0,S.L)(n.options.useErrorBoundary,[i.error]))throw i.error;return{...i,mutate:o,mutateAsync:i.mutate}}function _(){}function E(e){let{jsonStr:t,addJsonStr:r,addChat:s,toggleLoading:a}=(0,l.useContext)(i.p),{updateFeedback:n}=(0,l.useContext)(C.l),{mutate:o,data:c,error:u}=N({mutationFn:b.WJ}),{mutate:h,data:d,error:f}=N({mutationFn:b.fA}),m=(0,l.useCallback)(r=>{s({chatId:Math.random().toString(),isSuccess:!0,message:r,ownChat:!0}),a(!0),o({msg:r,jsonStr:t}),null==e||e()},[s,e,t,o,a]),g=(0,l.useCallback)((e,t)=>{h({messageId:e,isLike:t})},[h]);return(0,l.useEffect)(()=>{c?(r(c.message.at(-1).map(e=>'"'.concat(e,'"')).join(",").replace(/\n/g,"")),s({chatId:Math.random().toString(),isSuccess:!0,message:c.message.at(-1)[1],ownChat:!1}),a(!1),null==e||e()):u&&(u instanceof Error&&n({showSnackbar:!0,snackbarMessage:u.message,snackbarType:"error"}),a(!1),null==e||e())},[s,r,e,c,u,a,n]),(0,l.useEffect)(()=>{d?n({showSnackbar:!0,snackbarMessage:"Feedback sent",snackbarType:"success"}):f&&n({showSnackbar:!0,snackbarMessage:"Failed to send feedback",snackbarType:"error"})},[d,f,n]),{sendHandler:m,feedbackHandler:g}}var R=()=>(0,s.jsx)(p,{chatItem:{chatId:Math.random().toString(),isSuccess:!1,message:"",ownChat:!1}});let L=(0,l.forwardRef)((e,t)=>{let{scrollDownHandler:r}=e,{chats:a,isLoading:n}=(0,l.useContext)(i.p),{feedbackHandler:o}=E();return(0,s.jsxs)("div",{className:"flex h-full w-full flex-col overflow-y-auto",ref:t,children:[a.map(e=>(0,s.jsx)(p,{chatItem:e,feedbackHandler:o,scrollDownHandler:r},e.chatId)),n&&(0,s.jsx)(R,{})]})});L.displayName="ChatList";var O=r(5119),I=e=>{let{query:t,onClick:r}=e;return(0,s.jsx)("div",{className:"w-full cursor-pointer rounded-lg bg-[#F5F5F5] px-[10%] py-4 hover:bg-[#dfdfdf] hover:text-white dark:bg-gray-600 dark:hover:bg-gray-700",onClick:()=>r(t),children:(0,s.jsxs)("span",{className:"flex items-center",children:[(0,s.jsx)("p",{className:"truncate",children:'"'.concat(t,'"')}),(0,s.jsx)("p",{children:"\xa0→"})]})})};let{getQuestion:$}=r(9628);var B=e=>{let{sendHandler:t}=e,r=(0,O.Z)();if(r)return(0,s.jsx)("div",{className:"mx-auto flex h-full flex-col items-center justify-center gap-4 max-md:px-8 md:w-4/5",children:Array.from([,,,,,].keys()).map((e,r)=>(0,s.jsx)(I,{query:$(),onClick:t},r))})},W=()=>{let{chats:e}=(0,l.useContext)(i.p),t=(0,l.useRef)(null),r=(0,l.useCallback)(()=>{setTimeout(()=>{var e,r;return null===(e=t.current)||void 0===e?void 0:e.scrollTo(0,null===(r=t.current)||void 0===r?void 0:r.scrollHeight)},100)},[]),{sendHandler:o}=E(r),u=(0,l.useCallback)(e=>{e.preventDefault();let t=e.currentTarget.elements.message;o(t.value),t.value=""},[o]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:c().chatArea,children:0===e.length?(0,s.jsx)(B,{sendHandler:o}):(0,s.jsx)(L,{ref:t,scrollDownHandler:r})}),(0,s.jsx)("form",{className:c().chatBox,onSubmit:u,autoComplete:"off",children:(0,s.jsx)(n,{name:"message",placeholder:"Send a message.",className:"w-full",suffixComponent:(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)(a,{className:"h-4 w-4 fill-transparent stroke-black/25 hover:fill-[#1D39C4] hover:stroke-transparent dark:stroke-white"})})})})]})},P=e=>{let{className:t}=e;return(0,s.jsx)("div",{className:"h-1 w-full bg-gray-200 ".concat(t),children:(0,s.jsx)("div",{className:"absolute left-0 top-0 h-full w-1/12 animate-slide bg-gray-400"})})},A=()=>{let{showLinearProgress:e}=(0,l.useContext)(C.l);return(0,s.jsxs)("div",{className:"relative flex h-[10vh] items-center justify-center",children:[e&&(0,s.jsx)(P,{className:"absolute left-0 top-0"}),(0,s.jsx)(m(),{src:"/images/logo.png",loading:"eager",alt:"Xurpas_logo",height:300,width:900,className:"w-36"})]})};function F(){return(0,s.jsxs)("div",{className:"flex h-full w-full flex-col",children:[(0,s.jsx)(A,{}),(0,s.jsx)(W,{})]})}},3605:function(e){e.exports={chatArea:"chat_chatArea__i37R3",chatBox:"chat_chatBox__LJiiJ"}},5675:function(e,t,r){e.exports=r(3740)},9628:function(e){let t=["cat","keyboard","mouse","onion","turtle","cell phone","backgammon game","cassette tape","movie","pencil","shirt","brush","tv","car","van","goat","zebra","dog","elephant","seagull","bat","crab","snail","racoon","bear","teddy bear","jeans","t-shirt","jeans","dress","skirt","flower","guitar","sunhat","fedora","baseball hat","sunglasses","ripped jeans","acoustic guitar","watermellon","dress shirt","winter jacket","cheeseburger","cow","pig","picture frame","wall art","paint brush","can of paint","water"],r=["smelly","sticky","random","gross","putrid","green","hard","soft","bouncy","lightweight","beautiful","nice"],s=["wicked","awesome","totally rad","so coooool","terrific","crazy awesome","neato burrito","sorta neat","just ok","not that great","pretty awfull"],a=["Gerty","Betty","Bobby","Nick","Jon","Scott","Alice","Ricky","Bobberto","Audri","Sally","Amber","Jedd","Joey","Billy","Willaim","Joe","Sarah","Judy","Kendra","Mary-Ann","Richard","John","Fred","Daniel","Thomas","Jacob","Noah","Luis","Samuel","Justin","David","Logan","Ben","Juan","Pedro","James","Santiago","Martin","Jack","Emma","Brianna","Emilia","Sara","Sue","Zoe","Lea","Alysha","Sofia","Mia","Victoria","Raquel","Isabella","Olivia","Paula","Charlotte","Mary","Nicole","Grace","Madison"],n=["Winterbottom","Gertzenhiemen","Smith","Goldsworthy","Bobby","Rosebottom","Smith","McSnikkers","McPickles","Ryder","Flynn","Williams","Johnson","Jones","Brown","Davis","Taylor","Anderson","Martin","Thompson","Wilson","Miller","Allen","Young","Wright","Adams","Baker","King","Scott","Evans","Cook","Murphy","Gray","Ross","Coleman","Gonzales","Woods","Fisher","Cruz","Hicks"],i=[`I have a question about my ${l()}`,`Can you help me find my ${c()}?`,`What color ${c()} should i get?`,`Who sells the best ${o()} tacos?`,`Where can i get a ${u()} haircut?`,`What do you suppose this ${c()} is made of?`,`Which ${c()} is the fastest?`,`Why is my ${c()} so ${o()}?`,`What is the best ${l()} brand?`,`What ${u()} ${l()} should i get?`,`How do i make the best ${l()}?`,`What ${c()} should i get?`,`Do you sell ${u()} ${c()}s?`,`Where can i buy a new ${c()}?`,`How many ${u()} TV channels are there relating to ${c()}?`,`Do i think too much about ${c()}s?`,`How can i go about getting a refund for this ${l()}?`,`Oh ${u()} .. . I feel like i got overcharged for this ${l()}?`,`What paperwork will be required to officialy adopt this ${c()}?`,`When can I expect delivery of my new ${c()}?`,`Where can I find a ${u()} present for my mom?`];function l(){let e=Math.floor(Math.random()*t.length),s=Math.floor(Math.random()*r.length);return r[s]+" "+t[e]}function o(){let e=Math.floor(Math.random()*r.length);return r[e]}function c(){let e=Math.floor(Math.random()*t.length);return t[e]}function u(){let e=Math.floor(Math.random()*s.length);return s[e]}e.exports={getQuestion:function(){let e=Math.floor(Math.random()*i.length);return i[e]},getPersonName:function(){let e=Math.floor(Math.random()*a.length),t=Math.floor(Math.random()*n.length);return a[e]+" "+n[t]}}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);