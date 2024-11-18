const {Pool} = require('pg');
require('dotenv').config();
/**
 *      Conceito: uma pool é um buffer para um conjunto de conexões com o postgres, para possibilitar acesso paralelizado
 *      e eficiente
 *      Detalhes: Pool extende EventEmitter, ou seja, é possivel fazer dar listen em eventos dela.
 *      Exemplo: pool.on('connected', (error)=>{})
 */
const pool = new Pool(
    {
        user: process.env.DATABASE_USER,
        host: process.env.DATABASE_URL,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
        port: Number(process.env.DATABASE_PORT),
        max: 20,
        connectionTimeoutMillis: 10000,
        idleTimeoutMillis: 10000,
        allowExitOnIdle: false,
    }
);
/**
 *
 * @param text é a query em sí
 * @param params são os valores usados para a String Template
 * @returns {*} que provavelmente será array, objeto ou valor,
 * Exemplo: query('SELECT * FROM product WHERE clientId = $1', id)
 */

module.exports = {
    query: (text, params) => {
        return pool.query(text, params)
    }
}

/**
 *      A diferença de pool.query e client.query é demarcada nesse comentário:
 *      pool.query executa esse esse código abstraído.
 *      const client = await pool.connect();
 *      Em seguida algumas propriedades úteis da pool:
 *      - pool.idleCount;
 *      - pool.totalCount;
 *      - pool.waitingCount;
 *      client.query
 *      client.release recebe um argumento booleano, que indica se a conexão será destruída (true) ou mantida na pool
 *      (false).
 *      client.release(true);
 */