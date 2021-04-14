
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_category_score', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'category',
        key: 'category_id'
      }
    },
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_category_score',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_category_score_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "category_id" },
        ]
      },
    ]
  });
};
