import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchableContactList from './SearchableContactList';
import { fetchContacts } from '../../../../redux/contacts/contactsActions';

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.contacts
});

const mapDispatchToProps = dispatch => ({
  contactsActions: bindActionCreators({ fetchContacts }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchableContactList);
