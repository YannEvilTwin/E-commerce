import Item from "../Item/Item";
 
  const ItemList = ({productos}) => {
    return (
        <div className="container">
          {productos.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      );
  }

export default ItemList;



