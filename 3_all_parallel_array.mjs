//------------------------------------------------------------------------------------------
//     all() executes a function after all operations were completed (in parallel)
//------------------------------------------------------------------------------------------
import log from '@ajar/marker';
import Promise from 'bluebird';

function createPromise(operation){
    return new Promise( (resolve,reject) => {
        log.info(operation,'Started!!!');
        let random = Math.random() * 3000;
        Promise.delay(random)
                .then(()=> {
                    log.magenta(operation,' complete!');
                    resolve('result: '+operation);
                });
    });
}

const pendingPromises = [
    createPromise('getUser'),
    createPromise('getTweets'),
    createPromise('getGravatar'),
    createPromise('getVideos'),
    createPromise('getEvents'),
];

Promise.all(pendingPromises)
    .then( resolved_values_array => {
        console.table(resolved_values_array)
    })
    .catch( err => {
        log.error(err);
    });
