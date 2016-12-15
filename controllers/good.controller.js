import Good from '../models/good';

// Get all goods

export function getGoods(req, res) {
  Good.find().exec((err, goods) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ goods });
  });
}

// Save a good

export function addGood(req, res) {
  console.log(req.body)
  if (!req.body.good.name || !req.body.good.purchasingPrice || !req.body.good.retailPrice) {
    res.status(403).end();
  }

  const newGood = new Good(req.body.good);

  newGood.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ good: saved });
  });
}

// Edit a good

export function editGood(req, res) {
 Good.findOne({_id:req.params.id}).exec((err, good) => {
    if(err){
      res.status(500).send(err);
    } else {

        good.categoryId = req.body.good.categoryId || good.categoryId;
        good.name= req.body.good.name || good.name;
        good.purchasingPrice = req.body.good.purchasingPrice || good.purchasingPrice;
        good.retailPrice = req.body.good.retailPrice || good.retailPrice;

 good.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ good: saved });
  });

    }
  });
}


// Delete a good

export function deleteGood(req, res) {
  Good.findOne({ _id: req.params.id }).exec((err, good) => {

    if (err) {
      res.status(500).send(err);
    }

    good.remove(() => {
      res.status(200).end();
    });
  });
}

