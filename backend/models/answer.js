
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answer', {
    answer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'question',
        key: 'question_id'
      }
    },
    answer_text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    answer_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'answer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "answer_pkey",
        unique: true,
        fields: [
          { name: "answer_id" },
        ]
      },
    ]
  });
};
