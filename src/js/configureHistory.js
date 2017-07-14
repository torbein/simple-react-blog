import { syncHistoryWithStore } from 'react-router-redux'
import { createHistory, useBasename } from 'history'

export function congigureHistory(state) {
    return syncHistoryWithStore(
        useBasename(createHistory)({ basename: '/' }),
        state
    );
}