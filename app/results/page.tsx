'use client';

import { GraduationCap, ExternalLink } from 'lucide-react';

// Sample data - in a real app, this would come from an API or database
const scholarships = [
  {
    id: 1,
    name: 'National Merit Scholarship',
    provider: 'Department of Education',
    minSSC: 85,
    minHSC: 80,
    minGrad: 75,
    amount: 50000,
    description: 'Merit-based scholarship for outstanding academic achievement',
    deadline: '2024-12-31',
    url: 'https://example.com/scholarship1',
  },
  {
    id: 2,
    name: 'Tech Innovation Grant',
    provider: 'TechCorp Foundation',
    minSSC: 70,
    minHSC: 75,
    minGrad: 80,
    amount: 75000,
    description: 'For students pursuing technology and innovation fields',
    deadline: '2024-11-30',
    url: 'https://example.com/scholarship2',
  },
  {
    id: 3,
    name: 'Future Leaders Program',
    provider: 'Leadership Institute',
    minSSC: 75,
    minHSC: 75,
    minGrad: 78,
    amount: 100000,
    description: "Supporting tomorrow's leaders in various fields",
    deadline: '2024-10-15',
    url: 'https://example.com/scholarship3',
  },
];

export default function ResultsPage() {
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
              {scholarships.map((scholarship) => (
                <tr key={scholarship.id} className="hover:bg-gray-50">
                  <td className="border-2 border-black p-3">
                    {scholarship.id}
                  </td>
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
                    {new Date(scholarship.deadline).toLocaleDateString('en-IN')}
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
      </div>
    </div>
  );
}
