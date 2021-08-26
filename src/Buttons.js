const Buttons = ({ users, posts, comments, category, setCategory }) => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <button className="button" value={users} onClick={(e) => setCategory(users)}>
        {users}
      </button>
      <button className="button" value={posts} onClick={(e) => setCategory(posts)}>
        {posts}
      </button>
      <button className="button" value={comments} onClick={(e) => setCategory(comments)}>
        {comments}
      </button>
    </form>
  );
};

export default Buttons;
