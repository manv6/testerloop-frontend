// TODO: Use globally defined types for this.
// Should we generate all types in a single folder?

// TODO: Update this with non-mock schema type
import { TimelineControlsFragment$data } from './mockTypes';
import type { NetworkPanelFragment$data } from 'src/components/DevTools/Network/__generated__/NetworkPanelFragment.graphql';
import { isOfType } from 'src/utils/isOfType';

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
export const formatNetworkEvents = (data: NetworkPanelFragment$data) =>
    data.searchedNetworkEvents.edges
        .map(({ node }) => node)
        .filter(isOfType('HttpNetworkEvent'))
        .map((evt) => {
            const time = {at: new Date(evt.time.at), until: new Date(evt.time.until)};
            return { ...evt, time};
        });
