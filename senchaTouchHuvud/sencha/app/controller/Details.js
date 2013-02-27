Ext.define('skill_ios.controller.Details', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            placesContainer:'placesContainer'
        },
        control: {
        'placesContainer places list':{
        	itemtap: function(list, index, target, record){
        	var detailsView = Ext.create('skill_ios.view.Details')
        	detailsView.setData(record.data);
        	this.getPlacesContainer().push(detailsView);
        	}
            
        }
    }
}

});