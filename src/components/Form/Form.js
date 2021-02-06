import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {TextField , Button, Typography, Paper, Select, InputLabel, MenuItem, FormControl  } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import useStyles from './styles';

import {createBug} from '../../actions/bugs';

const Form = () => {
    const classes = useStyles();
    const [bugData, setBugData] = useState({
        creator: "",
        title: "",
        description: "",
        project: "",
        members: [],
        severity: "",
        status: ""
    });
    const dispatch = useDispatch();

    const sampleUsers = [
        {name: "Mickey Mouse"},
        {name: "John Wick"},
        {name: "Tom Kirkman"},
        {name: "Juan Dela Cruz"},
        
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(bugData);
        dispatch(createBug(bugData));
    };

    const clear = () => {};

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} noValidate onSubmit={handleSubmit}>
                <Typography variant="h6"> Creating a Bug </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={bugData.creator} onChange={(e) => setBugData({ ...bugData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={bugData.title} onChange={(e) => setBugData({ ...bugData, title: e.target.value})} />
                <TextField name="description" multiline rows={4} variant="outlined" label="Description" fullWidth value={bugData.description} onChange={(e) => setBugData({ ...bugData, description: e.target.value})} />
                <TextField name="project" variant="outlined" label="Project" fullWidth value={bugData.project} onChange={(e) => setBugData({ ...bugData, project: e.target.value})} />
                <Autocomplete
                    multiple
                    limitTags={1}
                    options={sampleUsers}
                    getOptionLabel={(option) => option.name}
                    fullWidth
                    onChange={(e, newMember) => setBugData({ ...bugData, members: newMember.map((n) => n.name) })}
                    getOptionSelected={(option, value) => option.name === value.name}
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

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add Bug</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                
                
            </form>
        </Paper>
    )
}

export default Form;
