import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
            <div className="introduction">
                <div className="welcome">
                    <h1>DDUKDDAK-LEARNING</h1>
                    <h2>
                        Learn new technologies using real enviornments! 
                        <br />right in your browser
                    </h2>
                    <p>
                        Interactive Learning and Training Platform for Software Engineers
                        <br />Helping Developers Learn and Companies Increase Adoption
                    </p>
                </div>
                <div className="explain">
                    <div className="explainUnit">
                        <h3>
                            Learn & Discover the latest 
                            <br />technologies and tooling
                        </h3>
                        <p>
                            Empowering developers to learn the technologies 
                            such as Kubernetes, Machine Learning 
                            and cloud platforms using self-paced labs
                        </p>
                    </div>
                    <div className="explainUnit">
                        <h3>
                            Enable Users to Test Drive Your
                            <br />Products Within Seconds
                        </h3>
                        <p>
                            Create consistent branded experiences to
                            showcase your product directly from the browser 
                            without any downloads or configuration
                        </p>
                    </div>
                    <div className="explainUnit">
                        <h3>
                            Streamline Training and 
                            <br />Workshop Delivery
                        </h3>
                        <p>
                            Encourage users to gain a deeper understanding 
                            with on-demand and instructor-led training 
                            delivered via Katacoda
                        </p>
                    </div>
                    <div className="explainUnit">
                        <h3>
                            Self-Paced Interactive Learning 
                            <br />For Your Teams
                        </h3>
                        <p>
                            Share knowledge with customised content and 
                            labs to demonstrate internal tooling, 
                            patterns and practices
                        </p>
                    </div>
                </div>
                <div className="explainSubscribe">
                    <h2>
                        Subscribe  
                    </h2>
                    <h2>
                        6990원 / 월
                    </h2>
                </div>
            </div>
        );
    }
}

export default Introduction;