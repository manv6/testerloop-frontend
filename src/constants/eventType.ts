export enum EventType {
    STEP = 'step',
    NETWORK = 'network',
    ERROR = 'error',
}

export const MARKER_COLOURS: Record<EventType, string> = {
    [EventType.STEP]: '#F7C325',
    [EventType.NETWORK]: 'purple',
    [EventType.ERROR]: 'red',
};

export const FILTER_LABELS: Record<EventType, string> = {
    [EventType.STEP]: 'Step definitions',
    [EventType.NETWORK]: 'Network',
    [EventType.ERROR]: 'Error',
};
