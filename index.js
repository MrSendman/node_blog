const app = require('./app');
const database = require('./database');
const config = require('./config');

database().then(info => {
    console.log(`connected to ${info.host}:${info.port}/${info.name}`);
    app.listen(config.PORT, function(){
    console.log('200 ok');
});
}).catch(() => {
    console.error('unabel to connect to database');
    process.exit(1);
})



