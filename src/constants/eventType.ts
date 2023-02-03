export enum EventType {
    STEP = 'step',
    CYPRESS_ERROR = 'cypress_error',
    NETWORK_ERROR = 'network_error',
    NETWORK_SUCCESS = 'network_success'
}

export const MARKER_COLOURS: Record<EventType, string> = {
    [EventType.STEP]: '#F7C325',
    [EventType.CYPRESS_ERROR]: 'red',
    [EventType.NETWORK_ERROR]: 'salmon',
    [EventType.NETWORK_SUCCESS]: 'green'
};

export const FILTER_LABELS: Record<EventType, string> = {
    [EventType.STEP]: 'Step definitions',
    [EventType.CYPRESS_ERROR]: 'Cypress error',
    [EventType.NETWORK_ERROR]: 'Failed network',
    [EventType.NETWORK_SUCCESS]: 'Success network'
};
