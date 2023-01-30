import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    resolve: {
        alias: {
            src: path.resolve('./src')
        }
    }
};

export default config;
