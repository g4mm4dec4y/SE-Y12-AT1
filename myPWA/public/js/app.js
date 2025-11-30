let result = "";
fetch("./retrievedData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  data.forEach(({ obj_index, image, device_name, year, brand, type, colour, description } = rows) => {

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
        `;
  });
  document.querySelector(".container").innerHTML = result;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("js/serviceworker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

