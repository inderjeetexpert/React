export default {
	products: [],
	auth: {
		loggedIn : localStorage.getItem('loggedIn')==='true'?true:false,
		name : localStorage.getItem('name')||'Guest',
		busy:false
	},
	account:{
		user:{
			first_name:'',
			last_name:'',
			phone:'',
			email:''
		},
		cards:[],
		subscription:[]
	},
	addresses:[],
	signup:{
		selectedTab:'tab1',
		isIncompleteEmail : true,
		isIncompletePreferences : true,
		isIncompleteMeal : true,
		isUserFormComplete: false,
		userInfo:{
			email : '',
			postalCode : '',
			firstName : '',
			lastName : '',
			password : '',
			address : '',
			address2 : '',
			phone : '',
			city : '',
			province :'',
			deliveryInstruction:''
		}
	},
	twoPersonPlan:{
		busy:true,
		selectedSubscripton:{},
		subscriptions:[],
		selectedProducts:[],
		deliveryDate:null
	},
	familyPlan:{
		busy:true,
		selectedSubscripton:{},
		subscriptions:[],
		selectedProducts:[],
		deliveryDate:null
	},
	selectedSubscripton:{},
	selectedProducts:{},
	delivery:{},
	thisWeekTwoPersonProduct:[],
	thisWeekFamilyProduct:[],
	context:{
		currentProductSelectionContext:'TWO_PERSON_PLAN'
	}

}
