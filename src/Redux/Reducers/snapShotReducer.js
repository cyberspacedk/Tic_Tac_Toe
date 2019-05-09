const initialState = 0;

const snapShotReducer = (state=initialState,{type, payload})=> {
    switch(type){
        case "SWITCH_SNAPSHOT" :
            return payload;
            default : 
                return state;
    }
}

export default snapShotReducer;