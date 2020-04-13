var fs = require('fs');
var request = require('request');
var progress = require('request-progress');
const puppeter = require('puppeteer')

let downloadImageFromUrl =  (uri, path, onProgress, onResponse, onError, onEnd) => {
    progress(request(uri))
    .on('progress', onProgress)
    .on('response', onResponse)
    .on('error', onError)
    .on('end', onEnd)
    .pipe(fs.createWriteStream(path))
};

(async () => {
    let count = 0 ;
    const browser = await puppeter.launch();
    const page = await browser.newPage();
    await page.goto('http://apod.nasa.gov/')
    const results = await page.evaluate(() => {
        let items = document.querySelectorAll('center:first-child p:last-child a')
        let links = [];
        items.forEach(item => {
            links.push({url : item.getAttribute('href')})
        })
        return links;
    });
    results.forEach(link => {
        downloadImageFromUrl(`https://apod.nasa.gov/${link.url}` , `~/download/logo.jpg`, function (state) {
            console.log("progress", state);
        }, function (response) {
            console.log("status code", response.statusCode);
        }, function (error) {
            console.log("error", error);
        }, function () {
            console.log("done");
            count++;
        });
    })
})()