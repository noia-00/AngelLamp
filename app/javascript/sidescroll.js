$(function () {
  //スクロールの数値を表示
  $(".post-lists").scroll(function () {
    $("#out").text("scrollLeft: " + $(this).scrollLeft())
  })
  //ボタンを押すと右に0.3秒かけて1278px移動
  $(".right").click(function () {
    $(".post-lists").animate(
      {
        scrollLeft: $(".post-lists").scrollLeft() + 1278,
      },
      300
    )
    return false
  })
  //ボタンを押すと左に0.3秒かけて1278px移動
  $(".left").click(function () {
    $(".post-lists").animate(
      {
        scrollLeft: $(".post-lists").scrollLeft() - 1278,
      },
      300
    )
    return false
  })
})