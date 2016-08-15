import React from 'react';
require('../css/top.css');
class Top extends React.Component{
    render() {
        return (
            <div className="top">
                <img className="banana" src="../image/logo-banana.png" />
                    <img className="runner" src="../image/runner.png"/>
            </div>
        )
    }
}
export default Top;