// Set api token
mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja3Jtb2wiLCJhIjoiY2tta2ppYmJ5MTFtMjJ4bXFuOHg3eGE1MSJ9.39pLiqnYMxhSXonIFxvlrg';
	
// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [4.322840, 52.067101],
  zoom: 11.15
});

// Voeg de planner toe
map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken
  }),
  'top-left'
);