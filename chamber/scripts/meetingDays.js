const meetingDays = document.querySelector("#event");
const bannerMessage = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";


const currentDate = new Date();
const weekday = currentDate.getDay();

const bannerDays = { weekday: 'long'};
const nameDay = new Intl.DateTimeFormat('en-US', bannerDays).format(currentDate);


if (nameDay == "Monday" || "Tuesday") {
  document.getElementById("monday-tuesday-banner").style.display = "block";
  meetingDays.innerHTML = `<span>${bannerMessage}</span>`;
  console.log(new Intl.DateTimeFormat('en-US', bannerDays).format(currentDate));
} else {
  meetingDays.innerHTML = "Welcome to the Aguascalientes Chamber of Commerce";
}




