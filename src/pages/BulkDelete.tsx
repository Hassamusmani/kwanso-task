import React, { useContext, useEffect } from 'react';
import { Container } from '@mui/material';
import TaskListing from '../components/common/TaskListing';
import AppContext from '../context';
import { useNavigate } from 'react-router-dom';

const BulkDelete: React.FC = () => {
    const navigate = useNavigate();
    const { allTasks, setToast } = useContext(AppContext);

    useEffect(() => {
        if (!allTasks.length) {
            setToast("No task to delete..! Please add one");
            navigate("/create-task");
        }
    }, [allTasks]);

    return (
        <Container maxWidth="xl" sx={{ mt: '4rem' }}>
            <TaskListing heading='Delete Tasks' isDeleting />
        </Container>
    );
};

export default BulkDelete;
