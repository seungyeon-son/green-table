import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataDetail, DataDetail } from "../api";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const [dataDetail, setDataDetail] = useState<DataDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await fetchDataDetail(id);
        setDataDetail(data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {dataDetail ? (
        <div>
          <h1>{dataDetail.품목}</h1>
          <p>{dataDetail.규격및단위}</p>
          <p>{dataDetail.금주가격}</p>
          {/* 나머지 데이터 표시 */}
        </div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default ProductDetailPage;
