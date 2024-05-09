/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo } from 'react';
import styles from './JobStatusDashboard.module.scss';
import { useLazyLoadQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

interface JobStatusProps {
    status: string;
    fileName: string;
    lastRun: string;
    onClick: (fileName: string) => void;
}

const JobStatus: React.FC<JobStatusProps> = ({
    status,
    fileName,
    lastRun,
    onClick,
}) => {
    let jobClass;
    let jobStatusLabel;
    switch (status) {
        case '0':
            jobClass = styles.jobSuccess;
            jobStatusLabel = 'Success';
            break;
        case '1':
            jobClass = styles.jobFailed;
            jobStatusLabel = 'Failed';
            break;
        case 'R':
            jobClass = styles.jobRunning;
            jobStatusLabel = 'Running';
            break;
        default:
            jobClass = styles.jobDefault;
            jobStatusLabel = 'Unknown';
            break;
    }

    return (
        <button
            className={`${styles.jobButton} ${jobClass}`}
            onClick={() => onClick(fileName)}
            type="button"
        >
            {fileName}: {jobStatusLabel}
            <br></br>
            <br></br>Last Run: {lastRun}
        </button>
    );
};

const JobStatusDashboard: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [sortDirection, setSortDirection] = useState('asc');
    const data: any = useLazyLoadQuery(
        graphql`
            query JobStatusDashboardQuery {
                getAllStatuses {
                    fileName
                    status
                    lastRun
                }
            }
        `,
        { fetchPolicy: 'store-or-network' }
    );

    const handleJobClick = (fileName: string) => {
        console.log('Clicked:', fileName);
        window.open(
            `https://pipeline.theorchard.io/job/theorchard/job/${
                fileName.split('.')[0]
            }/job/master/`,
            '_blank'
        );
    };

    if (!data.getAllStatuses) return <div>Loading...</div>;

    // Use useMemo to optimize recalculations only when needed
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const filteredAndSortedJobs = useMemo(() => {
        const filteredJobs = data.getAllStatuses.filter(
            (job: { fileName: string; status: string }) =>
                (filter === 'all' ||
                    (filter === 'running' && job.status === 'R') ||
                    (filter === 'success' && job.status === '0') ||
                    (filter === 'failed' && job.status === '1')) &&
                job.fileName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filteredJobs.sort((a: any, b: any) => {
            const modifier = sortDirection === 'asc' ? 1 : -1;
            return a.fileName.localeCompare(b.fileName) * modifier;
        });
    }, [data, filter, searchTerm, sortDirection]);

    return (
        <div>
            <h1>CI/CD Job Status Dashboard</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search by file name"
                    className={` ${styles.filterClass}`}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className={` ${styles.filterClass}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={` ${styles.filterClass}`}
                    onClick={() => setFilter('success')}
                >
                    Success
                </button>
                <button
                    className={` ${styles.filterClass}`}
                    onClick={() => setFilter('failed')}
                >
                    Failed
                </button>
                <button
                    className={` ${styles.filterClass}`}
                    onClick={() => setFilter('running')}
                >
                    Running
                </button>
                <button
                    className={` ${styles.filterClass}`}
                    onClick={() => setSortDirection('asc')}
                >
                    Sort Asc
                </button>
                <button
                    className={` ${styles.filterClass}`}
                    onClick={() => setSortDirection('desc')}
                >
                    Sort Desc
                </button>
            </div>
            <div className="jobDashboardContainer">
                {filteredAndSortedJobs.map(
                    (job: {
                        fileName: string;
                        status: string;
                        lastRun: string;
                    }) => (
                        <JobStatus
                            key={job.fileName + job.status + job.lastRun}
                            status={job.status}
                            fileName={job.fileName}
                            lastRun={job.lastRun}
                            onClick={handleJobClick}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default JobStatusDashboard;
