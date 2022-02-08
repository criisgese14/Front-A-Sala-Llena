import axios from "axios"


export function orderScore(payload) {
    return {
        type: 'ORDER_SCORE',
        payload
    }
}

export function filterPerProvince(payload) {
    return {
        type: 'FILTER_PROVINCE',
        payload
    }
}

export function postShow(newShow){
    try {
        const show = axios.post("http://localhost:3001/shows",newShow);
        return {
            type: "POST_SHOW",
            payload: show
        }
    } catch (error) {
        console.log(error)
    }
}

export function allShows(){
    return function(dispatch){
        return axios.get('http://localhost:3001/shows')
            .then(response => response.data)
            .then(data =>{
                dispatch({type: 'GET_ALL_SHOWS', payload: data})
            })
    }
}

export function theaterDetail(id){
    return function(dispatch){
        return axios.get(`http://localhost:3001/theaters/${id}`)
            .then(response => response.data)
            .then(data =>{
                dispatch({type: 'THEATER_DETAIL', payload: data})
            })
    }
}
export function allTheaters() {
    return function(dispatch) {
        return axios.get('http://localhost:3001/theaters')
        .then(resp => resp.data)
        .then(data => {
            dispatch({
                type: 'GET_ALL_THEATERS',
                payload: data
            })
        })
    }
}

export function filterPerTheater(payload) {
    return {
        type: 'FILTER_THEATER',
        payload
    }
}

export function filterPerGenre(payload) {
    return {
        type: 'FILTER_GENRE',
        payload
    }
}

export function filterPerRated(payload) {
    return {
        type: 'FILTER_RATED',
        payload
    }
}

export function filterPerTicketsQty(payload) {
    return {
        type: 'FILTER_TICKETS_QTY',
        payload
    }
}
 
export function postViewer(newviewer) {
    try {
        const viewer = axios.post("http://localhost:3001/viewers",newviewer);
        return {
            type: "POST_VIEWER",
            payload: viewer
        }
    } catch (error) {
        
    }
}
export const ORDER_SCORE = "ORDER_SCORE";

export function postTicket(newticket) {
    try {
        const tickets = axios.post("http://localhost:3001/tickets",newticket);
        return {
            type: "POST_TICKET",
            payload: tickets
        }
    } catch (error) {
        
    }
}

export function showDetail(id) {
    return function(dispatch){
        return axios.get(`http://localhost:3001/shows/${id}`)
            .then(response => response.data)
            .then(data =>{
                dispatch({type: 'SHOW_DETAIL', payload: data})
            })
    }
}



export function getViewerDetail(id){
    return function (dispatch){
        return axios.get (`http://localhost:3001/viewers/${id}`)
            .then(response => response.data)
            .then((data) => {
                dispatch({type: GET_VIEWER_DETAIL, payload: data})
            })
    }
}

//export function loginTheater ({ email, password }) {
//    console.log(email)
//    return fetch('http://localhost:3001/login/theater', {
//      method: 'POST',
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify({email, password})
//      
//    }).then(res => {
//      if (!res.ok) throw new Error('Response is NOT ok')
//      return res.json()
//    }).then(res => {
//      const { jwt } = res
//      return jwt
//    })
//  }

export function loginTheater ({ email, password }) {
    console.log(email)
    return axios.post('http://localhost:3001/login/theater', {email,password})
      
    //.then(res => {
    //  if (!res.ok) throw new Error('Response is NOT ok')
    //  return res.json()
    //})
    .then(res => {
      const { jwt } = res
      return jwt
    })
    .catch(error => console.log(error))
  }


export function putViewer(id, actviewere){
    return function (dispatch){
        return axios.put (`http://localhost:3001/viewers/${id}`, actviewere )
            .then(response => response.data)
            .then((data) => {
                console.log(data)
                dispatch({type: PUT_VIEWER, payload: data})
            })
    }
}

export function getAllViewers(){
    return function (dispatch){
        return axios.get('http://localhost:3001/viewers')
            .then(response => response.data)
            .then((data)=>{
                dispatch({type: GET_ALL_ViEWERS, payload: data})
            })
    }
}

export function deleteViewer(id){
    return function (dispatch){
        return axios.delete(`http://localhost:3001/viewers/${id}`)
            .then(response => response.data)
            .then((data)=>{
                dispatch({type: DELETE_VIEWER, payload: data})
            })
    }
}

//export function loginViewer ({ email, password }) {
//    console.log(email)
//    return fetch('http://localhost:3001/login/viewer', {
//      method: 'POST',
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify({email, password})
//      
//    }).then(res => {
//      if (!res.ok) throw new Error('Response is NOT ok')
//      return res.json()
//    }).then(res => {
//      const { jwt } = res
//      return jwt
//    })
//  }

export function loginViewer ({ email, password }) {
    console.log(email)
    return axios.post('http://localhost:3001/login/viewer', {email,password})
      
    //.then(res => {
    //  if (!res.ok) throw new Error('Response is NOT ok')
    //  return res.json()
    //})
    .then(res => {
      const { jwt } = res
      return jwt
    })
    .catch(error => console.log(error))
  }

  export function getShowByName(name) {
    return async function (dispatch){
        try {
            var resp = await axios.get (`http://localhost:3001/shows?name=${name}`);
            return dispatch({
                type: GET_SHOW_BY_NAME,
                payload: resp.data
            })
        } catch (e) {
            alert('This Show does not exist');
            return console.log(e);
        }

    }
}


export const ORDER_PRICE = "ORDER_PRICE";
export const FILTER_PROVINCE = "FILTER_PROVINCE";
export const POST_SHOW = "POST_SHOW";
export const GET_ALL_SHOWS = "GET_ALL_SHOWS";
export const GET_ALL_THEATERS = "GET_ALL_THEATERS";
export const FILTER_THEATER = "FILTER_THEATER";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_RATED = "FILTER_RATED";
export const FILTER_TICKETS_QTY = "FILTER_TICKETS_QTY";
export const POST_VIEWER = "POST_VIEWER";
export const POST_TICKET = "POST_TICKET";
export const SHOW_DETAIL = "SHOW_DETAIL";
export const THEATER_DETAIL = "THEATER_DETAIL";
export const GET_VIEWER_DETAIL = "GET_VIEWER_DETAIL";
export const PUT_VIEWER = "PUT_VIEWER";
export const GET_ALL_ViEWERS = 'GET_ALL_ViEWERS';
export const GET_SHOW_BY_NAME = 'GET_SHOW_BY_NAME';
export const DELETE_VIEWER= 'DELETE_VIEWER'