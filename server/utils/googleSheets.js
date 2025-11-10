// utils/googleSheets.js
const { google } = require("googleapis");
const dotenv = require('dotenv');
require("dotenv").config();

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

console.log("this is your sheet",process.env.GOOGLE_SERVICE_ACCOUNT_BASE64);
console.log("this is spredsheet id ",SPREADSHEET_ID);
// Decode Base64 → JSON object

function getDecodedCredentials() {
  try {
    const base64Credentials = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
    const jsonString = Buffer.from(base64Credentials, "base64").toString("utf8");
    const credentials = JSON.parse(jsonString);
    return credentials;
  } catch (error) {
    console.error("Error decoding Google credentials:", error);
    throw new Error("Invalid Google credentials JSON");
  }
}

async function getSheetsClient() {
  const credentials = getDecodedCredentials();

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
}

/**
 * Append contact data to Google Sheets
 */
async function appendContactToSheet(contact, sheetName = "Contacts") {
  const sheets = await getSheetsClient();

  // Prepare data row (order must match sheet headers)
  const row = [
    contact.invitationFor,
    contact.hostOrganization,
    contact.hostWebsite,
    contact.organizationDescription,
    contact.contactName,
    contact.contactEmail,
    contact.contactPhone,
    contact.eventTitle,
    contact.eventDate,
    contact.mediaPresence,
    contact.eventLocation,
    contact.street,
    contact.city,
    contact.state,
    contact.country,
    contact.postalCode,
    contact.audienceDescription,
    contact.eventDescription,
    new Date().toISOString(),
  ];

  // Append to sheet
  const result = await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A1`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [row],
    },
  });

  return result.data;
}

module.exports = { appendContactToSheet };
