var json2xls = require('json2xls');
var fs = require('fs');


var path = require("./JSON_Files/data.json")
var json = {
    foo: 'bar',
    qux: 'moo',
    poo: 123,
    stux: new Date()
}

var xls = json2xls(path);

fs.writeFileSync('data.xlsx', xls, 'binary');