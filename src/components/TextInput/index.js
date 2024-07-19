import {Component} from 'react'

import './index.css'

class TextInput extends Component {
  state = {isSaved: false, text: ''}

  onClickBtn = () => {
    const {isSaved} = this.state
    this.setState({isSaved: !isSaved})
  }
  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {isSaved, text} = this.state

    return (
      <div className="main">
        <div className="body">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-card">
            {isSaved ? (
              <p className="paragraph">{text}</p>
            ) : (
              <input
                className="text-input"
                type="text"
                value={text}
                onChange={this.onChangeText}
              />
            )}
            <button type="button" className="btn" onClick={this.onClickBtn}>
              {isSaved ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default TextInput
