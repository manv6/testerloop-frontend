import React from 'react';
import { ChromeIcon } from 'src/components/Summary/components';

const TestRunBrowser: React.FC = () => (
    <div
        style={{ display: 'flex', alignItems: 'center' }}
        data-cy="test-run-browser"
    >
        <ChromeIcon />
        Chrome
    </div>
);

export default TestRunBrowser;
