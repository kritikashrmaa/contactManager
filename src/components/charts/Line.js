import React from 'react'
import {Line} from 'react-chartjs-2'
import {

  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement


} from 'chart.js'

import {useQuery} from 'react-query';
import fetchApiData from '../../services/fetchApiData';
import Spinner from '../spinner/Spinner';


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const LineChart = () => {

  const { isLoading, isError, data, error } = useQuery('casesData', fetchApiData);
  

  if(isLoading){
    return <Spinner/>
  }

  if(isError){
    return <div>Error: {error.message}</div>
  }
  
  const Data={
    labels:Object.keys(data),
    datasets:[
      {
        labels:'Cases',
        data:Object.values(data),
        backgroundColor:'aqua',
        borderColor:'black',
        pointBorderColor:'aqua',
        


      }
    ]
  }

  const options={
    aspectRatio: 2,
    plugins:{
       legend:true
    },
    scales: {
      x: {
        type: 'category',
        beginAtZero: true,
       
      },
      y: {
        beginAtZero: true,
        max:100000
        
        
      },
    },
  }


  return (
    <div>
      <h1 className='text-xlg mt-4 mb-4 text-center'>WORLDWIDE COVID CASES</h1>
 
      <div className='flex items-center justify-center chart-container'>
      <Line
      data={Data}
      options={options}
      >

      </Line>
      </div>
      
    </div>
  )
}

export default LineChart
