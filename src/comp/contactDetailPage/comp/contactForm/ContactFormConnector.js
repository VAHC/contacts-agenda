import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { bindActionCreators } from 'redux';
import { fetchContact } from '../../../../redux/contacts/contactsActions';
import { fetchPowers } from '../../../../redux/powers/powersActions';

const mstp = ({ contacts, powers }) => ({
  contact: contacts.selectedContact,
  powers: powers.powers
});

const mdtp = dispatch => ({
  contactsActions: bindActionCreators({ fetchContact }, dispatch),
  powersActions: bindActionCreators({ fetchPowers }, dispatch)
});

export default connect(mstp, mdtp)(ContactForm);
