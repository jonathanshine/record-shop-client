import React, { useEffect } from 'react';
import { getRecords } from '../helpers/apiCalls';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Shop = () => {
  // componentDidMount
  // ComponentdidUpdate
  // ComponentwillUnmount

  const { setRecords } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const records = await getRecords();
      setRecords(records);
    };

    getData();
  }, [setRecords]);

  return <div>I AM THE SHOP</div>;
};

export default Shop;
