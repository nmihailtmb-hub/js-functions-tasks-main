const getGirlFriends = (users) => {
  const allFriends = users.map((user) => user.friends).flat();
  return allFriends.filter((friend) => friend.gender === 'female');
};

export default getGirlFriends;