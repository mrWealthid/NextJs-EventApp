import React from 'react';

function ContentHeader(props: any) {
    return (
        <div className="text-lg px-3 font-medium mt-5">
            {props.children}</div>
    );
}

export default ContentHeader;