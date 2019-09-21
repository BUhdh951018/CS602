'use strict';
const emoji = require('node-emoji');
const readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Enter Command: ');
rl.prompt();

var show;

rl.on('line', function(line) {
    switch(line.trim()) {
        case 'happy':
            show = emoji.get('happy');
            console.log(show);
            break;
        
        case 'sad':
            show = emoji.get('sad');
            console.log(show);
            break;

        case 'ambivalent':
            show = emoji.get('ambivalent');
            console.log(show);
            break;

        case 'smile':
            show = emoji.get('smile');
            console.log(show);
            break;

        case 'confused':
            show = emoji.get('confused');
            console.log(show);
            break;

        case 'angry':
            show = emoji.get('angry');
            console.log(show);
            break;

        case 'cry':
            show = emoji.get('cry');
            console.log(show);
            break;

        case 'mask':
            show = emoji.get('mask');
            console.log(show);
            break;

        case 'yum':
            show = emoji.get('yum');
            console.log(show);
            break;

        case 'joy':
            show = emoji.get('joy');
            console.log(show);
            break;

        case 'close':
            rl.close();
            console.log("Bye Bye!");
    }
    rl.prompt();
});

rl.on('close', function() {
    console.log('bye bye!');
    process.exit(0);
});