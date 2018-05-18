export function authCheck(token){
  if (token) {
    return dispatch=>{
      axios.get(`${API_URL}/${datasetId}`)
        .then(response => response.data)
        .then(dataset => datasetToState(dataset))
        .then(dataset => dispatch(setDataset(dataset)))
        .catch(err => console.log(err))

    }
  }
}
