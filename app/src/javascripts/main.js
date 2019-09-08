var $ = require('jquery');
// var circleProgress = require("circleProgress")

var tenDaysChart = require('./tenDaysChart');
var orderToday = require('./orderToday');
var inventory = require("./iventoryUtilization");
var pickValue = require("./pickValue");
var staff = require("./staffProgress");
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





$(".loading-overlay").hide(300)


data.map(function(item,key){
  function renderNav() {
    var jsRender = require('jsrender'); // returns the jsrender namespace object
    var tmpl = jsRender.templates(contentView.navRender());
    var html = tmpl.render(item).toString();
    $("#nav-container").append(html);

  }
  function renderContent(){
    var jsRender = require('jsrender'); // returns the jsrender namespace object
    var tmpl = jsRender.templates(contentView.contentRender());
    var html = tmpl.render(item)
  $(".step-list-scroller").eq(0).append(html)
  }
  renderNav();
  renderContent();

});
$("#nav-container").children('li').eq(0).addClass('current');
tab.init(data.length,4);
data.map(function(item,key){
  var xAxisData = item.staticData.xAxisData;
  var data1 = item.staticData.data1;
  var data2 = item.staticData.data2;
  var data3 = item.staticData.data3;
  // staticChart.init()
  staticChart.init($(".static-container").eq(key),xAxisData,data1,data2,data3)
})


