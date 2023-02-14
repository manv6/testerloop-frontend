import React from 'react';
import Table from 'react-bootstrap/Table';
import { FormattedNetworkEvents } from 'src/utils/formatters';

type Props = {
    valuePairs: FormattedNetworkEvents[0]['request']['queryString'];
    nameLabel: string;
    valueLabel: string;
};

const NameValueTable: React.FC<Props> = ({ valuePairs, nameLabel, valueLabel }) => {
    return (
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th>{nameLabel}</th>
                    <th>{valueLabel}</th>
                </tr>
            </thead>
            <tbody>
                {valuePairs.map(({ name, value }, idx) => (
                    <tr key={`${name}-${idx}`}>
                        <td>{name}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default NameValueTable;
