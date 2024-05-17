/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo, useEffect } from 'react';
import styles from './JobStatusDashboard.module.scss';
import { useRelayEnvironment, fetchQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import { formatDistanceToNow, parseISO } from 'date-fns';

interface JobStatusProps {
    status: string;
    fileName: string;
    lastRun: string;
    onClick: (fileName: string) => void;
}

// eslint-disable-next-line react/display-name
const JobStatus: React.FC<JobStatusProps> = React.memo(
    ({ status, fileName, lastRun, onClick }) => {
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

        const formattedLastRun = formatDistanceToNow(parseISO(lastRun), {
            addSuffix: true,
        });

        return (
            <button
                className={`${styles.jobButton} ${jobClass}`}
                onClick={() => onClick(fileName)}
                type="button"
            >
                {fileName}: {jobStatusLabel}
                <br></br>
                <br></br>Last Run: {formattedLastRun}
            </button>
        );
    }
);

export const JobStatusDashboard: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [sortBy, setSortBy] = useState<'fileName' | 'lastRun' | 'status'>(
        'status'
    );
    const [data, setData] = useState<any>(null);
    const environment = useRelayEnvironment();

    const QUERY = graphql`
        query JobStatusDashboardQuery {
            getAllStatuses {
                fileName
                status
                lastRun
            }
        }
    `;

    const fetchData = async () => {
        const fetchedData = await fetchQuery(
            environment,
            QUERY,
            {}
        ).toPromise();
        setData(fetchedData);
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 15000); // Poll every 60 seconds

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [environment]);

    const handleJobClick = (fileName: string) => {
        console.log('Clicked:', fileName);
        window.open(
            `https://pipeline.theorchard.io/job/theorchard/job/${
                fileName.split('.')[0]
            }/job/master/`,
            '_blank'
        );
    };

    const filteredAndSortedJobs = useMemo(() => {
        if (!data) return [];

        const filteredJobs = data.getAllStatuses.filter(
            (job: { fileName: string; status: string }) =>
                (filter === 'all' ||
                    (filter === 'running' && job.status === 'R') ||
                    (filter === 'success' && job.status === '0') ||
                    (filter === 'failed' && job.status === '1')) &&
                job.fileName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filteredJobs.sort(
            (
                a: { fileName: string; lastRun: string; status: string },
                b: { fileName: string; lastRun: string; status: string }
            ) => {
                const modifier = sortDirection === 'asc' ? 1 : -1;
                if (sortBy === 'fileName') {
                    return a.fileName.localeCompare(b.fileName) * modifier;
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                } else if (sortBy === 'lastRun') {
                    const dateA = parseISO(a.lastRun);
                    const dateB = parseISO(b.lastRun);
                    return (dateA.getTime() - dateB.getTime()) * modifier;
                } else {
                    return a.status.localeCompare(b.status) * modifier;
                }
            }
        );
    }, [data, filter, searchTerm, sortDirection, sortBy]);

    return (
        <div>
            <h1>CI/CD Job Status Dashboard</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search by job name"
                    className={styles.searchClass}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className={`${styles.filterClass} ${
                        filter === 'all' ? styles.selectedFilter : ''
                    }`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={`${styles.filterClass} ${
                        filter === 'success' ? styles.selectedFilter : ''
                    }`}
                    onClick={() => setFilter('success')}
                >
                    Success
                </button>
                <button
                    className={`${styles.filterClass} ${
                        filter === 'failed' ? styles.selectedFilter : ''
                    }`}
                    onClick={() => setFilter('failed')}
                >
                    Failed
                </button>
                <button
                    className={`${styles.filterClass} ${
                        filter === 'running' ? styles.selectedFilter : ''
                    }`}
                    onClick={() => setFilter('running')}
                >
                    Running
                </button>
                <button
                    className={`${styles.filterClass} ${
                        sortDirection === 'asc' ? styles.selectedSort : ''
                    }`}
                    onClick={() => setSortDirection('asc')}
                >
                    Sort Asc
                </button>
                <button
                    className={`${styles.filterClass} ${
                        sortDirection === 'desc' ? styles.selectedSort : ''
                    }`}
                    onClick={() => setSortDirection('desc')}
                >
                    Sort Desc
                </button>
                <button
                    className={`${styles.filterClass} ${
                        sortBy === 'fileName' ? styles.selectedSort : ''
                    }`}
                    onClick={() => setSortBy('fileName')}
                >
                    Sort by File Name
                </button>
                <button
                    className={`${styles.filterClass} ${
                        sortBy === 'lastRun' ? styles.selectedSort : ''
                    }`}
                    onClick={() => setSortBy('lastRun')}
                >
                    Sort by Last Run
                </button>
                <button
                    className={`${styles.filterClass} ${
                        sortBy === 'status' ? styles.selectedSort : ''
                    }`}
                    onClick={() => setSortBy('status')}
                >
                    Sort by Status
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
