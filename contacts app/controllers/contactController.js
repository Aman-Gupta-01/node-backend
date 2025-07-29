import asyncHandler from "express-async-handler"
import contactModel from "../models/contactModel.js";

// @desc Get all contacts 
// @route GET /api/v1/contacts
// @access private
export const getContects = asyncHandler(async (req, res)=>{
    const contact = await contactModel.find({user_id: req.user.id})
    res.status(200).json(contact)
});

// @desc Post contacts 
// @route POST /api/v1/contacts
// @access private
export const postContect = asyncHandler(async (req, res)=>{
    console.log("The body coming form post is: ", req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required !");        
    }
    const create = await contactModel.create({
        name, email, phone
    })
    res.status(200).json({message: 'Create contact.', status: create})
});

// @desc Get contact
// @route GET /api/v1/contacts/:id
// @access private
export const getOneContact = asyncHandler(async (req, res)=>{
    const oneContact = await contactModel.findById(req.params.id)
    if (!oneContact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({message: `success`, contact: oneContact})
});

// @desc Put contact
// @route PUT /api/v1/contacts/:id
// @access private
export const putContact = asyncHandler(async (req, res)=>{
    const oneContact = await contactModel.findById(req.params.id)
    if (!oneContact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await contactModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({message: `success`, updatedContact: updateContact})
});

// @desc Delete contact
// @route Delete /api/v1/contacts/:id
// @access private
export const deleteContact = asyncHandler(async (req, res)=>{
    const contact = await contactModel.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");        
    }
    const deleteOne = await contactModel.deleteOne({ _id: req.params.id })
    res.status(200).json({message: `success`, deleted_contact: deleteOne})
});