(()=>{"use strict";var e={player:0,computer:0},n={rock:"scissors",paper:"rock",scissors:"paper"};const t={rock:"&#9994",paper:"&#9995",scissors:"&#9996",reset:"&#10067"};function o(){e.player=0,e.computer=0,document.getElementById("playBox").innerHTML="",m()}function c(e){let n=e.toUpperCase(),t=document.getElementById("playBox");t.innerHTML="";let c=document.createElement("div"),r=document.createElement("div"),m=document.createElement("button");c.innerHTML="GAME OVER!",r.innerHTML=`YOU ${n}`,m.innerHTML="Play Again?",m.addEventListener("click",o),t.append(c,r,m)}function r(o){let r=["rock","paper","scissors"][Math.floor(3*Math.random())];var m,d;!function(t,o){let c=document.getElementById("mainAnnouncement"),r=document.getElementById("subAnnouncement");t==o?(c.innerHTML="Its A Tie",r.innerHTML=`you both threw ${t}`):o==n[t]?(c.innerHTML="You Win!",r.innerHTML=`${t} beats ${o}`,e.player+=1):(c.innerHTML="You Lose!",r.innerHTML=`${o} beats ${t}`,e.computer+=1)}(o,r),function(e,n,o,c){let r=document.getElementById("playerGameIcon"),m=document.getElementById("computerGameIcon"),d=document.getElementById("playerGameScore"),i=document.getElementById("computerGameScore");r.innerHTML=t[e],m.innerHTML=t[o],d.innerHTML="Player: "+n,i.innerHTML="Computer: "+c}(o,e.player,r,e.computer),m=e.player,d=e.computer,5==m?c("win"):5==d&&c("lose")}function m(){!function(){let e=document.getElementById("playBox"),n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div");n.id="announcementsBox",t.id="mainAnnouncement",o.id="subAnnouncement",t.innerHTML="Are You Ready?",o.innerHTML="choose your weapon!",n.append(t,o),e.append(n)}(),function(){let e=document.getElementById("playBox"),n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div"),m=document.createElement("div"),d=document.createElement("div");n.id="gameBox",t.id="playerGameBox",o.id="playerGameIcon",c.id="playerGameScore",r.id="computerGameBox",m.id="computerGameIcon",d.id="computerGameScore",o.innerHTML="&#10067",c.innerHTML="Player: 0",m.innerHTML="&#10067",d.innerHTML="Computer: 0",t.append(o,c),r.append(m,d),n.append(t,r),e.append(n)}(),function(){let e=document.getElementById("playBox"),n=document.createElement("div"),t=document.createElement("button"),o=document.createElement("button"),c=document.createElement("button");n.id="playerChoices",t.id="rockBtn",o.id="paperBtn",c.id="scissorsBtn",t.innerHTML="&#9994",o.innerHTML="&#9995",c.innerHTML="&#9996",n.append(t,o,c),e.append(n)}();let e=document.getElementById("rockBtn"),n=document.getElementById("paperBtn"),t=document.getElementById("scissorsBtn");e.addEventListener("click",(e=>{r("rock")})),n.addEventListener("click",(e=>{r("paper")})),t.addEventListener("click",(e=>{r("scissors")}))}m()})();