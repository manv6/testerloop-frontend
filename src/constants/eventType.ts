export enum EventType {
    STEP = 'step',
    CYPRESS_ERROR = 'cypress_error',
    NETWORK_ERROR = 'network_error',
    NETWORK_SUCCESS = 'network_success',
}

export const FILTER_LABELS: Record<EventType, string> = {
    [EventType.STEP]: 'Step definition',
    [EventType.CYPRESS_ERROR]: 'Error',
    [EventType.NETWORK_ERROR]: 'Failed network',
    [EventType.NETWORK_SUCCESS]: 'Success network',
};
