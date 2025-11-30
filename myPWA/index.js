const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(".database/datasource.db");


//SQL functions

//SORTING FUNCS
function sortAlphabet(callback) {
  db.all("SELECT * FROM site_objects ORDER BY device_name;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  })
};

function sortRevAlphabet(callback) {
  db.all("SELECT * FROM site_objects ORDER BY device_name DESC;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  })
};

function sortYear(callback) {
  db.all("SELECT * FROM site_objects ORDER BY year;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  })
};

function sortRevYear(callback) {
  db.all("SELECT * FROM site_objects ORDER BY year DESC;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  })
};


// FILTERING FUNCS

function getBrands(callback) {
  db.all("SELECT brand FROM site_objects;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  })
};

function getTypes(callback) {
  db.all("SELECT type FROM site_objects;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  })
};

function getColours(callback) {
  db.all("SELECT colour FROM site_objects;", (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
      return;
    }
    callback(rows);
  })
};


const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Retrieving SQL function queries

//SORTING FUNCS
app.get("/sort_alphabet", (req, res) => {
  sortAlphabet((rows) => {
    res.json(rows);
  });
});

app.get("/sort_rev_alphabet", (req, res) => {
  sortRevAlphabet((rows) => {
    res.json(rows);
  });
});

app.get("/sort_year", (req, res) => {
  sortYear((rows) => {
    res.json(rows);
  });
});

app.get("/sort_rev_year", (req, res) => {
  sortRevYear((rows) => {
    res.json(rows);
  });
});

// FILTERING FUNCS

app.get("/get_brands", (req, res) => {
  getBrands((rows) => {
    res.json(rows);
  });
});

app.get("/get_types", (req, res) => {
  getTypes((rows) => {
    res.json(rows);
  });
});

app.get("/get_colours", (req, res) => {
  getColours((rows) => {
    res.json(rows);
  });
});

app.listen(8000, () =>  {console.log("Server is running on Port 8000, visit http://localhost:8000/ or http://127.0.0.1:8000 to access your website");} );
