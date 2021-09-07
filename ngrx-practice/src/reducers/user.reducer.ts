import { Action } from '@ngrx/store'
import { USER } from './../models/user.model'
import * as UserAction from './../actions/user.action'

const initialState: USER = {
    _id: Math.random().toString(),
    name: 'Initial Tutorial',
    email: 'http://google.com'
}

export function reducer(state: USER[] = [initialState], action: UserAction.Actions) {

    switch (action.type) {
        case UserAction.ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}