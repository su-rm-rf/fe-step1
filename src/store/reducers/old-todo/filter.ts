import constants from "@/constants"

const filter = (state=constants.SHOW_ALL, action) => {
  switch (action.type) {
    case constants.TODO_FILTER_START:
      return action.filter
    default:
      return state
  }
}

export default filter