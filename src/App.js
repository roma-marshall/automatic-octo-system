import React from "react";
import store from "./store";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            out: '0'
        }
    }

    render() {
        return (
            <div className="container">
                <div className="output">
                    <input
                        type="text"
                        defaultValue={this.state.out}
                    />
                    <div className="buttons">
                        {store.buttons.map((item) =>
                            <button
                                className="font-bold ml-3 py-2 px-4 rounded text-white bg-amber-500 hover:bg-amber-600/90">{item.val}</button>
                        )}
                    </div>
                </div>
            </div>
        )

    }
}

export default App;
