const data = require('./data/queries.json');
var fs = require('fs');
var util = require('util');
var pathResult = './data.js';
var mod = 'module.exports = {';

let attribute = [];
let category = [];
let status = [];
let creator = [];
let tempArray = [];

data.forEach((element, index) => {
  //attribute and category
  if (data[index].annotations.length !== 0) {
    if (data[index].annotations[0].value !== "" && data[index].annotations[0].type === 'ATTRIBUTE') {
      attribute.push(data[index].annotations[0].name + ':' + data[index].annotations[0].value);
    } else {
      category.push(data[index].annotations[0].name);
    }
  }
  // status
  if (data[index].status.length !== 0) {
    if (data[index].status !== null) {
      status.push(data[index].status);
    }
  }
  // creator
  if (data[index].metadata.length !== 0) {
    if (data[index].metadata.created_by !== null) {
      creator.push(data[index].metadata.created_by);
    }
  }

});

//unique results
attribute = [...new Set(attribute)];
category = [...new Set(category)];
status = [...new Set(status)];
creator = [...new Set(creator)];

finalCreator = [];

creator.forEach((element, index) => {
  finalCreator.push({value: element});
});

// sort
attribute.sort();
category.sort();
status.sort();
creator.sort();

var attr = `\nattribute:`;
var categ = `,\ncategory:`;
var stat = `,\nstatus:`;
var creat = `,\ncreator:`;

// module.exports
fs.writeFile(pathResult, mod, (err) => {
  if (err)
    throw err;
  console.log('Data written to file');
});

// attribute
fs.appendFile(pathResult, attr, (err) => {
  if (err)
    throw err;
  }
);

fs.appendFile(pathResult, JSON.stringify(attribute, null, 2), (err) => {
  if (err)
    throw err;
  }
);

// category
fs.appendFile(pathResult, categ, (err) => {
  if (err)
    throw err;
  }
);

fs.appendFile(pathResult, JSON.stringify(category, null, 2), (err) => {
  if (err)
    throw err;
  }
);

// status
fs.appendFile(pathResult, stat, (err) => {
  if (err)
    throw err;
  }
);

fs.appendFile(pathResult, JSON.stringify(status, null, 2), (err) => {
  if (err)
    throw err;
  }
);

// creator
fs.appendFile(pathResult, creat, (err) => {
  if (err)
    throw err;
  }
);

fs.appendFile(pathResult, JSON.stringify(finalCreator, null, 2), (err) => {
  if (err)
    throw err;
  }
);

fs.appendFile(pathResult, ("\n}"), (err) => {
  if (err)
    throw err;
  }
);



/**
 You will use data that we we using in production. You will need to generate unique filters from
 a list of data.

 ```javascript
 //
 //Data list format:
 //========
 //
 {
     "_id": "5a6771db8393c714a22cfd93",
     "text": "sleeveless jacket",
     "metadata": {
       "created_by": "5a217e6b166ffe2c4a99667b",
     },
     "revision": "new",
     "status": "PENDING",
     "annotations": [
       {
         "value": "SLEEVELESS",
         "type": "ATTRIBUTE",
         "name": "SLEEVE_TYPE",
       },
       {
         "type": "CATEGORY",
         "name": "JACKET",
       }
     ],
   },
 {
     "_id": "5a6771db8393c714a22cfd86",
     "text": "jacket",
     "metadata": {
       "created_by": "5a217e6b166ffe2c4aAAAAAA",
     },
     "revision": "new",
     "status": "APPROVED",
     "annotations": [
       {
         "value": "COTTON",
         "type": "ATTRIBUTE",
         "name": "MATERIAL",
       },
       {
         "type": "CATEGORY",
         "name": "JACKET",
       }
     ],
   }
 //
 //Filter format:
 //========
 //
 {
   attribute: [
     'SLEEVE_TYPE:SLEEVELESS',
     'MATERIAL:COTTON'
   ],
   category: [
     'JACKET',
   ],
   status: [
     'APPROVED', 'PENDING'
   ],
   creator: [
     {
       value: '5a217e6b166ffe2c4a99667b',
     },
     {
       value: '5a217e6b166ffe2c4aAAAAAA',
     }
   ]
 }
 ```

 * Requirements
 * =========
 * -  The `attribute` and `category` values will need to be pulled out of the `annotations` field
 *    value and aggregated based on `type`
 * -  All lists ( `attribute`, `category`, `status` and `creator` ) should be unique
 *    with no falsey values
 * -  `attribute`, `category` and `status` should be sorted alphabetically
 * -  Try to get it running as fast as possible while using ES6 features and syntax.
 *    ( There are close to 12K entries )
 * -  The example data above is a simplified schema, the one you will be using will have many other fields
 * -  You can run this file using `node filter-generation.js`
*/


/**
 * Answer
 */
