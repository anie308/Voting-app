import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {Bar, Line, Pie } from 'react-chartjs-2'

class  Chart extends Component{
    constructor (props){
        super(props);
        this.state = {      
            ChartData:{
                labels: [
                    'Jane Doe',  'John Doe', ' Lorem Ipsum', 'John Grisham', 
                ],
               datasets:[
                {
                    label:'Votes',
                    barThickness:15,
                    data:[
                        57,
                        44,
                        34,
                        10
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 86, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }
               ]
            }
        }
    }


   render()  {
    return (
        <div className=' border mt-14 mx-4 h-full   lg:mx-56 p-4 '>
            <Bar  
            data ={this.state.ChartData}
            options={{
              title:{
                  display:true,
                  text:'Statistics Of Candidates with vote counts',
                  fontSize:25
              },
              legend:{
                  display:true,
                  Position:'right'
              }
            }}/>
            
        </div>
    )
}
}

export default Chart
