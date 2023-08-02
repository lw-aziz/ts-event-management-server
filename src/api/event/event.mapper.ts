import EventInterface from "../../interfaces/event.interface";
import { EventOutput } from "../../schema/models/Event.model";


export default class EventMapper {

    static toEvent(eventData: EventOutput): EventInterface {
        return {
            id: eventData.id,
            title: eventData.title,
            description: eventData.description,
            eventDate: eventData.eventDate,
            userId: eventData.userId,
            createdAt: eventData.createdAt
        }
    }

    static toEvents(eventsData: EventOutput[]): EventInterface[] {
        return eventsData.map(eventData => {
            return this.toEvent(eventData)
        })
    }
}
