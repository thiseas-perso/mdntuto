const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

exports.index = async function (req, res) {
  try {
    const book_count = await Book.countDocuments();
    const book_instance_count = await BookInstance.countDocuments();
    const book_instance_available_count = await BookInstance.countDocuments({
      status: 'Available',
    });
    const author_count = await Author.countDocuments();
    const genre_count = await Genre.countDocuments();

    res.render('index', {
      title: 'Local Library Home',
      data: {
        book_count,
        book_instance_count,
        book_instance_available_count,
        author_count,
        genre_count,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// Display list of all books.
exports.book_list = async (req, res) => {
  try {
    const book_list = await Book.find({}, 'title author')
      .sort({ title: 1 })
      .populate('author');
    console.log(book_list);
    //Successful, so render
    res.render('book_list', { title: 'Book List', book_list });
  } catch (err) {
    console.log(err);
  }
};

// Display detail page for a specific book.
exports.book_detail = async (req, res) => {
  const book = await Book.findById(req.params.id);
  const book_instances = await BookInstance.find({ book: req.params.id });
  res.render('book_detail', {
    title: book.title,
    book,
    book_instances,
  });
};

// Display book create form on GET.
exports.book_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book update POST');
};
