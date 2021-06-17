Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    name : 'Main',
    controllers: [
       'MvcController'
    ],
    layout : 'border',
    items : [{
		xtype : 'panel',
		region : 'north',
		//title : 'Market Admin'
		title : '',
		header : false,
		items : [{
			xtype : 'toolbar',
			items : [{
				xtype : 'label',
				html : '<h2>Market Admin</h2>'
			},'->',{
				xtype : 'button',
				text : 'xxx님',
				menu : [{
					text : '비밀번호 변경',
					handler : function(btn){
						Ext.widget("updatePassword");
					}					
				},{
					text : '로그아웃',
					handler : function(btn){
						btn.up("viewport").destory();  //뷰포트 삭제
						Ext.widget("login");
					}
				}]
			}]
		}]
	},{
		xtype : 'panel',
		split : true,
		width : 200,
		border : true,
		region : 'west',
		items : [{
			xtype : 'treelist',
			listeners : {
				selectionchange : function(obj, record) {
					var centerPage = obj.up("viewport").down("component[region=center]");
					centerPage.removeAll(true);
					centerPage.add({
						xtype : record.get("page")
					})
				}
			},
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
							page : 'productList',
							leaf : true
						}]
					},{
						text : '주문관리',
						expanded : true,
						iconCls : 'x-fa fa-shopping-cart',

						selectable : false,
						children : [{
							text : '주문목록',
							page : 'orderList',
							leaf : true
						}]
					},{
						text : '회원관리',
						iconCls : 'x-fa fa-users',
						expanded : true,
						selectable : false,
						children : [{
							text : '회원목록',
							page : 'memberList',
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
		},{
			
		}]		
	}]

});
