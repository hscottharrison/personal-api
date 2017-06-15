var express = require('express');
var bodyParser = require('body-parser');
var middleWare = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var app = express();

app.use(middleWare.addHeaders);

app.use(bodyParser.json());

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbyType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantName);
app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurant);
app.get('/skillz', mainCtrl.getSkillz);
app.post('/skillz', middleWare.generateId, mainCtrl.postSkillz);
app.get('/secrets/:username/:pin', middleWare.verifyUser, mainCtrl.getSecrets);



app.listen(3000, function(){
  console.log('Listening to Port 3000')
})
