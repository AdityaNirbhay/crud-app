import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState} from 'react';
import {addUser} from '../services/api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
    width:25%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 30px;
    }
`

const defaultValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}


const AddUser = () => {
    const [user,setUser] = useState(defaultValues);

    const {name, username, email, phone} = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return(
        <Container>
            <Typography variant="h3">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone No.</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant='outlined' onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;