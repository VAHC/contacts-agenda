import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchableContactList from './SearchableContactList';
import { fetchContacts } from '../../../../redux/contacts/contactsActions';

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts
});

const mapDispatchToProps = dispatch => ({
  contactsActions: bindActionCreators({ fetchContacts }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchableContactList);
