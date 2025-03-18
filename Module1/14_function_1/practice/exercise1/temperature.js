function temperatureConverter(num) {
    num = parseFloat(num);
    let celcius = ( num - 32 ) / 1.8;
    document.getElementById("outputCelcius").innerText = celcius;
};