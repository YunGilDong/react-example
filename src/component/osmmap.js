//------------------------------------------------------------------------------
//
// Project:		OpenMapTile Server test
// Target:		
// Filename:	map2.js
// Version:		1.0
// History:		Date		By		Content
//				----------	------	--------------------------------------------
//				
// 
//------------------------------------------------------------------------------
// Include
//------------------------------------------------------------------------------
// Init Global Vriable 
//------------------------------------------------------------------------------
var map;
var miniMap;

var cities = L.layerGroup();
var lines = L.layerGroup();  
var polyLines = L.layerGroup();  
var pointImages = L.layerGroup();  
var arrLine;
var arrPolyLine;
var arrPointImg;

//------------------------------------------------------------------------------
// Map Url & Map Attribute
//------------------------------------------------------------------------------
// var mbAttr = '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
//     mDarkUrl = 'http://192.168.253.132:8080/styles/dark-matter/{z}/{x}/{y}.png',
//     mBasicUrl = 'http://192.168.253.132:8080/styles/klokantech-basic/{z}/{x}/{y}.png',
//     mOsmUrl = 'http://192.168.253.132:8080/styles/osm-bright/{z}/{x}/{y}.png',
//     mPositUrl = 'http://192.168.253.132:8080/styles/positron/{z}/{x}/{y}.png';

var mbAttr = '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    mDarkUrl = 'http://localhost:8001/styles/dark-matter/{z}/{x}/{y}.png',
    mBasicUrl = 'http://localhost:8001/styles/klokantech-basic/{z}/{x}/{y}.png',
    mOsmUrl = 'http://localhost:8001/styles/osm-bright/{z}/{x}/{y}.png',
    mPositUrl = 'http://localhost:8001/styles/positron/{z}/{x}/{y}.png';

//------------------------------------------------------------------------------
// Map style
//------------------------------------------------------------------------------    
var darkMap = L.tileLayer(mDarkUrl, {maxZoom: 15, attribution: mbAttr}),
    basicMap = L.tileLayer(mBasicUrl, {maxZoom: 15, attribution: mbAttr}),
    osmMap = L.tileLayer(mOsmUrl, {maxZoom: 15, attribution: mbAttr}),
    positronMap = L.tileLayer(mPositUrl, {maxZoom: 15, attribution: mbAttr}),
    miniBasicMap = L.tileLayer(mBasicUrl, {minZoom: 0, maxZoom: 15, attribution: mbAttr});


var baseLayers = {
    "DarkMatter": darkMap,
    "Basic": basicMap,
    "OSM-Bright": osmMap,
    "Positron": positronMap,
    };    

