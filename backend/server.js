import express from "express";
import dotenv from "dotenv";

dotenv.config();
import error from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready.."));
app.use(error.notFound);
app.use(error.errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
