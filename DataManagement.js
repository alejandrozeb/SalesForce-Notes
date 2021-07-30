/* ------------IMPORT DATA----------------
You can easily import external data into Salesforce. Supported data sources include any program that can save data in the comma delimited text format (.csv).

Data Import Wizard—this tool
accessible through the Setup menu, lets you import data in common standard objects, such as contacts, leads, accounts, as well as data in custom objects. It can import up to 50,000 records at a time

Data Loader
this is a client application that can import up to five million records at a time, of any data type, either from files or a database connection. It can be operated either through the user interface or the command line. In the latter case, you need to specify data sources, field mappings, and other parameters via configuration files. This makes it possible to automate the import process, using API calls.

Use the Data Import Wizard When:
- You need to load less than 50,000 records.
- The objects you need to import are supported by the wizard.
- You don’t need the import process to be automated.

Use Data Loader When:
- You need to load 50,000 to five million records. If - You need to load into an object that is not supported by the Data Import Wizard.
- You want to schedule regular data loads, such as nightly imports.


types
- Multi-Select Picklists—To import multiple values into a multi-select picklist, separate the values by a semicolon in your import file
- Checkboxes—To import data into a checkbox field, use 1 for checked values and 0 for unchecked values.
- Default Values—For picklist, multi-select picklist, and checkbox fields, if you do not map the field in the import wizard, the default value for the field, if any, is automatically inserted into the new or updated record.
- Date/Time Fields—Ensure that the format of any date/time fields you are importing matches how they display in Salesforce per your locale setting.
- Formula Fields—Formula fields cannot accept imported data because they are read-only.
- ield Validation Rules—Salesforce runs validation rules on records before they are imported

*/