import React, { useState } from 'react'
import TutorialService from '../services/TutorialService';

//Adding the data into the API
const AddTutorial = () => {
    const initialTutorialState = {
        id: null,
        title: "",
        body: "",
        published: false,
    };
    const [tutorial, setTutorial] = useState(initialTutorialState);
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = event => {
        const { name, value } = event.target;
        //whenever something is change the name  and the value of that <tag/>, particular name will be stored in the name, value in value variable
        setTutorial({ ...tutorial, [name]: value });
        //then sari value state mai chali jaigi 
        console.log(tutorial)
    };

    const saveTutorial = () => {
        var data = {
            title: tutorial.title,             //value coming from state
            body: tutorial.body                //value coming from state
        };

        TutorialService.create(data)
            .then(response => {
                setTutorial({
                    id: response.data.id,
                    title: response.data.title,
                    body: response.data.body,
                    published: response.data.published
                });
                console.log(tutorial)
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const newTutorial = () => {
        setTutorial(initialTutorialState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newTutorial}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={tutorial.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="body">body</label>
                        <input
                            type="text"
                            className="form-control"
                            id="body"
                            required
                            value={tutorial.body}
                            onChange={handleInputChange}
                            name="body"
                        />
                    </div>

                    <button onClick={saveTutorial} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
}

export default AddTutorial