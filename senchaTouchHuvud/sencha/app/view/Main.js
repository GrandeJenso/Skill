Ext.define('skill_ios.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
        {
        xtype: 'home'
        },
        {
        xtype: 'placesContainer'
        }
           
        ]
    }
});
