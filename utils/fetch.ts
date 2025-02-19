import { KeywordData } from "@/model/Words";
import mockData from "./data.json";

export async function fetchData() {
  try {
    const data: KeywordData = Object.values(mockData).flat();
    return data;
  } catch (error) {
    console.error("Error fetching data from mock:", error);
  }
}
