/**
 * @generated SignedSource<<0ad04eae5d86deda4773263bee299942>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type TimelineControlsFragment$data = {
    readonly networkEvents: ReadonlyArray<{
        readonly _initialPriority: string;
        readonly _initiator: string | null;
        readonly _initiator_column: number | null;
        readonly _initiator_detail: string;
        readonly _initiator_function_name: string | null;
        readonly _initiator_line: number | null;
        readonly _initiator_script_id: string | null;
        readonly _initiator_type: string;
        readonly _priority: string;
        readonly _requestId: string;
        readonly _requestTime: number;
        readonly _resourceType: string;
        readonly connection: string;
        readonly pageref: string;
        readonly request: {
            readonly bodySize: number;
            readonly cookies: ReadonlyArray<{
                readonly domain: string;
                readonly expires: string;
                readonly httpOnly: boolean;
                readonly name: string;
                readonly path: string;
                readonly secure: boolean;
                readonly value: string;
            }>;
            readonly headers: ReadonlyArray<{
                readonly name: string;
                readonly value: string;
            }>;
            readonly headersSize: number;
            readonly httpVersion: string;
            readonly method: string;
            readonly postData: {
                readonly mimeType: string;
                readonly text: string;
            } | null;
            readonly queryString: ReadonlyArray<{
                readonly name: string;
                readonly value: string;
            }>;
            readonly url: string;
        };
        readonly response: {
            readonly _transferSize: number;
            readonly bodySize: number;
            readonly content: {
                readonly compression: number | null;
                readonly mimeType: string;
                readonly size: number;
                readonly text: string;
            };
            readonly cookies: ReadonlyArray<{
                readonly domain: string;
                readonly expires: string;
                readonly httpOnly: boolean;
                readonly name: string;
                readonly path: string;
                readonly secure: boolean;
                readonly value: string;
            }>;
            readonly headers: ReadonlyArray<{
                readonly name: string;
                readonly value: string;
            }>;
            readonly headersSize: number;
            readonly httpVersion: string;
            readonly redirectURL: string;
            readonly status: number;
            readonly statusText: string;
        };
        readonly serverIPAddress: string;
        readonly startedDateTime: string;
        readonly time: number;
        readonly timings: {
            readonly _queued: number;
            readonly blocked: number;
            readonly connect: number;
            readonly dns: number;
            readonly receive: number;
            readonly send: number;
            readonly ssl: number;
            readonly wait: number;
        };
    }>;
    readonly steps: ReadonlyArray<{
        readonly options: {
            readonly _error: {
                readonly codeFrame: {
                    readonly absoluteFile: string;
                    readonly column: number;
                    readonly frame: string;
                    readonly language: string;
                    readonly line: number;
                    readonly originalFile: string;
                    readonly relativeFile: string;
                };
                readonly hasFailed: boolean | null;
                readonly isDefaultAssertionErr: boolean | null;
                readonly message: string;
                readonly name: string;
                readonly parsedStack: ReadonlyArray<{
                    readonly absoluteFile: string | null;
                    readonly column: number | null;
                    readonly fileUrl: string | null;
                    readonly function: string | null;
                    readonly line: number | null;
                    readonly message: string | null;
                    readonly originalFile: string | null;
                    readonly relativeFile: string | null;
                    readonly whitespace: string;
                }>;
                readonly stack: string;
            } | null;
            readonly aliasType: string | null;
            readonly commandLogId: string | null;
            readonly coords: {
                readonly left: number;
                readonly leftCenter: number;
                readonly top: number;
                readonly topCenter: number;
                readonly x: number;
                readonly y: number;
            } | null;
            readonly end: boolean | null;
            readonly ended: boolean;
            readonly err: {
                readonly codeFrame: {
                    readonly absoluteFile: string;
                    readonly column: number;
                    readonly frame: string;
                    readonly language: string;
                    readonly line: number;
                    readonly originalFile: string;
                    readonly relativeFile: string;
                };
                readonly hasFailed: boolean | null;
                readonly isDefaultAssertionErr: boolean | null;
                readonly message: string;
                readonly name: string;
                readonly parsedStack: ReadonlyArray<{
                    readonly absoluteFile: string | null;
                    readonly column: number | null;
                    readonly fileUrl: string | null;
                    readonly function: string | null;
                    readonly line: number | null;
                    readonly message: string | null;
                    readonly originalFile: string | null;
                    readonly relativeFile: string | null;
                    readonly whitespace: string;
                }>;
                readonly stack: string;
            } | null;
            readonly event: boolean;
            readonly group: string | null;
            readonly groupStart: boolean | null;
            readonly id: string;
            readonly instrument: string;
            readonly message: string;
            readonly name: string;
            readonly numRetries: number | null;
            readonly passed: boolean | null;
            readonly snapshot: boolean | null;
            readonly state: string;
            readonly timeout: number;
            readonly totalTime: number | null;
            readonly type: string;
            readonly url: string;
            readonly wallClockStartedAt: string;
        };
    }>;
    readonly ' $fragmentType': 'TimelineControlsFragment';
};
export type TimelineControlsFragment$key = {
    readonly ' $data'?: TimelineControlsFragment$data;
    readonly ' $fragmentSpreads': FragmentRefs<'TimelineControlsFragment'>;
};

const node: ReaderFragment = (function () {
    var v0 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'name',
            storageKey: null,
        },
        v1 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'message',
            storageKey: null,
        },
        v2 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'url',
            storageKey: null,
        },
        v3 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'originalFile',
            storageKey: null,
        },
        v4 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'relativeFile',
            storageKey: null,
        },
        v5 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'absoluteFile',
            storageKey: null,
        },
        v6 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'line',
            storageKey: null,
        },
        v7 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'column',
            storageKey: null,
        },
        v8 = [
            v0 /*: any*/,
            v1 /*: any*/,
            {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'isDefaultAssertionErr',
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                concreteType: 'ParsedStack',
                kind: 'LinkedField',
                name: 'parsedStack',
                plural: true,
                selections: [
                    v1 /*: any*/,
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'whitespace',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'function',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'fileUrl',
                        storageKey: null,
                    },
                    v3 /*: any*/,
                    v4 /*: any*/,
                    v5 /*: any*/,
                    v6 /*: any*/,
                    v7 /*: any*/,
                ],
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                concreteType: 'CodeFrame',
                kind: 'LinkedField',
                name: 'codeFrame',
                plural: false,
                selections: [
                    v6 /*: any*/,
                    v7 /*: any*/,
                    v3 /*: any*/,
                    v4 /*: any*/,
                    v5 /*: any*/,
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'frame',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'language',
                        storageKey: null,
                    },
                ],
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'hasFailed',
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'stack',
                storageKey: null,
            },
        ],
        v9 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'value',
            storageKey: null,
        },
        v10 = [v0 /*: any*/, v9 /*: any*/],
        v11 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'headersSize',
            storageKey: null,
        },
        v12 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'bodySize',
            storageKey: null,
        },
        v13 = {
            alias: null,
            args: null,
            concreteType: 'Cookie',
            kind: 'LinkedField',
            name: 'cookies',
            plural: true,
            selections: [
                v0 /*: any*/,
                v9 /*: any*/,
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'path',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'domain',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'expires',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'httpOnly',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'secure',
                    storageKey: null,
                },
            ],
            storageKey: null,
        },
        v14 = {
            alias: null,
            args: null,
            concreteType: 'NameValue',
            kind: 'LinkedField',
            name: 'headers',
            plural: true,
            selections: v10 /*: any*/,
            storageKey: null,
        },
        v15 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'httpVersion',
            storageKey: null,
        },
        v16 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'mimeType',
            storageKey: null,
        },
        v17 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'text',
            storageKey: null,
        };
    return {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'TimelineControlsFragment',
        selections: [
            {
                alias: null,
                args: null,
                concreteType: 'Step',
                kind: 'LinkedField',
                name: 'steps',
                plural: true,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: 'Options',
                        kind: 'LinkedField',
                        name: 'options',
                        plural: false,
                        selections: [
                            v0 /*: any*/,
                            v1 /*: any*/,
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'groupStart',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'type',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'timeout',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'event',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'id',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'state',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'instrument',
                                storageKey: null,
                            },
                            v2 /*: any*/,
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'wallClockStartedAt',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'ended',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'group',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'totalTime',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'aliasType',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: 'Coords',
                                kind: 'LinkedField',
                                name: 'coords',
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'top',
                                        storageKey: null,
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'left',
                                        storageKey: null,
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'topCenter',
                                        storageKey: null,
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'leftCenter',
                                        storageKey: null,
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'x',
                                        storageKey: null,
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'y',
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'end',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'snapshot',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'numRetries',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'passed',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'commandLogId',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: 'Error',
                                kind: 'LinkedField',
                                name: 'err',
                                plural: false,
                                selections: v8 /*: any*/,
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: 'Error',
                                kind: 'LinkedField',
                                name: '_error',
                                plural: false,
                                selections: v8 /*: any*/,
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                concreteType: 'NetworkEvent',
                kind: 'LinkedField',
                name: 'networkEvents',
                plural: true,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'startedDateTime',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_requestId',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_initialPriority',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_priority',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'pageref',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'time',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_initiator_detail',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_initiator_type',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_resourceType',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_initiator',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_initiator_line',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_initiator_column',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_initiator_function_name',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_initiator_script_id',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'connection',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'serverIPAddress',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: '_requestTime',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: 'Request',
                        kind: 'LinkedField',
                        name: 'request',
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'method',
                                storageKey: null,
                            },
                            v2 /*: any*/,
                            {
                                alias: null,
                                args: null,
                                concreteType: 'NameValue',
                                kind: 'LinkedField',
                                name: 'queryString',
                                plural: true,
                                selections: v10 /*: any*/,
                                storageKey: null,
                            },
                            v11 /*: any*/,
                            v12 /*: any*/,
                            v13 /*: any*/,
                            v14 /*: any*/,
                            v15 /*: any*/,
                            {
                                alias: null,
                                args: null,
                                concreteType: 'PostData',
                                kind: 'LinkedField',
                                name: 'postData',
                                plural: false,
                                selections: [v16 /*: any*/, v17 /*: any*/],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: 'Response',
                        kind: 'LinkedField',
                        name: 'response',
                        plural: false,
                        selections: [
                            v15 /*: any*/,
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'redirectURL',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'status',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'statusText',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: 'Content',
                                kind: 'LinkedField',
                                name: 'content',
                                plural: false,
                                selections: [
                                    v16 /*: any*/,
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'size',
                                        storageKey: null,
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'compression',
                                        storageKey: null,
                                    },
                                    v17 /*: any*/,
                                ],
                                storageKey: null,
                            },
                            v11 /*: any*/,
                            v12 /*: any*/,
                            v13 /*: any*/,
                            v14 /*: any*/,
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: '_transferSize',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: 'Timings',
                        kind: 'LinkedField',
                        name: 'timings',
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'blocked',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'dns',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'connect',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'send',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'wait',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'receive',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'ssl',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: '_queued',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                storageKey: null,
            },
        ],
        type: 'Query',
        abstractKey: null,
    };
})();

(node as any).hash = '5ad08059f77bfc751778e7851a333d38';

export default node;
