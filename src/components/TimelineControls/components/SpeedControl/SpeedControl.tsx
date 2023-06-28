import { SelectChangeEvent, styled } from '@mui/material';
import React, { useState } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import styles from './SpeedControl.module.scss';
import { Select, MenuItem } from 'src/components/common';

const AVAILABLE_SPEEDS = [0.25, 0.5, 0.75, 1];

const StyledPrimarySvg = styled('svg')(({ theme }) => ({
    fill: theme.palette.status.success[300],
}));
const StyledWhiteSvg = styled('svg')(({ theme }) => ({
    fill: theme.palette.base[100],
}));

const ClockPath = () => (
    <>
        <path d="M11.2501 3.74957C11.0512 3.74953 10.8604 3.67048 10.7198 3.52982L8.46981 1.27982C8.33319 1.13837 8.2576 0.94892 8.25931 0.752272C8.26101 0.555624 8.33989 0.367515 8.47895 0.228459C8.618 0.0894029 8.80611 0.0105262 9.00276 0.00881741C9.19941 0.0071086 9.38886 0.0827044 9.53031 0.219323L11.7803 2.46932C11.8852 2.57421 11.9566 2.70783 11.9855 2.8533C12.0144 2.99876 11.9996 3.14954 11.9428 3.28656C11.8861 3.42359 11.79 3.54071 11.6667 3.62312C11.5433 3.70554 11.3984 3.74954 11.2501 3.74957Z" />
        <path d="M5.25 1.49951C4.21165 1.49951 3.19662 1.80742 2.33326 2.3843C1.4699 2.96117 0.796995 3.78111 0.399635 4.74042C0.00227478 5.69974 -0.101693 6.75534 0.10088 7.77374C0.303452 8.79214 0.803466 9.7276 1.53769 10.4618C2.27192 11.196 3.20738 11.6961 4.22578 11.8986C5.24418 12.1012 6.29978 11.9972 7.25909 11.5999C8.2184 11.2025 9.03834 10.5296 9.61522 9.66626C10.1921 8.8029 10.5 7.78786 10.5 6.74951C10.4984 5.35761 9.94478 4.02318 8.96056 3.03896C7.97634 2.05473 6.6419 1.5011 5.25 1.49951ZM6 6.74951C6 6.94842 5.92098 7.13919 5.78033 7.27984C5.63968 7.42049 5.44891 7.49951 5.25 7.49951C5.05109 7.49951 4.86032 7.42049 4.71967 7.27984C4.57902 7.13919 4.5 6.94842 4.5 6.74951V4.49951C4.5 4.3006 4.57902 4.10983 4.71967 3.96918C4.86032 3.82853 5.05109 3.74951 5.25 3.74951C5.44891 3.74951 5.63968 3.82853 5.78033 3.96918C5.92098 4.10983 6 4.3006 6 4.49951V6.74951Z" />
    </>
);

const SpeedControl: React.FC = () => {
    const { speed, setSpeed } = useTimeline();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.speedControl}>
            <label>
                {menuOpen ? (
                    <StyledPrimarySvg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ClockPath />
                    </StyledPrimarySvg>
                ) : (
                    <StyledWhiteSvg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ClockPath />
                    </StyledWhiteSvg>
                )}
                <Select
                    variant="standard"
                    value={speed.toString()}
                    onChange={(ev: SelectChangeEvent) =>
                        setSpeed(parseFloat(ev.target.value))
                    }
                    onOpen={() => setMenuOpen(true)}
                    onClose={() => setMenuOpen(false)}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                width: '102px',
                            },
                        },
                    }}
                    data-cy="speed-control"
                >
                    {AVAILABLE_SPEEDS.map((s, idx) => (
                        <MenuItem
                            key={`speed-${s}-${idx}`}
                            value={s}
                            data-cy={`speed-option-${s}`}
                        >
                            {s}x
                        </MenuItem>
                    ))}
                </Select>
            </label>
        </div>
    );
};

export default SpeedControl;
