const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(".database/datasource.db");


//Taking sql data and putting it in JSON format in the

let myString = "[\n";
db.all("SELECT * FROM extension", function (err, rows) {
  let myCounter = 0;
  rows.forEach(function (row) {
    // console.log(row.obj_index + ": " + row.image + ": " + row.device_name + ": " + row.year + ": " + row.brand + ": " + row.type + ": " + row.colour + ": " + row.description );
    myString =
      myString +
      '{\n"obj_index":' +
      row.obj_index +
      ',\n"image":"' +
      row.image +
      '",\n"device_name":"' +
      row.device_name +
      '",\n"year":"' +
      row.year +
      '",\n"brand":"' +
      row.brand;
      '",\n"type":"' +
      row.type;
      '",\n"colour":"' +
      row.colour;
      '",\n"description":"' +
      row.description;
    myCounter++;
    if (myCounter == rows.length) {
      myString = myString + '"\n}\n';
    } else {
      myString = myString + '"\n},\n';
    }
  });

  // console.log(myString);
  var fs = require("fs");
  fs.writeFile("public/frontEndData.json", myString + "]", function (err) {
    if (err) {
      console.log(err);
    }
  });
});


const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(8000, () =>  {console.log("Server is running on Port 8000, visit http://localhost:8000/ or http://127.0.0.1:8000 to access your website");} );
