import { NextApiRequest, NextApiResponse } from 'next'; // Import types
import { ANIME } from '@consumet/extensions'; // Import Consumet extensions

type DownloadLink = {
    source: string;
    link: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) { // Add types
   const id = req.query.id?.toString().replace('/', ''); // Change epId to id and remove "/"

   if (!id || typeof id !== 'string') {
       return res.status(400).json({ error: 'Invalid episode ID', details: 'The episode ID must be a non-empty string.' });
   }

   try {
       const gogoanime = new ANIME.Gogoanime();
       
       // Attempt to fetch episode data using the first method
       let episodeData;
       try {
           episodeData = await gogoanime.fetchEpisodeSources(id); // Use current method
       } catch (error) {
           console.error('First method failed:', error);
       }

       // Attempt to fetch episode data using the second method if the first fails
       let downloadUrl;
       if (!episodeData) {
           const response = await fetch(`${process.env.API_URL}/anime/gogoanime/servers/${id}`);
           const serverData = await response.json();
           downloadUrl = serverData.find((server: { name: string }) => server.name === "Gogo server")?.url.replace("embedplus", "download");
       }

       // If downloadUrl is found, fetch direct download links
       const directDownloadLinks = downloadUrl ? await gogoanime.fetchDirectDownloadLink(downloadUrl) : [];

       if (!episodeData && !downloadUrl) {
           return res.status(404).json({ error: 'Download URL not found', details: `No download URL found for episode ID: ${id}` }); // Enhanced error details
       }

       // Create download links array
       const downloadLinks: DownloadLink[] = directDownloadLinks.map((link: { source: string | undefined; link: string | undefined }) => ({
           source: link.source || '', // Provide a default value to avoid undefined
           link: link.link || '' // Remove proxy and provide a default value
       }));

       res.status(200).json(downloadLinks);
   } catch (error) {
       console.error('Error occurred:', error instanceof Error ? error : new Error('Unknown error')); // Enhanced error logging
       res.status(500).json({ error: 'Internal Server Error', details: error instanceof Error ? error.message : 'An unexpected error occurred while processing your request.' }); // Updated error details
   }
}
