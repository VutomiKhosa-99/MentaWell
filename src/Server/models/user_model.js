module.exports = (sequelize, Sequelize) => {
  const Users  = sequelize.define("users", {
      //change DataTypes back Sequelize - if it breaks
      fullName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      isEmail: true, //checks for email format
    },
    password: {
      type: Sequelize.STRING,
    }
  });
 
  return Users;
};
