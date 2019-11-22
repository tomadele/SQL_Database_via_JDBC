function readFromTable() {
  var ss = SpreadsheetApp.getActive();
  var sheetDetails = ss.getSheetByName('Details');
  var sheetData = ss.getSheetByName('Data');

  var dbUrl = sheetDetails.getRange('B1');
  var dbPublicIP = sheetDetails.getRange('B2');
  var dbUsername = sheetDetails.getRange('B3');
  var dbPassword = sheetDetails.getRange('B4');
}
