import React, { useState, useEffect } from 'react';
import INDIA_STATES from '../components/IndiaState';
import US_STATES from "../components/UsState";
import CHINA_STATE from '../components/ChinaState';
import GERMANY_STATES from "../components/GermonyState";
import JAPAN_PREFECTURES from '../components/japanState';
const SchedulingForm = () => {
  const [formData, setFormData] = useState({
    invitationFor: '',
    hostOrganization: '',
    hostWebsite: '',
    organizationDescription: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    eventTitle: '',
    eventDate: '',
    mediaPresence: '',
    eventLocation: '',
    street: '',
    city: '',
    state: '',
    country: 'India',
    postalCode: '',
    audienceDescription: '',
    eventDescription: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.invitationFor) newErrors.invitationFor = 'Invitation for is required';
    if (!formData.hostOrganization) newErrors.hostOrganization = 'Host organization is required';
    if (!formData.organizationDescription) newErrors.organizationDescription = 'Organization description is required';
    if (!formData.contactName) newErrors.contactName = 'Contact name is required';
    if (!formData.contactEmail) {
      newErrors.contactEmail = 'Contact email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Contact email is invalid';
    }
    if (!formData.contactPhone) newErrors.contactPhone = 'Contact phone is required';
    if (!formData.eventTitle) newErrors.eventTitle = 'Event title is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.mediaPresence) newErrors.mediaPresence = 'Media presence is required';
    if (!formData.eventLocation) newErrors.eventLocation = 'Event location is required';
    if (!formData.street) newErrors.street = 'Street is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
    if (!formData.audienceDescription) newErrors.audienceDescription = 'Audience description is required';
    if (!formData.eventDescription) newErrors.eventDescription = 'Event description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {

      try {
        let data = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        });
        data = await data.json();
        if (data.message ==='data saved successfully') {
          setFormData({
            invitationFor: '',
            hostOrganization: '',
            hostWebsite: '',
            organizationDescription: '',
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            eventTitle: '',
            eventDate: '',
            mediaPresence: '',
            eventLocation: '',
            street: '',
            city: '',
            state: '',
            country: 'United States',
            postalCode: '',
            audienceDescription: '',
            eventDescription: '',
          });
        }
        setIsSubmitted(true);
      } catch (error) {
        alert(error.message);
      }
       window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          })
      // Reset logic can be added here if needed
    }
  };

  const [Country, setCountry] = useState("");
  useEffect(() => {
    if (formData.country != "") {
      setCountry(formData.country);
    }
  }, [formData]);


  return (
    <>
      <div
        className="min-h-screen bg-slate-700 py-12 px-4 sm:px-6 lg:px-8 pt-40 max-sm:pt-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-50">
              Please fill out this form to contact Alok A Tripathi to appear or speak at your event.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <p className="text-sm text-gray-500 mb-6">* required field</p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 rounded-md border border-green-200 text-green-800">
                  Thank you for your invitation! Your form has been submitted successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Invitation For */}
                <div className="mb-6">
                  <label htmlFor="invitationFor" className="block text-sm font-medium text-gray-700 mb-1">
                    Inviting for :
                  </label>
                  <select
                    id="invitationFor"
                    name="invitationFor"
                    value={formData.invitationFor}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.invitationFor ? 'border-red-500' : 'border-gray-300'
                      }`}
                  >
                    <option value="">- Select -</option>
                    <option value="Social Evtent">Social Evtent</option>
                    <option value="Personal Evtent">Personal Evtent</option>
                    <option value="Professional Evtent">Professional Evtent</option>
                    <option value="Religions Events">Religions Events</option>
                  </select>
                  {errors.invitationFor && <p className="mt-1 text-sm text-red-600">{errors.invitationFor}</p>}
                </div>

                {/* Host Organization Info */}
                <div className="mb-6">
                  <label htmlFor="hostOrganization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="hostOrganization"
                    name="hostOrganization"
                    value={formData.hostOrganization}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.hostOrganization ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.hostOrganization && <p className="mt-1 text-sm text-red-600">{errors.hostOrganization}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="hostWebsite" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Website
                  </label>
                  <input
                    type="url"
                    id="hostWebsite"
                    name="hostWebsite"
                    value={formData.hostWebsite}
                    onChange={handleChange}
                    placeholder="https://"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="organizationDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    About the Organization *
                  </label>
                  <textarea
                    id="organizationDescription"
                    name="organizationDescription"
                    rows="3"
                    value={formData.organizationDescription}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.organizationDescription ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.organizationDescription && <p className="mt-1 text-sm text-red-600">{errors.organizationDescription}</p>}
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.contactName ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.contactName && <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>}
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.contactEmail && <p className="mt-1 text-sm text-red-600">{errors.contactEmail}</p>}
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.contactPhone ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.contactPhone && <p className="mt-1 text-sm text-red-600">{errors.contactPhone}</p>}
                  </div>
                </div>

                {/* Event Information */}
                <div className="mb-6">
                  <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Name *
                  </label>
                  <input
                    type="text"
                    id="eventTitle"
                    name="eventTitle"
                    value={formData.eventTitle}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.eventTitle ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.eventTitle && <p className="mt-1 text-sm text-red-600">{errors.eventTitle}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Event *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.eventDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.eventDate && <p className="mt-1 text-sm text-red-600">{errors.eventDate}</p>}
                  </div>
                  <div>
                    <label htmlFor="mediaPresence" className="block text-sm font-medium text-gray-700 mb-1">
                      Will media be present? *
                    </label>
                    <select
                      id="mediaPresence"
                      name="mediaPresence"
                      value={formData.mediaPresence}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.mediaPresence ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                      <option value="">- Select -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {errors.mediaPresence && <p className="mt-1 text-sm text-red-600">{errors.mediaPresence}</p>}
                  </div>
                </div>

                {/* Event Location */}
                <div className="mb-6">
                  <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Venue Name *
                  </label>
                  <input
                    type="text"
                    id="eventLocation"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.eventLocation ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.eventLocation && <p className="mt-1 text-sm text-red-600">{errors.eventLocation}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                    Street *
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.street ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.street && <p className="mt-1 text-sm text-red-600">{errors.street}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="China">China</option>
                      <option value="Germany">Germany</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.state ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                      {Country == "India" && INDIA_STATES.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      )) || Country == "United States" && US_STATES.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      )) || Country == "China" && CHINA_STATE.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      )) || Country == "Germany" && GERMANY_STATES.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      )) || Country == "Japan" && JAPAN_PREFECTURES.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}

                    </select>
                    {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.postalCode ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>}
                </div>

                {/* Event Details */}
                <div className="mb-6">
                  <label htmlFor="audienceDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Audience and Notable Invitees (Include Estimated Number of Attendees) *
                  </label>
                  <textarea
                    id="audienceDescription"
                    name="audienceDescription"
                    rows="3"
                    value={formData.audienceDescription}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.audienceDescription ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.audienceDescription && <p className="mt-1 text-sm text-red-600">{errors.audienceDescription}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Description of the Event *
                  </label>
                  <textarea
                    id="eventDescription"
                    name="eventDescription"
                    rows="5"
                    value={formData.eventDescription}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${errors.eventDescription ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.eventDescription && <p className="mt-1 text-sm text-red-600">{errors.eventDescription}</p>}
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SchedulingForm;