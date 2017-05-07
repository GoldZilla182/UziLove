$('.carousel').slick({
  responsive: [
    {
      breakpoint: 768,
      settings: {
      arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
      arrows: false,
      }
    }
  ]
});


var num = 768.59; //number of pixels before modifying styles
var scroll = false;
document.onscroll = function() {
    if( $(window).scrollTop() > num && $(window).width() > 480) {
        $('.fixed-navigation-bar').addClass('scrolling');
    }
    else {
        $('.fixed-navigation-bar').removeClass('scrolling');
    }
};

if(document.getElementById("accordion") != null)
  {
    var accordion = document.getElementById("accordion");

    var sectionHeaders = accordion.getElementsByTagName("img");

    for(var i = 0;i<sectionHeaders.length;i++){

      sectionHeaders[i].addEventListener("click", function(e){
        var thisHeading = e.target;
        var thisHeadingSection = thisHeading.nextElementSibling;
        if(thisHeadingSection.className == "open"){
          thisHeadingSection.className = "";
        }else{
          thisHeadingSection.className = "open";
        }
      })
    }
  }

  if(document.getElementById("fixed-accordion") != null)
  {
  var accordion2 = document.getElementById("fixed-accordion");

  var sectionHeaders2 = accordion2.getElementsByTagName("img");

  for(var i = 0;i<sectionHeaders2.length;i++){

    sectionHeaders2[i].addEventListener("click", function(e){
      var thisHeading = e.target;
      var thisHeadingSection = thisHeading.nextElementSibling;
      if(thisHeadingSection.className == "open2"){
        thisHeadingSection.className = "";
      }else{
        thisHeadingSection.className = "open2";
      }
    })
  }
}
/*Map Code*/
 var array = [
  [22.31056, 114.22278],
  [22.2754, 114.1438],
  [22.364602, 114.378812],
  [22.312967, 114.041282]
];
        
      function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: Number(22.31056), lng: Number(114.22278)},
          zoom: 11
        });
          var flightPlanCoordinates = new Array();
		var i = 0;
		
        var k = 0;
		for(i=0;i<array.length;i++){
			var myLatLng = {lat: Number(array[i][0]), lng: Number(array[i][1])};
		
			flightPlanCoordinates.push(myLatLng);
			
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: array[i][2]
			});			
		}	
		
          map.set('styles', [
 {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 100
      },
      {
        visibility: 'simplified'
      }
    ]
  }, {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#9d91a1'
      }
    ]
  }, {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#70db70'
      }
    ]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#70db70'
      }
    ]
  }, {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#528fe0'
      }
    ]
   
  }]);
        flightPath.setMap(map);
      }
