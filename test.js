import NUMTOSTR from "./NumToStrConverter.js";
import assert from 'assert';

/* WARNING ! Make sure you set CAPITALIZEFIRST value to the same it has in NumToStrConverter.js file ! */
/* If values are different, tests will fail ! */
const CAPITALIZEFIRST = true;
class TestCase {
    constructor (input, expected, CAPITALIZEFIRST){
        this.input = input;
        this.expected = expected;
        this.CAPITALIZEFIRST = CAPITALIZEFIRST;
    };

    runTest() {
        const output = NUMTOSTR(this.input, this.CAPITALIZEFIRST);
        try {
            assert.strictEqual(output, this.expected);
            console.log('.');
        } catch (error) {
            console.error('F', this.input, error.message);
        }
    };
}

const testCasesList = [
    new TestCase(0, CAPITALIZEFIRST === true ? 'Zéro euro' : 'zéro euro'),
    new TestCase(31, CAPITALIZEFIRST === true ? 'Trente-et-un euro' : 'trente-et-un euro'),
    new TestCase(70, CAPITALIZEFIRST === true ? 'Soixante-dix euro' : 'soixante-dix euro'),
    new TestCase(71, CAPITALIZEFIRST === true ? 'Soixante-et-onze euro' : 'soixante-et-onze euro'),
    new TestCase(80, CAPITALIZEFIRST === true ? 'Quatre-vingts euro' : 'quatre-vingts euro'),
    new TestCase(81, CAPITALIZEFIRST === true ? 'Quatre-vingt-un euro' : 'quatre-vingt-un euro'),
    new TestCase(90, CAPITALIZEFIRST === true ? 'Quatre-vingt-dix euro' : 'quatre-vingt-dix euro'),
    new TestCase(91, CAPITALIZEFIRST === true ? 'Quatre-vingt-onze euro' : 'quatre-vingt-onze euro'),
    new TestCase(126.87, CAPITALIZEFIRST === true ? 'Cent-vingt-six euro et quatre-vingt-sept cents' : 'cent-vingt-six euro et quatre-vingt-sept cents'),
    new TestCase(200, CAPITALIZEFIRST === true ? 'Deux-cents euro' : 'deux-cents euro'),
    new TestCase(398.21, CAPITALIZEFIRST === true ? 'Trois-cent-quatre-vingt-dix-huit euro et vingt-et-un cents' : 'trois-cent-quatre-vingt-dix-huit euro et vingt-et-un cents'),
    new TestCase(13278, CAPITALIZEFIRST === true ? 'Treize-mille-deux-cent-soixante-dix-huit euro' : 'treize-mille-deux-cent-soixante-dix-huit euro'),
    new TestCase(543906, CAPITALIZEFIRST === true ? 'Cinq-cent-quarante-trois-mille-neuf-cent-six euro' : 'cinq-cent-quarante-trois-mille-neuf-cent-six euro'),
    new TestCase(1234567, CAPITALIZEFIRST === true ? 'Un-million-deux-cent-trente-quatre-mille-cinq-cent-soixante-sept euro' : 'un-million-deux-cent-trente-quatre-mille-cinq-cent-soixante-sept euro'),
    new TestCase(874261593, CAPITALIZEFIRST === true ? 'Huit-cent-soixante-quatorze-millions-deux-cent-soixante-et-un-mille-cinq-cent-quatre-vingt-treize euro' : 'huit-cent-soixante-quatorze-millions-deux-cent-soixante-et-un-mille-cinq-cent-quatre-vingt-treize euro'),
    new TestCase(2094857394, CAPITALIZEFIRST === true ? 'Deux-milliards-quatre-vingt-quatorze-millions-huit-cent-cinquante-sept-mille-trois-cent-quatre-vingt-quatorze euro' : 'deux-milliards-quatre-vingt-quatorze-millions-huit-cent-cinquante-sept-mille-trois-cent-quatre-vingt-quatorze euro'),
    new TestCase(436789156621, CAPITALIZEFIRST === true ? 'Quatre-cent-trente-six-milliards-sept-cent-quatre-vingt-neuf-millions-cent-cinquante-six-mille-six-cent-vingt-et-un euro' : 'quatre-cent-trente-six-milliards-sept-cent-quatre-vingt-neuf-millions-cent-cinquante-six-mille-six-cent-vingt-et-un euro')
];

testCasesList.forEach((testCase) => {
    testCase.runTest();
});
