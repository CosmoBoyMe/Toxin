(()=>{"use strict";var e,t={627:(e,t,n)=>{var r=n(814);const a=(e,t={})=>{const{onClickApplyBtnHandler:n,newOpts:a={}}=t,o=document.getElementById(e);new r.Z(o,{range:!0,minDate:new Date,buttons:[{content:"очистить",attrs:{type:"button"},onClick:e=>e.clear()},{content:"Применить",attrs:{type:"button"},onClick:e=>{if(n)return n()}}],dateFormat:e=>e.toLocaleString("ru",{day:"2-digit",month:"short"}),prevHtml:'<span class="air-datepicker-prev"></span>',nextHtml:'<span class="air-datepicker-next"></span>',navTitles:{days:"MMMM yyyy"}}).update(a)},o=(e,t,n="")=>{const r=document.getElementById(e),o=r.querySelector(".js-calendar__date-picker"),l=r.querySelectorAll(".js-calendar__field"),s=r.querySelectorAll("input"),c=()=>{o.classList.toggle("js-calendar__date-picker--close")};l.forEach((e=>{e.addEventListener("click",c)})),a(t,"multiple"===n?{onClickApplyBtnHandler:c,newOpts:{onSelect:({date:e,formattedDate:t,datePicker:n})=>{const[r,a]=t,[o,l]=s;o.value=r??"",l.value=a??""},dateFormat:e=>e.toLocaleString("ru",{year:"numeric",day:"2-digit",month:"2-digit"})}}:{onClickApplyBtnHandler:c,newOpts:{onSelect:({date:e,formattedDate:t,datePicker:n})=>{const r=s[0],a=t.join(" - ");r.value=a}}}),o.addEventListener("click",(e=>{e.stopPropagation()})),document.addEventListener("click",(e=>{r.contains(e.target)||o.classList.add("js-calendar__date-picker--close")}))},l=(e,t)=>{if(0===e)return"";const n=Math.abs(e)%100,r=n%10;return n>10&&n<20?`${e} ${t[2]}`:r>1&&r<5?`${e} ${t[1]}`:1==r?`${e} ${t[0]}`:`${e} ${t[2]}`},s=document.querySelectorAll(".guest-dropdown"),c=()=>{s.forEach((e=>{const t=[["гость","гостя","гостей"],["младенец","младенца","младенцев"]];(({dropdownEl:e,wordsDeclensions:t="",onChangeTextValue:n=null})=>{const r=e.querySelector(".js-dropdown__input-wrapper"),a=e.querySelector(".js-dropdown__input"),o=e.querySelector(".js-dropdown__menu"),s=e.querySelectorAll(".js-amount-select__number"),c=e.querySelectorAll(".js-amount-select__btn-minus"),i=e.querySelectorAll(".js-amount-select__btn-plus"),d=e.querySelector(".js-dropdown__btn--clear"),u=e.querySelector(".js-dropdown__btn--apply"),p={},m=()=>{p.values=[...s].map((e=>Number(e.value))),p.totalCounts=[...s].reduce(((e,t)=>e+Number(t.value)),0)},v=()=>{m(),p.values.forEach(((e,t)=>{const n=s[t].previousElementSibling;0===e?n.setAttribute("disabled",!0):1===e&&n.removeAttribute("disabled")})),(()=>{if(0===p.totalCounts)a.value="";else if(n){const e=n(p.totalCounts,p.values);a.value=e}else{const e=t.map(((e,t)=>l(p.values[t],e))).filter((e=>""!==e)).join(", ");a.value=e}})(),0===p.totalCounts?d?.classList.add("js-dropdown__btn--hidden"):d?.classList.remove("js-dropdown__btn--hidden")},_=({target:e})=>{e.nextElementSibling.stepDown(),v()},y=({target:e})=>{e.previousElementSibling.stepUp(),v()};c.forEach((e=>{e.addEventListener("click",_)})),i.forEach((e=>{e.addEventListener("click",y)}));const b=()=>{o.classList.toggle("js-dropdown__menu--active")};r.addEventListener("click",b),u?.addEventListener("click",b),d?.addEventListener("click",(()=>{[...s].forEach((e=>{e.value=0})),m(),v()})),v(),document.addEventListener("click",(t=>{e.contains(t.target)||o.classList.remove("js-dropdown__menu--active")}))})({dropdownEl:e,onChangeTextValue:(e,n)=>[n[0]+n[1],n[2]].map(((e,n)=>l(e,t[n]))).filter((e=>""!==e)).join(", ")})}))};c(),o("search-rooms-form-calendar","search-rooms-form-date-picker","multiple");var i=n(419),d=n.n(i);const u=document.querySelector(".js-masked-field__input");d()({alias:"datetime",placeholder:"ДД.ММ.ГГГГ",inputFormat:"dd.mm.yyyy"}).mask(u),c(),o("booking-form-calendar","booking-form-datapicker","multiple");var p=n(6),m=n(655),v=n.n(m);new p.ZP(".card__slider",{modules:[p.W_,p.tl],slidesPerView:"auto",pagination:{el:".card__pagination",type:"bullets",clickable:!0,bulletClass:"card__pagination-bullet",bulletActiveClass:"card__pagination-bullet--active"},navigation:{nextEl:".card__btn--next",prevEl:".card__btn--prev"}}),document.querySelectorAll(".card").forEach((e=>{const t=e.querySelector(".card__description-header-value"),n=v()({thousand:" ",suffix:"₽"}).to(Number(t.textContent));t.textContent=n})),a("main__third-column-datepicker")}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,a,o]=e[d],s=!0,c=0;c<n.length;c++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(d--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={12:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[l,s,c]=n,i=0;if(l.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var d=c(r)}for(t&&t(n);i<l.length;i++)o=l[i],r.o(e,o)&&e[o]&&e[o][0](),e[l[i]]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[814,419,412],(()=>r(627)));a=r.O(a)})();
//# sourceMappingURL=cards.bundle.js.map