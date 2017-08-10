//for local run
const Config ={
	api:'http://localhost:3001/v1/',//replace live server url i.e. http://example.com/v1/ on live deployement
	baseUrl:'http://localhost:3000/',//replace with live server url on live deployement
	//TODO : need to delete below items when going live
	TwoPersonSubscriptonCategoryId:'5935d2057be9906d78623482',//important : this is cat id of schema.io categories
	FamilySubscriptonCategoryId:'5935d2267be9906d78623483',//important : this is cat id of schema.io categories
	ThisWeekTwoPersonCatId:'5954e293832eba580d25bec0',//important : this is cat id of schema.io categories
	ThisWeekFamilyCatId:'5954e2c6832eba580d25bec1',//important : this is cat id of schema.io categories
	DeliveryDay:5,//1=Monday//5=Friday
	PublicKey:'pk_khbx6Kk1hvWXLjWVXCNDVRb6YNsetgZt'
};

// const Subs = {
// 	P2 :{
// 		D2 : '5935cfd7df902ca02b2b7025',
// 		D3 : '5935d01b04b306da1fe7a394',
// 		D4 : '5935d06604b306da1fe7a39c'
// 	},
// 	F : {
// 		D2 : '5935d09c04b306da1fe7a39d',
// 		D3 : '5935d1537be9906d7862345f',
// 		D4 : '5935d1a77be9906d78623467'
// 	}
// }

export default Config;
