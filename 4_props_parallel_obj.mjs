//------------------------------------------------------------------------------------------
//     props() is the same as all() but accepts an Object rather than Array
//------------------------------------------------------------------------------------------
import log from '@ajar/marker';
import Promise from 'bluebird';

function createPromise(operation){
    return new Promise( (resolve,reject)=> {
         log.info(operation,' Started!!!');
         let random = Math.random() * 3000;
         Promise.delay(random)
               .then(()=> {
                     // if(operation === 'getGravatar'){
                     //    //  reject( new Error('gravatar is not accessible'))
                     //    throw new Error('gravatar is not accessible')
                     // }else{
                        log.magenta(`${operation} complete!`); 
                        resolve('result of the '+operation+' operation...');    
                     // }
               })
               // .catch( err =>{
               //    log.magenta('Internal ERROR')
               //    reject(err)
               // //  log.error(err);
               // });
      });
}

const pendingPromises = {
   getUser: createPromise('getUser'),
   getTweets: createPromise('getTweets'),
   getGravatar: createPromise('getGravatar'),
   getVideos: createPromise('getVideos'),
   getEvents: createPromise('getEvents'),
};

Promise.props(pendingPromises)
    .then( result => {
         log.info('All operations are complete!');
         log.obj(result,'result: ');
    })
    .catch( err => { 
        log.magenta('MAIN Catch')
        log.error(err);
    });
