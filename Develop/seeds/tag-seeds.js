const { Tag } = require('../models');
const sequelize = require('../config/connection');

const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     return ProductTag.bulkCreate(tagData);
//   })
//   .then(dbtagData => {
//     console.log('Tag seeded!');
//     process.exit(0);
//   })
//   .catch(err => {
//     console.log(err);
//     process.exit(1);
//   });

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
