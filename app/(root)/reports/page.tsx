'use client';
import React, { useEffect, useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import CountUp from 'react-countup';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

interface WasteRecord {
  isBiodegradable: boolean;
  Class: 'PLASTIC' | 'METAL' | 'PAPER' | 'CARDBOARD' | 'GLASS';
  Day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
}

const ReportsPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [biodegradableCount, setBiodegradableCount] = useState(0);
  const [totalWasteCount, setTotalWasteCount] = useState(0);
  const [plasticCount, setPlasticCount] = useState(0);
  const [metalCount, setMetalCount] = useState(0);
  const [paperCount, setPaperCount] = useState(0);
  const [cardboardCount, setCardboardCount] = useState(0);
  const [glassCount, setGlassCount] = useState(0);

  const [dayCounts, setDayCounts] = useState({
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  });

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('/api/users/current');
        if (!response.ok) throw new Error('Failed to fetch records');

        const data: WasteRecord[] = await response.json();
        setTotalWasteCount(data.length);

        setBiodegradableCount(data.filter((item) => item.isBiodegradable).length);
        setPlasticCount(data.filter((item) => item.Class === 'PLASTIC').length);
        setMetalCount(data.filter((item) => item.Class === 'METAL').length);
        setPaperCount(data.filter((item) => item.Class === 'PAPER').length);
        setCardboardCount(data.filter((item) => item.Class === 'CARDBOARD').length);
        setGlassCount(data.filter((item) => item.Class === 'GLASS').length);

        setDayCounts({
          Monday: data.filter((item) => item.Day === 'Monday').length,
          Tuesday: data.filter((item) => item.Day === 'Tuesday').length,
          Wednesday: data.filter((item) => item.Day === 'Wednesday').length,
          Thursday: data.filter((item) => item.Day === 'Thursday').length,
          Friday: data.filter((item) => item.Day === 'Friday').length,
          Saturday: data.filter((item) => item.Day === 'Saturday').length,
          Sunday: data.filter((item) => item.Day === 'Sunday').length,
        });
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const doughnutData = {
    labels: ['Plastic', 'Metal', 'Paper', 'Cardboard', 'Glass', 'Biodegradable'],
    datasets: [{
      data: [plasticCount, metalCount, paperCount, cardboardCount, glassCount, biodegradableCount],
      backgroundColor: ['#4caf50', '#ff9800', '#03a9f4', '#8bc34a', '#f44336', '#00bcd4'],
    }],
  };

  const lineData = {
    labels: Object.keys(dayCounts),
    datasets: [{
      label: 'Total Waste Collected',
      data: Object.values(dayCounts),
      fill: false,
      backgroundColor: '#4caf50',
      borderColor: '#4caf50',
    }],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="ml-40 mb-5 mt-5 w-full max-w-4xl bg-white p-8 shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-center border-b-1">RAG-ED</h1>
        <p className="text-4xl font-bold mb-8 text-center">Performance Report</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard title="Waste Items Collected" value={totalWasteCount} />
          <StatsCard title="Biodegradable Waste" value={biodegradableCount} />
          <StatsCard title="Non-Biodegradable Waste" value={totalWasteCount - biodegradableCount} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">Waste Breakdown</h2>
            <Doughnut data={doughnutData} />
          </div>
          <div className="p-6 bg-gray-50 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">Collection Trends</h2>
            <div className="h-72">
              <Line data={lineData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value }: { title: string; value: number }) => (
  <div className="cursor-pointer flex items-center bg-gradient-to-b from-green-300 to-green-500 rounded-lg p-1 hover:scale-105 transition-transform duration-200 h-40">
    <div className="flex items-center bg-gray-50 rounded-lg p-5 w-full h-full">
      <div className="ml-3 flex-grow text-center">
        <p className="text-xl font-semibold bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">{title}</p>
        <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
          <CountUp end={value} duration={2.5} />
        </p>
      </div>
    </div>
  </div>
);

export default ReportsPage;
