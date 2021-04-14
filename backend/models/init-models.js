var DataTypes = require("sequelize").DataTypes;
var _answer = require("./answer");
var _category = require("./category");
var _message = require("./message");
var _question = require("./question");
var _user = require("./user");
var _user_answer_link = require("./user_answer_link");
var _user_category_score = require("./user_category_score");
var _user_question_link = require("./user_question_link");

function initModels(sequelize) {
  var answer = _answer(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_answer_link = _user_answer_link(sequelize, DataTypes);
  var user_category_score = _user_category_score(sequelize, DataTypes);
  var user_question_link = _user_question_link(sequelize, DataTypes);

  answer.belongsToMany(user, { as: 'users', through: user_answer_link, foreignKey: "answer_id", otherKey: "user_id" });
  category.belongsToMany(user, { as: 'users', through: user_category_score, foreignKey: "category_id", otherKey: "user_id" });
  question.belongsToMany(user, { as: 'users', through: user_question_link, foreignKey: "question_id", otherKey: "user_id" });
  user.belongsToMany(answer, { as: 'answers', through: user_answer_link, foreignKey: "user_id", otherKey: "answer_id" });
  user.belongsToMany(category, { as: 'categories', through: user_category_score, foreignKey: "user_id", otherKey: "category_id" });
  user.belongsToMany(question, { as: 'questions', through: user_question_link, foreignKey: "user_id", otherKey: "question_id" });
  user_answer_link.belongsTo(answer, { as: "answer", foreignKey: "answer_id"});
  answer.hasMany(user_answer_link, { as: "user_answer_links", foreignKey: "answer_id"});
  question.belongsTo(category, { as: "question_category", foreignKey: "question_category_id"});
  category.hasMany(question, { as: "questions", foreignKey: "question_category_id"});
  user_category_score.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(user_category_score, { as: "user_category_scores", foreignKey: "category_id"});
  answer.belongsTo(question, { as: "question", foreignKey: "question_id"});
  question.hasMany(answer, { as: "answers", foreignKey: "question_id"});
  user.belongsTo(question, { as: "last_question", foreignKey: "last_question_id"});
  question.hasMany(user, { as: "users", foreignKey: "last_question_id"});
  user_question_link.belongsTo(question, { as: "question", foreignKey: "question_id"});
  question.hasMany(user_question_link, { as: "user_question_links", foreignKey: "question_id"});
  user_answer_link.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_answer_link, { as: "user_answer_links", foreignKey: "user_id"});
  user_category_score.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_category_score, { as: "user_category_scores", foreignKey: "user_id"});
  user_question_link.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_question_link, { as: "user_question_links", foreignKey: "user_id"});

  return {
    answer,
    category,
    message,
    question,
    user,
    user_answer_link,
    user_category_score,
    user_question_link,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
