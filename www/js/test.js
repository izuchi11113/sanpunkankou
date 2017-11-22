
var apikey = "b477f7235e0f10d1ba78918649e128e0b36b8dd7821f28f794180c29247f03b2";
var clientkey = "94c7da94d6ea27e5cd9bf4bcb4c322b0127a007ab53701bbe3738705fae03ba6";
var ncmb = new NCMB(apikey, clientkey);

function initialize() { 
 // 初期表示 
 initializeStreetView(0,0); 
 recieveResult(); 
} 

function recieveResult(){
var Message = ncmb.DataStore("streetview");

Message.limit(500)
       .fetchAll()
       .then(function(sv){
       var row = sv[Math.floor(Math.random()*sv.length)];
       initializeStreetView(
       parseFloat(row.get("ido"))
       ,parseFloat(row.get("keido"))
       );
       }
       );
}
 
var panorama = null; 
function initializeStreetView(svlat, svlng) { 
 var startPosition = {lat: svlat, lng: svlng}; 
 if (panorama == null) { 
  panorama = new google.maps.StreetViewPanorama( 
   document.getElementById('street-view'), 
   { 
    position: startPosition, 
    pov: {heading: 165, pitch: 0}, 
    zoom: 1 
   }); 
 } else { 
  panorama.setPosition(startPosition); 
 } 
}


