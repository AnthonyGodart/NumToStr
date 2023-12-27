/**
 * Convertit un nombre en lettres.
 * Fonction principale à utiliser comme macro dans Google Sheets.
 *
 * @param {number} number - Le nombre à convertir.
 * @returns {string} - La représentation en lettres du nombre.
 */

const UNITS = ['', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf'];
const TEENS = ['Dix', 'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-Sept', 'Dix-Huit', 'Dix-Neuf'];
const TENS = ['', '', 'Vingt', 'Trente', 'Quarante', 'Cinquante', 'Soixante', 'Soixante-', 'Quatre-', 'Quatre-Vingt'];


/* Main function */ 
function convertNumToStr(number) {
    if (number === 0) {
        return 'Zero';
    }

    const preComma = convertPreCommaToStr(Math.floor(number));

    const postComma = convertPostCommaToStr(number % 1);

    let result = preComma;

    if (postComma) {
        result += ' Euro et ' + postComma + (postComma === 'Un' ? ' Cent' : ' Cents');
    } else {
        result += ' Euro';
    }

    return result;
}

/* Internal functions */ 
function convertPreCommaToStr(preComma) {
    if (preComma < 10) {
        return convertUnits(preComma);
    } else if (preComma < 20) {
        return convertTeens(preComma);
    } else if (preComma < 100) {
        return convertTens(preComma);
    } else if (preComma < 1000) {
        return convertHundreds(preComma);
    } else {
        return convertLargeNumbers(preComma);
    }
}

function convertUnits(value) {
    return UNITS[value];
}

function convertTeens(value) {
    return TEENS[value - 10];
}

function convertTens(value) {
    const ten = Math.floor(value / 10);
    const unity = value % 10;

    switch (ten) {
        case 7:
            return 'Soixante' + (unity !== 0 ? '-' + TEENS[unity] : '-Dix');
        case 8:
            return 'Quatre-Vingt' + (unity === 0 ? '' : (unity === 10 ? 'Dix' : '-' + UNITS[unity]));
        case 9:
            return 'Quatre-Vingt' + (unity !== 0 ? '-' + TEENS[unity] : '-Dix');
        default:
            return (TENS[ten] + (unity !== 0 ? '-' + UNITS[unity] : '')) || UNITS[unity];
    }
}

function convertHundreds(value) {
    const hundred = Math.floor(value / 100);
    const remainder = value % 100;
    return (hundred > 1 ? UNITS[hundred] + ' Cent' : 'Cent') + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
}

function convertLargeNumbers(value) {
    const suffixes = ['', 'Mille', 'Million', 'Milliard'];
    for (let i = 3; i <= 12; i += 3) {
        const divisor = Math.pow(10, i);
        if (value < divisor) {
            const quotient = Math.floor(value / (divisor / 1000));
            const remainder = value % (divisor / 1000);
            const suffix = quotient > 1 ? suffixes[i / 3] + 's' : suffixes[i / 3];
            return convertPreCommaToStr(quotient) + ' ' + suffix + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
        }
    }
    return 'Number not supported';
}

function convertPostCommaToStr(postComma) {
    const postCommaRounded = Math.round(postComma * 100);
    if (postCommaRounded === 0) {
        return '';
    } else {
        return convertPreCommaToStr(postCommaRounded);
    }
}

/* EXEMPLES D'UTILISATION */
/* Un-comment wished line */
//const numbers = [12370, 12371, 12372, 12373, 12374, 12375, 12376, 12377, 12378, 12379];
//const numbers = [12380, 12381, 12382, 12383, 12384, 12385, 12386, 12387, 12388, 12389];
const numbers = [12390, 12391, 12392, 12393, 12394, 12395, 12396, 12397, 12398, 12399];
//const numbers = [70000, 71000, 78000, 80000, 81000, 88000, 90000, 91000, 98000];
//const numbers = [34.01, 34.02]
numbers.forEach(number => {
  const answer= convertNumToStr(number);
  console.log(number)
  console.log(answer)
})