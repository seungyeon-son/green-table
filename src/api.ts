import axios from "axios";

const API_URL = "https://api.odcloud.kr/api/15053081/v1/uddi:84b30b63-5068-40e0-8ae5-810d637261d8";
const apiKey = process.env.REACT_PRODUCT_API_KEY;

export interface DataItem {
  구분: string;
  품목: string;
  규격및단위: string;
  // 필요한 다른 필드들...
}

export interface DataDetail {
  구분: string;
  품목: string;
  규격및단위: string;
  금주가격: number;
  // 필요한 다른 필드들...
}

export const fetchDataList = async (page: number = 1, perPage: number = 10): Promise<DataItem[]> => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      page,
      perPage,
      returnType: "JSON",
    },
    headers: {
      Authorization: apiKey,
    },
  });
  return response.data.data;
};

export const fetchDataDetail = async (id: string): Promise<DataDetail> => {
  const response = await axios.get(`${API_URL}/${id}`, {
    params: {
      returnType: "JSON",
    },
    headers: {
      Authorization: apiKey,
    },
  });
  return response.data;
};
console.log("API URL:", API_URL);
console.log("API Key:", apiKey);
