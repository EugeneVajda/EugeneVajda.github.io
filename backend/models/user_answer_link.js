module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_answer_link', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'answer',
        key: 'answer_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_answer_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_answer_link_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "answer_id" },
        ]
      },
    ]
  });
};
