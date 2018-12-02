			function alert()
			{
				alert("alert");
			}
			
			function Notice()
			{
				
				var x;
				var person=prompt("Please enter your email address", " ");
				if (person!=null)
				{
					x="Great! We have added</br> " + person + "  to our mailing list!";
					document.getElementById("Notice").innerHTML=x;
				}
			}
			
			 

			function initMap() {
 
  
				var hq = {lat: 52.663, lng: -8.626};
 
  
				var map = new google.maps.Map(
					document.getElementById('map'), {zoom: 4, center: hq});
  
				var marker = new google.maps.Marker({position: hq, map: map});
			}