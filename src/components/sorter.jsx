export default function Sorter({ setSortBy, setOrderBy }) {

  return (
    <div>
      <label>
        Sort By:
        <select onChange={(e)=>{setSortBy(e.target.value)}}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
          <option value="Author">Author</option>
        </select>
          </label>
          <label>
        Order By:
        <select onChange={(e)=>{setOrderBy(e.target.value)}}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
}
