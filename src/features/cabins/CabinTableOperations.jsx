import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (Ascending)" },
          { value: "name-desc", label: "Sort by name (Descending)" },
          { value: "regularPrice-asc", label: "Sort by price (Ascending)" },
          { value: "regularPrice-desc", label: "Sort by price (Descending)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (Ascending)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (Descending)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
