import {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {exercisesOptions, fetchData} from '../utils/fetchData.js';
import HorizontalScrollbar from './HorizontalScrollbar.jsx';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('')
    // const [exercises, setExercises] = useState([]);
    
    const [bodyParts, setBodyParts] = useState([]);
    
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);
            setBodyParts(['all', ...bodyPartsData]);
           
        }

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

            console.log(exercisesData)
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) 
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
                
            ); 

           

            setSearch('');
            // setExercises(searchedExercises);
            setExercises(exercisesData);
        }
    }
  return (
    <Stack alignItems ="center" mt="330px" justifyContent="center" p="20px">
        <Typography color = "white" fontWeight ={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} mb="50px" textAlign="center" fontFamily="Michroma, sans-serif">
            CHECKOUT SOME OF OUR WORKOUTS
        </Typography>
        <Box position="relative" mb ="72px">
            <TextField 
                sx={{ 
                input: { 
                 fontWeight: '700',
                 border: 'none', 
                 borderRadius: '4px'},
                width: {lg: '800px', xs: '350px', backgroundColor: 'red'}}}
            height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search" type="text"
            />
            <Button className="search-btn"
            sx={{
                bgcolor: 'yellow', 
                color: 'red', 
                textTransform: 'none', 
                width: {lg: '175px', xs: '80px'},
                fontSize: { lg: '20px', xs: '14px'}, 
                height: '56px', 
                position: "absolute", 
                right: '0'
            }}
            onClick={handleSearch}
            >Search</Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p:'5px'}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises