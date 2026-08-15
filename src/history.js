import Table from "cli-table3";
import { supabase } from "./services/supabase.js"

const BASE_URL = process.env.BASE_URL;

const table = new Table({
    head:['Short Link', 'Link', 'Created at'],
})

const PAGES = 20;
const history = async (page=0) => {
    const from = page * PAGES;
    const to = from + PAGES - 1;
    const { data, error, count } = await supabase.from("URL_SHORTENER")
    .select('id, link, created_at', {count: 'exact'})
    .order('created_at', {ascending: false})
    .range(from,to);
    if (error) {
        console.error("Error fetching history", error.message);
        return;
    }

    data.forEach(row => {
        table.push([`${BASE_URL}${row.id}`, row.link, row.created_at]);
    })
    const maxPages = Math.ceil(count / PAGES);
    console.log(table.toString());
    console.log(`page ${parseInt(page) + 1} of ${maxPages} — viewing ${data.length} of ${count} links`);
}
const pageArgv = process.argv[2];
const page = pageArgv ? parseInt(pageArgv) -1 : 0;
history(page);