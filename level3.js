var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var audio = document.getElementById("wrongAudio");
var audio2 = document.getElementById("correctAudio");
var answer = 0;

function generate_equation(){ 
  var num1 = Math.floor((Math.random() * 4) + 10),
      num2 = Math.floor((Math.random() * 4) + 10),
      dummyAnswer1 = Math.floor((Math.random() * 10) + 10),
      dummyAnswer2 = Math.floor(Math.random() * 10),
      sign = ['+','-','/','x','%'],
      allAnswers = [],
      switchAnswers = [];

  var s=sign[Math.floor(Math.random() * 4)]

  if (s == '+'){
    answer = num1 + num2;
    if(answer == dummyAnswer1 || answer == dummyAnswer2){
      dummyAnswer1++;
      dummyAnswer2++;
    }
  } else if (s == "-"){
    answer = num1 - num2;
    if(answer == dummyAnswer1 || answer == dummyAnswer2){
      dummyAnswer1++;
      dummyAnswer2++;
    }
  }else if (s == "/"){
    if (num2 == 0){
      answer = 'error'
    } else{
      var x = num1 / num2;
      answer = Math.round(10*x)/10;
    }
  }else if (s == 'x'){
    answer = num1 * num2;
    if(answer == dummyAnswer1 || answer == dummyAnswer2){
      dummyAnswer1++;
      dummyAnswer2++;
    }
  }else{
    if (num2 == 0){
      answer = 'error'
    } else{
      answer = num1 % num2;
      if(answer == dummyAnswer1 || answer == dummyAnswer2){
        dummyAnswer1++;
        dummyAnswer2++;
      }
    }
  }

  
  document.getElementById("num1").innerHTML = num1; 
  document.getElementById("num2").innerHTML = num2; 
  document.getElementById("sign").innerHTML = s;

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
      generate_equation();
      audio2.play();
    }
    else{
      audio.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      generate_equation();
      audio2.play();
    }
    else{
      audio.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
      generate_equation();
      audio2.play();
    }
    else{
      audio.play();
    }
});

generate_equation()


