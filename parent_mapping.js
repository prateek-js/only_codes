var customFieldOptions = [
 {
"id": 360005088808,
"name": "Pre-sales::Delivery Period",
"raw_name": "Pre-sales::Delivery Period",
"value": "pre-sales__delivery_period",
"default": false
}, 
   {
"id": 360005088808,
"name": "Pre-sales::How to Order::Purchasing Process",
"raw_name": "Pre-sales::Delivery Period",
"value": "pre-sales__delivery_period",
"default": false
}, 
 {
  "id": 360005088828,
  "name": "Pre-sales::Others",
  "raw_name": "Pre-sales::Others",
  "value": "pre-sales__others",
  "default": false
},  
{
  "id": 360005088848,
  "name": "Post-sales(Order support)::Order tracking",
  "raw_name": "Post-sales(Order support)::Order tracking",
  "value": "post-sales_order_support___order_tracking",
  "default": false
},
{
"id": 360005088868,
"name": "Post-sales(Order support)::Exchange/Refund",
"raw_name": "Post-sales(Order support)::Exchange/Refund",
"value": "post-sales_order_support___exchange/refund",
"default": false
},
  {
"id": 360005088868,
"name": "Wala",
"raw_name": "Post-sales(Order support)::Exchange/Refund",
"value": "post-sales_order_support___exchange/refund",
"default": false
}

];

var parentMapping = [];
var parentIDMapping = [];
var treeMapping = [];
var idCtr = 1;
var parentID = 0;

$.each(customFieldOptions, function(key, data) {
  var array = data.name.split("::");
  
console.log(array);
  $.each(array, function(index, value){
    if (index === 0) {
        // parent mapping must be unique
        if (parentMapping.indexOf(array[0]) === -1) {
          parentMapping.push(value);
          parentIDMapping.push(idCtr);
          treeMapping.push({
            'id': idCtr,
            'parentid': 0,
            'value': value            
          });
        idCtr++
        }
       
      }
    if (index !== 0 && index !== array.length - 1)
      {
        parentId = parentIDMapping[parentMapping.indexOf(array[index-1])];
        if (parentMapping.indexOf(array[index]) === -1) {
          parentMapping.push(value);
          parentIDMapping.push(idCtr);
          treeMapping.push({
            'id': idCtr,
            'parentid': parentId,
            'value': value            
          });
        idCtr++
        }
      }
    if (index !== 0 && index === array.length - 1)
      {
        parentId = parentIDMapping[parentMapping.indexOf(array[index-1])];
        treeMapping.push({
          'id': idCtr,
          'parentid': parentId,
          'value': value
        });
        idCtr++
      }
  });
  
 
});

console.log('treeMapping',treeMapping);
console.log('parentMapping',parentMapping);
