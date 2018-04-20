### Node Filter Generator

Generate unique filters from a list of data.


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

 -  You can run this file using `node filter-generation.js`
