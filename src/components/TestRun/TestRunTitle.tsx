import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestRunTitleFragment$key } from './__generated__/TestRunTitleFragment.graphql';

type Props = {
    testRunKey: TestRunTitleFragment$key;
};

const TestRunTitle: React.FC<Props> = ({ testRunKey }) => {
    const testRun = useFragment(
        graphql`
            fragment TestRunTitleFragment on TestRun {
                id
            }
        `,
        testRunKey
    );

    return <>{window.atob(testRun.id).split('/')[1]}</>;
};

export default TestRunTitle;
