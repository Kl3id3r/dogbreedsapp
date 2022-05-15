// @Vendors
import { useEffect, useState } from 'react'

// @Types
import { IBreadcrumbsProps } from '../types/BreadcrumbType';

/**
 * Gestionar migajas de pan
 * @function useBreadcrumbs
 * @param props: {IBreadcrumbsProps}
 * @returns 
 */
const useBreadcrumbs = (props: IBreadcrumbsProps) => {
    const [current, setCurrent] = useState('');

    return {
        current,
    }
}

export default useBreadcrumbs;