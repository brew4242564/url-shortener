import { supabase } from "./services/supabase.js"
const BASE_URL = process.env.BASE_URL;
const history = async () => {
    const { data, error } = await supabase.from("URL_SHORTENER").select('id, link, created_at');
    if (error) {
        console.error("Error fetching history", error.message);
        return;
    }

    data.forEach(row => {
        console.log(`${BASE_URL}${row.id} → ${row.link} → ${row.created_at}`)
    })
}

history();