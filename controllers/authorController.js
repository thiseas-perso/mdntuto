const Author = require('../models/author');
const Book = require('../models/book');

// Display list of all Authors.
exports.author_list = async (req, res) => {
  const author_list = await Author.find().sort([['family_name', 'ascending']]);
  res.render('author_list', { title: 'Author List', author_list });
};

// Display detail page for a specific Author.
exports.author_detail = async (req, res) => {
  const author = await Author.findById(req.params.id);
  const author_books = await Book.find({ author: req.params.id });
  res.render('author_detail', {
    title: 'Author Detail',
    author,
    author_books,
  });
};

// Display Author create form on GET.
exports.author_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Author update POST');
};
