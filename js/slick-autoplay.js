// slick
// slick을 사용해서 영상 스틸 컷 사진들이 자동으로 넘어가게 한다.
// 한 번에 2개씩 보여주고, 2개씩 스크롤 되며 2초마다 넘어간다.
$('.autoplay').slick({
  // slidesToShow: 3,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
  arrows: false,
});