const botao = document.getElementById('botao')
const idConselho = document.getElementById('id-conselho')
const conselho = document.getElementById('conselho')

async function gerarConselho() {
    const url = "https://api.adviceslip.com/advice"
    try {
        const resposta = await fetch(url)

        if (!resposta.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API")
        }

        const json = await resposta.json()
        const id = json.slip.id
        const descricaoConselho = json.slip.advice

        idConselho.innerText = `ADVICE # ${id}`
        conselho.innerText = `"${descricaoConselho}"`
    } catch (erro) {
        console.error("Erro ao tentar buscar as informações da API", erro)
    }
}

gerarConselho()

botao.addEventListener('click', () => {
    gerarConselho()
})