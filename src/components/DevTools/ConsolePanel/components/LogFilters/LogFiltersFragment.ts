import graphql from 'babel-plugin-relay/macro';

const LogFiltersFragment = graphql`
  fragment LogFiltersFragment on TestExecution
  @argumentDefinitions(logSearch: { type: "String", defaultValue: null })
  @refetchable(queryName: "LogFiltersFragmentRefetchQuery") {
    warnings: events(
      filter: {
        type: CONSOLE
        consoleFilter: { logSearch: $logSearch, logLevel: WARN }
      }
    ) {
      totalCount
    }
    errors: events(
      filter: {
        type: CONSOLE
        consoleFilter: { logSearch: $logSearch, logLevel: ERROR }
      }
    ) {
      totalCount
    }
    logs: events(
      filter: {
        type: CONSOLE
        consoleFilter: { logSearch: $logSearch, logLevel: LOG }
      }
    ) {
      totalCount
    }
  }
`;

export default LogFiltersFragment;
