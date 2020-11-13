let option = parseInt(process.argv[2]);
let temperature = parseInt(process.argv[3]);

switch(option){
  case 1:
    console.log("Temperature in fareinheit is " + convertTemperatureToFareinheit(temperature));
    break;
  case 2:
    console.log("Temperature in celcius is " + convertTemperatureToCelcius(temperature));
    break;
  default:
    console.log("Option not available...");
}
function convertTemperatureToFareinheit(temperature){
  if(temperature >= 0 && temperature <= 100)
    return (9 / 5) * temperature + 32;
  else
    return "not in range";
}

function convertTemperatureToCelcius(temperature){
  if(temperature >= 32 && temperature <= 212)
    return (temperature - 32) * 5 / 9;
  else{
    return "not in range...";
  }
}

