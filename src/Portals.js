import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export class PortalExample extends Component {
  state = {
    isShowModal: false
  };

  toggleModal = () => {
    this.setState((state) => ({
      isShowModal: !state.isShowModal
    }));
  };

  showEvent = (event) => {
    console.log(event.nativeEvent);
  };

  tests = () => {
    console.log('tests');
  };

  render() {
    const { isShowModal } = this.state;
    return (
      <div>
        <button onClick={this.toggleModal}>Открыть модальное окно</button>

        {isShowModal && <Modal tests={this.toggleModal} />}
      </div>
    );
  }
}

class Modal extends Component {
  constructor(props) {
    super(props);

    this.portalDiv = document.createElement('div');
    this.portalDiv.id = 'portal';

    document.body.appendChild(this.portalDiv);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalDiv);
  }

  render() {
    return ReactDOM.createPortal(
      <Fragment>
        <p>Я модальное окно</p>
        <button onClick={this.props.tests}>Закрой меня</button>
      </Fragment>,
      document.getElementById('portal')
    );
  }
}
export default PortalExample;
