var fullList = [];

function list(num) {
  fullList.push(num);
  return fullList;
}

function sortList() {
  return fullList.sort(function(a,b) {
    return a-b;
  });
}

module.exports = {
  list: list,
  sortList: sortList
};


