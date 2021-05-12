import './footer.css';
import React, { PureComponent } from 'react';

class Footer extends PureComponent{
    render()
    {
        return (
            <footer className="App-footer">
                <div>
                    Created by {this.props.appAuthor}
                </div>
            </footer>
        )
    }
}

export default Footer;