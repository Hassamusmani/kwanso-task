import React, { useContext, useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import AppContext from '../../context';
import TaskCard from './TaskCard';

interface Props {
    heading: string;
    isDeleting?: boolean;
};

const TaskListing: React.FC<Props> = ({ heading, isDeleting = false }) => {
    const { allTasks, deleteTasks } = useContext(AppContext);
    const [checkedIds, setCheckedIds] = useState<number[]>([]);

    const handleToggleChecked = (taskId: number) => {
        setCheckedIds((prevIds) => {
            if (prevIds.includes(taskId)) {
                return prevIds.filter((id) => id !== taskId);
            } else {
                return [...prevIds, taskId];
            }
        });
    };

    const handleDelete = () => {
        deleteTasks(checkedIds);
        setCheckedIds([]);
    };

    return (
        <>
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
                {heading}
            </Typography>
            <Grid container spacing={2}>
                {allTasks.map(({ id, ...rest }) => (
                    <Grid item key={id} xs={12} sm={12} md={12}>
                        <TaskCard
                            {...rest}
                            taskId={id}
                            isDeleting={isDeleting}
                            isChecked={checkedIds.includes(id)}
                            onToggleChecked={() => handleToggleChecked(id)}
                        />

                    </Grid>
                ))}
            </Grid>

            {isDeleting &&
                <Button
                    variant="contained"
                    color="warning"
                    type="submit"
                    sx={{ mt: "2rem" }}
                    disabled={!checkedIds.length}
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            }
        </>
    );
};

export default TaskListing;