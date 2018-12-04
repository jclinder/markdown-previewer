import React, { Component } from 'react';
import marked from 'marked';
//Wrapper to share common state between input/preview components

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input : placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
       input: e.target.value
    })
  }

  render() {
    const input = this.state.input;
    const output = this.state.input;

    return (
      <div className="Wrapper">
        <Input handleChange={this.handleChange} input={input}/>
        <Preview output={output}/>
      </div>
      );
  }
}

class Input extends Component {
  render() {
    const input = this.props.input;
    return (
      <div className="Input">
        <Toolbar title="Editor"/>
          <textarea
            className="textArea"
            value={input}
            onChange={this.props.handleChange}>some text
          </textarea>
      </div>
      );
  }
}

class Preview extends Component {
  render() {
    const output = marked(this.props.output);
    return (
      <div className="Preview">
        <Toolbar title="Preview"/>
        <div className="previewText" dangerouslySetInnerHTML={{__html: output}}></div>
      </div>
      );
  }
}

class Toolbar extends Component {
  render() {
    const title = this.props.title;
    return (
      <div className="Toolbar">
        <span className="toolbarText">
          {title == "Editor" ? (<i className="fas fa-edit"></i>) : (<i className="fas fa-file-alt"></i>)}
          {title}
        </span>
      </div>
      );
  }
}

const placeholder = `
# Marked in browser\n\nRendered by **marked**.

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\``

export default Wrapper;
