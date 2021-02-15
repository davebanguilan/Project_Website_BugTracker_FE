import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Grow, Grid, TextField , Button, Typography, Paper, Select, InputLabel, MenuItem, FormControl  } from '@material-ui/core';
    import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSelector } from 'react-redux';

import useStyles from './styles';

import {createBug, updateBug} from '../../actions/bugs';

const Form = ({currentId, setCurrentId, handleClose, notificationOpen}) => {
    const classes = useStyles();
    const [bugData, setBugData] = useState({
        title: "",
        description: "",
        project: "",
        members: [],
        severity: "",
        status: ""
    });
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const bug = useSelector((state) => currentId ? state.bugs.find((b) => b._id === currentId) : null);

    useEffect(() => {
       if(bug) setBugData(bug); 
    }, [bug]);

    const sampleUsers = [
        "Mickey Mouse",
        "John Wick",
        "Tom Kirkman",
        "Juan Dela Cruz",
        
    ];

    const clear = () => {
        setCurrentId(0);
        setBugData({
            title: "",
            description: "",
            project: "",
            members: [],
            severity: "",
            status: ""
        });
        handleClose();
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(currentId === 0){
            dispatch(createBug({ ...bugData, name: user?.result?.name }));
            clear();
            notificationOpen(true);
        } else {
            dispatch(updateBug(currentId, {...bugData, name: user?.result?.name }));
            clear();
            notificationOpen(false);
        }

        
    };
    
    return (
        <Grow in>
            <Grid container justify="center" alignItems="stretch" spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <form autoComplete="off" className={`${classes.root} ${classes.form}`} noValidate onSubmit={handleSubmit}>
                            <Typography variant="h6"> {currentId ? "Editing" : "Creating"} a Bug </Typography>
                            <TextField name="title" variant="outlined" label="Title" fullWidth value={bugData.title} onChange={(e) => setBugData({ ...bugData, title: e.target.value})} />
                            <TextField name="description" multiline rows={4} variant="outlined" label="Description" fullWidth value={bugData.description} onChange={(e) => setBugData({ ...bugData, description: e.target.value})} />
                            <TextField name="project" variant="outlined" label="Project" fullWidth value={bugData.project} onChange={(e) => setBugData({ ...bugData, project: e.target.value})} />
                            <Autocomplete
                                multiple
                                limitTags={3}
                                value={bugData.members}
                                options={sampleUsers}
                                getOptionLabel={(option) => option}
                                fullWidth
                                onChange={(e, newMember) => setBugData({ ...bugData, members: newMember })}
                                getOptionSelected={(option, value) => option === value}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name="members"
                                    variant="outlined"
                                    label="Members"
                                    placeholder="Add a member"
                                    value={bugData.members}
                                    
                                />
                                )}
                            />
                            
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                <InputLabel>Severity</InputLabel>
                                <Select
                                name="severity"
                                label="Severity"
                                value={bugData.severity}
                                onChange={(e) => setBugData({ ...bugData, severity: e.target.value})} >
                                    <MenuItem value="Low">Low</MenuItem>
                                    <MenuItem value="Medium">Medium</MenuItem>
                                    <MenuItem value="High">High</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                <InputLabel>Status</InputLabel>
                                <Select
                                name="status" 
                                variant="outlined" 
                                label="Status"
                                value={bugData.status}
                                onChange={(e) => setBugData({ ...bugData, status: e.target.value})} >
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="Assigned">Assigned</MenuItem>
                                    <MenuItem value="Completed">Completed</MenuItem>
                                </Select>
                            </FormControl>

                            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Close</Button>
                            
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Grow>
    )
}

export default Form;
