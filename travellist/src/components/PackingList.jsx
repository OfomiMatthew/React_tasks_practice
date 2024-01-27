import Item from "./Item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Luggage", quantity: 5, packed: true },
];

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item key={item.id} x={item} />;
        })}
      </ul>
    </div>
  );
};

export default PackingList;
