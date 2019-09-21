// This array keeps track of the list of emojis to actively display
var emojis = [];

// This object has the filenames as the key and keywords as the values
// Used for matching words from users with the 3 emojis listed
const emojibank = {
    "happy.png": ["good", "fine", "superior", "satisfactory", "adequate", "funny", "love", "lovely",
        "excellent", "superb", "magnificent", "exceptional", "marvelous", "wonderful",
        "splendid", "admirable", "super", "great", "terrific", "fantastic", "awesome", "happy",
        "amazing", "brilliant", "best", "cool", "epic", "exciting", "excited"],
    "sad.png": ["bad", "inferior", "unsatisfactory", "inadequate", "unhappy", "depressed",  "down", 
        "horrible", "worst", "terrible", "crappy", "shitty", "worse", "embarassing", "dark",
        "shame", "shameful", "unacceptable", "lossy", "hopeless", "worthless", "lousy", "sad"],
    "neutral.png": ["ok", "uncertain", "unsure", "doubtful", "indecisive", "undecided",
        "mixed", "conflicting", "confused", "vague", "unclear", "iffy", "neutral", "ambivalent"]
}

// This function parses through the users input and removes punctuation, makes it lowercase, and splits it into an array
const parseString = (x) => {
    var foo = x.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var foo1 = foo.toLowerCase();
    var foo2 = foo1.split(" ");
    return foo2;
}

// The only function exported by this file
// This function converts the users input into a corresponding array of image names
// It also calls the other functions to do some various tasks
// It is called by the script in the html whenever a keyboard event is detected
const convertString = (x) => {
    emojis.length = 0;
    let emoji;
    var words = parseString(x)
    for (let word of words) {
        emoji = searchEmoji(word);
        if (emoji != null) {
            emojis.push(emoji);
        }
    }
    if (emojis && emojis.length) {
        return emojis;
    }
    else {
        return null;
    }
}

// This function takes a word from the user's input and searches for it in the emojibank's values
// If it finds a match, it returns the key (emoji image name) for that corresponding match
const searchEmoji = (x) => {
    for (let bank of Object.values(emojibank)) {
        if (bank.includes(x)) {
            return getKeyByValue(emojibank, bank);
        }
    }
    return null;
}

// This functions returns the emojibank key for a corresponding lists of values
// It works with the searchEmoji function
const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

export { convertString };