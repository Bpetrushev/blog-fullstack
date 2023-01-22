import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.css';
import { RootState, AppDispatch } from '../store';
import { postActions } from '../store/postSlicer';

const Header = (): JSX.Element => {
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const { changeSearch } = postActions;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(changeSearch(value));
  };
  return (
    <>
      <h1 className={styles.headerLogo}>Post App</h1>
      <input className={styles.inputSearch} type='text' placeholder='Search for posts.' value={search} onChange={onChangeSearch} />
    </>
  );
};

export default Header;
