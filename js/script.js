var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getCenturyFromYear(year) {
	if (year % 100 === 0) {
		return year / 100;
	} else {
		var remainder = year % 100;
		return ((year + 100) - remainder) / 100;
   }
}


function getAkanNames() {

	const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const century = getCenturyFromYear(year)

    

    dayIndexValue = parseInt((((century/4) - 2 * century - 1) + (5*year/4) + (26*(month + 1)/10) + day) %7);
   
    dayOfBirth = (dayIndexValue - 1);

    if(day<=0||day>31){
      alert ("invalid day")
     }
      else if(month<=0||month>12){
      alert ("Invalid month")
      }

       else if(male.checked==true){
        alert("You were born on " +daysOfTheWeek[dayOfBirth]+ " and your akan name is " + maleNames[dayOfBirth])
     }
     else if (female.checked==true){
        alert("You were born on " +daysOfTheWeek[dayOfBirth]+ " and your akan name is " + femaleNames[dayOfBirth])
     }
   
    
}