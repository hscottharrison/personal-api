var user = {
  name: 'Hunter',
  location: 'Dallas',
  occupations: ['Scientist','Web Developer'],
  hobbies: [
    {
      name: 'Climbing',
      type: 'Active'
    },
    {
      name: 'Hiking',
      type: 'Active'
    },
    {
      name: 'Eating',
      type: 'inActive'
    }
  ],
  family: [
    {
      name: 'Foy',
      relation: 'Father',
      gender: 'Male'
    },
    {
      name: 'Diane',
      relation: 'Mother',
      gender: 'Female'
    },{
      name: 'Lauren',
      relation: 'Sister',
      gender: 'Female'
    }
  ],
  restaurants: [
    {
      name: 'Torchys',
      type: 'Tacos',
      rating: '9'
    },
    {
      name: 'La Ventana',
      type: 'Tacos',
      rating: '8'
    },
    {
      name: 'Stone Deck',
      type: 'Pizza',
      rating: '8'
    }
  ]
};
module.exports = user;
