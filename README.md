# Google Sheets Numeric to String Converter (French Only)

This tool is designed to convert numeric numbers to their string versions within Google Sheets. The code was originally created as a macro for Google Sheets, and it supports the French language only.

## Introduction

If you often find the need to convert numeric values to strings in your Google Sheets, this tool simplifies the process by providing a convenient macro.

## Usage Instructions

1. Open your Google Sheet using [this link](https://docs.google.com/spreadsheets/create?addon_store).
2. Navigate to the Extension menu and select "Apps Script."
3. Replace the existing "my_function() {}" with the code from this repository's `NumToStrConverter.js` file. 
4. Set `CAPITALIZEFIRST` to **true** if you want to capitalize the first letter of the stringified number. Else, set `CAPITALIZEFIRST` to **false** to get the whole string lowercase.
5. Before saving, **remove the line with `export default`** at the end of the script. Google Apps Script does not use this syntax, and it may cause issues.
6. Return to your Google Sheet document.
7. Again, go to the Extension menu, choose Macros, and import the macro associated with the function you added to the script. You should see the "NUMTOSTR" function listed.
8. You can now use the function by typing `=NUMTOSTR(-SelectedCell-)` in the desired cell.
9. If you need to change `CAPITALIZEFIRST` status, just rerun steps 2. and 4. and save.

**Notes:** 

- The number limit is 999 999 999 999,99 (French version).
- Remind to set `CAPITALIZEFIRST` to **true** or **false** to capitalize or not the first letter.

**Example:**

- In A2 cell, type `=NUMTOSTR(A1)` to convert number in A1 to its string version.
- If `CAPITALIZEFIRST` is set to **true**, the first letter will be capitalized.
- If `CAPITALIZEFIRST` is set to **false**, the whole string will be lower case.

Feel free to reach out if you encounter any issues or have suggestions for improvement!
