import constants from "@/constants"
import utils from "@/utils"

const todo = (state=[], action) => {
  let newState = []
  switch (action.type) {
    case constants.TODO_GET_SUCCESS:
    case constants.TODO_FILTER_SUCCESS:
      return action.data
    default:
      return state
  }
}

export default todo