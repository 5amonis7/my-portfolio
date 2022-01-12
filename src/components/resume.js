import React from 'react'
import Card from './card'
import Jobs from './jobs';

const resume = () => {
    return (
        <div>
            <div className="resume-title">
                <h1>Resume:</h1>
            </div>
            <div className="resume-history">
                <div className="resume-skills">
                    <h2>Skills</h2>
                    <hr className="resume-line"/>
                    <p>HTML, CSS, JavaScript,</p>
                    <p>React, JQuery, SASS</p>
                </div>
                {Jobs.map(job => <Card key={job.id} title={job.title} company={job.company} length={job.length} placeholder={job.place} description={job.description} />)}
            </div>
        </div>
    )
}

export default resume
