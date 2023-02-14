import { LastMessage } from "./last-message"
import { Participant } from "./participant"

export interface MessageThread {
    name: string
    id: string
    webUrl: string
    participants: Participant[]
    lastMessage: LastMessage
    hasUnreadMessages: boolean
    hasPriorityMessages: boolean
    type: number
}
