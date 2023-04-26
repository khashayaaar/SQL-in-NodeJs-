const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bseda1100",
  database: "my_database",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database: ", error);
    return;
  }
  connection.execute(
    `CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
  )`,
    (error) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("TABLE CREATED;");
    }
  );

  console.log("Connected to database my_database");
});

const conn2 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bseda1100",
  database: "world",
});
conn2.connect((error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Connected to database world.");

  conn2.query("SELECT * FROM city WHERE id=17;", (result, error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
  });
});
