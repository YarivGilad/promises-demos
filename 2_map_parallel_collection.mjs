//-----------------------------------------------------------------//
//     Parallel execution of async ops using Bluebird Promises       //
//-----------------------------------------------------------------//
import log from '@ajar/marker';
import Promise from 'bluebird';

const items = [0,1,2,3,4,5,6,7,8,9];

Promise.map(items, item => {
    
    log.info('start processing item:' ,item);

    //simulate some async process like a db CRUD or http call...
    return Promise.delay(Math.random() * 2000)
                  .then(()=> {
                      log.magenta('async Operation Finished. item:', item); 
                      return item * 2;
                  })
})
.then( resultArray => {
    log.green('All tasks are done now...',resultArray);
})
.catch(log.error);




