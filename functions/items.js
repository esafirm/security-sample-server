!function(e,n){for(var r in n)e[r]=n[r]}(exports,function(e){var n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(t,a,function(n){return e[n]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=1)}([function(e,n){n.checkApiKey=((e,n)=>{return"12345"===e.queryStringParameters.apiKey||(n(null,{statusCode:401,body:JSON.stringify({message:"No Access!"})}),!1)}),n.checkToken=((e,n)=>{return!!e.queryStringParameters.token||(n(null,{statusCode:401,body:JSON.stringify({message:"You're not authorized to access this API"})}),!1)})},function(e,n,r){const t=r(0),a=[{id:1,name:"HP Jadoel Sekali",harga:3e3,deskripsi:"Ini hape jadoel sekali"},{id:2,name:"HP Jadoel Dua kali",harga:3e3,deskripsi:"Ini hape jadoel sekali"},{id:3,name:"HP Jadoel Tiga kali",harga:3e3,deskripsi:"Ini hape jadoel sekali"},{id:4,name:"HP Jadoel Empat kali",harga:3e3,deskripsi:"Ini hape jadoel sekali"},{id:5,name:"HP Jadoel Lima Kali",harga:3e3,deskripsi:"Ini hape jadoel sekali"}];n.handler=function(e,n,r){t.checkApiKey(e,r)&&t.checkToken(e,r)&&r(null,{statusCode:200,body:JSON.stringify({message:"Success",items:a})})}}]));