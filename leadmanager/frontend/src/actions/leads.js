import axios from 'axios';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

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

            dispatch({
                type: DELETE_LEAD,
                payload: id,
            });
        })
        .catch((err) => console.log(err));
};

// Add Leads Functional View

export const addLead = (lead) => (dispatch) => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios
        .post("/api/leads/", lead)
        .then((res) => {

            dispatch({
                type: ADD_LEAD,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
