import Vue from "vue"
import Event from '@/components/Event'
import { mount } from 'vue-test-utils'

describe('Event.vue',()=>{

	it('事件方法测试',()=>{
		const wrapper = mount(Event);
		const clickButton = wrapper.find('button');
		clickButton.trigger('click');
		const number = Number(wrapper.find('input').element.value);
		expect(number).to.equal(2);
	})
})