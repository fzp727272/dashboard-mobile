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


module.exports={

    data:[
        { storeName:'仓库1',
        storeDisplayName:'优通百雀羚仓库1',
            staticData:{
                xAxisData,
                data1,
                data2,
                data3

        },
        sheetData:[
           { key:'出库量',value:'523,309',unit:'箱'},
           { key:'出库单数',value:'523,309',unit:'箱'},
           { key:'出库箱数',value:'523,309',unit:'箱'},
           { key:'出库量',value:'523,309',unit:'箱'},
           { key:'出库量',value:'523,309',unit:'箱'},
           { key:'出库量',value:'523,309',unit:'箱'},
           { key:'出库量',value:'523,309',unit:'箱'},
        ],
        stateData:{
            staticDate:[

            ],

        }


    },
    { storeName:'仓库2',
    storeDisplayName:'优通百雀羚仓库2',
        staticData:{
            xAxisData,
            data1,
            data2,
            data3

    },
    sheetData:[
       { key:'出库量',value:'523,309'},
       { key:'出库单数',value:'523,309'},
       { key:'出库箱数',value:'523,309'},
       { key:'出库量',value:'523,309'},
       { key:'出库量',value:'523,309'},
       { key:'出库量',value:'523,309'},
       { key:'出库量',value:'523,309'},
    ],
    stateData:{
        staticDate:[

        ],

    }


},
{ storeName:'仓库3',
storeDisplayName:'优通百雀羚仓库3',
    staticData:{
        xAxisData,
        data1,
        data2,
        data3

},
sheetData:[
   { key:'出库量',value:'523,309'},
   { key:'出库单数',value:'523,309'},
   { key:'出库箱数',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
],
stateData:{
    staticDate:[

    ],

}


},
{ storeName:'仓库4',
storeDisplayName:'优通百雀羚仓库4',
    staticData:{
        xAxisData,
        data1,
        data2,
        data3

},
sheetData:[
   { key:'出库量',value:'523,309'},
   { key:'出库单数',value:'523,309'},
   { key:'出库箱数',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
],
stateData:{
    staticDate:[

    ],

}


},
{ storeName:'仓库5',
storeDisplayName:'优通百雀羚仓库5',
    staticData:{
        xAxisData,
        data1,
        data2,
        data3

},
sheetData:[
   { key:'出库量',value:'523,309'},
   { key:'出库单数',value:'523,309'},
   { key:'出库箱数',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
   { key:'出库量',value:'523,309'},
],
stateData:{
    staticDate:[

    ],

}


},
    ]
}