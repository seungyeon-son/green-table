import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDataList, DataItem } from "../api";

const ProductPage: React.FC = () => {
  const [dataList, setDataList] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await fetchDataList();
        setDataList(data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>
            <Link to={`/detail/${index}`}>{item.품목}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
