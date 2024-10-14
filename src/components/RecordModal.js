import { CircleX } from 'lucide-react';
import React from 'react';
import Modal from 'react-modal';

const RecordModal = ({ record, onClose }) => {

    console.log(record)

    return (
        <Modal isOpen={!!record} onRequestClose={onClose} ariaHideApp={false}>
            <div className="flex flex-col p-6 font-mono ">
                <button className="flex justify-end mt-4 mr-4 text-left text-red-500" onClick={onClose}><CircleX /></button>
                <h2 className="mb-4 text-2xl font-bold text-center">{record.name}</h2>
                <span className="mb-4 ">{record.body}</span>
                <span className="mb-4 font-semibold">{record.email}</span>
            </div>
        </Modal>
    );
};

export default RecordModal;
