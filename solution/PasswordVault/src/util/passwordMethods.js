const duplicateKey = 'The key is already in use. Please use a unique key.';
const updatedPassword = 'Password Updated';
const deletedPassword = 'Password Deleted';

const verifyUnique = (key, data)  => {
    for (let pair of data) {
        if (key == pair.key) {
            return false;
        };
    };
    return true;
};

const addPassword = (key, password, data) => {
    data.push({
        'key': key,
        'password': password
    });
    return data;
};

const getPassword = (key, data) => {
    for (let pair of data) {
        if (key == pair.key) {
            return pair.password;
        };
    };
};

const passwordSwap = (key, password, data) => {
    for (let pair of data) {
        if (key == pair.key) {
            pair.password = password;
            return data;
        };
    };
};

const passwordDelete = (key, data) => {
    for (let pair of data) {
        if (key == pair.key) {
            return data.filter(pairs => pairs.key != key);
        };
    };
};

module.exports = {
    duplicateKey,
    updatedPassword,
    deletedPassword,
    verifyUnique,
    addPassword,
    getPassword,
    passwordSwap,
    passwordDelete
};