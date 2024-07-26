const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

const getClient = () => {
  const content = fs.readFileSync(CREDENTIALS_PATH);
  const credentials = JSON.parse(content);

  const { client_email, private_key } = credentials;
  const auth = new google.auth.JWT(client_email, null, private_key, SCOPES);

  return google.sheets({ version: 'v4', auth });
};

const getSheetData = async (spreadsheetId: any, range: any) => {
  const sheets = getClient();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  return response.data.values;
};

module.exports = {
  getSheetData,
};
