// var firebaseConfig = {
//   apiKey: "AIzaSyBQUaRNgeOQ_JfKuL0QYFrhyIuHpKDRs9A",
//   authDomain: "database-60269.firebaseapp.com",
//   databaseURL: "https://database-60269-default-rtdb.firebaseio.com",
//   projectId: "database-60269",
//   storageBucket: "database-60269.appspot.com",
//   messagingSenderId: "720754938409",
//   appId: "1:720754938409:web:47c57e25c0c6be25f48238"
// };

// // Initialize Firebase
// var app = firebase.initializeApp(firebaseConfig);


var questions = [
{
    question:"Q1: Who is the father of HTML?",
    option1:".Rasmus Lerdorf",
    option2:".Tim Berners-Lee",
    option3:".Sergey Brin",
    correctAns:".Tim Berners-Lee"
},
{
    question:"Q2: CSS stands for",
    option1:".Cascading Style sheet",
    option2:".Cascading Styling sheet",
    option3:".Cascading super sheet",
    correctAns:".Cascading Style sheet"
},{
    question:"Q3: What is the correct syntax of doctype in HTML5?",
    option1:".</doctype html>",
    option2:".<doctype html>",
    option3:".<!doctype html>",
    correctAns:".<!doctype html>"
},{
    question:"Q4: Which of the following tag is used for inserting the largest heading in HTML?",
    option1: ".head",
    option2:".<h1>",
    option3:".<h6>",
    correctAns:".<h1>"
},{
    question:"Q5: how many data types in js?",
    option1:".6",
    option2:".7",
    option3:".8",
    correctAns:".8"
}
,{
    question:"Q6: Which of the following is not a HTML5 tag?",
    option1:".<track>",
    option2:".<video>",
    option3:".<slider>",
    correctAns:".<slider>"
}
,{
    question:"Q7: Which character is used to represent when a tag is closed in HTML?",
    option1:".#",
    option2:".!",
    option3:"./",
    correctAns: "./",
}
]


var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var button = document.getElementById("btn");
var timer = document.getElementById("timer")
var index = 0;
var score = 0;
var min = 1;
var sec = 59;



setInterval(function(){
    timer.innerHTML = `${min}:${sec}`;
    sec--
    if(sec<0){
        min--;
        sec = 59    
    }
    if(min<0){
        min= 1;
        sec = 59;
        nextQuestion()
    }
},1000)
clearInterval(function(){
    timer.innerHTML= stop
    min--;

},0)
function nextQuestion(){


    var getOptions = document.getElementsByName("options");

     for(var i = 0;i<getOptions.length;i++)
    {
        if(getOptions[i].checked){
            var selectedValue = getOptions[i].value;
            // console.log(selectedValue)
            var selectedQues = questions[index - 1]["question"];
            var selectedAns = questions[index-1][`option${selectedValue}`]
            var correctAns = questions[index - 1]["correctAns"]
            if(selectedAns == correctAns){
                score++

                
            }
            
        }
        getOptions[i].checked = false
    }

    button.disabled = true

    if(index >questions.length - 1){

        Swal.fire(
            'Good job!',
        `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
            'success'
          )
        // console.log("your percentage is " + ((score / questions.length)*100).toFixed(2))
    }
    else{

        
        para.innerHTML = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++
    }
    
}


// nextQuestion()


function clicked()
{
    button.disabled = false

}


  
  
  
































