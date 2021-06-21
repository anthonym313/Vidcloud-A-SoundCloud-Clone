'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
    Video.belongsTo(models.User, {foreignKey:'userId'})
    Video.hasMany(models.Comment, {foreignKey:'vidId'})
  };
  return Video;
};