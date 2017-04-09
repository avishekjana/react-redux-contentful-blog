import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsset } from '../actions/index';

class Asset extends Component {
  componentWillMount() {
    this.props.fetchAsset(this.props.assetId)
  }
  renderAsset() {
    return this.props.assets.map((asset) => {
      if (asset.sys.id == this.props.assetId) {
        return (
          <img src={asset.fields.file.url} alt={asset.fields.file.fileName} key={`${asset.sys.id}`}/>
        );
      }
    });
  }
  render() {
    return (
      <div>
        {this.renderAsset()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assets: state.assets
  };
}

export default connect(mapStateToProps, { fetchAsset })(Asset)
