(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{275:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("010f2b4a",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{JumpLinks:[{title:"Departments",slug:"/#departments"},{title:"Contact",slug:"/#contact"}],anchorLinks:[{title:"About",slug:"/about/"},{title:"Staff",slug:"/staff/"},{title:"Gallery",slug:"/gallery/"}]}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"container flex justify-around items-center py-1"},[n("nav",{staticClass:"hidden md:flex flex-1 justify-around bg-white bg-opacity-75 py-1 font-bold rounded-full shadow"},t._l(t.JumpLinks,(function(link){return n("nuxt-link",{key:link.title,staticClass:"text-primary px-6 py-2 rounded-full mr-2 hover:bg-accent",attrs:{to:link.slug},domProps:{textContent:t._s(link.title)}})})),1),t._v(" "),n("nuxt-link",{staticClass:"border border-primary rounded-full bg-white p-2 mx-4",attrs:{to:"/"}},[n("img",{staticClass:"mx-auto",attrs:{src:t.$config.schoolLogo,alt:"logo",width:"120"}})]),t._v(" "),n("nav",{staticClass:"hidden md:flex flex-1 justify-around bg-white bg-opacity-75 py-1 font-bold rounded-full shadow"},t._l(t.anchorLinks,(function(link){return n("nuxt-link",{key:link.title,staticClass:"text-primary text-center px-6 py-2 rounded-full mr-2 hover:bg-accent",attrs:{to:link.slug},domProps:{textContent:t._s(link.title)}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n(275)},278:function(t,e,n){var r=n(43)((function(i){return i[1]}));r.push([t.i,"",""]),t.exports=r},279:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("bad8e090",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n.r(e);n(24),n(63);var r={data:function(){return{preloadImages:[],currentCarousel:{},carousel:[{title:"Principal and Students 1",image:"/images/sliders/slide-1.jpeg",text:"We aims at preparing for the brightest future by giving unparalleled dedication and commitment to our students and their variety of needs, passions and dreams."},{title:"Trophy 1",image:"/images/sliders/slide-2.jpeg",text:"We won bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere et ex sit amet lobortis. Pellentesque sodales et lacus in posuere."},{title:"Principal and Students 2",image:"/images/sliders/slide-3.jpeg",text:"Lorem ipsum dolor sit amet, Maecenas posuere et ex sit amet lobortis. Pellentesque sodales et lacus in posuere. Suspendisse rhoncus ultrices elit sagittis viverra."}]}},created:function(){var t=this;this.carousel.forEach((function(element){new Image(0,0).src=element.image}));var i=0;setInterval((function(){t.currentCarousel=t.carousel[i],i>=t.carousel.length-1?i=0:i++}),1e4)}},l=(n(277),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover bg-accent",style:"background-image: url('"+t.currentCarousel.image+"')"},[n("partials-nav-bar"),t._v(" "),n("nav",{staticClass:"flex-1 flex flex-col justify-end items-baseline mx-auto lg:w-2/3 py-4"},[n("div",{staticClass:"bg-secondary bg-opacity-75 p-8 lg:px-12 rounded shadow w-full"},[n("div",{staticClass:"text-lg text-wide leading-relaxed"},[t._v("\n        "+t._s(t.currentCarousel.text)+"\n      ")]),t._v(" "),t._m(0)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-8"},[n("a",{staticClass:"text-white bg-primary text-center text-lg font-semibold px-8 py-3 rounded mr-2 hover:bg-accent hover:text-primary border border-primary",attrs:{href:"#about"}},[t._v("\n          Explore Website "),n("i",{staticClass:"fas fa-chevron-circle-down ml-8"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PartialsNavBar:n(276).default})},281:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{departments:[{title:"Business & Commerce",icon:"fa-chart-line"},{title:"Art & Humanity",icon:"fa-landmark"},{title:"Science",icon:"fa-microscope"}]}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container py-12"},[n("h2",{staticClass:"text-xl text-center font-semibold py-8"},[t._v("Departments")]),t._v(" "),n("div",{staticClass:"flex justify-around py-8"},t._l(t.departments,(function(e){return n("div",{key:e.title,staticClass:"flex-1 font-semibold text-primary text-center"},[n("i",{staticClass:"fas fa-7x",class:e.icon}),t._v(" "),n("div",{staticClass:"py-4 text-lg"},[t._v(t._s(e.title))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{contactInfo:[{title:"Phone",icon:"fa-phone",address:this.$config.schoolTelephone},{title:"E-mail",icon:"fa-envelope",address:this.$config.schoolEmail},{title:"Address",icon:"fa-map-marker",address:this.$config.schoolLocation}]}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container py-8",attrs:{id:"contact"}},[n("nav",{staticClass:"md:w-2/3 bg-gradient-to-r from-accent to-white rounded shadow-md mx-auto"},[n("nav",{staticClass:"flex justify-evenly bg-right bg-no-repeat bg-contain text-primary"},[n("div",{staticClass:"flex justify-between items-center w-full p-12"},[n("div",{staticClass:"flex flex-column items-center h-full"},[n("div",[n("h2",{staticClass:"text-xl font-bold font-bolder pb-8"},[t._v("Contact Us!")]),t._v(" "),t._l(t.contactInfo,(function(e){return n("div",{key:e.title,staticClass:"font-medium pb-4"},[n("i",{staticClass:"fas mr-4",class:e.icon}),t._v(" "+t._s(e.address)+"\n            ")])}))],2)]),t._v(" "),t._m(0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-secondary"},[e("i",{staticClass:"far fa-comments fa-10x invisible lg:visible"})])}],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{quickLinks:[{title:"Home",slug:"/",icon:"fa-home"},{title:"About Us",slug:"/about/",icon:"fa-info-circle"},{title:"Our Staff",slug:"/staff/",icon:"fa-users"},{title:"Gallery",slug:"/gallery/",icon:"fa-photo-video"}],socialLinks:[{title:"Facebook",icon:"fa-facebook",href:this.$config.schoolFacebook},{title:"Twitter",icon:"fa-twitter",href:this.$config.schoolTwitter},{title:"Instagram",icon:"fa-instagram",href:this.$config.schoolInstagram},{title:"Youtube",icon:"fa-youtube",href:this.$config.schoolYoutube}]}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("nav",{staticClass:"text-gray-800 py-12"},[n("div",{staticClass:"container flex flex-wrap justify-around item-center"},[n("nav",{staticClass:"min-w-full md:min-w-0 md:max-w-1/4 text-primary order-1 md:order-2 pb-8 md:pb-0"},[n("h4",{staticClass:"text-center text-lg tracking-wide font-bold pb-4"},[t._v("\n          Quick Links\n        ")]),t._v(" "),t._l(t.quickLinks,(function(link){return n("nuxt-link",{key:link.slug,staticClass:"block px-6 py-2 my-2 font-medium bg-accent rounded-full border border-secondary hover:bg-secondary",attrs:{to:link.slug}},[n("i",{staticClass:"fas mr-4",class:link.icon}),t._v("\n          "+t._s(link.title))])}))],2),t._v(" "),n("nav",{staticClass:"order-2 md:order-1 pb-8 md:pb-0"},[n("img",{staticClass:"mx-auto",attrs:{src:t.$config.schoolLogo,alt:"logo",width:"240"}})]),t._v(" "),t._m(0)])]),t._v(" "),n("nav",{staticClass:"container text-center text-gray-800 py-12"},[n("div",{staticClass:"text-xl text-primary pb-4"},t._l(t.socialLinks,(function(link){return n("a",{key:link.title,staticClass:"p-2 mx-2 rounded",attrs:{href:link.href,title:link.title}},[n("i",{staticClass:"fab",class:link.icon})])})),0),t._v(" "),n("div",{},[t._v("\n      © "+t._s(t.$config.schoolName)+", 2021. Powered by\n      "),n("a",{staticClass:"font-bold text-primary",attrs:{href:"https://test.futurexeducation.com"}},[t._v("Future-X")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"order-3"},[e("img",{staticClass:"mx-auto",attrs:{src:"/images/lagos-logo.svg",alt:"logo",width:"240"}})])}],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n(279)},285:function(t,e,n){var r=n(43)((function(i){return i[1]}));r.push([t.i,"",""]),t.exports=r},298:function(t,e,n){"use strict";n.r(e);var r={},l=(n(284),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("partials-header"),t._v(" "),n("home-departments"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("home-contact-card"),t._v(" "),n("partials-footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container py-12"},[n("h2",{staticClass:"text-xl text-center font-bold font-bolder pb-8"},[t._v("\n      Sample Hero 1\n    ")]),t._v(" "),n("div",{staticClass:"lg:flex justify-between py-8"},[n("div",{staticClass:"lg:w-1/2 text-secondary"},[n("i",{staticClass:"far fa-comments fa-10x"})]),t._v(" "),n("div",{staticClass:"lg:w-1/2"},[t._v("\n        Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH\n        SCHOOL provides unparalleled dedication and commitment to students and\n        their variety of needs, passions and dreams. Explore our website to\n        learn more about us.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-secondary text-gray-700 my-8"},[n("div",{staticClass:"container md:2/3 lg:w-3/5 text-lg leading-relaxed font-medium py-12 md:py-20"},[t._v("\n      Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH\n      SCHOOL provides unparalleled dedication and commitment to students and\n      their variety of needs, passions and dreams. Explore our website to\n      learn more about us.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container py-12"},[n("h2",{staticClass:"text-xl text-center font-bold font-bolder pb-8"},[t._v("\n      Sample Hero 2\n    ")]),t._v(" "),n("div",{staticClass:"lg:flex justify-between py-8"},[n("div",{staticClass:"lg:w-1/2"},[t._v("\n        Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH\n        SCHOOL provides unparalleled dedication and commitment to students and\n        their variety of needs, passions and dreams. Explore our website to\n        learn more about us.\n      ")]),t._v(" "),n("div",{staticClass:"lg:w-1/2 text-secondary"},[n("i",{staticClass:"far fa-comments fa-10x invisible lg:visible"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container py-12"},[n("div",{staticClass:"lg:flex justify-between py-8"},[n("div",{staticClass:"lg:w-1/2 text-secondary"},[n("i",{staticClass:"far fa-comments fa-10x"})]),t._v(" "),n("div",{staticClass:"lg:w-1/2"},[t._v("\n        Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH\n        SCHOOL provides unparalleled dedication and commitment to students and\n        their variety of needs, passions and dreams. Explore our website to\n        learn more about us.\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PartialsHeader:n(280).default,HomeDepartments:n(281).default,HomeContactCard:n(282).default,PartialsFooter:n(283).default})}}]);