import "dotenv/config";
import { sequelize } from "./models/index.js";

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

syncDatabase();
