import React, { useEffect, useState } from 'react';
import styles from './JobStatusDashboard.module.scss';

import { fetchDataFromS3, listFilesInFolder } from '../../utils/s3Data';
// leaving this here for testing purposes
// import { fetchDataFromFile, listFilesInFolder } from '../../utils/localData';

interface JobStatusProps {
    status: string;
    fileName: string;
    onClick: (fileName: string) => void;
}

const JobStatus: React.FC<JobStatusProps> = ({ status, fileName, onClick }) => {
    const jobClass = status === '0' ? styles.jobSuccess : styles.jobFailed;
    return (
        <button
            className={`${styles.jobButton} ${jobClass}`}
            onClick={() => onClick(fileName)}
            type="button"
        >
            {fileName}: {status === '0' ? 'Success' : 'Failed'}
        </button>
    );
};

interface Job {
    fileName: string;
    status: string;
}

const JobStatusDashboard: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    const loadJobs = async () => {
        const bucket = 'qa-orcd-cypress-tests';
        const prefix = 'job_status/'; // The folder within the bucket

        try {
            const fileKeys = await listFilesInFolder(bucket, prefix);
            // leaving this here for testing purposes
            // const fileKeys = await listFilesInFolder();
            const jobData = await Promise.all(
                fileKeys.map(async (key) => {
                    const status = await fetchDataFromS3(bucket, key);
                    // leaving this here for testing purposes
                    // const status = await fetchDataFromFile(key);
                    return { fileName: key, status: status.trim() };
                })
            );

            setJobs(jobData);
        } catch (error) {
            console.error('Failed to load job statuses:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadJobs();
        const intervalId = setInterval(loadJobs, 30000); // Poll every 10 seconds

        return () => clearInterval(intervalId);
    }, []);

    const handleJobClick = (fileName: string) => {
        console.log('Clicked:', fileName);
        window.open(
            `https://pipeline.theorchard.io/job/theorchard/job/${
                fileName.split('.')[0]
            }/job/master/`,
            '_blank'
        );
    };

    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <h1>CI/CD Job Status Dashboard</h1>
            {jobs.map((job) => (
                <JobStatus
                    key={job.fileName}
                    status={job.status}
                    fileName={job.fileName}
                    onClick={handleJobClick}
                />
            ))}
        </div>
    );
};

export default JobStatusDashboard;
