module.exports = (sequelize, dataType)=>{
    let alias= "ProductDetails";
    let cols = {
        order_id:{
            type: dataType.INTEGER
        },
        product_id:{
            type: dataType.INTEGER
        },
        count:{
            type: dataType.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "product_details",
        timestamps: false
    }

    const ProductDetail = sequelize.define(alias, cols, config);

    return ProductDetail;
}