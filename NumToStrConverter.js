const UNITS = ['', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf'];
const TEENS = ['Dix', 'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-Sept', 'Dix-Huit', 'Dix-Neuf'];
const TENS = ['', '', 'Vingt', 'Trente', 'Quarante', 'Cinquante', 'Soixante', 'Soixante-', 'Quatre-', 'Quatre-Vingt'];

function convertNumToStr(number) {
    if (number === 0) {
        return 'Zero';
    }

    const preComma = convertPreCommaToStr(Math.floor(number));

    const postComma = convertPostCommaToStr(number % 1);

    let result = preComma;

    if (postComma) {
        result += ' Euro et ' + postComma + (postComma === 'Un' ? ' Cent' : ' Cents');
    }

    return result;
}

function convertPreCommaToStr(preComma) {
    if (preComma < 10) {
        return UNITS[preComma];
    } else if (preComma < 20) {
        return TEENS[preComma - 10];
    } else if (preComma < 100) {
      const ten = Math.floor(preComma / 10);
      const unity = preComma % 10;

      if (ten === 7) {
        // Pour 70 à 79, utilisez 'Soixante-Dix'
        return 'Soixante' + (unity !== 0 ? '-' + TEENS[unity] : '-Dix');
      } else if (ten === 8) {
        // Pour 80 à 89, utilisez 'Quatre-Vingt'
        return 'Quatre-Vingt' + (unity === 0 ? '' : (unity === 10 ? 'Dix' : '-' + UNITS[unity]));
      } else if (ten === 9) {
        // Pour 90 à 99, utilisez 'Quatre-Vingt-Dix'
        return 'Quatre-Vingt' + (unity !== 0 ? '-' + TEENS[unity] : '-Dix');
      } else {
        // Pour les autres dizaines
        return (TENS[ten] + (unity !== 0 ? '-' + UNITS[unity] : '')) || UNITS[unity];
      }
    }
    else if (preComma < 1000) {
        const hundred = Math.floor(preComma / 100);
        const remainder = preComma % 100;
        return (hundred > 1 ? UNITS[hundred] : '') + ' Cent' + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
    } else if (preComma < 1000000) {
        const thousand = Math.floor(preComma / 1000);
        const remainder = preComma % 1000;
        return (thousand > 1 ? convertPreCommaToStr(thousand) : '') + ' Mille' + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
    } else if (preComma < 1000000000) {
        const million = Math.floor(preComma / 1000000);
        const remainder = preComma % 1000000;
        return convertPreCommaToStr(million) + (remainder > 1 ? ' Millions' : ' Million' ) + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
    } else if (preComma < 1000000000000) {
        const billion = Math.floor(preComma / 1000000000);
        const remainder = preComma % 1000000000;
        return convertPreCommaToStr(billion) + (remainder > 1 ? ' Milliards' : ' Milliard' ) + (remainder !== 0 ? ' ' + convertPreCommaToStr(remainder) : '');
    } else {
        return 'Number not supported';
    }
}

function convertPostCommaToStr(postComma) {
    const postCommaRounded = Math.round(postComma * 100);
    if (postCommaRounded === 0) {
        return '';
    } else {
        return convertPreCommaToStr(postCommaRounded);
    }
}

/* Tests */
//const numbers = [12370, 12371, 12372, 12373, 12374, 12375, 12376, 12377, 12378, 12379];
//const numbers = [12380, 12381, 12382, 12383, 12384, 12385, 12386, 12387, 12388, 12389];
//const numbers = [12390, 12391, 12392, 12393, 12394, 12395, 12396, 12397, 12398, 12399];
//const numbers = [70000, 71000, 78000, 80000, 81000, 88000, 90000, 91000, 98000];
const numbers = [34.01, 34.02]
numbers.map(number => {
  const answer= convertNumToStr(number);
  console.log(number)
  console.log(answer)
})