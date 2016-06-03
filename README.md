# s9s-namespace
Simplest ES6 namespace class.

## Installation
```
npm install --save s9s-namespace
```

## Usage
##### Main.js
```javascript
'use strict';

const namespace = require('s9s-namespace')(__dirname);
const ClassB = namespace.requireOnce('Lib/Subs/ClassB');
const b = new ClassB();

console.log(b.getName());
```

##### Lib/ClassA.js
```javascript
'use strict';

exports = module.exports = (namespace) => {
  const namespace = require('s9s-namespace')(__dirname);
  
  return class ClassA {
    constructor(){
      this.name = 'ClassA';
    }
    getName(){
      return this.name;
    }
  }
};
```

##### Lib/Subs/ClassB.js
```javascript
'use strict';

exports = module.exports = (namespace) => {
  const ClassA = namespace.requireOnce('Lib/ClassA');
  
  return class ClassB extends ClassA {
    constructor(){
      super();
      this.name = 'ClassB';
    }
  }
};
```

## Methods
##### require(file):*
Requires a file/class by path.

##### requireOnce(file):*
Requires a file/class by path only once and stores it in cache.
