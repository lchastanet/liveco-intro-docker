const db = require("./db")

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `students`")
    .then((result) => result[0])
}

exports.findOne = (studentId) => {
  return db
    .promise()
    .query("SELECT * FROM `students` WHERE ID = ?", [studentId])
    .then(([result]) => result)
}

exports.addOne = (student) => {
  const { firstname, lastname, age, campus, remote } = student
  return db
    .promise()
    .query(
      "INSERT INTO `students` (firstname, lastname, age, campus, Remote) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, age, campus, remote]
    )
    .then(([result]) => {
      return { id: result.insertId, firstname, lastname, age, campus, remote }
    })
}

exports.replaceOne = (studentId, student) => {
  return db
    .promise()
    .query("UPDATE `students` SET ? WHERE ID = ?", [student, studentId])
    .then(([result]) => {
      return { id: studentId, ...student }
    })
}

exports.removeOne = (studentId) => {
  return db
    .promise()
    .query("DELETE FROM `students` WHERE ID = ?", [studentId])
    .then(([result]) => {
      if (result.affectedRows) {
        return true
      }
      return false
    })
}
