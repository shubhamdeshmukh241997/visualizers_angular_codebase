import { LastMessage } from "./last-message"
import { Participant } from "./participant"

export interface MessageThread {
    id: string
    webUrl: string
    participants: Participant[]
    lastMessage: LastMessage
    hasUnreadMessages: boolean
    hasPriorityMessages: boolean
    type: number
    name?: string
}
