import { Router } from 'express';
import { isAuthenticated } from '../middleware/authenticate';
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

export default eventRouter;