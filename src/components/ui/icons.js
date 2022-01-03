import React, { Suspense } from 'react';
import { ActivityIndicator, Text } from 'react-native';

const components = {
    menu: React.lazy(() => import('../../assets/icons/menu.svg')),
    plus: React.lazy(() => import('../../assets/icons/plus.svg')),
    close: React.lazy(() => import('../../assets/icons/close.svg')),
    delete: React.lazy(() => import('../../assets/icons/delete.svg')),
};

const RenderIcon = ({ fill, icon, style, width, height, onPress }) => {
    const props = {
        width,
        height,
        fill,
        onPress,
    };
    const styles = { width: '100%', height: '100%' };
    const TagName = components[icon];

    if (TagName) {
        return (
            <Suspense fallback={<ActivityIndicator size="small" color="#888888" />}>
                <TagName {...props} style={{ ...styles, ...style }} />
            </Suspense>
        );
    }
    return null;
};

const AppIcon = (props) => <RenderIcon {...props} />;

AppIcon.defaultProps = {
    style: {},
    fill: null,
    width: null,
    height: null,
    icon: 'noIcon',
    onPress: null,
};

export default AppIcon;
