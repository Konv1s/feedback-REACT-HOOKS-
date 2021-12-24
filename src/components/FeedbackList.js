import React, {useContext} from 'react';
import FeedbackItem from "./FeedbackItem";
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackContext from "../context/FeedbackContext";


function FeedbackList() {
    const {feedback} = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No feedback</p>;
    }

    return (
        <>
            <AnimatePresence>
                {feedback.map(item => (
                    <div key={item.id}>
                        <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}}
                                    exit={{opacity: 0}}>
                            <FeedbackItem key={item.id} item={item} />
                        </motion.div>
                    </div>
                ))}
            </AnimatePresence>
        </>
    )
}



export default FeedbackList;

