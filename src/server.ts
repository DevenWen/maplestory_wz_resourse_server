// var http = require('http'), fs = require('fs'), path = require('path');


import * as http from 'http'
import * as fs from 'fs'
import * as path from 'path'

var document = 'datafiles/'
var xmlparser = require('./etc/xmlparser')

var server = http.createServer(function (req, res) {
	var url = require('url').parse(req.url, true)
    console.log('Got HTTP req for: ' + url.pathname)

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return
    }

    if (url.pathname.indexOf('../') !== -1) {
        res.writeHead(400)
        res.end("Wrong path: " + req.url)
        return
    }

    var filePath = path.join(document, url.pathname)
    if (!fs.existsSync(filePath + ".json") && fs.existsSync(filePath)) {
        xmlparser.getJson(filePath)
    }

    filePath = filePath + ".json"
    var stat
    try {
        stat = fs.statSync(filePath)
    } catch (ex) {
        res.writeHead(404)
        res.end("Nod found")
        return
    }

    if (!stat.isFile()) {
        if (stat.isDirectory() && url.query['contents']) {
            var files = fs.readdirSync(filePath)
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify(files))
            return;
        }
    } else {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        try {
            if (fs.statSync(filePath).isFile()) {
                console.log('Responding with JSON');
                fs.readFile(filePath, function(err, data) {
                    res.end(data)
                })
            }
        } catch (ex){
        }
    }

})


server.listen(8082, function(){
    console.log('WebServer is listening for requests')
})