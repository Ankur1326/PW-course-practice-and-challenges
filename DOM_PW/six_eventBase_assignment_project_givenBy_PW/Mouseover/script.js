function myFun(element, secontArg) {

    // for buttons 
    let btns = document.querySelectorAll("button");
    console.log(btns)
    for(let i = 0; i < btns.length; i++){
        btns[i].style.background = "#333";
    }
    element.style.background = "rgb(114, 114, 165)"

    let content = document.querySelectorAll(".content div")
    for(let i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }
    // console.log(content)
    document.getElementById(secontArg).style.display = "none"

    document.getElementById(secontArg).style.display = "block"
    
}
