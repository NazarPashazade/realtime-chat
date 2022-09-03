import { NextFunction, Request, Response } from "express";


export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): any => {
    res.status(err.status || 500);
    res.json({ error: { message: err.message, stack: err.stack } })
}