const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(".database/datasource.db");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

//Sorting functions

function sortAlphabetical(callback) {
  db.all("SELECT * FROM site_objects ORDER BY device_name;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  });
}

app.get("/sort_name_alphabetical",(req, res) => {
  sortAlphabetical((rows) => {
    res.json(rows);
  });
});

function sortRevAlphabetical(callback) {
  db.all("SELECT * FROM site_objects ORDER BY device_name DESC;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  });
}

app.get("/sort_name_rev_alphabetical",(req, res) => {
  sortRevAlphabetical((rows) => {
    res.json(rows);
  });
});

function sortYearAscending(callback) {
  db.all("SELECT * FROM site_objects ORDER BY year;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  });
}

app.get("/sort_year_ascending",(req, res) => {
  sortYearAscending((rows) => {
    res.json(rows);
  });
});

function sortYearDescending(callback) {
  db.all("SELECT * FROM site_objects ORDER BY year DESC;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  });
}

app.get("/sort_year_descending",(req, res) => {
  sortYearDescending((rows) => {
    res.json(rows);
  });
});

//Filtering functions

function getBrands(callback) {
  db.all("SELECT brand FROM site_objects;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  });
}

app.get("/get_brands",(req, res) => {
  getBrands((rows) => {
    res.json(rows);
  });
});

function getTypes(callback) {
  db.all("SELECT type FROM site_objects;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  });
}

app.get("/get_types",(req, res) => {
  getTypes((rows) => {
    res.json(rows);
  });
});

function getColours(callback) {
  db.all("SELECT colour FROM site_objects;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  });
}

app.get("/get_colours",(req, res) => {
  getColours((rows) => {
    res.json(rows);
  });
});

//

app.listen(8000, () =>  {console.log("Server is running on Port 8000, visit http://localhost:8000/ or http://127.0.0.1:8000 to access your website");} );
