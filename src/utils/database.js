// LocalStorage Database Mock

const initializeDB = () => {
  if (!localStorage.getItem('doctors')) localStorage.setItem('doctors', JSON.stringify([]));
  if (!localStorage.getItem('patients')) localStorage.setItem('patients', JSON.stringify([]));
  if (!localStorage.getItem('receptionists')) localStorage.setItem('receptionists', JSON.stringify([]));
  if (!localStorage.getItem('workers')) localStorage.setItem('workers', JSON.stringify([]));
  
  // Dummy admin credentials
  if (!localStorage.getItem('admins')) {
    localStorage.setItem('admins', JSON.stringify([{ username: 'admin', password: 'password123' }]));
  }
};

initializeDB();

export const getItems = (table) => {
  return JSON.parse(localStorage.getItem(table) || '[]');
};

export const addItem = (table, item) => {
  const items = getItems(table);
  // Auto-increment ID if not present
  if (!item.id) {
    item.id = items.length > 0 ? Math.max(...items.map(i => parseInt(i.id) || 0)) + 1 : 1;
  }
  items.push(item);
  localStorage.setItem(table, JSON.stringify(items));
  return true;
};

export const updateItem = (table, id, updatedItem) => {
  let items = getItems(table);
  items = items.map(item => String(item.id) === String(id) ? { ...item, ...updatedItem } : item);
  localStorage.setItem(table, JSON.stringify(items));
  return true;
};

export const deleteItem = (table, id) => {
  let items = getItems(table);
  items = items.filter(item => String(item.id) !== String(id));
  localStorage.setItem(table, JSON.stringify(items));
  return true;
};
