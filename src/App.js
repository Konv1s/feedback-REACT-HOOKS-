import React from 'react';
import './App.css';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {

    return (
        <>
            <FeedbackProvider>
                <Router>
                    <Header bgBack='grey' text='Hello world'/>
                    <div className="container">

                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }/>
                            <Route path='/about' element={<AboutPage/>}/>

                        </Routes>
                        <AboutIconLink/>
                    </div>
                </Router>
            </FeedbackProvider>
        </>
    );
}

export default App;
