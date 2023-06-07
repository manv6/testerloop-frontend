import React from 'react';
import cx from 'classnames';
import styles from './StackTrace.module.scss';
import { useFragment } from 'react-relay';
import { StackTraceFragment$key } from './__generated__/StackTraceFragment.graphql';
import StackTraceFragment from './StackTraceFragment';

interface Props {
    fragmentKey: StackTraceFragment$key;
}

const StackTrace: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(StackTraceFragment, fragmentKey);
    const stackTrace = data.callFrames;
    return (
        <div className={cx(styles.stackTrace, styles.expanded)}>
            <table>
                <tbody>
                    {stackTrace.map((frame) => {
                        const url = frame.url;
                        const functionName = frame.functionName;
                        const lineNumber = frame.lineNumber;
                        return (
                            <tr key={frame.id}>
                                <td
                                    className={styles.functionName}
                                    title={functionName}
                                >
                                    {functionName}
                                </td>
                                <td className={styles.location} title={url}>
                                    {'@ '}
                                    {url.length > 40
                                        ? `${url.slice(0, 20)}...${url.slice(
                                              -17
                                          )}`
                                        : url}
                                    {` : ${lineNumber}`}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StackTrace;
