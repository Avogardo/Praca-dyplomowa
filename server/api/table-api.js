module.exports = app => {
  app.get('/table', async (req, res) => {
    res.send({
      tableData: [
        ['title', true, 54, "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png"],
        ['title', true, 54, "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png"],
        ['title', true, 54, "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png"],
        ['title', true, 54, "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png"],
        ['title', true, 54, "https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png"],
      ],
    });
  });
};
