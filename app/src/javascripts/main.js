var $ = require('jquery');
// var circleProgress = require("circleProgress")

var tenDaysChart = require('./tenDaysChart');
var orderToday = require('./orderToday');
var inventory = require('./iventoryUtilization');
var pickValue = require('./pickValue');
var staff = require('./staffProgress');
var staticChart = require('./staticChart');
var tab = require('./tab');
var data = require('./data').data;
var contentView = require('./contentView');

// Compile the markup as a named template
// $.template( "contentView", contentView );
// $.get('/vendor/contentView.html', function(template) {
//   $.tmpl(template, data).appendTo('.step-list-scroller');
// });
// console.log(data)

require('jquery-circle-progress');

//loading动画隐藏
$('.loading-overlay').hide(300);

data.map(function(item, key) {
  function renderNav() {
    var jsRender = require('jsrender'); // returns the jsrender namespace object
    var tmpl = jsRender.templates(contentView.navRender());
    var html = tmpl.render(item).toString();
    $('#nav-container').append(html);
  }
  function renderContent() {
    var jsRender = require('jsrender'); // returns the jsrender namespace object
    var tmpl = jsRender.templates(contentView.contentRender());
    var html = tmpl.render(item);
    $('.step-list-scroller')
      .eq(0)
      .append(html);
  }
  renderNav();
  renderContent();
});
$('#nav-container')
  .children('li')
  .eq(0)
  .addClass('current');
tab.init(data.length, 4);
data.map(function(item, key) {
  var xAxisData = item.warehouseData.xAxisData;
  var data1 = item.warehouseData.data1;
  var data2 = item.warehouseData.data2;
  var data3 = item.warehouseData.data3;
  // staticChart.init()
  staticChart.init($('.static-container').eq(key), xAxisData, data1, data2, data3);
});
action();

//仓库当前状态 进度条

// var currentData = [
//   { ratio: 0.67, title: '周转率1', value: '1231890' },
//   { ratio: 0.17, title: '周转率2', value: '1231890' },
//   { ratio: 0.58, title: '周转率3', value: '1231890' },
//   { ratio: 0.97, title: '周转率4', value: '1231890' },
// ];

function action() {
  data.map(function(item, key) {
    var ele = $('.step-container').eq(key);
    //遍历4个状态
    item.staticData.map(function(item, key) {
      ele
        .find('.dashboard-progress')
        .eq(key)
        .circleProgress({
          value: item.percentage / 100,
          size: 100,
          lineCap: 'round',
          fill: { color: '#4ad991' },
          // thickness: ($('.dashboard-progress').width()) / 20,
        });
    });
    //使用率比例
    $('.ration-controller')
      .eq(key)
      .find('.change-point')
      .attr({
        offset: item.ration, //图形百分比
      });
    // $("#warehouse-ration-value").html(value)//百分比

    // .html(value+'%');

    // .html(item.value);
  });
}

// $(window).resize(function(){
//   action()
// })
