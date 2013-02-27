Ext.define('skill_ios.view.Places',{

	extend:'Ext.Panel',
	xtype:'places',
	
	config:{
		title:'Places',
		iconCls:'maps',
		layout:'fit',
		
		items:[
		{
			xtype:'titlebar',
			title:'Lg',
			docked:'top'
			
		},
		{
		xtype:'list',
		store:'Places',
		itemTpl:'{name} , {title}, {location}'
		}
		]
		
		}

});