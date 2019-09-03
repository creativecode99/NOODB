let Salesletter = "";

function createLetter(req,res) {
    let { headline, openingSentence, firstPara, selfIntro, advStory, bodyCopy, solution, offerIntro, offer, bonuses, price, guarantee,
    overview, cta, ps, pps, ppps} = req.body;
    Salesletter = headline + openingSentence + firstPara + selfIntro + advStory +
    bodyCopy + solution + offerIntro + offer + bonuses + price + guarantee +
    overview + cta + ps + pps + ppps;
    
    res.status(200).json(Salesletter)

}

function deleteLetter(req,res){
    Salesletter = "";

    res.status(200).json(Salesletter)
}
module.exports = {
createLetter,
deleteLetter

}

// let {bodyCopy, headline} = req.body;
//     Salesletter = req.body.headline + req.body.openingSentence + req.body.firstPara + req.body.selfIntro + req.body.advStory +
//     req.body.bodyCopy + req.body.solution + req.body.offerIntro + req.body.offer + req.body.bonuses + req.body.price + req.body.guarantee +
//     req.body.overview + req.body.cta + req.body.ps + req.body.pps + req.body.ppps;


            


