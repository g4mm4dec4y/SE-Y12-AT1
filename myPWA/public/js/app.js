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
    data.forEach(({ name, image, hyperlink, about, language } = rows) => {
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
