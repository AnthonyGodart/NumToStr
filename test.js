import convertNumToStr from "./NumToStrConverter.js";
import assert from 'assert';

class TestCase {
    constructor (input, expected){
        this.input = input;
        this.expected = expected;
    };

    runTest() {
        const output = convertNumToStr(this.input);
        try {
            assert.strictEqual(output, this.expected);
            console.log('.');
        } catch (error) {
            console.error('F', this.input, error.message);
        }
    };
}

const testCasesList = [
    new TestCase(0, 'Zéro Euro'),
    new TestCase(31, 'Trente-Et-Un Euro'),
    new TestCase(70, 'Soixante-Dix Euro'),
    new TestCase(71, 'Soixante-Et-Onze Euro'),
    new TestCase(80, 'Quatre-Vingts Euro'),
    new TestCase(81, 'Quatre-Vingt-Un Euro'),
    new TestCase(90, 'Quatre-Vingt-Dix Euro'),
    new TestCase(91, 'Quatre-Vingt-Onze Euro'),
    new TestCase(126.87, 'Cent-Vingt-Six Euro et Quatre-Vingt-Sept Cents'),
    new TestCase(200, 'Deux-Cents Euro'),
    new TestCase(398.21, 'Trois-Cent-Quatre-Vingt-Dix-Huit Euro et Vingt-Et-Un Cents'),
    new TestCase(13278, 'Treize-Mille-Deux-Cent-Soixante-Dix-Huit Euro'),
    new TestCase(543906, 'Cinq-Cent-Quarante-Trois-Mille-Neuf-Cent-Six Euro'),
    new TestCase(1234567, 'Un-Million-Deux-Cent-Trente-Quatre-Mille-Cinq-Cent-Soixante-Sept Euro'),
    new TestCase(874261593, 'Huit-Cent-Soixante-Quatorze-Millions-Deux-Cent-Soixante-Et-Un-Mille-Cinq-Cent-Quatre-Vingt-Treize Euro'),
    new TestCase(2094857394, 'Deux-Milliards-Quatre-Vingt-Quatorze-Millions-Huit-Cent-Cinquante-Sept-Mille-Trois-Cent-Quatre-Vingt-Quatorze Euro'),
    new TestCase(436789156621, 'Quatre-Cent-Trente-Six-Milliards-Sept-Cent-Quatre-Vingt-Neuf-Millions-Cent-Cinquante-Six-Mille-Six-Cent-Vingt-Et-Un Euro')
];

testCasesList.forEach((testCase) => {
    testCase.runTest();
});
