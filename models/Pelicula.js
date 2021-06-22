
module.exports = (sequelize,dataTypes)=>{
    let alias = 'Peliculas';
    let cols = {
    
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    title:{
        type: dataTypes.STRING
    } 

    };

    let config = {
        tableName: "movies",
        timestamps: false,
    }


const Pelicula = sequelize.define(alias, cols, config);

return Pelicula;
}