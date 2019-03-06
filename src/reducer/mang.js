var mang =  ['IOS','Android','Test'];
var mangReducer = (state = mang,action) =>{
	switch (action.type){
		case 'ADD_ITEM' :
			return [...state,action.item]
			break;
		case 'REMOVE_ITEM' :
			return state.filter((e,i) => i!=action.index)
			break;
		default:
			return state;
	}
}

module.exports = mangReducer;