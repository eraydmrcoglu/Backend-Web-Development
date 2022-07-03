exports.getAboutPage =(req,res)=>{
    res.status(200).render("about",{
        page_name :'about'
    })
}
exports.getIndexPage =(req,res)=>{
    res.status(200).render("index",{
        page_name :'index'
    })
}

exports.getGalleryPage =(req,res)=>{
    res.status(200).render("gallery",{
        page_name :'gallery'
 
    })
}
exports.getTrainerPage =(req,res)=>{
    res.status(200).render("trainer",{
        page_name :'trainer'
    })
}
exports.getContactPage =(req,res)=>{
    res.status(200).render("contact",{
        page_name :'contact'
    })
}