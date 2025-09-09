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
      if (data < current.value) {
        prev = current;
        current = current.left;
      } else if (data > current.value) {
        prev = current;
        current = current.right;
      }
      // we have reached to the node to delete
      else {
        console.log(` Found ${current.value}. Deleting it now...`);
        if (current.left && current.right) {
          _deleteNodeWithBothChilds(current); // node with both children
        } else if (current.left || current.right) {
          _deleteSingleChildTree(current); // node with single children
        } else _deleteLeaf(current);
        break;
      }
    }

    function _deleteLeaf(node) {
      if (prev && prev.left === node) prev.left = null;
      else if (prev && prev.right === node) prev.right = null;
      else root = null;
    }

    function _deleteSingleChildTree(node) {
      const child = node.left ? node.left : node.right;
      if (!prev) root = child; // deleting root
      else if (prev.left === node) prev.left = child;
      else prev.right = child;
    }

    function _deleteNodeWithBothChilds(node) {
      let parentOfLeaf = node;
      let leaf = node.right;
      while (leaf.left) {
        parentOfLeaf = leaf;
        leaf = leaf.left;
      }
      node.value = leaf.value;
      if (parentOfLeaf.left === leaf) parentOfLeaf.left = leaf.right;
      else parentOfLeaf.right = leaf.right;
    }
  }
  // build a tree from a passed array
  function buildTree(array) {
    const arr = [...new Set(array.sort((a, b) => a - b))];

    function build(arr) {
      if (!arr.length) return null;
      const mid = Math.floor(arr.length / 2);
      const node = _Node(arr[mid]);
      node.left = build(arr.slice(0, mid));
      node.right = build(arr.slice(mid + 1));
      return node;
    }

    root = build(arr);
  }
  function prettyPrint(node = root) {
    // CREDITS TO ODINPROJECT
    if (!node) return;

    let levels = [],
      q = [{ n: node, d: 0 }];
    while (q.length) {
      let { n, d } = q.shift();
      if (!levels[d]) levels[d] = [];
      levels[d].push(n ? n.value : null);
      if (n) q.push({ n: n.left, d: d + 1 }, { n: n.right, d: d + 1 });
    }
    while (levels.length && levels[levels.length - 1].every((v) => v === null))
      levels.pop();
    let w = 2 ** levels.length * 2;

    console.log("─".repeat(w));

    levels.forEach((l, i) =>
      console.log(
        l
          .map((v) =>
            (v === null ? " " : v)
              .toString()
              .padStart(Math.floor(w / 2 ** (i + 1)), " ")
              .padEnd(Math.floor(w / 2 ** i), " ")
          )
          .join("")
      )
    );

    console.log("─".repeat(w));
  }

  return { insertItem, deleteItem, buildTree, prettyPrint };
}

let sample = BST();
let arr = [1, 2, 3, 4, 5, 6, 7];
sample.buildTree(arr);
sample.prettyPrint();
sample.deleteItem(4);
sample.prettyPrint();
