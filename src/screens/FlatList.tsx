import React, { useEffect, ReactChild, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFlatList, getFlatListMore } from 'redux/flatList/reducer';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5fcff',
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

const FlatListData: FC = () => {
  const { data, isLoading } = useSelector(state => state.flatList);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFlatList(page));
  }, [dispatch, page]);

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const renderRow = ({ item }: object): ReactChild => {
    return (
      <View style={styles.itemRow}>
        <Image source={{ uri: item.url }} style={styles.itemImage} />
        <Text style={styles.itemRow}> {item.title}</Text>
        <Text style={styles.itemText}>{item.id}</Text>
      </View>
    );
  };

  const renderFooter = (): ReactChild => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const renderEmpty = (): ReactChild => <Text> Empty</Text>;
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderRow}
      keyExtractor={(item, index): string => String(index)}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmpty}
    />
  );
};

FlatListData.defaultProps = {};

export default FlatListData;
