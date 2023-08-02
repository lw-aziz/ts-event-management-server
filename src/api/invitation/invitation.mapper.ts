import EventInterface from "../../interfaces/event.interface";
import InvitationInterface from "../../interfaces/invitation.interface";
import { EventOutput } from "../../schema/models/Event.model";
import { InvitationOutput } from "../../schema/models/Invitation.model";


export default class InvitationMapper {

    static toInvitation(invitationData: InvitationOutput): InvitationInterface {
        return {
            id: invitationData.id,
            eventId: invitationData.eventId,
            invitedBy: invitationData.invitedBy,
            invitedTo: invitationData.invitedTo,
            status: invitationData.status,
            createdAt: invitationData.createdAt,
        }
    }

    static toInvitations(invitationsData: InvitationOutput[]): InvitationInterface[] {
        return invitationsData.map(invitationData => {
            return this.toInvitation(invitationData)
        })
    }
}