var overlays = {
    "Marker": cities,
    "Line": lines,
    "PolyLine": polyLines,
    "PointImg": pointImages
};    
//------------------------------------------------------------------------------
// function (InitMap)
//------------------------------------------------------------------------------
function InitMap()
{
    map = L.map('map', {
        center: [37.652445170907015, 127.411354064941406],
        zoom: 10,
        layers: [basicMap, cities, lines, polyLines, pointImages]
    });
}
//------------------------------------------------------------------------------
// InitMiniMap
//------------------------------------------------------------------------------
function InitMiniMap()
{
    miniMap = new L.Control.MiniMap(miniBasicMap, { toggleDisplay: true });        
}
//------------------------------------------------------------------------------
// popUpInfo
//------------------------------------------------------------------------------ 
function popUpInfo(feature, layer) {
    var popupContent = "<p>I started out as a GeoJSON " +
				feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

		if (feature.properties && feature.properties.popupContent) {
			popupContent += feature.properties.popupContent;
		}

		layer.bindPopup(popupContent);
}
//------------------------------------------------------------------------------
// drawGeoJsonPoint
//------------------------------------------------------------------------------
function drawGeoJsonPoint()
{
    var geojsonFeaturePoint = {
        "type": "Feature",        
        "geometry": {
            "type": "Point",
            "coordinates": [127.411354064941406, 37.652445170907015 ]
        }
    };

    var point = new L.geoJson(
        geojsonFeaturePoint
        ,{onEachFeature: popUpInfo});
    
    return point;
}
//------------------------------------------------------------------------------
// drawGeoJsonPointImage
//------------------------------------------------------------------------------
function drawGeoJsonPointImage()
{
    // arrPointImg
    var baseballIcon = L.icon({
		iconUrl: '../image/mapicon.png',
		iconSize: [32, 37],        
        iconAnchor: [37, 127],
        iconAnchor: [0, 0],
		popupAnchor: [0, -28]
    });

    //L.marker([37.61, 127.02], {icon: baseballIcon}).bindPopup('This is Littleton, CO.').addTo(cities);
    
    var pointImage = L.geoJSON(coorsField, {

		pointToLayer: function (feature, latlng) {
            return L.marker([37.61, 127.02], {icon: baseballIcon});
		},

		onEachFeature: popUpInfo
    });
    pointImage.addTo(pointImages);
    return (pointImage);
}
//------------------------------------------------------------------------------
// drawGeoJsonPointImage2
//------------------------------------------------------------------------------
function drawGeoJsonPointImage2(feature)
{
    // var coorsField = {
    //     "type": "Feature",
    //     "properties": {
    //         "popupContent": "Coors Field"
    //     },
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [127, 37]
    //     }
    // };

    let myIcon = L.icon({
        iconUrl: '../image/mapicon.png',
        iconSize:     [25, 25], // width and height of the image in pixels
        shadowSize:   [35, 20], // width, height of optional shadow image
        iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
        shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    });

    var coorsLayer = L.geoJson(coorsField, {

        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: myIcon});
        },

        onEachFeature: popUpInfo
    }).addTo(map);
}
//------------------------------------------------------------------------------
// drawGeoJsonLine
//------------------------------------------------------------------------------
function drawGeoJsonLine()
{
    var geojsonFeatureLine = [
        {
          "type": "Feature",          
          "geometry": {
            "type": "LineString",
            "coordinates": arrLine
          }
        }
    ];

    var line = new L.geoJson(geojsonFeatureLine, {onEachFeature: popUpInfo});
    line.addTo(lines);
    return line;
}
//------------------------------------------------------------------------------
// drawGeoJsonLine
//------------------------------------------------------------------------------
function drawGeoJsonPolyLine()
{
    var geojsonFeaturePolyLine = [
        {
          "type": "Feature",          
          "geometry": {
            "type": "Polygon",
            "coordinates": arrPolyLine
          }
        }
    ];

    var polyLine = new L.geoJson(geojsonFeaturePolyLine, {onEachFeature: popUpInfo});
    polyLine.addTo(polyLines);    
    return polyLine;
}
//------------------------------------------------------------------------------
// setLineData
//------------------------------------------------------------------------------
function setLineData()
{
    arrLine = [
        [
          127.388694763183594,
          37.660157049319785
        ],
        [
          127.375648498535156,
          37.64528344930188
        ],
        [
          127.357452392578125,
          37.66070786821854
        ],
        [
          127.3512725830078125,
          37.64528344930188
        ]
      ];
}
//------------------------------------------------------------------------------
// setPolyLineData
//------------------------------------------------------------------------------
function setPolyLineData()
{
    arrPolyLine = [
        [
            [
            127.339256286621094,
            37.660157049319785
            ],
            [
            127.28192138671875,
            37.66070786821854
            ],
            [
            127.2826080322265625,
            37.63894752503843
            ],
            [
            127.304237365722656,
            37.64748712688497
            ],
            [
            127.319343566894531,
            37.63949849566231
            ],
            [
            127.34131622314453,
            37.64583437460881
            ],
            [
            127.339256286621094,
            37.660157049319785
            ]
        ]
        ,
        [
            [
            126.339256286621094,
            36.660157049319785
            ],
            [
            126.28192138671875,
            36.66070786821854
            ],
            [
            126.2826080322265625,
            36.63894752503843
            ],
            [
            126.304237365722656,
            36.64748712688497
            ],
            [
            126.319343566894531,
            36.63949849566231
            ],
            [
            126.34131622314453,
            36.64583437460881
            ],
            [
            126.339256286621094,
            36.660157049319785
            ]
        ]
    ];
}
//------------------------------------------------------------------------------
// Start process
//------------------------------------------------------------------------------
InitMap();
InitMiniMap();
L.control.layers(baseLayers, overlays, lines).addTo(map);
miniMap.addTo(map);

// point = drawGeoJsonPoint();
// point.addTo(map);

setLineData();
line = drawGeoJsonLine();
line.addTo(map);

setPolyLineData();
polyLine = drawGeoJsonPolyLine();
polyLine.addTo(map);

// pointImage = drawGeoJsonPointImage();
// pointImage.addTo(map);

drawGeoJsonPointImage2();