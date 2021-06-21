'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    userId: DataTypes.STRING,
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
    Video.belongsTo(models.User), {foreignKey:'userId'}
  };
  return Video;
};