"use client";

import React from 'react';


const ContactForm = ({ entryData, onFieldChange }: any) => {
  const entry = {}
  return ( 
    <>
      <div className="row">
        <div className="col-md-6 form-group">
          <input 
            onChange={onFieldChange} 
            type="text" 
            name="name" 
            value={entryData.name || ''} 
            className="form-control" 
            id="name" 
            placeholder="Your Name" required 
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input 
            onChange={onFieldChange} 
            value={entryData.email || ''} 
            type="email" 
            className="form-control" 
            name="email" 
            id="email" 
            placeholder="Your Email" 
            required 
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input 
          onChange={onFieldChange} 
          type="text" 
          value={entryData.subject || ''} 
          className="form-control" 
          name="subject" 
          id="subject" 
          placeholder="Subject" required 
        />
      </div>
      <div className="form-group mt-3">
        <textarea 
          onChange={onFieldChange} 
          value={entryData.message || ''} 
          className="form-control" 
          name="message" 
          rows={7} 
          placeholder="Message" 
          required></textarea>
      </div>
      
      
    </>
  )
};

export default ContactForm;