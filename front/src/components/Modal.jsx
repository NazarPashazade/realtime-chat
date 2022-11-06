import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from 'react';
import { PostContext } from '../contexts/PostContext';


export default function CreatePost({ open, setOpen }) {

  const { addPost } = useContext(PostContext)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handlePost = () => {
    addPost({ id: Math.random(), title, body })
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ color: 'red' }}>
          Create new one:
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '500px' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Description"
                  onChange={(e) => setBody(e.target.value)}
                />

              </div>

            </Box>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handlePost}>Create</Button>
          <Button variant="contained" color="error" onClick={() => setOpen(false)} autoFocus> Close </Button>


        </DialogActions>
      </Dialog>
    </div>
  );
}