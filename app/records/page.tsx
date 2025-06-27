'use client';

import { useEffect, useState } from 'react';

interface Record {
  isBiodegradable: boolean;
  Class: 'PLASTIC' | 'METAL' | 'PAPER' | 'CARDBOARD' | 'GLASS' | string;
}

const RecordsPage = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [biodegradableCount, setBiodegradableCount] = useState(0);
  const [totalWasteCount, setTotalWasteCount] = useState(0);
  const [plasticCount, setPlasticCount] = useState(0);
  const [metalCount, setMetalCount] = useState(0);
  const [paperCount, setPaperCount] = useState(0);
  const [cardboardCount, setCardboardCount] = useState(0);
  const [glassCount, setGlassCount] = useState(0);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch('/api/users/current'); // Adjust this path if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch records');
        }
        const data: Record[] = await response.json();

        // Calculate total waste count
        setTotalWasteCount(data.length);

        // Filter the records for biodegradable waste and calculate the count
        const biodegradableItems = data.filter((item) => item.isBiodegradable);
        setBiodegradableCount(biodegradableItems.length);

        // Calculate counts for specific waste types
        setPlasticCount(data.filter((item) => item.Class === 'PLASTIC').length);
        setMetalCount(data.filter((item) => item.Class === 'METAL').length);
        setPaperCount(data.filter((item) => item.Class === 'PAPER').length);
        setCardboardCount(data.filter((item) => item.Class === 'CARDBOARD').length);
        setGlassCount(data.filter((item) => item.Class === 'GLASS').length);

        setRecords(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Records Summary</h1>
      <p>Total Waste: {totalWasteCount}</p>
      <p>Total Biodegradable Waste: {biodegradableCount}</p>
      <p>Total Plastic Waste: {plasticCount}</p>
      <p>Total Metal Waste: {metalCount}</p>
      <p>Total Paper Waste: {paperCount}</p>
      <p>Total Cardboard Waste: {cardboardCount}</p>
      <p>Total Glass Waste: {glassCount}</p>

      {/* Display records in a list */}
      <h2>All Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            Type: {record.Class} - {record.isBiodegradable ? "Biodegradable" : "Non-Biodegradable"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordsPage;
