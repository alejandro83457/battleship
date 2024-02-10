(()=>{"use strict";const t=class{#t;#e;constructor(t){this.#t=t,this.#e=0}hit(){this.#e++}isSunk(){return this.#e>=this.#t}get ship(){return{len:this.#t,hits:this.#e}}},e=class{#r;#s;constructor(){this.#r=Array(7);for(let t=0;t<this.#r.length;t++){this.#r[t]=Array(7);for(let e=0;e<this.#r.length;e++)this.#r[t][e]={hit:!1}}this.#s=[]}get board(){return this.#r}get ships(){return this.#s}placeShip(e,r){let[s,i]=e;if(s<0||s>6)return!1;if(i<0||i>6)return!1;if(i+r-1>6)return!1;for(let t=0;t<r;t++)if(this.#r[s][i+t].ship)return console.log("Unable to place ship. Spot already taken."),!1;let o=new t(r);for(let t=0;t<r;t++)this.#r[s][i+t].ship=o;return this.#s.push(o),!0}receiveAttack(t){let[e,r]=t;return this.#r[e][r].ship?!this.#r[e][r].hit&&(this.#r[e][r].ship.hit(),this.#r[e][r].hit=!0,this.hasBeenSunk(t)&&this.#s.pop(),!0):(this.#r[e][r].hit=!0,!1)}hasBeenAttacked(t){let[e,r]=t;return this.#r[e][r].hit}hasBeenSunk(t){let[e,r]=t;return this.#r[e][r].ship.isSunk()}allShipsSunk(){return 0==this.#s.length}printBoard(){this.#r.forEach((t=>console.log(t))),console.log(" ")}},r=class{#i;constructor(){this.#i=Array(7);for(let t=0;t<this.#i.length;t++)this.#i[t]=Array(7).fill(!1)}getMove(){for(;;){let t=Math.floor(7*Math.random()),e=Math.floor(7*Math.random());if(!this.#i[t][e])return this.#i[t][e]=!1,[t,e]}}};!function(){let t=new e;!function(t){let e=new r;for(;!t.placeShip(e.getMove(),2););for(;!t.placeShip(e.getMove(),3););for(;!t.placeShip(e.getMove(),3););for(;!t.placeShip(e.getMove(),4););for(;!t.placeShip(e.getMove(),5););}(new e),function(t){let e=[2,3,3,4,5];document.querySelectorAll(".col1").forEach((r=>{r.addEventListener("click",(r=>function(t,e,r){let s=t.target.getAttribute("id").split("");s.shift();let i=s.map((t=>parseInt(t)));e.placeShip(i,r[0])&&(1==r.length&&console.log("play"),function(t){for(let e=0;e<t.length;e++)for(let r=0;r<t.length;r++){if(!t[e][r].ship)continue;let s=document.querySelector(`#a${e}${r}`);t[e][r].hit||(s.style.backgroundColor="gray"),t[e][r].hit&&(s.style.backgroundColor="darkred"),t[e][r].ship.isSunk()&&(s.style.backgroundColor="red")}}(e.board),r.shift())}(r,t,e)))}))}(t)}()})();