import constants from "@/constants"

const offline_filter = (state=constants.SHOW_ALL, action) => {
  switch (action.type) {
    case constants.TODO_FILTER:
      return action.filter
    default:
      return state
  }
}

export default offline_filter