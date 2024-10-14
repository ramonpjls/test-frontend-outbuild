import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import RecordModal from './RecordModal';
import DashboardCard from './DashboardCard';
import Unauthorized from './Unauthorized';
import { LogOut } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = comments.filter((comment) =>
            comment.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            comment.body.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredComments(filtered);
    };

    useEffect(() => {
        if (isAuthenticated) {
            setLoading(true);
            axios.get('https://jsonplaceholder.typicode.com/comments')
                .then((response) => {
                    setComments(response.data);
                    setFilteredComments(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    toast.error('Failed to fetch comments. Please try again later.');
                    setLoading(false);
                });
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Unauthorized />;
    }

    return (
        <div className="container p-6 mx-auto">
            <div className="flex justify-end">
                <button
                    onClick={logout}
                    className="flex gap-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                    Logout <LogOut />
                </button>
            </div>
            <h1 className="mb-4 text-3xl font-bold">Comments</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search comments..."
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            {loading ? (
                <div className="flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="p-4 max-h-fit">
                    <ul className="space-y-4">
                        {filteredComments.map((comment) => (
                            <DashboardCard key={comment.id} comment={comment} setSelectedRecord={setSelectedRecord} />
                        ))}
                    </ul>
                </div>
            )}

            {selectedRecord && (
                <RecordModal
                    record={selectedRecord}
                    onClose={() => setSelectedRecord(null)}
                />
            )}
        </div>
    );
};

export default Dashboard;
