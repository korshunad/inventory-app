import Category from '../models/category';


/**
 * Get all categories
 * @param req
 * @param res
 * @returns void
 */
export function getCategories(req, res) {
  Category.find().exec((err, categories) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ categories });
  });
}

/**
 * Save a category
 * @param req
 * @param res
 * @returns void
 */
export function addCategory(req, res) {
  if (!req.body.category.name) {
    res.status(403).end();
  }

  const newCategory = new Category(req.body.category);


  newCategory.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ category: saved });
  });
}

/**
 * Get a single category
 * @param req
 * @param res
 * @returns void
 */
export function getCategory(req, res) {
  Category.findOne({ id: req.params.id }).exec((err, category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ category });
  });
}

/**
 * Delete a category
 * @param req
 * @param res
 * @returns void
 */
export function deleteCategory(req, res) {
  Category.findOne({ id: req.params.id }).exec((err, category) => {
    if (err) {
      res.status(500).send(err);
    }

    category.remove(() => {
      res.status(200).end();
    });
  });
}

