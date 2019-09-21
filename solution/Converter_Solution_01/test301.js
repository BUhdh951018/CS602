var Converter=require('./convert')
process.stdin.on('end', function() {
    process.stdout.write('end');
});

function gets(input){

    process.stdin.setEncoding('utf8');

    process.stdin.resume();

    process.stdin.on('data', function(word) {
        var x=word.replace("\n","");
        //process.stdin.pause();
        conv=new Converter();
        console.log(x+" inch =");
        input(conv.centi(word)+"  centimeters");
        input(conv.meter(word)+"  meters");
        input(conv.milli(word)+"  millimeters");
        console.log('\nPlease enter a number.');

    });
    console.log('Please enter a number.');

}

gets(function(reuslt){
    console.log(reuslt);

    //process.stdin.emit('end'); 
});