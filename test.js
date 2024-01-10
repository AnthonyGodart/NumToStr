import convertNumToStr from "./NumToStrConverter.js";
import assert from 'assert';

const capitalizeFirst = false;
class TestCase {
    constructor (input, expected, capitalizeFirst){
        this.input = input;
        this.expected = expected;
        this.capitalizeFirst = capitalizeFirst;
    };

    runTest() {
        const output = convertNumToStr(this.input, this.capitalizeFirst);
        try {
            assert.strictEqual(output, this.expected);
            console.log('.');
        } catch (error) {
            console.error('F', this.input, error.message);
        }
    };
}

const testCasesList = [
    new TestCase(0, capitalizeFirst === true ? 'Zéro euro' : 'zéro euro'),
    new TestCase(31, capitalizeFirst === true ? 'Trente-et-un euro' : 'trente-et-un euro'),
    new TestCase(70, capitalizeFirst === true ? 'Soixante-dix euro' : 'soixante-dix euro'),
    new TestCase(71, capitalizeFirst === true ? 'Soixante-et-onze euro' : 'soixante-et-onze euro'),
    new TestCase(80, capitalizeFirst === true ? 'Quatre-vingts euro' : 'quatre-vingts euro'),
    new TestCase(81, capitalizeFirst === true ? 'Quatre-vingt-un euro' : 'quatre-vingt-un euro'),
    new TestCase(90, capitalizeFirst === true ? 'Quatre-vingt-dix euro' : 'quatre-vingt-dix euro'),
    new TestCase(91, capitalizeFirst === true ? 'Quatre-vingt-onze euro' : 'quatre-vingt-onze euro'),
    new TestCase(126.87, capitalizeFirst === true ? 'Cent-vingt-six euro et quatre-vingt-sept cents' : 'cent-vingt-six euro et quatre-vingt-sept cents'),
    new TestCase(200, capitalizeFirst === true ? 'Deux-cents euro' : 'deux-cents euro'),
    new TestCase(398.21, capitalizeFirst === true ? 'Trois-cent-quatre-vingt-dix-huit euro et vingt-et-un cents' : 'trois-cent-quatre-vingt-dix-huit euro et vingt-et-un cents'),
    new TestCase(13278, capitalizeFirst === true ? 'Treize-mille-deux-cent-soixante-dix-huit euro' : 'treize-mille-deux-cent-soixante-dix-huit euro'),
    new TestCase(543906, capitalizeFirst === true ? 'Cinq-cent-quarante-trois-mille-neuf-cent-six euro' : 'cinq-cent-quarante-trois-mille-neuf-cent-six euro'),
    new TestCase(1234567, capitalizeFirst === true ? 'Un-million-deux-cent-trente-quatre-mille-cinq-cent-soixante-sept euro' : 'un-million-deux-cent-trente-quatre-mille-cinq-cent-soixante-sept euro'),
    new TestCase(874261593, capitalizeFirst === true ? 'Huit-cent-soixante-quatorze-millions-deux-cent-soixante-et-un-mille-cinq-cent-quatre-vingt-treize euro' : 'huit-cent-soixante-quatorze-millions-deux-cent-soixante-et-un-mille-cinq-cent-quatre-vingt-treize euro'),
    new TestCase(2094857394, capitalizeFirst === true ? 'Deux-milliards-quatre-vingt-quatorze-millions-huit-cent-cinquante-sept-mille-trois-cent-quatre-vingt-quatorze euro' : 'deux-milliards-quatre-vingt-quatorze-millions-huit-cent-cinquante-sept-mille-trois-cent-quatre-vingt-quatorze euro'),
    new TestCase(436789156621, capitalizeFirst === true ? 'Quatre-cent-trente-six-milliards-sept-cent-quatre-vingt-neuf-millions-cent-cinquante-six-mille-six-cent-vingt-et-un euro' : 'quatre-cent-trente-six-milliards-sept-cent-quatre-vingt-neuf-millions-cent-cinquante-six-mille-six-cent-vingt-et-un euro')
];

testCasesList.forEach((testCase) => {
    testCase.runTest();
});
