import React, { useEffect } from 'react';
import { getRecords } from '../helpers/apiCalls';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Record from './Record';

const Shop = () => {
  const { records, setRecords } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const records = await getRecords();
      setRecords(records);
    };

    getData();
  }, [setRecords]);

  const recordsList = records.map(record => {
    return <Record data={record}  key={record.mbid}></Record>;
  });

  return <section className="page-wrapper" id="shop-grid">{recordsList}</section>;
};

export default Shop;
