const messages = [

];

const getAll = () => {
  return messages;
};

const create = (newMessage) => {
  messages.push(newMessage);
};

module.exports = {
  getAll,
  create
}