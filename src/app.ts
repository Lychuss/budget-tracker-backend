import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/wallet-tune");

//Global Error Handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if(err instanceof Error){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    };

    return res.status(500).json({
        message: "Unknown Error",
        success: false
    });
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Server port 5000 is listening...");
})