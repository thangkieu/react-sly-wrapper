# React Sly Wrapper #

React Wrapper Component for [Sly](http://darsa.in/sly/)

## How to use

#### Initialize
```javascript
import ReactSlyWrapper from 'react-sly-wrapper'

<ReactSlyWrapper>
    <div className="frame">
        <ul className="slidee">
            <li>Slide Item 1</li>  
            <li>Slide Item 2</li>  
            <li>Slide Item 3</li>  
        </ul>
    </div>
</ReactSlyWrapper>
```

#### Sly `configurations`
```javascript
// Default options
const options = {
	horizontal: 1,
	  itemNav: 'basic',
  	speed: 300,
	mouseDragging: 1,
  	touchDragging: 1,
  	smart: 1
};

<ReactSlyWrapper options={options} />
```

##### Note
The document is still updating, please visit [Sly Document page](https://github.com/darsain/sly/tree/master/docs) for more information about `Sly.js`