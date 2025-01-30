# Amigo Secreto

Este projeto permite que os usuários adicionem nomes de amigos, realizem um sorteio entre eles e visualizem os resultados. É uma aplicação interativa que garante a inserção correta dos nomes e evita duplicatas.

## Funcionalidades

- Formatação automática dos nomes inseridos.
- Validação do input para impedir números e caracteres especiais.
- Adição de nomes a uma lista sem permitir duplicatas.
- Exibição dinâmica da lista de amigos.
- Sorteio aleatório entre os nomes adicionados, sem repetí-los.
- Reinicialização do sorteio, apagando os dados armazenados.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (DOM, eventos, manipulação de arrays)

## Como Usar

1. Insira os nomes dos amigos no campo de entrada.
2. Clique em **"Adicionar"** para incluir o nome na lista.
3. Pressione **"Sortear"** para escolher aleatoriamente um nome da lista.
4. O resultado do sorteio será exibido na tela.
5. Caso deseje reiniciar, utilize o botão **"Reiniciar Sorteio"**.

## Estrutura do Código

- `formatarNomeInserido(nome)`: Formata os nomes para padronização.
- `validarInput()`: Impede inserção de caracteres inválidos.
- `adicionarAmigo()`: Adiciona um nome à lista de amigos.
- `atualizarListaDeAmigos()`: Atualiza a exibição da lista de amigos na tela.
- `sortearAmigo()`: Realiza o sorteio entre os nomes adicionados.
- `reiniciarSorteio()`: Limpa os nomes e os sorteios realizados.
- `atualizarMensagem(mensagem)`: Atualiza mensagens exibidas na interface.

## Acesse o Projeto

[Visualizar o Sorteador de Amigos](https://mireiatorres.github.io/amigo_secreto/)
