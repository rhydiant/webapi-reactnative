// @flow

import React from 'react';
import {
  View, FlatList, StyleSheet, Text,
} from 'react-native';

import { connect } from 'react-redux';

import { fetchUsers } from '../redux/actionCreators';

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

type Props = {
  isLoading: boolean,
  data: any,
  fetchUsers: any,
};

// eslint-disable-next-line react/prefer-stateless-function
class List extends React.Component<Props> {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchUsers();
  }

  render() {
    const { isLoading, data } = this.props;
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

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  data: state.data,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
