import React from 'react';

const projects = () => {
  return <div className='project-tab'>
            <div className="projects">
                <h1 className="projects-title">Projects:</h1>
            </div>

            <div className="items">
                <div className="items-item">
                    <img src={require('./images/Ecommerce.png')} alt="Ecommerce" />

                    <p>What I have here is a simple e-commerce website that is functional and responsive. This is not a real world store but instead a practice site.</p>

                    <div>
                        <button><a rel='noreferrer' target="_blank" href="https://5amonis7.github.io/ecommerce/">Website</a></button>
                        <button><a rel='noreferrer' target="_blank" href="https://github.com/5amonis7/ecommerce">Github</a></button>
                    </div>

                </div>

                <div className="items-item">
                    <img src={require('./images/React App (1).png')} alt="password genie" />

                    <p>This is a password generator to be use everytime you need a new password. You can also choose to download the password in a text file so you do not forget it.</p>

                    <div>
                        <button><a rel='noreferrer' target="_blank" href="https://5amonis7.github.io/passwordgenie/">Website</a></button>
                        <button><a rel='noreferrer' target="_blank" href="https://github.com/5amonis7/passwordgenie">Github</a></button>
                    </div>

                </div>

                <div className="items-item empty">
                    <p>To Be<br /> Filled</p>
                </div>

            </div>

        </div>;
};

export default projects;
