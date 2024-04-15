module.exports = (sequelize, dataType)=>{
    let alias = "Orders";

    let cols = {
        order_id : {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{
            type: dataType.INTEGER,
            allowNull: false
        },
        sending_cost:{
            type: dataType.DECIMAL
        },
        sending_address:{
            type: dataType.STRING,
            allowNull: false
        },
        locality:{
            type: dataType.STRING,
            allowNull: false
        },
        postal_code:{
            type: dataType.STRING,
            allowNull: false
        },
        subtotal:{
            type: dataType.DECIMAL,
            allowNull: false
        },
        total:{
            type: dataType.DECIMAL,
            allowNull: false
        },
        state:{
            type: dataType.BOOLEAN
        }
    };

    let config = {
        tableName: "orders",
        timestamps: false
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = function(models){
        Order.belongsTo(models.Users,{
            as: "users",
            foreignKey: "user_id"
        });

        Order.belongsToMany(models.Products,{
            as: "products",
            through: models.ProductDetails,
            foreignKey: 'order_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }
    return Order;
}