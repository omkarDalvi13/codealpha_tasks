var bt = document.querySelector("#page3 #contact button")
var th = document.querySelector("#page3 #contact h2")
var a = 0
var cont = document.querySelector("#page3 #contact ")


bt.addEventListener("click",function(){
    if (a == 0)
    {bt.innerHTML="Submitted",
    bt.style.backgroundColor="green",
    bt.style.marginLeft="29%",
    th.style.opacity="1"

    a = 1
    }
    else{
        bt.innerHTML="Submit",
    bt.style.backgroundColor="red",
    bt.style.marginLeft="33%",
    th.style.opacity="0"
    a = 0
    }
})

