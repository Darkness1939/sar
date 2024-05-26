var x = 80;
var y = 400;
var health = 100;
var energy = 1000;
var ehealth = 1000;
var coins = 2;
let end = false;
let endo = false;
let endh = true;
let andf = false;
var yhd = false;
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
   if((y>=300&&y<=450)&&(x==1770)){
    document.getElementById('help').innerHTML = `<b>Are you sure you want to go there?</b><button onclick="document.location='D:/game/Game/cladba/index.html'" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
    document.getElementById('help').style.display = 'flex';
   }
   if(x>=850){
     Talkto();
   }
  
}
}
   function Talkto(){
    end = true;
    document.getElementById('text').innerHTML = `<b id = 'talk'>Stop warrior! You can't go any further until you answer my questions!</b><button id='ohe' onclick="Talk2()">Ok</button>`;
    document.getElementById('text').style.display= 'flex';
    document.getElementById('text').style.transform = ('translateY(500px)');
    document.getElementById('text').style.height= 100 + 'px';
   }
   function Talk2(){
    var curse = 0;
    document.getElementById('text').style.display = 'none';
    let a1 = prompt('Who created Javascript? 1) Bill Gates 2) Brendan Eich 3) Bjarne Stroustrup');
    if(a1 == '2'){
        alert('Correct!');
    }
    else{
        curse = curse + 1; 
        alert('If you fail 3 more times, I will put a curse on you!');
    }
    let a2 = prompt('In what year was Javascript created? 1) 2002 2) 1999 3) 1995');
    if(a2 == '3'){
        alert('Correct!');
    }
    else{
        curse = curse + 1;
        alert(`Wrong! You made ${curse} mistakes!`);
    }
    let a3 = prompt('Which of these operators means "or"? 1) && 2) $ 3) ||');
    if(a3 == '3'){
        alert('Correct!');
    }
    else{
        curse = curse + 1;
        alert(`Wrong! You made ${curse} mistakes!`);
    }
    let a4 = prompt('How to declare a function in JavaScript? 1) function MyFunction() 2) function = MyFunction() 3) function MyFunction');
    if(a4 == '1'){
        alert('Correct!');
    }
    else{
        curse = curse + 1;
        alert(`Wrong! You made ${curse} mistakes!`);
    }
    let a5 = prompt('Which operator will display an alert window with the text Hello? 1) alert("Hello") 2) print(Hello) 3) cout << Hello');
    if(a5 == '1'){
        alert('Correct!');
    }
    else{
        curse = curse + 1;
        alert(`Wrong! You made ${curse} mistakes!`);
    }

    if(curse == 3){
        document.getElementById('text').innerHTML = `<b id = 'talk'>Well, you made 3 mistakes! I'm putting a curse on you! Goodbye!</b><button id='ohe' onclick='Curse()'">Ok</button>`;
    document.getElementById('text').style.display= 'flex';
    document.getElementById('text').style.transform = ('translateY(500px)');
    document.getElementById('text').style.height= 100 + 'px';
    }
    else{
        document.getElementById('text').innerHTML = `<b id = 'talk'>Well done! I'll go wait for the next warrior! Good luck!</b><button id='ohe' onclick='Cursen()'">Ok</button>`;
    document.getElementById('text').style.display= 'flex';
    document.getElementById('text').style.transform = ('translateY(500px)');
    document.getElementById('text').style.height= 100 + 'px';
    }
   }
   function Curse(){
    end = false;
    Talkto = null;
    document.getElementById('text').style.display= 'none';
    document.getElementById('sphinx').style.width = 50 + 'px';
    document.getElementById('sphinx').style.transform = ('translate(1860px, 250px)');
   }
   function Cursen(){
    end = false;
    Talkto = null;
    document.getElementById('text').style.display= 'none';
    document.getElementById('sphinx').style.width = 50 + 'px';
    document.getElementById('sphinx').style.transform = ('translate(1860px, 250px)');
   }
