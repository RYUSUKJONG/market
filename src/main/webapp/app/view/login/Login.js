Ext.define('Study.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    layout : 'center',
    closable : false,
    maximized : true,  //꽉 채운다
    autoShow : true,   //컴포넌트를 호출하는 동시에 윈도우창 출력
    onEsc : function(){
		return false;   //esc키를 눌렸을 경우
	},	
    items : [{
		xtype : 'form',
		layout : {
			xtype : 'vbox',
			align : 'center',
			pack : 'center'
		},
		items : [{
			xtype : 'textfield'
		},{
			xtype : 'textfield',
			inputType : 'password'
		},{
			xtype : 'button',
			width : 165,
			text : 'Login',
			handler : function(btn) {
				btn.up("window").close();
				Ext.widget("main");
			}
		}]
	}]

});
