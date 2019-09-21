const mmConvert = 0.03937;
const cmConvert = 0.3937;
const meterConvert = 39.37;

module.exports = {

    inch2millimeter: function (x) {
        return (x/mmConvert).toFixed(3);
    },

    inch2centimeter: function (x) {
        return (x/cmConvert).toFixed(3);
    },

    inch2meter: function (x) {
        return (x/meterConvert).toFixed(3);
    }
};
