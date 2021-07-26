import Sequelize from "sequelize";


const factory = (sequelize, DataTypes) => {
  class Artifact extends Sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artifact.init(
    {
      idKey: DataTypes.STRING,
      description: DataTypes.STRING,
      embed: DataTypes.STRING(4096),
      file: DataTypes.STRING(1024),
      parentId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Artifact",
    }
  );
  return Artifact;
};
export default factory;
