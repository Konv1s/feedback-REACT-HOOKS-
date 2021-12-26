import React, {createContext, useState, useEffect} from 'react'
import FeedbackData from "../data/FeedbackData";
import {v4 as uuid4} from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
        fetchData().catch((e) => console.log(e.message));
    })

    const fetchData = async () => {
        const response = await fetch(`/feedback`)
        const data = await response.json();

        setFeedback(data);
        setLoading(false);
    }


    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        }).then(data => data.json())

        setFeedback([...feedback, response])
    }

    const deleteItem = async (id) => {
        if (window.confirm('Удалить?')) {
            await fetch(`/feedback/${id}`, {
                method: "DELETE",
            })
            setFeedback(feedback.filter(item => item.id !== id));
        }
    }

    const updateFeedback = async (id, updateItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateItem)
        }).then(data => data.json())


        setFeedback(feedback.map((item) => item.id === id ? {...item, response} : item));
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider
        value={{
            feedback, deleteItem, addFeedback, isLoading,
            editFeedback, feedbackEdit, updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;




