module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    category_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "category_category_name_key"
    }
  }, {
    sequelize,
    tableName: 'category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "category_category_name_key",
        unique: true,
        fields: [
          { name: "category_name" },
        ]
      },
      {
        name: "category_pkey",
        unique: true,
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};
