# LinkedIn Messages [![Build Status](https://travis-ci.com/romualdnave/linkedin-messages.svg?token=pcqqkySenGrMiozMiiqM&branch=master)](https://travis-ci.com/romualdnave/linkedin-messages)
A CLI tool to parse exported LinkedIn messages CSV file to discussion TXT files.

## How to get data from LinkedIn
https://www.linkedin.com/psettings/member-data
## Problem
:contruction: Work in progress :construction:

# Parser Steps
```
// ***************************** PARSER PROCESS ********************************
// **** 1. Map file through a stream to an array (note: file is provided via cli)
// **** 2. Group array by FROM prop
// **** 3. For each object map to corresponding answers (hint: use TO column)
// **** 4. For each conversation reorder items by DATE
// **** 5. For each conversation, streamwrite to a txt file
// **** 6. Exit program
// *****************************************************************************
```

# Model

## Message

Here is how a LinkedIn message is actually represented:

```
{
  FROM,
  TO,
  DATE,
  SUBJECT,
  CONTENT,
  DIRECTION,
  FOLDER
}
```
