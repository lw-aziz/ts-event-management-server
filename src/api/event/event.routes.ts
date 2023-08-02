import { NextFunction } from 'express';
import { Request, Response, Router } from 'express';
import { isAuthenticated } from '../middleware/authenticate';
import EventController from './controller/event.controller';
import { ApiError } from '../../utils/custom-api-error';
import { httpStatusCodes } from '../../utils/httpStatusCodes';
import { CreateEventDTO } from '../../schema/dto/event.dt';
import getEvents from './controller/get.events';
import createEvent from './controller/create.event';
import getEvent from './controller/get.event';
import deleteEvent from './controller/delete.event';
import updateEvent from './controller/update.event';

const eventRouter = Router();

eventRouter.use(isAuthenticated);
eventRouter.get('/', getEvents)
eventRouter.post('/', createEvent)
eventRouter.get('/:id', getEvent)
eventRouter.delete('/:id', deleteEvent)
eventRouter.put('/:id', updateEvent)

//eventRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
//    try {
//        const { user } = req;
//        if (!user || !user.id) throw new ApiError('Unauthorized', httpStatusCodes.UNAUTHENTICATED);
//        const payload: CreateEventDTO = req.body;
//        payload.userId = user.id;

//        const userEvents = EventController.create(payload);
//        res.status(200).send(userEvents);
//    } catch (error) {
//        next(error);
//    }
//})

//eventRouter.post('/', EventController.createEvent)
export default eventRouter;