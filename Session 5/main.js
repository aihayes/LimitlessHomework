/*
Create a piece of code that turn a flat structured array like "data" into a tree structured data like "processData".
As you can see in "data" every object contains its parent's id.
See who can do it in a very efficient way.!
 */
// // Output
// var processData = {
//  root: {
//      id: '1',
//      name: 'abc',
//      parent: '',
//      children: [
//          {
//              id: '2',
//              name: 'abc',
//              parent: '1',
//              children: [
//                  {
//                      id: '3',
//                      name: 'abc',
//                      parent: '2',
//                      children: []
//                  },
//                  {
//                      id: '4',
//                      name: 'abc',
//                      parent: '2',
//                      children: []
//                  }
//              ]
//          }
//      ]
//  }
// }
(function christmasTree() {
    'use strict';

    var data,
        processData;

    function createChristmasTree(inputData) {
        var processDataMap;
        // create a map of the data elements with an extra parameter for its array of children
        if (isArray(inputData)) {
            processDataMap = createProcessDataMap(inputData);
            return createTree(processDataMap);
        }
        return 'Input data must be an array';
    }

    function createProcessDataMap(inputData) {
        var processDataMap = {},
            inputDataEle;
        // create a map of the data elements with an extra parameter for its array of children
        for (var i = 0, len = inputData.length; i < len; i++) {
            inputDataEle = inputData[i];
            processDataMap[inputDataEle.Id] = inputDataEle;
            processDataMap[inputDataEle.Id].children = [];
        }
        return processDataMap;
    }

    function createTree(processDataMap) {
        var tree = {},
            treeEle;
        for (var id in processDataMap) {
            if (processDataMap.hasOwnProperty(id)) {
                treeEle = processDataMap[id];
                // If the element has a parent id, push it to the children on the processDataMap for the parent element
                if (treeEle.parent) {
                    processDataMap[treeEle.parent].children.push(treeEle);
                }
                // If the element has no parent id, push it straight to the tree array as the root element
                else {
                    tree.root = treeEle;
                }
            }
        }
        return tree;
    }

    function isArray(inputValue) {
        return (Object.prototype.toString.call(inputValue) === '[object Array]');
    }

    // Input
    data = [
        { "Id": "1", "Name": "abc", "parent": "" },
        { "Id": "2", "Name": "abc", "parent": "1" },
        { "Id": "3", "Name": "abc", "parent": "2" },
        { "Id": "4", "Name": "abc", "parent": "2" }
    ];

    processData = createChristmasTree(data);
    console.log(processData);
    // stringify accepts two optional parameters (VALUE,REPLACER,SPACE) 
    // replacer can be a function to transform/modify the key-value pairs of the object/array in value - null here used as a placeholder
    // space add indentation/whitespace/line breaks - number = no of spaces at each level, non-empty string = indent with string contents at each level
    console.log(JSON.stringify(processData, null, 4));
})();
