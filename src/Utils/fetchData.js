// ahora pasaremos de utilizar callbacks a utilizar promesas

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 

// convertimos la funcion a una const y utilizamos un arrow function
const fetchData =(url_api) =>{
    return new Promise((resolve,reject) =>{
        const xhttp = new XMLHttpRequest();
   
        xhttp.open('GET', url_api, true);
        // 
        xhttp.onreadystatechange = (() => { 
          
            if(xhttp.readyState === 4 ){
                // si vamos a utilizar la expresion ternaria, debemos no debemos utilizar el if
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error' + url_api))
                
            }
        })
        
        xhttp.send();
    })
  

}
module.exports = fetchData; 