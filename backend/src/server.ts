import express, { Request, Response, NextFunction, Router } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors()); // libera a plicação para uso
app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp"))); // midleware => permite a visualizaçao da imagem do produto

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // midleware
  if (err instanceof Error) {
    // verifica se é uma instancia do tipo Error
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => console.log("Server On!!🚀"));
