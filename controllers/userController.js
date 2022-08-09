exports.newMessage = (arr) => {
  return (req, res) => {
    const { text, user } = req.body;
    arr.push({ text, user, added: new Date() });
    res.redirect(req.originalUrl);
  };
};
