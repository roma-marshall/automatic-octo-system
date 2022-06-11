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

        if (output.value === '0') {
            output.value = ''
        }
        output.value += currentValue
    }

    tapeOperation(value) {
        let output = this.refOutput.current

        if (value === 'CE') {
            output.value.length === 1 ? output.value = '0' : output.value = output.value.substring(0, output.value.length - 1)
        } else if (value === 'C') {
            output.value = '0'
        }
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
                        {store.operations.map((item) =>
                            <button
                                onClick={() => {
                                    this.tapeOperation(item.val)
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
