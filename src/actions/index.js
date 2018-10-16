import axios from 'axios';

export const GET_PROPS = 'get_props'
export const GET_PROP = 'get_prop';

export const getProps = () => {
  return function(dispatch) {
    axios.get("http://dev.trueprodigyapi.com/appraisaldemo/propertytest/search")
      .then(res => {
        dispatch({ type: GET_PROPS, payload: res.data.results })
      })
      
  }
}

