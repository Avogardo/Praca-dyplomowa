module.exports = app => {
  app.get('/table', async (req, res) => {
    res.send({
      tableData: [
        ['title', true, 54],
        ['title', true, 54],
        ['title', true, 54],
        ['title', true, 54],
      ],
    });
  });
};
