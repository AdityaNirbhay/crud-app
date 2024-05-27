import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useEffect, useState} from 'react';
import {editUser, getUser} from '../services/api';
import {useNavigate, useParams} from 'react-router-dom';

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


const EditUser = () => {
    const [user,setUser] = useState(defaultValues);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    },[])

    const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    }
    const editUserDetails = async () => {
        await editUser(user,id);
        navigate('/all');
    }

    return(
        <Container>
            <Typography variant="h3">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone No.</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant='outlined' onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;