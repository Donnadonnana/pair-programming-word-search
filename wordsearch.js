const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = [];
    for (let i = 0; i < letters[0].length; i++){
        for (arr of letters) {
            if (verticalJoin[i] === undefined) {
                verticalJoin[i] = ''
            }
            const letter = arr[i];
            verticalJoin[i] = verticalJoin[i].concat(letter);
        }
    }
    

    console.log(verticalJoin);

    

    if (horizontalJoin.includes(word) || verticalJoin.includes(word)) {
        return true
    } else {
        return false;
    }
}
 

    


const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK')
    
    module.exports = wordSearch