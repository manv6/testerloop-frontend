import cicd from 'src/data/cicd';
import results from 'src/data/results';

const getFrameworkErrorInfo = () => {
    const githubUrl = cicd.GITHUB_SERVER_URL;
    const repository = cicd.GITHUB_REPOSITORY;
    const ref = cicd.GITHUB_REF_NAME;

    const errorObj = results.runs[0].tests[0].attempts[0];
    const error = errorObj.error;

    const relativePath = error.codeFrame.relativeFile;
    const line = error.codeFrame.line;
    const column = error.codeFrame.column;

    const url = [
        githubUrl,
        repository,
        'blob',
        ref,
        relativePath,
        `?#L${line}`,
    ].join('/');

    const text = [relativePath, line, column].join(':');

    return { url, text };
};

export default getFrameworkErrorInfo;
