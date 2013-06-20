(function () {

    var app = {

        /**
         * Initialize the app
         */
        init: function () {
            var s = process.argv[2];

            if (s) {
                var w = app.render(s);
            } else {
                app.error();
            }

            if (w) {
                app.output(w);
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
                'b': 'B',
                'c': 'C',
                'd': 'D',
                'e': '3',
                'f': 'F',
                'g': '9',
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
            var b = s.split(''),
                a = [];

            for(var i = 0; i < s.length; i++) {
                var c = b[i];

                if (app.get(c)) {
                    a.push(app.get(c));
                }
            }

            return a;
        },

        /**
         * Test if character is a vowel
         */
        test: function (c) {
            var v = ['4', 'I', '3', '0', 'U'],
                b = false;

            if (v.indexOf(c) >= 0) {
                b = true;
            }

            return b;
        },

        /**
         * Outputs the result
         */
        output: function (s) {
            var l = s[s.length - 1],
                v = app.test(l);

            if (v) {
                console.log(s.join('') + 'ZORZ');
            } else {
                console.log(s.join('') + 'ORZ');
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
