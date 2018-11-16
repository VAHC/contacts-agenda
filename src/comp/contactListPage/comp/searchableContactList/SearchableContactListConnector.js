import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchableContactList from './SearchableContactList';
import { fetchContacts, fetchContact } from '../../../../redux/contacts/contactsActions';

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.contacts
});

const mapDispatchToProps = dispatch => ({
  contactsActions: bindActionCreators({
    fetchContacts,
    fetchContact
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchableContactList);
