
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message_start: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    message_text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    message_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'message',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "message_pkey",
        unique: true,
        fields: [
          { name: "message_id" },
        ]
      },
    ]
  });
};
