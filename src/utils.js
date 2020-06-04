import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function mapToCssModules(className='', cssModule = '')
{    
    if(cssModule) return className;
    let classNm = className.split(' ').map(c=>cssModule[c] || c).join(' ');
    
    return classNm;
}