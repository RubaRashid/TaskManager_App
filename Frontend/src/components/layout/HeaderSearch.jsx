import { FaSearch } from "react-icons/fa";

function HeaderSearch() {
  return (
    <div
      className="input-group"
      style={{
        maxWidth: "420px",
      }}
    >
      <span
        className="input-group-text bg-light border-0"
        style={{
          borderRadius: "16px 0 0 16px",
        }}
      >
        <FaSearch color="#6c757d" />
      </span>

      <input
        type="text"
        className="form-control bg-light border-0"
        placeholder="Search..."
        style={{
          borderRadius: "0 16px 16px 0",
          height: "56px",
          boxShadow: "none",
        }}
      />
    </div>
  );
}

export default HeaderSearch;