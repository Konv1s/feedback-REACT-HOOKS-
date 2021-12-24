import React, {createContext, useState} from 'react'
import FeedbackData from "../data/FeedbackData";
import {v4 as uuid4} from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid4();
        setFeedback([...feedback, newFeedback])
    }

    const deleteItem = (id) => {
        if (window.confirm('Удалить?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    }

    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updateItem} : item));
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider
        value={{
            feedback, deleteItem, addFeedback,
            editFeedback, feedbackEdit, updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;




