
// Select the HTML element to manipulate
const lastUpdate = document.querySelector("#lastUpdate");
// Try to complete the method with options
try {
	lastModified = new Date(document.lastModified).toLocaleString()
	lastUpdate.innerHTML = `<span>${lastModified}</span>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}
