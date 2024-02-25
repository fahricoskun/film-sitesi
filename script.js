const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

//! forEach her birini döndük ve her tıklanan arrowu almış olduk, i ise index numarasıdır. İlk movie list 0 değerini alır
//! Tıkladığımın indexine bir style atadık
//! Click counter ile kaç kere tıkladığımızı sayıyoruz çünkü her tıklamada 300px sağa kayıyor ve 3.tıklamadan sonrası gereksiz oluyor.
//! imageItem ile bir movie listin içinde kaç adet img yani resim olduğunu bulduk
// widthRatio ile ekran boyutu küçüldüğünde kaç kere kaydırma işlemi yapcağını hesapladık. Sonuç tam sayı olsun diye Math.floor kullandık.
arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300)
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// Dark Mode
//! items, light mode geçiş yapıldıktan sonra .active classının ekleneceği classlar. Biz burada hepsini aldık.

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")

ball.addEventListener("click",function(){
    items.forEach((item) => item.classList.toggle("active"))
})