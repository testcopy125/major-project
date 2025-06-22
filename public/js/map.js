mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: listing.geometry.coordinates,
    zoom: 10
});

const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h6>${listing.location}</h6><p>Exact location will be provided after booking</p>`);

new mapboxgl.Marker({ color: 'black', rotation: 45 })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
