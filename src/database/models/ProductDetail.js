module.exports = (sequelize, dataType)=>{
    let alias= "ProductDetails";
    let cols = {
        order_id:{
            type: dataType.INTEGER
        },
        product_id:{
            type: dataType.INTEGER
        },
        amount:{
            type: dataType.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "product_detail",
        timestamps: false
    }

    const ProductDetail = sequelize.define(alias, cols, config);

    return ProductDetail;
}