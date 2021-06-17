Ext.define('Study.view.order.OrderList', {
	extend: 'Ext.grid.Panel',
	xtype: 'orderList',
	title: '주문목록',
	columnLines: true,
	tbar: [{
		xtype: 'combo',
		displayField: 'a',
		valueField: 'b',
		store: {
			fields: ['a', 'b'],
			data: [{
				a: 'a',
				b: 'b'
			}]
		}
	}, {
		xtype: 'textfield',
		emptyText: '검색어를 입력하세요'
	}, {
		xtype: 'button',
		text: '검색'
	}],
	columns: [{
		xtype: 'rownumberer',
	}, {
		text: '상품명',
		flex: 1,
		dataIndex: 'productNm'
	}, {
		text: '가격',
		flex: 1,
		dataIndex: 'price'
	}, {
		text: '재고량',
		flex: 1,
		dataIndex: 'amount'
	}, {
		text: '등록일',
		flex: 1,
		dataIndex: 'rgstrDt'
	},{
		xtype: 'widgetcolumn',
		widget : {
			xtype : 'button',
			text : '배송정보',
			handler : function(btn){
				var record = btn.getWidgetRecord(); // 클릭한 버튼의 레코드값
				console.log(record.get("amount"));
				console.log(record.get("price"));
			}
		}
	}],
	store: {
		fields: ['productNm', 'price', 'amount', 'rgstrDt'],
		data: [{
			productNm: '지우개',
			price: 500,
			amount: 100,
			rgstrDt: new Date()
		}, {
			productNm: '지우개',
			price: 500,
			amount: 100,
			rgstrDt: new Date()
		}, {
			productNm: '지우개',
			price: 500,
			amount: 100,
			rgstrDt: new Date()
		}]
	},
	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true
	}
});
