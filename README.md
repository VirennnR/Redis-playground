# Redis
A fun test backend code with implementation of Redis and some basic code snippets.

## Prerequisite
- Knowledge
  - Node.JS Intermediate level
  - Experience with Redis cli
- Tools
  - Node.js: [Download Node.JS](https://nodejs.org/en)
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)

## Commands
- Start Redis Container and expose PORT `6379` for redis and `8001` for localhost gui.
```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

## After cloning just run 
```bash
nmp i
node server.js
```

## Image Samples
- Redis GUI (running on `https://localhost:8001`)
  
  <img width="1280" alt="Screenshot 2024-09-19 at 14 23 08" src="https://github.com/user-attachments/assets/271fea30-a388-45c3-9d1a-e3be8b2acc4c">

- Postman screenshot of API when hit without catching (1397ms)
  
  <img width="1280" alt="Screenshot 2024-09-19 at 14 22 52" src="https://github.com/user-attachments/assets/b55426a0-f256-426a-8ff2-3fd50a4da28a">

- Postman screenshot of API when hit with catching (7ms)

  <img width="1280" alt="Screenshot 2024-09-19 at 14 21 11" src="https://github.com/user-attachments/assets/ddc79fbb-4a45-4507-a58e-ecbd16f76a0b">

