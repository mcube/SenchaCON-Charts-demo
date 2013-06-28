Ext.define('ReplayAnalytics.view.FourPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'fourpanellayout',
	requires: [
	           'ReplayAnalytics.view.TopTwoPanelLayout',
	           'ReplayAnalytics.view.BottomTwoPanelLayout'
	],
	config: {
		layout: {type: 'vbox',},
		autoShow: true,
		id: 'fourpanellayout',
		align: 'stretch',
		flex: 1,
		items: [
		        {
		        	xtype: 'toptwopanellayout'
		        },
		        {
		        	xtype: 'bottomtwopanellayout'
		        }
		]
	}
})