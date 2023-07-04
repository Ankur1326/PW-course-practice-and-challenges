const vdoElement = document.querySelector("video");

        vdoElement.addEventListener("dblclick", function(){
            if(vdoElement.paused){
                vdoElement.play();
            }
            else{
                vdoElement.pause();
            }
        })