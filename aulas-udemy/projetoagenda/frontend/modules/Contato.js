import validator from 'validator'
/*
Pra quem tiver interesse, fiz alterações mas o objetivo final, foi atingido.

-  O cadastro de contato armazena qual usuário está criando aquele contato e o index só listará os contatos cadastrados pelo usuário que está logado.

- Em alteração de contato, caso apresente algum erro de cadastro para o usuário, a página atualizará com os valores atuais, do BD, daquele contato.

- Cadastro de contato e listagem de contatos só aparecem enquanto o usuário estiver logado. Caso ele tente acessar tais páginas sem estar logado, será redirecionado para logar no sistema ou criar um novo usuário.

- Em todas as telas, será exibido o nome do usuário que está logado.

- Fiz módulos diferentes para validação do frontend e validei todos os formulários.

- Utilizei o bootstrap instalado no dependence do node.

*/
export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
        this.res = document.querySelector(`.res`)
    }

    init(){ 
        this.events()
    }

    events() {

        if (!this.form) return
        this.form.addEventListener(`submit`, e => {
            e.preventDefault()
            this.res.innerHTML = ``
            
            this.validate(e)
        })
    }

    validate(e){
        const el = e.target
        const nameInput = el.querySelector(`input[name="nome"]`)
        const emailInput = el.querySelector(`input[name="email"]`)
        const teleInput = el.querySelector(`input[name="telefone"]`)
        let error = false 
        
        if (!nameInput.value) {
            this.message(`Nome é um campo obrigatório`)
            error = true
        }

        if (emailInput.value){
            if (!validator.isEmail(emailInput.value)){
                this.message('Email Inválido.')
                error = true
            }
        }

        if (!emailInput.value && !teleInput.value){
            this.message(`Pelo menos um contato precisa ser adicionado: E-mail ou Telefone.`)
            error = true
        }

        if (!error) el.submit()
    }

    message(msg){
        const newP = document.createElement("p")
        newP.innerHTML = msg
        this.res.classList.add(`alert`)
        this.res.classList.add(`alert-danger`)
        this.res.appendChild(newP)
    }
}