import backend from "../apis/backend";


const fetchTodos = ()=> async (dispatch)=>{
    const response = await backend.get('/getall');

    dispatch({
        type:'Fetch_Todos',
        payload: response.data.data
    })
}

export default fetchTodos;