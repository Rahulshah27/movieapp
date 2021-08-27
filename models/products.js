const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },

    comment: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const productsSchema = new Schema({

    backdrop_path: {
        type: String,
        require: true
    },

    pc_type: {
        type: String,
        default: ""
    },

    end_type: {
        type: String,
        default: ""
    },

    title: {
        type: String,
        default: ""
    },

    subtitle: {
        type: String,
        default: ""
    },

    overview: {
        type: String,
        default: ""
    },

    price: {
        type: Currency,
        require: true,
        min: 0
    },

    processors: {
        type: String,
        default: ""
    },

    gpu: {
        type: String,
        default: ""
    },

    ram: {
        type: String,
        default: ""
    },

    storage: {
        type: String,
        default: ""
    },

    psu: {
        type: String,
        default: ""
    },

     featured: {
         type: Boolean,
         default: false
     },
    comments: [commentSchema]
    
}, {
    timestamps: true

});

var Product = mongoose.model('Product', productsSchema);

module.exports = Product;