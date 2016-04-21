var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    ListView,
    Image
} = React;

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
    render() {
        return {
            <ListView style={styles.listContainer} />
        };
    }
});

var styles = StyleSheet.create({
   listContainer: {
       
   } 
});
module.exports = BookList;