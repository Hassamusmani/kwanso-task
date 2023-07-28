import React from 'react';
import { Card, CardContent, Typography, Checkbox, Box } from '@mui/material';

interface Props {
    label: string;
    description: string;
    isDeleting?: boolean;
    isChecked: boolean;
    onToggleChecked: () => void;
}

const TaskCard: React.FC<Props> = ({ label, description, isDeleting, isChecked, onToggleChecked }) => {
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
                {isDeleting && <Checkbox checked={isChecked} color="primary" />}
            </CardContent>
        </Card>
    );
};

export default TaskCard;
