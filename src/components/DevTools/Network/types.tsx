export interface HeaderEntryType {
    name: string;
    value: string;
}

export interface RequestType {
    headers: HeaderEntryType[];
    url: string;
    method: string;
    queryString: { name: string; value: string }[];
}

export interface ResponseType {
    status: number;
    content: {
        mimeType: string;
    };
    _transferSize?: number;
    bodySize?: number;
}

export interface EventType {
    id: string;
    startedDateTime: Date;
    endedDateTime: Date;
    request: RequestType;
    response: ResponseType;
}
