let lives = 3; 
const treasure = (location) => {
   if(treasureLocation === location){
       document.getElementById(location).innerHTML = "💎"
       alert("WINNER WINNER CHICKEN DINNER!")
       setTimeout(function(){
          window.location.reload(); 
       }, 30000);
   }else if(skullLocations.includes(location)){
       document.getElementById(location).innerHTML = "💀"
       alert("You lost a life!")
       lives--; 
       document.getElementById("lives").innerHTML = "Lives: " + lives; 
       if(lives === 0){ 
          alert("GAME OVER!");
          window.location.reload(); 
       }
   }else{
       document.getElementById(location).innerHTML = "😎"
   }
}
var treasureLocation = Math.floor(Math.random() * 9)
console.log (treasureLocation)
var skullLocations = []
while(skullLocations.length < 3){
   var randomLocation = Math.floor(Math.random() * 9)
   if(randomLocation !== treasureLocation && !skullLocations.includes(randomLocation)){
       skullLocations.push(randomLocation)
   }
}
console.log(skullLocations)
