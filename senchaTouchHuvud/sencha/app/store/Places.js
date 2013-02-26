Ext.define('skill_ios.store.Places',{

	extend:'Ext.data.Store',
	config:{
		model:'skill_ios.model.Place',
		autoLoad:true,
// 		data:[
// 		{
// 			name:'name1',
// 			icon:'icon1',
// 			vicinity:'vicinity1'
// 		},
// 		{
// 			name:'name2',
// 			icon:'icon2',
// 			vicinity:'vicinity2'
// 		},
// 		{
// 			name:'name3',
// 			icon:'icon3',
// 			vicinity:'vicinity3'
// 		}
// 		]
// 	
		proxy:{
			type:'ajax',
			url:'http://cv.skill.se/cv/rss.jsp?format=mtrxml&allads=1&fullad=1',
			reader:{
				type:'xml',
				record:'job'
			}
		}
 	}

})


