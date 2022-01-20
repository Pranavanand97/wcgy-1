/*Start of JSON*/

var jobsData =[];

// let url = 'https://script.google.com/macros/s/AKfycbx_aTT55MY4ej4nd59dikrjqE1iMCihhZuHpNBBwcBjuN3uLKg8j1cxuUQZCBxD4Bfv/exec';


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://script.google.com/macros/s/AKfycbx_aTT55MY4ej4nd59dikrjqE1iMCihhZuHpNBBwcBjuN3uLKg8j1cxuUQZCBxD4Bfv/exec');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    const data = JSON.parse(ourRequest.responseText);

    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();


function createHTML(jobsData){
  var rawTemplate = document.getElementById("userA").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(jobsData);

  var jobContainer = document.getElementById("jobsOne");
  jobContainer.innerHTML = ourGeneratedHTML;
  console.log(jobsData);

}




