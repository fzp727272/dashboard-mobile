module.exports = {
  navRender: function() {
    return ' <li class="nav-list-item nav-height">\
            <p><span>{{:storeName}}</span></p>\
          </li>';
  },
  contentRender: function() {
    return ' <div class="step-container step-width">\
        <div class="step">\
          <div class="detail" id="google">\
              <h2>{{:storeDisplayName}}</h2>\
            <div class="pic"><div class="static-container" style="width: 100%;height:300px"></div></div>\
            <div class="list-container">\
                {{for sheetData}}\
                <div class="list">\
                <div class="key">{{:key}}</div>\
                <div class="value">\
                {{:value}}\
                {{:unit}}\
                </div>\
                </div>\
                {{/for}}\
            </div>\
          </div>\
        </div>\
      </div>';
  },
};
