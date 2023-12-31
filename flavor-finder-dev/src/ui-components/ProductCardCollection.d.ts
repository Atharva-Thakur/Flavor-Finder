/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ProductCardProps } from "./ProductCard";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCardCollectionOverridesProps = {
    ProductCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    ProductCard?: ProductCardProps;
} & EscapeHatchProps;
export declare type ProductCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ProductCardProps;
} & {
    overrides?: ProductCardCollectionOverridesProps | undefined | null;
}>;
export default function ProductCardCollection(props: ProductCardCollectionProps): React.ReactElement;
