import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../utils/custom-api-error";
import { httpStatusCodes } from "../../../utils/httpStatusCodes";
import { CreateEventDTO } from "../../../schema/dto/event.dt";
import { EventDAL } from "../../../schema/dal/event.dal";
import EventMapper from "../event.mapper";

const createEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { user } = req;
        if (!user || !user.id) throw new ApiError('Unauthorized', httpStatusCodes.UNAUTHENTICATED);
        const payload: CreateEventDTO = req.body;
        payload.userId = user.id;

        const event = await EventDAL.createEvent(payload);
        res.status(201).send(EventMapper.toEvent(event));
    } catch (error) {
        next(error);
    }
}

export default createEvent;