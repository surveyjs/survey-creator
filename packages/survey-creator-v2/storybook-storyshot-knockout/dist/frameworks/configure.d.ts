import { ClientApi } from './Loader';
import { StoryshotsOptions } from '../api/StoryshotsOptions';
export declare const getPreviewFile: (configDir: string) => string | false;
export declare const getMainFile: (configDir: string) => string | false;
declare function configure(options: {
    storybook: ClientApi;
} & StoryshotsOptions): void;
export default configure;
