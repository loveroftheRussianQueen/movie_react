const initialState: Counter = {
    index: 0,
}

export interface Counter{
  index: number;
}
interface Action{
    type: string;
}

function firstReducer(state= initialState, action: Action) {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type) {
      case 'counter/incremented':
        return { ...state, index: state.index + 1 }
      case 'counter/decremented':
        return { ...state, index: state.index - 1 }
      case 'counter/end':
          return {...state, index: 0}
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }

export default firstReducer;