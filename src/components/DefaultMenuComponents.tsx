import React from 'react';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { DefaultMenuItemProps, DefaultMobileSubmenuProps, DefaultSubMenuItemProps, DefaultToggleProps, DefaultTooltipProps, MenuItem } from '../types/menu';
import { PortaledSubmenu } from './PortaledSubmenu';

export const DefaultMenuItem = ({
    item,
    isSelected,
    onClick,
    isCollapsed,
    level,
    isMobile,
    className,
    activeClassName,
    iconClassName,
    labelClassName,
    subMenuItemClassName,
}: DefaultMenuItemProps) => {
    const baseClasses = `${isMobile && level === 0 ? 'flex-col items-center' : 'flex flex-row'
        } ${className} ${subMenuItemClassName} ${isSelected ? activeClassName : ''}`;

    return (
        <Link
            to={item.path}
            onClick={onClick}
            className={baseClasses}
        >
            {item.icon && React.createElement(item.icon, { className: iconClassName })}
            {(!isCollapsed || isMobile) && (
                <span className={labelClassName}>
                    {item.label}
                </span>
            )}
        </Link>
    );
};

export const DefaultSubMenuItem = ({
    item,
    selectedSubItem,
    onSubItemClick,
    isCollapsed,
    level,
    isMobile,
    className,
    activeClassName,
    iconClassName,
    labelClassName,
    subMenuItemClassName,
    subMenuWrapperClassName,
}: DefaultSubMenuItemProps) => {

    return (
        <div className={subMenuWrapperClassName}>
            {item.subItems?.map((subItem) => (
                <DefaultMenuItem
                    item={subItem}
                    isSelected={selectedSubItem === subItem.label}
                    onClick={() => onSubItemClick(item, subItem)}
                    isCollapsed={isCollapsed}
                    level={level}
                    isMobile={isMobile}
                    className={className}
                    activeClassName={activeClassName}
                    iconClassName={iconClassName}
                    labelClassName={labelClassName}
                    subMenuItemClassName={subMenuItemClassName}
                />
            ))}
        </div>
    );
};

export const DefaultTooltip = ({
    item,
    selectedSubItem,
    onSubItemClick,
    subMenuWrapperClassName,
    className,
    itemClassName,
    activeClassName,
}: DefaultTooltipProps) => {
    if (item.subItems?.length) {
        return (
            <div className={subMenuWrapperClassName}>
                {item.subItems?.map((subItem: MenuItem) => (
                    <div
                        key={subItem.label}
                        className={`${itemClassName} ${selectedSubItem === subItem.label && activeClassName}`}
                    >
                        <DefaultMenuItem
                            item={subItem}
                            isSelected={selectedSubItem === subItem.label}
                            onClick={() => onSubItemClick(item, subItem)}
                            isCollapsed={false}
                            level={1}
                            isMobile={false}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={className}>
            {item.label}
            <svg
                className="absolute -left-2 top-1/2 transform -translate-y-1/2 fill-blue-500"
                width="10"
                height="10"
                viewBox="0 0 10 10"
            >
                <polygon points="10,0 0,5 10,10" />
            </svg>
        </div>
    );
};



export const DefaultToggle = ({
    isCollapsed,
    toggleMenu,
    className,
    iconClassName,
}: DefaultToggleProps) => {
    return (
        <button onClick={toggleMenu} className={className}>
            {isCollapsed ? (
                <MenuIcon className={iconClassName} />
            ) : (
                <MenuOpenIcon className={iconClassName} />
            )}
        </button>
    );
};

export const DefaultMobileSubmenu = ({
    item,
    selectedSubItem,
    onClose,
    onSubItemClick,
    subMenuItemClassName,
    activeClassName,
    backdropClassName,
    contentClassName,
    headerClassName,
    closeButtonClassName,
}: DefaultMobileSubmenuProps) => {
    return (
        <PortaledSubmenu>
            <div className={backdropClassName} onClick={onClose} />
            <div className={contentClassName}>
                <div className={headerClassName}>
                    <span>{item.label}</span>
                    <button onClick={onClose} className={closeButtonClassName}>
                        Close
                    </button>
                </div>
                <div>
                    {item.subItems?.map((subItem) => (
                        <DefaultMenuItem
                            key={subItem.label}
                            item={subItem}
                            isSelected={selectedSubItem === subItem.label}
                            onClick={() => onSubItemClick(item, subItem)}
                            isCollapsed={false}
                            level={1}
                            isMobile={true}
                            subMenuItemClassName={subMenuItemClassName}
                            activeClassName={activeClassName}
                        />
                    ))}
                </div>
            </div>
        </PortaledSubmenu>
    );
};