module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Dungeons&Dragons3e",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };