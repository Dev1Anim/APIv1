import { NextApiRequest, NextApiResponse } from 'next'; // Import types
import fetch from 'node-fetch'; // Import fetch for making API requests

// Define the expected structure of the response
interface MediaResponse {
    data: {
        Media: {
            id: number;
            title: {
                romaji: string;
                english: string;
            };
            siteUrl: string;
        };
    };
}

export const runtime = 'edge'; // Add runtime export

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query; // Get the MAL ID from the query parameters

    // Ensure id is present and is a valid string
    if (!id || Array.isArray(id) || typeof id !== 'string' || id.trim() === '') {
        return res.status(400).json({ error: 'Invalid MAL ID', details: 'The MAL ID must be a non-empty string.' });
    }

    const query = `
        query ($idMal: Int) {
            Media(idMal: $idMal) {
                id
                title {
                    romaji
                    english
                }
                siteUrl
            }
        }
    `;

    const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { idMal: parseInt(id) },
        }),
    });

    const data = await response.json() as MediaResponse; // Type assertion

    if (!data || !data.data || !data.data.Media) {
        res.status(500).json({ error: 'Invalid response structure' });
        return; // Exit the function if the structure is not as expected
    }

    const { id: mediaId, title, siteUrl } = data.data.Media; // Renamed 'id' to 'mediaId'
    
    res.status(200).json({ 
        aniListId: mediaId, // Use 'mediaId' here
        title: {
            romaji: title.romaji,
            english: title.english
        },
        siteUrl 
    });
}
