// 这是项目的入口文件

// 导入Jquery
import $ from 'jquery'

import './css/index.css'

import './css/index.less'
// 实现奇偶行变色
$(function () {
  $('li:odd').css('backgroundColor', 'lightblue')
  $('li:even').css('backgroundColor', 'yellow')
})