/*module.exports = {
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
  };*/

  module.exports = {
    HOST: "ec2-44-206-214-233.compute-1.amazonaws.com",
    USER: "cxyvxmbllgbfho",
    PASSWORD: "8d4fda0debf9ece0680ea2d4ba1fc4b371f485b161fa0a380f99c824f9a7a394",
    DB: "d85j1r82u5002t",
    PORT: 5432,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };