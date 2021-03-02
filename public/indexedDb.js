// test code in browsers that still use a prefix
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; 
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB.");
};

// open database, name it & list database version (db schema)
let db;
const request = indexedDB.open("budgetApp", 1);

// onupgradeneeded will trigger when new db is created or ver changes
request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

// Error & Success Handlers
request.onerror = function(event) {  
    console.error("Database error: " + event.target.errorCode);
};
    // Request generated is saved to db
request.onsuccess = function(event) {
    db = event.target.result;
};

// Add data to database with readwrite flag
function saveRecord(record) {
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    store.add(record);
};
