import { useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch } from 'react-redux';
import { getResultById } from 'redux/search/reducer';

const useGetResultById = (): void => {
  const { getParam } = useNavigation();
  const id = getParam('id');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResultById({ id }));
  }, [dispatch, id]);
};

export default useGetResultById;
