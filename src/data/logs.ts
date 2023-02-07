const logs = [
    "[1675783366865] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1675783366868] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1675783366869] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1675783366878] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1675783367302] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.",
    "[1675783368349] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack",
    "[1675783368352] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors_stable",
    "[1675783368352] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-common_vendors",
    "[1675783368354] console.warning called",
    "               Arguments: yui: NOT loaded: squarespace-performance",
    "[1675783368391] console.warning called",
    "               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."]

const TIMESTAMP_START_IDX = 1;
const TIMESTAMP_LENGTH = 13;
const LEVEL_START_IDX = TIMESTAMP_LENGTH + 2 + ' console.'.length;

export type LogLevel = 'log' | 'warning' | 'error';

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
