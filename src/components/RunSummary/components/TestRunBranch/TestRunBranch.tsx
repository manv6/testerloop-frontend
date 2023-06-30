import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestRunBranchFragment$key } from './__generated__/TestRunBranchFragment.graphql';
import { styled } from '@mui/material';

type Props = {
    fragmentKey: TestRunBranchFragment$key;
};

const StyledLink = styled('a')(({ theme }) => ({
    color: theme.palette.status.success[200],
}));

const TestRunBranch: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(
        graphql`
            fragment TestRunBranchFragment on GitHubRevision {
                branch {
                    name
                    url
                }
            }
        `,
        fragmentKey
    );

    return (
        <StyledLink
            target="_blank"
            rel="noreferrer"
            href={data.branch?.url}
            data-cy="test-run-branch"
        >
            {data.branch?.name}
        </StyledLink>
    );
};

export default TestRunBranch;
