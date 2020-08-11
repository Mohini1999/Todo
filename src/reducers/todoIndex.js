import { ADD_TODO, DELETE_TODO } from "../action/actionTypes";

const defaultState = [];

const todoIndex = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return [
                ...state,
                {
                "id" : id,
                "content": content,
                "completed": false
                }
            ];    
        }
        case DELETE_TODO: {
            // console.log("in delete todo")
            const id = action.payload;
            const newState = [...state];
            // console.log(newState);
            return newState.filter((n) => {
                if(n.id !== id){
                    return true;
                }
            });
        }
        default:
            return state;
        }
};
export default todoIndex;