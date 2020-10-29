import 'jest-specific-snapshot';
import { RenderTree } from './frameworks/Loader';
import { Stories2SnapsConverter } from './Stories2SnapsConverter';
export declare const snapshotWithOptions: (options?: {
    renderer?: any;
    serializer?: any;
} | Function) => ({ story, context, renderTree, snapshotFileName, }: {
    story: any;
    context: any;
    renderTree: RenderTree;
    snapshotFileName: string;
}) => Promise<void> | void;
export declare const multiSnapshotWithOptions: (options?: {}) => ({ story, context, renderTree, stories2snapsConverter, }: {
    story: any;
    context: any;
    renderTree: RenderTree;
    stories2snapsConverter: Stories2SnapsConverter;
}) => void | Promise<void>;
export declare function shallowSnapshot({ story, context, renderShallowTree, options, }: {
    story: any;
    context: any;
    renderShallowTree: RenderTree;
    options: any;
}): void;
export declare const renderWithOptions: (options?: {}) => ({ story, context, renderTree, }: {
    story: any;
    context: any;
    renderTree: RenderTree;
}) => any;
export declare const renderOnly: ({ story, context, renderTree, }: {
    story: any;
    context: any;
    renderTree: RenderTree;
}) => any;
export declare const snapshot: ({ story, context, renderTree, snapshotFileName, }: {
    story: any;
    context: any;
    renderTree: RenderTree;
    snapshotFileName: string;
}) => Promise<void> | void;
