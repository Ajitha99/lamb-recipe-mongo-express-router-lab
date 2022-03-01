const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Country = new Schema({
    contry_name: {type: String, required: true}
})


const Recipe = new Schema(
    {
        title: { type: String, required: true},
        country_of_origin: Country,
        ingredients: { type: String, required: true},
        image: { type: String, required: true}
    },
    {timestamps : true},
);

module.exports = mongoose.model('recipes', Recipe);


// const Recipe = new Schema(
//         {
//             title: { type: String, required: true},
//             country_of_origin: {type: Schema.Types.ObjectId , ref: 'country_id'},
//             ingredients: { type: String, required: true},
//             image: { type: String, required: true}
//         },
//         {timestamps : true},
//     );