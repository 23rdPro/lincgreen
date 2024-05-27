"use client";
import React from 'react';
import { createClient as voidClient } from 'contentful-management';

type EntryType = {
  name?: String,
  email?: String,
  subject?: String,
  message?: String
};
const Form = ({ children, env }: { children: React.ReactNode, env: any}) => {
  const [spaceId, token] = env
  const [entryData, setEntryData] = React.useState<EntryType>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isPublished, setIsPublished] = React.useState(false); 
  const [errorMessage, setErrorMessage] = React.useState('');
  const onFieldChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setEntryData((data: any) => ({
      ...data,
      [name]: value
    }));
  };
  async function postEntry(e: React.FormEvent, data: EntryType) {
    e.preventDefault()
    setIsSubmitting(true);
    const client = voidClient({accessToken: token})
    try {
      const space = await client.getSpace(spaceId)
      const environment = await space.getEnvironment('master')
      const entry = await environment.createEntry("lincgreenContacts", {
        fields: {
          name: { 'en-US': data.name },
          email: { 'en-US': data.email },
          subject: { 'en-US': data.subject },
          message: { 'en-US': data.message }
        }
      })
      await entry.publish()
      setTimeout(() => {
        setIsPublished(true);
        setIsSubmitting(false);
        setErrorMessage('');
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        setErrorMessage("Please complete all fields with appropriate data")
        setIsSubmitting(false);
      }, 1000);
      console.error(error)
    }
  };
  return (
    <form 
      role="form" 
      className="php-email-form" 
      onSubmit={async (e) => await postEntry(e, entryData)}
    >
      {React.cloneElement(children as React.ReactElement<any>, { entryData, onFieldChange })}
      <div className="my-3">
        {isSubmitting && <div className="loading">Loading...</div>}
        {!isSubmitting && errorMessage && <div className="error-message">{errorMessage}</div>}
        {!isSubmitting && isPublished && <div className="sent-message">Your message has been sent. Thank you!</div>}
      </div>
      <div className="text-center"><button type="submit" disabled={isPublished}>Send Message</button></div>
    </form>
  )
};

export default Form;