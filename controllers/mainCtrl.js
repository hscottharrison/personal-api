var user = require('../user.js');
module.exports = {
  getName: function(req, res){
    return res.json(user.name);
  },
  getLocation: function(req, res){
    return res.json(user.location);
  },
  getOccupations: function(req, res){
    if(req.query.order){
      if(req.query.order === 'asc'){
        return res.json(user.occupations.reverse());
      }
      else if(req.query.order === 'desc'){
        return res.json(user.occupations.sort())
      }
    }
    return res.json(user.occupations);
  },
  getLatestOccupation: function(req, res){
    var latest = user.occupations.slice(user.occupations.length -1, user.occupations.length)
    return res.json(latest);
  },
  getHobbies: function(req, res){
    return res.json(user.hobbies);
  },
  getHobbyType: function(req, res){
    var type = req.params.type;
    var hobbies = user.hobbies
    var hobbyType = hobbies.filter(function(hobby){
      return hobby.type == type;
    })
    return res.json(hobbyType);
  },
  getFamily: function(req, res){
    var family = user.family;
    if(req.query.relation){
    var familyMember =  family.filter(function(person){
        return person.relation == req.query.relation;
      })
      return res.json(familyMember);
    }
      return res.json(family);
  },
  getFamilyGender: function(req, res){
    var gender = req.params.gender;
    var family = user.family;
    var familyGender = family.filter(function(person){
      return person.gender == gender;
    });
    return res.json(familyGender);
  },
  getRestaurants: function(req, res){
    var restaurants = user.restaurants;
    if(req.query.rating){
      var restaurant =  restaurants.filter(function(place){
        return place.rating == req.query.rating;
      })
      return res.json(restaurant);
    }
    if(req.query.order)
      return res.json(restaurants);
  },
  //start here you have not gotten this to work yet
  getRestaurantName: function(req, res){
    var restaurants = user.restaurants;
    var name = req.param.name;
    console.log(req.param.name)
    var restaurant = restaurants.filter(function(place){
      return place.name == name;
    });
    return res.json(restaurant);
  },
  changeName: function(req, res){
    var name = req.query.name;
    user.name = name;
    res.json('updated');
  },
  changeLocation: function(req, res){
    var location = req.query.location;
    user.location = location;
    res.json('updated');
  },
  addHobby: function(req, res){
    user.hobbies.push(req.query);
    console.log(req.body)
    res.json(user.hobbies);
  },
  addOccupation: function(req, res){
    user.occupations.push(req.params.occupation);
    res.json(user.occupations);
  },
  addFamily: function(req, res){
    user.family.push(req.query);
    res.json(user.family);
  },
  addRestaurant: function(req, res){
    user.restaurants.push(req.query);
    res.json(user.restaurants);
  }








}
