import 'dotenv/config';
import { createApp } from './app.js';
import { connectDatabase } from './db.js';
const port = Number(process.env.PORT ?? 8000);
const app = createApp();
const start = async () => {
    await connectDatabase();
    app.listen(port, () => {
        console.log(`OctoFit API listening on port ${port}`);
    });
};
start().catch((error) => {
    console.error('Failed to start OctoFit API:', error);
    process.exit(1);
});
