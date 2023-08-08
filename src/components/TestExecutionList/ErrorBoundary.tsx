import React from 'react';

class ErrorBoundary extends React.Component<
    { children: React.ReactElement },
    { hasError: boolean }
> {
    constructor(props: { children: React.ReactElement }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: unknown) {
        return { hasError: true };
    }

    render() {
        console.log(this.state);
        if (this.state.hasError) {
            return (
                <tr>
                    <td>** TEST HAS MISSING OR INCOMPLETE LOG FILES. **</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
