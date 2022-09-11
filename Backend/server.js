const app = require('./src/app')
const PORT = 8888

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})