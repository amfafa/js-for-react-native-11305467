


function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {

            return num * num;
        } else {
           
            return num * 3;
        }
    });
}

function formatArrayStrings(stringsArr, numbersArr) {
    return stringsArr.map((str, index) => {
        if (numbersArr[index] % 2 === 0) {

            return str.toUpperCase();
        } else {
            
            return str.toLowerCase();
        }
    });
}

module.exports = {
    processArray,
    formatArrayStrings
};
