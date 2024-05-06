import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const data = {
  labels: ['-', '-', '-', '01/01', '01/02', '01/03', '01/04'],
  datasets: [
    {
      // barThickness: 22,
      type: 'bar',
      label: 'me',
      borderColor: function (context) {
        if (context.dataIndex === data.labels.length - 1) {
          return 'rgba(4, 195, 87, 1)';
        } else {
          return 'rgba(4, 195, 87, 0.2)';
        }
      },
      backgroundColor: function (context) {
        if (context.dataIndex === data.labels.length - 1) {
          return 'rgba(4, 195, 87, 1)';
        } else {
          return 'rgba(4, 195, 87, 0.2)';
        }
      },
      borderWidth: 2,
      data: [2, 10, 20, 40, 60, 80, 100]
    },
    {
      // barThickness: 22,
      type: 'bar',
      label: 'other',
      data: [2, 10, 20, 30, 50, 60, 80],
      backgroundColor: function (context) {
        if (context.dataIndex === data.labels.length - 1) {
          return 'rgba(110, 116, 135, 1)';
        } else {
          return 'rgba(110, 116, 135, 0.2)';
        }
      },
      borderColor: function (context) {
        if (context.dataIndex === data.labels.length - 1) {
          return 'rgba(110, 116, 135, 1)';
        } else {
          return 'rgba(110, 116, 135, 0.2)';
        }
      },
      borderWidth: 2
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 120,
      ticks: {
        stepSize: 20,
        color: '#BEBDC4'
      },
      grid: {
        drawBorder: true,
        color: '#28272B'
      }
    },
    x: {
      offset: true,
      ticks: {
        color: '#BEBDC4'
      },
      grid: {
        drawBorder: true,
        color: 'rgba(166, 166, 166, 0.1)'
      },
      afterTickToLabelConversion: function (scaleInstance) {
        console.log(scaleInstance);
      }
    }
  },
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      formatter: function (value, context) {
        const idx = context.dataIndex;
        const dataLength = context.dataset.data.length - 1;
        if (idx === dataLength) {
          return value + '%';
        } else {
          return '';
        }
      },
      display: true,
      anchor: 'end',
      align: 'top',
      color: function (context) {
        if (context.dataset.label === 'me') {
          return 'rgba(4, 195, 87, 1)';
        } else {
          return 'rgba(110, 116, 135, 1)';
        }
      }
    }
  }
};

export default function Chart() {
  const chartWidth = 62 * data.labels.length + 'px';
  console.log(chartWidth);
  return (
    <div className='relative'>
      <div className='left-[20px] items-center h-[242px] text-[12px] pt-[36px] pb-[25px] justify-between absolute flex flex-col bg-[#28272B] text-[#BEBDC4]'>
        <span className='leading-[16px]'>100</span>
        <span className='leading-[16px]'>80</span>
        <span className='leading-[16px]'>60</span>
        <span className='leading-[16px]'>40</span>
        <span className='leading-[16px]'>20</span>
        <span className='leading-[16px]'>0</span>
      </div>
      <div className='px-[16px]'>
        <Line
          className=''
          data={data}
          options={options}
          style={{ height: '242px' }}
          plugins={[ChartDataLabels]}
        />
      </div>
    </div>
  );
}
