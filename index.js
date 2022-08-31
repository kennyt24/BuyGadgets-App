const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const userRouter = require('./routes/route');
const adminRouter = require('./routes/adminroute');
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT || 4000;

//app logic
app.get('/', (_req, res) => {
  return res.status(200).json({ messag: 'home page' });
});

//mount
app.use('/api/buyg', userRouter);
app.use('/api/buyg', adminRouter);

//404 page
app.all('*', (_req, res) => {
  res.status(404).json({ messag: '404 page' });
});

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
