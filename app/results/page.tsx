'use client';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Data {
  name: string;
  ssc_marks: number;
  hsc_marks: number;
  graduation_marks: number;
  caste_category: string;
}

interface Scholarship {
  id: number;
  name: string;
  provider: string;
  minSSC: number;
  minHSC: number;
  minGrad: number;
  amount: number;
  description: string;
  deadline: string;
  url: string;
}

export default function ResultsPage() {
  const [data, setData] = useState<Data | null>(null);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get data from sessionStorage safely
    const storedData = sessionStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (!data) return;

    const fetchScholarships = async () => {
      try {
        console.log(data);
        const response = await fetch(
          'https://scholarly-sooty.vercel.app/api/v1/find-scholarships',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) throw new Error('Failed to fetch scholarships');
        const result = await response.json();
        setScholarships(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, [data]);

  return (
    <div className="relative min-h-screen p-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="accent-box bg-[#FFD700] -rotate-12 top-12 left-12" />
      <div className="accent-box bg-[#FF69B4] rotate-12 top-24 right-12" />
      <div className="accent-box bg-[#98FB98] rotate-45 bottom-12 left-24" />
      <div className="accent-box bg-[#87CEEB] -rotate-45 bottom-24 right-24" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="p-4 bg-[#FF3333] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-black tracking-tight bg-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Available Scholarships
          </h1>
        </div>

        {loading ? (
          <p className="text-center text-lg">Loading scholarships...</p>
        ) : scholarships.length === 0 ? (
          <p className="text-center text-lg">No scholarships found.</p>
        ) : (
          <div className="neo-brutal-container p-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-2 border-black bg-[#FFD700] p-3 text-left">
                    Sr No
                  </th>
                  <th className="border-2 border-black bg-[#FF69B4] p-3 text-left">
                    Scholarship Name
                  </th>
                  <th className="border-2 border-black bg-[#98FB98] p-3 text-left">
                    Provider
                  </th>
                  <th className="border-2 border-black bg-[#87CEEB] p-3 text-left">
                    Min SSC
                  </th>
                  <th className="border-2 border-black bg-white p-3 text-left">
                    Min HSC
                  </th>
                  <th className="border-2 border-black bg-[#FFD700] p-3 text-left">
                    Min Grad
                  </th>
                  <th className="border-2 border-black bg-[#FF3333] p-3 text-left text-white font-bold">
                    Amount (₹)
                  </th>
                  <th className="border-2 border-black bg-[#98FB98] p-3 text-left">
                    Description
                  </th>
                  <th className="border-2 border-black bg-[#87CEEB] p-3 text-left">
                    Deadline
                  </th>
                  <th className="border-2 border-black bg-white p-3 text-left">
                    Apply
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((scholarship, index) => (
                  <tr key={scholarship.id} className="hover:bg-gray-50">
                    <td className="border-2 border-black p-3">{index + 1}</td>
                    <td className="border-2 border-black p-3 font-bold">
                      {scholarship.name}
                    </td>
                    <td className="border-2 border-black p-3">
                      {scholarship.provider}
                    </td>
                    <td className="border-2 border-black p-3">
                      {scholarship.minSSC}%
                    </td>
                    <td className="border-2 border-black p-3">
                      {scholarship.minHSC}%
                    </td>
                    <td className="border-2 border-black p-3">
                      {scholarship.minGrad}%
                    </td>
                    <td className="border-2 border-black p-3 bg-[#FFEEEE] font-bold">
                      {scholarship.amount.toLocaleString('en-IN')}
                    </td>
                    <td className="border-2 border-black p-3">
                      {scholarship.description}
                    </td>
                    <td className="border-2 border-black p-3">
                      {new Date(scholarship.deadline).toLocaleDateString(
                        'en-IN'
                      )}
                    </td>
                    <td className="border-2 border-black p-3">
                      <a
                        href={scholarship.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#FF3333] hover:underline"
                      >
                        Apply <ExternalLink className="h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
