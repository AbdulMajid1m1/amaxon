const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const { Char } = require("mssql");
const fs = require("fs");
const data = require("./api");
const csv_conv= require('./json2csvRead')

module.exports = async function (data) {
  // console.log(data,"starting of csv file")
  let records = [];
  // console.log(data.length)
  let date = new Date();
  var date_today =
  ("0"+date.getDate()).slice(-2)+
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "" +
    date.getFullYear();

  const csvWriter = createCsvWriter({
    // GS1 Saudi Arabia_  plus MMDDYYYY (04072022)
    // let mydate = new Date(),
    path: "file" + date_today + ".csv",
    header: [
      { id: "GLN", title: "GLN" },
      { id: "Prefix", title: "Prefix" },
      { id: "MemberNameE", title: "Company_Name" },
      { id: "Address2", title: "Street" },
      { id: "POBox", title: "Zip" },
      { id: "CityID", title: "City" },
      { id: "Country", title: "Country" },
      { id: "Website", title: "Website" },
      { id: "UpdatedDate", title: "Last_Change_Date" },
      { id: "Status", title: "Status" },
    ],
  });

  // const records = [
  //     {name: 'Bob',  lang: 'French, English'},
  //     {name: 'Mary', lang: 'English'}
  // ];
  // console.log(data);
// data = JSON.stringify(data, null, 2);
// data = data.replaceAll('\\', '')
  for (let i = 0; i < data.length; i++) {
    // let Prefix = "628" + String(data[i].GLNID);
    let Prefix = String(data[i].GLNID);
    let address2 =String(data[i].Street)
    // address2= (address2.split('\"').join(", "));
    let pobox = data[i].Zip
    // console.log(pobox);
    // address2 = JSON.stringify(address2);
    // console.log(address2)
    // address2 = address2.replace(/\\/g, '')
    // console.log(address2)
    var dates = new Date(data[i].Last_Changed_Date);
    var now_utc = Date.UTC(
      dates.getUTCFullYear(),
      dates.getUTCMonth(),
      dates.getUTCDate(),
      dates.getUTCHours(),
      dates.getUTCMinutes(),
      dates.getUTCSeconds()
    );

    // console.log(new Date(now_utc));
    // console.log(dates.toISOString());
    let updatedDate = new Date(now_utc).toISOString();
    // console.log(updatedDate);
    // updatedDate = updatedDate.replace('"\"','"')

    // console.log(data[i],"in the for loop")
    records.push({
       GLN: '"'+data[i].GLN+'"',
      Prefix: '"'+Prefix+'"',
      Company_Name: '"'+data[i].Company_Name+'"',
     Street: '"'+address2+'"',
      Zip: '"'+data[i].Zip+'"',
      City: '"'+data[i].City+'"',
      Country: "SA",
      Website: '"'+data[i].Website+'"',
      Last_Changed_Date: '"'+ updatedDate +'"', // try to make this as String
      Status: '"'+data[i].Status+'"',
    });

    //   console.log(records)

    //  csvWriter.writeRecords(records)
    // fs.writeFile("data.csv", JSON.stringify(records), "utf-8", (err) => {  // UTF-8 with BOM
    //     if (err) console.log(err);
    //     else console.log("Data saved");
    //   })
  }
  const jsonString = await JSON.stringify(records);
  await fs.writeFileSync( `./JSON_Files/data${date_today}.json`, jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
await csv_conv()
  console.log(records.length, "printing records ");
  return records;

 
};
