import React from 'react';

import { NameValueType } from 'src/components/DevTools/Network/types';
import styles from './NameValueTable.module.scss';

const NameValueTable: React.FC<{
    valuePairs: NameValueType[];
    nameLabel: string;
    valueLabel: string;
}> = ({ valuePairs, nameLabel, valueLabel }) => {
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
