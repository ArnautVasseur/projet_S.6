<script setup>
const propChart = defineProps({

})

</script>

<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

ChartJS.defaults.color = '#fff';

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['1985', '1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018', '2019','2020','2021'],
        datasets: [{
          label: 'Kilomètres carrés d\'hypoxie dans le golf du Mexique dans la \'Dead Zone\' mesuré en plein été',
          data: [9774, 9592, 6688, 40, 'nodata', 9420, 11920,	10804, 17520, 16680, 17220, 17920, 15950, 12480, 20000, 4400, 19840, 22000, 8320, 14640, 11800, 16560, 20480, 21764, 8240, 18400, 17680, 7480, 15120, 13080, 16760, 'nodata', 22720, 7040, 18000, 5480, 16400, 8480],
          backgroundColor: ['#233e82', '#475693', '#6670a5', '#848bb7', '#a2a6c9', '#c1c3db', '#e0e1ed', '#ffffff'],
          
        }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
