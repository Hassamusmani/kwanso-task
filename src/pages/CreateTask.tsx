import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import AppContext from '../context';
import { useNavigate } from 'react-router-dom';

const CreateTask: React.FC = () => {
    const navigate = useNavigate();
    const { addTask } = useContext(AppContext);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            label: taskName,
            description: taskDescription,
        };
        addTask(newTask);
        setTaskName('');
        setTaskDescription('');
        navigate('/');
    };

    return (
        <Container maxWidth="md" sx={{ mt: '4rem' }}>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    fontFamily: 'monospace',
                    fontSize: '2rem',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    mb: 4,
                }}
            >
                Add Task
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { mb: 2 },
                }}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Task Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit" sx={{ margin: 1 }}>
                    Add Task
                </Button>
            </Box>
        </Container>
    );
};

export default CreateTask;
