interface Props {
    className?: string;
}

const BlankAvatar: React.FC<Props> = ({className}) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="grey" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>;

export default BlankAvatar;
