// [ scrollTop ]
$(document).ready(function () {
  $('#scrollTop').bind('click', function () {
      $('html, body').animate({ scrollTop: '0' }, 680);
  });
});

//현재 좌표값 + 전달된 좌표값
window.scrollBy(x, y)
//전달된 좌표값으로 이동
// window.scrollTo({x, y, smooth})
window.scrollTo({ left: 0, top: 0, behavior: "smooth" });


// [ setInterval 활용 ]
// 특정 코드나 함수를 의도적으로 지연한 뒤 실행하고 싶을 때 사용하는 타이밍 이벤트 함수
// 플로피 비하인드 버튼을 눌렀을 때 1초 뒤 안내창이 팝업으로 뜨게 했다.
function ploppyBehind() {

  var count = 0;
  var repeat = setInterval(function () {
      alert("죄송합니다. 준비중입니다.");
      console.log("setInterval");
      count++;

      if (count == 1) {
          clearInterval(repeat);
      }
  }, 1000);
}


// [ 마우스 이벤트 (오버 이벤트) ]
// 메인 페이지의 목업 이미지에 마우스를 오버했을 때 이미지가 바뀐다.
// 마우스 아웃이 되었을 때 다시 기존 이미지로 돌아온다.
function mover() {
  var m;
  m = document.getElementById("main_page2");
  m.style.backgroundImage = "url('./images/main_mu2.png')";
}
function mout() {
  var m;
  m = document.getElementById("main_page2");
  m.style.backgroundImage = "url('./images/main_mu.png')";
}

// [ 스크롤 이벤트에 따른 요소 변화 적용 (텍스트 나타나는 모션)]
// Design 파트

document.addEventListener("DOMContentLoaded", function (){
  window.onscroll = function(){
    if(window.scrollY > 12700){
        document.getElementById("fin1").classList.add("active");
        document.getElementById("fin2").classList.add("active");
        document.getElementById("fin3").classList.add("active");
        console.log(window.scrollY);
      } else {
        document.getElementById("fin1").classList.remove("active");
        document.getElementById("fin2").classList.remove("active");
        document.getElementById("fin3").classList.remove("active");
      }
  }
});
