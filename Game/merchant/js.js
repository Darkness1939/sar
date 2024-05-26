var x = 80;
var y = 400; 
var health = 100;
var energy = 1000;
var ehealth = 1000;
var amounttot = 0; 
var c = 500;
localStorage.setItem('coins', c);

window.onload = function(){
    document.getElementById('money').innerHTML = `${localStorage.getItem('coins')}<img  src="D:/game/Game/tutorial/coin.avif" alt="" id="coin">`;
}
let end = false;

window.onkeydown = function move_left()
{ 
  if(!end){
    if(event.keyCode==37){
        x=x-10;
        document.getElementById('chel').style.left = x + 'px';
    }
        else if(event.keyCode==39){
            x=x+10;
            document.getElementById('chel').style.left= x + 'px';
        }

    if(event.keyCode==38){
        y=y-10;
        document.getElementById('chel').style.top = y + 'px';
    }
         else if(event.keyCode==40){
             y=y+10;
             document.getElementById('chel').style.top= y + 'px';
       }   
    
    if(x>(window.innerWidth-window.innerWidth*0.05))
    {
        x=window.innerWidth-window.innerWidth*0.1;
        health=health-5;
        document.getElementById('chel').style.left= x + 'px';
        document.getElementById('G').innerText = `${health}`;   
    }
    else if(x<-50)
    {
        x=-30;
        health=health-5;
        document.getElementById('chel').style.left= x + 'px';
        document.getElementById('G').innerText = `${health}`;   
    }
    if(y<-50)
    {
        y=-30;
        health=health-5;
        document.getElementById('chel').style.top= y + 'px';
        document.getElementById('G').innerText = `${health}`;   
    }
    else if(y>(window.innerHeight-window.innerHeight*0.05))
    {
        y=window.innerHeight-window.innerHeight*0.15;
        health=health-5;
        document.getElementById('chel').style.top= y + 'px';
        document.getElementById('G').innerText = `${health}`;   
    }
    if(health <= 0)
    {
       health = 0;
       document.getElementById('G').innerText = 0;
       end = true;  
       document.getElementById('text').innerHTML = `You dead! <button id="dres" onclick="location.reload();">Reset</button>`;
       document.getElementById('text').style.display= 'flex';
    } 
    if((x>=0&&x<=70)&&(y>=280&&y<=490)){
        document.getElementById('help').innerHTML = `<b>You cant go back!</b><button id='oh' onclick="no2()">Ok</button>`;
        document.getElementById('help').style.display = 'flex';
     } 
    if((x==560)&&(y>=-50&&y<=260)){
         x=x-20;
         document.getElementById('help').innerHTML = `<b>You cant come here.</b><button id='oh' onclick="no2()">Ok</button>`;
         document.getElementById('help').style.display = 'flex';
    }
    if((x>=560&&x<1260)&&(y==260)){
        y=y+20;
        document.getElementById('help').innerHTML = `<b>Buy or leave!</b><button id='oh' onclick="no2()">Ok</button>`;
        document.getElementById('help').style.display = 'flex';
   }
   if((x==1260)&&(y>=-50&&y<=260)){
    x=x+20;
    document.getElementById('help').innerHTML = `<b>You cant come here.</b><button id='oh' onclick="no2()">Ok</button>`;
    document.getElementById('help').style.display = 'flex';
    }
    if((x>=650&&x<=670)&&(y==270)){
        document.getElementById('help').innerHTML = `<b>Are you sure you want to purchase this item?</b><button onclick="buytotem()" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
    document.getElementById('help').style.display = 'flex'; 
    }
    if((x>=760&&x<=850)&&(y==270)){
        document.getElementById('help').innerHTML = `<b>Are you sure you want to purchase this item?</b><button onclick="buyedge()" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
    document.getElementById('help').style.display = 'flex'; 
    }
    if((x>=1010&&x<=1040)&&(y==270)){
        document.getElementById('help').innerHTML = `<b>Are you sure you want to purchase this item?</b><button onclick="buyflakon()" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
    document.getElementById('help').style.display = 'flex'; 
    }
    if((x>=1130&&x<=1170)&&(y==270)){
        document.getElementById('help').innerHTML = `<b>Are you sure you want to purchase this item?</b><button onclick="buydn()" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
    document.getElementById('help').style.display = 'flex'; 
    }
    if((x>=1770)&&(y>=300&&y<=520)){
       document.getElementById('help').innerHTML = `<b>Are you sure you want to go?</b><button id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
       document.getElementById('help').style.display = 'flex';
    }
      }    
   }

   function buytotem(){
    if(c>=15&&amounttot==0){
        c=c-15;
        localStorage.clear;
        localStorage.setItem('coins', c);
        document.getElementById('money').innerHTML = `${localStorage.getItem('coins')}<img  src="D:/game/Game/tutorial/coin.avif" alt="" id="coin">`;
        document.getElementById('help').style.display = 'none'; 
        let div = document.createElement('div');
        div.id = "totem";
        div.innerHTML = `<img src="totem.webp" alt="" id="tot"><div id="totemdescription">The totem of immortality is an unusual item that can save its owner from death, even from the ***** Dragon (I didn’t hear it because the merchant spoke quickly). You don't need to press it. Used once. Hmm, looks familiar.</div>`;
        amounttot = 1;
        document.body.append(div);
    }
    else{
        document.getElementById('help').innerHTML = `<b>You can't buy it. Get out of here. Do not waste my time.</b><button id='oh1' onclick="no2()">Ok</button>`;
    }
   
   }
   function no2(){
    document.getElementById('help').style.display = 'none'; 
}
function buyedge(){
    if(c>=40){
        c=c-40;
        localStorage.clear;
        localStorage.setItem('coins', c);
        document.getElementById('money').innerHTML = `${localStorage.getItem('coins')}<img  src="D:/game/Game/tutorial/coin.avif" alt="" id="coin">`;
        document.getElementById('help').style.display = 'none'; 
        document.getElementById('secondup').innerHTML = `<div id = 'edges'>W<div id="edgedescription">A unique sword that allows every 4 blows to inflict x2 damage on the enemy. The merchant told me to be wary of plants if I was in the jungle. Some kind of nonsense - “killer plant”. He's probably gone completely off the rails...<div id="stats"><b id="damage">Damage: 300</b><b id="damage">HP: 75</b><b id="cd">CD: 3</b></div></div></div></div></div>`     
        document.getElementById('edge').style.display = 'none';
        document.getElementById('flakon').style.height = '292px';
        document.getElementById('fla').style.transform = 'translateY(80px)';
        document.getElementById('dn').style.transform = 'translate(1150px, -452px)';
        buyedge = null;
    }
    else{
        document.getElementById('help').innerHTML = `<b>You can't buy it. Get out of here. Do not waste my time.</b><button id='oh1' onclick="no2()">Ok</button>`;
    }
   
   }
   function buyflakon(){
    if(c>=100){
        c=c-100;
        localStorage.clear;
        localStorage.setItem('coins', c);
        document.getElementById('money').innerHTML = `${localStorage.getItem('coins')}<img  src="D:/game/Game/tutorial/coin.avif" alt="" id="coin">`;
        document.getElementById('help').style.display = 'none'; 
        document.getElementById('flakon').style.display = 'none';
        health = 200;
        document.getElementById('G').innerText = `200`;
        energy = 1500;
        document.getElementById('mana').innerText = `1500`;
        document.getElementById('dn').style.transform = 'translate(1150px, -160px)';
        buyflakon = null;
    }
    else{
        document.getElementById('help').innerHTML = `<b>You can't buy it. Get out of here. Do not waste my time.</b><button id='oh1' onclick="no2()">Ok</button>`;
    }
   }
   function buydn(){
    if(c>=300){
        c=c-300;
        localStorage.clear;
        localStorage.setItem('coins', c);
        document.getElementById('money').innerHTML = `${localStorage.getItem('coins')}<img  src="D:/game/Game/tutorial/coin.avif" alt="" id="coin">`;
        document.getElementById('help').style.display = 'none'; 
        document.getElementById('thirdup').innerHTML = `<div id = 'dno'>E<div id="dndescription">Just write someone's name and he will die immediately, but can only be used once. With such a thing I will become a god. I don't think this note can kill Armageddon.<div id="stats"><b id="damage">Damage: ∞</b><b id="manacost">Mana: 1500</b><b id="cd">CD: ∞</b></div></div></div></div></div>`     
        document.getElementById('dn').style.display = 'none';
        buydn = null;
    }
    else{
        document.getElementById('help').innerHTML = `<b>You can't buy it. Get out of here. Do not waste my time.</b><button id='oh1' onclick="no2()">Ok</button>`;
    }
}