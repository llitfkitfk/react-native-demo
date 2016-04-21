var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} = React;


var BookItem = require('./BookItem');
var API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
var QUERY_TYPE = 'hardcover-fiction';
var API_STEM = 'http://api.nytimes.com/svc/books/v3/lists'
var ENTRYPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`;

var BookList = React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds.cloneWithRows([])
    };
  },
  componentDidMount: function () {
    this._refreshData();
  },
  _renderHeader() {

  },
  _renderFooter() {

  },
  _renderRow: function(rowData) {
    return <BookItem
      coverURL={rowData.book_image}
      title={rowData.title}
      author={rowData.author}
      />

  },
  _refreshData() {
    fetch(ENTRYPOINT)
    .then((response) => response.json())
    .then((rjson)=> {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
      });
    });
  },
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderFooter={this._renderFooter}
        />
    );
  }
});

var styles = StyleSheet.create({
  listContainer: {

  }
});
module.exports = BookList;
