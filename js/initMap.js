// Initialize and add the map
function initMap() {
    // The location of Uluru
    let uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    // noinspection JSUnresolvedVariable
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    // noinspection JSUnresolvedVariable
    let marker = new google.maps.Marker({position: uluru, map: map});
}