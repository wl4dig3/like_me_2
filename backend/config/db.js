import 'dotenv/config'

const pool = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE   
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Fallió la consulta',err);
    }
    console.log(res.rows[0].now);
});

export default pool;

try {
    await pool.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.log('Fallió la consulta',err);
        }
        console.log('Conectado a la BD de Wladimir',res.rows[0].now);
    });
} catch (error) {
    console.log('Error en hacer la consulta a la BD',error);
}