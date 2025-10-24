# Projeto de Empresa de Taxis - PSI

Este projeto desenvolvido no âmbito da cadeira de PSI tem como objetivo a criação de um protótipo funcional de um aplicação de gestão de uma firma
de serviços de táxis, recorrendo a conhecimentos tanto de front como backend, usando ferramentas como o Angular, Express e MongoDB para o desenvolvimento.

A aplicação conta com 3 interfaces principais: Manager, Driver e Client. Cada interface, é dedicada à utilização dos diferentes tipos de agentes.

## Manager:
- Nesta interface o user pode:
  - Gerir os táxis da frota, bem como os condutores (criar, editar e apagar);
  - Consultar informação acerca das viagens passadas;
  - Calcular preços de viagens com base em diversos fatores;
  - Aceder a um report das viagens de datas específicas;

## Driver:
- Nesta interface o pode:
  - Criar turnos, para os quais se reserva um táxi;
  - Verificar os turnos do motorista;
  - Durante um turno, ver e aceitar pedidos de viagem de clientes;
  - Consultar as viagens passadas;

## Client:
- Nesta interface o pode:
  - Requisitar viagens, fornecendo os dados pessoais, o nivel de conforto desejado, número de passageiros, morada de partida (pode ser recolhida automaticamente) e morada de destino (pode ser selecionada no mapa)

Juntamente com estes ficheiros poderá encontrar o enunciado com os requisitos para o ficheiro.

# Execução

**pode ser necessário apagar os node_modules e fazer um npm install**

correr frontend (em angular-psi-frontend): ng serve

correr backend (em express-psi-backend): npm run serverstart (Windows) ou npm start

Esta é a **versão original** do projeto desenvolvida durante o semestre. O frontend e backend estão configurados com as definições iniciais utilizadas durante o desenvolvimento. **Não** funciona no appserver.

## Versão atual (main)

- Frontend em Angular com versão original do trabalho.
- Backend com conexão MongoDB configurada para a **conta pessoal** do grupo (e não para o servidor da faculdade).
- Backend escutando na porta `3000`, com o frontend acessando serviços via `http://localhost:3000`.

  
