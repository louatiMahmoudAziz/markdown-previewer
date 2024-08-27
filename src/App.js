import React, { Component } from 'react';
import { marked } from 'marked';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
# Heading 1
## Heading 2
[Link](https://example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <textarea
          id="editor"
          value={this.state.markdown}
          onChange={this.handleChange}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
        />
      </div>
    );
  }
}

export default App;
