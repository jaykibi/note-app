import React from 'react';

class Nav extends React.Component {
    render() {
        const { toggleNote, showNote } = this.props

        return (
            <div className="nav-container"> 
                <div className="nav-logo">Kibo</div>
                <div className="nav-button" onClick={() => toggleNote()}>
                    { showNote ? 'cancel' : '+ note' }
                </div>
            </div>
        );
    }
}

export default Nav; 