module.exports = {
  "development": {
    // "username": "root",
    // "password": null,
    // "database": "mutt_match",
    // "host": "127.0.0.1",
    // "dialect": "mysql",
    url: 'postgres://postgres:password@localhost:5432/muttmatch',
    dialect: 'postgres'
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    // "username": "root",
    // "password": "password",
    // "database": "mutt_match",
    // "host": process.env.DB_PORT_3306_TCP_ADDR,
    // "socketPath": "/var/run/mysqld/mysqld.sock"
    // "username": "zsuvsyix",
    // "password": 'rVk8_mEu3qGGjx98r1JWIsmX9i2oRlVo',
    // "database": "zsuvsyix",
    // "host": "pellefant.db.elephantsql.com",
    // "port": 5432,
    // "dialect": "postgres"
    url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/muttmatch',
    dialect: 'postgres'
  }
};
