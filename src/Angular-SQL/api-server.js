var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = /*process.env.port || */3300;

app.use('/', express.static('static'));

app.listen(port, () => {
    console.log("Running it back...");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//var router = require('./routes')();
//app.use('/api', router);

var mysql = require('mysql');
const { isGeneratedFile } = require('@angular/compiler/src/aot/util');
const { CONSOLE_APPENDER } = require('karma/lib/constants');
var database = "`3309`."

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sqlserverpass123",
  database: "3309",
});

//populate(); uncomment to insert into shift data (should never need to do this again)
function populate() {
    console.log("populating...");
    let qs = `INSERT INTO Shift (driverID, shiftDate, startTime, endTime) VALUES ((SELECT driverID FROM Driver WHERE driverID=105441), '2020-11-23', '07:34:27', NULL);`

    res = new Promise((resolve, reject) => {
            
        con.connect((err) => {
        
            if (err) reject();

            
        });
            con.query(qs, (err, result, fields) => {
                if (err){
                    //console.log(err);
                    reject();
                };
                resolve(result);
            });
    });
    return res.then((data) => {
        endCon();
        //return res.status(200).send(JSON.stringify(data));
    })
    .catch(() => {
        endCon();
        console.log("DB error");
        //return res.status(500).send("DB error");
    })
}

function endCon(){
    con.end( function(err){
        if (err) {
            console.log("Error ending the connection: ", err);
        }
        /*con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "sqlserverpass123"
        });*/
    });
}

function convertFromValid(str){
    let validQueryParam = str.replace(/BXB/g, " ");
    validQueryParam = validQueryParam.replace(/AXA/g, "*");
    //console.log(validQueryParam);
    return validQueryParam;
  }

// ** FUNCTIONALITIES ** //

    const executeSqlStatement = function(queryStatement){
        queryStatement = convertFromValid(queryStatement);
       
        /*
        let res; 

        res = new Promise((resolve, reject) => {
            
            con.connect((err) => {
            
                if (err) reject();

                con.query(queryStatement, (err, result, fields) => {
                    if (err) {
                        reject();
                    }
                    
                    resolve(result);
                });
                
            })
        })

        return res.then((result) => {
            endCon();
            return res.status(200).send(JSON.stringify(result));
        }).catch(() => {
            endCon();
            return res.status(500).send();
        })*/
    };    


// ** ROUTE ** //

app.get("/api/database/:queryString", (req, res) => {

//console.log(req.params.queryString);
    let queryString = convertFromValid(req.params.queryString);
    
    let dbConnect = new Promise((resolve, reject) => {
            
            con.query(queryString, (err, result, fields) => {
                if (err) reject(err);
                resolve(result);
            });
            // con.connect((err) => {
            
            //     if (err){
            //         console.log(err);
            //         reject();
            //     };
            // }).then(() => {

            // }).catch(() => {
            //     reject();
            // });
    })

    return dbConnect
        .then((result) => {
            //endCon();
            //console.log("response:")
            //console.log(result)
            return res.status(200).send(JSON.stringify(result));
        })
        .catch((err) => {
            //endCon();
            console.log("DB error", err);
            return res.status(500).send("DB error");
        })
    //return executeSqlStatement(req.params.queryString);
});

app.get("/api/test/:testParam", (req, res) => {
    res.send("success: " + req.params.testParam);
});

// allowed :  , `  .
// # send as spaces

