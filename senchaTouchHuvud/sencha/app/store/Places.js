Ext.define('skill_ios.store.Places',{

	extend:'Ext.data.Store',
	config:{
		model:'skill_ios.model.Place',
		autoLoad:true,
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


