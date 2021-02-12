export interface Stories2SnapsConverterOptions {
    storiesExtensions: string[];
    snapshotExtension: string;
    snapshotsDirName: string;
}
export declare class Stories2SnapsConverter {
    options: Stories2SnapsConverterOptions;
    constructor(options?: Partial<Stories2SnapsConverterOptions>);
    getSnapshotExtension: () => string;
    getStoryshotFile(fileName: string): string;
    getSnapshotFileName(context: {
        fileName?: string;
        kind: any;
    }): string;
    getPossibleStoriesFiles(storyshotFile: string): string[];
}
