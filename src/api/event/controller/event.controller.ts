import { AbstractDataTypeConstructor } from "sequelize";
import { EventDAL } from "../../../schema/dal/event.dal";
import { EventOutput } from "../../../schema/models/Event.model";
import { CreateEventDTO } from "../../../schema/dto/event.dt";
import * as mapper from '../event.mapper'
import EventInterface from "../../../interfaces/event.interface";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../utils/custom-api-error";
import { httpStatusCodes } from "../../../utils/httpStatusCodes";

export default class EventController {
    static async getEvents(userId: AbstractDataTypeConstructor): Promise<EventOutput[] | []> {
        try {
            const events = await EventDAL.getEventsByUser(userId);
            return events
        } catch (error) {
            throw error;
        }
    }

    static async create(payload: CreateEventDTO): Promise<EventInterface> {
        try {
            const event = await EventDAL.createEvent(payload);
            return mapper.toEvent(event);
        } catch (error) {
            throw error;
        }
    }

    static async createEvent(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { user } = req;
            if (!user || !user.id) throw new ApiError('Unauthorized', httpStatusCodes.UNAUTHENTICATED);
            const payload: CreateEventDTO = req.body;
            payload.userId = user.id;

            const userEvents = EventController.create(payload);
            res.status(200).send(userEvents);
        } catch (error) {
            next(error);
        }
    }
}