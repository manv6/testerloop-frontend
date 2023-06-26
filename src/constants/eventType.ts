export enum EventType {
    STEP = 'step',
    CYPRESS_ERROR = 'cypressError',
    NETWORK_ERROR = 'networkError',
    NETWORK_SUCCESS = 'networkSuccess',
}

export const FILTER_LABELS: Record<EventType, string> = {
    [EventType.STEP]: 'Steps',
    [EventType.CYPRESS_ERROR]: 'Cypress Error',
    [EventType.NETWORK_ERROR]: 'Failed network',
    [EventType.NETWORK_SUCCESS]: 'Success network',
};
