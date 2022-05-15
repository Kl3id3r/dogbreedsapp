/**
 * Modelo para las entities soportadas por useBreadcrumbs
 * @type IEntities
 * @param label: {string} Nombre de la vista mostrado en pantalla
 * @param pathName: {string} Url de la vista mostrada en pantalla
 */
export type IEntities = {
    label: string;
    pathName: string;
}

/**
 * Props que recibe el hook useBreadcrumbs
 * @type IBreadcrumbsProps
 */
export type IBreadcrumbsProps = {
    entities: IEntities[]
}