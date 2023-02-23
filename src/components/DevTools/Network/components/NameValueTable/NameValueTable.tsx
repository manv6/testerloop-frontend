import React from 'react';
import { FormattedNetworkEvents } from 'src/utils/formatters';

import styles from './NameValueTable.module.scss';

type Props = {
    valuePairs: FormattedNetworkEvents[0]['request']['queryString'];
    nameLabel: string;
    valueLabel: string;
};

const NameValueTable: React.FC<Props> = ({
    valuePairs,
    nameLabel,
    valueLabel,
}) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.th}>{nameLabel}</th>
                    <th className={styles.th}>{valueLabel}</th>
                </tr>
            </thead>
            <tbody>
                {valuePairs.map(({ name, value }, idx) => (
                    <tr className={styles.trBody} key={`${name}-${idx}`}>
                        <td className={styles.td}>{name}</td>
                        <td className={styles.td}>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NameValueTable;
