async function remoteDataFetch(cityName){
    const remoteData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},mh,in&appid=95754580cef988fb394710727dd2514e`)
    
    let fetchData = await remoteData.json();

    console.log(fetchData)
    document.querySelector('.city').innerHTML = fetchData.name;
    document.querySelector('.country').innerHTML = fetchData.sys.country;
    document.querySelector('.longValue').innerText = fetchData.coord.lon
    document.querySelector('.latiValue').innerText = fetchData.coord.lat
    document.querySelector('.tempreture').innerText = `${Math.floor(fetchData.main.temp - 273)}°c`;
    document.querySelector('.cityWeather').innerText = fetchData.weather[0].description;
    document.querySelector('.weatherImg').setAttribute('src',fetchData.weather[0].icon);

}


document.querySelector('.btn').addEventListener('click',function(){
   let cityName = document.getElementById('cityInput').value;
   remoteDataFetch(cityName)
})

remoteDataFetch();


// let optionDisplay = document.getElementById('optionDisplay');
// let buttons = document.querySelectorAll('button')
// for(let element of buttons){
//     element.addEventListener('click', function(){
//         if(element.value === '10'){
//             optionDisplay.innerHTML = element.value
//         }else if(element.value === '100'){
//             optionDisplay.innerHTML = element.value
//         }else if(element.value === '1000'){
//             optionDisplay.innerHTML = element.value
//         }else{  
//             optionDisplay.innerHTML = `Something went wrong!!`
//         }
//         callback(element.value)
//     });
// }

// function callback(val){
//     setTimeout(()=>{
//         let afterOptionSelected = document.querySelector('.afterOptionSelected')
//     afterOptionSelected.innerHTML = `The ${val} is being selected.`
//     },800)
// }
