var http = require('http');
var bl = require('bl');
var results = []
var count = 0

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)
                
            results[index] = data.toString()
            count++

            if (count == 3) {
                printResults()
            }

        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}

// var urls = process.argv.slice(2)
// var count = urls.length;
// var results = [];




// urls.forEach((url, index) => {
//     console.log("Res :" , results[index])
//     http.get(url, (res) => {
//         res.pipe(bl((err, data) => {
//             if (err) {
//                 throw err;
//             }
//             results[index] = data.toString();
//             console.log(results[index])
//             count--;

//             if (count == 0) {
//                 results.forEach((result) => {
//                     console.log(result)
//                 })
//             }
//         }))
//     })
// });
