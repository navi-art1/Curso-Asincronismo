const somethinWillHappen = () => {
    return new Promise ((resolve,reject) => {
        if(true) {
            resolve ('Hey!');
        } else {
            reject(':,c');
        }
    });
};

somethinWillHappen()
// si se resuelve la promesa
// importante su identacion 
    .then(response => console.log(response))
// si no se resuelve la promesa
    .catch(err => console.error(err));


const somethinWillHappen2 = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() =>{
                resolve('True')
            },2000)
        }else{
            const error = new Error ('Error');
            reject(error);
        }
    });
}

somethinWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// como ejecutar varias promesas al mismo tiempo
// metodo, promise.all

Promise.all([somethinWillHappen(),somethinWillHappen2()])
    .then(response => {
            console.log('Array of result', response);
        })
    .catch(err => {
        console.error(err);
    })
