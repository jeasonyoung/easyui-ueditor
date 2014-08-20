easyui-ueditor
==============

基于EasyUI的百度U Editor富文本编辑器插件。

在基于Easyui的项目开发中遇到了富文本编辑器的兼容问题，之前一直使用 夏悸 贡献的kindeditor的easyui插件，但是遇到了在IE6/7/8下焦点问题的Bug，后来选择了百度的U Editor，但是网上未搜索到相关插件，所以自己动手写了一个；可以让Ueditor像easyUI自身的插件一样使用。
   <br/>例如：<B>&lt;div class="easyui-ueditor" data-options="width:600,height:400"/&gt;</B><br/>
   取值方法：<B>&lt;button onclick="javascript:alert($('.easyui-ueditor').ueditor('getValue'));"&gt;获得内容&lt;/button&gt;<br/>
              &lt;button onclick="javascript:($('.easyui-ueditor').ueditor('setValue','你好'));"&gt;设置内容&lt;/button&gt;</B>
   目前只实现了我用到的几个方法以及设置，架子已经弄好，配置相可以完全使用UEditor的配置项，方法调用还需要网友自己完善。
   
   为达到无缝集成，做了如下改进：
   
   1.增加和Form组件的集成，可以自动与form的加载和提交数据挂钩；
   2.增加和easyui-validatebox的集成，并能与Form的validate方法挂钩；
