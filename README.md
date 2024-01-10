# Google Sheets Numeric to String Converter (French Only)

This tool is designed to convert numeric numbers to their string versions within Google Sheets. The code was originally created as a macro for Google Sheets, and it supports the French language only.

## Introduction

If you often find the need to convert numeric values to strings in your Google Sheets, this tool simplifies the process by providing a convenient macro.

## Usage Instructions

1. Open your Google Sheet using [this link](https://docs.google.com/spreadsheets/create?addon_store).
2. Navigate to the Extension menu and select "Apps Script."
3. Replace the existing "my_function() {}" with the code from this repository's `NumToStrConverter.js` file. Remember to rename and save the script.
4. Return to your Google Sheet.
5. Again, go to the Extension menu, choose Macros, and import the macro associated with the function you added to the script. You should see the "convertNumToStr" function listed.
6. You can now use the function by typing `=convertNumToStr(-SelectedCell-, TRUE || FALSE )` in the desired cell.

**Notes:** 

- The number limit is 999 999 999 999,99 (French version).
- Set `TRUE` to capitalize the first letter; the default is to set the whole result in lowercase.

**Examples:**

- In A2 cell, type `=convertNumToStr(A1, TRUE)` to convert number in A1 to its string version with first letter capitalized.

- In B2 cell, type `=convertNumToStr(B1, FALSE )` or `=convertNumToStr(B1)` to convert number in A1 to its string version full lower case.

Feel free to reach out if you encounter any issues or have suggestions for improvement!
