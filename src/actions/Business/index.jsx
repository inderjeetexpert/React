// const initialState = {
//   data: [],
// };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_USER_ROLES_SUCCESS:
//       const mappedUserRoles = action.result.results.map((userRole) => ({
//         value: `${userRole.Type}_${userRole.Id}`,
//         label: userRole.Name,
//         type: userRole.Type,
//         id: userRole.id,
//       }));
//     default:
//       return state;
//   }
// }

// export function getBusinessSearch() {
//   return {
//     types: [
//       GET_BUSINESS_SEARCH,
//       GET_BUSINESS_SEARCH_SUCCESS,
//       GET_BUSINESS_SEARCH_FAIL,
//     ],
//     promise: client => client.get('Users', {
//       gatewayType: 'getUserGroups',
//     }),
//     noLoader: true,
//   };
// }


