(()=>{"use strict";const t=class{#t;#s;constructor(t){this.#t=t,this.#s=0}hit(){this.#s++}isSunk(){return this.#s>=this.#t}get ship(){return{len:this.#t,hits:this.#s}}};let s=new class{#i;#h;constructor(){this.#i=Array(7);for(let t=0;t<this.#i.length;t++){this.#i[t]=Array(7);for(let s=0;s<this.#i.length;s++)this.#i[t][s]={hit:!1}}this.#h=[]}placeShip(s,i){let[h,r]=s;if(h<0||h>6)return!1;if(r<0||r>6)return!1;if(r+i>6)return!1;for(let t=0;t<i;t++)if(this.#i[h][r+t].ship)return console.log("Unable to place ship. Spot already taken."),!1;let o=new t(i);for(let t=0;t<i;t++)this.#i[h][r+t].ship=o;return this.#h.push(o),!0}receiveAttack(t){let[s,i]=t;return this.#i[s][i].ship?!this.#i[s][i].hit&&(this.#i[s][i].ship.hit(),this.#i[s][i].hit=!0,!0):(this.#i[s][i].hit=!0,!1)}hasBeenAttacked(t){let[s,i]=t;return 0!=this.#i[s][i]&&!!this.#i[s][i].hit}printBoard(){this.#i.forEach((t=>console.log(t))),console.log(" ")}printShips(){this.#h.forEach((t=>console.log(t.ship)))}};s.printBoard(),console.log(s.placeShip([0,0],2)),s.printBoard(),console.log(s.placeShip([0,2],2))})();