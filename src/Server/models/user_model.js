module.exports = (sequelize, Sequelize) => {
  const Users  = sequelize.define("users", {
      //change DataTypes back Sequelize - if it breaks
      fullName: {
      type: Sequelize.STRING,
      // allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      isEmail: true, //checks for email format
      // allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      // allowNull: false
    }
  });
 
  return Users;
};
