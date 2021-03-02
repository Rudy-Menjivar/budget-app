// test code in browsers that still use a prefix
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; 
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB.");
};

// open database & request generated saved to db
let db;
const request = indexedDB.open("budgetApp", 1);
// Console the request.errorCode!
request.onerror = function(event) {  
    console.error("Database error: " + event.target.errorCode);
};
    // Do something with request.result!
request.onsuccess = function(event) {
    db = event.target.result;
    console.log(db);
};
