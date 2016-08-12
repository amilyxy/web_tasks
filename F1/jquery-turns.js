var index = 0,
  check = true //3s定时   //调用说不用加引号 可是加了也没错。。
$(document).ready(function() {

    var timer = setInterval(lunbo, 3000)
    $(".pic").eq(0).css("opacity", "1") //轮播开始 从第一张图
    $("ul#num>li").eq(0).css("background-color", "rgba(166, 166, 166,0.9)")
      /*鼠标左右切换效果 ps...  */
    $("#rchange,#lchange").mouseenter(function() {
      $(this).css("background-color", "rgba(166, 166, 166,0.9)")
    })
    $("#rchange,#lchange").mouseleave(function() {
        $(this).css("background-color", "rgba(166, 166, 166,0.2)")

      })
      /*点击效果*/
    $("#rchange").click(function() { //右边切换

      check = false
      if (!check)
        index += 1
      if (index > 5)
        index = 0
        /*点击的时候 下面跟着动*/
      hiden()
    })
    $("#lchange").click(function() { //左边点击切换
      check = false
      if (!check)
        index -= 1
      if (index < 0)
        index = 5
        //同上
      hiden()
    })
    $("ul#num>li").hover(
      function() {
        clearInterval(timer)
        index = $("ul#num>li").index(this)
        hiden()
        check = false
      },
      function() { //鼠标移开重新开始计时
        check = true
        timer = setInterval(lunbo, 3000)
      }
    )
  })
  /*隐藏与显示函数  公用...*/
function hiden() {
  for (i = 0; i < 6; i++)
    $("ul#num>li").eq(i).css("background-color", "rgba(166, 166, 166,0.2)")

  $("ul#num>li").eq(index).css("background-color", "rgba(166, 166, 166,0.9)")
  for (i = 0; i <= index; i++)
    $(".pic").eq(i).css("opacity", "1").fadeIn(50)

  for (i = index + 1; i < 6; i++)
    $(".pic").eq(i).css("opacity", "0").fadeOut(100) //将所选择的index透明度置1  在此可以添加淡入淡出;
}

function lunbo() {
  if (check) {

    index += 1
    if (index > 5)
      index = 0
    hiden()
  } else {
    check = true
  }
}
