import React, {useState} from 'react';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import moment from 'moment';
import useStyles from './styles.js';
import Modal from '@material-ui/core/Modal';
import Form from '../../Form/Form.js';

const Bug = ({bug}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState(0);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.card}>
            <div className={classes.media}>

            </div>
            <div className={classes.overlay}>
                <Typography variant="h4">{bug.title}</Typography>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginTop: '10px'
                }}>
                
                    <ScheduleOutlinedIcon/>
                    &nbsp;
                    <Typography variant="h6">{moment(bug.createdAt).fromNow()}</Typography>

                </div>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'blue'}} size="small" onClick={() => {
                    handleOpen();
                    setCurrentId(bug._id);
                }}>
                    <EditIcon fontSize="default" />
                </Button>
                <Modal className={classes.modal} open={open} onClose={handleClose}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} />
                </Modal>
            </div>
            <CardContent>
                <Typography variant="h5" className={classes.creator}>{bug.creator}</Typography>
                <div className={classes.details}>
                    <Typography variant="h6" color="textSecondary">Members: </Typography>
                    <Typography variant="h6" >{bug.members.map((member, i) => bug.members.length === i + 1 ? `${member}` : `${member}, `)}</Typography>
                    <div>
                        <Typography display="inline" variant="h6" color="textSecondary">Severity: </Typography>
                        <Typography display="inline" variant="h6" style={{color: bug.severity === "High" ? "red" : "textSecondary" }}>{bug.severity}</Typography>
                    </div>
                    <div>
                    <Typography display="inline" variant="h6" color="textSecondary">Status: </Typography>
                    <Typography display="inline" variant="h6" style={{color: bug.status === "Completed" ? "green" : "textSecondary" }}>{bug.status}</Typography>
                    </div>
                </div>
                <div className={classes.details}>
                    <Typography variant="h6" color="textSecondary">Description: </Typography>
                    <Typography variant="h5">{bug.description}</Typography>
                </div>
            </CardContent>
            
            <CardActions>
                <Button size="small" color="secondary" onClick={()=>{}}>
                    <DeleteIcon />
                    Delete  
                </Button>
            </CardActions>
        </Card>
    )
}

export default Bug;
