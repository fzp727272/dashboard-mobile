var $ = require('jquery');
// var circleProgress = require("circleProgress")

var tenDaysChart = require('./tenDaysChart');
var orderToday = require('./orderToday');
var inventory = require("./iventoryUtilization");
var pickValue = require("./pickValue");
var staff = require("./staffProgress");
var animationControl = require('./animation-control.js');
var staticChart = require('./staticChart');
var swipeTab = require('./swipe-tab');

//H5滚动交互
$(document).ready(function () {

  $('.loading-overlay').slideUp();
});



//假数据
var colorList = [
    '#00c5d2',
    '#ef98d0',
    '#802bff',
    '#54c6af',
    '#edcd61',
    '#0081fa',
    '#73e3f8',
    '#ffd473',
    '#1c3a9f',
    '#421b9f',
    '#16889d',
  ];
  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  var data3 = [];

  for (var i = 0; i < 6; i++) {
    xAxisData.push(i + 1 + '月');
    data1.push((Math.random() * 3000).toFixed(2));
    data2.push((Math.random() * 2000).toFixed(2));
    data3.push((Math.random() * 1000).toFixed(2));
  }




//近十日进销监控
$(function() {


  staticChart.init($('#chart1'), xAxisData, data1, data2, data3,"优通百雀羚仓库1");
});

