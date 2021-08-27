const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productCategoriesSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    
    image: {
        type: Buffer,
        contentType: String,
        required: true,
    },

    featured: {
        type: Boolean,
        default: 'false'
    }
}, {
    timestamps: true
});

var Product = mongoose.model('ProductCategory', productCategoriesSchema);

module.exports = Product;