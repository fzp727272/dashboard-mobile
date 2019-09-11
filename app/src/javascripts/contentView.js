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
            <h3> 当天数据</h3>\
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
            <div class="list-container">\
            <h3>仓库状态</h3>\
            <div class="dashboard-panel" id="warehouse-ration" style="flex: 1;">\
              <div id="warehouse-state">\
                <div class="warehouse-state-row">\
                {{for  staticData}}\
                  <div class="warehouse-state-list">\
                    <div class="dashboard-progress">\
                      <div class="progress-ration"><span>{{:percentage}}</span>%</div>\
                    </div>\
                    <div class="warehouse-state-text">\
                      <div class="warehouse-state-text-title">{{:title}}</div>\
                    </div>\
                  </div>\
                  {{/for}}\
                </div>\
              </div>\
            </div>\
            </div>\
  \
            <div class="list-container">\
            <h3>仓库状态:{{:ration}}</h3>\
            <div class="dashboard-panel" id="warehouse-ration" style="flex: 1;">\
            <div class="ration-container">\
            <svg width="100%" height="100%" viewBox="0 0 320 10" version="1.1" xmlns="http://www.w3.org/2000/svg"\
              xmlns:xlink="http://www.w3.org/1999/xlink">\
              <defs>\
                <linearGradient x1="-1.11022302e-14%" y1="60%" x2="100%" y2="60%" class="ration-controller" id="warehouse-ration-svg">\
                  <stop stop-color="#4ad991" offset="0%" />\
                  <stop stop-color="#4ad991" class="change-point" offset="50%" />\
                  <stop stop-color="rgba(0,0,0,.1)" class="change-point" offset="50%" />\
                  <stop stop-color="rgba(0,0,0,.1)" offset="100%" />\
                </linearGradient>\
              </defs>\
              <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                <g id="Untitled-1" fill="url(#warehouse-ration-svg)" fill-rule="nonzero">\
                  <path d="M0,0 L8.31168831,0 L8.31168831,50 L0,50 L0,0 Z M12.4675325,0 L20.7792208,0 L20.7792208,50 L12.4675325,50 L12.4675325,0 Z M24.9350649,0 L33.2467532,0 L33.2467532,50 L24.9350649,50 L24.9350649,0 Z M37.4025974,0 L45.7142857,0 L45.7142857,50 L37.4025974,50 L37.4025974,0 Z M49.8701299,0 L58.1818182,0 L58.1818182,50 L49.8701299,50 L49.8701299,0 Z M62.3376623,0 L70.6493506,0 L70.6493506,50 L62.3376623,50 L62.3376623,0 Z M74.8051948,0 L83.1168831,0 L83.1168831,50 L74.8051948,50 L74.8051948,0 Z M87.2727273,0 L95.5844156,0 L95.5844156,50 L87.2727273,50 L87.2727273,0 Z M99.7402597,0 L108.051948,0 L108.051948,50 L99.7402597,50 L99.7402597,0 Z M112.207792,0 L120.519481,0 L120.519481,50 L112.207792,50 L112.207792,0 Z M124.675325,0 L132.987013,0 L132.987013,50 L124.675325,50 L124.675325,0 Z M137.142857,0 L145.454545,0 L145.454545,50 L137.142857,50 L137.142857,0 Z M149.61039,0 L157.922078,0 L157.922078,50 L149.61039,50 L149.61039,0 Z M162.077922,0 L170.38961,0 L170.38961,50 L162.077922,50 L162.077922,0 Z M174.545455,0 L182.857143,0 L182.857143,50 L174.545455,50 L174.545455,0 Z M187.012987,0 L195.324675,0 L195.324675,50 L187.012987,50 L187.012987,0 Z M199.480519,0 L207.792208,0 L207.792208,50 L199.480519,50 L199.480519,0 Z M211.948052,0 L220.25974,0 L220.25974,50 L211.948052,50 L211.948052,0 Z M224.415584,0 L232.727273,0 L232.727273,50 L224.415584,50 L224.415584,0 Z M236.883117,0 L245.194805,0 L245.194805,50 L236.883117,50 L236.883117,0 Z M249.350649,0 L257.662338,0 L257.662338,50 L249.350649,50 L249.350649,0 Z M261.818182,0 L270.12987,0 L270.12987,50 L261.818182,50 L261.818182,0 Z M274.285714,0 L282.597403,0 L282.597403,50 L274.285714,50 L274.285714,0 Z M286.753247,0 L295.064935,0 L295.064935,50 L286.753247,50 L286.753247,0 Z M299.220779,0 L307.532468,0 L307.532468,50 L299.220779,50 L299.220779,0 Z M311.688312,0 L320,0 L320,50 L311.688312,50 L311.688312,0 Z"\
                    id="Graph-segments-group"></path>\
                </g>\
              </g>\
            </svg>\
          </div>\
            </div>\
            </div>\
\
          </div>\
        </div>\
      </div>';
  },
};
