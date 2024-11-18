require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {query} = require('./config/userdatabase');

const port = process.env.PORT || 8080;
const baseUrl = process.env.SERVER_URL
const isDebug = process.env.IS_DEBUG === 'true'

app.use(cors())

app.get('/', (req, res) => {
    // let domain = isDebug ? "client" : req.subdomains[0]
    // query('SELECT * FROM client WHERE domain = $1', [domain]).then(result => {
    //     const queryResult = result.rows
    //     if (queryResult.length <= 0) {
    //         res.send("Server not found").status(504);
    //     } else {
    //         console.log(`returned ${queryResult.length} to ${domain}`)
    //         console.log(queryResult[0])
    //         res.send(JSON.stringify(queryResult[0]))
    //     }
    // }).catch(err => {
    //     console.log(err);
    //     res.send("An error has ocurred").status(500);
    // })
    res.send({
        id: 1,
        nome: 'empresa do guilherme',
        enabled: true,
        domain: 'client'
    })
})
app.get('/carousel', (req, res) => {
    res.send([{
        id: 1,
        image: null,
        title: 'Exemplo de Promoção A',
        text: 'Descrição breve sobre a promoção para o usuário se interessar',
        clientId: 1
    }, {
        id: 2,
        image: null,
        title: 'Exemplo de Promoção B',
        text: 'Descrição breve sobre a promoção para o usuário se interessar',

        clientId: 1
    }])
})

app.get('/links', (req, res) => {
    res.send([{
        id: 1,
        link: 'https://www.instagram.com/empresa_exemplo',
        clientId: 1
    }, {
        id: 2,
        link: 'https://www.facebook.com/empresaExemplo',
        clientId: 1
    }, {
        id: 3,
        link: 'https://wa.me/5551999999999',
        clientId: 1
    }])
})

app.get('/product', (req, res) => {
    res.send([{
        id: 1,
        description: "Produto A - Alta qualidade e eficiência.",
        clientId: 1,
        image: null
    }, {
        id: 2,
        description: "Produto B - Solução ideal para suas necessidades.",
        clientId: 1,
        image: null
    }, {
        id: 3,
        description: "Produto C - Inovação e confiabilidade em um só produto.",
        clientId: 1,
        image: null
    }])
})

app.get('/info', (req, res) => {
    res.send({
        title: "Bem-vindo à Nossa Empresa",
        text:   "Fornecemos soluções personalizadas e serviços de alta qualidade para atender às suas necessidades específicas.",
        description: "Somos especializados em inovação e excelência no atendimento ao cliente.",
        clientId: 1
    })
})

app.listen(port, () => {
    console.log('Listening on port ' + baseUrl + ":" + port);
})


