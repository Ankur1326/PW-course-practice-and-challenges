
function myFun(element, color){
    // get all button 
    let btns = document.getElementsByTagName('button');
    // and select one by one all button
    for(let i = 0; i < btns.length; i++){
        btns[i].style.backgroundColor = "gray";
    }

    // select all tab_content
    let tab_contents = document.querySelectorAll(".tab_content")
    // select one by one tab_content
    for(let i = 0; i < tab_contents.length; i++){
        tab_contents[i].style.display = "none"
    }

    let getTab_content = document.getElementById(element.className)
    element.style.background = color;
    // console.log(element.className)
    getTab_content.style.display = "block";
    getTab_content.style.backgroundColor = color;
}
//when reload page so default home button already clicked 
document.getElementById("default").click();
