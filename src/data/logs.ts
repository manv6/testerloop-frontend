const logs = [
    "[1675951723559] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1675951723566] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1675951723566] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1675951723576] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1675951723968] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.",
    "[1675951726060] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1675951726062] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1675951726062] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1675951726065] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1675951726231] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.",
    "[1675951728187] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1675951728188] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1675951728188] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1675951728190] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1675951728330] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.",
    "[1675951728990] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1675951728991] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1675951728991] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1675951728993] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1675951729023] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.",
    "[1675951736211] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1675951736211] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1675951736211] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1675951736213] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1675951736379] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.",
    "[1675951737004] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1675951737005] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1675951737005] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1675951737007] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1675951737119] console.warning called",
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
