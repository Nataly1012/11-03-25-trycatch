const nome = "Nataly"; // declarando a variável nome "somente leitura"

try { // a linha inicia o bloco de códigos
    nome = "Moraes"
} catch (err) { // encerra o bloco do "try" e inicia o bloco de códigos do "catch"
    console.error("Ops! A variável somente elitura 'nome' não pode ser alterada. Veja o erro: " + err); // essa linha demonstra uma variável "err" que recebe as infromações de erros da captura do catch
} // encerramento do bloco de códigos do catch

console.log("teste");

nome = "marinho"; // quando você tenta colocar um código ilegal ele é interrompido e você não conseguira continuar

console.log("teste2");

function fazerLogin() { // declara a função "fazer login" abrindo o bloco de códigos
    let usuario = document.getElementById("txtLogin"); // define a variável usuario,vai receber o elemnto txtLogin sendo aliminada após o fim da execução
    let senha = document.getElementById("txtSenha"); // define a variável usuario,vai receber o elemnto txtSenha sendo aliminada após o fim da execução
    try{ // inicia a bloco de códigos "try" iniciando a tentativa de execução
        if (usuario.value !== "usuario123") { // vai verificar o valor do elemento usuário, checando se é identico ao texto usuário123 (quando tem uma ! no operador de comparação significa que é diferente)
            usuario.focus();
            throw new Error("Erro: usuario inválido."); // se for diferente de usuario123 ele vai lançar a mensagem de erro
        } // essa linha encerra o bloco de códigos do if de usuario
         if (senha.value !== "senha123") { // vai verificar o valor do elemento senha, checando se é identico ao texto usuário123 (quando tem uma ! no operador de comparação significa que é diferente)
             throw new Error("Erro: senha incorreta."); // se for diferente de senha123 ele vai lançar a mensagem de erro
        } // essa linha encerra o bloco de códigos do if de senha
        console.log("Login realizado com sucesso."); // vai verificar o valor do elemento login, e vai avisar se vai ser feito o login corretamente
    } catch (erro) { // flinalização do bloco de códigos try, e iniciação do bloco de códigos do catch, que irá pegar os erros do bloco do try
        console.error(error.message); // receberá uma mensagem de erro
    } // finalização do bloco de códigos catch
} // finalização do bloco de códigos da função fazer login