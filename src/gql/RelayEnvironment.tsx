import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createEnvironment } from './environment';

export const environment = createEnvironment();

export const RelayEnvironment: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <RelayEnvironmentProvider environment={environment}>
            {children}
        </RelayEnvironmentProvider>
    );
};
