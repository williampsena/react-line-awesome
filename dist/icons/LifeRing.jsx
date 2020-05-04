import * as React from 'react';
function SvgLifeRing(props) {
    return (<svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c.336 0 .672.031 1 .063v3.03A7.049 7.049 0 0016 9c-.34 0-.672.047-1 .094V6.063A10.57 10.57 0 0116 6zm-3 .438v3.25A7.01 7.01 0 009.687 13H6.47A9.982 9.982 0 0113 6.437zm6 0A10.068 10.068 0 0125.563 13h-3.25A6.993 6.993 0 0019 9.687zM16 11c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zm-9.938 4h3A7.051 7.051 0 009 16c0 .34.047.672.094 1H6.063A10.57 10.57 0 016 16c0-.336.031-.672.063-1zm16.844 0h3.032c.03.328.062.664.062 1 0 .336-.031.672-.063 1h-3.03c.046-.328.093-.66.093-1 0-.34-.047-.672-.094-1zM6.438 19h3.25A6.993 6.993 0 0013 22.313v3.25A10.068 10.068 0 016.437 19zm15.875 0h3.25A10.068 10.068 0 0119 25.563v-3.25A6.993 6.993 0 0022.313 19zM15 22.906c.328.047.66.094 1 .094.34 0 .672-.047 1-.094v3.032A10.57 10.57 0 0116 26c-.336 0-.672-.031-1-.063z"/>
        </svg>);
}
export default SvgLifeRing;
