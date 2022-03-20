//3564b5c94a638e8f1b203059d2e81809
var output = "nothing";

$( "form" ).submit(function( event ) {
  if ( $( "input" ).first().val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }

	var spanText = $("input").first().val();
	//Error
	//$( "span" ).text( spanText ).show().fadeOut( 3000 );
  event.preventDefault();

  var url = "https://api.openweathermap.org/data/2.5/weather?q="
  //instead we create a JSON object which has the input data
  var city = $("input").first().val();
	var api = "&appid=" + "3564b5c94a638e8f1b203059d2e81809";
	$( "span" ).text( url+city+api ).show()
	$.get( url+city+api, function(data,status){
		console.log(data);
		var ss = JSON.stringify(data);
		window.alert(ss);
		$( "span" ).text( data ).show();
		output = data;
	});
	console.log("dsad");
	alert("dsad");
	console.log(output);
});



