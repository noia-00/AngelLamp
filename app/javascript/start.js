$(function() {

  var ref = document.referrer;             // リファラ情報を得る
  var hereHost = window.location.hostname; // 現在ページのホスト(ドメイン)名を得る

  // ホスト名が含まれるか探す正規表現を作る(大文字・小文字を区別しない)
  var sStr = "^https?://" + hereHost;
  var rExp = new RegExp( sStr, "i" );

  if( ref.match( rExp ) ) {
    $('.start-logo').hide();
    $('.topimg1').show();
    $('.topimg2').show();
    $('.topimg3').show();
    $('.topimg4').show();
    $('.topimg5').show();
    $('.topimg6').show();
    $('.topimg7').show();
    $('.toptytle').show();
    $('.topmessage1').show();
    $('.topmessage2').show();
    $('.topmessage3').show();
  }
  else{
    setTimeout(function(){
      $('.start-logo .start-logo-inner').fadeIn(1000);
    },500); //0.5秒後にロゴをフェードイン
    setTimeout(function(){
      $('.start-logo').fadeOut(500);
    },2500); //2.5秒後にフェードアウト

    setTimeout(function(){
      $('.topimg1').fadeIn(1000);
    },3000);
    setTimeout(function(){
      $('.topimg2').fadeIn(1000);
    },3700);
    setTimeout(function(){
      $('.topimg3').fadeIn(1000);
    },3700);
    setTimeout(function(){
      $('.topimg4').fadeIn(1000);
    },3700);
    setTimeout(function(){
      $('.topimg5').fadeIn(1000);
    },3700);
    setTimeout(function(){
      $('.topimg6').fadeIn(1000);
    },3700);
    setTimeout(function(){
      $('.topimg7').fadeIn(1000);
    },3700);
    setTimeout(function(){
      $('.toptytle').fadeIn(1000);
    },4400);
    setTimeout(function(){
      $('.topmessage1, .topmessage3').fadeIn(1000);
    },4400);
    setTimeout(function(){
      $('.topmessage2').fadeIn(1000);
    },4400);
  }


});

