/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AWS from 'aws-sdk';

if (
    !process.env.AWS_ACCESS_KEY_ID ||
    !process.env.AWS_SECRET_ACCESS_KEY ||
    !process.env.AWS_REGION
) {
    throw new Error('AWS configuration environment variables must be set');
}

const config = {
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.RAWS_SECRET_ACCESS_KEY!,
    },
};

AWS.config.update(config);

export const s3 = new AWS.S3();
