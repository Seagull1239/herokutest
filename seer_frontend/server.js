app.use(express.static('./dist/seer-front.json'));

app.get('/', function(req,res) {
    res.sendFile('index.html', {root: 'dist/seer-front.json/'}
);
});

app.listen(process.env.PORT || 8081);