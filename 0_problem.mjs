//----------------------------------------------------------------------------------------------------------//
//  The problem - 
//  we want a serial execution of async ops 
//  with some code executing once all ops are done.   
//----------------------------------------------------------------------------------------------------------//
import log from '@ajar/marker';

const items = [0,1,2,3,4,5,6,7,8,9];

items.forEach( item => {
    onIteration(item);
});

whenAllDone();

function onIteration(item){
    log.info('Async start, iteration:',item);

    //simulate some async process like a db CRUD or http call...
    const randomExecutionTime = Math.random() * 2000;
    setTimeout(onAsyncComplete,randomExecutionTime,item);

}
function onAsyncComplete(i){
    log.magenta('onAsyncComplete iteration:',i);
}
function whenAllDone(){
    log.yellow('suppose to run after all Async operations are completed... cleanup code...');
}
