// TODO: Use globally defined types for this.
// Should we generate all types in a single folder?

// TODO: Update this with non-mock schema type
import { TimelineControlsFragment$data } from './mockTypes';

export type FormattedSteps = ReturnType<typeof formatSteps>;
export const formatSteps = (steps: TimelineControlsFragment$data['steps']) =>
    steps
        .map((step) => ({
            ...step,
            options: {
                ...step.options,
                wallClockStartedAt: new Date(
                    Date.parse(step.options.wallClockStartedAt)
                ),
            },
        }))
        .sort(
            (a, b) =>
                a.options.wallClockStartedAt.getTime() -
                b.options.wallClockStartedAt.getTime()
        );

export type FormattedNetworkEvents = ReturnType<typeof formatNetworkEvents>;
export const formatNetworkEvents = (
    events: TimelineControlsFragment$data['networkEvents']
) =>
    events
        .map((evt) => {
            const id = evt._requestId;
            const startedDateTime = new Date(Date.parse(evt.startedDateTime));
            const endedDateTime = new Date(
                startedDateTime.getTime() + evt.time
            );
            const timings = Object.fromEntries(
                Object.entries(evt.timings).map(([k, v]) => [
                    k,
                    new Date(startedDateTime.getTime() + v * 1000),
                ])
            );

            return { ...evt, id, startedDateTime, endedDateTime, timings };
        })
        .filter(
            (evt) =>
                !evt.request.url.includes('/__/') &&
                !evt.request.url.includes('/__cypress/')
        )
        .sort(
            (a, b) => a.startedDateTime.getTime() - b.startedDateTime.getTime()
        );
