## map文件解释

我们在浏览器开发工具（如Firebug）内只能看到其对应的css样式，而不能直接看到其对应的SASS样式，如果能够直接看到sass样式，就可以迅速定位相应代码，方便调试。在SASS 3.3 中已经实现了这个功能，但我们需要进行一些设置，简单地说：

1、如果是本地调试，需要搭建服务器环境，比如[apache](http://www.apache.org/)。

2、需要sass的sourcemap功能。   //好像现在版本不需要这个参数 自动write .css.map (只需要浏览器支持sourcemap)

3、需要开启Chrome下的sourcemap功能。

第一步，如何安装Apache就省略了，请Google一下。

第二步，在command命令行开启文件或文件夹监控时，请加参数`–sourcemap`

    代码
        sass --sourcemap --watch scss/:css/ --style expanded

开启sourcemap参数后，sass将会为每一个变化的sass文件生存map文件。

而Chrome可以识别该文件，从而直接将页面对应的sass样式显示在开发者工具（F12）上，因此，第三步：

打开开发者工具（F12），并调出设置，找到选项：Sources -> Enable CSS source maps ，选中。此时如果页面使用了相应的map，将会显示map。
