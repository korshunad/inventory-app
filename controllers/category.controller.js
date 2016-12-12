import Category from '../models/category';
import Good from '../models/good';

// Get all categories

export function getCategories(req, res) {
  Category.find().exec((err, categories) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ categories });
  });
}

// Save a category

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

// Get a single category

export function getCategory(req, res) {
  Category.findOne({ _id: req.params.id }).exec((err, category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ category });
  });
}

// Delete a category

export function deleteCategory(req, res) {
  Category.findOne({ _id: req.params.id }).exec((findErr, category) => {
    if (findErr) {
      res.status(500).send(findErr);
    }

    category.remove(() => {


    Good.update({categoryId:req.params.id},{categoryId:null},{multi:true}, function(updateErr,affected) {
       if (updateErr) {
         res.status(500).send(updateErr)
       }
   
        res.status(200).end();
      }); 

    });
  });
}

