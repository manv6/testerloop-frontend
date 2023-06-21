import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { Tag } from 'src/components/common';
import { RunStatusFragment$key } from './__generated__/RunStatusFragment.graphql';

type Props = {
    fragmentKey: RunStatusFragment$key;
};

const RunStatus: React.FC<Props> = ({ fragmentKey }) => {
    const runStatus = useFragment(
        graphql`
            fragment RunStatusFragment on TestRun {
                executions {
                    totalCount
                    edges {
                        node {
                            at
                            events(
                                filter: {
                                    type: COMMAND
                                    commandFilter: { status: FAILED }
                                }
                            ) {
                                totalCount
                            }
                        }
                    }
                }
            }
        `,
        fragmentKey
    );

    const didAnyTestFail = runStatus.executions.edges.some(
        (edge) => edge.node.events.totalCount > 0
    );

    const tagType = didAnyTestFail ? 'error' : 'success';
    const tagText = didAnyTestFail ? 'Failed' : 'Passed';

    return <Tag tagType={tagType} text={tagText} />;
};

export default RunStatus;
