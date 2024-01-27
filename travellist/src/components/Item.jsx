const Item = ({ x }) => {
  return (
    <div>
      <li>
        <span style={x.packed?{textDecoration:'line-through'}:{}}>
          {x.quantity} {x.description}
        </span>
        <button>❌</button>
      </li>
    </div>
  );
};

export default Item;
