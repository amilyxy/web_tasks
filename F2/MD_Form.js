$(document).ready(function() {
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
