let promiseToCleanTheRoom = new Promise( (resolve, reject) => {
    const isClean = false;

    if(isClean) {
        resolve('Clean');
    } else {
        reject('not Clean');
    }
});

promiseToCleanTheRoom.then(fromResolve => {
    console.log('the room is ' + fromResolve);
}).catch( fromReject => {
    console.log('The room is ' + fromReject)
});
