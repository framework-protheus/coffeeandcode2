# Spec

## Home

Nesta tela deverá conter uma lista com todos os tópico a serem votados.
Essa lista deverá ser paginada em 10 tópicos, deverá ser possível ordená-la por Menos votos, Mais votos, Mais novos e Mais antigos.

Somente usuários logados poderão votar nos tópicos e cadastrar novos.

No topo da pagina deverá existir uma navbar que conterá o nome da página atual e as informções sobre o usuário.
Quando o usuário estiver logado, apresentará a imagem do seu avatar (Gravatar).
Também deverá existir uma opção de logout, para sair do sistema.

## Cadastro de tópico

*Form* com campos de título e descrição.

Deverá ser guardado a informação de qual usuário criou o tópico.

Somente usuários logados poderão cadastrar tópicos.

## Cadastro de evento

*Form* com as seguintes informações:
- Data do evento;
- Data de corte (data em que será encerrada a votação no tópico do evento);
- Tópico do evento;

Somente usuários administradores poderão cadastrar eventos.

## Página do evento

Nessa tela serão apresentadas informações referentes ao tópico do evento.

Apenas o instrutor do tópico e o Administrador do sistema poderam editar as informações nessa tela.
O campo será um *textarea* que será formatado utilizando *markdown*.

## Tópicos votados pelo usuário

Nessa tela serão apresentados todos os tópicos em que o usuário logado votou.

## Sobre

Tela contento informações referentes a esse projeto, como funciona, links para o github e qualquer outra informação relevante.

## *Banner*

Página de publicidade, serão apresentadas informações como data do próximo evento, tópico e instrutor.
