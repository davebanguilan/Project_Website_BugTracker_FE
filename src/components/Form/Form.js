import React, {useState} from 'react';
import {TextField , Button, Typography, Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import useStyles from './styles';

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
    })

    const sampleUsers = [
        {name: "Dave Banguilan"},
        {name: "Emiliano Banguilan"},
        {name: "Mickey Mouse"},
        {name: "John Wick"},
        {name: "Tom Kirkman"},
        {name: "Juan Dela Cruz"},
    ];

    const handleSubmit = () => {};

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
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        name="members"
                        variant="outlined"
                        label="Member"
                        placeholder="Add a member"
                        
                        value={bugData.members} 
                        onChange={(e) => setBugData({ ...bugData, members: e.target.value})}
                    />
                    )}
                />
                {/* <TextField name="members" variant="outlined" label="Members" fullWidth value={bugData.members} onChange={(e) => setBugData({ ...bugData, members: e.target.value})} /> */}
                <TextField name="severity" variant="outlined" label="Severity" fullWidth value={bugData.severity} onChange={(e) => setBugData({ ...bugData, severity: e.target.value})} />
                <TextField name="status" variant="outlined" label="Status" fullWidth value={bugData.status} onChange={(e) => setBugData({ ...bugData, status: e.target.value})} />

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add Bug</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                
                
            </form>
        </Paper>
    )
}

export default Form;
