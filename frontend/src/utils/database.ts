import { Pool } from 'pg'

const pool = new Pool({
    user: 'your-username',
    host: 'localhost',
    database: 'your-database',
    password: 'your-password',
    port: 5432,
})

export async function saveToDatabase(data: {
    imageUrl: string
    result: string
}) {
    const query =
        'INSERT INTO analysis_history (image_url, result, uploaded_at) VALUES ($1, $2, NOW())'
    const values = [data.imageUrl, data.result]
    await pool.query(query, values)
}

export async function fetchHistoryFromDatabase() {
    const query = 'SELECT * FROM analysis_history ORDER BY uploaded_at DESC'
    const { rows } = await pool.query(query)
    return rows
}
