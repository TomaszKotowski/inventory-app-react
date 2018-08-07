import React, { Component } from 'react';
import qrCode from 'qrcode';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class QrGenerator extends Component {
  @observable dataUrl;

  static defaultProps = {
    id: '',
  }

  componentDidMount() {
    this.updateToken(this.props.id);
  }

  componentWillReceiveProps(props) {
    this.updateToken(props.id);
  }

  async updateToken(id) {
    try {
      this.dataUrl = await qrCode.toDataURL(id);
    } catch (e) {
      this.dataUrl = null;
    }
  }

  render() {
    return(
      <div>
        { this.dataUrl && (<img src={this.dataUrl} />) }
      </div>
    );
  }
}

export default QrGenerator;
