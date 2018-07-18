# vue-cli单元测试案例

> A Vue.js project

## 主要说明

``` bash
基本基于vue-cli的安装方式 本次案例是基于 [karma](http://karma-runner.github.io/2.0/index.html)+[mocha](https://mochajs.org/)+[chai](http://www.chaijs.com/api/assert/) 来的，**所有在选择测试方式时按 '上下箭头键' 选到karma这项**。
**特别说明**本次案例还基于 [vue-test-utils](https://vue-test-utils.vuejs.org/zh/)的api
案例源码分别在src/components以及test/unit/specs

## 案例说明说明
-静态页面加载测试
-事件操作测试
-异步操作测试
-Vuex测试
做测试的spec文件要求极为严格，必须为spec.js后缀，而被测试的.vue的文件名称有大小写的区分,必须一一对应。

## 后续说明
初次接触基于vue-cli单元测试，粗粗的写了几个简单的案例，后续会补上其他的测试类型。
[主要参考文档](https://segmentfault.com/a/1190000012654035)