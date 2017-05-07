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