import { supabase } from './services/supabase.js';
import { nanoid } from 'nanoid';

const BASE_URL = process.env.BASE_URL
const createUrl = async (url) => {
    if (!url) {
        console.error("You must enter a URL");
        return;
    }
    let inserted = false;
    while (!inserted) {
        let code = nanoid(7);
        const { error } = await supabase.from("URL_SHORTENER").insert([{ link: url, id: code, }])
        if (!error){
            inserted = true;
            console.log(`${BASE_URL}${code}`);
        } 
        // error 23505 is duplicate value in primary key or value with unique constraint.
        if (error && error.code !== '23505') {
            console.error("Error on createURL: ", error.message);
            return;
        }
    }
}

const urlInput = process.argv[2];
createUrl(urlInput);

