/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AWS from 'aws-sdk';
const env = process.env;
console.log(env);
if (
    !env.REACT_APP_AWS_ACCESS_KEY_ID ||
    !env.REACT_APP_AWS_SECRET_ACCESS_KEY ||
    !env.REACT_APP_AWS_REGION
) {
    throw new Error('AWS configuration environment variables must be set');
}

const config = {
    region: env.REACT_APP_AWS_REGION!,
    credentials: {
        accessKeyId: env.REACT_APP_AWS_ACCESS_KEY_ID!,
        secretAccessKey: env.REACT_APP_AWS_SECRET_ACCESS_KEY!,
    },
};

AWS.config.update(config);

export const s3 = new AWS.S3();
