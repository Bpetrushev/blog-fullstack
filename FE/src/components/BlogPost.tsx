interface IBlogPost {
  title: string;
  date: string;
  image: string;
}

const BlogPost: React.FC<IBlogPost> = ({ title, date, image }) => {
  const containerStyle = {
    border: '1px solid gray',
    padding: '20px',
    margin: '20px 0',
  };
  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };
  const dateStyle = {
    fontSize: '14px',
    color: 'gray',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={dateStyle}>{date}</p>
      <img src={image} alt={title} style={{ width: '100%' }} />
    </div>
  );
};

export default BlogPost;
