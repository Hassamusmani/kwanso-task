import React, { useContext, useEffect } from 'react';
import { Container } from '@mui/material';
import TaskListing from '../components/common/TaskListing';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context';

const AllTasks = () => {
    const navigate = useNavigate();
    const { allTasks, setToast } = useContext(AppContext);

    useEffect(() => {
        if (!allTasks.length) {
            setToast("No task to display..! Please add one");
            navigate("/create-task");
        }
    }, [allTasks]);

    return (
        <Container maxWidth="xl" sx={{ mt: '4rem' }}>
            <TaskListing heading='All Tasks' />
        </Container>
    );
};

export default AllTasks;