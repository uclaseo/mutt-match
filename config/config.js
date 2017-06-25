module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "mutt_match",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "mutt_match",
    "host": process.env.DB_PORT_3306_TCP_ADDR,
    "dialect": "mysql",
    "socketPath": "/var/run/mysqld/mysqld.sock"
  }
};
