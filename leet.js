#!/usr/bin/env node

(function () {

    "use strict";

    var app = {

        /**
         * Initialize the app
         */
        init: function () {
            var s = process.argv[2];

            if (s) {
                var w = app.render(s);

                if (w) {
                    console.log(app.output(w));
                } else {
                    app.error();
                }
            } else {
                app.error();
            }
        },

        /**
         * Returns a 1337 character
         */
        get: function (c) {
            var a = {
                'a': '4',
                'b': '8',
                'c': 'C',
                'd': 'D',
                'e': '3',
                'f': 'F',
                'g': '6',
                'h': 'H',
                'i': 'I',
                'j': 'J',
                'k': 'K',
                'l': '1',
                'm': 'M',
                'n': 'N',
                'o': '0',
                'p': 'P',
                'q': 'Q',
                'r': 'R',
                's': '5',
                't': '7',
                'u': 'U',
                'v': 'V',
                'w': 'W',
                'x': 'X',
                'y': 'Y',
                'z': 'Z',
                ' ': ' '
            }

            return a[c];
        },

        /**
         * "Renders" the input
         */
        render: function (s) {
            var x = /cks/g;

            if (x.test(s)) {
                s = s.replace(x, 'x');
            }

            var b = s.split(''),
                a = [];

            for(var i = 0; i < s.length; i++) {
                var c = b[i];

                if (app.get(c)) {
                    a.push(app.get(c));
                } else {
                    a.push(c);
                }
            }

            return a;
        },

        /**
         * Test character
         */
        test: function (c) {
            var v = /^[4I30U]$/i,
                s = /^[!?.,-]$/i,
                b = false;

            if (v.test(c)) {
                b = 'vowel';
            } else if (s.test(c)) {
                b = 'special';
            }

            return b;
        },

        /**
         * Outputs the result
         */
        output: function (s) {
            var l = s[s.length - 1],
                t = app.test(l),
                f = s.join('');

            if (t) {
                if (t == 'special') {
                    return f.substr(0, f.length - 1) + 'ZORZ' + l;
                } else if (t == 'vowel') {
                    return f + 'XOR';
                }
            } else {
                return f + 'ZORZ';
            }
        },

        /**
         * Outputs an error and returns false
         */
        error: function () {
            console.log('Looks like something went wrong!');
            return false;
        }
    }

    app.init();

}) ();
