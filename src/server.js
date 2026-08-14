import express from 'express';
import { supabase } from './services/supabase';

const app = express();


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Listening port: ${PORT}`)
})