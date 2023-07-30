var Sequelize = require('sequelize')
var sequelize

sequelize = new Sequelize('class101', 'root', '1habgyeok', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Asia/Seoul',
  },
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
})

var db = {}
db.users = sequelize.import(__dirname + '/users.js')

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
