(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Huey Freeman Breaking Bad",image:"./img/huey-breaking-bad.png"},{id:2,name:"Riley Freeman",image:"./img/riley.png"},{id:3,name:"Cindy Mc Pherson",image:"./img/cindy-gangsta.png"},{id:4,name:"Cindy Mc Pherson Gangsta",image:"./img/cindy-mc-phearson.png"},{id:5,name:"Gin Rummy",image:"./img/gin-rummy.png"},{id:6,name:"Grandad Pointing",image:"./img/grandad-point.png"},{id:7,name:"Jazmine Dubois",image:"./img/jazmine-dubois.png"},{id:8,name:"Luna",image:"./img/luna.png"},{id:9,name:"Riley Freeman Gangsta",image:"./img/riley-gangsta.png"},{id:10,name:"Stinkmeaner",image:"./img/stinkmeaner.png"},{id:11,name:"Huey Freeman",image:"./img/huey-ripped-shirt.png"},{id:12,name:"Uncle Ruckus",image:"./img/uncle-ruckus.png"}]},,,,,,,,function(e,n,a){e.exports=a(19)},,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var i=a(0),r=a.n(i),t=a(3),m=a.n(t),o=(a(15),a(4)),c=a(5),d=a(7),s=a(6),g=a(8);a(16);var l=function(e){return console.log(e),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){e.clicked?e.gameOver():e.removeFriend(e.id)},className:"remove"})))};a(17);var u=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(18);var f=function(e){return r.a.createElement("h1",{className:"title"},e.children)},h=a(1),p=function(e){function n(){var e,a;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),t=0;t<i;t++)r[t]=arguments[t];return(a=Object(d.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={friends:h},a.shuffle=function(e){for(var n,a,i=e.length;0!==i;)a=Math.floor(Math.random()*i),n=e[i-=1],e[i]=e[a],e[a]=n;return e},a.removeFriend=function(e){var n=[];a.state.friends.forEach(function(a){var i=!1;a.id!==e&&!0!==a.clicked||(i=!0);var r={name:a.name,image:a.image,id:a.id,clicked:i};n.push(r)}),a.shuffle(n),a.setState({friends:n}),console.log("remove friend ran and this is the info passed",h)},a}return Object(g.a)(n,e),Object(c.a)(n,[{key:"gameOver",value:function(){alert("You lose.")}},{key:"renderCards",value:function(){var e=this;return this.state.friends.map(function(n){return r.a.createElement(l,{removeFriend:e.removeFriend,id:n.id,key:n.id,name:n.name,image:n.image,clicked:n.clicked,gameOver:e.gameOver})})}},{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(f,null,"Residents of woodcrest"),this.renderCards())}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.88c06214.chunk.js.map