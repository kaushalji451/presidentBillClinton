const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    invitationFor: {
        type: String,
        required: true,
    },
    hostOrganization: {
        type: String,
        required: true,
    },
    hostWebsite: {
        type: String,
        required: true,
    },
    organizationDescription: {
        type: String,
        required: true,
    },
    contactName: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
    },
    contactPhone: {
        type: String,
        required: true,
    },
    eventTitle: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    mediaPresence: {
        type: String,
        required: true,
    },
    eventLocation: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    audienceDescription: {
        type: String,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model("Contact", ContactSchema);