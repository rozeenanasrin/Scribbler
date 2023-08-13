


var print = document.getElementById("printLikes");

var btn = document.getElementById("liked-Btn")

let count =0;
btn.addEventListener("click",function(){


  count++;

    const  logic = count== 1? "":"s"; 

    print.textContent = count +" "+ "person"+logic +" "+ "liked this !";

})


var commentBtn = document.getElementById("comments-btn");

commentBtn.addEventListener("click",function(){

    var commentValue = document.getElementsByClassName("txt").value;
    document.getElementById("printparam").innerText = commentValue;


})


