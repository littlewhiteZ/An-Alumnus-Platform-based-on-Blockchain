import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
    return (
        <Menu inverted pointing style={{ borderRadius: '0px' }}>
                 
                <a className="item" style={{
                    backgroundColor: '#1E7ACA',
                    padding: '15px',
                    fontWeight: 'bold',
                    color: '#FFF'
                }}>
                    NCU coin
                </a>

            <Menu.Menu >
            <Link route="/departments/index">
                <a className="item">
                    校友
                </a>
            </Link>

            <Link route="/manage/index">
                <a className="item">
                    學校
                </a>
            </Link>
            </Menu.Menu>
        </Menu>
    );
}