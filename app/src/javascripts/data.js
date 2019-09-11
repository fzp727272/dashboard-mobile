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

module.exports = {
  data: [
    {
      storeName: '仓库1',
      storeDisplayName: '优通百雀羚仓库1',
      warehouseData: {
        xAxisData,
        data1,
        data2,
        data3,
      },
      sheetData: [
        { key: '出库量', value: '523,309', unit: '箱' },
        { key: '出库单数', value: '523,309', unit: '箱' },
        { key: '出库箱数', value: '523,309', unit: '箱' },
        { key: '出库量', value: '523,309', unit: '箱' },
        { key: '出库量', value: '523,309', unit: '箱' },
        { key: '出库量', value: '523,309', unit: '箱' },
        { key: '出库量', value: '523,309', unit: '箱' },
      ],
        staticData: [
          { percentage: 67, title: '周转率1', value: '1231890' },
          { percentage: 17, title: '周转率2', value: '1231890' },
          { percentage: 58 , title: '周转率3', value: '1231890' },
          { percentage: 90, title: '周转率4', value: '1231890' },
        ],
        ration:"88%",

    },

    {
        storeName: '仓库2',
        storeDisplayName: '优通百雀羚仓库2',
        warehouseData: {
          xAxisData,
          data1,
          data2,
          data3,
        },
        sheetData: [
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库单数', value: '523,309', unit: '箱' },
          { key: '出库箱数', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
        ],
          staticData: [
            { percentage: 67, title: '周转率1', value: '1231890' },
            { percentage: 17, title: '周转率2', value: '1231890' },
            { percentage: 58 , title: '周转率3', value: '1231890' },
            { percentage: 90, title: '周转率4', value: '1231890' },
          ],
          ration:"88%",
  
      }, {
        storeName: '仓库3',
        storeDisplayName: '优通百雀羚仓库3',
        warehouseData: {
          xAxisData,
          data1,
          data2,
          data3,
        },
        sheetData: [
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库单数', value: '523,309', unit: '箱' },
          { key: '出库箱数', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
        ],
          staticData: [
            { percentage: 67, title: '周转率1', value: '1231890' },
            { percentage: 17, title: '周转率2', value: '1231890' },
            { percentage: 58 , title: '周转率3', value: '1231890' },
            { percentage: 90, title: '周转率4', value: '1231890' },
          ],
          ration:"88%",
  
      },
      {
        storeName: '仓库4',
        storeDisplayName: '优通百雀羚仓库4',
        warehouseData: {
          xAxisData,
          data1,
          data2,
          data3,
        },
        sheetData: [
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库单数', value: '523,309', unit: '箱' },
          { key: '出库箱数', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
          { key: '出库量', value: '523,309', unit: '箱' },
        ],
          staticData: [
            { percentage: 67, title: '周转率1', value: '1231890' },
            { percentage: 17, title: '周转率2', value: '1231890' },
            { percentage: 58 , title: '周转率3', value: '1231890' },
            { percentage: 90, title: '周转率4', value: '1231890' },
          ],
          ration:"88%",
  
      },
  ],
};
