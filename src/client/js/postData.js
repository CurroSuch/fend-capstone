/*The postData function send a request to the server for taking a response with the necessary data. When it recieve the data, the setData function set it on the interface of the webpage. */

async function postData(){
    let response = await fetch("http://localhost:8091/posts1", {
    method: 'POST',
    body: JSON.stringify({
        value: document.getElementById('citytext').value
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
const result = await response.json();
console.log(result);
setData(result);
return result;
};

async function postData2(){
    let response2 = await fetch("http://localhost:8091/posts2", {
    method: 'POST',
    body: JSON.stringify({
        value: document.getElementById('citytext').value
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
const result2 = await response2.json();
console.log(result2);
setData2(result2);
return result2;
};

async function postData3(){
    let response3 = await fetch("http://localhost:8091/posts3", {
    method: 'POST',
    body: JSON.stringify({
        value: document.getElementById('citytext').value
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
const result3 = await response3.json();
console.log(result3);
setData3(result3);
return result3;
};

function setData(result) {
    let dataresult = document.getElementById('city_name');
    let datalat = document.getElementById('latitude');
    let datalng = document.getElementById('longitude');
    dataresult.innerHTML = `City: ${result.geonames[0].name}, ${result.geonames[0].countryName}.`
    datalat.innerHTML = `Latitude: ${result.geonames[0].lat}.`
    datalng.innerHTML = `Longitude: ${result.geonames[0].lng}.`
};

function setData2(result2) {
    let dataresult2 = document.getElementById('datetime');
    let datatemp2 = document.getElementById('app_temp');
    let dataweather2 = document.getElementById('weather_description');
    dataresult2.innerHTML = `Datetime : ${result2.data[0].datetime} in the ${result2.data[0].timezone} timezone.`
    datatemp2.innerHTML = `Temp: ${result2.data[0].app_temp} Celcius degrees.`
    dataweather2.innerHTML = `Weather Description: ${result2.data[0].weather.description}.`
};

function setData3(result3) {
    let dataresult3 = document.getElementById('main_image');
    dataresult3.setAttribute('src', `${result3.hits[0].largeImageURL}`)
};

export { postData, postData2, postData3 };

export{ setData, setData2, setData3 };
