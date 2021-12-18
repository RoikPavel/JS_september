let wakeUp = function(done, callback {
    setTimeout(()=>{ if (done) {
        console.log('проснувся))');
        callback();
    }else console.error('щось пішло не так!!!')},2000)
};

let exercise = function (done, callback) {
    setTimeout(()=>{ if (done) {
        console.log('зробив зарядку))))');
        callback();
    }else console.error('щось пішло не так!!!')}, 500)
};

let toWash = function (done, callback) {
    setTimeout(()=>{ if (done) {
        console.log('помився))))');
        callback();
    }else console.error('щось пішло не так!!!')},300)
};

let breakfast = function (done, callback) {
    setTimeout(()=>{ if (done) {
        console.log('поснідав))))');
        callback();
    }else console.error('щось пішло не так!!!')},700)
};

let getDressed = function (done, callback) {
setTimeout(()=>{  if (done) {
    console.log('одягнувся))))');
    callback()
}else console.error('щось пішло не так!!!')}, 600)
};


let goToWork = function (done, callback) {
    setTimeout(()=>{ if (done) {
        console.log('прийшов на роботу))))');
        callback();
    }else console.error('щось пішло не так!!!')}, 200)
};

let worked = function (done, callback) {
    setTimeout(()=>{ if (done) {
        console.log('попрацював))))');
        callback();
    }else console.error('щось пішло не так!!!')}, 800)
};

let dinner = function (done, callback) {
    setTimeout(()=>{if (done) {
        console.log('пообідав))))');
    }else console.error('щось пішло не так!!!')},2000)
};


wakeUp(true, ()=>{
    exercise(true,()=>{
        toWash(true, ()=>{
            breakfast(true, ()=>{
                getDressed(true, ()=>{
                    goToWork(true, ()=>{
                        worked(true, ()=>{
                            dinner(true, ()=>{console.log('GO WORK')})
                        })})})})})})});

