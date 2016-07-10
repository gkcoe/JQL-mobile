import Vue from 'vue'
import Vuex from 'vuex'

// ���� vue ��ʹ�á� vuex
Vue.use(Vuex)

// ����һ������������Ӧ������ʱ�ĳ�ʼ״̬
const state = {
	// TODO: ���ó�ʼ״̬
	count: 2016,
	login: false
}

// ����һ������洢һϵ�����ǽ�����Ҫд�� mutation ����
const mutations = {
	// TODO: �������ǵ�״̬�������
	INCREMENT(state, amount){
		state.count = state.count + amount
	},
	LOGINOUT(state){
		state.login = false
	},
	LOGININ(state){
		state.login = true
	},
	TOKEN(state){
		var ajaxReturn = false;
		var cookies = document.cookie.split(';');
		var token = '';
		for(var i=0; i<cookies.length; i++){
			if(cookies[i].split('=')[0]=='token')break;
		}
		if(i < cookies.length)token = cookies[i].split('=')[1];
		$.ajax({
			url: "/static/data/tokenState.json",
			data: {"token": token},
			dataType: "json",
			success: function(res){
				if(res.code==1){
					ajaxReturn = res.valid;
					document.cookie = "token=" + res.content + ";expires=Session;path=/;";
				}
			},
			async: false
		});
		state.login = ajaxReturn;
	}
}

// ���ϳ�ʼ״̬�ͱ�����������Ǿ͵õ������������ store
// ���ˣ���� store �Ϳ������ӵ����ǵ�Ӧ����
export default new Vuex.Store({
	state,
	mutations
})