import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'
import { Map } from 'immutable'

export default function signupReducer(state=initialState.signup,action){
	switch(action.type){
		case TYPES.EMAIL_FILLED:
			state.userInfo.email=action.userInfo.email
			state.userInfo.postalCode=action.userInfo.postalCode
			return Map(state).set('isIncompleteEmail',false).toObject()
		case TYPES.INCOMPLETE_EMAIL:
			return Map(state).set('isIncompleteEmail',action.value).toObject()
		case TYPES.INCOMPLET_PREFERENCE:
			return Map(state).set('isIncompletePreferences',action.value).toObject()
		case TYPES.TAB_CHANGE :
			return Map(state).set('selectedTab',action.tabName).toObject()
		case TYPES.USER_FORM_COMPLETE :
			return Map(state).set('userInfo',action.userInfo).set('isUserFormComplete',true).toObject()
		default:
			return state
	}
}
