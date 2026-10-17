import "dotenv/config";
import express from "express";
import models, { sequelize } from "./models/index.js";
import {
  corsMiddleware,
  logMiddleware,
  contextMiddleware,
  notFoundMiddleware,
  errorMiddleware,
} from "./middlewares/index.js";
import * as routes from "./routes/index.js";

const app = express();

app.set("trust proxy", true);

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logMiddleware);
app.use(contextMiddleware);

app.get("/", (req, res) => {
  return res.send("API Currículo Express executando...");
});

app.use("/profiles", routes.profile);
app.use("/academic-experiences", routes.academicExperience);
app.use("/professional-experiences", routes.professionalExperience);
app.use("/projects", routes.project);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const eraseDatabaseOnSync = process.env.ERASE_DATABASE_ON_SYNC === "true";
const syncDatabase = process.env.SYNC_DATABASE === "true";

const startServer = async () => {
  if (syncDatabase) {
    await sequelize.sync({ force: eraseDatabaseOnSync });
  }

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
};

startServer();

export default app;
