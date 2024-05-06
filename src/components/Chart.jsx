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
  labels: ['-', '-', '-', '01/01'],
  datasets: [
    {
      type: 'bar',
      label: 'me',
      borderColor: [
        'rgba(4, 195, 87, 0.2)',
        'rgba(4, 195, 87, 0.2)',
        'rgba(4, 195, 87, 0.2)',
        'rgba(4, 195, 87, 1)'
      ],
      backgroundColor: [
        'rgba(4, 195, 87, 0.2)',
        'rgba(4, 195, 87, 0.2)',
        'rgba(4, 195, 87, 0.2)',
        'rgba(4, 195, 87, 1)'
      ],
      borderWidth: 2,
      data: [2, 40, 60, 100]
    },
    {
      type: 'bar',
      label: 'other',
      data: [2, 10, 50, 80],
      backgroundColor: [
        'rgba(110, 116, 135, 0.2)',
        'rgba(110, 116, 135, 0.2)',
        'rgba(110, 116, 135, 0.2)',
        'rgba(110, 116, 135, 1)'
      ],
      borderColor: [
        'rgba(110, 116, 135, 0.2)',
        'rgba(110, 116, 135, 0.2)',
        'rgba(110, 116, 135, 0.2)',
        'rgba(110, 116, 135, 1)'
      ],
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
