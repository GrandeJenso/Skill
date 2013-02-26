Ext.define('skill_ios.view.Home', {
	extend:'Ext.Panel',
	xtype: 'home',

	config:{
	title:'Home',
	iconCls:'home',
	layout:'fit',
	scrollable:true,
	styleHtmlContent:true,
	styleHtmlCls:'homepage',
	html:['<h1>Skill</h1>',
		'<hr>',
		'<p>underrubrik</p>'].join(""),
		items:[
		{
			xtype:'titlebar',
			title:'Home Page',
			docked:'top'
		
		
		}
		]
	
	}

}
)