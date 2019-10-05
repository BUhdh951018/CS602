let Database = require('../database.js');
let mongoose = require('mongoose');

let DATA = require('../data/data.js');

// Saving documents to database
const testCreate = () => {
    console.log('\nWe first write all the documents instantiated above.\n');

    // Books
    DATA.BrothersKaramazov.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created book BrothersKaramazov.');
        }
    });
    DATA.HitchhikersGuide.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created book HitchhikersGuide.');
        }
    });
    DATA.Alchemist.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created book Alchemist.');
        }
    });
    DATA.YearOne.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created book YearOne.');
        }
    });
    DATA.Reign.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created book Reign.');
        }
    });
    
    // Classes
    DATA.Philosophy.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created class Philosophy.');
        }
    });
    DATA.ComicBooks101.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created class ComicBooks101.');
        }
    });
    
    // Students
    DATA.ComicGeek.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created student ComicGeek.');
        }
    });
    DATA.WisdomLover.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created student WisdomLover.');
        }
    });
    DATA.AverageJoe.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created student AverageJoe.');
        }
    });
    DATA.Grandpa.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created student Grandpa.');
        }
    });
};

testCreate();