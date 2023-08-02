import { Router } from 'express'
import userRouter from '../user/user.routes'
import { restErrorHandler } from '../middleware/error-handler'
import eventRouter from '../event/event.routes';

const router = Router()

router.use('/users', userRouter);
router.use('/events', eventRouter);

router.use(restErrorHandler);

export default router