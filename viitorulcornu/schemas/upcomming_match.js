export default {
    name: 'upcomming_match',
    title: 'Upcomming Match',
    type: 'document',
    fields: [
        {
            name: 'gazda',
            title: 'Gazda',
            type: 'string',
        },
        {
            name: 'poza_gazda',
            title: 'Poza Gazda',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'oaspeti',
            title: 'Oaspeti',
            type: 'string',
        },
        {
            name: 'poza_oaspeti',
            title: 'Poza Oaspeti',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ora',
            title: 'Ora',
            type: 'string',
        },
        {
            name: 'stadion',
            title: 'Stadion',
            type: 'string',
        },
        {
            name: 'ziua',
            title: 'Ziua',
            type: 'string',
        },
        {
            name: 'luna',
            title: 'Luna',
            type: 'string',
        },
        {
            name: 'ziua_saptamanii',
            title: 'Ziua Saptamanii (Luni, Marti)',
            type: 'string',
        },

    ],
}
