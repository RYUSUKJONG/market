Ext.define('Study.view.window.UpdatePassword',{
	extend : 'Ext.window.Window',
	xtype: 'updatePassword',
	width : 350,
	height: 200,
	title : '비밀번호 변경',
	autoShow : true,
	items : [{
		xtype: 'form',
		items : [{
			xtype: 'textfield',
			inputType : 'password',
			fieldLabel : '비밀번호'
		},{
			xtype: 'textfield',
			inputType : 'password',
			fieldLabel : '비밀번호 확인'
		}]
	}],
	bbar : [{
		xtype : 'button',
		text : '비밀번호 변경'
	},{
		xtype : 'button',
		text : '닫 기'
	}]
});