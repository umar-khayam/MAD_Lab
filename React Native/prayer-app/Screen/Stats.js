import { StyleSheet, Text, View,Dimensions, TouchableOpacity} from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


import {React,useState}  from 'react'
import data from './Data.json'
import { Button } from 'react-native-web';


//retrun specified 
const h = data.filter(da => {
  if(!da.date) {return};    
  
  const date = new Date(da.date);
  return date > new Date('2022-02-01') && date < new Date('2022-02-08')
 });

 

 //Sort
 const d=data.sort(function (a, b) {
	var dateA = new Date(a.date), dateB = new Date(b.date)
	return dateB-dateA 
});

  //count
  Object.values(d).reduce((a, item) => a + (item.asr === true ? 1 : 0), 0)





export default function Stats() {
  const [countFajr, setcountFajr]=useState(parseInt(Object.values(d).reduce((a, item) => a + (item.asr === true ? 1 : 0), 0)))
  const [countDhur, setcountDhur]=useState(parseInt(Object.values(d).reduce((a, item) => a + (item.dhur === true ? 1 : 0), 0)))
  const [countAsr, setcountAsr]=useState(parseInt(Object.values(d).reduce((a, item) => a + (item.asr === true ? 1 : 0), 0)))
  const [countMaghrib, setcountMaghrib]=useState(parseInt(Object.values(d).reduce((a, item) => a + (item.maghrib === true ? 1 : 0), 0)))
  const [countIsha, setcountIsha]=useState(parseInt(Object.values(d).reduce((a, item) => a + (item.isha === true ? 1 : 0), 0)))

  
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };


  
  const dataa = [
    {
      name: "Fajr",
      population:countFajr,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    
    {
      name: "Dhur",
      population: countDhur,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Asr",
      population: countAsr,
      color: "#7F7F7F",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Maghrib",
      population: countMaghrib,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Isha",
      population: countIsha,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const [allTime, setallTime]=useState(true)


  return (
    <View style={styles.main}>
      <View style={{flexDirection:'row', justifyContent:'space-between', width:300, marginTop:50, height:30, backgroundColor:'#36454f', alignItems:'center'}}>
        <TouchableOpacity >
          <Text style={styles.text}>Weekly   |</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.text}>Monthly  |</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.text}>Yearly   |</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text style={styles.text}>All time</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{marginTop:70}}>
      
          <PieChart
          data={dataa}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 10]}
          absolute
          />
          
        
        

    {/* <BarChart
        backgroundColor={"transparent"}
        data={{
          labels: ['Fajr', 'Dhur', 'Asr', 'Magrhib', 'Isha'],
          datasets: [{ data: [countFajr, countDhur, countAsr, countMaghrib, countIsha] }],
        }}
        width={Dimensions.get('window').width - 10}
        height={230}
        yAxisLabel={'$ - '}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      /> */}
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#0E2F44'
    },
    text: {
      color:'white',
      fontSize:17
    }
})