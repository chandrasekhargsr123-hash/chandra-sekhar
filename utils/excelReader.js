const XLSX  = require('xlsx');

function getData(LoginData){
    const workbook = XLSX.readFile('test-data/logindata.xlsx');
    const sheet = workbook.Sheets[LoginData];

    return XLSX.utils.sheet_to_json(sheet);
}
module.exports = {getData};