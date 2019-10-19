


function getPerson () {
    const data1 = document.querySelector('.data1');
    fetch("https://swapi.co/api/people/1") // make the request
    .then(response => response.json()) // convert response to json
    .then(myJson => { // display data in the browser
        data1.innerHTML =
        JSON.stringify(myJson, null, " ")
    })

}

getPerson ();

function dart () {
    const data2 = document.querySelector('.data2');
    fetch("https://swapi.co/api/people/4") // make the request
    .then(response => response.json()) // convert response to json
    .then(myJson => { // display data in the browser
        data2.innerHTML =
        JSON.stringify(myJson, null, " ")
    })

}




