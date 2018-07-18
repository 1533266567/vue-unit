import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import VuexTest from '@/components/VuexTest'
import myModule from '@/store/index'


const localVue = createLocalVue();
localVue.use(Vuex);

describe('VuexTest.vue',()=>{
	let getters = myModule.getters;
	let state;
	let store;
	let mutations;

	beforeEach(()=>{
		state = {
			count: 0
		}
		mutations = {
			increment(state) {
				state.count++;
			}
		}
		store = new Vuex.Store({
			  modules: {
		        state,
		        mutations,
		        getters,		        
		      }
		})
	})

	it('Vuex 渲染监测',()=>{
		const wrapper = shallow(VuexTest,{store,localVue});
		const span = wrapper.find('span');
		expect( Number(span.text()) ).to.equal(state.count)
	})

	 it('Vuex 事件监测',()=>{
	 	  mutations.increment(state)
		  expect(state.count).to.equal(1);
	 })

})