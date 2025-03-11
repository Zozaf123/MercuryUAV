import React from 'react';

const SpecificationsTable: React.FC = () => {
    return (
        <div className="specifications-table bg-gray-800 text-white p-4 rounded-lg">
            <table className="min-w-full divide-y divide-gray-700">
                <thead>
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Specification</th>
                </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-700">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Max Speed</td>
                    <td className="px-6 py-4 whitespace-nowrap">120 km/h</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Flight Time</td>
                    <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Range</td>
                    <td className="px-6 py-4 whitespace-nowrap">15 km</td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default SpecificationsTable;