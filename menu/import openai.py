import openai

# Configuração da API
openai.api_key = 'sua_chave_de_api'

# Função para fazer uma pergunta ao modelo
def fazer_pergunta(pergunta):
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=pergunta,
        max_tokens=100,
        temperature=0.7,
        n=1,
        stop=None,
        temperature=0.7
    )
    return response.choices[0].text.strip()

# Exemplo de interação com o modelo
pergunta = "Qual é a resposta para a vida, o universo e tudo mais?"
resposta = fazer_pergunta(pergunta)
print(resposta) 