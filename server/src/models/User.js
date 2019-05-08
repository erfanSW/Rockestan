module.exports = (sequelize , DataTypes) =>
    User = sequelize.define('User',{
        email : {
            type : DataTypes.STRING , 
            unique : true 
        },
        password : DataTypes.STRING
    })
