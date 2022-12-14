import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));
