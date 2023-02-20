import rawSnapshots from './domSnapshots.generated';


const snapshots = rawSnapshots.map(({ timestamp, ...rest }) => {
    return {...rest, at: new Date(timestamp)}
}).sort((a, b) =>  a.at.getTime() - b.at.getTime() )

export default snapshots;
