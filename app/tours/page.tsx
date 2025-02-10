type KeywordData = {
  keyword: string;
  volume: number;
  trend: number;
  cpc: number;
  cmp: number;
  m1: number;
  m1_month: number;
  m1_year: number;
  m2: number;
  m2_month: number;
  m2_year: number;
  m3: number;
  m3_month: number;
  m3_year: number;
  m4: number;
  m4_month: number;
  m4_year: number;
  m5: number;
  m5_month: number;
  m5_year: number;
  m6: number;
  m6_month: number;
  m6_year: number;
  m7: number;
  m7_month: number;
  m7_year: number;
  m8: number;
  m8_month: number;
  m8_year: number;
  m9: number;
  m9_month: number;
  m9_year: number;
  m10: number;
  m10_month: number;
  m10_year: number;
  m11: number;
  m11_month: number;
  m11_year: number;
  m12: number;
  m12_month: number;
  m12_year: number;
};

type APIResponse = {
  results: {
    [key: string]: KeywordData[];
  };
};

const url = "https://www.course-api.com/react-tours-project";

async function ToursPage() {
  const response = await fetch(url);
  const data: APIResponse = await response.json();
  console.log(data);

  return <div></div>;
}

export default ToursPage;
