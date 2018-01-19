const Node = require("./Node");
const Queue = require("./Queue");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (!this.root) {
      this.root = new Node(data);
    } else {
      let currentNode = this.root;

      while (true) {
        if (data <= currentNode.data) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = new Node(data);
            break;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = new Node(data);
            break;
          }
        }
      }
    }
  }

  dfs(cb, node = this.root) {
	if(!node)return;
	cb(node.data)
	this.dfs(cb, node.left)
	this.dfs(cb, node.right)
  }


  bfs(cb, node = this.root) {
    let arr = [node];
    while (arr.length > 0) {
      let curr = arr.shift();
      cb(curr.data);
      if (curr.left) {
        arr.push(curr.left);
      }
      if (curr.right) {
        arr.push(curr.right);
      }
    }
  }
}

module.exports = BinarySearchTree;
