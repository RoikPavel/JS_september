function wakeUp(done) {
    return new Promise((resolve, reject)=>{setTimeout(()=>{ if (done) {
        console.log('проснувся)))');
        resolve('true');
    }else reject('щось пішло не так!!!')},3000)
})}

function exercise(done) {
        return new Promise((resolve, reject)=>{setTimeout(()=>{ if (done) {
            console.log('зробив зарядку)))');
            resolve('true');
        }else reject('щось пішло не так!!!')}, 500)})
    }

function toWash(done) {
    return new Promise((resolve, reject)=>{ setTimeout(()=>{ if (done) {
        console.log('помився))))');
        resolve('true');
    }else reject('щось пішло не так!!!')},300)})
}

function breakfast(done) {
    return new Promise((resolve, reject)=>{ setTimeout(()=>{ if (done) {
        console.log('поснідав))))');
        resolve('true');
    }else reject('щось пішло не так!!!')},700)})
}

function getDressed(done) {
    return new Promise((resolve, reject)=>{  setTimeout(()=>{  if (done) {
        console.log('одягнувся))))');
        resolve('true');
    }else reject('щось пішло не так!!!')}, 600)})
}


function goToWork(done) {
    return new Promise((resolve, reject)=>{    setTimeout(()=>{ if (done) {
        console.log('прийшов на роботу))))');
        resolve('true');
    }else reject('щось пішло не так!!!')}, 200)})
}

function worked(done) {
    return new Promise((resolve, reject)=>{  setTimeout(()=>{ if (done) {
        console.log('попрацював))))');
        resolve('true');
    }else reject('щось пішло не так!!!')}, 800)})
}

function dinner(done) {
    return new Promise((resolve, reject)=>{  setTimeout(()=>{if (done) {
        console.log('пообідав))))');
        resolve('true');
    }else reject('щось пішло не так!!!')},2000)})}


wakeUp(true)
    .then(value =>{return exercise('value')})
    .then(value =>{return toWash('value')})
    .then(value =>{return breakfast('value')})
    .then(value =>{return getDressed('value')})
    .then(value =>{return goToWork('value')})
    .then(value =>{return worked('value')})
    .then(value =>{return dinner('value')})

