// [ GNB 메뉴 자바스크립트 적용(마우스 롤오버, 롤아웃) ]

document.addEventListener("DOMContentLoaded", function(){
    window.onscroll = function(){

        if(document.querySelector("html").scrollTop > 200 ){
            document.querySelector("header").style.top = "-80px";
        }else{
            document.querySelector("header").style.top = "0px";
        }
    }

    window.onmousemove = function(e){
        console.log(e.clientY < 60);
        if(e.clientY < 100){
            document.querySelector("header").style.top = "0px";
        }else{
            document.querySelector("header").style.top = "-80px";
        }
    }
});