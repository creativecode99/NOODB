const = (req, res) => {
    const ID = myMemes.length + 1;
    const { topText, bottomText, url } = req.body;
    if (!topText || !bottomText || !url) {
      return res.status(417).json("Name and URL are required");
    }
    myMemes.push({ topText, bottomText, url, ID });
    res.json(myMemes);
  };