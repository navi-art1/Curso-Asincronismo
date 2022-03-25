// instanciando xk la requerimos
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 

let API = 'https://rickandmortyapi.com/api/character/';

// no se utiliza fetch, xk utiliza promesas

function fetchData(url_api,callback){
    // construimos la peticion a traves de xml
    let xhttp = new XMLHttpRequest();
    // haciendo un llamado a la url, abrimos una conexion
    xhttp.open('GET', url_api, true); // get para que traiga info, url_api es el lugar, true para que ser asincronico
    // escuchar la conexion, si el cambio sucede se ejecuta la funcion
    xhttp.onreadystatechange = function (event){
        // si el estado donde se encuentra es satisfactorio, tiene 5 estados en total
        /*  
            0)  solicitud no inicializada
            1)  conexion de servidos establecida
            2)  solicitud recibida
            3)  solicitud de procesamiento
            4)  solicitud finalizada y respuesta lista
        */
        if(xhttp.readyState === 4 ){
            // ejecutar un condicional para saber si se completo de manera correcta o incorrecta
            /*
                0) si nos da 200 esta todo bien
                1) si nos da 500 hay un error 
                2) si nos da 400 no encontro algo
            */
            if(xhttp.status === 200){
                // regresando el callback, se le pasa 2 valores, el error y la informacion del llamado a la api
                callback (null, JSON.parse(xhttp.responseText));
                // el resultado lo tenemos que pasar a texto, xk sino no se va a poder trabajar
            }else{
                // mandamos un error en caso haya cosas mal hechas
                const error = new Error('Error'+ url_api);
                return callback (error,null)
            }
        }
    }
    // enviando la solicitud
    xhttp.send();
}


// creando la petcion de la API, mediante 3 peticiones para este caso
// en la funcion como es un callback, el primer parametro es el error y el segundo 
// parametro es la informacion, que en este caso es data 1 para el primer llamado
fetchData(API, function(error1, data1){
    // si da error, que retorne el error y se acabe la funcion
    if(error1) return console.error(error1);
    // si funciona pedimos otro valor
    fetchData(API + data1.results[0].id, function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3,data3){
            if(error3) return console.error(error3);
            // imprimiendo los resultados de la API
            // VErificar la API
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})






