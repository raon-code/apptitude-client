import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
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
import Draggable from 'react-draggable';
import { colors, space } from '@/styles/tokens';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const withAlpha = (hex, alpha) => {
  const value = parseInt(hex.slice(1), 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const labels = ['-', '-', '01/01', '01/02', '01/03', '01/04'];

const data = {
  labels,
  datasets: [
    {
      type: 'bar',
      label: 'me',
      borderWidth: 2,
      borderColor: (context) =>
        context.dataIndex === labels.length - 1
          ? colors.accent
          : withAlpha(colors.accent, 0.2),
      backgroundColor: (context) =>
        context.dataIndex === labels.length - 1
          ? colors.accent
          : withAlpha(colors.accent, 0.2),
      data: [40, 60, 80, 100]
    },
    {
      type: 'bar',
      label: 'other',
      borderWidth: 2,
      borderColor: (context) =>
        context.dataIndex === labels.length - 1
          ? colors.textSubtle
          : withAlpha(colors.textSubtle, 0.2),
      backgroundColor: (context) =>
        context.dataIndex === labels.length - 1
          ? colors.textSubtle
          : withAlpha(colors.textSubtle, 0.2),
      data: [30, 50, 60, 80]
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 120,
      ticks: { stepSize: 20, color: colors.textMuted },
      grid: { drawBorder: true, color: colors.surface }
    },
    x: {
      offset: true,
      ticks: { color: colors.textMuted },
      grid: { drawBorder: true, color: withAlpha(colors.textSubtle, 0.2) }
    }
  },
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: true,
      anchor: 'end',
      align: 'top',
      formatter: (value, context) =>
        context.dataIndex === context.dataset.data.length - 1
          ? `${value}%`
          : '',
      color: (context) =>
        context.dataset.label === 'me' ? colors.accent : colors.textSubtle
    }
  }
};

const Root = styled.div`
  position: relative;
  height: 242px;
`;

const Canvas = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 ${space(4)};
`;

const Axis = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 242px;
  padding: ${space(9)} 0 ${space(6)} ${space(5)};
  background: ${colors.surface};
  color: ${colors.textMuted};
  font-size: 12px;
  line-height: 16px;
`;

const axisTicks = ['100', '80', '60', '40', '20', '0'];

export default function Chart({ containerRef }) {
  const chartRef = useRef(null);
  const [bounds, setBounds] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  });

  useEffect(() => {
    const updateBounds = () => {
      if (!containerRef.current || !chartRef.current) return;

      setBounds({
        left: -(
          chartRef.current.offsetWidth - containerRef.current.offsetWidth
        ),
        right: 0,
        top: 0,
        bottom: 0
      });
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [containerRef]);

  return (
    <Root ref={containerRef}>
      <Axis aria-hidden='true'>
        {axisTicks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </Axis>
      <Draggable axis='x' bounds={bounds}>
        <Canvas ref={chartRef}>
          <Line
            data={data}
            options={options}
            style={{ height: '242px' }}
            plugins={[ChartDataLabels]}
          />
        </Canvas>
      </Draggable>
    </Root>
  );
}
