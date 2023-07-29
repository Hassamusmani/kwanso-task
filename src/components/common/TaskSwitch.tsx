import React, { useContext } from 'react';
import { Box, Typography, Switch } from '@mui/material';
import AppContext from '../../context';

interface Props {
    checked?: boolean;
    taskId?: number;
    isDisabled?: boolean;
};

const TaskSwitch: React.FC<Props> = ({ checked = false, taskId = Date.now(), isDisabled = false }) => {
    const { handleTaskStatus } = useContext(AppContext);

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography component="div">Completed:</Typography>
            <Switch
                checked={checked}
                onChange={() => handleTaskStatus(taskId)}
                disabled={isDisabled}
            />
        </Box>
    );
};

export default TaskSwitch;