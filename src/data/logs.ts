const logs = ["[1676288339022] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1676288339025] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1676288339026] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1676288339032] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1676288339221] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.",
    "[1676288340834] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1676288340836] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1676288340836] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1676288340838] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1676288340862] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."
]

const TIMESTAMP_START_IDX = 1;
const TIMESTAMP_LENGTH = 13;
const LEVEL_START_IDX = TIMESTAMP_LENGTH + 2 + ' console.'.length;

export enum LogLevel {
    LOG = 'log',
    WARNING = 'warning',
    ERROR = 'error',
}

export type LogRecord = {
    level: LogLevel;
    timestamp: number;
    message: string;
}

const mappedLogs: LogRecord[] = [];

for (let i = 0; i < logs.length; i += 2) {
    const timeStamp = logs[i].substring(TIMESTAMP_START_IDX, TIMESTAMP_LENGTH + 1);
    const level = logs[i].substring(LEVEL_START_IDX).split(' ')[0] as LogLevel;

    mappedLogs.push({
        level,
        timestamp: parseInt(timeStamp),
        message: logs[i + 1].trim().substring('Arguments: '.length)
    })
}

export default mappedLogs;
