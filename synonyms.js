const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = document.getElementById("wrongAudio");  
      audio2 = document.getElementById("correctAudio");
var answer ;

function generate_equation(){ 
  var dummyAnswer1,
      dummyAnswer2,
      word =    ['Run','Jump','Shoot','Kill','Amazing','Dark','Destroy','Fly','Help','Put','Show','Strange','intriguing','Right','Halt'],

      synonym = ['Sprint','Hop','Fire','murder','Incredible','Gloomy','Ruin','Soar','Aid','Place','Display','Odd','Fascinating','Correct','Stop'],

      options = ['Walk','Duck','Target','Combat','Average','Bright','Shuffle','Teleport','Ignore','Race','Stash','Mainstream','Turn','Left','Speed'],
      
      allAnswers = [],
      switchAnswers = [];

  random = Math.floor(Math.random()*14);
  document.getElementById("word").innerHTML = word[random];
  answer = synonym[random];
  dummyAnswer1 = options[random];
  dummyAnswer2 = options[random + 1];

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2]; 
};

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
      audio2.play();
      generate_equation();
    }
    else{
      audio.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      audio2.play();
      generate_equation();
    }
    else{
      audio.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
      audio2.play();
      generate_equation();
    }
    else{
      audio.play();
    }
});

generate_equation()


