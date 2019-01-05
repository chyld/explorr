// https://developers.google.com/apps-script/reference/spreadsheet/
// http post https://script.google.com/macros/s/AKfycbypW3Gfla1vsrYHVDatXwpPy_IdRLg01hlShvneNum562dA3Hc/exec a=3 --follow

function doPost(e){
  console.log('doPost', e.postData.contents);

  var str = e.postData.getDataAsString();
  var obj = JSON.parse(str);
  console.log('parsed obj', obj.row);

  var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1BavYF_2Hl_Abg_SXo-QuSXjYUSRTcBNLEyHLFqZxvwM/edit');
  var sheet = ss.getSheets()[0];

  var row = sheet.getLastRow() + 1;
  var col = 1;
  var numRows = 1;
  var numCols = 4;
  sheet.getRange(row, col, numRows, numCols).setValues([obj.row]);

  return ContentService.createTextOutput('Explorr on Google Apps Script');
}
