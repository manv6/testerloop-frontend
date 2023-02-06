import React from 'react';
import Table from 'react-bootstrap/Table';

import { NameValueType } from 'src/components/DevTools/Network/types';

const NameValueTable: React.FC<{
    valuePairs: NameValueType[];
    nameLabel: string;
    valueLabel: string;
}> = ({ valuePairs, nameLabel, valueLabel }) => {
    return (
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th>{nameLabel}</th>
                    <th>{valueLabel}</th>
                </tr>
            </thead>
            <tbody>
                {valuePairs.map(({ name, value }) => (
                    <tr>
                        <td>{name}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default NameValueTable;
