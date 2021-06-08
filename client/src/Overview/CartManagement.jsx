import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CartManagement = ({ styleInventory }) => {

  const [productSku, setProductSku] = useState();
  const [availableQty, setAvailableQty] = useState(0);
  const [purchaseQty, setPurchaseQty] = useState(0);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [formattedSkuData, setFormattedSkuData] = useState([]);

  useEffect(() => {
    if (styleInventory) {
      formatSkuData();
    }
  }, [styleInventory]);

  useEffect(() => {
    productSku ? setPurchaseQty(1) : setPurchaseQty(0);
    generateSizeOptions();
    generateQuantityOptions();
  }, [formattedSkuData, productSku]);

  const formatSkuData = (newSkuData = []) => {
    axios.get('/cart')
      .then((response) => {
        let cart = response.data;
        for (let i = 0; i < cart.length; i++) {
          if (styleInventory[cart[i].sku_id]) {
            styleInventory[cart[i].sku_id].tempQuantity = styleInventory[cart[i].sku_id].quantity - Number(cart[i].count);
          }
        }
      })
      .then(() => {
        for (let sku in styleInventory) {
          if (styleInventory[sku].tempQuantity === 0) {
            continue;
          }
          styleInventory[sku].sku = sku;
          newSkuData.push(styleInventory[sku]);
        }
        setFormattedSkuData(newSkuData);
      });
  };

  const generateSizeOptions = () => {
    let newSizeOptions = formattedSkuData.map((sku, index) => {
      if (sku.quantity) {
        return <option value={index} key={index}>{sku.size}</option>;
      }
    });
    newSizeOptions.length === 0 ? newSizeOptions = <option>OUT OF STOCK</option> : null;
    setSizeOptions(newSizeOptions);
  };

  const generateQuantityOptions = (newQuantityOptions = []) => {
    while (newQuantityOptions.length < availableQty && newQuantityOptions.length < 15) {
      let optionNum = newQuantityOptions.length + 1;
      newQuantityOptions.push(<option value={optionNum} key={optionNum}>{optionNum}</option>);
    }
    newQuantityOptions.unshift(<option key='yes'>-</option>);
    setQuantityOptions(newQuantityOptions);
  };

  const handleSizeSelection = (event) => {
    let skuIndex = event.target.value;
    if (skuIndex !== 'Select Size') {
      setProductSku(formattedSkuData[skuIndex].sku);
      setAvailableQty(formattedSkuData[skuIndex].quantity);
    }
  };

  const handleQuantitySelection = (event) => {
    setPurchaseQty(Number(event.target.value));
  };

  const addToCart = (quantity) => {
    while (quantity > 0) {
      axios.post('/cart', { 'sku_id': productSku})
        .then((response) => {
          console.log('added to cart!');
        })
        .catch((error) => {
          console.log(error);
        });
      quantity--;
    }
  };

  return (
    <div id="cartManagement">
      <select onChange={(event) => handleSizeSelection(event)}>
        <option>Select Size</option>
        {sizeOptions}
      </select>
      <select id="countselector" onChange={(event) => handleQuantitySelection(event)}>
        {quantityOptions}
      </select>
      <button type="button" onClick={() => addToCart(Number(purchaseQty))}>Add to Cart</button>
      <button type="button">*</button>
    </div>
  );

};

export default CartManagement;
