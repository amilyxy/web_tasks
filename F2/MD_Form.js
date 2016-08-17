$(document).ready(function() {
  //-------------------------------------focus判断
  $("input:text").focus(function(){
      $("form label:eq(0)").addClass("label_up")
      $("#email-val").addClass("text_bcg")
  })
  $("input:password").focus(function(){
      $("form label:eq(1)").addClass("label_up")
      $("#psw-val").addClass("password_bcg")
  })
  $("input:text").blur(function(){
    var val = document.getElementById("email-val").value
    if(val == null || val == "")
      {
         $("form label:eq(0)").removeClass("label_up")
         $("#email-val").removeClass("text_bcg")
       }
  })
  $("input:password").blur(function(){
    var val = document.getElementById("psw-val").value
    if(val == null || val == "")
     {
       $("form label:eq(1)").removeClass("label_up")
       $("#psw-val").removeClass("password_bcg")
      }
  })
//--------------------------------------Login判断
  $("#Login").click(function() {
    var check = validate_right()
    if(check)
    {
      $(".right").addClass("right_bcg")
      $("#Login").addClass("Login_smaller")
      $(".duigou").addClass("duigou_add")
    }
  })
})

function validate_empty() {
  var empty_email = "please enter your email address "
  var empty_psw = "please enter your password "
  var emailval = document.getElementById("email-val").value
  var pswval = document.getElementById("psw-val").value
  if (emailval == null || emailval == "") {
    alert(empty_email)
    return false
  }
  if (pswval == null || pswval == "") {
    alert(empty_psw)
    return false
  } else {
    return true
  }
}

  function validate_right(){
    var alerttxt_wrong = "please enter right email address"
    var emailval = document.getElementById("email-val").value
    var not_empty = validate_empty()
    var email = document.getElementById("email-val").value
    var check = /^[\w_\-\.]{2,20}@[\w]{2,10}\.[a-z]{2,3}(\.[a-z]{2})?/
/* ^表示开头 \w=[a-zA-Z0-9]  g全局匹配(好像用不着)*/
/*要求： 用户名只能包含字母数字以及下划线短线+@xxx+.xxx(+.xx()(.cn))*/
/*可以用/../ 也可以用RegExp(new) */
    if (not_empty) {
      if(!check.test(email)){
        alert(alerttxt_wrong)
        return false
          }
      else {
        return true
      }
    }
  }
