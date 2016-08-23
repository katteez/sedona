/********** Карта **********/
window.onload = function () {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.74, -111.74)
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var myLatLng = new google.maps.LatLng(34.87, -111.76);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

/********** Модальное окно "Поиск гостиницы" **********/
var btnOpenClose = document.querySelector(".search-hotels-btn"),
    popupSearch = document.querySelector(".modal-search-hotels");

if (btnOpenClose && popupSearch) {
  var form = popupSearch.querySelector("form"),
      fieldArriveDate = popupSearch.querySelector("#arrive-date"),
      fieldDepartureDate = popupSearch.querySelector("#departure-date"),
      fieldAdults = popupSearch.querySelector("#adults"),
      fieldChildren = popupSearch.querySelector("#children");
  
  btnOpenClose.addEventListener("click", function (event) {
    event.preventDefault();
    if (!popupSearch.classList.contains("show")){
      popupSearch.classList.add("show");
    }
    else {
      popupSearch.classList.remove("show");
      popupSearch.classList.remove("modal-error");
    }
  });

  form.addEventListener("submit", function (event) {
    if (!fieldArriveDate.value || !fieldDepartureDate.value || !fieldAdults.value || !fieldChildren.value) {
      event.preventDefault();
      popupSearch.classList.remove("modal-error");
      popupSearch.offsetWidth = popupSearch.offsetWidth;
      popupSearch.classList.add("modal-error");
    }
  });
}