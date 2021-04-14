module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    user_realname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    was_asked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_question_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'question',
        key: 'question_id'
      }
    },
    last_question_timestamp: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
