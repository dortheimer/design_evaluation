import Sequelize from 'sequelize';


const factory = (sequelize, DataTypes) => {
  class ArtifactRating extends Sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ArtifactRating.init({
    idKey: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    accountId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ArtifactRating',
  });
  return ArtifactRating;
};

export default factory;
