import React from 'react';

const HomePage = () => {
    return (
        <div style={{ 
            padding: '40px', 
            fontFamily: 'Arial, sans-serif', 
            backgroundColor: '#1A1A1A', 
            color: '#EAEAEA', 
            minHeight: '100vh' 
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Welcome to 1AniAPI</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                1AniAPI is a powerful API that allows users to fetch Direct Download Links (DDL) from gogoanime using the Consumet API. 
                It also provides seamless integration between AniList and MyAnimeList (MAL), allowing users to convert AniList IDs to MAL IDs and vice versa.
            </p>
            <h2 style={{ fontSize: '2rem', marginTop: '30px' }}>Endpoints</h2>
            <h3 style={{ fontSize: '1.5rem' }}>AniList to MAL</h3>
            <p>
                <strong>Endpoint:</strong> <code>/api/al-mal/[id]</code><br />
                <strong>Method:</strong> GET<br />
                <strong>Description:</strong> Converts an AniList ID to a MAL ID.
            </p>
            <h3 style={{ fontSize: '1.5rem' }}>MAL to AniList</h3>
            <p>
                <strong>Endpoint:</strong> <code>/api/mal-al/[id]</code><br />
                <strong>Method:</strong> GET<br />
                <strong>Description:</strong> Converts a MAL ID to an AniList ID.
            </p>
            <h3 style={{ fontSize: '1.5rem' }}>Gogoanime DDL</h3>
            <p>
                <strong>Endpoint:</strong> <code>/api/dl/[id]</code><br />
                <strong>Method:</strong> GET<br />
                <strong>Description:</strong> Get DDL of a Gogoanime episode.
            </p>
            <h2 style={{ fontSize: '2rem', marginTop: '30px' }}>Example Usage</h2>
            <p>
                To convert an AniList ID to a MAL ID, you can use the following example:<br />
                <code>/api/al-mal/170942</code> - AniList ID for Blue Box
            </p>
            <h2 style={{ fontSize: '2rem', marginTop: '30px' }}>Special Thanks</h2>
            <p>
                - <a href="https://anilist.co" style={{ color: '#4E9FD1' }}>AniList API</a><br />
                - <a href="https://consumet.org" style={{ color: '#4E9FD1' }}>Consumet API</a>
            </p>
        </div>
    );
};

export default HomePage;
