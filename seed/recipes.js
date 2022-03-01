const db = require('../db');
const Recipe = require('../models/recipe')
const PORT = process.env.PORT || 3000;
db.on('error',console.error.bind(console, 'MongoDB connection error: '));

const main = async( ) => {
    const recipes = [{
        title: "Mongolian lamb stir-fry" ,
         country_of_origin: {
                    contry_name:'China'},
        ingredients: "cornflour, chinese five spice, brown sugar, garlic,soy sauce, lamb,peanut oil, onions,carrot,brocolini,black bean sauce, green onions, long-grain rice" ,
        image: "https://img.taste.com.au/R7DOpxdH/w643-h428-cfill-q90/taste/2016/11/mongolian-lamb-stir-fry-107156-1.jpeg"
        },
        {
        title: "Hyderabadi Lamb Biryani" ,
        country_of_origin: {
                    contry_name:'India'},
        ingredients: "basmati rice, whole garam masala, Biryani masala powder, yogurt, lemon, coriander, pudina, fried onions, red chilly powder, turmaric, salt, oil, Ghee, saffron" ,
        image: "http://www.relishthebite.com/wp-content/uploads/2015/12/HyderabadiLambBiryani-12.jpg"
        },
        
        {
        title: "Cazini With Lamb Ragu",
        country_of_origin: {
                    contry_name:'Italy'},
        ingredients: "eggs, semola flour, olive oil, ricotta cheese, Pecorino Romano, sugar, cinnamon, nutmeg,salt, egg, cloves,ground lamb,onion,black pepper, rosemary,sage,celery,red wine,chicken stock, carrot" ,
        image: "https://www.saveur.com/uploads/2019/03/18/4CYS6ZAQ4F3XLV77SAXKRZCDPI.jpg"
        },
        
        {
        title: "Grilled Marinated Lamb Kebabs",
        country_of_origin: {
                    contry_name:'Turkey'},
        ingredients: "coriander powder, cumin powder, salt, cayenne, boneless lamb shoulders, onion, olive oil, garlic cloves" ,
        image: "https://www.saveur.com/uploads/2019/05/23/C5YQC2454H55EFII7ZDBHX74GA.jpg"
        }
        ,
        {
        title: "West African Lamb Stew",
        country_of_origin: {
                    contry_name:'Ghana'},
        ingredients: "boneless lamb stew meat, tomatoes, tomato sauce, parsley, ginger, thyme, celery, onion, butternut squash, olive oil, bonnet peppers, african red peppers, salt, pepper, peanut butter, maggi seasoning cube" ,
        image: "https://i0.wp.com/www.evseats.com/wp-content/uploads/2020/10/west-african-lamb-stew-4.jpg?resize=865%2C1024"
        }
        
        ]
        await Recipe.insertMany(recipes);
        console.log("Created some recipes!")

}
const run = async () =>{
    await main();
    db.close();
}
 run();