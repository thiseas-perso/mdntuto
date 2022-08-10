const Genre = require('../models/genre');
const Book = require('../models/book');

// Display list of all Genre.
exports.genre_list = async (req, res) => {
  const genre_list = await Genre.find();
  res.render('genre_list', { title: 'Genre list', genre_list });
};

// Display detail page for a specific Genre.
exports.genre_detail = async (req, res) => {
  const genre = await Genre.findById(req.params.id);
  const genre_books = await Book.find({ genre: req.params.id });
  res.render('genre_detail', {
    title: 'Genre Detail',
    genre,
    genre_books,
  });
};

// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render('genre_form', { title: 'Create Genre' });
};

// Handle Genre create on POST.
exports.genre_create_post = async (req, res) => {
  const { name } = req.body;
  const found = await Genre.findOne({ name });
  if (found) {
    res.redirect(found.url);
  } else if (name) {
    const genre = await Genre.create({ name });
    res.redirect(genre.url);
  }
};

// Display Genre delete form on GET.
exports.genre_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre update POST');
};
