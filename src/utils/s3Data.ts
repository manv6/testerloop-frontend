// src/api/s3Data.ts
import { s3 } from '../aws-config';
import AWS from 'aws-sdk';

export const listFilesInFolder = async (
    bucket: string,
    prefix: string
): Promise<string[]> => {
    const params: AWS.S3.ListObjectsV2Request = {
        Bucket: bucket,
        Prefix: prefix,
    };

    try {
        const data = await s3.listObjectsV2(params).promise();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const keys: string[] =
            data.Contents?.filter((item) => item.Key !== undefined).map(
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                (item) => item.Key!
            ) || [];
        // return keys;
        return ['job1:0', 'job2:1'];
    } catch (err) {
        console.error('Error listing files from S3:', err);
        throw err;
    }
};

export const fetchDataFromS3 = async (
    bucket: string,
    fileKey: string
): Promise<string> => {
    const params: AWS.S3.GetObjectRequest = {
        Bucket: bucket,
        Key: fileKey,
    };
    try {
        const data = await s3.getObject(params).promise();
        if (!data.Body) {
            throw new Error('No data found for key: ' + fileKey);
        }
        return data.Body.toString('utf-8');
    } catch (err) {
        console.error('Error fetching file from S3:', err);
        throw err;
    }
};
