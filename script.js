var output = "nothing";

$("form").submit(async function(event) {
    event.preventDefault();
    var spanText = $("input").first().val();
    //Error

    var url = "https://api.openweathermap.org/data/2.5/forecast?q="
    //instead we create a JSON object which has the input data
    var city = $("input").first().val();
	//INSERT KEY HERE 
    var api = "&appid=" + "";
  	$.ajax({
			url: url + city + api, 
			type: 'GET', 
			success:  function(data) {
				output = data
				displayWeather(data);
		}});
		
			
	//Disabled check 
});



function displayWeather(data) {
	//Filter out the rest of the day and count the next three days
	//Once completed put in seperate divs
	let temp_max = 0;
	let pressure_max = 0;
	let clouds_avg = 0;
	for(let counter = 0; counter * interation != 13; counter++)
		{
			if (data.list[counter].main.temp_max > temp_max)
			{
				temp_max = data.list[counter].main.temp_max;
			}
			if (data.list[counter].main.pressure > pressure_max)
			{
				pressure_max = data.list[counter].main.pressure;
			}
			clouds_avg = clouds_avg + data.list[counter].clouds.all
		}
	//Temperature
	temp_max = temp_max -273.15;
	console.log(temp_max)
	//Pressure
	console.log(pressure_max)
	//Clouds avg
	clouds_avg = 13;
	console.log("Clouds: " + clouds_avg)
	//Date
	var dt=(data.list[1].dt *1000);
var myDate = new Date(dt);
console.log(myDate)
}


//Only enabled one radio button

//When city button clicked
$('input[name="city"]').click(function() {
    $('input[name="zip"]').prop("checked", false);
    $('input[name="coords"]').prop("checked", false);

});

//When zip button clicked
$('input[name="zip"]').click(function() {
    $('input[name="city"]').prop("checked", false);
    $('input[name="coords"]').prop("checked", false);
});

//When coords button clicked
$('input[name="coords"]').click(function() {
    $('input[name="city"]').prop("checked", false);
    $('input[name="zip"]').prop("checked", false);
});