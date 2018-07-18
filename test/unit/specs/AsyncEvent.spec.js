import Vue from 'vue'
import {mount,shallow} from 'vue-test-utils'
import AsyncEvent from '@/components/AsyncEvent'

describe('AsyncEvent.vue',()=>{

	it('异步行为测试',(done)=>{
		const wrapper = mount(AsyncEvent);
		wrapper.find('button').trigger('click');
		setTimeout(()=> {
			expect( Number(wrapper.find('span').text()) ).to.equal(2);
			done();

		}, 1000)
	})
})