export interface Product {
    complete: boolean;
    id: number;
    name: string;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
export interface TodoformProps {
    formvalue: {
        name: string;
    };
    edit: number | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export interface TodolistProps {
    productlist: Product[];
    manageButton: Product | null;
    setmanageButton: React.Dispatch<React.SetStateAction<Product | null>>;
    handleEdit: (product: Product) => void;
    
}
export interface TodoitemProps {
    product: Product;
    manageButton: Product | null;
    setmanageButton: React.Dispatch<React.SetStateAction<Product | null>>;
    handleEdit: (product: Product) => void;
}
export interface Todosate {
    counter: number;
    completeCount: number;
}
