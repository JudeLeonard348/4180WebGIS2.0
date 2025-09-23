
document.getElementById('current-date').textContent = new Date();
document.getElementById('random-number').textContent = Math.random();

var str1 = "Hello World";
document.getElementById('string-output').textContent = str1;

var x = 5;
var y = 10;
var var1 = x + y;
document.getElementById('sum-output').textContent = var1;  // This will print 15
// You can use var1 as needed in your script
var k = sum3(5,6,7);
document.getElementById('k').textContent = k;  // This will print 18

function sum3(x1,x2,x3)
{
var sum=x1+x2;
sum=sum+x3;
return sum;
}
function initialize() {
    var latlng = new google.maps.LatLng(35.306840, -80.73200);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

// If you want to initialize the map when the page loads:
window.onload = initialize;