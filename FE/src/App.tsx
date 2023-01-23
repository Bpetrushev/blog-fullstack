import Header from './components/Header';
import styles from './App.module.css';
import BlogPost from './components/BlogPost';
import request from './utils/request';
import { useEffect, useState } from 'react';

interface IPosts {
  title: string;
  imageUrl: string;
  content: string;
}

function App() {
  const [data, setData] = useState<IPosts[] | null>(null);
  const getData = async () => {
    return request({ method: 'GET', path: '/feed/posts' });
  };

  useEffect(() => {
    getData().then((data) => setData(data.posts));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={styles.container}>
      <Header />
      <div>
        {data?.map((post, i) => {
          return <BlogPost key={i} title={post.title} date='January 1, 2021' image={post.imageUrl} />;
        })}
      </div>
    </div>
  );
}

export default App;
