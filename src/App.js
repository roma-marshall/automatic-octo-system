import React from "react";

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <div className="output">
                    <input
                        type="text"
                        defaultValue="0"
                    />
                    <div className="buttons">
                        <button>1</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default App;
