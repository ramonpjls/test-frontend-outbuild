import { Eye } from 'lucide-react'
import React from 'react'

const DashboardCard = ({ comment, setSelectedRecord }) => {
    return (
        <div><li
            key={comment.id}
            className="flex items-center justify-between p-4 bg-white rounded-md shadow-sm"
        >
            <span>{comment.name}</span>
            <button
                onClick={() => setSelectedRecord(comment)}
                className="text-indigo-600 hover:text-indigo-800"
            >
                <Eye />
            </button>
        </li></div>
    )
}

export default DashboardCard