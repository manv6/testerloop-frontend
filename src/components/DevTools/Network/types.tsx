
export interface NameValueType {
    name: string;
    value: string;
}

export interface RequestType {
    headers: NameValueType[];
    url: string;
    method: string;
    queryString: NameValueType[];
    postData?: { mimeType: string; text: string };
}

export interface ResponseType {
    status: number;
    content: {
        mimeType: string;
    };
    _transferSize?: number;
    bodySize?: number;
    headers: NameValueType[];
}

export interface EventType {
    id: string;
    startedDateTime: Date;
    endedDateTime: Date;
    request: RequestType;
    response: ResponseType;
    _initiator?: string;
    _initiator_line?: number| null;
}
