const mmConvert = 0.03937;
const cmConvert = 0.3937;
const mConvert = 39.37;

module.exports = {
    inchToMM: function(x) {
        return (x/mmConvert).toFixed(3);
    },

    inchToCM: function(x) {
        return (x/cmConvert).toFixed(3);
    },

    inchToM: function(x) {
        return (x/mConvert).toFixed(3);
    }
};