import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactForm from './ContactForm';
import { fetchPowers } from '../../../../redux/powers/powerActions';
import { fetchContact } from '../../../../redux/contacts/contactsActions';

const mapStateToProps = ({ contacts, powers }) => ({
  selectedContact: contacts.selectedContact,
  powers: powers.powers
});

const mapDispatchToProps = dispatch => ({
  powersActions: bindActionCreators({ fetchPowers }, dispatch),
  contactsActions: bindActionCreators({ fetchContact }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
