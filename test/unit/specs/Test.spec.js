import Vue from 'vue'
import Test from '@/components/Test'
import {mount} from 'vue-test-utils'

describe('Test.vue',()=>{

	it('页面加载成功',()=>{
		const wrapper = mount(Test);
		expect(wrapper.find('h1').text()).to.equal('My First UnitTest');
	})

})