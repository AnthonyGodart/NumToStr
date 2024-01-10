/**
 * Convertit un nombre en lettres.
 * Fonction principale à utiliser comme macro dans Google Sheets.
 *
 * @param {number} number - Le nombre à convertir. Limité à 999 999 999 999,99
 * @returns {string} - La représentation en lettres du nombre.
 */

const UNITS = ['', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf'];
const TEENS = ['Dix', 'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-Sept', 'Dix-Huit', 'Dix-Neuf'];
const TENS = ['', '', 'Vingt', 'Trente', 'Quarante', 'Cinquante', 'Soixante', 'Soixante-', 'Quatre-', 'Quatre-Vingt'];
const DEVISESET = [ 'Euro', 'Euros', 'Cent', 'Cents']


/* -------------------- Main function -------------------- */ 
function convertNumToStr(number) {
    if (number === 0) {
        return 'Zéro Euro';
    }

    const preComma = convertPreCommaToStr(Math.floor(number)).split(' ').join('-');

    const postComma = convertPostCommaToStr(number % 1);

    let result = preComma;

    if (postComma) {
        result += ` ${DEVISESET[0]} et ${postComma}${postComma === 'Un' ? ' ' + DEVISESET[2] : ' ' + DEVISESET[3]}`;
    } else {
        result += ` ${DEVISESET[0]}`;
    }

    return result;
}

/* -------------------- Internal functions -------------------- */ 
function convertPreCommaToStr(preComma) {
    if (preComma < 10) {
        return convertUnits(preComma);
    } else if (preComma < 20) {
        return convertTeens(preComma);
    } else if (preComma < 100) {
        return convertTens(preComma);
    } else if (preComma < 1000) {
        return convertHundreds(preComma);
    } else if (preComma < 1000000){
        return convertThousands(preComma);
    } else if (preComma < 1000000000) {
        return convertMillions(preComma);
    } else if (preComma < 1000000000000){
        return convertBillions(preComma);
    } else {
        return 'Number not supported';
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
            return 'Soixante' + (unity !== 0 ? '-' + handleParticle(unity) + TEENS[unity] : '-Dix');
        case 8:
            return 'Quatre-Vingt' + (unity === 0 ? 's' : handle80sSpecificities(unity));
        case 9:
            return 'Quatre-Vingt' + (unity !== 0 ? '-' + TEENS[unity] : '-Dix');
        default:
            return (TENS[ten] + (unity !== 0 ? '-' + handleParticle(unity) + UNITS[unity] : '')) || UNITS[unity];
    }
}

function convertHundreds(value) {
    const hundred = Math.floor(value / 100);
    const remainder = value % 100;

    const isPluralCent = remainder === 0 || remainder >= 100;
    const centWord = isPluralCent ? 'Cents' : 'Cent';

    return (hundred > 1 ? UNITS[hundred] + '-' + centWord : centWord) + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
}

function convertThousands(value) {
    const thousand = Math.floor(value / 1000);
    let prefix;
    const remainder = value % 1000;
    switch (true) {
        case (thousand < 10) : 
            prefix = convertUnits(thousand);
            break;
        case (thousand < 20) : 
            prefix = convertTeens(thousand);
            break;
        case (thousand < 100) : 
            prefix = convertTens(thousand);
            break;
        case (thousand >= 100) :
            prefix = convertHundreds(thousand);
            break;
        default :
            return;
    }
    return ( prefix && prefix !== 'Un' ? (prefix + ' Mille') : 'Mille') + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
}

function convertMillions(value) {
    const million = Math.floor(value / 1000000);
    let prefix;
    const remainder = value % 1000000;
    switch (true) {
        case (million < 10) : 
            prefix = convertUnits(million);
            break;
        case (million < 20) : 
            prefix = convertTeens(million);
            break;
        case (million < 100) : 
            prefix = convertTens(million);
            break;
        case (million >= 100) :
            prefix = convertHundreds(million);
            break;
        default :
            return;
    }
    return (prefix && prefix !== 'Un' ? (prefix + ' Millions') : prefix + ' Million') + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
}

function convertBillions(value) {
    const billion = Math.floor(value / 1000000000);
    let prefix;
    const remainder = value % 1000000000;
    switch (true) {
        case (billion < 10) : 
            prefix = convertUnits(billion);
            break;
        case (billion < 20) : 
            prefix = convertTeens(billion);
            break;
        case (billion < 100) : 
            prefix = convertTens(billion);
            break;
        case (billion >= 100) :
            prefix = convertHundreds(billion);
            break;
        default :
            return;
    }
    return (prefix && prefix !== 'Un' ? (prefix + ' Milliards') : prefix + ' Milliard') + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
}

function convertPostCommaToStr(postComma) {
    const postCommaRounded = Math.round(postComma * 100);
    if (postCommaRounded === 0) {
        return '';
    } else {
        return convertPreCommaToStr(postCommaRounded);
    }
}

/*  -------------------- Specfic french language rules -------------------- */

// Handling 80-89 specificities
function handle80sSpecificities(test){
    if ( test === 10){
        return 'Dix';
    } else {
        return '-' + UNITS[test];
    }
}

// Handling adding or not 'Et-' particle
function handleParticle(test) {
    if (test === 1){
        return 'Et-';
    } else {
        return '';
    }
}

export default convertNumToStr;
