require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;

// const test = async () => {
//   try {
//     await conn.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
// test();

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});
