import { NextApiRequest, NextApiResponse } from 'next'; // Import types
import fetch from 'node-fetch'; // Import fetch for making API requests

// Define the expected structure of the response data
interface MediaResponse {
    data: {
        Media: {
            idMal: number;
            title: {
                romaji: string;
                english: string;
            };
            siteUrl: string;
            type: string;
        };
    };
}

export const runtime = 'edge'; // Add runtime export

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query; // Get the AniList ID from the query parameters

    const query = `
        query ($id: Int) {
            Media(id: $id) {
                idMal
                title {
                    romaji
                    english
                }
                siteUrl
                type
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
            variables: { id: parseInt(id as string) },
        }),
    });

    const data = await response.json() as MediaResponse; // Type assertion

    if (!data || !data.data || !data.data.Media) {
        res.status(500).json({ error: 'Invalid response structure' });
        return; // Exit the function if the structure is not as expected
    }

    const { idMal, title, siteUrl, type } = data.data.Media;

    const malLink = `https://myanimelist.net/${type}/${idMal}`;

    res.status(200).json({ 
        malId: idMal, 
        title: {
            romaji: title.romaji,
            english: title.english
        },
        siteUrl,
        malLink
    });
}
