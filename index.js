
 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
   var instrumentss=[];
   const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  

  


 function theBeatlesPlay(musicians, instruments){
  
    for(var i=0;i < musicians.length;i++){
      
   instrumentss.push(musicians[i] + " plays " + instruments[i])
     // var play = musicians[i] + "plays"+ instrumentss[i];
      
    }
    return instrumentss;
}

function johnLennonFacts(){
   const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  
  while(facts>0)
  {
    
     const factts = [];
 //facts.splice(i, 0, "!!!");
   //facts.slice(1,4)
   factts.push(facts[i] +"!!!");
  
      }
  return factts
  
}

function iLoveTheBeatles(num){
  const y = [];
 do{
    y.push("I love the Beatles!");
   var  a = y.push("I love the Beatles!");
  }
  while(num===7){
   console.log("I love the Beatles!");
   num++;
    
  }
  return y
}
