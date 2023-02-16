export interface LastMessage {
    id: string
    content: string
    user?: string
    userName?: string
    isUnread: boolean
    isDeleted: boolean
    sentDateTime: string
    webUrl: string
    messageType: string
    eventDetailDataType?: string
}
