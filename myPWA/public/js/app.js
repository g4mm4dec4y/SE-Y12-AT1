if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("js/serviceworker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });

/*

function appendData(data) {
  data.forEach(({ obj_index, image, device_name, year, brand, type, colour, description }) => {

// Inserting the relevant information about the device
    result += `
        <div class="rightpopup">
          <h2 class="name">${device_name}</h2>
          <p class="brand">${brand}</p>
          <p class="year">${year}</p>
          <p class="type">${type}</p>
          <p class="colour">${colour}</p>
          <p class="about">${description}</p>
        </div>
        `;

// Inserting the image link to the right side of the card
    result += `
        <div class="leftpopup">
          <img src="${image}" alt="Device image">
        </div>
        `;
  });
  document.querySelector(".container").innerHTML = result;
}


const open_button = document.getElementsByClassName('open')
open_button.addEventListener('click', popup_func)

function popup_func() {
  appendData()
  document.getElementById('popupwin').style.visibility = 'visible'
}
*/
}

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
    // idk what to do this this oops
    .catch(err => console.error(err));
  };
}


function filter (filter_category, specific_option) {
  for (var i = 0; i < device_objects.length; i++) {
    device_objects[i].style.visibility = "hidden";
  }


  fetch("/get_brands")
    .then(response => response.json ())
    .then(data => {
      const brand_count = [];
      data.forEach(obj => {
        const brand = obj.brand;
        if (brand != brand_count) {
          brand_count.push(brand);
          const brand_button = document.createElement("brand");
          brand_button.textContent = obj.brand;
          brand_button.addEvent
        }
        
      });
    })
}