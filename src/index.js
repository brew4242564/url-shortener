import { supabase } from './services/supabase.js';

const createUrl = async(url) =>{
    if(!url){
        console.error("You must enter a URL");
        return;
    }
    const {data, error} = await supabase.from("URL_SHORTENER").insert([{link: url,}])
    if(error) {
        console.error("Error on createURL: ", error.message);
        return;
    }
    console.log('Sucess');
}

const urlInput = process.argv[2];

createUrl(urlInput);


