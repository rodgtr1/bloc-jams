  var animatePoints = function() {
 
     var points = document.getElementsByClassName('point');
      
     var revealPoint = function(pointNum) {
         points[pointNum].style.opacity = 1;
         points[pointNum].style.transform = "scaleX(1) translateY(0)";
         points[pointNum].style.msTransform = "scaleX(1) translateY(0)";
         points[pointNum].style.WebkitTransform = "scaleX(1) translateY(0)";
     };
      for(var i = 0; i < points.length; i++){
          revealPoint(i);
      }
  };
