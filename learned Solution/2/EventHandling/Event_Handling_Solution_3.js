collection = {};
collection['happy'] = ['Joyful', 'Cheerful', 'Content', 'Proud', 'Satisfied', 'Excited', 'Amused', 'Elated', 'Delighted', 'Optimistic'];
collection['sad'] = ['Overwhelmed', 'Depressed', 'Sorrow', 'Pity', 'Bitter', 'Resentful', 'Rejected', 'Uncomfortable', 'Dreading', 'Sad'];
collection['Ambivalent'] = ['Uncertain', 'Hesitant', 'Ambivalent', 'Conflicted', 'Equivocal', 'Doubtful', 'Faltering', 'Irresolute', 'Questioning', 'Undecided']

emoji={'sad':'😭', 'happy':'😀','Ambivalent':'😐' }

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('showEmoji(input close to quit)> ');
rl.prompt();

rl.on('line', function (line) {
   // removes whitespace from both ends of a string.
   line = line.trim();
   // console.log(line)
   for (x in emoji){
      
      if (collection[x].indexOf(line)!=-1) {
         console.log(emoji[x])
         rl.prompt();
         return
      }
   }
   if(line == 'close'){
      rl.close();
   }else{
      console.log('Not related emoji. Try again!')
      rl.prompt();
   }
   
});

rl.on('close', function () {
   console.log('bye bye!');
   process.exit(0);
});
