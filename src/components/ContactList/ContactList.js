import { StyledList, ContactListButton } from './ContactList.styled';
export const ContactList = ({ items, onDelete }) => {
  return (
    <StyledList>
      {items.map(item => (
        <li key={item.id}>
          {item.name}: {item.number}
          <ContactListButton type="button" onClick={() => onDelete(item.id)}>
            Delete
          </ContactListButton>
        </li>
      ))}
    </StyledList>
  );
};
