import { Identifier } from 'sequelize';
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../utils/custom-api-error";
import { httpStatusCodes } from "../../../utils/httpStatusCodes";
import { InvitationDAL } from '../../../schema/dal/invitation.dal';
import { InvitationStatus } from '../../../schema/models/Invitation.model';
import InvitationMapper from '../invitation.mapper';

const acceptInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = req;
        if (!user || !user.id) throw new ApiError('Unauthorized', httpStatusCodes.UNAUTHENTICATED);
        const { id } = req.params;
        const invitationId: Identifier = id;
        const invitation = await InvitationDAL.getById(invitationId);
        if (!invitation) throw new ApiError('Invitation not found', httpStatusCodes.NOT_FOUND);
        invitation.status = InvitationStatus.ACCEPTED;
        await invitation.save();
        return res.status(200).send(InvitationMapper.toInvitation(invitation));
    } catch (error) {
        next(error);
    }
}

export default acceptInvitation;