const logs = [
    '[1676903334127] console.warning called',
    '               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.',
    '[1676903334127] console.warning called',
    '               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.',
    '[1676903334339] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack',
    '[1676903334343] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-common_vendors_stable',
    '[1676903334344] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-common_vendors',
    '[1676903334359] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-performance',
    '[1676903334339] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack',
    '[1676903334343] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-common_vendors_stable',
    '[1676903334344] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-common_vendors',
    '[1676903334359] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-performance',
    '[1676903336396] console.warning called',
    '               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.',
    '[1676903336396] console.warning called',
    '               Arguments: SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.',
    '[1676903336580] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack',
    '[1676903336583] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-common_vendors_stable',
    '[1676903336583] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-common_vendors',
    '[1676903336586] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-performance',
    '[1676903336580] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-cldr_resource_pack',
    '[1676903336583] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-common_vendors_stable',
    '[1676903336583] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-common_vendors',
    '[1676903336586] console.warning called',
    '               Arguments: yui: NOT loaded: squarespace-performance',
];

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
};

const mappedLogs: LogRecord[] = [];

for (let i = 0; i < logs.length; i += 2) {
    const timeStamp = logs[i].substring(
        TIMESTAMP_START_IDX,
        TIMESTAMP_LENGTH + 1
    );
    const level = logs[i].substring(LEVEL_START_IDX).split(' ')[0] as LogLevel;

    mappedLogs.push({
        level,
        timestamp: parseInt(timeStamp),
        message: logs[i + 1].trim().substring('Arguments: '.length),
    });
}

export default mappedLogs;
