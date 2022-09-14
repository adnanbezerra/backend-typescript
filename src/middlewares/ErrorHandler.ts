import { NextFunction, Request, Response } from "express"

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error.type === 'oi') {
        return res.status(500).send({ message: error.message });
    }
}