(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{275:function(e,t,l){var content=l(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(44).default)("010f2b4a",content,!0,{sourceMap:!1})},276:function(e,t,l){"use strict";l.r(t);var n={data:function(){return{JumpLinks:[{title:"Departments",slug:"/#departments"},{title:"Contact",slug:"/#contact"}],anchorLinks:[{title:"About",slug:"/#about"},{title:"Staff",slug:"/#staff"},{title:"Gallery",slug:"/#gallery"}]}}},r=l(42),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("header",{staticClass:"container flex justify-around items-center py-1",attrs:{id:"home"}},[l("nav",{staticClass:"hidden md:flex flex-1 justify-around bg-white py-1 font-bold rounded-full shadow"},e._l(e.JumpLinks,(function(link){return l("nuxt-link",{key:link.title,staticClass:"text-primary px-6 py-2 rounded-full mr-2 hover:bg-accent",attrs:{to:link.slug},domProps:{textContent:e._s(link.title)}})})),1),e._v(" "),l("nuxt-link",{staticClass:"border border-primary rounded-full bg-white p-2 mx-4",attrs:{to:"/"}},[l("img",{staticClass:"mx-auto",attrs:{src:e.$config.schoolLogo,alt:"logo",width:"120"}})]),e._v(" "),l("nav",{staticClass:"hidden md:flex flex-1 justify-around bg-white py-1 font-bold rounded-full shadow"},e._l(e.anchorLinks,(function(link){return l("nuxt-link",{key:link.title,staticClass:"text-primary text-center px-6 py-2 rounded-full mr-2 hover:bg-accent",attrs:{to:link.slug},domProps:{textContent:e._s(link.title)}})})),1)],1)}),[],!1,null,null,null);t.default=component.exports},277:function(e,t,l){"use strict";l(275)},278:function(e,t,l){var n=l(43)((function(i){return i[1]}));n.push([e.i,"",""]),e.exports=n},280:function(e,t,l){"use strict";l.r(t);l(24),l(63);var n={data:function(){return{preloadImages:[],currentCarousel:{},carousel:[{title:"Principal and Students 1",image:"/images/sliders/slide-1.jpeg",text:"We aims at preparing for the brightest future by giving unparalleled dedication and commitment to our students and their variety of needs, passions and dreams."},{title:"Trophy 1",image:"/images/sliders/slide-2.jpeg",text:"We won bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere et ex sit amet lobortis. Pellentesque sodales et lacus in posuere."},{title:"Principal and Students 2",image:"/images/sliders/slide-3.jpeg",text:"Lorem ipsum dolor sit amet, Maecenas posuere et ex sit amet lobortis. Pellentesque sodales et lacus in posuere. Suspendisse rhoncus ultrices elit sagittis viverra."}]}},created:function(){var e=this;this.carousel.forEach((function(element){new Image(0,0).src=element.image}));var i=0;setInterval((function(){e.currentCarousel=e.carousel[i],i>=e.carousel.length-1?i=0:i++}),1e4)}},r=(l(277),l(42)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("header",{staticClass:"min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover bg-center bg-accent",style:"background-image: url('"+e.currentCarousel.image+"')"},[l("partials-nav-bar"),e._v(" "),l("nav",{staticClass:"flex-1 flex flex-col justify-end items-baseline mx-auto lg:w-2/3 py-4 lg:py-8"},[l("div",{staticClass:"bg-secondary bg-opacity-75 p-8 lg:px-12 rounded shadow w-full"},[l("div",{staticClass:"text-lg text-wide leading-relaxed"},[e._v("\n        "+e._s(e.currentCarousel.text)+"\n      ")])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PartialsNavBar:l(276).default})}}]);