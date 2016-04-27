var React = require('react-native');
var { Image, ImagePickerIOS } = React;
var styles = require('./../../styles/buttons');
var Button = require('./../button/Button')
var CameraBG = React.createClass({
  getInitialState() {
    return {
      photoSource: null
    }
  },
  _pickImage() {
    ImagePickerIOS.openSelectDialog(
      {showImages: true},
      (data) => {
        this.setState({
          photoSource:{uri: data}
        })
      },
      (error) => {
        console.warn(error);
      }
    );
  },
  render() {
    return (
      <Image
      style={styles.background}
      source={this.state.photoSource}
      resizeMode='contain'>
      {this.props.children}
      <Button
          style={styles.PickButton}
          label="Load Image"
          onPress={this._pickImage}/>
      </Image>
    );
  }
});

module.exports = CameraBG;
