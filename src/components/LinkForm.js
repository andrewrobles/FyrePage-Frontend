import React from 'react';
import PropTypes from 'prop-types';

class LinkForm extends React.Component {
  state = {
    text: this.props.text,
    url: this.props.url
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_submit(e, this.state)}>
        <h4>Add link</h4>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handle_change}
        />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          value={this.state.url}
          onChange={this.handle_change}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default LinkForm;

LinkForm.propTypes = {
  handle_submit: PropTypes.func.isRequired,
  text: '',
  url: ''
};
