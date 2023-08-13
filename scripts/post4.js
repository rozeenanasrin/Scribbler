var print = document.getElementById("printLikes");

var btn = document.getElementById("liked-Btn")

let count =0;
btn.addEventListener("click",function(){


  count++;

    const  logic = count== 1? "":"s"; 

    print.textContent = count +" "+ "person"+logic +" "+ "liked this !";

})
