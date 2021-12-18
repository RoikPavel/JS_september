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

async function myDay() {
    const wakeUpResult = await wakeUp(true);
    const exerciseResult = await exercise(wakeUpResult);
    const toWashResult = await toWash(exerciseResult);
    const breakfastResult = await breakfast(toWashResult);
    const getDressedResult = await getDressed(breakfastResult);
    const goToWorkResult = await goToWork(getDressedResult);
    const workedResult = await worked(goToWorkResult);
    const dinnerResult = await dinner(workedResult);



}
myDay()