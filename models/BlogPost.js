const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    creator: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
  }
);

module.exports = BlogPost;
