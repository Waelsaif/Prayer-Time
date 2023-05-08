let today = new Date();
let month;
let day;

//	-------------------------------------------------------- //

let dateM = document.getElementById('dateM');
let dateH = document.getElementById('dateH');
let mon = document.getElementById('mon');
let day_not_number = document.getElementById('day_not_number');
let day_number = document.getElementById('day_number');
let days = document.getElementById('days');
let fajr = document.getElementById('fajr');
let shrog = document.getElementById('shrog');
let dahr = document.getElementById('dahr');
let asr = document.getElementById('asr');
let magh = document.getElementById('magh');
let isha = document.getElementById('isha');
let content = document.getElementById('content');

//	-------------------------------------------------------- //

let title2 = document.getElementById('title2');
let img = document.getElementById('img');
let text = document.getElementById('text');
let forms = document.getElementById('forms');
let btn = document.getElementById('btn');
let city_inp = document.getElementById('city_inp');
let country_inp = document.getElementById('country_inp');
let content2 = document.getElementById('content2');


//	-------------------------------------------------------- //

async function api(country = 'saudi arabia', city = 'mecca') {
	let response = await fetch(`http://api.aladhan.com/v1/calendarByCity/${today.getFullYear()}/${today.getMonth() + 1}?city=${city}&country=${country}&method=4`)
	let info = await response.json()
	dateValid();
	for (var i = 0; i < info.data.length; i++) {
		if (info.data[i].date.gregorian.date == `${day}-${month}-${today.getFullYear()}`) {
			prayers(info.data[i])
		}
	}
}


function dateValid() {
	if (today.getMonth() + 1 < 10) {
		month = '0' + (today.getMonth() + 1)
	} else {
		month = (today.getMonth() + 1)
	}
	if (today.getDate() + 1 < 10) {
		day = '0' + (today.getDate())
	} else {
		day = today.getDate();
	}
}
function prayers(info) {
	day_not_number.innerHTML = info.date.hijri.weekday.ar
	day_number.innerHTML = info.date.hijri.day
	mon.innerHTML = info.date.hijri.month.ar
	dateH.innerHTML = info.date.hijri.date
	dateM.innerHTML = info.date.gregorian.date
	fajr.innerHTML = (info.timings.Fajr)
	shrog.innerHTML = (info.timings.Sunrise)
	dahr.innerHTML = (info.timings.Dhuhr)
	asr.innerHTML = (info.timings.Asr)
	magh.innerHTML = (info.timings.Maghrib)
	isha.innerHTML = (info.timings.Isha)

}
btn.addEventListener("click", function () {
	if (country_inp.value != '' && city_inp.value != '') {
		api(country_inp.value, city_inp.value);
	} else {
		api();
	}
	setTimeout(() => {
		content2.style.display = "none"
		content.style.display = "block"
	}, 550);
})


addEventListener('load', async function () {
	await new Promise((resolve, reject) => {
		setTimeout(function () {
			title2.style.left = '0px'
			resolve()
		}, 1000)
	})
	await new Promise((resolve, reject) => {
		setTimeout(function () {
			img.style.left = '0px'
			resolve()
		}, 1000)
	})
	await new Promise((resolve, reject) => {
		setTimeout(function () {
			text.style.left = '0px'
			resolve()
		}, 1000)
	})
	await new Promise((resolve, reject) => {
		setTimeout(function () {
			forms.style.left = '0px'
			resolve()
		}, 1000)
	})
	new Promise((resolve, reject) => {
		setTimeout(function () {
			btn.style.left = '0px'
			resolve()
		}, 1000)
	})
})
// function timeChick(time) {
// 	let timeUp = ''
// 	if (time.charAt(0) == '0') {
// 		timeUp = time.slice(1, -5)
// 		return timeUp;
// 	}
// 	if (+time.slice(0, 2) == 12) {
// 		timeUp = time.slice(0, -5)
// 		return timeUp;
// 	}
// 	if (+time.slice(0, 2) > 12) {
// 		console.log(time)
// 		timeUp = +time.slice(0, 2) - 12 + time.slice(2, -5)
// 		console.log(timeUp)
// 		return timeUp;
// 	}
// }
//---------------------------------------------------------------- // 

