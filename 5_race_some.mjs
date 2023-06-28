import log from '@ajar/marker';
import Promise from 'bluebird';

function createPromise(operation){
    return new Promise( (resolve,reject)=> {
        log.cyan(operation,'started')
        var randomExecutionTime = Math.random() * 3000;
        Promise.delay(randomExecutionTime)
                .then(()=> {
                    log.magenta(operation, 'complete!');
                    resolve(`resolved ${operation}`);
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

//----------------------------------------------------------------------//
//      race() executes after the first operation is completed          //
//----------------------------------------------------------------------//
Promise.race(pendingPromises)
      .then( item => {
         log.green('The first operation is complete!', `first item to complete: ${item}`);
      })
      .catch(log.error);

//----------------------------------------------------------------------------------------//
//       some() is like race() for x number of items from the collection.                 //
//       it executes a function after the first x number of operations were completed     //
//----------------------------------------------------------------------------------------//
// Promise.some(pendingPromises, 3)
//     .spread( (first, second , third) => {
//         log.info('first: ' , first);
//         log.info('second: ' , second);
//         log.info('third: ' , third);
//     })
//     .catch(log.error);
