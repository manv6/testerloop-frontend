import React from 'react';
import { useTheme } from 'src/hooks/theme/useTheme';
import Button from 'src/components/common/Button';
import styles from './ThemeToggle.module.scss';

//TODO: use it when we have a color scheme defined for the light mode
const ThemeToggle: React.FC = () => {
    const { mode, setMode } = useTheme();
    const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark');
    return (
        <div className={styles.themeToggle}>
            <Button onClick={toggleMode}>{mode}</Button>
        </div>
    );
};

export default ThemeToggle;
