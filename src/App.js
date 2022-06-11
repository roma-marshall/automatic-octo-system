import React from "react";
import store from "./store";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            out: '0'
        }
        this.refOutput = React.createRef()
    }

    tapeNumber(value) {
        let currentValue = value
        let output = this.refOutput.current
        this.setState({
            out: currentValue
        })
        output.value = currentValue;
    }

    render() {
        return (
            <div className="container mt-10 w-min m-auto p-5 bg-gray-700/20 text-center rounded">
                <div className="output">
                    <input
                        ref={this.refOutput}
                        className="border m-3 py-1 px-2"
                        type="text"
                        defaultValue={this.state.out}
                    />
                    <div className="buttons">
                        {store.buttons.map((item) =>
                            <button
                                onClick={() => {
                                    this.tapeNumber(item.val)
                                }}
                                className="font-bold m-1 py-2 px-4 rounded text-white bg-amber-500 hover:bg-amber-600/90">{item.val}</button>
                        )}
                    </div>
                </div>
            </div>
        )

    }
}

export default App;
