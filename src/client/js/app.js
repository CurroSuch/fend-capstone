let day = new Date();
let newDate = (day.getMonth() + 1)+'/'+ (day.getDate())+'/'+ (day.getFullYear());

function getValue(){
    const value = document.querySelector('input').value;
    return value;
};

export { getValue }

function removeTrip(){
    let dataresult = document.getElementById('city_name');
    let datalat = document.getElementById('latitude');
    let datalng = document.getElementById('longitude');
    let dataresult2 = document.getElementById('datetime');
    let datatemp2 = document.getElementById('app_temp');
    let dataweather2 = document.getElementById('weather_description');
    let dataresult3 = document.getElementById('main_image');
    dataresult.innerHTML = `City:`
    datalat.innerHTML = `Latitude:`
    datalng.innerHTML = `Longitude:`
    dataresult2.innerHTML = `Datetime:`
    datatemp2.innerHTML = `Temp:`
    dataweather2.innerHTML = `Weather Description:`
    dataresult3.setAttribute('src', "https://tailoredspain.com/wp-content/uploads/2015/03/traveling.png")
    alert('The trip has been removed!')
}

export { removeTrip }