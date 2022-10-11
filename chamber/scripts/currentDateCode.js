// select the elements to manipulate (output to)
const datefieldUS = document.querySelector("#currentUSDate");
// for european/family history format with day first.
//const datefieldUK = document.querySelector("#currentUKDate"); 

// derive the current date using a date object
const now = new Date();
const fullDateUS = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"
}).format(now);

//const fullDateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

datefieldUS.innerHTML = `<em>${fullDateUS}</em>`;
// datefieldUK.innerHTML = `<em>${fullDateUK}</em>`;