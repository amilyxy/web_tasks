$(document).ready(function() {
  var click1 = false
  var click2 = false
  $("#psw").click(function() {
    $(".password").addClass("frame-change2")
    $(".group").addClass("total-change")
      .css({                               //改变行间距
        "margin-top": "36px",
        "top": "90px"
      })
    $("#psw").addClass("font-change")
    if(click2){
      $(".group").css("top","52px")
    }
    click1 = true
  })
  $("#email").click(function() {
    $(".text").addClass("frame-change1")
    $(".group").addClass("total-change")
    $("#email").addClass("font-change")
    if(click1){
      $(".group").css("top","52px")
    }
    click2 = true
  })
  $("#Login").click(function() {
    var check = validate_right()
    if(check)
    {
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
