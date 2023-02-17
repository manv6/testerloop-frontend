/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs');
const path = require('node:path');
const jsdom = require('jsdom');

const escapeNonAsciiForXml = (textContent) => {
    // This encode unicode characters for xml/html
    // TODO: this implementation is possibly questionable

    return textContent.replace(
        // eslint-disable-next-line no-control-regex
        /[^\x00-\x7F]/gu,
        (value) => `&#${value.codePointAt()};`
    );
};

const processFiles = (dirname) => {
    const metadata = JSON.parse(
        fs.readFileSync(path.join(dirname, 'snapshot-metadata.json'))
    );

    const snapshots = metadata.map(
        ({ timestamp, command: { id: snapshotId } }) => {
            const filename = snapshotId.split('://')[1];

            const originalBody = fs.readFileSync(
                path.join(dirname, `${filename}.html`),
                { encoding: 'utf8', flag: 'r' }
            );

            const dom = new jsdom.JSDOM(originalBody);

            Array.from(
                dom.window.document.querySelectorAll('link[rel="stylesheet"]')
            ).forEach((elem) => {
                const cssBodyB64 = fs.readFileSync(
                    path.join(dirname, elem.href),
                    { encoding: 'base64', flag: 'r' }
                );
                elem.href = `data:text/plain;base64,${cssBodyB64}`;
            });

            return {
                timestamp,
                snapshotId,
                body: escapeNonAsciiForXml(
                    dom.window.document.documentElement.outerHTML
                ),
            };
        }
    );

    const targetPath = path.join(
        __dirname,
        '../src/data/domSnapshots.generated.ts'
    );

    fs.writeFileSync(
        targetPath,
        'export default ' + JSON.stringify(snapshots, null, 4)
    );
};

if (process.argv.length !== 3) {
    throw Error('We need the location of the snapshots as an extra argument');
}
console.log('Running....');
processFiles(process.argv[2]);
console.log('Done.');
