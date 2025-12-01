if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("js/serviceworker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}


function appendData(obj_index) {
  fetch(`/devices`)
              .then(res => res.json())
              .then(devices => {
                const device = devices.find(d => d.obj_index === Number(obj_index));
                const {image, device_name, year, brand, type, colour, description} = device;

                  document.getElementById("rightpopup").innerHTML = `
                    <h2 class="name">${device_name}</h2>
                    <p class="brand">${brand}</p>
                    <p class="year">${year}</p>
                    <p class="type">${type}</p>
                    <p class="colour">${colour}</p>
                    <p class="about">${description}</p>
                  `;

                  document.getElementById("leftpopup").innerHTML = `
                    <img src="/${image}" alt="Device image">
                  `;

                  // debugging
                  console.log('Devices array:', devices);
                  console.log('Selected device:', device);

                });
}


//reset popup


//get by class returns array-like obj so need to parse through
//open popup
const open_buttons = document.getElementsByClassName('object')
for (let btn of open_buttons) {
  btn.addEventListener('click', function() {
    popup_func(this.id); //get the id of the clicked button
  }); //on click open popup
}


function popup_func(item_id) {
  appendData(item_id);
  document.getElementById('popup_win').style.visibility = 'visible' //display popup
  document.body.style.overflow = 'hidden'; // prevent page from scrolling
  document.getElementById('blur_body').style.filter = 'blur(5px)' //blurs body of site
}

//close popup
const close_btn = document.getElementById('popup_close');
close_btn.addEventListener('click', close_popup_func); //on click close popup

function close_popup_func() {
  document.getElementById('popup_win').style.visibility = 'hidden' //hide popup
  document.body.style.overflow = 'visible'; // allows scroll again
  document.getElementById('blur_body').style.filter = 'blur(0px)' //unblurs body
}


//FUNCTIONAL UNTIL THIS POINT



// need to add appendData() somewhere to append the data changes 
const object_order_default = [1,2,3,4,5,6,7,8,9,10]; //dunno if relevant
const object_order_flex = []; //dunno if relevant
const device_objects = document.getElementsByClassName('object');

// function hides all device objects and then unhides as per default array
function reset_objects () {
  for (var i = 0; i < device_objects.length; i++) {
  device_objects[i].style.visibility = "hidden";
  }
  for (var i = 0; i < object_order_default.length; i++) {
    device_objects[i].style.visibility = "visible";
  }
}

// chunky sort function (im scared for filtering)
function sort_by (selected_option) {
  //hide all the objects
  for (var i = 0; i < device_objects.length; i++) {
    device_objects[i].style.visibility = "hidden";
  }
  //empty the flex order to remove past orders not neccessary??
  object_order_flex = [];

  if (selected_option === "alphabetical") {
  // fetch sql query and unhide 
    fetch("/sort_alphabet")
    .then(response => response.json ())
    .then(data => {
      data.forEach(obj => {
        const index = obj.object_index;
        document.getElementById(`${index}`).style.visibility = 'visible';
      });
    })
  } else if (selected_option === "reverse alphabetical") {
    fetch("/sort_rev_alphabet")
    .then(response => response.json ())
    .then(data => {
      data.forEach(obj => {
        const index = obj.object_index;
        document.getElementById(`${index}`).style.visibility = 'visible';
      });
    })
  } else if (selected_option === "year increasing") {
    fetch("/sort_year")
    .then(response => response.json ())
    .then(data => {
      data.forEach(obj => {
        const index = obj.object_index;
        document.getElementById(`${index}`).style.visibility = 'visible';
      });
    })
  } else if (selected_option === "year decreasing") {
    fetch("/sort_rev_year")
    .then(response => response.json ())
    .then(data => {
      data.forEach(obj => {
        const index = obj.object_index;
        document.getElementById(`${index}`).style.visibility = 'visible';
      });
    })
  };
}

function filter (filter_category, specific_option) {
  for (var i = 0; i < device_objects.length; i++) {
    device_objects[i].style.visibility = "hidden";
  }

  const container = document.getElementById("brand_filter");
  container.innerHTML = "";
  
  fetch("/get_brands")
    .then(response => response.json ())
    .then(data => {
      const brand_count = [];
      data.forEach(obj => {
        const brand = obj.brand;
        if (!brand_count.includes(brand)) {
          brand_count.push(brand);
          const brand_button = document.createElement("button");
          brand_button.id = brand;
          brand_button.textContent = obj.brand;
          brand_button.addEventListener("click", () => {
            fetch(`/devices?brand=${encodeURIComponent(brand)}`)
              .then(res => res.json())
              .then(devices => {
                devices.forEach(obj => {
                  const index = obj.object_index;
                  document.getElementById(`${index}`).style.visibility = 'visible';
                });
              });
          });
          container.appendChild(brand_button);
        }
      });
    })
}


//EVENT LISTENING

const page_sort_btn = document.getElementById("sort_popup");
const page_brand_btn = document.getElementById("brand_filter");
const page_type_btn = document.getElementById("type_filter");
const page_colour_btn = document.getElementById("colour_filter");

//listens for different sort options
page_sort_btn.addEventListener("click", function() {
  const sorting_choice = document.getElementsByClassName('sort_option')
  for (let btn of sorting_choice) {
    btn.addEventListener('click', function() {
    sort_by(this.id);
  })}});