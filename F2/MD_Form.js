$(document).ready(function() {
  var click1 = false
  var click2 = false
  $("form p:eq(1)").click(function() {
    if(click1 == false)
      $(".span:eq(1)").addClass("spana")
    $(".password").addClass("frame-change2")
    $(".group").addClass("total-change")
      .css({                               //改变行间距
        "margin-top": "36px",
        "top": "90px"
      })
    $(this).addClass("font-change").animate({top:'+=5px',left: '+=1px'},"fast")
    if(click2){
      $(".group").css("top","52px")
    }
    click1 = true
  })
  $("form p:eq(0)").click(function() {
    if(click2 == false)
      $(".span:eq(0)").addClass("spana")
    $(".text").addClass("frame-change1")
    $(".group").addClass("total-change")
    $(this).addClass("font-change").animate({top:'+=5px',left: '+=1px'},"fast")
    if(click1){
      $(".group").css("top","52px")
    }
    click2 = true
  })
  $("#Login").click(function() {
    var check = validate_right()
    if(check)
    {
      $("#Login").css("font-size","17px").addClass("Login_smaller")
      $(".span:eq(2)").addClass("spana").css({"left":"180px","top":"5px"})
      $(".right").addClass("right_bcg")
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
    if (not_empty) {
      var i = emailval.indexOf("@")
      var j = emailval.lastIndexOf(".")
      if (i < 1 || j - i < 2) {
        alert(alerttxt_wrong)
        return false
      } else
        return true
    }
  }
