import React from "react";
import store from "./store";

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
                        {store.buttons.map((item) => {
                            return <button>{item.val}</button>
                        })}
                    </div>
                </div>
            </div>
        )

    }
}

export default App;
