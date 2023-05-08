export enum EventType {
    STEP = 'step',
    CYPRESS_ERROR = 'cypressError',
    NETWORK_ERROR = 'networkError',
    NETWORK_SUCCESS = 'networkSuccess',
}

export const FILTER_LABELS: Record<EventType, string> = {
    [EventType.STEP]: 'Step definition',
    [EventType.CYPRESS_ERROR]: 'Error',
    [EventType.NETWORK_ERROR]: 'Failed network',
    [EventType.NETWORK_SUCCESS]: 'Success network',
};
