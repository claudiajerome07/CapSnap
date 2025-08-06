const Caption = require('../model/Caption');

const createCaption=async(req,res)=>{
    try{

        const {ImageUrl, caption} = req.body;
        const newCaption = await Caption.create({
            userId: req.user.id,
            ImageUrl,
            caption
        });

        return res.status(201).json(newCaption);

        

    }catch(err){
        return res.status(500).json({message:err.message});
    }
}

const getCaptions = async (req, res) => {
    try{
        const captions = await Caption.find({ userId: req.user.id }).sort({ createdAt: -1 });
        return res.status(200).json(captions);

    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const getCaptionById=async(req,res)=>{
    try{
        const id=req.params.id;
        const caption = await Caption.findById(id).populate('userId', 'username');
        if (!caption) {
            return res.status(404).json({ message: 'Caption not found.' });
        }
        return res.status(200).json(caption);

    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const updateCaption=async(req,res)=>{
    try{
        const id= req.params.id;
        const { caption } = req.body;
        const updatedCaption = await Caption.findByIdAndUpdate(
            id,
            { caption },
            { new: true }
        ).populate('userId', 'username');
        if (!updatedCaption) {
            return res.status(404).json({ message: 'Caption not found.' });
        }
        return res.status(200).json(updatedCaption);

    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const deleteCaption=async(req,res)=>{
    try{
        const deleted = await Caption.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Caption not found.' });
        }
        return res.status(200).json({ message: 'Caption deleted successfully.' });
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

module.exports = {
    createCaption,
    getCaptions,
    getCaptionById,
    updateCaption,
    deleteCaption
};