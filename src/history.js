import Table from "cli-table3";
import { supabase } from "./services/supabase.js"

const BASE_URL = process.env.BASE_URL;

const table = new Table({
    head:['Short Link', 'Link', 'Created at'],
})

const history = async () => {
    const { data, error } = await supabase.from("URL_SHORTENER").select('id, link, created_at');
    if (error) {
        console.error("Error fetching history", error.message);
        return;
    }

    data.forEach(row => {
        table.push([`${BASE_URL}${row.id}`, row.link, row.created_at]);
    })
    console.log(table.toString());
}

history();