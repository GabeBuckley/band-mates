// REF_DATA

const GENRES = require('./ref_data/genres');

// USR_DATA
const USERS = require('./usr_data/users');
const BANDS = require('./usr_data/bands');



module.exports = {
    refData: {
        genres: GENRES
    },
    usrData: {
        users: USERS,
        bands: BANDS
    }
};