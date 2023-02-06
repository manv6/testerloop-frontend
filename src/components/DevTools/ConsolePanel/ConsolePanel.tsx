import React from 'react';
import logs from 'src/data/logs';
import { LogEntry } from './components';
import styles from './ConsolePanel.module.scss';


const ConsolePanel: React.FC = () => {
    return <ul className={styles.consolePanel}>{logs.map((log) => {
        // TODO: Timestamp is not unique, provide an id or a way to make it unique.
        return <LogEntry key={log.timestamp + log.message.substring(0, 50)} {...log} />;
    })}</ul>;
};

export default ConsolePanel;
