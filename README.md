# Google Sheets Numeric to String Converter (French Only)

This tool is designed to convert numeric numbers to their string versions within Google Sheets. The code was originally created as a macro for Google Sheets, and it supports the French language only.

## Introduction

If you often find the need to convert numeric values to strings in your Google Sheets, this tool simplifies the process by providing a convenient macro.

## Usage Instructions

1. Open your Google Sheet using [this link](https://docs.google.com/spreadsheets/create?addon_store).
2. Navigate to the Extension menu and select "Apps Script."
3. Replace the existing "my_function() {}" with the code from this repository's .js file. Remember to rename and save the script.
4. Return to your Google Sheet.
5. Again, go to the Extension menu, choose Macros, and import the "convertNumToStr" macro by clicking "Add function."
6. You can now use the function by typing `=convertNumToStr(-SelectedCell-)` in the desired cell.

**Note:** The number limit is 999 999 999 999,99 (English version: 999,999,999,999.99).

Feel free to reach out if you encounter any issues or have suggestions for improvement!
