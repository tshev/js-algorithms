function swap(a, i, j) {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

function reverse(a, first, last) {
  last -= 1;
  while (first < last) {
    swap(a, first, last)
    ++first;
    --last;
  }
}

function rotate(a, first, middle, last) {
  reverse(a, first, middle);
  reverse(a, middle, last);
  reverse(a, first, last);
}

class RandomAccessIterator {
  constructor(array, i) {
    this.array = array;
    this.i = i;
  }

  successor() {
    this.i += 1;
  }

  advance(n) {
    this.i += n;
  }

  getValue() {
    return this.array[this.i];
  }

  setValue(value) {
    this.array[this.i];
  }
};

function lowerBoundMinified(a, val) {
  let first = a.first;
  let last = a.length;
  while (first != last) {
    const m = first + (last - first) / 2;
    if (a[m] < val) {
      first = m + 1;
    } else {
      last = m;
    }
  }
  return first;
}


function lowerBound(a, first, last, val, cmp) {
  while (first != last) {
    const m = first + (last - first) / 2;
    if (cmp(a[m], val)) {
      first = m + 1;
    } else {
      last = m;
    }
  }
  return first;
}

module.exports = {
  lowerBound: lowerBound,
  reverse: reverse
};
