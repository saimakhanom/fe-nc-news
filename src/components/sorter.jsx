import "../styles/sorter.css"

export default function Sorter({ setSortBy, setOrderBy }) {

  return (
    <div className="sorter">
      <label htmlFor="sortby">
        Sort By:
        <select id="sortby" onChange={(e)=>{setSortBy(e.target.value)}} className="dropdown">
          <option value="created_at">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
          </label>
          <label className="orderBy" htmlFor="orderby">
        Order By:
        <select onChange={(e)=>{setOrderBy(e.target.value)}} className="dropdown" id="orderby">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
}
