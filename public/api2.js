 const baseUrl ='https://calendarific.com/api/v2/holidays?&api_key=084074bedcddcdf86ffc4a079851aa74da436dcb&country=us-ny&year=2020';
//  const key = '084074bedcddcdf86ffc4a079851aa74da436dcb';
// api key used to access different holidays.

// const card = document.querySelector('.card');
const cardTitle1 = document.querySelector('.cardTitle1');
const cardBody1 = document.querySelector('.cardBody1');
const cardFooter1 = document.querySelector('.cardFooter1');

const cardTitle2 = document.querySelector('.cardTitle2');
const cardBody2 = document.querySelector('.cardBody2');
const cardFooter2 = document.querySelector('.cardFooter2');

const cardTitle3 = document.querySelector('.cardTitle3');
const cardBody3 = document.querySelector('.cardBody3');
const cardFooter3 = document.querySelector('.cardFooter3');

const cardTitle4 = document.querySelector('.cardTitle4');
const cardBody4 = document.querySelector('.cardBody4');
const cardFooter4 = document.querySelector('.cardFooter4');

const cardTitle5 = document.querySelector('.cardTitle5');
const cardBody5 = document.querySelector('.cardBody5');
const cardFooter5 = document.querySelector('.cardFooter5');

const cardTitle6 = document.querySelector('.cardTitle6');
const cardBody6 = document.querySelector('.cardBody6');
const cardFooter6 = document.querySelector('.cardFooter6');

// Created 'p' tag so no need to append (cardTitle or cardBody) to document


fetch(baseUrl)
.then(response => response.json())
.then(json => displayHolidays (json));

function displayHolidays(data){
console.log(data);

// First Card
let title1 = document.createElement('h5');
cardTitle1.innerText = data.response.holidays[0].name;
let text1 = document.createElement('p');
cardBody1.innerText = data.response.holidays[0].description;
let smText1 = document.createElement('p1');
cardFooter1.innerText = data.response.holidays[0].date.iso;


// Second Card
let title2 = document.createElement('h5');
cardTitle2.innerText = data.response.holidays[8].name;
let text2 = document.createElement('p');
cardBody2.innerText = data.response.holidays[8].description;
let smText2 = document.createElement('p1');
cardFooter2.innerText = data.response.holidays[8].date.iso;

// Third Card
let title3 = document.querySelector('h5');
cardTitle3.innerText = data.response.holidays[10].name;
let text3 = document.createElement('p');
cardBody3.innerText = data.response.holidays[10].description;
let smText3 = document.createElement('p1');
cardFooter3.innerText = data.response.holidays[10].date.iso;

// Fourth Card
let title4 = document.createElement('h5');
cardTitle4.innerText = data.response.holidays[236].name;
let text4 = document.createElement('p');
cardBody4.innerText = data.response.holidays[236].description;
let smText4 = document.createElement('p1');
cardFooter4.innerText = data.response.holidays[236].date.iso;

// Fifth Card
let title5 = document.createElement('h5');
cardTitle5.innerText = data.response.holidays[308].name;
let text5 = document.createElement('p');
cardBody5.innerText = data.response.holidays[308].description;
let smText5 = document.createElement('p1');
cardFooter5.innerText = data.response.holidays[308].date.iso;


// Sixth Card
let title6 = document.querySelector('h5');
cardTitle6.innerText = data.response.holidays[329].name;
let text6 = document.createElement('p');
cardBody6.innerText = data.response.holidays[329].description;
let smText6 = document.createElement('p1');
cardFooter6.innerText = data.response.holidays[329].date.iso;

}


// Christmas Countdown

function countdown(){
    var now = new Date(); //Date object
    var eventDate = new Date(2020, 11, 25);

    // Find difference between current time/date to the time/date we want
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    // Math.floor rounds down to nearest integer
    // calculation to get seconds

    var s = Math.floor(remTime / 1000); 
    // minutes calculated by diving s by 60
    var m = Math.floor(s / 60);
    // hours calculated by dividing minutes into 60 (minutes)
    var h = Math.floor(m / 60);
    // days calculated by dividing hours into 24 (hours)
    var d = Math.floor(h / 24);

    // Find remaining hours, minutes, seconds
    h %= 24;
    m %= 60;
    s %= 60;

    // if(h <10){
    //     h = "0" + h;}
    // if hours is less than 10. hours is equal to 0 (appending zero to hours) plus hours. another way to write the function operator below instead of using if statement.
    // (h<10)=the condition after the question mark. "0"+h is the true part and :h is the false part

h = (h < 10) ? "0" + h :h; 
m = (m < 10) ? "0" + m :m;
s = (s < 10) ? "0" + s :s;  

document.getElementById("days").textContent = d;
document.getElementById("days").innerText = d;

document.getElementById("hours").textContent = h;
document.getElementById("minutes").textContent = m;
document.getElementById("seconds").textContent = s;

// Makes timer more accurate. call function every second
setTimeout(countdown,1000);
}
countdown();