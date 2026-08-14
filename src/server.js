import express from 'express';
import { supabase } from './services/supabase.js';
const app = express();

app.get('/:code', async(req, res)=> {
    const {code} = req.params;
    const {data, error} = await supabase.from("URL_SHORTENER").select('link').eq('id', code).single();
    if(error || !data){
        return res.status(404).send('URL no encontrada');
    }
    res.redirect(data.link);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Listening port: ${PORT}`)
}) 