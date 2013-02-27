Ext.define('skill_ios.model.Place',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name: 'title', type:'string'},
		{name: 'href', type:'string', mapping:'logo_small > link@href'},
		{name: 'name', type:'string'}
		//'title','logo_small'
		]
	
	
	}


})