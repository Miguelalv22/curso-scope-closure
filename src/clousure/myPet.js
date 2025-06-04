function createPetList() {
    const petArray = []
    return function (petName) {
        if (petName) {
            petArray.push(petName)
            return petArray;
        } else {
            console.log(petArray)
        }
        return petArray;
    }
}

const myPetList = createPetList()

myPetList('Kami')
myPetList()
myPetList('Curry')
myPetList('Canela')
myPetList()
