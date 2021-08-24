const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = document.getElementById("wrongAudio");  
      audio2 = document.getElementById("correctAudio");
var answer ;

function generate_equation(){ 
  var dummyAnswer1,
      dummyAnswer2,
      word = ['ambient','microcosm','athlete','analyze','cinnamon','exchange','erosion','heroic','idle','illegal','hospital','movement','obedient','significance','supervisor','vertical','uniform','traitor','slumber'],

      wrong1 = ['embient','microcosme','athlet','analize','cynnamon','axchange','irosion','hiroic','idl','ellegal','hospitael','movemente','obediant','significence','supervisore','vertecal','uniforme','traitore','slunber'],

      wrong2 = ['ambiant','microcasm','athlete','analyz','cinamon','exchang','eroson','haroic','edle','elligal','hospitale','movemant','obediente','segnificance','supirvisor','virtecal','uneform','traitar','slumbir'],
      
      allAnswers = [],
      switchAnswers = [];

  random = Math.floor(Math.random()*19);
  answer = word[random];
  dummyAnswer1 = wrong1[random];
  dummyAnswer2 = wrong2[random];

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


