const { Model, Sequelize } = require("sequelize");

// const PROTECTED_ATTRIBUTES = ['password'];

module.exports= (sequelize, DataTypes) => {
  class DashboardFolderModel extends Model {
    toJSON() {
      // hide protected fields
      const attributes = { ...this.get() };

      return attributes;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DashboardFolderModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      // modelName: 'course',
      timestamps: false,
      tableName: "dashboard_folder",
    }
  );
  return DashboardFolderModel;
};