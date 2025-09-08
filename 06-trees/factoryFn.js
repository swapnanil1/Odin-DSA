function BST() {
  // init
  let root = null;
  let size = 0;
  let level = 0;
  // create node
  function _Node(value) {
    return {
      value,
      left: null,
      right: null,
    };
  }
  // insert node
  function insertItem(data) {
    let current = root;
    if (current)
      // if root node preset
      while (current) {
        if (current.value < data) {
          current = current.left ? current.left : (current.left = _Node(data));
        } else if (current.value > data) {
          current = current.right
            ? current.right
            : (current.right = _Node(data));
        } else {
          console.log("Value already added");
        }
      }
    else root = _Node(data); //root node absent ; create one
  }
  // delete node
  function deleteItem(data) {
    let current = root;
    let prev = undefined;
    while (current) {
      if (current.value < data) {
        if (current.left) {
          prev = current;
          current = current.left;
        } else break;
      } else if (current.value > data) {
        if (current.right) {
          prev = current;
          current = current.right;
        } else break;
      } // we have reached to the node to delete
      else {
        if (current.left && current.right) {
          _deleteNodeWithBothChilds(current); // node with both children
        } else if (current.left || current.right) {
          _deleteSingleChildTree(current); // node with single children
        } else _deleteLeaf(current);
      }
    }
    function _deleteLeaf(node) {
      //1
      node = null;
    }
    function _deleteSingleChildTree(node) {
      //2
      if (node.left) {
        prev.left === node ? (prev.left = node.left) : (prev.right = node.left);
      } else {
        prev.left === node
          ? (prev.left = node.right)
          : (prev.right = node.right);
      }
    }
    function _deleteNodeWithBothChilds(node) {
      //3
      let leftSubTree = node.left;
      let rightSubTree = node.right;
      if (
        //base case
        !leftSubTree.left &&
        !leftSubTree.right &&
        !rightSubTree.left &&
        !rightSubTree.right
      ) {
        if (prev.left === node) {
          const newNode = _Node(leftSubTree.value);
          newNode.right = rightSubTree;
          prev.left = newNode;
        } else {
          const newNode = _Node(leftSubTree.value);
          newNode.right = rightSubTree;
          prev.right = newNode;
        }
      }
      // Maxiumum IN LEFT SUB TREE
      if (leftSubTree.right) {
        _deleteSingleChildTree(leftSubTree.right);
      }
    }
  }
  // build a tree from a passed array
  function buildTree(array) {
    array = array.sort((a, b) => a - b);
    const arr = [...new Set(array)];

    for (let i = 0; i < arr.length; i++) {
      insert(arr[i]);
    }
  }
}
