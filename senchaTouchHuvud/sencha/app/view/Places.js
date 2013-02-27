Ext.define('skill_ios.view.Places',{

	extend:'Ext.Panel',
	xtype:'places',
	
	config:{
		title:'Places',
		iconCls:'maps',
		layout:'fit',
		
		items:[
		{
		xtype:'list',
		store:'Places',
		itemTpl:'<img src="{href}"></img> <h1>{title:ellipsis(35)}</h1>',
		itemCls:'job-entry'
		
		}
		]
		
		}

});