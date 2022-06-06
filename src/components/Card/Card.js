const Card = props => {
  const { name, price, category } = props.item;
  return (
    <li>
      {name} {price} {category}
    </li>
  );
};
export default Card;
