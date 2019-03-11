
//retrieving from .json file
$(document).ready(function(){
$.getJson("itemlist.json", function(data){
var product_data = '';
$.each(data, function(key, value){
    product_data += '<tr>';
    product_data += '<td>+value.code+</td>';
    product_data += '<td>+value.description+</td>';
    product_data += '<td>+value.unit+</td>';
    product_data += '<td>+value.costprice+</td>';
    product_data += '<td>+value.sellprice+</td>';
    product_data += '<tr>';
});
$('#product_table').append(product_data);
});
});


//retrieving from .csv file
//incomplete
$(document).ready(function(){
$ajax({
    url: "rates_lookup.csv",
    dataType: "text",
    success: function(data){
var product_data = data.split(/\r?\n|\r/);
var table_date= '<table class="table table-bordered table striped">';

    }
});
});
