import axios from "axios";

const API_URL = process.env.REACT_APP_PRODUCT_API_URL;
const apiKey = process.env.REACT_APP_PRODUCT_API_KEY;

if (!API_URL) {
  throw new Error("REACT_APP_PRODUCT_API_URL is not defined");
}

if (!apiKey) {
  throw new Error("REACT_APP_PRODUCT_API_KEY is not defined");
}

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
  try {
    const response = await axios.get(API_URL, {
      params: {
        page,
        perPage,
        returnType: "JSON",
        serviceKey: apiKey, // API 키를 쿼리 파라미터로 전달
      },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data list:", error.message);
      if (error.response) {
        console.error("Error response data:", error.response.data);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const fetchDataDetail = async (id: string): Promise<DataDetail> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      params: {
        returnType: "JSON",
        serviceKey: apiKey, // API 키를 쿼리 파라미터로 전달
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data detail:", error.message);
      if (error.response) {
        console.error("Error response data:", error.response.data);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

console.log("API URL:", API_URL);
console.log("API Key:", apiKey);
