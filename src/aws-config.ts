/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AWS from 'aws-sdk';

if (
    !process.env.REACT_APP_AWS_ACCESS_KEY_ID ||
    !process.env.REACT_APP_AWS_SECRET_ACCESS_KEY ||
    !process.env.REACT_APP_AWS_REGION
) {
    throw new Error('AWS configuration environment variables must be set');
}

const config = {
    region: process.env.REACT_APP_AWS_REGION!,
    credentials: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY!,
    },
};

AWS.config.update(config);

export const s3 = new AWS.S3();
