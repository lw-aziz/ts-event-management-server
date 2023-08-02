import { AbstractDataTypeConstructor } from "sequelize";
import { InvitationStatus } from "../schema/models/Invitation.model";

export default interface InvitationInterface {
    id: AbstractDataTypeConstructor;
    eventId: AbstractDataTypeConstructor | string;
    invitedBy: AbstractDataTypeConstructor;
    invitedTo: AbstractDataTypeConstructor;
    status: string | InvitationStatus;
    createdAt: Date;
    updatedAt?: Date
    deletedAt?: Date
}