export interface IColumn<TDto> {
    fieldName: Extract<keyof TDto, string>;
    text: string;
    customCellRenderer?: (value: any, column: IColumn<any>) => JSX.Element;
    filterControl?: JSX.Element;
    isSortable?: boolean;
}