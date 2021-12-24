import React, {useContext} from 'react';
import Card from "./shared/Card";
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem({item}) {
    const {deleteItem, editFeedback} = useContext(FeedbackContext);

    return (
        <>
            <Card reverse={false}>
                <div className="num-display">{item.rating}</div>
                <button onClick={() => deleteItem(item.id)} className='close'>
                    <FaTimes color='purple' size={24} />
                </button>
                <button onClick={() => editFeedback(item)} className='edit'>
                    <FaEdit color='purple' />
                </button>
                <div className="text-display">{item.text}</div>
            </Card>
        </>
    )
}



export default FeedbackItem;