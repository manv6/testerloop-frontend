import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestRunAuthorFragment$key } from './__generated__/TestRunAuthorFragment.graphql';

type Props = {
    fragmentKey: TestRunAuthorFragment$key;
};

export const TestRunAuthor: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(
        graphql`
            fragment TestRunAuthorFragment on GitRevision {
                author {
                    name
                }
            }
        `,
        fragmentKey
    );

    return data.author.name ? <div>{data.author.name}</div> : <div>-</div>;
};

export default TestRunAuthor;
