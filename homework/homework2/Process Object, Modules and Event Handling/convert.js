const mm = 0.03937;
const cm = 0.3937;
const m = 39.37;

module.exports = {

    inch2millimeter: function (x) {
        return (x / mm).toFixed(3);
    },

    inch2centimeter: function (x) {
        return (x / cm).toFixed(3);
    },

    inch2meter: function (x) {
        return (x / m).toFixed(3);
    }
};