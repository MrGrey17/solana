# Solana Tokens Parser

Instructions for installing

1. Installing node and npm:\
    sudo apt update && sudo apt install -y nodejs npm

2. Step Two:\
    npm install

3. Installing Postgresql:\
    sudo apt install -y postgresql postgresql-contrib\
    sudo systemctl enable --now postgresql

4. Logining into root:\
    sudo -u postgres psql

5. Creating user and database:\
    CREATE DATABASE solana_tokens;\
    CREATE USER solana_user WITH ENCRYPTED PASSWORD 'yourpassword';\
    GRANT ALL PRIVILEGES ON DATABASE solana_tokens TO solana_user;\
    \q

6. Adding .env from .env_conf:

7. Testing:\
    node index.js



