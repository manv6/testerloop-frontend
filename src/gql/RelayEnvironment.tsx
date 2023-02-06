import React, { useMemo } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createEnvironment } from './environment';

export const RelayEnvironment: React.FC<React.PropsWithChildren> = ({ children }) => {
    const env = useMemo(() => createEnvironment(), []);
    return (
        <RelayEnvironmentProvider environment={env}>
            { children }
        </RelayEnvironmentProvider>
    );
};
