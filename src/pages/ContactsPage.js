import { Section } from 'components/Section/Section';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';

export default function Contact() {
  return (
    <>
      <ContactForm />

      <Section>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
