# Form with  Materail Design

## 任务要求
了解一下Material Design(以下简称MD)，遵循MD风格实现一个表单样式，效果图在附录中。

点击输入框之后，动画会过渡到左上角等效果

表单要有相应的数据验证，也就是点击`Login`按钮之后，向服务器请求之前的js验证，比如账号密码都不能为空，长度不能低于六个字符，比如只能为小写英文字母等。

可以使用原生js，也可以使用jQuery等类库辅助你的开发，但是不允许使用第三方类库跳过核心开发过程，比如直接引用某MD风格的UI库

## 检查点

1.100%实现效果图，体验流畅并且美观，功能不可以有欠缺，界面颜色可以略有偏差，相似度不得低于80%

2.必要的注释，表现自己的确理解了为何要这样写。

3.表单要有乡音的数据验证

## 加分项

1.支持移动端，体验要相同。（由于移动端前端越来越火，所以非常建议大家多关注移动端开发，有能力者一定要做）

2.学习使用scss编写样式，并正确使用（因为他们是css的超集，所以直接在里面写纯CSS也可以编译，但是那就没意义了）

3.仅使用原生js来实现，不使用第三方框架。

## 资源和提示

### 效果图

https://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction

https://dribbble.com/shots/2197140-New-Material-Text-Fields

这两个效果图，后者可能难度更大一些，前者只要实现其输入框部分，上面的`Location`和`Category`不用关心，当然实现更好。自己根据喜好来选择其中一个实现，没有第三选择。

### 参考教程

https://scotch.io/tutorials/google-material-design-input-boxes-in-css3

### SCSS/SASS

SASS:Syntactically Awesome StyleSheets

SCSS:Sassy CSS

这两个语法差了一点点，基本是同一种东西，可以方便的写样式，编译后生成CSS文件。 我们实验室的竞赛管理平台项目是使用SCSS的，所以这里也建议大家用SCSS语法来编写。

Windows下面安装有点点麻烦，要先安装Ruby，再安装SASS，之后写完`foo.scss`文件后用它编译即可。 Mac通常自带了Ruby，所以安装这个就很简单了，直接

    gen install sass
    #OR
    sudo gem install sass

也可以使用NPM来安装node版sass

    npm install node-sass

安装后受用gulp来管理

官网有详细的安装教程： http://sass-lang.com/install

教程： http://blog.visioncan.com/2011/sass-scss-your-css
