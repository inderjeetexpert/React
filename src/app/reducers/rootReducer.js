import {combineReducers} from 'redux'
import products from './productReducer'
import auth from './authReducer'
import signup from './signupReducer'
import twoPersonPlan from './twoPersonPlanReducer'
import familyPlan from './familyPlanReducer'
import selectedSubscription from './selectedSubscriptionReducer'
import thisWeekTwoPersonProduct from './thisWeekTwoPersonProductReducer'
import thisWeekFamilyProduct from './thisWeekFamilyProductReducer'
import selectedProducts from './selectedProductsReducer'
import context from './stateReducer'
import addresses from './addressReducer'
import account from './accountReducer'
import delivery from './deliveryReducer'

const rootReducer = combineReducers({
	auth,
	context,
	products,
	signup,
	twoPersonPlan,
	familyPlan,
	selectedSubscription,
	thisWeekTwoPersonProduct,
	thisWeekFamilyProduct,
	selectedProducts,
	addresses,
	account,
	delivery
})

export default rootReducer
