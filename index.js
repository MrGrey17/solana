const { Connection, clusterApiUrl } = require('@solana/web3.js');
require('dotenv').config();

const connection = new Connection(process.env.SOLANA_RPC_URL || clusterApiUrl('mainnet-beta'));

async function checkConnection() {
    try {
        const version = await connection.getVersion();
        console.log("✅ Успешное подключение к Solana:", version);
    } catch (error) {
        console.error("❌ Ошибка подключения:", error);
    }
}

checkConnection();

