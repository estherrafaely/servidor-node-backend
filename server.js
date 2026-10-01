const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');


    //Verificar se o método é GET
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end('Método não permitido.')
        return;
    }


    //Rota principal
    if(req.url === '/') {
        res.statusCode = 200;
        res.end('Bem-vindo à minha aplicação Node.js!')
        return;
    }

    //Rota sobre
    if(req.url === '/sobre') {
        res.statusCode = 200;
        res.end("Está é a página sobre a aplicação.")
        return;
    }

    //Rota alunos
    if(req.url === '/alunos') {
        res.statusCode = 200;
        res.end("Lista de alunos da turma")
        return;
    }

    //Rota contato
    if (req.url === "/contato") {
        res.statusCode = 200;
        res.end("Entre em contato conosco!")
        return;
    }

    //Rota inexistente
    res.statusCode = 404;
    res.end('Página não encontrada.')
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});
