function randomInteger (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomInteger (0,10)
console.log(rndInt)
