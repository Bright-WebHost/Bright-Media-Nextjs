(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3933],{2580:function(e,l,i){"use strict";i.d(l,{M:function(){return r}});var s=i(226),a=i(9128);let r=()=>{s.p8.registerPlugin(a.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{s.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-scale");l.forEach(e=>{var l=e.getAttribute("data-value-1"),i=e.getAttribute("data-value-2");s.p8.fromTo(e,{ease:"sine",scale:l},{scale:i,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let i=document.querySelectorAll(".mil-parallax");i.forEach(e=>{var l=e.getAttribute("data-value-1"),i=e.getAttribute("data-value-2");s.p8.fromTo(e,{ease:"sine",y:l},{y:i,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-skill-prog");r.forEach(e=>{var l=e.getAttribute("data-value-1"),i=e.getAttribute("data-value-2");s.p8.fromTo(e,{width:l,ease:"sine"},{width:i,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let t=document.querySelectorAll(".mil-counter");t.forEach(e=>{var l=e,i={val:0},a=e.dataset.number,r=(a+"").split("."),t=r.length>1?r[1].length:0;s.p8.to(i,{val:a,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){l.innerHTML=i.val.toFixed(t)}})}),s.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let m=document.querySelector(".mil-top-panel");void 0!=m&&window.addEventListener("scroll",e=>{window.scrollY>10?m.classList.add("mil-active"):m.classList.remove("mil-active")})}},2953:function(e,l,i){"use strict";i.d(l,{M:function(){return a}});var s=i(9682);i(6888),i(2803),i(103),s.ZP.use([s.Gk,s.tl,s.W_,s.xW,s.pt,s.rj,s.gI,s.oM,s.kr,s.Ay,s.o3,s.LW,s.N1,s.s5,s.VS,s.Rv]);let a={milInfiniteSlider:{slidesPerView:2,spaceBetween:0,speed:4e3,autoplay:!0,autoplay:{delay:0},loop:!0,freeMode:!0,breakpoints:{768:{slidesPerView:3},992:{slidesPerView:7}}},milBannerSlider:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milBannerSlider2:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milProcessSlider:{slidesPerView:1,spaceBetween:420,speed:800,parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milReviewsSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milIllustrationSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-illustration-prev",nextEl:".mil-illustration-next"}}}},1221:function(e,l,i){"use strict";i.r(l);var s=i(9268),a=i(8852),r=i(8520);let t=e=>{let{subtitleOffset:l}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.J9,{initialValues:{email:"",name:"",tel:"",budget:"",message:""},validate:e=>{let l={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(l.email="Invalid email address"):l.email="Required",l},onSubmit:(e,l)=>{let{setSubmitting:i}=l,s=document.getElementById("contactForm"),a=document.getElementById("contactFormStatus"),r=new FormData;r.append("name",e.name),r.append("email",e.email),r.append("tel",e.tel),r.append("budget",e.budget),r.append("message",e.message),fetch(s.action,{method:"POST",body:r,headers:{Accept:"application/json"}}).then(e=>{e.ok?(a.innerHTML="<h5>Thanks, your message is sent successfully.</h5>",s.reset()):e.json().then(e=>{Object.hasOwn(e,"errors")?a.innerHTML=e.errors.map(e=>e.message).join(", "):a.innerHTML="<h5>Oops! There was a problem submitting your form</h5>"})}).catch(e=>{a.innerHTML="<h5>Oops! There was a problem submitting your form</h5>"}),i(!1)},children:e=>{let{values:i,errors:a,touched:t,handleChange:m,handleBlur:n,handleSubmit:c,isSubmitting:o}=e;return(0,s.jsxs)("form",{onSubmit:c,id:"contactForm",action:r.Xd.Tb,className:l?"mil-mt-suptitle-offset mil-mb-90 cform":"mil-mb-90 cform",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,s.jsxs)("label",{className:"mil-upper",children:[(0,s.jsx)("span",{children:"Full Name"}),(0,s.jsx)("span",{className:"mil-required",children:"*"})]}),(0,s.jsx)("input",{type:"text",placeholder:"Enter Your Name Here",name:"name",required:"required",onChange:m,onBlur:n,value:i.name})]})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,s.jsxs)("label",{className:"mil-upper",children:[(0,s.jsx)("span",{children:"Email address"}),(0,s.jsx)("span",{className:"mil-required",children:"*"})]}),(0,s.jsx)("input",{type:"email",placeholder:"Enter Your Email Here",name:"email",required:"required",onChange:m,onBlur:n,value:i.email})]})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,s.jsxs)("label",{className:"mil-upper",children:[(0,s.jsx)("span",{children:"Phone"}),(0,s.jsx)("span",{className:"mil-required",children:"*"})]}),(0,s.jsx)("input",{type:"tel",placeholder:"Enter Your Phone Here",name:"tel",required:"required",onChange:m,onBlur:n,value:i.tel})]})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,s.jsxs)("label",{className:"mil-upper",children:[(0,s.jsx)("span",{children:"Budget"}),(0,s.jsx)("span",{className:"mil-required",children:"*"})]}),(0,s.jsx)("input",{type:"text",placeholder:"Enter Your Budget Here",name:"budget",required:"required",onChange:m,onBlur:n,value:i.budget})]})}),(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"mil-input-frame mil-dark-input mil-up mil-mb-30",children:[(0,s.jsxs)("label",{className:"mil-upper",children:[(0,s.jsx)("span",{children:"Message"}),(0,s.jsx)("span",{className:"mil-required",children:"*"})]}),(0,s.jsx)("textarea",{placeholder:"Enter Your Name Here",name:"message",required:"required",onChange:m,onBlur:n,value:i.message})]})}),(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsx)("button",{type:"submit",className:"mil-button mil-up",children:"Send Now"})})]}),(0,s.jsx)("div",{className:"form-status alert-success mil-mb-90",id:"contactFormStatus",style:{display:"none"}})]})}})})};l.default=t},2409:function(e,l,i){"use strict";i.r(l);var s=i(9268),a=i(5846),r=i.n(a),t=i(6008),m=i(6006),n=i(2580);let c=e=>{let{pageTitle:l,breadTitle:i,bgImage:a}=e,c=(0,t.usePathname)();if(void 0!=i||l.replace(/(<([^>]+)>)/gi,""),"Search: %s"==l){let e=(0,t.useSearchParams)(),i=e.get("key");l="Search: "+i}return(0,m.useEffect)(()=>{(0,n.M)()},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"mil-banner mil-banner-sm",children:[(0,s.jsx)("img",{src:a,className:"mil-bg-img mil-scale","data-value-1":".4","data-value-2":"1.4",alt:"image",style:{objectPosition:"top"}}),(0,s.jsx)("div",{className:"mil-overlay"}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"mil-background-grid mil-top-space"}),(0,s.jsx)("div",{className:"mil-banner-content mil-center",children:(0,s.jsxs)("div",{className:"mil-mb-90",children:[(0,s.jsx)("h1",{className:"mil-light mil-upper mil-mb-30",dangerouslySetInnerHTML:{__html:l}}),(0,s.jsxs)("ul",{className:"mil-breadcrumbs mil-center",children:[-1!=c.indexOf("/blog/")&&-1==c.indexOf("/blog/page/")&&(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/blog",children:"Blog"})}),-1!=c.indexOf("/projects/")&&(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/projects",children:"Projects"})}),-1!=c.indexOf("/services/")&&(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/services",children:"Services"})})]})]})})]})]})})};l.default=c},1479:function(e,l,i){"use strict";i.r(l);var s=i(9268),a=i(2953),r=i(9321),t=i(1505),m=i(5846),n=i.n(m);let c=e=>{let{bgStyle:l="default",paddingTop:i="10"}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"mil-".concat(l,"-bg mil-relative"),style:{marginTop:"-50px"},children:["soft"==l&&(0,s.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,s.jsxs)("div",{className:"container mil-p-".concat(i,"-60"),children:[(0,s.jsxs)("div",{className:"row align-items-end",children:[(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsx)("div",{className:"mil-mb-90",children:(0,s.jsx)("h2",{className:"mil-upper mil-up",dangerouslySetInnerHTML:{__html:t.TN}})})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsx)("div",{className:"mil-adaptive-right mil-up mil-mb-90",children:(0,s.jsxs)("div",{className:"mil-nav-buttons",children:[(0,s.jsx)("div",{className:"mil-slider-button mil-process-prev",children:"Prev"}),(0,s.jsx)("div",{className:"mil-slider-button mil-process-next",children:"Next"})]})})})]}),(0,s.jsx)(r.tq,{...a.M.milProcessSlider,className:"swiper-container mil-process-slider",style:{marginTop:"-30px"},children:(0,s.jsxs)("div",{className:"swiper-wrapper",children:[(0,s.jsx)(r.o5,{className:"swiper-slide",children:(0,s.jsxs)("div",{className:"row ",children:[(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/Kaiser",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/covers/project/kaiser.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper mil-text-sm",children:"kaiser"})}),(0,s.jsx)("div",{className:"mil-category",children:" Kitchen Appliances manufacturers"})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/Bajaj",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/covers/project/bajaj.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper  mil-text-sm",children:"Bajaj"})}),(0,s.jsx)("div",{className:"mil-category",children:"Bike Manufacturers "})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/Tonino",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/covers/project/tonino.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper mil-text-sm",children:"Tonino "})}),(0,s.jsx)("div",{className:"mil-category",children:" Restaurant"})]})})]})}),(0,s.jsx)(r.o5,{className:"swiper-slide",children:(0,s.jsxs)("div",{className:"row ",children:[(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/Secondcup ",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/covers/project/lg/secondcup1.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper  mil-text-sm",children:"Second Cup  "})}),(0,s.jsx)("div",{className:"mil-category",children:" Coffee Shop"})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/GTSW",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/allimg/logo/Giti.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper  mil-text-sm",children:" GTSW "})}),(0,s.jsx)("div",{className:"mil-category",children:" Battery and Tyre Manufacturers "})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/FarhatFreres  ",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/allimg/logo/farhat .webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper  mil-text-sm",children:" Farhat Freres "})}),(0,s.jsxs)("div",{className:"mil-category",children:[(0,s.jsx)("span",{style:{marginLeft:"20px"},children:" Automotive Dealer"})," "]})]})})]})}),(0,s.jsx)(r.o5,{className:"swiper-slide",children:(0,s.jsxs)("div",{className:"row  ",children:[(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/Amore  ",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/allimg/logo/amore.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper mil-text-sm",children:"Amore Glacier "})}),(0,s.jsx)("div",{className:"mil-category",children:" Cafe"})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/Istanbul",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/allimg/logo/Istanbul.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper  mil-text-sm",children:" Istanbul Sofrasi  "})}),(0,s.jsx)("div",{className:"mil-category",children:"Restaurant"})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/MCM",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:" ./img/allimg/logo/mcm.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper  mil-text-sm",children:"MCM "})}),(0,s.jsx)("div",{className:"mil-category",children:" Construction Materials "})]})})]})}),(0,s.jsx)(r.o5,{className:"swiper-slide",children:(0,s.jsx)("div",{className:"row  ",children:(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)(n(),{href:"/Motorland",className:"mil-portfolio-item mil-square-item mil-up mil-mb-30",children:[(0,s.jsx)("img",{src:"./img/covers/project/Mllog.webp",alt:"img"}),(0,s.jsx)("div",{className:"mil-project-descr2",children:(0,s.jsx)("h4",{className:"mil-upper  mil-text-sm ",children:"Motorland"})}),(0,s.jsxs)("div",{className:"mil-category",children:[(0,s.jsx)("span",{style:{marginLeft:"20px"},children:" Automotive Dealer"})," "]})]})})})})]})})]})]})})};l.default=c},6008:function(e,l,i){e.exports=i(167)},8520:function(e){"use strict";e.exports=JSON.parse('{"Xd":{"Tb":"https://formspree.io/f/your_api_key"},"Fs":{"j":{"B":"./img/photo/all img/BM Logo.webp","w":"Logo"},"G":[{"label":"Home","link":"/","children":0},{"label":"About Us","link":"/about","children":0},{"label":"Services","link":"/services","children":[{"label":"Social Media Marketing","link":"/socialMedia"},{"label":"Branding","link":"/branding"},{"label":"Web Development","link":"/web"},{"label":"SEO","link":"/seo"},{"label":"Paid Ads","link":"/paidAds"},{"label":"PHOTOGRAPHY & VIDEO Production","link":"/photoAndVideography"}]},{"label":"Projects","link":"/Project","children":0},{"label":"Contact Us","link":"/contact","children":0}]},"Mv":{"jY":{"w":"Logo"},"GI":[{"label":"Home","link":"/"},{"label":"About","link":"/about"},{"label":"Projects","link":"/Project"},{"label":"Contact","link":"/contact"}]},"xs":[{"link":"https://www.facebook.com/brightmediaglobal/","title":"Facebook"},{"link":"https://www.linkedin.com/company/brightmedia-tech/","title":"Linkedin"},{"link":"https://www.instagram.com/brightmedia.tech/","title":"Instagram"},{"link":"https://www.youtube.com/@MoideenShahil","title":"Youtube"}]}')},1505:function(e){"use strict";e.exports=JSON.parse('{"TN":"Our Works","Oc":"","QK":[[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}],[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}],[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}]]}')}}]);