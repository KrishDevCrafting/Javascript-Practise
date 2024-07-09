function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}


// Callbacks are functions passed as arguments to other functions and are executed after some operation has been completed.
function processData(data, callback) {
    setTimeout(() => {
        callback(`${data} processed`);
    }, 1000);
}

function displayData(data) {
    console.log(data);
}

fetchData((fetchedData) => {
    processData(fetchedData, (processedData) => {
        displayData(processedData);
    });
});
