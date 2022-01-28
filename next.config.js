module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://calendly.com/bozbalci/30min',
                permanent: false
            }
        ]
    }
}
