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
            <div className="container mt-10 w-min m-auto p-5 bg-gray-700/20 text-center rounded">
                <div className="output">
                    <input
                        className="border m-3 py-1 px-2"
                        type="text"
                        defaultValue={this.state.out}
                    />
                    <div className="buttons">
                        {store.buttons.map((item) =>
                            <button
                                className="font-bold m-1 py-2 px-4 rounded text-white bg-amber-500 hover:bg-amber-600/90">{item.val}</button>
                        )}
                    </div>
                </div>
            </div>
        )

    }
}

export default App;
