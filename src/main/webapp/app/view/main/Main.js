Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    layout : 'border',
    items : [{
		xtype : 'panel',
		region : 'north',
		title : 'Market Admin'
	},{
		xtype : 'panel',
		split : true,
		width : 200,
		border : true,
		region : 'west',
		items : [{
			xtype : 'treelist',
			store : {
				root : {
					expanded : true,
					children : [{
						text : '상품관리',
						iconCls : 'x-fa fa-gift',
						expanded : true,
						selectable : false,
						children : [{
							text : '상품목록',
							leaf : true
						}]
					},{
						text : '주문관리',
						expanded : true,
						iconCls : 'x-fa fa-shopping-cart',

						selectable : false,
						children : [{
							text : '상품목록',
							leaf : true
						}]
					},{
						text : '회원관리',
						iconCls : 'x-fa fa-users',
						expanded : true,
						selectable : false,
						children : [{
							text : '상품목록',
							leaf : true
						}]
					}]
				}
			}
		}]
	},{
		xtype : 'panel',
		border : true,
		flex : 1,
		region : 'center',
		layout : 'fit',
		items : [{
			xtype : 'panel',
			html : "<h2>Main DashBoard</h2>"
		}]		
	}]

});
