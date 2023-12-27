# Numeric to String Converter ( French Only )

I created this code originally for Google Sheet use, as a macro to convert a numeric number to its string version.

Supported language is french only as this was the only one I needed.


## How to use guide

- Open your sheet with @https://docs.google.com/spreadsheets/create?addon_store

- Go on Extension menu > Apps Script

- Replace "my_function() {}" with this repo's .js code, rename and save

- Go back on your sheet

- Go again on Extension menu > Macros > Import Macro and click on "convertNumToStr" : Add function.

You can now type "=convertNumToStr(-SelectedCell-)" in the cell you want to use this function.