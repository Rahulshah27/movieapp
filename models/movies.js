const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    
    title: {
        type: String,
        required: true,
        unique: true,
    },

    director: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

var Movies = mongoose.model('Movie', movieSchema);
module.exports = Movies;