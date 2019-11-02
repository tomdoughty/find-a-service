(() => {
  const geoLocateLocate = document.querySelector('.geo-locate--locate');
  const geoLocateSearching = document.querySelector('.geo-locate--searching');
  const latitudeInput = document.querySelector('#latitude');
  const longitudeInput = document.querySelector('#longitude');
  const locationInput = document.querySelector('#location');
  const search = document.querySelector('#search-form');

  const success = (position) => {
    const { latitude, longitude } = position.coords;

    if (latitude && longitude) {
      latitudeInput.value = latitude;
      longitudeInput.value = longitude;
      locationInput.value = '';
      search.submit();
    }
  };

  if (navigator.geolocation && geoLocateLocate) {
    geoLocateLocate.addEventListener('click', (e) => {
      navigator.geolocation.getCurrentPosition(success);
      geoLocateSearching.style.display = 'block';
      e.preventDefault();
    });
  }
})();
