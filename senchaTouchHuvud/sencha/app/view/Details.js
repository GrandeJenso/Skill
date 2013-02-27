Ext.define('skill_ios.view.Details', {
	extend:'Ext.Panel',
	xtype:'details',
	
	config:{
		title:'Details',
		layout:'fit',
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls:'details',
		tpl:'<img src="{href}"></img><h1>{title}</h1>'
		
	
	
	
	}



});