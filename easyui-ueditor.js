/**
 * easyui-ueditor整合插件。
 * author:农民叔叔
 * date:2014-08-19
 */
(function($,UE){
	if(!UE) alert('未加载百度UEditor的相关JS文件!');
	//定义插件
	$.fn.ueditor = function(options,param){
		if(typeof options == 'string'){//方法调用
			var method = $.fn.ueditor.methods[options];
			if(method){
				return method(this,param);
			}
			return;
		}
		options =  options || {};
		return this.each(function(){
			var state = $.data(this,'ueditor');
			if(state){
				$.extend(state.options, options);
			}else{
				state = $.data(this,'ueditor',{
					options : $.extend({},$.fn.ueditor.defaults,$.fn.ueditor.parseOptions(this),options)
				});
			}
			create(this);
		});
	};
	//创建ueditor编辑器对象
	function create(target){
		var opts = $.data(target,'ueditor').options;
		var editor = UE.getEditor(target,opts);
		$.data(target,'ueditor').options.editor = editor;
	};
	//获取内容
	function _getValue(target){
		return UE.getEditor(target).getContent();
	};
	//设置内容
	function _setValue(target,value){
		UE.getEditor(target).setContent(value);
	};
	//方法定义
	$.fn.ueditor.methods = {
			//获取配置选项
			options:function(jq){
				return $.data(jq[0],'ueditor').options;
			},
			//获取编辑器对象
			editor:function(jq){
				return $.data(jq[0],'ueditor').options.editor;
			},
			//获取编辑器内容
			getValue:function(jq){
				return _getValue(jq[0]);
			},
			//设置编辑器内容
			setValue:function(jq,value){
				return jq.each(function(){
					_setValue(this,value);
				});
			}
	};
	//默认配置
	$.fn.ueditor.defaults  = {
			toolbars:[['fullscreen','source','|','bold','italic','underline','fontborder','strikethrough','superscript','subscript','removeformat','formatmatch',
			           		'autotypeset','pasteplain','|','forecolor','backcolor','insertorderedlist','insertunorderedlist','cleardoc','|']],
			zIndex:9999,
			charset:'utf-8',
			enableAutoSave:false
	};
	//配置解析
	$.fn.ueditor.parseOptions = function(target){
		var opts = $.extend({},$.parser.parseOptions(target));
		if(opts["width"]) opts["initialFrameWidth"] = opts["width"]; 
		if(opts["height"]) opts["initialFrameHeight"] = opts["height"];
		return opts;
	};
	//添加到插件管理器中
	$.parser.plugins.push("ueditor");
})(jQuery,UE);
