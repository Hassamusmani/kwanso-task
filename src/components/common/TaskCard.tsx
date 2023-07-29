import React from 'react';
import { Card, CardContent, Typography, Checkbox, Box } from '@mui/material';
import TaskSwitch from './TaskSwitch';

interface Props {
    label: string;
    description: string;
    isCompleted: boolean;
    taskId: number;
    isDeleting?: boolean;
    isChecked: boolean;
    onToggleChecked: () => void;
}

const TaskCard: React.FC<Props> = ({ taskId, label, description, isDeleting, isChecked, onToggleChecked, isCompleted }) => {
    return (
        <Card variant="outlined" onClick={onToggleChecked}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography variant="h6" gutterBottom>
                        {label}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {description}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 4 }}>
                    <TaskSwitch checked={isCompleted} taskId={taskId} isDisabled={isDeleting} />
                    {isDeleting && <Checkbox checked={isChecked} color="primary" />}
                </Box>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
