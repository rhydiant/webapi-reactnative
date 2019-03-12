import React from 'react';
import {
  View, FlatList, StyleSheet, Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    flex: 1,
    padding: 16,
  },
});

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: [] };
  }

  async componentDidMount() {
    try {
      this.setState({
        isLoading: true,
      });
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await result.json();
      this.setState({
        isLoading: false,
        data: json,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const { isLoading, data } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading ...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={({ item }) => <Text style={styles.item}>{JSON.stringify(item)}</Text>} />
      </View>
    );
  }
}
