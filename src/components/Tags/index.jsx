import React from 'react';
import './Tags.css';

function Tags(props) {
  const tags = props.tags;
  let tagsItems = null;

  if (Array.isArray(tags)) {
    tagsItems = tags.map((item) => (
      <p key={item} className='tag'>
        {item}
      </p>
    ));
  }

  return <div className="tags">{tagsItems}</div>;
}

export default Tags;