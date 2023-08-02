import { Router } from 'express';
import { isAuthenticated } from '../middleware/authenticate';
import updateEvent from './controller/accept.invitation';
import acceptInvitation from './controller/accept.invitation';
import rejectInvitation from './controller/reject.invitation';

const invitationRouter = Router();

invitationRouter.use(isAuthenticated);
invitationRouter.get('/:id/accept', acceptInvitation)
invitationRouter.get('/:id/reject', rejectInvitation)

export default invitationRouter;