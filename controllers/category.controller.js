import Category from '../models/category';
import Good from '../models/good';

// Get all categories

export function getCategories(req, res) {
  Category.find().exec((err, categories) => {
    if (err) {
       return res.status(500).send(err);
    }
    res.json({ categories });
  });
}

// Save a category

export function addCategory(req, res) {
  if (!req.body.category.name) {
    return res.status(403).end();
  }

  const newCategory = new Category(req.body.category);

  newCategory.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ category: saved });
  });
}

// Delete a category

export function deleteCategory(req, res) {
  Category.findOne({ _id: req.params.id }).exec((findErr, category) => {
    if (findErr) {
      return res.status(500).send(findErr);
    }

    category.remove(() => {


    Good.update({categoryId:req.params.id},{categoryId:null},{multi:true}, function(updateErr,affected) {
       if (updateErr) {
        return res.status(500).send(updateErr)
       }
   
        res.status(200).end();
      }); 

    });
  });
}

