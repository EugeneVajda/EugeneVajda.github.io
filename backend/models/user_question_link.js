
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_question_link', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'question',
        key: 'question_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_question_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_question_link_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "question_id" },
        ]
      },
    ]
  });
};
