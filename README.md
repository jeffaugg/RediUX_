# RediUX_

## Para configurar o projeto RediUX, siga os passos abaixo:

1. Clone o repositório utilizando o comando: `git clone https://github.com/RediUX/RediUX_.git`.
2. Construa o ambiente com o Docker utilizando: `docker-compose build`.
3. Inicie os serviços em segundo plano com: `docker-compose up -d`. 
    - O parâmetro `-d` significa que os serviços serão executados em background.
4. Para verificar os endereços IP dos contêineres, execute os comandos:
   - Para o frontend: `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rediux_-frontend-1`.
   - Para o backend: `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rediux_-backend-1`.
5. Para listar os contêineres ativos, use: `docker ps`.
6. Acesse o projeto na rede local utilizando os IPs fornecidos no passo 4, seguidos das portas específicas:
   - Para o frontend, use `172.26.0.3:3000`.
   - Para o backend, use `172.26.0.2:3001`.
7. Se realizar alterações no código, reinicie os serviços com: `docker-compose up -d`. Um novo build será necessário apenas se houver mudanças nas configurações do Docker (como alterações no Dockerfile) ou nas dependências do aplicativo que requeiram a reconstrução do contêiner.

Certifique-se de seguir cada passo cuidadosamente para garantir que o projeto seja configurado corretamente.