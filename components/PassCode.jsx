import React, { Fragment } from 'react'

class PassCode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code_0: '',
            code_1: '',
            code_2: '',
            code_3: '',
            code_4: ''
        };

        this.code_0 = React.createRef();
        this.code_1 = React.createRef();
        this.code_2 = React.createRef();
        this.code_3 = React.createRef();
        this.code_4 = React.createRef();
        this.codeForm = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    valid() {
        for (const [key, value] of Object.entries(this.state)) {
            if (value == '') {
                return false
            }
        }
        return true
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.valid()) {
            console.log("Submit code to rest server")
        }
    }

    deleteAndGoToPrevious(e, prev) {
        if (e.keyCode === 8 && !e.target.value) prev.current.focus()
    }

    render() {
        return (
            <Fragment>
                <h3>please enter your one time code</h3>
                <form ref={this.codeForm} onSubmit={this.handleSubmit}>
                    <input
                        ref={this.code_0}
                        autoFocus={true}
                        type="password"
                        maxLength="1"
                        onChange={e => {
                            this.setState({ code_0: e.target.value })
                            if (e.target.value) this.code_1.current.focus()
                        }}
                        value={this.state.code_0} />
                    <input
                        ref={this.code_1}
                        type="password"
                        maxLength="1"
                        onKeyDown={e => this.deleteAndGoToPrevious(e, this.code_0)}
                        onChange={e => {
                            this.setState({ code_1: e.target.value })
                            if (e.target.value) this.code_2.current.focus()
                        }}
                        value={this.state.code_1} />
                    <input
                        ref={this.code_2}
                        type="password"
                        maxLength="1"
                        onKeyDown={e => this.deleteAndGoToPrevious(e, this.code_1)}
                        onChange={e => {
                            this.setState({ code_2: e.target.value })
                            if (e.target.value) this.code_3.current.focus()
                        }}
                        value={this.state.code_2} />
                    <input
                        ref={this.code_3}
                        type="password"
                        maxLength="1"
                        onKeyDown={e => this.deleteAndGoToPrevious(e, this.code_2)}
                        onChange={e => {
                            this.setState({ code_3: e.target.value })
                            if (e.target.value) this.code_4.current.focus()
                        }}
                        value={this.state.code_3} />
                    <input
                        ref={this.code_4}
                        type="password"
                        maxLength="1"
                        onKeyDown={e => this.deleteAndGoToPrevious(e, this.code_3)}
                        onChange={e => {
                            this.setState({ code_4: e.target.value }, () => this.codeForm.current.dispatchEvent(new Event("submit")))
                        }}
                        value={this.state.code_4} />

                    <input type="submit" value="Enter" />

                </form>
                <style jsx>
                    {`
    form {
        display: block;
        margin: 50px auto;
        text-align: center;
    }

    input[type="password"] {
        background-color: transparent;
        border: none;
        border-bottom: 5px solid black;
        display: inline-block;
        font-size: 50px;
        margin: 0 20px;
        width: 4.0rem;
        text-align: center;
        outline: 0;
    }

    input[type="submit"] {
        margin 120px auto 20px auto;
        background-color: black;
        border: 2px solid black;
        overflow: hidden;
        padding: 0 40px;
        font-size: 24px;
        text-transform: uppercase;
        outline: 0;
        display: block;
        cursor: pointer;
        color: #fff;
    }
    input[type="submit"]:hover {
        background-color: transparent;
        color: #000;
    }
     h3 {
        text-transform: uppercase;
        font-weight: lighter;
        margin: 100px auto;
     }

      `}
                </style>
            </Fragment>
        )
    }
}

export default PassCode