import axios from 'axios';

const fetchApiData = async () => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    const r2=await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    console.log(r2.data)
    return response.data;
  } catch (error) {
    
    throw new Error('Error fetching data');
  }
};

export default fetchApiData;
