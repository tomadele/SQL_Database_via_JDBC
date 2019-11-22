function readFromTable() {
  var ss = SpreadsheetApp.getActive();
  var sheetDetails = ss.getSheetByName('Details');
  var sheetData = ss.getSheetByName('Data');

  var dbUrl = sheetDetails.getRange('B1').getValue();
  var dbPublicIP = sheetDetails.getRange('B2').getValue();
  var dbUsername = sheetDetails.getRange('B3').getValue();
  var dbPassword = sheetDetails.getRange('B4').getValue();

  sheetDetails.getRange()
}
