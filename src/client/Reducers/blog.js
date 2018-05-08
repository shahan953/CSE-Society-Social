export default (state = {}, action) => {
    switch(action.type){
        case 'SET_BLOG':
            return state = {
                all: action.data,
                ...state
            }
            // state.all.push(action.data);
        // case 'SET_NEW_BLOG':
        //     return state.all ? state.all.push(action.data) : state = {
        //         all: [
        //             ...state.all,
        //             action.data
        //         ]
        //     }
        case 'SINGLE_BLOG':
            return state = {
                single: action.data,
                ...state
            }
        case 'ADD_COMMENT':
           state.single.comments.push(action.data);
           return state;

        case 'DEL' : {
            const pos = state.all.map((blg) => {
                return blg._id 
            }).indexOf(action.id);
            console.log(pos)
            const myBlg = state.all.filter((blg, index) => index !== pos);
            // console.log(myBlg);
            state.all = myBlg;
            // return state;
            // return state = {
            //     user: {
            //         blog: myBlg
            //     },
            //     ...state.token
            // }
            // console.log(state)
        }
        case 'GET_SINGLE': 
            // console.log(action.id)
            state.single = Object.values(state.all)[Object.values(state.all).map((blog) => blog._id).indexOf(action.id)]
        default:
            return state;
    }
}