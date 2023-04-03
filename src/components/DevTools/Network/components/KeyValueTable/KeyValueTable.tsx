import React from 'react';

import styles from './KeyValueTable.module.scss';

type Props = {
    valuePairs: readonly { readonly key: string; readonly value: string }[];
    keyLabel?: string;
    valueLabel?: string;
};

const KeyValueTable: React.FC<Props> = ({
    valuePairs,
    keyLabel = 'Name',
    valueLabel = 'Value',
}) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.th}>{keyLabel}</th>
                    <th className={styles.th}>{valueLabel}</th>
                </tr>
            </thead>
            <tbody>
                {valuePairs.map(({ key, value }, idx) => (
                    <tr className={styles.trBody} key={`${key}-${idx}`}>
                        <td className={styles.td}>{key}</td>
                        <td className={styles.td}>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default KeyValueTable;
