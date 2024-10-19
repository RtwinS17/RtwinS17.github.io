export class SlicesServices {

     findByIDInArray(id = 0, arr = []) {
        const isNumber = typeof(+id) == 'number'
        const response = {} 
        if (isNumber) {
            arr.forEach(obj => obj.id === id ? response = obj : '')
        }

     }   
}