module.exports = {
    columns: 12,
    outputStyle: 'scss',
    offset: '10px',
    mobileFirst: false,
    container: {
        maxWidth: "950px",
        fields: "30px"
    },
    breakPoints: {
        md: {
            width: "992px"
        },
        sm: {
            width: "720px",
        	fields: "20px"
        },
        xs: {
            width: "576px",
        	fields: "10px"
        },
        xxs: {
        	width: "400px"
        }
    }
};