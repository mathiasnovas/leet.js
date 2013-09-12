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
            't': '7'
        },

        /**
         * Convert a string to 1337 based on the character map.
         *
         * @param string string Regular ol' text to convert
         * @return string
         */
        convert: function(string) {
            string = string.replace(/cks/g, 'x');

            for (var letter in leet.characterMap) {
                string = string.replace(RegExp(letter, 'g'), leet.characterMap[letter]);
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
                special = /^[!?.,-]$/i;

            if (vowel.test(character)) {
                return 'vowel';
            } else if (special.test(character)) {
                return 'special';
            }

            return false;
        },

        /**
         * Converts the string to 1337 along with special rules.
         *
         * @param string string Regular ol' text to convert
         * @return string
         */
        output: function (string) {
            string = leet.convert(string);

            var last = string[string.length - 1],
                type = leet.test(last);

            if (type === 'special') {
                return string.substr(0, string.length - 1) + 'ZORZ' + last;
            } else if (type == 'vowel') {
                return string + 'XOR';
            } else {
                return string + 'ZORZ';
            }
        }
    };

    if (/(^|\/)leet\.js$/.test(process.argv[1])) {
        if (typeof process.argv[2] !== 'undefined') {
            console.log(leet.output(process.argv[2]));
        } else {
            console.error('Usage: leet.js <string>');
        }
    } else if (typeof exports !== 'undefined') {
        exports.convert = leet.output;
    } else {
        console.error('I don\'t know what to do');
    }

}) ();
