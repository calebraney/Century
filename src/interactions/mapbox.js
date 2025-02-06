//add function to page and deal with duplicate components

var Webflow = Webflow || [];
Webflow.push(function () {
  // Mapbox Code
  const mapInit = function () {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibWlsZm9yZC1ta3RnIiwiYSI6ImNtMnQ5aG9pZDAwcjgybW9oMjcycXRiZ2oifQ.UZ-dRvZgQLR2gOEQFn-1Gg';

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/milford-mktg/cm2tauh2z008501nt3rgld36l',
      center: [-99.389431, 38.52977],
      zoom: 3.5,
      keyboard: false,
    });

    map.addControl(new mapboxgl.NavigationControl());

    let cmsItems = document.querySelectorAll('[sw-cmsmap="item"]');
    let coordinates = [];
    let customMarkerIconURL =
      'https://cdn.prod.website-files.com/67571f487ba8399803f59c32/678166de605f079c9f9b6b63_Waypoint.svg'; // Custom marker icon
    let cmsParent = document.querySelector('[sw-cmsmap="list"]'); // The scrollable parent element

    let popups = [];

    cmsItems.forEach((item) => {
      let longitude = parseFloat(item.querySelector('[sw-cmsmap="longitude"]').innerText);
      let latitude = parseFloat(item.querySelector('[sw-cmsmap="latitude"]').innerText);

      // Check if longitude and latitude are valid numbers
      if (isNaN(longitude) || isNaN(latitude)) {
        console.error('Invalid longitude or latitude for item:', item);
        return;
      }

      coordinates.push([longitude, latitude]);

      // Find the popup template within the current CMS item
      let popupTemplate = item.querySelector('[sw-cmsmap="popup"]');
      if (!popupTemplate) {
        console.error('Popup template not found for item:', item);
        return;
      }

      // Style the popup for animation
      popupTemplate.style.opacity = 0;
      popupTemplate.style.transform = 'translateY(50%)';
      popupTemplate.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      // Create a DOM element for the custom marker
      let el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = `url(${customMarkerIconURL})`;
      el.style.width = '48px';
      el.style.height = '48px';
      el.style.backgroundSize = '100%';

      let popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
        .setDOMContent(popupTemplate)
        .setLngLat([longitude, latitude])
        .addTo(map);

      popups.push({
        markerElement: el,
        popupTemplate: popupTemplate,
        coordinates: [longitude, latitude],
        cmsItem: item,
      });

      new mapboxgl.Marker(el).setLngLat([longitude, latitude]).addTo(map);

      // Add click event to center the map on the marker and highlight the CMS item
      item.addEventListener('click', () => {
        if (!item.classList.contains('is-current')) {
          map.flyTo({
            center: [longitude, latitude],
            zoom: 14, // Adjust zoom level as needed
            essential: true, // Ensures animation is smooth
          });
          highlightCurrentItem(item);
          setTimeout(() => {
            scrollToCurrentItem(item);
          }, 500); // Delay to account for any layout changes
        }
      });

      el.addEventListener('click', () => {
        if (!item.classList.contains('is-current')) {
          map.flyTo({
            center: [longitude, latitude],
            zoom: 14, // Adjust zoom level as needed
            essential: true, // Ensures animation is smooth
          });
          highlightCurrentItem(item);
          setTimeout(() => {
            scrollToCurrentItem(item);
          }, 500); // Delay to account for any layout changes
        }
      });
    });

    popups.forEach(({ markerElement, popupTemplate }) => {
      markerElement.addEventListener('mouseenter', () => {
        popupTemplate.style.opacity = 1;
        popupTemplate.style.transform = 'translateY(0)';
      });

      markerElement.addEventListener('mouseleave', () => {
        popupTemplate.style.opacity = 0;
        popupTemplate.style.transform = 'translateY(50%)';
      });
    });

    function highlightCurrentItem(currentItem) {
      cmsItems.forEach((item) => item.classList.remove('is-current'));
      currentItem.classList.add('is-current');
    }
    /*
function scrollToCurrentItem(currentItem) {
if (cmsParent) {
const newHeight = cmsParent.scrollHeight; // Recalculate the height
cmsParent.scrollTo({
  top: currentItem.offsetTop - cmsParent.offsetTop,
  behavior: 'smooth'
});
}
}
*/

    map.on('load', function () {
      let bounds = coordinates.reduce(function (bounds, coord) {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

      map.fitBounds(bounds, {
        padding: 50,
      });

      // Set max bounds to the current bounds with some buffer
      let buffer = 5; // Adjust this value for buffer
      let extendedBounds = bounds.extend([
        [bounds.getWest() - buffer, bounds.getSouth() - buffer],
        [bounds.getEast() + buffer, bounds.getNorth() + buffer],
      ]);
      map.setMaxBounds(extendedBounds);
    });
  };

  //run function
  mapInit();
  setTimeout(() => {
    console.log('map init');
  }, 3000);
});
