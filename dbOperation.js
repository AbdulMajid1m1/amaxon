// var config = require("./dbconfig");
// const sql = require("mssql");
// // fetch data from database
// async function getMemberByDate() {
 
//     try {
        

//         let pool = await sql.connect(config);
//     // let GlnId = await pool.request()
//     // .query ("select GLNID from MEM.Member")
//     // console.log(GlnId.recordsets[0][0])
//     // for (let i = 0; i < GlnId.recordsets[0].length; i++) {

//     // let GLNID = await ('628'+String(GlnId.recordsets[0][i].GLNID))
//     // if(GLNID.endsWith("null")){
//     //   continue
//     // }
//     // console.log(GLNID)
//     // }
//       let products = await pool.request()
      
//       .query("select MEM.Member.GLNID,MEM.Member.GLN as GLN ,MEM.Member.MemberNameE as Company_Name, ISNULL(MEM.Member.Address2,'')AS Street,ISNULL(MEM.Member.POBox,'')AS Zip,ISNULL(MEM.Member.Website,'')AS Website, MEM.Member.UpdatedDate AS Last_Changed_Date, MEM.Member.Status As Status,MST.City.CityNameE As City from MEM.Member, MST.City where MST.City.CityID = MEM.Member.CityID and Status = 'Active'");     
//      for (let i = 0; i < products.rowsAffected; i++){
//       // console.log(products.recordsets[0][i].GLNID);
//       let Prefix = '628'+String(products.recordsets[0][i].GLNID);
      
//      }
//       return products.recordsets[0];
//     } catch (err) {
//       console.error("unable to get the data from mssql", err);
//     }
//   }
//   // getMemberByDate()

// module.exports = {
//   getMemberByDate:getMemberByDate,
// };

var config = require("./dbconfig");
const sql = require("mssql");

async function getMemberByDate() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request()
      .query(`
        SELECT 
          u.gcpGLNID AS GLNID,
          u.gln AS GLN,
          u.company_name_eng AS Company_Name,
          ISNULL(u.address2, '') AS Street,
          ISNULL(u.po_box, '') AS Zip,
          ISNULL(u.website, '') AS Website,
          u.updated_at AS Last_Changed_Date,
          u.status AS Status,
          u.district AS City 
        FROM 
          [GS1PRODDB].[dbo].[users] u
        WHERE
          u.status = 'Active'
      `);

    for (let i = 0; i < products.recordset.length; i++) {
      // let Prefix = '628' + String(products.recordset[i].GLNID);
      let Prefix = String(products.recordset[i].GLNID);
      console.log(Prefix);
    }
    return products.recordset;
  } catch (err) {
    console.error("unable to get the data from mssql", err);
  }
}

module.exports = {
  getMemberByDate,
};
