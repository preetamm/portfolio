const path = require('path')


exports.getHomePage = (req, res ) => {

    //res.sendFile(path.join(__dirname, '../', 'home.html'));
    console.log('home page is requesed');
    res.status('400')
    res.json('hello');
    
}