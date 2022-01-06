// document.querySelector(".grab").addEventListener('click', getdata);

// function getdata(){
//     const number = document.getElementById('check')
//     console.log(number)


// }

// getdata()

// // console.log("we are going there man")

// const xhr = new XMLHttpRequest();

// xhr.open('GET', `https://rapidapi.com/Gramzivi/api/covid-19-data/`, true)

// xhr.onload = function(){
//     if(this.status === 200){
//         const response = this.responseText;
//         console.log(response);
//     }
// }

// 

// fetch("https://covid-19-data.p.rapidapi.com/country/code?code=it", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
// 		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

//  fetch('https://covid-19-data.p.rapidapi.com/report/country/all?date=2020-04-01', {
// 	mode: "no-cors",
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
// 		"x-rapidapi-key": "7735e02cfdmshae41b279ac241f7p1d4a9ejsn9b1b314d3089"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// fetch("https://proxy-orbit1.p.rapidapi.com/v1/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "proxy-orbit1.p.rapidapi.com",
// 		"x-rapidapi-key": "7735e02cfdmshae41b279ac241f7p1d4a9ejsn9b1b314d3089"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// fetch("https://endlessmedicalapi1.p.rapidapi.com/UpdateFeature?name=%3CREQUIRED%3E&value=%3CREQUIRED%3E&SessionID=%3CREQUIRED%3E", {
// 	"type": "cors",
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
// 		"x-rapidapi-key": "7735e02cfdmshae41b279ac241f7p1d4a9ejsn9b1b314d3089"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// fetch('https://api.covidtracking.com/v1/us/daily.json', {
// 	mode: "no-cors",
// 	method: "GET",
	 
// })
// .then(response => {
// 	console.log(response);
// 	let data = response.json
// 	//return date
// 	console.log(response)
// 	console.log(data)
// })
// .catch(err => {
// 	console.error(err);
// });


// https://api.covidtracking.com/v1/us/daily.json
// https://api.covidtracking.com/v1/us/20200501.json
// https://covidtracking.com/data/api


// fetch('https://api.covidtracking.com/v1/us/daily.json').then((data)=>{
// 	return data.json();
// }).then((getting)=>{
// 	console.log(getting)
// 	document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(1)").innerHTML = getting[0].date
// 	document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML = getting[0].states
// 	document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML = getting[0].positive
// 	document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(4)").innerHTML = getting[0].negative
// 	document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(5)").innerHTML = getting[0].pending
// 	document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(6)").innerHTML = getting[0].hospitalizedCurrently
// })



fetch('https://api.covidtracking.com/v1/us/daily.json').then((data)=>{
	return data.json();
}).then((getting)=>{
	// console.log(getting)
	let data = `<tr>
	<th>DATE</th>
	<th>STATES</th>
	<th>POSITIVE</th>
	<th>NEGATIVE</th>
	<th>PENDING</th>
	<th>HOSPITALIZED CURRENTLY</th>
</tr>`;
	getting.forEach(element => {
		data = data + `
		<tr>
			<td>${element.date}</td>
			<td>${element.states}</td>
			<td>${element.positive}</td>
			<td>${element.negative}</td>
			<td>${element.pending}</td>
			<td>${element.hospitalizedCurrently}</td>
		</tr>
		`;
		console.log(element)
		 
		 
	});
	document.getElementById("data").innerHTML = data; 
	// document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(1)").innerHTML = element[0].date
	// document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML = element[0].states
	// document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML = element[0].positive
	// document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(4)").innerHTML = element[0].negative
	// document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(5)").innerHTML = element[0].pending
	// document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(6)").innerHTML = element[0].hospitalizedCurrently
})




 
 

 