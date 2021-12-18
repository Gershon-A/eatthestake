$.getJSON('https://api.coingecko.com/api/v3/simple/price?ids=medooza-ecosystem&vs_currencies=usd', function(data){
    console.log("data:",data); // dataJSON
    console.log("medoza:", data["medooza-ecosystem"]["usd"])
    let MEDOOZA_PRICE =  data["medooza-ecosystem"]["usd"]
    document.getElementById("mdza-price").innerHTML = MEDOOZA_PRICE;
    }).fail(function( dat, textStatus, error ) {
        var err = textStatus + ", " + error;
        alert(err);
    });