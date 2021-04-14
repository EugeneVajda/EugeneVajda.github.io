module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    question_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    question_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    question_have_open_answer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    open_question_points: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    next_question_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    question_category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'category_id'
      }
    }
  }, {
    sequelize,
    tableName: 'question',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "question_pkey",
        unique: true,
        fields: [
          { name: "question_id" },
        ]
      },
    ]
  });
};
