/**
 * @providesModule AppDrawerReducer
 */

import { combineReducers } from 'redux';
import { SHOW_FIXTURE } from 'AppActions';

const defaultState = {

    selectedFixture: {},
};

const appReducer = (state = defaultState, action) => {

    switch (action.type) {

        case SHOW_FIXTURE: {

            let fixture = {
                fixureID: action.fixureID,
                competitionId: action.competitionId,
                compeitionYear: action.compeitionYear,
            }

            return {
                ...state,
                selectedFixture: fixture,
            };
        }
        default:
            return state;
    }
}

const appReducers = combineReducers ({

    appReducer,
});

export default appReducers;