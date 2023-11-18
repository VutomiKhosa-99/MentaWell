//FOR LOCAL DEVELOPMENT
module.exports = {
    HOST: 'dpg-clbv4iscu2es738mut70-a.oregon-postgres.render.com',
    USER: 'mentawell_g5ww_user',
    PASSWORD: 'A8n4vfw49JnD7l65ay7a9m1dsXkl1ZRE',
    DB: 'mentawell_g5ww',
    port: 5432,
    dialect: 'postgres',
    pool: {
      max: 15,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};

