$(document).ready(function(){
  $("#showpsw").click(function(){
    if ($(this).is(':checked')) {
/*jquery的方式判断checkbox是否被选中
  .prop('checked') prop版本新加  prop与attr区别.*/
    $("#psw").attr("type","text")
    }
    else {
    $("#psw").attr("type","password")
    }
  });
});
