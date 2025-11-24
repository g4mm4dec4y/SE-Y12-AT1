const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));

/* 
trying to find where the double public is coming from 
UPDATE: FIGURED IT OUT WOOOOOO
basically in line 7 it used to be public/index.html but I removed that and the PWA works now
JOY
*/

});
app.listen(8000, () => console.log("Server is running on Port 8000, visit http://localhost:8000/ or http://127.0.0.1:8000 to access your website") );


/* Beginning of main program */

var object_order_default = [1,2,3,4,5];
var object_order_flex = [];
var device_objects = document.getElementsByClassName("devices");

var device_object_length = device_objects.length;
function reset_objects () {
  device_objects.hide()
  for (var i = 0; i < device_object_length; i++) {
      item = getElementByID('i');
      item.unhide()
  };
};

function sort_by (selected_option) {
  device_objects.hide();
  object_order_flex = [];
  if (selected_option = "alphabetical") {
    

  };
};