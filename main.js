(()=>{"use strict";const t=class{#t;#e;constructor(t){this.#t=t,this.#e=0}hit(){this.#e++}isSunk(){return this.#e>=this.#t}get ship(){return{len:this.#t,hits:this.#e}}},e=class{#r;#o;constructor(){this.#r=Array(7);for(let t=0;t<this.#r.length;t++){this.#r[t]=Array(7);for(let e=0;e<this.#r.length;e++)this.#r[t][e]={hit:!1}}this.#o=[]}get board(){return this.#r}get ships(){return this.#o}placeShip(e,r){let[o,i]=e;if(o<0||o>6)return!1;if(i<0||i>6)return!1;if(i+r-1>6)return!1;for(let t=0;t<r;t++)if(this.#r[o][i+t].ship)return console.log("Unable to place ship. Spot already taken."),!1;let s=new t(r);for(let t=0;t<r;t++)this.#r[o][i+t].ship=s;return this.#o.push(s),!0}receiveAttack(t){let[e,r]=t;return this.#r[e][r].ship?!this.#r[e][r].hit&&(this.#r[e][r].ship.hit(),this.#r[e][r].hit=!0,this.hasBeenSunk(t)&&this.#o.pop(),!0):(this.#r[e][r].hit=!0,!1)}hasBeenAttacked(t){let[e,r]=t;return this.#r[e][r].hit}hasBeenSunk(t){let[e,r]=t;return this.#r[e][r].ship.isSunk()}allShipsSunk(){return 0==this.#o.length}printBoard(){this.#r.forEach((t=>console.log(t))),console.log(" ")}};function r(t){for(let e=0;e<t.length;e++)for(let r=0;r<t.length;r++){let o=document.querySelector(`#a${e}${r}`);!t[e][r].ship&&t[e][r].hit&&(o.style.backgroundColor="lightgray"),t[e][r].ship&&!t[e][r].hit&&(o.style.backgroundColor="gray"),t[e][r].ship&&t[e][r].hit&&(o.style.backgroundColor="darkred"),t[e][r].ship&&t[e][r].ship.isSunk()&&(o.style.backgroundColor="red")}}const o=class{#i;constructor(){this.#i=Array(7);for(let t=0;t<this.#i.length;t++)this.#i[t]=Array(7).fill(!1)}getMove(){for(;;){let t=Math.floor(7*Math.random()),e=Math.floor(7*Math.random());if(!this.#i[t][e])return this.#i[t][e]=!1,[t,e]}}};let i,s,h=new o;function l(t){!function(){let t=document.querySelectorAll(".col1");t.forEach((t=>{t.style.backgroundColor="white"})),t=document.querySelectorAll(".col2"),t.forEach((t=>{t.style.backgroundColor="white"}))}(),n()}function n(){i=new e,s=new e,function(t){let e=new o;for(;!t.placeShip(e.getMove(),2););for(;!t.placeShip(e.getMove(),3););for(;!t.placeShip(e.getMove(),3););for(;!t.placeShip(e.getMove(),4););for(;!t.placeShip(e.getMove(),5););}(s),function(){let t=[2,3,3,4,5];document.querySelectorAll(".col1").forEach((e=>{e.addEventListener("click",(e=>function(t,e){let o=t.target.getAttribute("id").split("");o.shift();let n=o.map((t=>parseInt(t)));i.placeShip(n,e[0])&&(1==e.length&&document.querySelectorAll(".col2").forEach((t=>{t.addEventListener("click",(t=>{!function(t){let e=t.target.getAttribute("id").split("");e.shift();let o=e.map((t=>parseInt(t)));s.board[o[0]][o[1]].hit||(s.receiveAttack(o),function(t){for(let e=0;e<t.length;e++)for(let r=0;r<t.length;r++){let o=document.querySelector(`#b${e}${r}`);!t[e][r].ship&&t[e][r].hit&&(o.style.backgroundColor="lightgray"),t[e][r].ship&&t[e][r].hit&&(o.style.backgroundColor="darkred"),t[e][r].ship&&t[e][r].ship.isSunk()&&(o.style.backgroundColor="red")}}(s.board),s.allShipsSunk()&&l(),function(){let t=h.getMove();for(;i.board[t[0]][t[1]].hit;)t=h.getMove();i.receiveAttack(t),r(i.board),i.allShipsSunk()&&l()}())}(t)}))})),r(i.board),e.shift())}(e,t)))}))}()}n()})();