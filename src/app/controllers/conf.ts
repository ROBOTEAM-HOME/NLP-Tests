export const PROVIDERS = {
    bing: false,
    wikipedia: true,
}

export interface SmalltalkResponseObject {
        'speech': string
        'displayText': string
        'messages': any[]
        'data': any
        'contextOut': any[]
        'source': string
        'followupEvent': any
    };

export interface FulfillmentMessage {
        'type': number
        'speech': string
    }