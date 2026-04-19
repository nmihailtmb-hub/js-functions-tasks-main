const getChildren = (users) => {
  const childrenArrays = users.map((user) => user.children);
  return childrenArrays.flat();
};

export default getChildren;