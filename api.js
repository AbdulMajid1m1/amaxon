const dbOperations = require("./dbOperation");//logic
const csvFile= require("./csvFile")
const fs = require('fs')

const getDatabyDate= async(req, res) => {

 await  dbOperations.getMemberByDate().then((result) => {
    // console.log((result,"printing string "))
   
    csvFile(result)
    
     
    return (result);// 
  });
};
const getDataInPostman=  (req, res) => {

  dbOperations.getMemberByDate().then((result) => {
    console.log((result))
   // csvFile(result)
   // return res.send(result);// 
  });
};
module.exports = {
 getDatabyDate,getDataInPostman}