let result = "";
fetch('./frontEndData.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
  function appendData(data) {
    data.forEach(({ name, image, hyperlink, about} = rows) => {
      result += `
       <div class="card">
            <img class="card-image" src="${image}" alt="Product image for the ${name} VSCode extension."/>
            <h1 class="card-name">${name}</h1>
            <p class="card-about">${about}</p>
            <a class="card-link" href="${hyperlink}"><button class="btn">Read More</button></a>
        </div>
       `;
    });
    document.querySelector(".container").innerHTML = result;
  }


 
const filter_menu = document.getElementById('filter_accordion');
const filter_button = document.getElementById('filter_button');


function filter_hover () {
  filter_menu.hidden = 'false';
};

filter_button.addEventListener("mouseover", filter_hover);



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

function filter (filter_category, specific_option) {

}

function search (keyword_string) {

}

class Suggestion {
  constructor(name, email, body) {
    this.name = name;
    this.email = email;
    this.body = body;
  }

  create_submission () {

  }

  email_validate () {

  }

  validate () {

  }

  alert () {

  }

}


// actual interaction. apparently requires separate functions

function display (object_index) {
  object_index.forEach(({ name, year, brand, type, colour} = rows) => {
    //result += `
    //  <div class="card">
    //      <img class="card-image" src="${image}" alt="Product image for the ${name} VSCode extension."/>
    //      <h1 class="card-name">${name}</h1>
    //      <p class="card-about">${about}</p>
    //      <a class="card-link" href="${hyperlink}"><button class="btn">Read More</button></a>
    //  </div>
    //  `;
    document.getElementById(name).innerHTML = "${name}";
    document.getElementById(year).innerHTML = "${year}";
    document.getElementById(brand).innerHTML = "${brand}";
    document.getElementById(type).innerHTML = "${type}";
    document.getElementById(colour).innerHTML = "${colour}";
},


function sort_button_hover () {
  
},

function navigation_box_display () {

},

function search_clear () {

},

function search_obj () {

},

/*
filter_button.addEventListener("mouseover", filter_button_hover) {

}

sort_button.addEventListener("mouse_over", sort_button_hover) {

}

device_objects.addEventListener("click", function(event) {
  const device_id = event.target.id;
  device_object_show(device_id);
}

nav_icon.addEventListener("mouseover", navigation_box_display);
clear_icon.addEventListener("click", search_clear);
search_icon.addEventListener("click", search_obj)};
*/);}

