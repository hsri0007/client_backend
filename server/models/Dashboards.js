import { Model, Sequelize } from "sequelize";

// const PROTECTED_ATTRIBUTES = ['password'];

export default (sequelize, DataTypes) => {
  class DashboardsModel extends Model {
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
  DashboardsModel.init(
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
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sisense_dashboard_embed: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      base_folder_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      // modelName: 'course',
      timestamps: false,
      tableName: "dashboards",
    }
  );
  return DashboardsModel;
};