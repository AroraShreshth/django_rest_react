import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';

//GET LEADS

export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data,
            });
        }).catch(err => console.log(err));
};

// DELETE LEAD


export const deleteLead = (id) => (dispatch) => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios
        .delete(`/api/leads/${id}/`)
        .then((res) => {
            dispatch(createMessage({ deleteLead: "Lead Deleted!" }))
            dispatch({
                type: DELETE_LEAD,
                payload: id,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// Add Leads Functional View

export const addLead = (lead) => (dispatch) => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios
        .post("/api/leads/", lead)
        .then((res) => {
            dispatch(createMessage({ AddLead: "Lead Added" }));
            dispatch({
                type: ADD_LEAD,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
