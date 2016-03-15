#!/usr/bin/env node

(function () {

    "use strict";

    /**
     * Convert regular and boring text into 1337 text.
     *
     * @author Mathias Novas <novasism@gmail.com>, Michael Enger <mike@thelonelycoder.com>
     * @license IDGAF
     */
    var leet = {

        /**
         * Map of conversions.
         *
         * @var object
         */
        characterMap: {
            'a': '4',
            'b': '8',
            'e': '3',
            'g': '6',
            'l': '1',
            'o': '0',
            's': '5',
            't': '7',
            'æ': '43',
            'ø': '03',
            'å': '44'
        },

        /**
         * Convert a string to 1337 based on the character map.
         *
         * @param string string Regular ol' text to convert
         * @return string
         */
        convert: function (string) {
            var letter;
            string = string || '';
            string = string.replace(/cks/g, 'x');

            for (letter in leet.characterMap) {
                if (leet.characterMap.hasOwnProperty(letter)) {
                    string = string.replace(new RegExp(letter, 'g'), leet.characterMap[letter]);
                }
            }

            return string.toUpperCase();
        },

        /**
         * Test character to see if it's a vovel or special (or neither).
         *
         * @param string character Character to test
         * @return mixed
         */
        test: function (character) {
            var vowel = /^[4I30U]$/i,
                special = /^[!?.,\-]$/i,
                type = false;

            if (vowel.test(character)) {
                type = 'vowel';
            } else if (special.test(character)) {
                type = 'special';
            }

            return type;
        },

        /**
         * Converts the string to 1337 along with special rules.
         *
         * @param string string Regular ol' text to convert
         * @return string
         */
        output: function (string) {
            string = leet.convert(string);
            if ('' === string) {
                return string;
            }

            var last = string[string.length - 1],
                type = leet.test(last),
                result;

            if (type === 'special') {
                result = string.substr(0, string.length - 1) + 'ZORZ' + last;
            } else if (type === 'vowel') {
                result = string + 'XOR';
            } else {
                result = string + 'ZORZ';
            }

            return result;
        }
    };

    if (/(^|\/)leet(\.js)?$/.test(process.argv[1])) {
        if (undefined !== process.argv[2]) {
            console.log(leet.output(process.argv[2]));
        } else {
            console.error('Usage: leet.js <string>');
        }
    } else if (undefined !== exports) {
        exports.convert = leet.output;
    } else {
        console.error('I don\'t know what to do');
    }

}());
